import { TokenLoan } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'

export async function tokenReturned(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.tokenReturned(item)
    const event = mappings.multiTokens.events.tokenReturnedEventModel(item, block.height, data)
    if (skipSave) return event

    const loan = await ctx.store.findOneBy(TokenLoan, { id: `${data.collectionId}-${data.tokenId}` })
    if (loan) await ctx.store.remove(loan)
    return event
}
