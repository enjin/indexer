import { u8aToHex } from '@polkadot/util'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensTokenAccountCreatedEvent } from '../../../types/generated/events'
import {
    Collection,
    CollectionAccount,
    Event as EventModel,
    MultiTokensTokenAccountCreated,
    Token,
    TokenAccount,
} from '../../../model'
import { Context, getAccount } from '../../../processor'
import { Event } from '../../../types/generated/support'

interface EventData {
    collectionId: bigint
    tokenId: bigint
    accountId: Uint8Array
    balance: bigint
}

function getEventData(ctx: Context, event: Event): EventData {
    const data = new MultiTokensTokenAccountCreatedEvent(ctx, event)

    if (data.isEfinityV2) {
        const { collectionId, tokenId, accountId, balance } = data.asEfinityV2
        return { collectionId, tokenId, accountId, balance }
    }
    throw new UnknownVersionError(data.constructor.name)
}

export async function tokenAccountCreated(
    ctx: Context,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.TokenAccountCreated', { event: { args: true; extrinsic: true; call: true } }>
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    const collection = await ctx.store.findOneOrFail<Collection>(Collection, {
        where: { id: data.collectionId.toString() },
    })
    const token = await ctx.store.findOneOrFail<Token>(Token, {
        where: { id: `${data.collectionId}-${data.tokenId}` },
    })
    const account = await getAccount(ctx, data.accountId)
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
        createdAt: new Date(block.timestamp),
        updatedAt: new Date(block.timestamp),
    })

    await ctx.store.insert(tokenAccount)

    return new EventModel({
        id: item.event.id,
        data: new MultiTokensTokenAccountCreated({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            account: u8aToHex(data.accountId),
            balance: data.balance,
        }),
    })
}
