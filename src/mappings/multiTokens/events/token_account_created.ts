import { u8aToHex } from '@polkadot/util'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensTokenAccountCreatedEvent } from '../../../types/generated/events'
import { Collection, CollectionAccount, Token, TokenAccount } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'

interface EventData {
    collectionId: bigint
    tokenId: bigint
    accountId: Uint8Array
    balance: bigint
}

function getEventData(ctx: EventHandlerContext): EventData {
    const event = new MultiTokensTokenAccountCreatedEvent(ctx)

    if (event.isEfinityV2) {
        const { collectionId, tokenId, accountId, balance } = event.asEfinityV2
        return { collectionId, tokenId, accountId, balance }
    }
    throw new UnknownVersionError(event.constructor.name)
}

export async function tokenAccountCreated(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const collection = await ctx.store.findOneOrFail<Collection>(Collection, {
        where: { id: data.collectionId.toString() },
    })
    const token = await ctx.store.findOneOrFail<Token>(Token, {
        where: { id: `${data.collectionId}-${data.tokenId}` },
    })
    const account = await getOrCreateAccount(ctx, data.accountId)
    const collectionAccount = await ctx.store.findOneOrFail<CollectionAccount>(CollectionAccount, {
        where: { id: `${data.collectionId}-${u8aToHex(data.accountId)}` },
    })
    collectionAccount.accountCount += 1
    await ctx.store.save(collectionAccount)

    const tokenAccount = new TokenAccount({
        id: `${u8aToHex(data.accountId)}-${data.collectionId}-${data.tokenId}`,
        balance: data.balance,
        reservedBalance: 0n,
        lockedBalance: 0n,
        namedReserves: null,
        locks: null,
        approvals: null,
        isFrozen: false,
        account,
        collection,
        token,
        createdAt: new Date(ctx.block.timestamp),
        updatedAt: new Date(ctx.block.timestamp),
    })

    await ctx.store.insert(TokenAccount, tokenAccount as any)
}
