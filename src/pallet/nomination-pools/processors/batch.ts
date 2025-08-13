import { In } from 'typeorm'
import { BlockHeader } from '@subsquid/substrate-processor'
import { CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import {
    Era,
    PoolMember,
    Token,
    TokenAccount,
    UnbondingEras,
    Collection,
    FreezeState,
    Event as EventModel,
    Extrinsic,
    NominationPoolsRewardPaid,
    NominationPoolsEraRewardsProcessed,
    CommissionPayment,
    BonusCycle,
    EraReward,
    PoolMemberRewards,
    PoolState,
} from '~/model'
import { updatePool } from './pool'
import { events } from '~/type'
import Big from 'big.js'
import processorConfig from '~/util/config'
import { Sns } from '~/util/sns'
import { needEarlyBirdMerge } from '~/util/earlyBird'
import { getOrCreateAccount } from '~/util/entities'

// Collectors
interface BondedSpec {
    poolId: string
    member: string
    bonded: bigint
}
interface UnbondedSpec {
    poolId: string
    member: string
    balance: bigint
    era: number
}
interface WithdrawnSpec {
    poolId: string
    member: string
}
interface RewardPaidSpec {
    id: string
    extrinsicId?: string
    poolId: string
    era: number
    reward: bigint
    bonus: bigint
    validatorStash: string
}
interface EraRewardsProcessedSpec {
    id: string
    extrinsicId?: string
    poolId: string
    era: number
    bonus: bigint
    reinvested: bigint
    commission?: { beneficiary: string; amount: bigint } | null
    bonusCycleEnded?: boolean
}

const bondedSpecs: BondedSpec[] = []
const unbondedSpecs: UnbondedSpec[] = []
const withdrawnSpecs: WithdrawnSpec[] = []
const rewardPaidSpecs: RewardPaidSpec[] = []
const eraRewardsProcessedSpecs: EraRewardsProcessedSpec[] = []

export function collect(eventItem: EventItem): void {
    try {
        if (eventItem.name === events.nominationPools.bonded.name) {
            const d = mappings.nominationPools.events.bonded(eventItem)
            bondedSpecs.push({ poolId: d.poolId.toString(), member: d.member, bonded: d.bonded })
            return
        }
        if (eventItem.name === events.nominationPools.unbonded.name) {
            const d = mappings.nominationPools.events.unbonded(eventItem)
            if (d.balance !== 0n) {
                unbondedSpecs.push({ poolId: d.poolId.toString(), member: d.member, balance: d.balance, era: d.era })
            }
            return
        }
        if (eventItem.name === events.nominationPools.withdrawn.name) {
            const d = mappings.nominationPools.events.withdrawn(eventItem)
            withdrawnSpecs.push({ poolId: d.poolId.toString(), member: d.member })
            return
        }
        if (eventItem.name === events.nominationPools.rewardPaid.name) {
            const d = mappings.nominationPools.events.rewardPaid(eventItem)
            rewardPaidSpecs.push({
                id: eventItem.id,
                extrinsicId: eventItem.extrinsic?.id,
                poolId: d.poolId.toString(),
                era: d.era,
                reward: d.reward,
                bonus: d.bonus,
                validatorStash: d.validatorStash as string,
            })
            return
        }
        if (eventItem.name === events.nominationPools.eraRewardsProcessed.name) {
            const d = mappings.nominationPools.events.eraRewardsProcessed(eventItem)
            eraRewardsProcessedSpecs.push({
                id: eventItem.id,
                extrinsicId: eventItem.extrinsic?.id,
                poolId: d.poolId.toString(),
                era: d.era,
                bonus: d.bonus,
                reinvested: d.reinvested,
                commission: d.commission
                    ? { beneficiary: d.commission.beneficiary, amount: d.commission.amount }
                    : null,
                bonusCycleEnded: d.bonusCycleEnded,
            })
            return
        }
    } catch {}
}

function groupByPool<T extends { poolId: string }>(arr: T[]): Map<string, T[]> {
    const m = new Map<string, T[]>()
    for (const it of arr) {
        const g = m.get(it.poolId)
        if (g) g.push(it)
        else m.set(it.poolId, [it])
    }
    return m
}

// tokenAccounts iterator type from storage
type TokenAccountStorageEntry = [
    k: [bigint, bigint, string],
    v: import('~/pallet/multi-tokens/storage/types').TokenAccount | undefined,
]

async function getMembersBalance(block: BlockHeader, poolId: number): Promise<Record<string, bigint>> {
    const result = await mappings.multiTokens.storage.tokenAccounts(block as any, {
        collectionId: 1n,
        tokenId: BigInt(poolId),
    })

    const accountMap: Record<string, bigint> = {}

    if (Symbol.asyncIterator in (result as any)) {
        for await (const batch of result as AsyncIterable<TokenAccountStorageEntry[]>) {
            for (const storageEntry of batch) {
                if (storageEntry[0][2] && storageEntry[0][1] == BigInt(poolId) && storageEntry[0][0] == 1n) {
                    const [[, , accountId], tokenAccount] = storageEntry
                    accountMap[accountId] = BigInt(tokenAccount?.balance || 0)
                }
            }
        }
    } else if (Symbol.iterator in (result as any)) {
        for (const storageEntry of result as TokenAccountStorageEntry[]) {
            if (storageEntry[0][2] && storageEntry[0][1] == BigInt(poolId) && storageEntry[0][0] == 1n) {
                const [[, , accountId], tokenAccount] = storageEntry
                accountMap[accountId] = BigInt(tokenAccount?.balance || 0)
            }
        }
    }

    return accountMap
}

export async function processBatch(ctx: CommonContext, lastBlock: BlockHeader): Promise<void> {
    if (
        bondedSpecs.length === 0 &&
        unbondedSpecs.length === 0 &&
        withdrawnSpecs.length === 0 &&
        rewardPaidSpecs.length === 0 &&
        eraRewardsProcessedSpecs.length === 0
    )
        return

    // Load latest era for join timestamps
    const [activeEra]: [Era] = (await ctx.store.find(Era, { order: { index: 'DESC' }, take: 1 })) as any

    // Process bonded per pool
    const bondedByPool = groupByPool(bondedSpecs)
    for (const [poolId, specs] of bondedByPool) {
        const pool = await updatePool(ctx, lastBlock as any, poolId)
        const memberIds = specs.map((s) => `${poolId}-${s.member}`)
        const tokenAccountIds = specs.map((s) => `${s.member}-1-${poolId}`)

        const [members, tokenAccounts] = await Promise.all([
            ctx.store.find(PoolMember, { where: { id: In(memberIds) } }),
            ctx.store.find(TokenAccount, { where: { id: In(tokenAccountIds) } }),
        ])
        const memberById = new Map(members.map((m) => [m.id, m]))
        const tokenAccountById = new Map(tokenAccounts.map((ta) => [ta.id, ta]))

        // Ensure Token 1-poolId exists
        const tokenId = `1-${poolId}`
        let token = await ctx.store.findOne(Token, { where: { id: tokenId } })
        if (!token) {
            token = new Token({
                id: tokenId,
                tokenId: BigInt(poolId),
                supply: 0n,
                cap: null,
                behavior: null,
                isFrozen: false,
                freezeState: null as unknown as FreezeState | null,
                accountDepositCount: 0,
                infusion: 0n,
                anyoneCanInfuse: false,
                minimumBalance: 1n,
                unitPrice: null,
                mintDeposit: 0n,
                attributeCount: 0,
                collection: new Collection({ id: '1' }),
                metadata: null,
                nonFungible: true,
                // do not set nominationPool here
                createdAt: new Date(),
            })
            await ctx.store.save(token)
        }

        // Ensure missing TokenAccounts exist
        const toInsertTokenAccounts: TokenAccount[] = []
        for (const s of specs) {
            const taId = `${s.member}-1-${poolId}`
            if (!tokenAccountById.has(taId)) {
                const ta = new TokenAccount({
                    id: taId,
                    balance: 0n,
                    totalBalance: 0n,
                    reservedBalance: 0n,
                    lockedBalance: 0n,
                    namedReserves: null,
                    locks: null,
                    approvals: null,
                    isFrozen: false,
                    account: { id: s.member } as any,
                    collection: new Collection({ id: '1' }),
                    token: new Token({ id: tokenId }),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                })
                toInsertTokenAccounts.push(ta)
                tokenAccountById.set(taId, ta)
            }
        }
        if (toInsertTokenAccounts.length) await ctx.store.save(toInsertTokenAccounts)

        const toInsertMembers: PoolMember[] = []
        const toSaveMembers: PoolMember[] = []
        for (const s of specs) {
            const mid = `${poolId}-${s.member}`
            const taId = `${s.member}-1-${poolId}`
            let member = memberById.get(mid)
            if (!member) {
                member = new PoolMember({
                    id: mid,
                    pool,
                    account: { id: s.member } as any,
                    bonded: s.bonded,
                    tokenAccount: { id: taId } as any,
                    accumulatedRewards: 0n,
                    isStash: pool.totalMembers === 0,
                    isActive: true,
                    joinedEra: activeEra,
                })
                toInsertMembers.push(member)
                pool.totalMembers += 1
            } else {
                member.bonded += s.bonded
                member.tokenAccount = { id: taId } as any
                if (pool.totalMembers === 0) member.isStash = true
                if (!member.isActive) {
                    member.isActive = true
                    pool.totalMembers += 1
                }
                toSaveMembers.push(member)
            }
        }
        if (toInsertMembers.length) await ctx.store.save(toInsertMembers)
        if (toSaveMembers.length) await ctx.store.save(toSaveMembers)
        await ctx.store.save(pool)
    }

    // Process unbonded per pool
    const unbondedByPool = groupByPool(unbondedSpecs)
    for (const [poolId, specs] of unbondedByPool) {
        const pool = await updatePool(ctx, lastBlock as any, poolId)
        const memberIds = specs.map((s) => `${poolId}-${s.member}`)
        const members = await ctx.store.find(PoolMember, {
            where: { id: In(memberIds) },
            relations: { tokenAccount: true },
        })
        const memberById = new Map(members.map((m) => [m.id, m]))

        for (const s of specs) {
            const member = memberById.get(`${poolId}-${s.member}`)
            if (!member) continue
            member.bonded -= s.balance
            if (member.tokenAccount?.totalBalance === 0n) member.bonded = 0n
            member.unbondingEras = (member.unbondingEras || []).concat([
                new UnbondingEras({ era: s.era, balance: s.balance }),
            ])
        }
        if (members.length) await ctx.store.save(members)
        await ctx.store.save(pool)
    }

    // Process withdrawn per pool
    const withdrawnByPool = groupByPool(withdrawnSpecs)
    for (const [poolId, specs] of withdrawnByPool) {
        const pool = await updatePool(ctx, lastBlock as any, poolId)
        const memberIds = specs.map((s) => `${poolId}-${s.member}`)
        const members = await ctx.store.find(PoolMember, {
            where: { id: In(memberIds) },
            relations: { tokenAccount: true },
        })
        const [activeEra] = (await ctx.store.find(Era, { order: { index: 'DESC' }, take: 1 })) as any

        for (const m of members) {
            if (m.unbondingEras && m.unbondingEras.length > 1) {
                m.unbondingEras = m.unbondingEras.filter((era) => era.era > activeEra.index)
                if (m.unbondingEras.length === 0) m.unbondingEras = null
            } else {
                m.unbondingEras = null
            }
            if (m.unbondingEras === null && (!m.tokenAccount || m.tokenAccount.balance <= 0n)) {
                m.bonded = 0n
                m.isActive = false
                pool.totalMembers -= 1
            }
        }
        if (members.length) await ctx.store.save(members)
        await ctx.store.save(pool)
    }

    // Process rewardPaid specs into Event models
    if (rewardPaidSpecs.length > 0) {
        const eventsToSave: EventModel[] = []
        for (const s of rewardPaidSpecs) {
            const validator = await getOrCreateAccount(ctx, s.validatorStash)
            eventsToSave.push(
                new EventModel({
                    id: s.id,
                    name: 'NominationPools.RewardPaid',
                    extrinsic: s.extrinsicId ? new Extrinsic({ id: s.extrinsicId }) : null,
                    data: new NominationPoolsRewardPaid({
                        pool: s.poolId,
                        poolId: s.poolId,
                        era: s.era,
                        reward: s.reward,
                        bonus: s.bonus,
                        validatorStash: validator.id,
                    }),
                })
            )
        }
        if (eventsToSave.length) await ctx.store.save(eventsToSave)
    }

    // Process EraRewardsProcessed specs (heavy path)
    for (const s of eraRewardsProcessedSpecs) {
        const pool = await updatePool(ctx, lastBlock as any, s.poolId)

        if (s.bonusCycleEnded) {
            const poolInfo = await mappings.nominationPools.storage.bondedPools(lastBlock as any, Number(s.poolId))
            if (poolInfo && poolInfo.bonusCycle !== undefined) {
                pool.bonusCycle = new BonusCycle({
                    start: poolInfo.bonusCycle.start,
                    end: poolInfo.bonusCycle.end,
                    previousStart: poolInfo.bonusCycle.previousStart,
                    pendingDuration: poolInfo.bonusCycle.pendingDuration,
                })
                await ctx.store.save(pool)
            }
        }

        const rewardId = `${s.poolId}-${s.era}`
        const [existReward, memberBalances, era] = await Promise.all([
            ctx.store.findOneBy(EraReward, { id: rewardId }),
            getMembersBalance(lastBlock, Number(s.poolId)),
            ctx.store.findOneBy(Era, { id: s.era.toString() }),
        ])

        if (existReward) {
            existReward.bonus = s.bonus
            existReward.commission = s.commission
                ? new CommissionPayment({ beneficiary: s.commission.beneficiary, amount: s.commission.amount })
                : null
            existReward.reinvested = s.reinvested
            existReward.rate = pool.rate
            await ctx.store.save(existReward)
            if (s.commission) await ctx.store.save(pool)
            continue
        }

        if (!era) {
            await ctx.store.save(
                new Era({
                    id: s.era.toString(),
                    index: s.era,
                    startAt: new Date((lastBlock as any).timestamp ?? 0),
                    startBlock: lastBlock.height,
                    nodeCount: 0,
                })
            )
        }

        if (pool.state === PoolState.Destroying) {
            continue
        }

        const prevEraRewards = await ctx.store.find(EraReward, {
            where: { pool: { id: pool.id } },
            relations: { era: true },
            order: { era: { index: 'desc' } },
            take: 14,
        })

        const changeInRate =
            prevEraRewards.length > 0
                ? Big(pool.rate.toString()).minus(Big(prevEraRewards[0].rate.toString()))
                : Big(pool.rate.toString()).minus(10 ** 18)

        const reward = new EraReward({
            id: rewardId,
            era: new Era({ id: s.era.toString() }),
            bonus: s.bonus,
            rate: pool.rate,
            commission: s.commission
                ? new CommissionPayment({ beneficiary: s.commission.beneficiary, amount: s.commission.amount })
                : null,
            pool,
            apy: 0,
            averageApy: 0,
            active: pool.balance.active,
            changeInRate: BigInt(changeInRate.toString()),
            reinvested: s.reinvested,
        })

        let apy: Big.Big
        if (prevEraRewards.length === 0) {
            const rate = Big(pool.rate.toString())
            const decimals = Big(10).pow(18)
            apy = rate.div(decimals).pow(processorConfig.erasPerYear).sub(1).mul(100)
            reward.apy = apy.toNumber()
        } else {
            const previousBalance = Big(prevEraRewards[0].active.toString())
            const newBalance = Big(reward.reinvested.toString()).plus(previousBalance)
            const currentApy = newBalance.div(previousBalance).pow(processorConfig.erasPerYear).sub(1).mul(100)
            reward.apy = currentApy.toNumber()
            prevEraRewards.unshift(reward)
            const validApys = prevEraRewards.filter((er) => Math.abs(er.apy - pool.apy) < 50)
            const sumOfApy = validApys.reduce((acc, er) => acc + er.apy, 0)
            apy = validApys.length === 0 ? Big(pool.apy) : Big(sumOfApy).div(validApys.length)
        }

        if (
            apy.toNumber() < 0 ||
            apy.toNumber() > 200 ||
            (pool.apy > 1 && Big(apy).minus(pool.apy).times(2).div(Big(apy).plus(pool.apy)).times(100).abs().gt(50))
        ) {
            Sns.getInstance().send({
                id: s.id,
                name: 'NominationPools.EraRewardsProcessed',
                body: {
                    pool: s.poolId.toString(),
                    era: s.era,
                    rate: pool.rate,
                    extrinsic: s.extrinsicId,
                    name: pool.name,
                    tokenId: `2-${pool.tokenId}`,
                },
            })
        }

        pool.apy = Math.max(apy.toNumber(), 0)
        reward.averageApy = apy.toNumber()

        if (s.commission) {
            pool.accumulatedCommission = (pool.accumulatedCommission ?? 0n) + s.commission.amount
        }

        const memberIds = Object.keys(memberBalances).map((accountId) => `${pool.id}-${accountId}`)
        const members = await ctx.store.find(PoolMember, {
            relations: { account: true },
            where: { id: In(memberIds) },
        })

        const totalPoolPoints = (pool.balance.active * 10n ** 18n) / pool.rate
        const earlyBirdMergeNeeded = await needEarlyBirdMerge(ctx, s.era)

        const inserts: PoolMemberRewards[] = []
        const updates: PoolMemberRewards[] = []
        for (const member of members) {
            const points = memberBalances[member.account.id] ?? 0n
            const eraRewards = (points * s.reinvested) / totalPoolPoints
            const newAccumulated = (member.accumulatedRewards || 0n) + eraRewards
            member.accumulatedRewards = newAccumulated
            const pmrId = `${member.id}-${s.era}`
            if (earlyBirdMergeNeeded) {
                const existing = await ctx.store.findOneBy(PoolMemberRewards, { id: pmrId })
                if (existing) {
                    existing.reward = reward
                    existing.points = points
                    existing.rewards += eraRewards
                    existing.accumulatedRewards = newAccumulated
                    updates.push(existing)
                    continue
                }
            }
            inserts.push(
                new PoolMemberRewards({
                    id: pmrId,
                    pool,
                    member,
                    reward,
                    points,
                    rewards: eraRewards,
                    accumulatedRewards: newAccumulated,
                })
            )
        }

        await ctx.store.insert(reward)
        await Promise.all([
            ctx.store.save(pool),
            ctx.store.save(members),
            inserts.length && ctx.store.insert(inserts as any),
            updates.length && ctx.store.save(updates),
        ])

        const ev = new EventModel({
            id: s.id,
            name: 'NominationPoolsEraRewardsProcessed',
            extrinsic: s.extrinsicId ? new Extrinsic({ id: s.extrinsicId }) : null,
            data: new NominationPoolsEraRewardsProcessed({
                pool: s.poolId.toString(),
                poolId: s.poolId.toString(),
                tokenId: pool.tokenId,
                era: s.era,
                eraReward: rewardId,
                rate: pool.rate,
            }),
        })
        await ctx.store.save(ev)
    }

    bondedSpecs.length = 0
    unbondedSpecs.length = 0
    withdrawnSpecs.length = 0
    rewardPaidSpecs.length = 0
    eraRewardsProcessedSpecs.length = 0
}
