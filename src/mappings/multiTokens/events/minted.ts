import { EventHandlerContext } from '@subsquid/substrate-processor'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensMintedEvent } from '../../../types/generated/events'
import { TokenAccount } from '../../../model'
import { encodeId } from '../../../common/helpers'
import { MultiTokensTokenAccountsStorage } from '../../../types/generated/storage'
import { StorageContext } from '../../../types/generated/support'
import { AccountId32, Approval } from '../../../types/generated/v4'

interface EventData {
    collectionId: bigint
    tokenId: bigint
    issuer: Uint8Array
    recipient: Uint8Array
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
    const event = new MultiTokensMintedEvent(ctx)

    if (event.isV2) {
        const { collectionId, tokenId, issuer, recipient, amount } = event.asV2
        return { collectionId, tokenId, issuer, recipient, amount }
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

    // aa9987301d7154519df0fc59a4664d747676b382efcba3db6f30f66eda406862np
    console.log(storage)
    console.log(storage.getAsV4(account, collectionId, tokenId))

    if (storage.isV2) {
        const data = await storage.getAsV2(account, collectionId, tokenId)

        if (!data) return undefined

        return {
            balance: data.balance,
            reservedBalance: data.reserved,
            namedReserves: data.namedReserves,
            approvals: data.approvals,
            isFrozen: data.isFrozen,
            lockedBalance: 0n,
            locks: [],
        }
    } else if (storage.isV4) {
        const data = await storage.getAsV4(account, collectionId, tokenId)

        if (!data) return undefined
        return data
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function handleMinted(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const address = encodeId(data.recipient)
    const tokenAccount = await ctx.store.findOne<TokenAccount>(
        TokenAccount,
        `${address}-${data.collectionId}-${data.tokenId}`
    )
    if (tokenAccount) {
        const storage = await getStorageData(ctx, data.recipient, data.collectionId, data.tokenId)
        if (storage) {
            await ctx.store.update(
                TokenAccount,
                { id: tokenAccount.id },
                {
                    balance: storage.balance,
                    reservedBalance: storage.reservedBalance,
                    lockedBalance: storage.lockedBalance,
                }
            )
        }
    }
}
