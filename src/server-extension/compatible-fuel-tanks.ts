import { Args, ArgsType, Field, ObjectType, Query, Resolver, registerEnumType } from 'type-graphql'
import 'reflect-metadata'
import type { EntityManager } from 'typeorm'
import { Brackets, In, MoreThan } from 'typeorm'
import { Validate } from 'class-validator'
import { hexToU8a } from '@polkadot/util'
import Rpc from '~/util/rpc'
import { CoveragePolicy, FuelTank, FuelTankRuleSet, RequireToken, TokenAccount, WhitelistedCallers } from '~/model'
import { IsPublicKey } from './helpers'
import { ApiPromise } from '@polkadot/api'

registerEnumType(CoveragePolicy, {
    name: 'CoveragePolicy',
})

export enum Pallet {
    balances = 'balances',
    fuel_tanks = 'fuel_tanks',
    marketplace = 'marketplace',
    multi_tokens = 'multi_tokens',
    nomination_pools = 'nomination_pools',
    stake_exchange = 'stake_exchange',
    staking = 'staking',
    utility = 'utility',
}

registerEnumType(Pallet, {
    name: 'Pallet',
    description: 'Substrate pallet name',
})

export enum MethodName {
    // Balances
    burn = 'burn',
    force_adjust_total_issuance = 'force_adjust_total_issuance',
    force_set_balance = 'force_set_balance',
    force_transfer = 'force_transfer',
    force_unreserve = 'force_unreserve',
    transfer_all = 'transfer_all',
    transfer_allow_death = 'transfer_allow_death',
    transfer_keep_alive = 'transfer_keep_alive',
    upgrade_accounts = 'upgrade_accounts',
    // FuelTanks
    add_account = 'add_account',
    batch_add_account = 'batch_add_account',
    batch_remove_account = 'batch_remove_account',
    create_fuel_tank = 'create_fuel_tank',
    destroy_fuel_tank = 'destroy_fuel_tank',
    dispatch = 'dispatch',
    dispatch_and_touch = 'dispatch_and_touch',
    force_batch_add_account = 'force_batch_add_account',
    force_create_fuel_tank = 'force_create_fuel_tank',
    force_insert_rule_set = 'force_insert_rule_set',
    force_set_consumption = 'force_set_consumption',
    insert_rule_set = 'insert_rule_set',
    mutate_freeze_state = 'mutate_freeze_state',
    mutate_fuel_tank = 'mutate_fuel_tank',
    remove_account = 'remove_account',
    remove_account_rule_data = 'remove_account_rule_data',
    remove_expired_account = 'remove_expired_account',
    remove_expired_account_unsigned = 'remove_expired_account_unsigned',
    remove_rule_set = 'remove_rule_set',
    // MultiTokens
    accept_collection_transfer = 'accept_collection_transfer',
    add_token_to_group = 'add_token_to_group',
    approve_collection = 'approve_collection',
    approve_token = 'approve_token',
    batch_infuse = 'batch_infuse',
    batch_mint = 'batch_mint',
    batch_set_attribute = 'batch_set_attribute',
    batch_transfer = 'batch_transfer',
    cancel_collection_transfer = 'cancel_collection_transfer',
    claim_collections = 'claim_collections',
    claim_tokens = 'claim_tokens',
    create_collection = 'create_collection',
    create_token_group = 'create_token_group',
    destroy_collection = 'destroy_collection',
    destroy_token_group = 'destroy_token_group',
    finish_claim_tokens = 'finish_claim_tokens',
    force_approve_collection = 'force_approve_collection',
    force_burn = 'force_burn',
    force_create_collection = 'force_create_collection',
    force_create_ethereum_collection = 'force_create_ethereum_collection',
    force_freeze = 'force_freeze',
    force_mint = 'force_mint',
    force_mutate_collection = 'force_mutate_collection',
    force_set_attribute = 'force_set_attribute',
    force_set_collection = 'force_set_collection',
    force_set_collection_account = 'force_set_collection_account',
    force_set_ethereum_account = 'force_set_ethereum_account',
    force_set_ethereum_collection_id = 'force_set_ethereum_collection_id',
    force_set_ethereum_unmintable_token_ids = 'force_set_ethereum_unmintable_token_ids',
    force_set_next_collection_id = 'force_set_next_collection_id',
    force_set_token = 'force_set_token',
    force_set_token_account = 'force_set_token_account',
    force_set_unmintable_token_ids = 'force_set_unmintable_token_ids',
    freeze = 'freeze',
    infuse = 'infuse',
    mint = 'mint',
    mutate_collection = 'mutate_collection',
    mutate_token = 'mutate_token',
    remove_all_attributes = 'remove_all_attributes',
    remove_attribute = 'remove_attribute',
    remove_token_from_group = 'remove_token_from_group',
    remove_token_group_attribute = 'remove_token_group_attribute',
    set_attribute = 'set_attribute',
    set_token_group_attribute = 'set_token_group_attribute',
    set_token_groups = 'set_token_groups',
    thaw = 'thaw',
    transfer = 'transfer',
    unapprove_collection = 'unapprove_collection',
    unapprove_token = 'unapprove_token',
    update_account_deposit = 'update_account_deposit',
    // Marketplace
    add_whitelisted_accounts = 'add_whitelisted_accounts',
    answer_counter_offer = 'answer_counter_offer',
    cancel_listing = 'cancel_listing',
    convert_listings = 'convert_listings',
    create_listing = 'create_listing',
    fill_listing = 'fill_listing',
    finalize_auction = 'finalize_auction',
    finalize_auction_unsigned = 'finalize_auction_unsigned',
    force_cancel_listing = 'force_cancel_listing',
    force_create_listing = 'force_create_listing',
    force_place_bid = 'force_place_bid',
    place_bid = 'place_bid',
    place_counter_offer = 'place_counter_offer',
    remove_expired_listing = 'remove_expired_listing',
    remove_expired_listing_unsigned = 'remove_expired_listing_unsigned',
    remove_whitelisted_accounts = 'remove_whitelisted_accounts',
    set_protocol_fee = 'set_protocol_fee',
    upgrade_listings = 'upgrade_listings',
    // NominationPools
    bond = 'bond',
    chill = 'chill',
    create = 'create',
    destroy = 'destroy',
    fully_unbond_deleted_pool = 'fully_unbond_deleted_pool',
    mutate = 'mutate',
    nominate = 'nominate',
    payout_rewards = 'payout_rewards',
    payout_rewards_unsigned = 'payout_rewards_unsigned',
    payout_validator_bonus = 'payout_validator_bonus',
    pool_withdraw_unbonded = 'pool_withdraw_unbonded',
    remove_empty_unbonding_members = 'remove_empty_unbonding_members',
    set_configs = 'set_configs',
    set_staking_info = 'set_staking_info',
    set_validator_bonus_config = 'set_validator_bonus_config',
    unbond = 'unbond',
    unbond_deposit = 'unbond_deposit',
    withdraw_deposit = 'withdraw_deposit',
    withdraw_free_balance = 'withdraw_free_balance',
    withdraw_unbonded = 'withdraw_unbonded',
    // StakeExchange
    add_liquidity = 'add_liquidity',
    buy = 'buy',
    cancel_offer = 'cancel_offer',
    configure_liquidity_account = 'configure_liquidity_account',
    create_offer = 'create_offer',
    withdraw_liquidity = 'withdraw_liquidity',
    // Staking
    bond_extra = 'bond_extra',
    cancel_deferred_slash = 'cancel_deferred_slash',
    chill_other = 'chill_other',
    deprecate_controller_batch = 'deprecate_controller_batch',
    force_apply_min_commission = 'force_apply_min_commission',
    force_new_era = 'force_new_era',
    force_new_era_always = 'force_new_era_always',
    force_no_eras = 'force_no_eras',
    force_unstake = 'force_unstake',
    increase_validator_count = 'increase_validator_count',
    kick = 'kick',
    manual_slash = 'manual_slash',
    migrate_currency = 'migrate_currency',
    payout_stakers = 'payout_stakers',
    payout_stakers_by_page = 'payout_stakers_by_page',
    reap_stash = 'reap_stash',
    rebond = 'rebond',
    restore_ledger = 'restore_ledger',
    scale_validator_count = 'scale_validator_count',
    set_controller = 'set_controller',
    set_invulnerables = 'set_invulnerables',
    set_min_commission = 'set_min_commission',
    set_payee = 'set_payee',
    set_staking_configs = 'set_staking_configs',
    set_validator_count = 'set_validator_count',
    update_payee = 'update_payee',
    validate = 'validate',
    // Utility
    as_derivative = 'as_derivative',
    batch = 'batch',
    batch_all = 'batch_all',
    dispatch_as = 'dispatch_as',
    dispatch_as_fallible = 'dispatch_as_fallible',
    force_batch = 'force_batch',
    if_else = 'if_else',
    with_weight = 'with_weight',
}

