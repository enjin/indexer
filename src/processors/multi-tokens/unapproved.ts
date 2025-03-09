import { throwError } from '../../utils/errors'
import { CollectionAccount, Event as EventModel, TokenAccount } from '../../model'
import { Sns } from '../../utils/sns'
import * as mappings from './../../mappings'
import { BlockHeader, CommonContext, EventItem } from '../../contexts'
import { encodeAddress } from '../../utils/tools'

export async function unapproved(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = mappings.multiTokens.events.unapproved(item)

    if (skipSave) return mappings.multiTokens.events.unapprovedEventModel(item, data)

    const address = data.owner

    if (data.tokenId !== undefined) {
        const tokenAccount = await ctx.store.findOne<TokenAccount>(TokenAccount, {
            where: { id: `${address}-${data.collectionId}-${data.tokenId}` },
        })

        if (tokenAccount) {
            tokenAccount.approvals = tokenAccount.approvals?.filter(
                (approval) => approval.accountId !== encodeAddress(data.operator)
            )
            tokenAccount.updatedAt = new Date(block.timestamp ?? 0)

            await ctx.store.save(tokenAccount)
        } else {
            throwError(
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
                (approval) => approval.accountId !== encodeAddress(data.operator)
            )
            collectionAccount.updatedAt = new Date(block.timestamp ?? 0)

            await ctx.store.save(collectionAccount)
        } else {
            throwError(`[Unapproved] We have not found collection account ${data.collectionId}-${address}.`, 'fatal')
        }
    }

    if (item.extrinsic) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                kind: data.tokenId !== undefined ? 'token' : 'collection',
                address,
                operator: data.operator,
                collectionId: data.collectionId.toString(),
                tokenId: data.tokenId ?? null,
                token: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    return mappings.multiTokens.events.unapprovedEventModel(item, data)
}
