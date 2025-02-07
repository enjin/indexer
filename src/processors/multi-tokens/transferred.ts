import { throwError } from '../../common/errors'
import { AccountTokenEvent, Event as EventModel, Token, TokenAccount } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import { getOrCreateAccount } from '../../common/util/entities'
import { syncCollectionStats } from '../../jobs/collection-stats'
import { Sns } from '../../common/sns'
import * as mappings from './../../mappings'

export async function transferred(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
    skipSave: boolean
): Promise<[EventModel, AccountTokenEvent] | EventModel | undefined> {
    const data = mappings.multiTokens.events.transferred(item)

    const token = await ctx.store.findOne<Token>(Token, {
        where: { id: `${data.collectionId}-${data.tokenId}` },
    })

    if (skipSave) {
        await Promise.all([getOrCreateAccount(ctx, data.from), getOrCreateAccount(ctx, data.to)])

        return mappings.multiTokens.events.transferredEventModel(item, data, token)
    }

    if (!token) {
        throwError(`[Transferred] We have not found token ${data.collectionId}-${data.tokenId}.`, 'fatal')
        return mappings.multiTokens.events.transferredEventModel(item, data, token)
    }

    const fromAddress = data.from
    const toAddress = data.to

    const [fromTokenAccount, toTokenAccount] = await Promise.all([
        ctx.store.findOne<TokenAccount>(TokenAccount, {
            where: { id: `${fromAddress}-${data.collectionId}-${data.tokenId}` },
        }),
        ctx.store.findOne<TokenAccount>(TokenAccount, {
            where: { id: `${toAddress}-${data.collectionId}-${data.tokenId}` },
        }),
    ])

    if (fromTokenAccount) {
        fromTokenAccount.balance -= data.amount
        fromTokenAccount.totalBalance -= data.amount
        fromTokenAccount.updatedAt = new Date(block.timestamp ?? 0)
        await ctx.store.save(fromTokenAccount)
    } else {
        throwError(`[Transferred] We have not found token account ${fromAddress}-${data.collectionId}-${data.tokenId}.`, 'fatal')
    }

    if (toTokenAccount) {
        toTokenAccount.balance += data.amount
        toTokenAccount.totalBalance += data.amount
        toTokenAccount.updatedAt = new Date(block.timestamp ?? 0)
        await ctx.store.save(toTokenAccount)
    } else {
        throwError(`[Transferred] We have not found token account ${toAddress}-${data.collectionId}-${data.tokenId}.`, 'fatal')
    }

    await syncCollectionStats(data.collectionId.toString())

    if (item.extrinsic) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                collectionId: data.collectionId,
                tokenId: data.tokenId,
                token: `${data.collectionId}-${data.tokenId}`,
                operator: data.operator,
                from: data.from,
                to: data.to,
                amount: data.amount,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    return mappings.multiTokens.events.transferredEventModel(item, data, token)
}