registerEnumType(MethodName, {
    name: 'MethodName',
    description: 'Method name within a pallet',
})

const customTypes = {
    UserFuelBudget: {
        amount: 'PalletFuelTanksBudget',
        userCount: 'Compact<u32>',
    },
}

function normalizeKey(value: string): string {
    return value.replace(/_/g, '').toLowerCase()
}

function matchesWhitelistedCollections(
    collections: (string | undefined | null)[] | null | undefined,
    heldCollectionIds: Set<string>
): boolean {
    const listed = (collections ?? []).filter((entry): entry is string => entry != null)

    if (!listed.length) {
        return true
    }

    return listed.some((collectionId) => heldCollectionIds.has(collectionId))
}

function satisfiesRequireToken(
    requirement: RequireToken,
    heldTokenIds: Set<string>,
    heldCollectionIds: Set<string>
): boolean {
    const collectionKey = requirement.collectionId.toString()

    if (requirement.tokenId != null) {
        return heldTokenIds.has(`${collectionKey}-${requirement.tokenId.toString()}`)
    }

    return heldCollectionIds.has(collectionKey)
}

function matchesRequireToken(
    requirement: RequireToken | null | undefined,
    heldTokenIds: Set<string>,
    heldCollectionIds: Set<string>
): boolean {
    if (!requirement) {
        return true
    }

    return satisfiesRequireToken(requirement, heldTokenIds, heldCollectionIds)
}

