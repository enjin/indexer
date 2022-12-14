import { u8aToHex } from '@polkadot/util'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensUnapprovedEvent } from '../../../types/generated/events'
import { CollectionAccount, Event as EventModel, Extrinsic, MultiTokensUnapproved, TokenAccount } from '../../../model'
import { encodeId } from '../../../common/tools'
import { CommonHandlerContext } from '../../types/contexts'
import { Event } from '../../../types/generated/support'

interface EventData {
    collectionId: bigint
    tokenId: bigint | undefined
    owner: Uint8Array
    operator: Uint8Array
}

function getEventData(ctx: CommonHandlerContext, event: Event): EventData {
    const data = new MultiTokensUnapprovedEvent(ctx, event)

    if (data.isEfinityV2) {
        const { collectionId, tokenId, owner, operator } = data.asEfinityV2
        return {
            collectionId,
            tokenId,
            owner,
            operator,
        }
    }
    throw new UnknownVersionError(data.constructor.name)
}

export async function unapproved(
    ctx: CommonHandlerContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.Unapproved', { event: { args: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    const address = u8aToHex(data.owner)

    if (data.tokenId) {
        const tokenAccount = await ctx.store.findOneOrFail<TokenAccount>(TokenAccount, {
            where: { id: `${address}-${data.collectionId}-${data.tokenId}` },
        })

        tokenAccount.approvals = tokenAccount.approvals?.filter((approval) => approval.account !== encodeId(data.operator))
        tokenAccount.updatedAt = new Date(block.timestamp)

        await ctx.store.save(tokenAccount)
    } else {
        const collectionAccount = await ctx.store.findOneOrFail<CollectionAccount>(CollectionAccount, {
            where: { id: `${data.collectionId}-${address}` },
        })

        collectionAccount.approvals = collectionAccount.approvals?.filter(
            (approval) => approval.account !== encodeId(data.operator)
        )
        collectionAccount.updatedAt = new Date(block.timestamp)

        await ctx.store.save(collectionAccount)
    }

    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
        data: new MultiTokensUnapproved({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            owner: address,
            operator: u8aToHex(data.operator),
        }),
    })
}
