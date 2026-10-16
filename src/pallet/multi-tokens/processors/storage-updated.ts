import { hexToString } from '@polkadot/util'
import {
    Collection,
    CollectionAccount,
    CollectionApproval,
    MarketPolicy,
    MintPolicy,
    RoyaltyBeneficiary,
    Token,
    TokenAccount,
    TokenApproval,
    TokenBehaviorHasRoyalty,
    TokenBehaviorIsCurrency,
    TokenBehaviorType,
    TokenLock,
    TokenNamedReserve,
    TransferPolicy,
} from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import { DefaultRoyalty, DefaultRoyaltyInfo, TokenMarketBehavior } from '~/pallet/common/types'
import { toMintRateLimitStateModel } from '~/pallet/multi-tokens/processors/mint-rate-limit-state'
import { EventHandlerResult } from '~/processor.handler'
import { QueueUtils } from '~/queue'
import { multiTokens as multiTokensConstants } from '~/type/constants'
import { getCapType, getFreezeState, isTokenFrozen } from '~/synchronize/common'
import { getOrCreateAccount } from '~/util/entities'
import { isNonFungible } from '~/util/helpers'
import { encodeAddress, safeString } from '~/util/tools'

// `force_set_collection`, `force_set_token`, `force_set_collection_account` and `force_set_token_account` (root) and the
// RepairLegacyDeposits migration (no extrinsic) overwrite a storage record and announce it with the matching
// `*Updated` event. The record is re-read from storage at the processed block and its indexed fields are refreshed.
// A record set to `None` is only logged: deleting the entity would bypass the destroy processors' bookkeeping.

function beneficiariesOf(royalty: DefaultRoyalty | DefaultRoyaltyInfo): DefaultRoyaltyInfo[] {
    return 'beneficiaries' in royalty ? royalty.beneficiaries : [royalty]
}

async function royaltyBeneficiaries(ctx: CommonContext, royalty: DefaultRoyalty | DefaultRoyaltyInfo) {
    return Promise.all(
        beneficiariesOf(royalty).map(
            async (b) =>
                new RoyaltyBeneficiary({
                    accountId: (await getOrCreateAccount(ctx, b.beneficiary)).id,
                    percentage: b.percentage,
                })
        )
    )
}

async function tokenBehavior(ctx: CommonContext, behavior: TokenMarketBehavior | undefined) {
    if (behavior === undefined) return null
    if (behavior.__kind === 'IsCurrency') return new TokenBehaviorIsCurrency({ type: TokenBehaviorType.IsCurrency })
    return new TokenBehaviorHasRoyalty({
        type: TokenBehaviorType.HasRoyalty,
        beneficiaries: await royaltyBeneficiaries(ctx, behavior.value),
    })
}

export async function collectionUpdated(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.collectionUpdated(item)
    if (skipSave) return undefined

    const id = data.collectionId.toString()
    const [collection, stored] = await Promise.all([
        ctx.store.findOne<Collection>(Collection, { where: { id } }),
        mappings.multiTokens.storage.collections(block, { collectionId: data.collectionId }),
    ])

    if (!collection || !stored) {
        ctx.log.warn(`[CollectionUpdated] Collection ${id} is ${collection ? 'absent from storage' : 'not indexed'}`)
        return undefined
    }

    const { mint, transfer, market } = stored.policy
    collection.owner = await getOrCreateAccount(ctx, stored.owner)
    collection.mintPolicy = new MintPolicy({
        maxTokenCount: mint.maxTokenCount,
        maxTokenSupply: mint.maxTokenSupply,
        forceSingleMint: mint.forceSingleMint ?? mint.forceCollapsingSupply ?? false,
        forceCollapsingSupply: mint.forceSingleMint ?? mint.forceCollapsingSupply,
    })
    collection.transferPolicy = new TransferPolicy({ isFrozen: transfer.isFrozen })
    collection.marketPolicy =
        market.royalty === undefined
            ? null
            : new MarketPolicy({ beneficiaries: await royaltyBeneficiaries(ctx, market.royalty) })
    collection.attributeCount = stored.attributeCount
    collection.totalDeposit = stored.totalDeposit
    collection.mintRateLimit = toMintRateLimitStateModel(stored.mintRateLimit)
    await ctx.store.save(collection)

    await QueueUtils.dispatchComputeStats(id)
    return undefined
}

export async function tokenUpdated(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.tokenUpdated(item)
    if (skipSave) return undefined

    const id = `${data.collectionId}-${data.tokenId}`
    const [token, stored] = await Promise.all([
        ctx.store.findOne<Token>(Token, { where: { id } }),
        mappings.multiTokens.storage.tokens(block, { collectionId: data.collectionId, tokenId: data.tokenId }),
    ])

    if (!token || !stored) {
        ctx.log.warn(`[TokenUpdated] Token ${id} is ${token ? 'absent from storage' : 'not indexed'}`)
        return undefined
    }

    const freezeState = stored.freezeState ? getFreezeState(stored.freezeState) : null
    token.supply = stored.supply
    token.cap = stored.cap ? getCapType(stored.cap) : null
    token.freezeState = freezeState
    token.isFrozen = isTokenFrozen(freezeState)
    token.behavior = await tokenBehavior(ctx, stored.marketBehavior)
    token.listingForbidden = stored.listingForbidden
    token.attributeCount = stored.attributeCount
    if (stored.anyoneCanInfuse !== undefined) token.anyoneCanInfuse = stored.anyoneCanInfuse
    if (stored.infusion !== undefined) token.infusion = stored.infusion
    token.isLendable = stored.isLendable
    token.ephemeralExpiration = stored.ephemeralExpiration ?? null
    token.mintRateLimit = toMintRateLimitStateModel(stored.mintRateLimit)
    token.nonFungible = isNonFungible(token)
    await ctx.store.save(token)

    await QueueUtils.dispatchComputeStats(data.collectionId.toString())
    return undefined
}