function addRequireTokenLookupKeys(requirement: RequireToken, tokenIds: Set<string>, collectionIds: Set<string>): void {
    const collectionKey = requirement.collectionId.toString()

    if (requirement.tokenId != null) {
        tokenIds.add(`${collectionKey}-${requirement.tokenId.toString()}`)
        return
    }

    collectionIds.add(collectionKey)
}

type PreCandidate = { tank: FuelTank; ruleSet: FuelTankRuleSet }

/**
 * Collect token/collection lookup keys from candidates that already passed cheap checks.
 * Includes whitelistedCollections so those holdings are also resolved correctly.
 */
function collectCandidateLookupKeys(candidates: PreCandidate[]): { tokenIds: string[]; collectionIds: string[] } {
    const tokenIds = new Set<string>()
    const collectionIds = new Set<string>()
    const seenTanks = new Set<string>()

    for (const { tank, ruleSet } of candidates) {
        if (ruleSet.requireToken) {
            addRequireTokenLookupKeys(ruleSet.requireToken, tokenIds, collectionIds)
        }

        for (const collectionId of ruleSet.whitelistedCollections ?? []) {
            if (collectionId != null) collectionIds.add(collectionId)
        }

        if (!seenTanks.has(tank.id)) {
            seenTanks.add(tank.id)
            for (const accountRule of tank.accountRules ?? []) {
                if (accountRule.rule.isTypeOf === 'RequireToken') {
                    addRequireTokenLookupKeys(accountRule.rule as RequireToken, tokenIds, collectionIds)
                }
            }
        }
    }

    return { tokenIds: [...tokenIds], collectionIds: [...collectionIds] }
}

async function loadAccountHoldings(
    manager: EntityManager,
    account: string,
    lookupKeys: { tokenIds: string[]; collectionIds: string[] }
): Promise<{ heldTokenIds: Set<string>; heldCollectionIds: Set<string> }> {
    const heldTokenIds = new Set<string>()
    const heldCollectionIds = new Set<string>()

    const { tokenIds, collectionIds } = lookupKeys

    if (!tokenIds.length && !collectionIds.length) {
        return { heldTokenIds, heldCollectionIds }
    }

    const where = []

    if (tokenIds.length) {
        where.push({
            account: { id: account },
            balance: MoreThan(0n),
            token: { id: In(tokenIds) },
        })
    }

    if (collectionIds.length) {
        where.push({
            account: { id: account },
            balance: MoreThan(0n),
            collection: { id: In(collectionIds) },
        })
    }

    const tokenAccounts = await manager.find(TokenAccount, {
        where,
        relations: { token: true, collection: true },
    })

    for (const tokenAccount of tokenAccounts) {
        if (tokenAccount.token?.id) {
            heldTokenIds.add(tokenAccount.token.id)
        }

        if (tokenAccount.collection?.id) {
            heldCollectionIds.add(tokenAccount.collection.id)
        }
    }

    return { heldTokenIds, heldCollectionIds }
}

