import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensTransferredEvent } from '../../../types/generated/events'
import { Token, TokenAccount } from '../../../model'
import { encodeId } from '../../../common/tools'
import { EventService } from '../../../services'
import { MultiTokensTokenAccountsStorage } from '../../../types/generated/storage'
import { CommonHandlerContext, EventHandlerContext } from '../../types/contexts'
import { Approval } from '../../../types/generated/v6'

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

function getEventData(ctx: EventHandlerContext): EventData {
    const event = new MultiTokensTransferredEvent(ctx)

    if (event.isEfinityV2) {
        const { collectionId, tokenId, operator, from, to, amount } = event.asEfinityV2
        return { collectionId, tokenId, operator, from, to, amount }
    }
    throw new UnknownVersionError(event.constructor.name)
}

async function getStorageData(
    ctx: CommonHandlerContext,
    account: Uint8Array,
    collectionId: bigint,
    tokenId: bigint
): Promise<StorageData | undefined> {
    const storage = new MultiTokensTokenAccountsStorage(ctx)
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

export async function handleTransferred(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const fromAddress = encodeId(data.from)
    const fromTokenAccount = await ctx.store.findOne<TokenAccount>(TokenAccount, {
        where: { id: `${fromAddress}-${data.collectionId}-${data.tokenId}` },
        relations: { account: true },
    })

    if (fromTokenAccount) {
        const fromStorage = await getStorageData(ctx, data.from, data.collectionId, data.tokenId)
        if (fromStorage) {
            fromTokenAccount.balance = fromStorage.balance
            fromTokenAccount.reservedBalance = fromStorage.reservedBalance
            fromTokenAccount.lockedBalance = fromStorage.lockedBalance
            fromTokenAccount.updatedAt = new Date(ctx.block.timestamp)

            await ctx.store.save(fromTokenAccount)
        }
    }

    const toAddress = encodeId(data.to)
    const toTokenAccount = await ctx.store.findOne<TokenAccount>(TokenAccount, {
        where: { id: `${toAddress}-${data.collectionId}-${data.tokenId}` },
        relations: { account: true },
    })

    if (toTokenAccount) {
        const toStorage = await getStorageData(ctx, data.to, data.collectionId, data.tokenId)
        if (toStorage) {
            toTokenAccount.balance = toStorage.balance
            toTokenAccount.reservedBalance = toStorage.reservedBalance
            toTokenAccount.lockedBalance = toStorage.lockedBalance
            toTokenAccount.updatedAt = new Date(ctx.block.timestamp)

            await ctx.store.save(toTokenAccount)
        }
    }

    if (fromTokenAccount && toTokenAccount) {
        new EventService(ctx, new Token({ id: `${data.collectionId}-${data.tokenId}` })).MultiTokenTransfer(
            fromTokenAccount.account,
            toTokenAccount.account,
            data.amount
        )
    }
}
