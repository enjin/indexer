import { UnknownVersionError, throwError } from '../../../common/errors'
import { events } from '../../../types/generated'
import {
    CollectionAccount,
    Event as EventModel,
    Extrinsic,
    MultiTokensTokenAccountDestroyed,
    PoolMember,
    TokenAccount,
} from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'

function getEventData(ctx: CommonContext, event: EventItem) {
    if (events.multiTokens.tokenAccountDestroyed.enjinV100.is(event)) {
        return events.multiTokens.tokenAccountDestroyed.enjinV100.decode(event)
    }

    throw new UnknownVersionError(events.multiTokens.tokenAccountDestroyed.name)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: MultiTokensTokenAccountDestroyed.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
        data: new MultiTokensTokenAccountDestroyed({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            accountId: data.accountId,
        }),
    })
}

export async function tokenAccountDestroyed(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item)

    if (skipSave) return getEvent(item, data)

    const collectionAccount = await ctx.store.findOneBy<CollectionAccount>(CollectionAccount, {
        id: `${data.collectionId}-${data.accountId}`,
    })

    if (!collectionAccount) {
        throwError(
            `[TokenAccountDestroyed] We have not found collection account ${data.collectionId}-${data.accountId}.`,
            'fatal'
        )

        return getEvent(item, data)
    }

    collectionAccount.accountCount -= 1
    await ctx.store.save(collectionAccount)

    const tokenAccount = await ctx.store.findOneBy<TokenAccount>(TokenAccount, {
        id: `${data.accountId}-${data.collectionId}-${data.tokenId}`,
    })

    if (tokenAccount) {
        const accounts = await ctx.store.findBy(PoolMember, { tokenAccount: { id: tokenAccount.id } })
        await Promise.all(
            accounts.map((account) => {
                account.tokenAccount = null
                return ctx.store.save(account)
            })
        )
        await ctx.store.remove(tokenAccount)
    } else {
        throwError(
            `[TokenAccountDestroyed] We have not found token account ${data.accountId}-${data.collectionId}-${data.tokenId}.`,
            'fatal'
        )
    }

    return getEvent(item, data)
}
