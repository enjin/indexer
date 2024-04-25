import { UnknownVersionError, throwError } from '../../../common/errors'
import { events } from '../../../types/generated'
import { CollectionAccount, Event as EventModel, Extrinsic, MultiTokensUnapproved, TokenAccount } from '../../../model'
import { encodeId } from '../../../common/tools'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'

function getEventData(event: EventItem) {
    if (events.multiTokens.unapproved.matrixEnjinV603.is(event)) {
        return events.multiTokens.unapproved.matrixEnjinV603.decode(event)
    }
    throw new UnknownVersionError(events.multiTokens.unapproved.name)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: MultiTokensUnapproved.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
        data: new MultiTokensUnapproved({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            owner: data.owner,
            operator: data.operator,
        }),
    })
}

export async function unapproved(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = getEventData(item)
    if (!data) return undefined

    if (skipSave) return getEvent(item, data)

    const address = data.owner

    if (data.tokenId !== undefined) {
        const tokenAccount = await ctx.store.findOne<TokenAccount>(TokenAccount, {
            where: { id: `${address}-${data.collectionId}-${data.tokenId}` },
        })

        if (tokenAccount) {
            tokenAccount.approvals = tokenAccount.approvals?.filter((approval) => approval.account !== encodeId(data.operator))
            tokenAccount.updatedAt = new Date(block.timestamp ?? 0)

            await ctx.store.save(tokenAccount)
        } else {
            throwError(`[Unapproved] We have not found token account ${address}-${data.collectionId}-${data.tokenId}.`, 'fatal')
        }
    } else {
        const collectionAccount = await ctx.store.findOne<CollectionAccount>(CollectionAccount, {
            where: { id: `${data.collectionId}-${address}` },
        })

        if (collectionAccount) {
            collectionAccount.approvals = collectionAccount.approvals?.filter(
                (approval) => approval.account !== encodeId(data.operator)
            )
            collectionAccount.updatedAt = new Date(block.timestamp ?? 0)

            await ctx.store.save(collectionAccount)
        } else {
            throwError(`[Unapproved] We have not found collection account ${data.collectionId}-${address}.`, 'fatal')
        }
    }

    return getEvent(item, data)
}
