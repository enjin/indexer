import { Token, TokenLoan } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'
import { getOrCreateAccount } from '~/util/entities'

export async function tokenReturned(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.tokenReturned(item)
    const [lender, borrower, token] = await Promise.all([
        getOrCreateAccount(ctx, data.lender),
        getOrCreateAccount(ctx, data.borrower),
        ctx.store.findOne(Token, {
            where: { id: `${data.collectionId}-${data.tokenId}` },
            relations: { collection: true },
        }),
    ])
    const event = mappings.multiTokens.events.tokenReturnedEventModel(
        item,
        data,
        lender,
        borrower,
        token?.collection ?? null,
        token ?? null
    )
    if (skipSave) return event

    const loan = await ctx.store.findOneBy(TokenLoan, { id: `${data.collectionId}-${data.tokenId}` })
    if (loan) await ctx.store.remove(loan)

    // Not published on SNS: the Transferred of the same return carries `cause: loanReturn` with the lender and
    // borrower (see `~/util/sns-cause`).
    return event
}
