import { throwFatalError } from '~/util/errors'
import { Collection, CollectionAccount, Token, TokenAccount, TransferPolicy } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { SnsEvent } from '~/util/sns'
import * as mappings from '~/pallet/index'
import { match } from 'ts-pattern'
import { QueueUtils } from '~/queue'
import { EventHandlerResult } from '~/processor.handler'
import { Thaw } from '~/pallet/multi-tokens/events/types'
import { FreezeType, ThawType } from '~/pallet/common/types'

/** What a thaw applies to. Events before v1070 name it `freezeType`, later ones `thawType`. */
type ThawTarget = ThawType | Exclude<FreezeType, { __kind: 'Attribute' | 'TokenGroupAttribute' }>

/**
 * No Thawed event version carries an attribute target (attributes are thawed by their own events), so one is
 * reported like a missing entity instead of being applied to the whole collection.
 */
export function thawTarget(event: Thaw): ThawTarget | undefined {
    const target = event.thawType ?? event.freezeType
    if (target === undefined || target.__kind === 'Attribute' || target.__kind === 'TokenGroupAttribute') {
        throwFatalError(
            `[Thawed] Unsupported thaw target ${target?.__kind ?? 'none'} in collection ${event.collectionId}.`
        )
        return undefined
    }
    return target
}

/** Load an entity, apply `thaw` and save it. A missing entity is reported and yields `false`. */
async function thawStored<E extends { id: string }>(
    ctx: CommonContext,
    find: () => Promise<E | undefined>,
    missing: string,
    thaw: (entity: E) => void
): Promise<boolean> {
    const entity = await find()
    if (!entity) {
        throwFatalError(`[Thawed] We have not found ${missing}.`)
        return false
    }
    thaw(entity)
    await ctx.store.save(entity)
    return true
}

function thawEntity(ctx: CommonContext, block: Block, collectionId: bigint, target: ThawTarget): Promise<boolean> {
    const updatedAt = new Date(block.timestamp ?? 0)
    switch (target.__kind) {
        case 'TokenAccount': {
            const id = `${target.accountId}-${collectionId}-${target.tokenId}`
            return thawStored(
                ctx,
                () => ctx.store.findOne<TokenAccount>(TokenAccount, { where: { id } }),
                `token account ${id}`,
                (tokenAccount) => {
                    tokenAccount.isFrozen = false
                    tokenAccount.updatedAt = updatedAt
                }
            )
        }
        case 'CollectionAccount': {
            const id = `${collectionId}-${target.value}`
            return thawStored(
                ctx,
                () => ctx.store.findOne<CollectionAccount>(CollectionAccount, { where: { id } }),
                `collection account ${id}`,
                (collectionAccount) => {
                    collectionAccount.isFrozen = false
                    collectionAccount.updatedAt = updatedAt
                }
            )
        }
        case 'Token': {
            const id = `${collectionId}-${target.tokenId}`
            return thawStored(
                ctx,
                () => ctx.store.findOne<Token>(Token, { where: { id } }),
                `token ${id}`,
                (token) => {
                    token.isFrozen = false
                    token.freezeState = null
                }
            )
        }
        case 'Collection': {
            const id = collectionId.toString()
            return thawStored(
                ctx,
                () => ctx.store.findOne<Collection>(Collection, { where: { id } }),
                `collection ${id}`,
                (collection) => {
                    collection.transferPolicy = new TransferPolicy({ isFrozen: false })
                }
            )
        }
    }
}

function thawedSnsEvent(item: EventItem, extrinsicId: string, collectionId: bigint, target: ThawTarget): SnsEvent {
    const { address, tokenId } = match(target)
        .returnType<{ address: string | null; tokenId: bigint | null }>()
        .with({ __kind: 'CollectionAccount' }, (t) => ({ address: t.value, tokenId: null }))
        .with({ __kind: 'TokenAccount' }, (t) => ({ address: t.accountId, tokenId: t.tokenId }))
        .with({ __kind: 'Token' }, (t) => ({ address: null, tokenId: t.tokenId }))
        .with({ __kind: 'Collection' }, () => ({ address: null, tokenId: null }))
        .exhaustive()

    return {
        id: item.id,
        name: item.name,
        body: {
            kind: target,
            address,
            collectionId: collectionId.toString(),
            tokenId,
            token: tokenId !== null ? `${collectionId}-${tokenId}` : null,
            extrinsic: extrinsicId,
        },
    }
}

export async function thawed(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventHandlerResult> {
    const event: Thaw = mappings.multiTokens.events.thawed(item)
    const eventModel = mappings.multiTokens.events.thawedEventModel(item, event)

    if (skipSave) return [eventModel, undefined]

    const target = thawTarget(event)
    if (!target || !(await thawEntity(ctx, block, event.collectionId, target))) return [eventModel, undefined]

    const snsEvent = item.extrinsic ? thawedSnsEvent(item, item.extrinsic.id, event.collectionId, target) : undefined
    await QueueUtils.dispatchComputeStats(event.collectionId.toString())

    return [eventModel, snsEvent]
}
