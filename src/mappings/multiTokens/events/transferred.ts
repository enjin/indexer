import { EventHandlerContext } from '@subsquid/substrate-processor'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensTransferredEvent } from '../../../types/generated/events'
import { TokenAccount } from '../../../model'
import { encodeId } from '../../../common/helpers'
import { MultiTokensTokenAccountsStorage } from '../../../types/generated/storage'
import { StorageContext } from '../../../types/generated/support'
import { AccountId32, Approval } from '../../../types/generated/v4'

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
    approvals: [AccountId32, Approval][]
    isFrozen: boolean
}

function getEventData(ctx: EventHandlerContext): EventData {
    console.log(ctx.event.name)
    const event = new MultiTokensTransferredEvent(ctx)

    if (event.isV4) {
        const { collectionId, tokenId, operator, from, to, amount } = event.asV4
        return { collectionId, tokenId, operator, from, to, amount }
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

    if (storage.isV4) {
        const data = await storage.getAsV4(account, collectionId, tokenId)

        if (!data) return undefined
        return data
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function handleTransferred(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const fromAddress = encodeId(data.from)
    const fromTokenAccount = await ctx.store.findOne<TokenAccount>(
        TokenAccount,
        `${fromAddress}-${data.collectionId}-${data.tokenId}`
    )
    if (fromTokenAccount) {
        const storage = await getStorageData(ctx, data.from, data.collectionId, data.tokenId)
        if (storage) {
            await ctx.store.update(
                TokenAccount,
                { id: fromTokenAccount.id },
                {
                    balance: storage.balance,
                    reservedBalance: storage.reservedBalance,
                    lockedBalance: storage.lockedBalance,
                }
            )
        }
    }

    const toAddress = encodeId(data.to)
    const toTokenAccount = await ctx.store.findOne<TokenAccount>(
        TokenAccount,
        `${toAddress}-${data.collectionId}-${data.tokenId}`
    )
    if (toTokenAccount) {
        const storage = await getStorageData(ctx, data.to, data.collectionId, data.tokenId)
        if (storage) {
            await ctx.store.update(
                TokenAccount,
                { id: toTokenAccount.id },
                {
                    balance: storage.balance,
                    reservedBalance: storage.reservedBalance,
                    lockedBalance: storage.lockedBalance,
                }
            )
        }
    }
}
