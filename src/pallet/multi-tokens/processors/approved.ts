import { throwFatalError } from '~/util/errors'
import { CollectionAccount, CollectionApproval, TokenAccount, TokenApproval } from '~/model'
import { SnsEvent } from '~/util/sns'
import { CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import { encodeAddress } from '~/util/tools'
import { EventHandlerResult } from '~/processor.handler'

/**
 * Approvals are indexed with the SS58 operator, but the genesis/warp import keeps the raw public key; match either.
 */
export function isOperator(accountId: string, operator: string): boolean {
    return accountId === operator || accountId === encodeAddress(operator)
}

export async function approved(ctx: CommonContext, item: EventItem, skipSave: boolean): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.approved(item)

    if (skipSave) return [mappings.multiTokens.events.approvedEventModel(item, data), undefined]

    const address = data.owner

    if (data.tokenId !== undefined) {
        const tokenAccount = await ctx.store.findOne<TokenAccount>(TokenAccount, {
            where: { id: `${address}-${data.collectionId}-${data.tokenId}` },
        })

        if (!tokenAccount) {
            throwFatalError(
                `[Approved] We have not found token account ${address}-${data.collectionId}-${data.tokenId}.`
            )
            return [mappings.multiTokens.events.approvedEventModel(item, data), undefined]
        }

        // The chain keeps one approval per operator: approving again replaces it.
        tokenAccount.approvals = [
            ...(tokenAccount.approvals ?? []).filter((approval) => !isOperator(approval.accountId, data.operator)),
            new TokenApproval({
                accountId: encodeAddress(data.operator),
                amount: data.amount,
                expiration: data.expiration,
            }),
        ]
        tokenAccount.updatedAt = new Date(item.block.timestamp ?? 0)
        await ctx.store.save(tokenAccount)
    } else {
        const collectionAccount = await ctx.store.findOne<CollectionAccount>(CollectionAccount, {
            where: { id: `${data.collectionId}-${address}` },
        })

        if (!collectionAccount) {
            throwFatalError(`[Approved] We have not found collection account ${data.collectionId}-${address}.`)
            return [mappings.multiTokens.events.approvedEventModel(item, data), undefined]
        }

        collectionAccount.approvals = [
            ...(collectionAccount.approvals ?? []).filter((approval) => !isOperator(approval.accountId, data.operator)),
            new CollectionApproval({
                accountId: encodeAddress(data.operator),
                expiration: data.expiration,
            }),
        ]
        collectionAccount.updatedAt = new Date(item.block.timestamp ?? 0)
        await ctx.store.save(collectionAccount)
    }

    const snsEvent: SnsEvent = {
        id: item.id,
        name: item.name,
        body: {
            kind: data.tokenId !== undefined ? 'token' : 'collection',
            address,
            operator: data.operator,
            collectionId: data.collectionId.toString(),
            tokenId: data.tokenId ?? null,
            token: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
            extrinsic: item.extrinsic?.id,
        },
    }

    return [mappings.multiTokens.events.approvedEventModel(item, data), snsEvent]
}
