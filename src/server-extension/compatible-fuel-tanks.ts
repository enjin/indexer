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

    @Field(() => String, { description: 'Pallet name, e.g. MULTI_TOKENS' })
    pallet!: string

    @Field(() => String, { description: 'Dispatch method / extrinsic name, e.g. CREATE_TOKEN' })
    method!: string
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
