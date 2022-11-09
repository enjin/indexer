import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensBurnedEvent } from '../../../types/generated/events'
import { TokenAccount } from '../../../model'
import { encodeId } from '../../../common/tools'
import { MultiTokensTokenAccountsStorage } from '../../../types/generated/storage'
import { CommonHandlerContext, EventHandlerContext } from '../../types/contexts'
import { Approval } from '../../../types/generated/efinityV3'

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
    approvals: [Uint8Array, Approval][]
    isFrozen: boolean
}

function getEventData(ctx: EventHandlerContext): EventData {
    const event = new MultiTokensBurnedEvent(ctx)

    if (event.isEfinityV2) {
        const { collectionId, tokenId, accountId, amount } = event.asEfinityV2
        return { collectionId, tokenId, accountId, amount }
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

export async function handleBurned(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const address = encodeId(data.accountId)
    const tokenAccount = await ctx.store.findOne<TokenAccount>(TokenAccount, {
        where: { id: `${address}-${data.collectionId}-${data.tokenId}` },
    })

    if (tokenAccount) {
        const storage = await getStorageData(ctx, data.accountId, data.collectionId, data.tokenId)
        if (storage) {
            tokenAccount.balance = storage.balance
            tokenAccount.reservedBalance = storage.reservedBalance
            tokenAccount.lockedBalance = storage.lockedBalance
            tokenAccount.updatedAt = new Date(ctx.block.timestamp)

            await ctx.store.save(tokenAccount)
        }
    }
}
