import { Sns } from '../../../utils/sns'
import * as mappings from '../../index'
import { Token } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'

export async function infused(ctx: CommonContext, block: Block, item: EventItem, skipSave: boolean) {
    const data = mappings.multiTokens.events.infused(item)
    if (skipSave) return undefined

    const token = await ctx.store.findOneOrFail<Token>(Token, {
        where: { id: `${data.collectionId}-${data.tokenId}` },
        relations: {
            collection: true,
        },
    })

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

    return mappings.multiTokens.events.infusedEventModel(item, data, token.collection, token)
}
