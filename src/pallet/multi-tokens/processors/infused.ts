import { SnsEvent } from '~/util/sns'
import * as mappings from '~/pallet/index'
import { Token } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { getOrCreateAccount } from '~/util/entities'
import { EventHandlerResult } from '~/processor.handler'

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
    if (skipSave || !token) {
        return [
            ...mappings.multiTokens.events.infusedEventModel(
                item,
                data,
                account,
                token?.collection ?? null,
                token ?? null
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

    const snsEvent: SnsEvent = {
        id: item.id,
        name: item.name,
        body: {
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            token: `${data.collectionId}-${data.tokenId}`,
            amount: data.amount,
            accountId: data.accountId,
            extrinsic: item.extrinsic?.id,
        },
    }

    return [...mappings.multiTokens.events.infusedEventModel(item, data, account, token.collection, token), snsEvent]
}
