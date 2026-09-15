import { Token, TokenLoan } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'
import { getOrCreateAccount } from '~/util/entities'
import { SnsEvent } from '~/util/sns'

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
        block.height,
        data,
        lender,
        borrower,
        token?.collection ?? null,
        token ?? null
    )
    if (skipSave) return event

    const loan = await ctx.store.findOneBy(TokenLoan, { id: `${data.collectionId}-${data.tokenId}` })
    if (loan) await ctx.store.remove(loan)

    const snsEvent: SnsEvent = {
        id: item.id,
        name: item.name,
        body: {
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            token: `${data.collectionId}-${data.tokenId}`,
            lender: data.lender,
            borrower: data.borrower,
            observedBlock: block.height,
            extrinsic: item.extrinsic?.id,
        },
    }

    return [...event, snsEvent]
}
