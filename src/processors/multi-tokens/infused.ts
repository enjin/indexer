import { Sns } from '../../utils/sns'
import * as mappings from './../../mappings'
import { Token } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../contexts'

export async function infused(ctx: CommonContext, block: BlockHeader, item: EventItem, skipSave: boolean) {
    const data = mappings.multiTokens.events.infused(item)
    if (skipSave) return undefined

    const token = await ctx.store.findOneByOrFail<Token>(Token, {
        id: `${data.collectionId}-${data.tokenId}`,
    })
    token.infusion += data.amount

    await ctx.store.save(token)

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
