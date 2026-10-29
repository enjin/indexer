import { LessThan } from 'typeorm'
import { Block, CommonContext, EventItem } from '~/contexts'
import { Event as EventModel, MultiTokensTokenLent } from '~/model'
import { tokenLent } from '~/pallet/multi-tokens/events/token-lent'
import { getOrCreateAccount } from '~/util/entities'
import { rememberedBlockEvents } from '~/util/sns-cause'

export async function loanExtensionParties(ctx: CommonContext, block: Block, item: EventItem, tokenId: string) {
    const siblings = rememberedBlockEvents(block)
    const position = siblings.findIndex((event) => event.id === item.id)

    for (let index = position - 1; index >= 0; index--) {
        const sibling = siblings[index]
        if (sibling.name !== 'MultiTokens.TokenLent') continue
        const data = tokenLent(sibling)
        if (`${data.collectionId}-${data.tokenId}` === tokenId) {
            const [lender, borrower] = await Promise.all([
                getOrCreateAccount(ctx, data.lender),
                getOrCreateAccount(ctx, data.borrower),
            ])
            return { lender, borrower }
        }
    }

    const previous = await ctx.store.findOne(EventModel, {
        where: { name: MultiTokensTokenLent.name, tokenId, id: LessThan(item.id) },
        order: { id: 'DESC' },
    })
    if (previous?.data?.isTypeOf === 'MultiTokensTokenLent') {
        const [lender, borrower] = await Promise.all([
            getOrCreateAccount(ctx, previous.data.lender),
            getOrCreateAccount(ctx, previous.data.borrower),
        ])
        return { lender, borrower }
    }

    ctx.log.warn(`[LoanExtended] No preceding lending event for ${item.id}; activity parties left unknown`)
    return { lender: undefined, borrower: undefined }
}
