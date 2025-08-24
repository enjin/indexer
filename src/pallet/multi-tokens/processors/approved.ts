import { throwFatalError } from '~/util/errors'
import { CollectionAccount, CollectionApproval, Event as EventModel, TokenAccount, TokenApproval } from '~/model'
import { Sns } from '~/util/sns'
import { CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import { encodeAddress } from '~/util/tools'

export async function approved(
    ctx: CommonContext,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = mappings.multiTokens.events.approved(item)

    if (skipSave) return mappings.multiTokens.events.approvedEventModel(item, data)

    const address = data.owner

    if (data.tokenId !== undefined) {
        const tokenAccount = await ctx.store.findOne<TokenAccount>(TokenAccount, {
            where: { id: `${address}-${data.collectionId}-${data.tokenId}` },
        })

        if (!tokenAccount) {
            throwFatalError(
                `[Approved] We have not found token account ${address}-${data.collectionId}-${data.tokenId}.`
            )
            return mappings.multiTokens.events.approvedEventModel(item, data)
        }

        const approvals = tokenAccount.approvals ?? []
        approvals.push(
            new TokenApproval({
                accountId: encodeAddress(data.operator),
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
            throwFatalError(`[Approved] We have not found collection account ${data.collectionId}-${address}.`)
            return mappings.multiTokens.events.approvedEventModel(item, data)
        }

        const approvals = collectionAccount.approvals ?? []
        approvals.push(
            new CollectionApproval({
                accountId: encodeAddress(data.operator),
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
