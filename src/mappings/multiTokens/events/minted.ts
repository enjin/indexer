import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensMintedEvent } from '../../../types/generated/events'
import { Token, TokenAccount } from '../../../model'
import { encodeId } from '../../../common/tools'
import { EventService } from '../../../services'
import { MultiTokensTokenAccountsStorage } from '../../../types/generated/storage'
import { CommonHandlerContext, EventHandlerContext } from '../../types/contexts'
import { Approval } from '../../../types/generated/v6'
import { isNonFungible } from '../utils/helpers'

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
    approvals: [Uint8Array, Approval][]
    isFrozen: boolean
}

function getEventData(ctx: EventHandlerContext): EventData {
    const event = new MultiTokensMintedEvent(ctx)

    if (event.isEfinityV2) {
        const { collectionId, tokenId, issuer, recipient, amount } = event.asEfinityV2
        return { collectionId, tokenId, issuer, recipient, amount }
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
            namedReserves: data.namedReserves,
            approvals: data.approvals,
            isFrozen: data.isFrozen,
            lockedBalance: 0n,
            locks: [],
        }
    }
    if (storage.isEfinityV3) {
        const data = await storage.getAsEfinityV3(account, collectionId, tokenId)

        if (!data) return undefined
        return data
    }
    throw new UnknownVersionError(storage.constructor.name)
}

export async function handleMinted(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const address = encodeId(data.recipient)

    const token = await ctx.store.findOneOrFail<Token>(Token, {
        where: { id: `${data.collectionId}-${data.tokenId}` },
    })
    token.supply += data.amount
    token.nonFungible = isNonFungible(token)
    await ctx.store.save(token)

    const tokenAccount = await ctx.store.findOneOrFail<TokenAccount>(TokenAccount, {
        where: { id: `${address}-${data.collectionId}-${data.tokenId}` },
        relations: { account: true },
    })

    const storage = await getStorageData(ctx, data.recipient, data.collectionId, data.tokenId)
    if (storage) {
        tokenAccount.balance = storage.balance
        tokenAccount.reservedBalance = storage.reservedBalance
        tokenAccount.lockedBalance = storage.lockedBalance
        tokenAccount.updatedAt = new Date(ctx.block.timestamp)

        await ctx.store.save(tokenAccount)
    }

    new EventService(ctx, new Token({ id: `${data.collectionId}-${data.tokenId}` })).MultiTokenMint(
        tokenAccount.account,
        data.amount
    )
}
