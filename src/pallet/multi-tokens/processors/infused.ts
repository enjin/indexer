import { SnsEvent } from '~/util/sns'
import * as mappings from '~/pallet/index'
import { Token, UserInfusion } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { getOrCreateAccount } from '~/util/entities'
import { EventHandlerResult } from '~/processor.handler'
import { QueueUtils } from '~/queue'

export async function infused(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.infused(item)
    const account = await getOrCreateAccount(ctx, data.accountId)

    const token = await ctx.store.findOne<Token>(Token, {
        where: { id: `${data.collectionId}-${data.tokenId}` },
        relations: {
            collection: true,
        },
    })

    const totalAmount = (() => {
        if (data.amount) {
            return data.amount * (token?.supply ?? 0n)
        }
        if (data.totalAmount) {
            return data.totalAmount
        }
        return 0n
    })()

    if (skipSave || !token) {
        return [
            ...mappings.multiTokens.events.infusedEventModel(
                item,
                data,
                account,
                token?.collection ?? null,
                token ?? null,
                totalAmount
            ),
            undefined,
        ]
    }

    // This is far from ideal as it will query the node for the storage which will slow down our processor,
    // But we need to do this as the `value` returned by the blockchain might be incorrect
    const storage = await mappings.multiTokens.storage.tokens(block, {
        collectionId: data.collectionId,
        tokenId: data.tokenId,
    })

    if (storage) {
        token.infusion = storage.infusion ?? 0n
        await ctx.store.save(token)
    }

    const amount = (() => {
        if (data.amount) {
            return data.amount * token.supply
        }
        if (data.totalAmount) {
            return data.totalAmount
        }
        return 0n
    })()

    const userInfusionId = `${account.id}-${token.id}`
    let userInfusion = await ctx.store.findOne(UserInfusion, {
        where: { id: userInfusionId },
    })

    if (userInfusion) {
        userInfusion.amount += amount
    } else {
        userInfusion = new UserInfusion({
            id: userInfusionId,
            account: account,
            token: token,
            amount: amount,
        })
    }

    await ctx.store.save(userInfusion)

    await QueueUtils.dispatchComputeStats(data.collectionId.toString())
    await QueueUtils.dispatchComputeAccountStats(account.id)

    const snsEvent: SnsEvent = {
        id: item.id,
        name: item.name,
        body: {
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            token: `${data.collectionId}-${data.tokenId}`,
            amount: data.amount ?? data.totalAmount,
            accountId: data.accountId,
            extrinsic: item.extrinsic?.id,
        },
    }

    return [
        ...mappings.multiTokens.events.infusedEventModel(item, data, account, token.collection, token, amount),
        snsEvent,
    ]
}