export async function collectionAccountUpdated(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.collectionAccountUpdated(item)
    if (skipSave) return undefined

    const id = `${data.collectionId}-${data.accountId}`
    const [collectionAccount, stored] = await Promise.all([
        ctx.store.findOne<CollectionAccount>(CollectionAccount, { where: { id } }),
        mappings.multiTokens.storage.collectionAccounts(block, {
            collectionId: data.collectionId,
            accountId: data.accountId,
        }),
    ])

    if (!collectionAccount || !stored) {
        ctx.log.warn(
            `[CollectionAccountUpdated] Collection account ${id} is ${collectionAccount ? 'absent from storage' : 'not indexed'}`
        )
        return undefined
    }

    collectionAccount.isFrozen = stored.isFrozen
    collectionAccount.accountCount = stored.accountCount
    collectionAccount.approvals =
        stored.approvals.length === 0
            ? null
            : stored.approvals.map(
                  ([operator, expiration]) =>
                      new CollectionApproval({ accountId: encodeAddress(operator), expiration: expiration ?? null })
              )
    collectionAccount.updatedAt = new Date(block.timestamp ?? 0)
    await ctx.store.save(collectionAccount)
    return undefined
}

export async function tokenAccountUpdated(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.tokenAccountUpdated(item)
    if (skipSave) return undefined

    const id = `${data.accountId}-${data.collectionId}-${data.tokenId}`
    const [tokenAccount, stored] = await Promise.all([
        ctx.store.findOne<TokenAccount>(TokenAccount, { where: { id } }),
        mappings.multiTokens.storage.tokenAccounts(block, {
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            accountId: data.accountId,
        }),
    ])

    if (!tokenAccount || !stored) {
        ctx.log.warn(
            `[TokenAccountUpdated] Token account ${id} is ${tokenAccount ? 'absent from storage' : 'not indexed'}`
        )
        return undefined
    }

    const namedReserves = [
        ...(stored.namedReserves ?? []).map(
            ([reserveId, amount]) => new TokenNamedReserve({ pallet: safeString(hexToString(reserveId)), amount })
        ),
        ...(stored.holds ?? []).map(
            (hold) => new TokenNamedReserve({ pallet: hold.reason.__kind, amount: hold.balance })
        ),
    ]
    const locks = (stored.locks ?? []).map(
        ([lockId, amount]) => new TokenLock({ pallet: safeString(hexToString(lockId)), amount })
    )

    tokenAccount.balance = stored.balance
    tokenAccount.reservedBalance = stored.reservedBalance
    tokenAccount.totalBalance = stored.balance + stored.reservedBalance
    tokenAccount.lockedBalance = stored.lockedBalance
    tokenAccount.isFrozen = stored.isFrozen
    tokenAccount.namedReserves = namedReserves.length === 0 ? null : namedReserves
    tokenAccount.locks = locks.length === 0 ? null : locks
    tokenAccount.approvals =
        stored.approvals.length === 0
            ? null
            : stored.approvals.map(
                  ([operator, approval]) =>
                      new TokenApproval({
                          accountId: encodeAddress(operator),
                          amount: approval.amount,
                          expiration: approval.expiration ?? null,
                      })
              )
    tokenAccount.updatedAt = new Date(block.timestamp ?? 0)
    await ctx.store.save(tokenAccount)

    await QueueUtils.dispatchComputeStats(data.collectionId.toString())
    return undefined
}

/**
 * `Token.accountDepositCount` is the number of token accounts the collection owner pre-funds: the `account_deposit_count`
 * of the creating mint (the creation deposit counts as one) adjusted by `update_account_deposit`. On chain that is
 * `owner_deposit / TokenAccountDeposit + 1`. `TokenAccountDepositUpdated` is also emitted for on-demand deposits taken
 * by transfers, which leave `owner_deposit` alone, so the count is re-derived from storage instead of summing deltas.
 */
export async function tokenAccountDepositUpdated(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.tokenAccountDepositUpdated(item)
    if (skipSave) return undefined

    const id = `${data.collectionId}-${data.tokenId}`
    const [token, stored] = await Promise.all([
        ctx.store.findOne<Token>(Token, { where: { id } }),
        mappings.multiTokens.storage.tokens(block, { collectionId: data.collectionId, tokenId: data.tokenId }),
    ])

    if (!token || !stored) {
        ctx.log.warn(`[TokenAccountDepositUpdated] Token ${id} is ${token ? 'absent from storage' : 'not indexed'}`)
        return undefined
    }

    const count = ownerFundedAccountCount(block, stored)
    if (count === undefined || count === token.accountDepositCount) return undefined

    token.accountDepositCount = count
    await ctx.store.save(token)
    return undefined
}

export function ownerFundedAccountCount(
    block: Block,
    stored: { requiresDeposit?: boolean; ownerDeposit?: bigint }
): number | undefined {
    if (!stored.requiresDeposit || stored.ownerDeposit === undefined) return undefined

    const constant = multiTokensConstants.tokenAccountDeposit.matrixEnjinV603
    if (!constant.is(block)) return undefined

    const perAccount = constant.get(block)
    if (perAccount <= 0n) return undefined

    return Number(stored.ownerDeposit / perAccount) + 1
}
