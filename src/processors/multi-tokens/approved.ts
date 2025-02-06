import { throwError } from '../../common/errors'
import {
    CollectionAccount,
    TokenAccount,
    TokenApproval,
    CollectionApproval,
    Event as EventModel,
    MultiTokensApproved,
    Extrinsic,
} from '../../model'
import { encodeId } from '../../common/tools'
import { Sns } from '../../common/sns'
import { CommonContext, BlockHeader, EventItem } from '../../common/types/contexts'
import * as mappings from './../../mappings'

export async function approved(ctx: CommonContext, item: EventItem, skipSave: boolean): Promise<EventModel | undefined> {
    const data = mappings.multiTokens.events.approved(item)
    if (!data) return undefined

    if (skipSave) return mappings.multiTokens.events.approvedEventModel(item, data)

    const address = data.owner

    if (data.tokenId !== undefined) {
        const tokenAccount = await ctx.store.findOne<TokenAccount>(TokenAccount, {
            where: { id: `${address}-${data.collectionId}-${data.tokenId}` },
        })

        if (!tokenAccount) {
            throwError(`[Approved] We have not found token account ${address}-${data.collectionId}-${data.tokenId}.`, 'fatal')
            return mappings.multiTokens.events.approvedEventModel(item, data)
        }

        const approvals = tokenAccount.approvals ?? []
        approvals.push(
            new TokenApproval({
                account: encodeId(data.operator),
                amount: data.amount,
                expiration: data.expiration,
            })
        )

        tokenAccount.approvals = approvals
        tokenAccount.updatedAt = new Date(item.block.timestamp ?? 0)
        await ctx.store.save(tokenAccount)
    } else {
        const collectionAccount = await ctx.store.findOne<CollectionAccount>(CollectionAccount, {
            where: { id: `${data.collectionId}-${address}` },
        })

        if (!collectionAccount) {
            throwError(`[Approved] We have not found collection account ${data.collectionId}-${address}.`, 'fatal')
            return mappings.multiTokens.events.approvedEventModel(item, data)
        }

        const approvals = collectionAccount.approvals ?? []
        approvals.push(
            new CollectionApproval({
                account: encodeId(data.operator),
                expiration: data.expiration,
            })
        )

        collectionAccount.approvals = approvals
        collectionAccount.updatedAt = new Date(item.block.timestamp ?? 0)
        await ctx.store.save(collectionAccount)
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

    return mappings.multiTokens.events.approvedEventModel(item, data)
}
