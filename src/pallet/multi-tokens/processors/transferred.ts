import { throwFatalError } from '../../../util/errors'
import { AccountTokenEvent, Event as EventModel, Token, TokenAccount } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { getOrCreateAccount } from '../../../util/entities'
import { Sns } from '../../../util/sns'
import * as mappings from '../../index'
import { QueueUtils } from '../../../queue'

export async function transferred(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<[EventModel, AccountTokenEvent] | EventModel | undefined> {
    const data = mappings.multiTokens.events.transferred(item)

    const token = await ctx.store.findOne<Token>(Token, {
        where: { id: `${data.collectionId}-${data.tokenId}` },
        relations: { collection: true, attributes: true },
    })

    if (skipSave) {
        await Promise.all([getOrCreateAccount(ctx, data.from), getOrCreateAccount(ctx, data.to)])

        return mappings.multiTokens.events.transferredEventModel(item, data, token?.collection, token)
    }

    if (!token) {
        throwFatalError(`[Transferred] We have not found token ${data.collectionId}-${data.tokenId}.`)
        return mappings.multiTokens.events.transferredEventModel(item, data, undefined, undefined)
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
        throwFatalError(
            `[Transferred] We have not found token account ${fromAddress}-${data.collectionId}-${data.tokenId}.`
        )
    }

    if (toTokenAccount) {
        toTokenAccount.balance += data.amount
        toTokenAccount.totalBalance += data.amount
        toTokenAccount.updatedAt = new Date(block.timestamp ?? 0)
        await ctx.store.save(toTokenAccount)
    } else {
        throwFatalError(
            `[Transferred] We have not found token account ${toAddress}-${data.collectionId}-${data.tokenId}.`
        )
    }

    QueueUtils.dispatchComputeStats(data.collectionId.toString())

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

    return mappings.multiTokens.events.transferredEventModel(item, data, token.collection, token)
}
