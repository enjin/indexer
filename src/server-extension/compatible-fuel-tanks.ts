import { Args, ArgsType, Field, ObjectType, Query, Resolver, registerEnumType } from 'type-graphql'
import 'reflect-metadata'
import type { EntityManager } from 'typeorm'
import { Brackets, In, MoreThan } from 'typeorm'
import { Validate } from 'class-validator'
import { hexToU8a } from '@polkadot/util'
import Rpc from '~/util/rpc'
import {
    CoveragePolicy,
    FuelTank,
    FuelTankRuleSet,
    RequireToken,
    TokenAccount,
    WhitelistedCallers,
} from '~/model'
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

function matchesWhitelistedPallets(pallets: string[] | null | undefined, pallet: string, method: string): boolean {
    if (!pallets?.length) {
        return true
    }

    const targetPallet = normalizeKey(pallet)
    const targetMethod = normalizeKey(method)

    return pallets.some((entry) => {
        if (entry.includes(':')) {
            const [p, m] = entry.split(':')
            return normalizeKey(p) === targetPallet && normalizeKey(m) === targetMethod
        }

        return normalizeKey(entry) === targetPallet
    })
}

function matchesPermittedExtrinsics(ruleSet: FuelTankRuleSet, pallet: string, method: string): boolean {
    if (ruleSet.isPermittedExtrinsicsEmpty || ruleSet.isPermittedExtrinsicsNull) {
        return true
    }

    const targetPallet = normalizeKey(pallet)
    const targetMethod = normalizeKey(method)

    return (ruleSet.permittedExtrinsics ?? []).some(
        (extrinsic) =>
            normalizeKey(extrinsic.palletName ?? '') === targetPallet &&
            normalizeKey(extrinsic.extrinsicName ?? '') === targetMethod
    )
}

function matchesPermittedCalls(calls: string[] | null | undefined, method: string): boolean {
    if (!calls?.length) {
        return true
    }

    const target = normalizeKey(method)

    return calls.some((call) => normalizeKey(call) === target)
}

function matchesWhitelistedCallers(callers: string[] | null | undefined, account: string): boolean {
    if (!callers?.length) {
        return true
    }

    return callers.includes(account)
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
 * Phase 1 – cheap checks that require no DB or RPC calls.
 * Filters by pallet/method rules, caller whitelists, and account membership.
 * WhitelistedCollections and RequireToken are deferred to phase 2.
 */
function isRuleSetCompatibleCheap(
    ruleSet: FuelTankRuleSet,
    tank: FuelTank,
    account: string,
    pallet: string,
    method: string,
    isAccountMember: boolean
): boolean {
    if (ruleSet.isFrozen) return false
    if (ruleSet.requireSignature) return false
    if (ruleSet.requireAccount && !isAccountMember) return false
    if (!matchesWhitelistedPallets(ruleSet.whitelistedPallets, pallet, method)) return false
    if (!matchesPermittedExtrinsics(ruleSet, pallet, method)) return false
    if (!matchesPermittedCalls(ruleSet.permittedCalls, method)) return false
    if (!matchesWhitelistedCallers(ruleSet.whitelistedCallers, account)) return false

    for (const rule of tank.accountRules ?? []) {
        if (rule.rule.isTypeOf === 'WhitelistedCallers') {
            if (!(rule.rule as WhitelistedCallers).value.includes(account)) return false
        }
    }

    return true
}

/**
 * Phase 2 – token-based checks that require the account holdings to be resolved first.
 * Only called on rule sets that already passed the cheap phase.
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

        // Only load rule sets that are not already disqualified at the DB level.
        // The JOIN condition pre-filters frozen and requireSignature rule sets so
        // we never hydrate entities that will be thrown away immediately.
        const tanks = await manager
            .createQueryBuilder(FuelTank, 'tank')
            .leftJoinAndSelect(
                'tank.ruleSets',
                'ruleSet',
                'ruleSet.isFrozen = false AND ruleSet.requireSignature IS NULL'
            )
            .leftJoinAndSelect('ruleSet.permittedExtrinsics', 'permittedExtrinsic')
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

        // ── Phase 1: cheap in-memory checks (no DB or RPC) ───────────────────────
        // Filter by pallet/method rules, caller whitelists, and account membership.
        // Token-based checks (requireToken, whitelistedCollections) are deferred.
        const preCandidates: PreCandidate[] = []

        for (const tank of tanks) {
            const isAccountMember = (tank.userAccounts ?? []).some((entry) => entry.account?.id === account)

            for (const ruleSet of tank.ruleSets ?? []) {
                if (!isRuleSetCompatibleCheap(ruleSet, tank, account, pallet, method, isAccountMember)) continue
                if (!isAccountMember && !ruleSet.userFuelBudget) continue
                preCandidates.push({ tank, ruleSet })
            }
        }

        // ── Phase 2: token-based checks (one DB query, only if needed) ───────────
        // Collect lookup keys exclusively from surviving pre-candidates so we never
        // query token accounts for rule sets that were already eliminated above.
        const lookupKeys = collectCandidateLookupKeys(preCandidates)
        const { heldTokenIds, heldCollectionIds } = await loadAccountHoldings(manager, account, lookupKeys)

        const candidates: Array<{ tank: FuelTank; ruleSet: FuelTankRuleSet; maxBudget: bigint | null }> = []

        for (const { tank, ruleSet } of preCandidates) {
            if (!isRuleSetCompatibleWithTokens(ruleSet, tank, heldTokenIds, heldCollectionIds)) continue
            candidates.push({ tank, ruleSet, maxBudget: ruleSet.userFuelBudget?.amount ?? null })
        }

        // ── Phase 3: budget check (RPC, only for candidates that have a budget) ──
        const tankIdsToFetch = [
            ...new Set(
                candidates
                    .filter((c) => c.maxBudget != null && c.maxBudget !== 0n)
                    .map((c) => c.tank.id)
            ),
        ]

        const tankAccountsCache = await loadTankAccounts(api, account, tankIdsToFetch)

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
