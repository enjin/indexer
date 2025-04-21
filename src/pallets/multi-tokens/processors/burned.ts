import { throwFatalError } from '../../../utils/errors'
import { AccountTokenEvent, Event as EventModel, Token, TokenAccount } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { Sns } from '../../../utils/sns'
import * as mappings from '../../index'
import { getOrCreateAccount } from '../../../utils/entities'
import { QueueUtils } from '../../../queues'

export async function burned(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<[EventModel, AccountTokenEvent] | undefined | EventModel> {
    const data = mappings.multiTokens.events.burned(item)
    if (data.amount === 0n) return undefined

    const address = data.accountId

    const token = await ctx.store.findOne(Token, {
        where: { id: `${data.collectionId}-${data.tokenId}` },
    })

    if (skipSave) {
        await getOrCreateAccount(ctx, data.accountId)
        return mappings.multiTokens.events.burnedEventModel(item, data, token)
    }

    const tokenAccount = await ctx.store.findOne(TokenAccount, {
        where: { id: `${address}-${data.collectionId}-${data.tokenId}` },
        relations: { account: true },
    })

    if (tokenAccount) {
        tokenAccount.balance -= data.amount
        tokenAccount.totalBalance -= data.amount
        tokenAccount.updatedAt = new Date(block.timestamp ?? 0)
        await ctx.store.save(tokenAccount)
    } else {
        throwFatalError(`[Burned] We have not found token account ${address}-${data.collectionId}-${data.tokenId}.`)
    }

    if (token) {
        token.supply -= data.amount
        if (token.supply < 1n) {
            token.infusion = 0n
        }
        await ctx.store.save(token)

        // console.log('Dispatching from burned')
        QueueUtils.dispatchComputeStats(data.collectionId.toString())
        QueueUtils.dispatchComputeTraits(data.collectionId.toString())
    } else {
        throwFatalError(`[Burned] We have not found token ${data.collectionId}-${data.tokenId}.`)
    }

    if (item.extrinsic) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                collectionId: data.collectionId,
                tokenId: data.tokenId,
                token: `${data.collectionId}-${data.tokenId}`,
                account: data.accountId,
                amount: data.amount,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    return mappings.multiTokens.events.burnedEventModel(item, data, token)
}
