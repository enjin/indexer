import { throwFatalError } from '~/util/errors'
import { AccountTokenEvent, Event as EventModel, Token, TokenAccount } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { Sns } from '~/util/sns'
import * as mappings from '~/pallet/index'
import { getOrCreateAccount } from '~/util/entities'
import { QueueUtils } from '~/queue'

export async function burned(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<[EventModel, AccountTokenEvent] | undefined | EventModel> {
    const data = mappings.multiTokens.events.burned(item)
    const account = await getOrCreateAccount(ctx, data.accountId)

    const token = await ctx.store.findOne(Token, {
        where: { id: `${data.collectionId}-${data.tokenId}` },
        relations: { collection: true },
    })

    if (!token) {
        throwFatalError(`[Burned] We have not found token ${data.collectionId}-${data.tokenId}.`)
        return
    }

    if (skipSave || data.amount === 0n) {
        return mappings.multiTokens.events.burnedEventModel(
            item,
            data,
            account,
            token.collection ?? null,
            token ?? null
        )
    }

    const tokenAccount = await ctx.store.findOne(TokenAccount, {
        where: { id: `${account.id}-${data.collectionId}-${data.tokenId}` },
        relations: { account: true },
    })

    if (tokenAccount) {
        tokenAccount.balance -= data.amount
        tokenAccount.totalBalance -= data.amount
        tokenAccount.updatedAt = new Date(block.timestamp ?? 0)
        await ctx.store.save(tokenAccount)
    } else {
        throwFatalError(`[Burned] We have not found token account ${account.id}-${data.collectionId}-${data.tokenId}.`)
    }

    token.supply -= data.amount
    if (token.supply < 1n) {
        token.infusion = 0n
    }

    if (token.cap && token.cap.isTypeOf === 'TokenCapSingleMint') {
        token.cap.supply -= data.amount
    }

    await ctx.store.save(token)

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

    QueueUtils.dispatchComputeStats(data.collectionId.toString())
    QueueUtils.dispatchComputeTraits(data.collectionId.toString())

    return mappings.multiTokens.events.burnedEventModel(item, data, account, token.collection, token)
}
