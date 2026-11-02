import { Token, TokenLoan } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'
import { upsertTokenLoanFromStorage } from './loan-state'
import { loanExtensionParties } from './loan-extension-parties'

export async function loanExtended(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.loanExtended(item)
    const id = `${data.collectionId}-${data.tokenId}`
    const [token, existingLoan] = await Promise.all([
        ctx.store.findOne(Token, { where: { id }, relations: { collection: true } }),
        skipSave
            ? undefined
            : ctx.store.findOne(TokenLoan, { where: { id }, relations: { lender: true, borrower: true } }),
    ])
    const loan =
        existingLoan ??
        (!skipSave ? await upsertTokenLoanFromStorage(ctx, block, data.collectionId, data.tokenId) : undefined)
    const parties = loan ?? (await loanExtensionParties(ctx, block, item, id))
    const event = mappings.multiTokens.events.loanExtendedEventModel(
        item,
        data,
        parties.lender,
        parties.borrower,
        token?.collection ?? null,
        token ?? null
    )
    if (skipSave) return event

    if (loan) {
        loan.expiration = BigInt(data.newExpiration)
        loan.updatedAt = new Date(block.timestamp ?? 0)
        await ctx.store.save(loan)
    }
    return event
}
