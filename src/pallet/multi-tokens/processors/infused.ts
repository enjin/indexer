import { Sns } from '../../../util/sns'
import * as mappings from '../../index'
import { Token } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'

export async function infused(ctx: CommonContext, block: Block, item: EventItem, skipSave: boolean) {
    const data = mappings.multiTokens.events.infused(item)
    const token = await ctx.store.findOneByOrFail<Token>(Token, {
        id: `${data.collectionId}-${data.tokenId}`,
    })

    if (skipSave) return mappings.multiTokens.events.infusedEventModel(item, data, token)

    const storage = await mappings.multiTokens.storage.tokens(block, {
        collectionId: data.collectionId,
        tokenId: data.tokenId,
    })

    if (storage) {
        token.infusion = storage.infusion ?? 0n
        await ctx.store.save(token)
    }

    if (item.extrinsic) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                collectionId: data.collectionId,
                tokenId: data.tokenId,
                token: `${data.collectionId}-${data.tokenId}`,
                amount: data.amount,
                accountId: data.accountId,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    return mappings.multiTokens.events.infusedEventModel(item, data, token)
}