/**
 * Phase 2 – token-based checks that require the account holdings to be resolved first.
 * Phase 1 (frozen, requireSignature, requireAccount, pallet/method, callers, calls)
 * is handled entirely by SQL in the JOIN condition — see the query builder below.
 * Only tank-level WhitelistedCallers account rules and token checks remain in TypeScript.
 */
function isRuleSetCompatibleWithTokens(
    ruleSet: FuelTankRuleSet,
    tank: FuelTank,
    heldTokenIds: Set<string>,
    heldCollectionIds: Set<string>
): boolean {
    if (!matchesWhitelistedCollections(ruleSet.whitelistedCollections, heldCollectionIds)) return false
    if (!matchesRequireToken(ruleSet.requireToken, heldTokenIds, heldCollectionIds)) return false

    for (const rule of tank.accountRules ?? []) {
        if (rule.rule.isTypeOf === 'RequireToken') {
            if (!matchesRequireToken(rule.rule as RequireToken, heldTokenIds, heldCollectionIds)) return false
        }
    }

    return true
}

type FuelTankAccountRegistry = {
    createType(type: string, value: Uint8Array): { toJSON(): unknown }
}

type CachedFuelTankAccount = {
    ruleDataSets?: Record<number, { UserFuelBudget?: string }>
    registry: FuelTankAccountRegistry
}

async function loadTankAccounts(
    api: ApiPromise,
    account: string,
    tankIds: string[]
): Promise<Map<string, CachedFuelTankAccount | null>> {
    const cache = new Map<string, CachedFuelTankAccount | null>()

    if (!tankIds.length) {
        return cache
    }

    const keys = tankIds.map((tankId) => [tankId, account])
    const results = await api.query.fuelTanks.accounts.multi(keys)
    const registry = api.registry as FuelTankAccountRegistry

    tankIds.forEach((tankId, index) => {
        const resJson = results[index]?.toJSON() as {
            ruleDataSets?: Record<number, { UserFuelBudget?: string }>
        } | null

        cache.set(
            tankId,
            resJson
                ? {
                      ruleDataSets: resJson.ruleDataSets,
                      registry,
                  }
                : null
        )
    })

    return cache
}

function getRemainingBudget(
    tankAccount: CachedFuelTankAccount | null | undefined,
    ruleSetIndex: number,
    maxBudget: bigint | null | undefined
): bigint | null {
    if (maxBudget == null || maxBudget === 0n) {
        return null
    }

    if (!tankAccount?.ruleDataSets) {
        return maxBudget
    }

    const ruleData = tankAccount.ruleDataSets[ruleSetIndex] ?? tankAccount.ruleDataSets[0]

    if (!ruleData?.UserFuelBudget) {
        return maxBudget
    }

    const decoded = tankAccount.registry.createType('UserFuelBudget', hexToU8a(ruleData.UserFuelBudget)).toJSON() as {
        amount?: { amount?: string | number }
    }

    const consumption = BigInt(decoded?.amount?.amount?.toString() ?? '0')
    return maxBudget >= consumption ? maxBudget - consumption : 0n
}

@ArgsType()
class CompatibleFuelTanksArgs {
    @Field(() => String)
    @Validate(IsPublicKey)
    account!: string

    @Field(() => Pallet, { description: 'Pallet name' })
    pallet!: Pallet

    @Field(() => MethodName, { description: 'Dispatch method name' })
    method!: MethodName
}

@ObjectType()
class CompatibleFuelTankRuleSet {
    @Field(() => String)
    id!: string

    @Field(() => Number)
    index!: number

    constructor(props: Partial<CompatibleFuelTankRuleSet>) {
        Object.assign(this, props)
    }
}

