import { Args, ArgsType, Field, ObjectType, Query, Resolver, registerEnumType } from 'type-graphql'
import 'reflect-metadata'
import type { EntityManager } from 'typeorm'
import { Brackets, MoreThan } from 'typeorm'
import { Validate } from 'class-validator'
import { hexToU8a } from '@polkadot/util'
import Rpc from '~/util/rpc'
import {
    CoveragePolicy,
    FuelTank,
    FuelTankAccountRules,
    FuelTankRuleSet,
    RequireToken,
    TokenAccount,
    WhitelistedCallers,
} from '~/model'
import { IsPublicKey } from './helpers'

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

function matchesWhitelistedPallets(
    pallets: string[] | null | undefined,
    pallet: string,
    method: string
): boolean {
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

async function loadAccountHoldings(
    manager: EntityManager,
    account: string
): Promise<{ heldTokenIds: Set<string>; heldCollectionIds: Set<string> }> {
    const heldTokenIds = new Set<string>()
    const heldCollectionIds = new Set<string>()

    const tokenAccounts = await manager.find(TokenAccount, {
        where: {
            account: { id: account },
            balance: MoreThan(0n),
        },
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


function matchesAccountRules(
    accountRules: FuelTankAccountRules[] | undefined,
    account: string,
    heldTokenIds: Set<string>,
    heldCollectionIds: Set<string>
): boolean {
    for (const rule of accountRules ?? []) {
        if (rule.rule.isTypeOf === 'WhitelistedCallers') {
            if (!(rule.rule as WhitelistedCallers).value.includes(account)) {
                return false
            }
        }

        if (rule.rule.isTypeOf === 'RequireToken') {
            if (!matchesRequireToken(rule.rule as RequireToken, heldTokenIds, heldCollectionIds)) {
                return false
            }
        }
    }

    return true
}

function isRuleSetCompatible(
    ruleSet: FuelTankRuleSet,
    tank: FuelTank,
    account: string,
    pallet: string,
    method: string,
    heldTokenIds: Set<string>,
    heldCollectionIds: Set<string>
): boolean {
    if (ruleSet.isFrozen) {
        return false
    }

    if (ruleSet.requireSignature) {
        return false
    }

    if (!matchesWhitelistedPallets(ruleSet.whitelistedPallets, pallet, method)) {
        return false
    }

    if (!matchesWhitelistedCollections(ruleSet.whitelistedCollections, heldCollectionIds)) {
        return false
    }

    if (!matchesPermittedExtrinsics(ruleSet, pallet, method)) {
        return false
    }

    if (!matchesPermittedCalls(ruleSet.permittedCalls, method)) {
        return false
    }

    if (!matchesWhitelistedCallers(ruleSet.whitelistedCallers, account)) {
        return false
    }

    if (!matchesRequireToken(ruleSet.requireToken, heldTokenIds, heldCollectionIds)) {
        return false
    }

    if (!matchesAccountRules(tank.accountRules, account, heldTokenIds, heldCollectionIds)) {
        return false
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

async function loadTankAccounts(account: string, tankIds: string[]): Promise<Map<string, CachedFuelTankAccount | null>> {
    const cache = new Map<string, CachedFuelTankAccount | null>()

    if (!tankIds.length) {
        return cache
    }

    const { api } = await Rpc.getInstance()
    api.registerTypes(customTypes)

    await Promise.all(
        tankIds.map(async (tankId) => {
            const res = await api.query.fuelTanks.accounts(tankId, account)
            const resJson = res.toJSON() as { ruleDataSets?: Record<number, { UserFuelBudget?: string }> } | null

            cache.set(
                tankId,
                resJson
                    ? {
                          ruleDataSets: resJson.ruleDataSets,
                          registry: res.registry,
                      }
                    : null
            )
        })
    )

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

    const decoded = tankAccount.registry
        .createType('UserFuelBudget', hexToU8a(ruleData.UserFuelBudget))
        .toJSON() as { amount?: { amount?: string | number } }

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

        const tanks = await manager
            .createQueryBuilder(FuelTank, 'tank')
            .leftJoinAndSelect('tank.ruleSets', 'ruleSet')
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

        const { heldTokenIds, heldCollectionIds } = await loadAccountHoldings(manager, account)

        const candidates: Array<{
            tank: FuelTank
            ruleSet: FuelTankRuleSet
            maxBudget: bigint | null
        }> = []

        for (const tank of tanks) {
            const isAccountMember = (tank.userAccounts ?? []).some((entry) => entry.account?.id === account)

            for (const ruleSet of tank.ruleSets ?? []) {
                if (
                    !isRuleSetCompatible(
                        ruleSet,
                        tank,
                        account,
                        pallet,
                        method,
                        heldTokenIds,
                        heldCollectionIds
                    )
                ) {
                    continue
                }

                if (!isAccountMember && !ruleSet.userFuelBudget) {
                    continue
                }

                candidates.push({
                    tank,
                    ruleSet,
                    maxBudget: ruleSet.userFuelBudget?.amount ?? null,
                })
            }
        }

        const tankIdsToFetch = [
            ...new Set(
                candidates
                    .filter((candidate) => candidate.maxBudget != null && candidate.maxBudget !== 0n)
                    .map((candidate) => candidate.tank.id)
            ),
        ]

        const tankAccountsCache = await loadTankAccounts(account, tankIdsToFetch)

        const resultsByTank = new Map<string, CompatibleFuelTank>()

        for (const { tank, ruleSet, maxBudget } of candidates) {
            const remainingBudget = getRemainingBudget(tankAccountsCache.get(tank.id), ruleSet.index, maxBudget)

            if (maxBudget != null && (remainingBudget == null || remainingBudget <= 0n)) {
                continue
            }

            const consumedBudget =
                maxBudget != null && remainingBudget != null ? maxBudget - remainingBudget : null

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
