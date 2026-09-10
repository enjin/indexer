import { Block, CommonContext, EventItem } from '~/contexts'
import { Token } from '~/model'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'
import { getOrCreateAccount } from '~/util/entities'
import { SnsEvent } from '~/util/sns'
import { upsertTokenLoan } from './loan-state'

export async function tokenLent(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.tokenLent(item)
    const [lender, borrower, token] = await Promise.all([
        getOrCreateAccount(ctx, data.lender),
        getOrCreateAccount(ctx, data.borrower),
        ctx.store.findOne(Token, {
            where: { id: `${data.collectionId}-${data.tokenId}` },
            relations: { collection: true },
        }),
    ])
    const event = mappings.multiTokens.events.tokenLentEventModel(
        item,
        block.height,
        data,
        lender,
        borrower,
        token?.collection ?? null,
        token ?? null
    )
    if (skipSave) return event

    await upsertTokenLoan(
        ctx,
        block,
        data.collectionId,
        data.tokenId,
        { lender: data.lender, borrower: data.borrower },
        BigInt(data.expiration)
    )

    const snsEvent: SnsEvent = {
        id: item.id,
        name: item.name,
        body: {
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            token: `${data.collectionId}-${data.tokenId}`,
            lender: data.lender,
            borrower: data.borrower,
            expiration: data.expiration,
            observedBlock: block.height,
            extrinsic: item.extrinsic?.id,
        },
    }

    return [...event, snsEvent]
}
