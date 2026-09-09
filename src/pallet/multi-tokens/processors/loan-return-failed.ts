import { TokenLoan } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'
import { upsertTokenLoanFromStorage } from './loan-state'

export async function loanReturnFailed(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.loanReturnFailed(item)
    const event = mappings.multiTokens.events.loanReturnFailedEventModel(item, block, data)
    if (skipSave) return event

    const id = `${data.collectionId}-${data.tokenId}`
    const loan = await ctx.store.findOneBy(TokenLoan, { id })
    if (!loan) {
        await upsertTokenLoanFromStorage(ctx, block, data.collectionId, data.tokenId)
        return event
    }

    loan.expiration = BigInt(data.expiration)
    loan.lastObservedBlock = BigInt(block.height)
    loan.updatedAt = new Date(block.timestamp ?? 0)
    await ctx.store.save(loan)
    return event
}
