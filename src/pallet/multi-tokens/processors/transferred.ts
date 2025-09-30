import { throwFatalError } from '~/util/errors'
import { Token, TokenAccount } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { getOrCreateAccount } from '~/util/entities'
import { SnsEvent } from '~/util/sns'
import * as mappings from '~/pallet/index'
import { QueueUtils } from '~/queue'
import { EventHandlerResult } from '~/processor.handler'

export async function transferred(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.transferred(item)
    const from = await getOrCreateAccount(ctx, data.from)
    const to = await getOrCreateAccount(ctx, data.to)

    const token = await ctx.store.findOne<Token>(Token, {
        where: { id: `${data.collectionId}-${data.tokenId}` },
        relations: { collection: true },
    })
    if ((skipSave || !token) && data.collectionId.toString() != '1') {
        return [
            ...mappings.multiTokens.events.transferredEventModel(
                item,
                data,
                from,
                to,
                token?.collection ?? null,
                token ?? null
            ),
            undefined,
        ]
    }

    const [fromTokenAccount, toTokenAccount] = await Promise.all([
        ctx.store.findOne<TokenAccount>(TokenAccount, {
            where: { id: `${from.id}-${data.collectionId}-${data.tokenId}` },
        }),
        ctx.store.findOne<TokenAccount>(TokenAccount, {
            where: { id: `${to.id}-${data.collectionId}-${data.tokenId}` },
        }),
    ])

    if (fromTokenAccount) {
        fromTokenAccount.balance -= data.amount
        fromTokenAccount.totalBalance -= data.amount
        fromTokenAccount.updatedAt = new Date(block.timestamp ?? 0)
        await ctx.store.save(fromTokenAccount)
    } else {
        throwFatalError(
            `[Transferred] We have not found token account ${from.id}-${data.collectionId}-${data.tokenId}.`
        )
    }

    if (toTokenAccount) {
        toTokenAccount.balance += data.amount
        toTokenAccount.totalBalance += data.amount
        toTokenAccount.updatedAt = new Date(block.timestamp ?? 0)
        await ctx.store.save(toTokenAccount)
    } else {
        throwFatalError(`[Transferred] We have not found token account ${to.id}-${data.collectionId}-${data.tokenId}.`)
    }

    const snsEvent: SnsEvent = {
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
            extrinsic: item.extrinsic?.id,
        },
    }

    QueueUtils.dispatchComputeStats(data.collectionId.toString())
    QueueUtils.dispatchComputeAccountStats(data.from.toString())
    QueueUtils.dispatchComputeAccountStats(data.to.toString())

    return [
        ...mappings.multiTokens.events.transferredEventModel(
            item,
            data,
            from,
            to,
            token?.collection ?? null,
            token ?? null
        ),
        snsEvent,
    ]
}
