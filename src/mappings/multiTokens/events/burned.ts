import { EventHandlerContext } from '@subsquid/substrate-processor'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensBurnedEvent } from '../../../types/generated/events'
import { TokenAccount } from '../../../model'
import { encodeId } from '../../../common/helpers'
import { MultiTokensTokenAccountsStorage } from '../../../types/generated/storage'
import { StorageContext } from '../../../types/generated/support'
import { AccountId32, Approval } from '../../../types/generated/v4'

interface EventData {
    collectionId: bigint
    tokenId: bigint
    accountId: Uint8Array
    amount: bigint
}

interface StorageData {
    balance: bigint
    reservedBalance: bigint
    lockedBalance: bigint
    namedReserves: [Uint8Array, bigint][]
    locks: [Uint8Array, bigint][]
    approvals: [AccountId32, Approval][]
    isFrozen: boolean
}

function getEventData(ctx: EventHandlerContext): EventData {
    console.log(ctx.event.name)
    const event = new MultiTokensBurnedEvent(ctx)

    if (event.isV2) {
        const { collectionId, tokenId, accountId, amount } = event.asV2
        return { collectionId, tokenId, accountId, amount }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

async function getStorageData(
    ctx: StorageContext,
    account: Uint8Array,
    collectionId: bigint,
    tokenId: bigint
): Promise<StorageData | undefined> {
    const storage = new MultiTokensTokenAccountsStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV2) {
        const data = await storage.getAsV2(account, collectionId, tokenId)

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
    } else if (storage.isV4) {
        const data = await storage.getAsV4(account, collectionId, tokenId)

        if (!data) return undefined
        return data
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function handleBurned(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const address = encodeId(data.accountId)
    const tokenAccount = await ctx.store.findOne<TokenAccount>(
        TokenAccount,
        `${address}-${data.collectionId}-${data.tokenId}`
    )
    if (tokenAccount) {
        const storage = await getStorageData(ctx, data.accountId, data.collectionId, data.tokenId)
        if (storage) {
            await ctx.store.update(
                TokenAccount,
                { id: tokenAccount.id },
                {
                    balance: storage.balance,
                    reservedBalance: storage.reservedBalance,
                    lockedBalance: storage.lockedBalance,
                    updatedAt: new Date(ctx.block.timestamp),
                }
            )
        }
    }
}
