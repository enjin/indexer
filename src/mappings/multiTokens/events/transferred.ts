import { u8aToHex } from '@polkadot/util'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensTransferredEvent } from '../../../types/generated/events'
import { Event as EventModel, Extrinsic, MultiTokensTransferred, TokenAccount } from '../../../model'
import { MultiTokensTokenAccountsStorage } from '../../../types/generated/storage'
import { CommonHandlerContext } from '../../types/contexts'
import { Event } from '../../../types/generated/support'
import { Approval } from '../../../types/generated/v3000'

interface EventData {
    collectionId: bigint
    tokenId: bigint
    operator: Uint8Array
    from: Uint8Array
    to: Uint8Array
    amount: bigint
}

interface StorageData {
    balance: bigint
    reservedBalance: bigint
    lockedBalance: bigint
    namedReserves: [Uint8Array, bigint][]
    locks: [Uint8Array, bigint][]
    approvals: [Uint8Array, Approval][]
    isFrozen: boolean
}

function getEventData(ctx: CommonHandlerContext, event: Event): EventData {
    const data = new MultiTokensTransferredEvent(ctx, event)

    if (data.isEfinityV2) {
        const { collectionId, tokenId, operator, from, to, amount } = data.asEfinityV2
        return { collectionId, tokenId, operator, from, to, amount }
    }
    throw new UnknownVersionError(data.constructor.name)
}

async function getStorageData(
    ctx: CommonHandlerContext,
    block: SubstrateBlock,
    account: Uint8Array,
    collectionId: bigint,
    tokenId: bigint
): Promise<StorageData | undefined> {
    const storage = new MultiTokensTokenAccountsStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isEfinityV2) {
        const data = await storage.getAsEfinityV2(account, collectionId, tokenId)

        if (!data) return undefined

        return {
            balance: data.balance,
            reservedBalance: data.reserved,
            lockedBalance: 0n,
            namedReserves: data.namedReserves,
            locks: [],
            approvals: data.approvals,
            isFrozen: data.isFrozen,
        }
    }
    if (storage.isEfinityV3) {
        const data = await storage.getAsEfinityV3(account, collectionId, tokenId)

        if (!data) return undefined
        return data
    }
    throw new UnknownVersionError(storage.constructor.name)
}

export async function transferred(
    ctx: CommonHandlerContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.Transferred', { event: { args: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    const fromAddress = u8aToHex(data.from)
    const fromTokenAccount = await ctx.store.findOne<TokenAccount>(TokenAccount, {
        where: { id: `${fromAddress}-${data.collectionId}-${data.tokenId}` },
        relations: { account: true },
    })

    if (fromTokenAccount) {
        fromTokenAccount.balance -= data.amount
        fromTokenAccount.updatedAt = new Date(block.timestamp)
        await ctx.store.save(fromTokenAccount)
    }

    const toAddress = u8aToHex(data.to)
    const toTokenAccount = await ctx.store.findOne<TokenAccount>(TokenAccount, {
        where: { id: `${toAddress}-${data.collectionId}-${data.tokenId}` },
        relations: { account: true },
    })

    if (toTokenAccount) {
        toTokenAccount.balance += data.amount
        toTokenAccount.updatedAt = new Date(block.timestamp)
        await ctx.store.save(toTokenAccount)
    }

    // if (fromTokenAccount && toTokenAccount) {
    //     new EventService(ctx, new Token({ id: `${data.collectionId}-${data.tokenId}` })).MultiTokenTransfer(
    //         fromTokenAccount.account,
    //         toTokenAccount.account,
    //         data.amount
    //     )
    // }

    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: `${data.collectionId}-${data.tokenId}`,
        data: new MultiTokensTransferred({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            operator: u8aToHex(data.operator),
            from: fromAddress,
            to: toAddress,
            amount: data.amount,
        }),
    })
}
