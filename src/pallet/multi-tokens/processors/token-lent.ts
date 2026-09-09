import { Block, CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'
import { upsertTokenLoan } from './loan-state'

export async function tokenLent(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.tokenLent(item)
    const event = mappings.multiTokens.events.tokenLentEventModel(item, block.height, data)
    if (skipSave) return event

    await upsertTokenLoan(
        ctx,
        block,
        data.collectionId,
        data.tokenId,
        { lender: data.lender, borrower: data.borrower },
        BigInt(data.expiration)
    )

    return event
}
