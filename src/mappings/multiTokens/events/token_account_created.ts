import { EventHandlerContext } from '@subsquid/substrate-processor'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensTokenAccountCreatedEvent } from '../../../types/generated/events'
import { Collection, CollectionAccount, Token, TokenAccount } from '../../../model'
import { encodeId } from '../../../common/helpers'
import { accountManager } from '../../../managers/AccountManager'

interface EventData {
    collectionId: bigint
    tokenId: bigint
    accountId: Uint8Array
    balance: bigint
}

function getEventData(ctx: EventHandlerContext): EventData {
    console.log(ctx.event.name)
    const event = new MultiTokensTokenAccountCreatedEvent(ctx)

    if (event.isV2) {
        const { collectionId, tokenId, accountId, balance } = event.asV2
        return { collectionId, tokenId, accountId, balance }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleTokenAccountCreated(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const collection = await ctx.store.findOne<Collection>(Collection, data.collectionId.toString())
    const token = await ctx.store.findOne<Token>(Token, `${data.collectionId}-${data.tokenId}`)
    const address = encodeId(data.accountId)
    const account = await accountManager.get(ctx, address)

    const tokenAccount = new TokenAccount({
        id: `${address}-${data.collectionId}-${data.tokenId}`,
        balance: data.balance,
        reservedBalance: 0n,
        lockedBalance: 0n,
        namedReserves: null,
        locks: null,
        approvals: null,
        isFrozen: false,
        account: account,
        collection: collection,
        token: token,
    })

    await ctx.store.insert(TokenAccount, tokenAccount)
}
