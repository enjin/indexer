import { throwFatalError } from '~/util/errors'
import { Collection, CollectionAccount, Token, TokenAccount, TransferPolicy } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { SnsEvent } from '~/util/sns'
import * as mappings from '~/pallet/index'
import { match } from 'ts-pattern'
import { QueueUtils } from '~/queue'
import { EventHandlerResult } from '~/processor.handler'
import { Thaw } from '~/pallet/multi-tokens/events/types'

export async function thawed(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventHandlerResult> {
    const event: Thaw = mappings.multiTokens.events.thawed(item)

    if (skipSave) return [mappings.multiTokens.events.thawedEventModel(item, event), undefined]

    let snsEvent: SnsEvent | undefined = undefined

    const thawKind = event.freezeType?.__kind ?? event.thawType?.__kind

    if (thawKind === 'TokenAccount') {
        const tokenId =
            event.thawType?.__kind === 'TokenAccount'
                ? event.thawType.tokenId
                : event.freezeType?.__kind === 'TokenAccount'
                  ? event.freezeType.tokenId
                  : null
        const accountId =
            event.thawType?.__kind === 'TokenAccount'
                ? event.thawType.accountId
                : event.freezeType?.__kind === 'TokenAccount'
                  ? event.freezeType.accountId
                  : null
        const tokenAccount: TokenAccount | undefined = await ctx.store.findOne<TokenAccount>(TokenAccount, {
            where: { id: `${accountId}-${event.collectionId}-${tokenId}` },
        })

        if (!tokenAccount) {
            throwFatalError(`[Thawed] We have not found token account ${accountId}-${event.collectionId}-${tokenId}.`)
            return [mappings.multiTokens.events.thawedEventModel(item, event), undefined]
        }

        tokenAccount.isFrozen = false
        tokenAccount.updatedAt = new Date(block.timestamp ?? 0)
        await ctx.store.save(tokenAccount)
    } else if (thawKind === 'CollectionAccount') {
        const address =
            event.thawType?.__kind === 'CollectionAccount'
                ? event.thawType.value
                : event.freezeType?.__kind === 'CollectionAccount'
                  ? event.freezeType.value
                  : null
        const collectionAccount: CollectionAccount | undefined = await ctx.store.findOne<CollectionAccount>(
            CollectionAccount,
            {
                where: { id: `${event.collectionId}-${address}` },
            }
        )

        if (!collectionAccount) {
            throwFatalError(`[Thawed] We have not found collection account ${event.collectionId}-${address}.`)
            return [mappings.multiTokens.events.thawedEventModel(item, event), undefined]
        }

        collectionAccount.isFrozen = false
        collectionAccount.updatedAt = new Date(block.timestamp ?? 0)
        await ctx.store.save(collectionAccount)
    } else if (thawKind === 'Token') {
        const tokenId =
            event.thawType?.__kind === 'Token'
                ? event.thawType.tokenId
                : event.freezeType?.__kind === 'Token'
                  ? event.freezeType.tokenId
                  : null
        const token: Token | undefined = await ctx.store.findOne<Token>(Token, {
            where: { id: `${event.collectionId}-${tokenId}` },
        })

        if (!token) {
            throwFatalError(`[Thawed] We have not found collection account ${event.collectionId}-${tokenId}.`)
            return [mappings.multiTokens.events.thawedEventModel(item, event), undefined]
        }

        token.isFrozen = false
        token.freezeState = null
        await ctx.store.save(token)
    } else {
        const collection: Collection | undefined = await ctx.store.findOne<Collection>(Collection, {
            where: { id: event.collectionId.toString() },
        })

        if (!collection) {
            throwFatalError(`[Thawed] We have not found collection ${event.collectionId.toString()}.`)
            return [mappings.multiTokens.events.thawedEventModel(item, event), undefined]
        }

        collection.transferPolicy = new TransferPolicy({ isFrozen: false })
        await ctx.store.save(collection)
    }

    if (item.extrinsic) {
        const { address, tokenId } = match(event.freezeType)
            .returnType<{ address: string | null; tokenId: bigint | null }>()
            .with({ __kind: 'CollectionAccount' }, (t) => ({ address: t.value, tokenId: null }))
            .with({ __kind: 'TokenAccount' }, (t) => ({ address: t.accountId, tokenId: t.tokenId }))
            .with({ __kind: 'Token' }, (t) => ({ address: null, tokenId: t.tokenId }))
            .otherwise(() => ({ address: null, tokenId: null }))

        snsEvent = {
            id: item.id,
            name: item.name,
            body: {
                kind: event.freezeType,
                address: address,
                collectionId: event.collectionId.toString(),
                tokenId: tokenId,
                token: tokenId ? `${event.collectionId}-${tokenId}` : null,
                extrinsic: item.extrinsic.id,
            },
        }
    }

    await QueueUtils.dispatchComputeStats(event.collectionId.toString())

    return [mappings.multiTokens.events.thawedEventModel(item, event), snsEvent]
}
