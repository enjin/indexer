import { u8aToHex } from '@polkadot/util'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import * as Sentry from '@sentry/node'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensUnapprovedEvent } from '../../../types/generated/events'
import { CollectionAccount, Event as EventModel, Extrinsic, MultiTokensUnapproved, TokenAccount } from '../../../model'
import { encodeId } from '../../../common/tools'
import { CommonContext } from '../../types/contexts'
import { Event } from '../../../types/generated/support'

interface EventData {
    collectionId: bigint
    tokenId: bigint | undefined
    owner: Uint8Array
    operator: Uint8Array
}

function getEventData(ctx: CommonContext, event: Event): EventData {
    const data = new MultiTokensUnapprovedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getEvent(
    item: EventItem<'MultiTokens.Unapproved', { event: { args: true; extrinsic: true } }>,
    data: ReturnType<typeof getEventData>
) {
    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
        data: new MultiTokensUnapproved({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            owner: u8aToHex(data.owner),
            operator: u8aToHex(data.operator),
        }),
    })
}

export async function unapproved(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.Unapproved', { event: { args: true; extrinsic: true } }>,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    if (skipSave) return getEvent(item, data)

    const address = u8aToHex(data.owner)

    if (data.tokenId !== undefined) {
        const tokenAccount = await ctx.store.findOne<TokenAccount>(TokenAccount, {
            where: { id: `${address}-${data.collectionId}-${data.tokenId}` },
        })

        if (tokenAccount) {
            tokenAccount.approvals = tokenAccount.approvals?.filter((approval) => approval.account !== encodeId(data.operator))
            tokenAccount.updatedAt = new Date(block.timestamp)

            await ctx.store.save(tokenAccount)
        } else {
            Sentry.captureMessage(
                `[Unapproved] We have not found token account ${address}-${data.collectionId}-${data.tokenId}.`,
                'fatal'
            )
        }
    } else {
        const collectionAccount = await ctx.store.findOne<CollectionAccount>(CollectionAccount, {
            where: { id: `${data.collectionId}-${address}` },
        })

        if (collectionAccount) {
            collectionAccount.approvals = collectionAccount.approvals?.filter(
                (approval) => approval.account !== encodeId(data.operator)
            )
            collectionAccount.updatedAt = new Date(block.timestamp)

            await ctx.store.save(collectionAccount)
        } else {
            Sentry.captureMessage(`[Unapproved] We have not found collection account ${data.collectionId}-${address}.`, 'fatal')
        }
    }

    return getEvent(item, data)
}
