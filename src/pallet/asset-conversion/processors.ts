import { compactToU8a, stringToU8a, u8aConcat, u8aToHex } from '@polkadot/util'
import { blake2AsU8a } from '@polkadot/util-crypto'
import { Block, CommonContext, EventItem } from '~/contexts'
import { Token, TokenAccount } from '~/model'
import * as mappings from '~/pallet/index'
import { AssetId, assetConversionEffect } from '~/pallet/asset-conversion/events'
import { QueueUtils } from '~/queue'

// matrixchain `ASSET_CONVERSION_PALLET_ID`, identical on enjin-matrix and canary-matrix
const ASSET_CONVERSION_PALLET_ID = stringToU8a('ef/ascon')

const ASSET_CONVERSION_PREFIX = 'AssetConversion.'

export type TokenAccountKey = { collectionId: bigint; tokenId: bigint; accountId: string }

export type AssetConversionTargets = {
    tokenAccounts: TokenAccountKey[]
    tokens: AssetId[]
}

/**
 * `pallet_asset_conversion::AccountIdConverter`: `blake2_256((PalletId, pool_id).encode())`. The pool id is the
 * ascending pair of `ExplicitAssetId`s, whose collection and token ids are compact encoded.
 */
export function poolAccountOf([asset1, asset2]: [AssetId, AssetId]): string {
    const encoded = u8aConcat(
        ASSET_CONVERSION_PALLET_ID,
        compactToU8a(asset1.collectionId),
        compactToU8a(asset1.tokenId),
        compactToU8a(asset2.collectionId),
        compactToU8a(asset2.tokenId)
    )
    return u8aToHex(blake2AsU8a(encoded, 256))
}

export function isAssetConversionEvent(item: EventItem): boolean {
    return item.name.startsWith(ASSET_CONVERSION_PREFIX)
}

/**
 * The token accounts and tokens a block's AssetConversion events changed. Its `fungibles` operations move balances
 * through `write_balance`/`set_total_issuance`, which emit no `Minted`/`Burned`/`Transferred`; only accounts it creates
 * or removes are announced (`TokenAccountCreated`/`TokenAccountDestroyed`).
 */
export function assetConversionTargets(items: EventItem[]): AssetConversionTargets {
    const tokenAccounts = new Map<string, TokenAccountKey>()
    const tokens = new Map<string, AssetId>()

    const add = (accountId: string, asset: AssetId) => {
        const tokenKey = `${asset.collectionId}-${asset.tokenId}`
        tokens.set(tokenKey, { collectionId: asset.collectionId, tokenId: asset.tokenId })
        tokenAccounts.set(`${accountId}-${tokenKey}`, {
            collectionId: asset.collectionId,
            tokenId: asset.tokenId,
            accountId,
        })
    }

    for (const item of items) {
        if (!isAssetConversionEvent(item)) continue

        const effect = assetConversionEffect(item)
        for (const { accountId, assets } of effect.accounts) {
            for (const asset of assets) add(accountId, asset)
        }
        for (const pool of effect.pools) {
            const poolAccount = poolAccountOf(pool)
            // the pool account also holds LP tokens: the minimum liquidity minted on the first deposit
            for (const asset of [...pool, ...effect.lpTokens]) add(poolAccount, asset)
        }
    }

    return { tokenAccounts: [...tokenAccounts.values()], tokens: [...tokens.values()] }
}

/**
 * Re-reads the balances and supplies AssetConversion changed from storage at the block hash. It runs after every event
 * of the block, so the end-of-block storage it reads matches the indexed state. Records absent from the database
 * (e.g. the native ENJ asset, which lives in `Balances`) or from storage (removed by `TokenAccountDestroyed`) are left
 * to their own processors.
 */
export async function refreshAssetConversionBalances(
    ctx: CommonContext,
    block: Block,
    targets: AssetConversionTargets
): Promise<void> {
    const collections = new Set<string>()
    const accounts = new Set<string>()
    const updatedAt = new Date(block.timestamp ?? 0)

    for (const key of targets.tokenAccounts) {
        const tokenAccount = await ctx.store.findOneBy(TokenAccount, {
            id: `${key.accountId}-${key.collectionId}-${key.tokenId}`,
        })
        if (!tokenAccount) continue

        const stored = await mappings.multiTokens.storage.tokenAccounts(block, {
            collectionId: key.collectionId,
            tokenId: key.tokenId,
            accountId: key.accountId,
        })
        if (!stored) continue

        tokenAccount.balance = stored.balance
        tokenAccount.reservedBalance = stored.reservedBalance
        tokenAccount.totalBalance = stored.balance + stored.reservedBalance
        tokenAccount.lockedBalance = stored.lockedBalance
        tokenAccount.updatedAt = updatedAt
        await ctx.store.save(tokenAccount)
        collections.add(key.collectionId.toString())
        accounts.add(key.accountId)
    }

    for (const asset of targets.tokens) {
        const token = await ctx.store.findOneBy(Token, { id: `${asset.collectionId}-${asset.tokenId}` })
        if (!token) continue

        const stored = await mappings.multiTokens.storage.tokens(block, {
            collectionId: asset.collectionId,
            tokenId: asset.tokenId,
        })
        if (!stored) continue

        token.supply = stored.supply
        await ctx.store.save(token)
        collections.add(asset.collectionId.toString())
    }

    for (const collectionId of collections) {
        await QueueUtils.dispatchComputeStats(collectionId)
    }

    // swaps between existing token accounts emit no account events, so recompute the stats of the accounts refreshed
    for (const accountId of accounts) {
        await QueueUtils.dispatchComputeAccountStats(accountId)
    }
}
