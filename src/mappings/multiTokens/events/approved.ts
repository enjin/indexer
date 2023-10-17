import { u8aToHex } from '@polkadot/util'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import {
    CollectionAccount,
    TokenAccount,
    TokenApproval,
    CollectionApproval,
    Event as EventModel,
    MultiTokensApproved,
    Extrinsic,
} from '../../../model'
import { encodeId } from '../../../common/tools'
import { Event } from '../../../types/generated/support'
import { MultiTokensApprovedEvent } from '../../../types/generated/events'
import { CommonContext } from '../../types/contexts'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new MultiTokensApprovedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }

    throw new UnknownVersionError(data.constructor.name)
}

function getEvent(
    item: EventItem<'MultiTokens.Approved', { event: { args: true; extrinsic: true } }>,
    data: ReturnType<typeof getEventData>
) {
    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
        data: new MultiTokensApproved({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            owner: u8aToHex(data.owner),
            operator: u8aToHex(data.operator),
            amount: data.amount,
            expiration: data.expiration,
        }),
    })
}

export async function approved(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.Approved', { event: { args: true; extrinsic: true } }>,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    if (skipSave) return getEvent(item, data)

    const address = u8aToHex(data.owner)

    if (data.tokenId !== undefined) {
        const tokenAccount = await ctx.store.findOneOrFail<TokenAccount>(TokenAccount, {
            where: { id: `${address}-${data.collectionId}-${data.tokenId}` },
        })

        const approvals = tokenAccount.approvals ?? []
        approvals.push(
            new TokenApproval({
                account: encodeId(data.operator),
                amount: data.amount,
                expiration: data.expiration,
            })
        )

        tokenAccount.approvals = approvals
        tokenAccount.updatedAt = new Date(block.timestamp)
        await ctx.store.save(tokenAccount)
    } else {
        const collectionAccount = await ctx.store.findOneOrFail<CollectionAccount>(CollectionAccount, {
            where: { id: `${data.collectionId}-${address}` },
        })

        const approvals = collectionAccount.approvals ?? []
        approvals.push(
            new CollectionApproval({
                account: encodeId(data.operator),
                expiration: data.expiration,
            })
        )

        collectionAccount.approvals = approvals
        collectionAccount.updatedAt = new Date(block.timestamp)
        await ctx.store.save(collectionAccount)
    }

    return getEvent(item, data)
}
