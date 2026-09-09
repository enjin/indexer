import { TokenLoan } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'

export async function loanExtended(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.loanExtended(item)
    const event = mappings.multiTokens.events.loanExtendedEventModel(item, block.height, data)
    if (skipSave) return event

    const id = `${data.collectionId}-${data.tokenId}`
    const loan = await ctx.store.findOneBy(TokenLoan, { id })
    if (!loan) {
        ctx.log.warn(`[LoanExtended] Loan ${id} was absent`)
        return event
    }

    loan.expiration = BigInt(data.newExpiration)
    loan.lastObservedBlock = BigInt(block.height)
    loan.updatedAt = new Date(block.timestamp ?? 0)
    await ctx.store.save(loan)
    return event
}
