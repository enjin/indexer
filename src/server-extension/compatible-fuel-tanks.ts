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
    BALANCES = 'BALANCES',
    FUEL_TANKS = 'FUEL_TANKS',
    MARKETPLACE = 'MARKETPLACE',
    MULTI_TOKENS = 'MULTI_TOKENS',
    NOMINATION_POOLS = 'NOMINATION_POOLS',
    STAKE_EXCHANGE = 'STAKE_EXCHANGE',
    STAKING = 'STAKING',
    UTILITY = 'UTILITY',
}

registerEnumType(Pallet, {
    name: 'Pallet',
    description: 'Substrate pallet name',
})

export enum ExtrinsicName {
    // Balances
    BURN = 'burn',
    FORCE_ADJUST_TOTAL_ISSUANCE = 'force_adjust_total_issuance',
    FORCE_SET_BALANCE = 'force_set_balance',
    FORCE_TRANSFER = 'force_transfer',
    FORCE_UNRESERVE = 'force_unreserve',
    TRANSFER_ALL = 'transfer_all',
    TRANSFER_ALLOW_DEATH = 'transfer_allow_death',
    TRANSFER_KEEP_ALIVE = 'transfer_keep_alive',
    UPGRADE_ACCOUNTS = 'upgrade_accounts',
    // FuelTanks
    ADD_ACCOUNT = 'add_account',
    BATCH_ADD_ACCOUNT = 'batch_add_account',
    BATCH_REMOVE_ACCOUNT = 'batch_remove_account',
    CREATE_FUEL_TANK = 'create_fuel_tank',
    DESTROY_FUEL_TANK = 'destroy_fuel_tank',
    DISPATCH = 'dispatch',
    DISPATCH_AND_TOUCH = 'dispatch_and_touch',
    FORCE_BATCH_ADD_ACCOUNT = 'force_batch_add_account',
    FORCE_CREATE_FUEL_TANK = 'force_create_fuel_tank',
    FORCE_INSERT_RULE_SET = 'force_insert_rule_set',
    FORCE_SET_CONSUMPTION = 'force_set_consumption',
    INSERT_RULE_SET = 'insert_rule_set',
    MUTATE_FREEZE_STATE = 'mutate_freeze_state',
    MUTATE_FUEL_TANK = 'mutate_fuel_tank',
    REMOVE_ACCOUNT = 'remove_account',
    REMOVE_ACCOUNT_RULE_DATA = 'remove_account_rule_data',
    REMOVE_EXPIRED_ACCOUNT = 'remove_expired_account',
    REMOVE_EXPIRED_ACCOUNT_UNSIGNED = 'remove_expired_account_unsigned',
    REMOVE_RULE_SET = 'remove_rule_set',
    // MultiTokens
    ACCEPT_COLLECTION_TRANSFER = 'accept_collection_transfer',
    ADD_TOKEN_TO_GROUP = 'add_token_to_group',
    APPROVE_COLLECTION = 'approve_collection',
    APPROVE_TOKEN = 'approve_token',
    BATCH_INFUSE = 'batch_infuse',
    BATCH_MINT = 'batch_mint',
    BATCH_SET_ATTRIBUTE = 'batch_set_attribute',
    BATCH_TRANSFER = 'batch_transfer',
    CANCEL_COLLECTION_TRANSFER = 'cancel_collection_transfer',
    CLAIM_COLLECTIONS = 'claim_collections',
    CLAIM_TOKENS = 'claim_tokens',
    CREATE_COLLECTION = 'create_collection',
    CREATE_TOKEN_GROUP = 'create_token_group',
    DESTROY_COLLECTION = 'destroy_collection',
    DESTROY_TOKEN_GROUP = 'destroy_token_group',
    FINISH_CLAIM_TOKENS = 'finish_claim_tokens',
    FORCE_APPROVE_COLLECTION = 'force_approve_collection',
    FORCE_BURN = 'force_burn',
    FORCE_CREATE_COLLECTION = 'force_create_collection',
    FORCE_CREATE_ETHEREUM_COLLECTION = 'force_create_ethereum_collection',
    FORCE_FREEZE = 'force_freeze',
    FORCE_MINT = 'force_mint',
    FORCE_MUTATE_COLLECTION = 'force_mutate_collection',
    FORCE_SET_ATTRIBUTE = 'force_set_attribute',
    FORCE_SET_COLLECTION = 'force_set_collection',
    FORCE_SET_COLLECTION_ACCOUNT = 'force_set_collection_account',
    FORCE_SET_ETHEREUM_ACCOUNT = 'force_set_ethereum_account',
    FORCE_SET_ETHEREUM_COLLECTION_ID = 'force_set_ethereum_collection_id',
    FORCE_SET_ETHEREUM_UNMINTABLE_TOKEN_IDS = 'force_set_ethereum_unmintable_token_ids',
    FORCE_SET_NEXT_COLLECTION_ID = 'force_set_next_collection_id',
    FORCE_SET_TOKEN = 'force_set_token',
    FORCE_SET_TOKEN_ACCOUNT = 'force_set_token_account',
    FORCE_SET_UNMINTABLE_TOKEN_IDS = 'force_set_unmintable_token_ids',
    FREEZE = 'freeze',
    INFUSE = 'infuse',
    MINT = 'mint',
    MUTATE_COLLECTION = 'mutate_collection',
    MUTATE_TOKEN = 'mutate_token',
    REMOVE_ALL_ATTRIBUTES = 'remove_all_attributes',
    REMOVE_ATTRIBUTE = 'remove_attribute',
    REMOVE_TOKEN_FROM_GROUP = 'remove_token_from_group',
    REMOVE_TOKEN_GROUP_ATTRIBUTE = 'remove_token_group_attribute',
    SET_ATTRIBUTE = 'set_attribute',
    SET_TOKEN_GROUP_ATTRIBUTE = 'set_token_group_attribute',
    SET_TOKEN_GROUPS = 'set_token_groups',
    THAW = 'thaw',
    TRANSFER_TOKEN = 'transfer',
    UNAPPROVE_COLLECTION = 'unapprove_collection',
    UNAPPROVE_TOKEN = 'unapprove_token',
    UPDATE_ACCOUNT_DEPOSIT = 'update_account_deposit',
    // NominationPools
    BOND = 'bond',
    CHILL = 'chill',
    CREATE = 'create',
    DESTROY = 'destroy',
    FULLY_UNBOND_DELETED_POOL = 'fully_unbond_deleted_pool',
    MUTATE = 'mutate',
    NOMINATE = 'nominate',
    PAYOUT_REWARDS = 'payout_rewards',
    PAYOUT_REWARDS_UNSIGNED = 'payout_rewards_unsigned',
    PAYOUT_VALIDATOR_BONUS = 'payout_validator_bonus',
    POOL_WITHDRAW_UNBONDED = 'pool_withdraw_unbonded',
    REMOVE_EMPTY_UNBONDING_MEMBERS = 'remove_empty_unbonding_members',
    SET_CONFIGS = 'set_configs',
    SET_STAKING_INFO = 'set_staking_info',
    SET_VALIDATOR_BONUS_CONFIG = 'set_validator_bonus_config',
    UNBOND = 'unbond',
    UNBOND_DEPOSIT = 'unbond_deposit',
    WITHDRAW_DEPOSIT = 'withdraw_deposit',
    WITHDRAW_FREE_BALANCE = 'withdraw_free_balance',
    WITHDRAW_UNBONDED = 'withdraw_unbonded',
    // StakeExchange
    ADD_LIQUIDITY = 'add_liquidity',
    BUY = 'buy',
    CANCEL_OFFER = 'cancel_offer',
    CONFIGURE_LIQUIDITY_ACCOUNT = 'configure_liquidity_account',
    CREATE_OFFER = 'create_offer',
    WITHDRAW_LIQUIDITY = 'withdraw_liquidity',
    // Staking
    BOND_EXTRA = 'bond_extra',
    CANCEL_DEFERRED_SLASH = 'cancel_deferred_slash',
    CHILL_OTHER = 'chill_other',
    DEPRECATE_CONTROLLER_BATCH = 'deprecate_controller_batch',
    FORCE_APPLY_MIN_COMMISSION = 'force_apply_min_commission',
    FORCE_NEW_ERA = 'force_new_era',
    FORCE_NEW_ERA_ALWAYS = 'force_new_era_always',
    FORCE_NO_ERAS = 'force_no_eras',
    FORCE_UNSTAKE = 'force_unstake',
    INCREASE_VALIDATOR_COUNT = 'increase_validator_count',
    KICK = 'kick',
    MANUAL_SLASH = 'manual_slash',
    MIGRATE_CURRENCY = 'migrate_currency',
    PAYOUT_STAKERS = 'payout_stakers',
    PAYOUT_STAKERS_BY_PAGE = 'payout_stakers_by_page',
    REAP_STASH = 'reap_stash',
    REBOND = 'rebond',
    RESTORE_LEDGER = 'restore_ledger',
    SCALE_VALIDATOR_COUNT = 'scale_validator_count',
    SET_CONTROLLER = 'set_controller',
    SET_INVULNERABLES = 'set_invulnerables',
    SET_MIN_COMMISSION = 'set_min_commission',
    SET_PAYEE = 'set_payee',
    SET_STAKING_CONFIGS = 'set_staking_configs',
    SET_VALIDATOR_COUNT = 'set_validator_count',
    UPDATE_PAYEE = 'update_payee',
    VALIDATE = 'validate',
    // Utility
    AS_DERIVATIVE = 'as_derivative',
    BATCH = 'batch',
    BATCH_ALL = 'batch_all',
    DISPATCH_AS = 'dispatch_as',
    DISPATCH_AS_FALLIBLE = 'dispatch_as_fallible',
    FORCE_BATCH = 'force_batch',
    IF_ELSE = 'if_else',
    WITH_WEIGHT = 'with_weight',
}

registerEnumType(ExtrinsicName, {
    name: 'ExtrinsicName',
    description: 'Extrinsic (call) name within a pallet',
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

    @Field(() => ExtrinsicName, { description: 'Dispatch method / extrinsic name' })
    method!: ExtrinsicName
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