@ObjectType()
export class CompatibleFuelTank {
    @Field(() => String)
    id!: string

    @Field(() => String)
    name!: string

    @Field(() => Boolean)
    providesDeposit!: boolean

    @Field(() => CoveragePolicy, { nullable: true })
    coveragePolicy?: CoveragePolicy | null

    @Field(() => CompatibleFuelTankRuleSet)
    ruleSet!: CompatibleFuelTankRuleSet

    @Field(() => BigInt, { nullable: true })
    remainingBudget?: bigint

    @Field(() => BigInt, { nullable: true })
    maxBudget?: bigint

    @Field(() => BigInt, { nullable: true })
    consumedBudget?: bigint

    @Field(() => BigInt, { nullable: true })
    tankBalance?: bigint

    constructor(props: Partial<CompatibleFuelTank>) {
        Object.assign(this, props)
    }
}

@Resolver()
export class CompatibleFuelTanksResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => [CompatibleFuelTank])
    async compatibleFuelTanks(
        @Args() { account, pallet, method }: CompatibleFuelTanksArgs
    ): Promise<CompatibleFuelTank[]> {
        const manager = await this.tx()

        const { api } = await Rpc.getInstance()
        api.registerTypes(customTypes)

        const normalizedPallet = normalizeKey(pallet)
        const normalizedMethod = normalizeKey(method)

        // All rule-set-level filters (frozen, requireSignature, requireAccount,
        // whitelistedPallets, whitelistedCallers, permittedCalls, permittedExtrinsics)
        // are pushed into the JOIN ON condition so PostgreSQL eliminates non-matching
        // rule sets before they are hydrated into TypeScript objects.
        // Only tank-level account rules and token-based checks remain in TypeScript.
        const ruleSetJoinCondition = `
            ruleSet.isFrozen = false
            AND ruleSet.requireSignature IS NULL
            AND (ruleSet.requireAccount = false OR ruleSet.requireAccount IS NULL
                 OR EXISTS (
                     SELECT 1 FROM fuel_tank_user_accounts ua
                     WHERE ua.tank_id = tank.id AND ua.account_id = :account
                 ))
            AND (ruleSet.whitelistedCallers IS NULL
                 OR cardinality(ruleSet.whitelistedCallers) = 0
                 OR :account = ANY(ruleSet.whitelistedCallers))
            AND (ruleSet.whitelistedPallets IS NULL
                 OR cardinality(ruleSet.whitelistedPallets) = 0
                 OR EXISTS (
                     SELECT 1 FROM unnest(ruleSet.whitelistedPallets) AS p
                     WHERE (p NOT LIKE '%:%' AND LOWER(REPLACE(p, '_', '')) = :normalizedPallet)
                        OR (p LIKE '%:%'
                            AND LOWER(REPLACE(SPLIT_PART(p, ':', 1), '_', '')) = :normalizedPallet
                            AND LOWER(REPLACE(SPLIT_PART(p, ':', 2), '_', '')) = :normalizedMethod)
                 ))
            AND (ruleSet.permittedCalls IS NULL
                 OR cardinality(ruleSet.permittedCalls) = 0
                 OR EXISTS (
                     SELECT 1 FROM unnest(ruleSet.permittedCalls) AS c
                     WHERE LOWER(REPLACE(c, '_', '')) = :normalizedMethod
                 ))
            AND (ruleSet.isPermittedExtrinsicsEmpty = true
                 OR ruleSet.isPermittedExtrinsicsNull = true
                 OR EXISTS (
                     SELECT 1 FROM permitted_extrinsics pe
                     WHERE pe.rule_set_id = "ruleSet"."id"
                       AND LOWER(REPLACE(pe.pallet_name, '_', '')) = :normalizedPallet
                       AND LOWER(REPLACE(pe.extrinsic_name, '_', '')) = :normalizedMethod
                 ))
        `

        const tanks = await manager
            .createQueryBuilder(FuelTank, 'tank')
            .leftJoinAndSelect('tank.ruleSets', 'ruleSet', ruleSetJoinCondition, {
                account,
                normalizedPallet,
                normalizedMethod,
            })
            .leftJoinAndSelect('tank.userAccounts', 'userAccount')
            .leftJoinAndSelect('userAccount.account', 'userAccountAccount')
            .leftJoinAndSelect('tank.accountRules', 'accountRule')
            .leftJoinAndSelect('tank.tankAccount', 'tankAccount')
            .where('tank.isFrozen = :frozen', { frozen: false })
            .andWhere(
                new Brackets((qb) => {
                    qb.where('userAccountAccount.id = :account', { account }).orWhere(
                        'ruleSet.userFuelBudget IS NOT NULL'
                    )
                })
            )
            .orderBy('tank.name', 'ASC')
            .getMany()

        // ── Phase 1: account-level rules (one check per tank, not per rule set) ──
        // All rule-set-level checks have already been applied by SQL above.
        // The only TypeScript-side filter left is tank.accountRules WhitelistedCallers,
        // which cannot be expressed per-rule-set in the JOIN condition.
        const preCandidates: PreCandidate[] = []

        for (const tank of tanks) {
            const isAccountMember = (tank.userAccounts ?? []).some((entry) => entry.account?.id === account)

            const accountRulesPass = (tank.accountRules ?? []).every(
                (rule) =>
                    rule.rule.isTypeOf !== 'WhitelistedCallers' ||
                    (rule.rule as WhitelistedCallers).value.includes(account)
            )

            if (!accountRulesPass) continue

            for (const ruleSet of tank.ruleSets ?? []) {
                if (!isAccountMember && !ruleSet.userFuelBudget) continue
                preCandidates.push({ tank, ruleSet })
            }
        }

        // ── Phase 2 + 3: token check (DB) and budget check (RPC) in parallel ─────
        // After phase 1 we know which tanks need RPC budget data, so we fire both
        // queries simultaneously and wait for both before proceeding.
        const lookupKeys = collectCandidateLookupKeys(preCandidates)

        const tankIdsWithBudget = [
            ...new Set(
                preCandidates
                    .filter(({ ruleSet }) => {
                        const amount = ruleSet.userFuelBudget?.amount
                        return amount != null && amount !== 0n
                    })
                    .map(({ tank }) => tank.id)
            ),
        ]

        const [{ heldTokenIds, heldCollectionIds }, tankAccountsCache] = await Promise.all([
            loadAccountHoldings(manager, account, lookupKeys),
            loadTankAccounts(api, account, tankIdsWithBudget),
        ])

        // ── Phase 2 filter: token-based rule checks ───────────────────────────────
        const candidates: Array<{ tank: FuelTank; ruleSet: FuelTankRuleSet; maxBudget: bigint | null }> = []

        for (const { tank, ruleSet } of preCandidates) {
            if (!isRuleSetCompatibleWithTokens(ruleSet, tank, heldTokenIds, heldCollectionIds)) continue
            candidates.push({ tank, ruleSet, maxBudget: ruleSet.userFuelBudget?.amount ?? null })
        }

        // ── Phase 3 filter: remaining budget check (uses pre-fetched RPC data) ───

        const resultsByTank = new Map<string, CompatibleFuelTank>()

        for (const { tank, ruleSet, maxBudget } of candidates) {
            const remainingBudget = getRemainingBudget(tankAccountsCache.get(tank.id), ruleSet.index, maxBudget)

            if (maxBudget != null && (remainingBudget == null || remainingBudget <= 0n)) {
                continue
            }

            const consumedBudget = maxBudget != null && remainingBudget != null ? maxBudget - remainingBudget : null

            const entry = new CompatibleFuelTank({
                id: tank.id,
                name: tank.name,
                providesDeposit: tank.providesDeposit,
                coveragePolicy: tank.coveragePolicy,
                ruleSet: new CompatibleFuelTankRuleSet({
                    id: ruleSet.id,
                    index: ruleSet.index,
                }),
                remainingBudget: remainingBudget ?? undefined,
                maxBudget: maxBudget ?? undefined,
                consumedBudget: consumedBudget ?? undefined,
                tankBalance: tank.tankAccount?.balance?.free,
            })

            const existing = resultsByTank.get(tank.id)
            const entryRemaining = remainingBudget ?? 0n
            const existingRemaining = existing?.remainingBudget ?? 0n

            if (!existing || entryRemaining > existingRemaining) {
                resultsByTank.set(tank.id, entry)
            }
        }

        return [...resultsByTank.values()].sort((a, b) => a.name.localeCompare(b.name))
    }
}
