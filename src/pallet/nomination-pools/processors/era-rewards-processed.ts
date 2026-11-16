import Big from 'big.js'
import * as Sentry from '@sentry/node'
import { BonusCycle, CommissionPayment, Era, EraReward, NominationPool, PoolMember, PoolMemberRewards } from '~/model'
import { updatePool } from '~/pallet/nomination-pools/processors/pool'
import { Block, CommonContext, EventItem } from '~/contexts'
import { SnsEvent } from '~/util/sns'
import processorConfig from '~/util/config'
import * as mappings from '~/pallet/index'
import { TokenAccount } from '~/pallet/multi-tokens/storage/types'
import { EraRewardsProcessed } from '~/pallet/nomination-pools/events/types'
import { needEarlyBirdMerge } from '~/util/earlyBird'
import { In } from 'typeorm'
import { EventHandlerResult } from '~/processor.handler'
import { memberEraReward, poolRateChange } from '~/pallet/nomination-pools/processors/reward-math'

/** Pool shares are tokens of collection 1; the token id is the pool id. */
const POOL_COLLECTION_ID = 1n
/** Only the newest 30 era rewards are read: enough for the rate change and the 15-era APY average. */
const ERA_HISTORY = 30

type TokenAccountPair = [k: [bigint, bigint, string], v: TokenAccount | undefined]

function isPoolShareAccount([[collectionId, tokenId, accountId]]: TokenAccountPair, poolId: bigint): boolean {
    return !!accountId && tokenId == poolId && collectionId == POOL_COLLECTION_ID
}

/** Pool points per member account, read from the pool-share token accounts. */
async function getMembersBalance(block: Block, poolId: number): Promise<Record<string, bigint>> {
    const tokenId = BigInt(poolId)
    // With a collection and token id this is `StorageType.getPairs`, which always resolves to an array.
    const pairs = (await mappings.multiTokens.storage.tokenAccounts(block, {
        collectionId: POOL_COLLECTION_ID,
        tokenId,
    })) as TokenAccountPair[]

    const accountMap: Record<string, bigint> = {}
    for (const pair of pairs) {
        if (isPoolShareAccount(pair, tokenId)) {
            const [[, , accountId], tokenAccount] = pair
            accountMap[accountId] = BigInt(tokenAccount?.balance || 0)
        }
    }

    return accountMap
}

function commissionPayment(data: EraRewardsProcessed): CommissionPayment | null {
    return data.commission
        ? new CommissionPayment({ beneficiary: data.commission.beneficiary, amount: data.commission.amount })
        : null
}

/**
 * This event was removed in v1060 (enjinV1062), so it only fires for historical blocks — the period when the bonus
 * mechanism was still live. Faithfully record what the chain reports (bonusCycle from storage, EraReward.bonus from
 * the event) so a full resync reconstructs the real historical bonus data. See reward-math.ts.
 */
async function recordEndedBonusCycle(
    ctx: CommonContext,
    block: Block,
    data: EraRewardsProcessed,
    pool: NominationPool
) {
    if (!data.bonusCycleEnded) return

    const poolInfo = await mappings.nominationPools.storage.bondedPools(block, data.poolId)
    if (!poolInfo) throw new Error('Pool info not found')
    if (poolInfo.bonusCycle === undefined) return

    pool.bonusCycle = new BonusCycle({
        start: poolInfo.bonusCycle.start,
        end: poolInfo.bonusCycle.end,
        previousStart: poolInfo.bonusCycle.previousStart,
        pendingDuration: poolInfo.bonusCycle.pendingDuration,
    })
    await ctx.store.save(pool)
}

/** A replayed event refreshes the stored era reward from the event; member rewards are left as they are. */
async function refreshEraReward(
    ctx: CommonContext,
    reward: EraReward,
    data: EraRewardsProcessed,
    pool: NominationPool
) {
    reward.bonus = data.bonus
    reward.commission = commissionPayment(data)
    reward.reinvested = data.reinvested
    reward.rate = pool.rate

    await ctx.store.save(reward)
    if (data.commission) {
        await ctx.store.save(pool)
    }
}

async function createEra(ctx: CommonContext, block: Block, index: number) {
    await ctx.store.save(
        new Era({
            id: index.toString(),
            index,
            startAt: new Date(block.timestamp ?? 0),
            startBlock: block.height,
            nodeCount: 0,
        })
    )
}

/** Newest first. Read BEFORE inserting the new reward, so it never contains the era being processed. */
function previousEraRewards(ctx: CommonContext, pool: NominationPool): Promise<EraReward[]> {
    return ctx.store.find(EraReward, {
        where: { pool: { id: pool.id } },
        relations: { era: true },
        order: { era: { index: 'desc' } },
        take: ERA_HISTORY,
    })
}

function newEraReward(data: EraRewardsProcessed, pool: NominationPool, history: EraReward[]): EraReward {
    const id = `${data.poolId}-${data.era}`
    return new EraReward({
        id,
        era: new Era({ id: data.era.toString() }),
        bonus: data.bonus, // historical path only (event removed in v1060) — real chain value
        rate: pool.rate,
        commission: commissionPayment(data),
        pool,
        apy: 0,
        averageApy: 0,
        active: pool.balance.active,
        // Current rate minus the previous era's rate; the first era is measured against the 1e18 starting rate.
        changeInRate: poolRateChange(pool.rate, id, history),
        reinvested: data.reinvested,
    })
}

/** `(ratio ^ erasPerYear - 1) * 100`: a per-era growth ratio compounded over a year, as a percentage. */
function annualise(ratio: Big): Big {
    return ratio.pow(processorConfig.erasPerYear).sub(1).mul(100)
}

/**
 * Sets the reward's own APY and returns the pool APY. The first era is priced from the rate itself; later eras
 * from the active balance growth since the previous era, averaged with the history by `computeEraApy`.
 */
function eraApy(reward: EraReward, history: EraReward[], poolApy: number): Big {
    if (history.length === 0) {
        const apy = annualise(Big(reward.rate.toString()).div(Big(10).pow(18)))
        reward.apy = apy.toNumber()
        return apy
    }

    const previousBalance = Big(history[0].active.toString())
    const newBalance = Big(reward.reinvested.toString()).plus(previousBalance)
    reward.apy = annualise(newBalance.div(previousBalance)).toNumber()

    return computeEraApy([reward, ...history], poolApy)
}

function isSuspiciousApy(apy: Big, previousApy: number): boolean {
    const value = apy.toNumber()
    if (value < 0 || value > 200) return true

    return previousApy > 1 && apy.minus(previousApy).times(2).div(apy.plus(previousApy)).times(100).abs().gt(50)
}

function applyApy(pool: NominationPool, reward: EraReward, apy: Big) {
    if (isSuspiciousApy(apy, pool.apy)) {
        Sentry.captureMessage(`Pool ${pool.id} has apy: ${apy.toNumber()}%, previous: ${pool.apy}%`, 'warning')
    }

    pool.apy = Math.max(apy.toNumber(), 0)
    reward.averageApy = apy.toNumber()
}

function accumulateCommission(pool: NominationPool, data: EraRewardsProcessed) {
    if (data.commission) {
        pool.accumulatedCommission = (pool.accumulatedCommission ?? 0n) + data.commission.amount
    }
}

function findMembers(ctx: CommonContext, pool: NominationPool, memberBalances: Record<string, bigint>) {
    const memberIds = Object.keys(memberBalances).map((accountId) => `${pool.id}-${accountId}`)
    return ctx.store.find(PoolMember, {
        relations: {
            account: true,
        },
        where: {
            id: In(memberIds), // NOTE: This is a workaround to include all accounts with balances, as some accounts may not be returned by isActive.
        },
    })
}

type MemberRewards = { inserts: PoolMemberRewards[]; updates: PoolMemberRewards[] }

/**
 * Credits each member with its share of what compounded into the pool rate (points * changeInRate / 1e18), which
 * matches the member's real value growth and Subscan; see reward-math.ts. When an early-bird mint already created
 * the member's row for this era, the era reward is added to it instead of inserting a new row.
 */
async function rewardMembers(
    ctx: CommonContext,
    era: number,
    pool: NominationPool,
    reward: EraReward,
    members: PoolMember[],
    memberBalances: Record<string, bigint>
): Promise<MemberRewards> {
    const earlyBirdMergeNeeded = await needEarlyBirdMerge(ctx, era)
    // Inserts are faster than saves, so new rows are inserted and only merged rows are saved.
    const result: MemberRewards = { inserts: [], updates: [] }

    for (const member of members) {
        const points = memberBalances[member.account.id] ?? 0n
        const rewards = memberEraReward(points, reward.changeInRate)
        const accumulatedRewards = (member.accumulatedRewards || 0n) + rewards
        member.accumulatedRewards = accumulatedRewards

        const id = `${member.id}-${era}`
        const minted = earlyBirdMergeNeeded ? await ctx.store.findOneBy(PoolMemberRewards, { id }) : undefined
        if (minted) {
            minted.reward = reward
            minted.points = points
            minted.rewards += rewards // the mint stored the early-bird amount; add the era reward to it
            minted.accumulatedRewards = accumulatedRewards
            result.updates.push(minted)
        } else {
            result.inserts.push(
                new PoolMemberRewards({ id, pool, member, reward, points, rewards, accumulatedRewards })
            )
        }
    }

    return result
}

async function saveEraRewards(
    ctx: CommonContext,
    reward: EraReward,
    pool: NominationPool,
    members: PoolMember[],
    { inserts, updates }: MemberRewards
) {
    // The era reward must exist before the member rewards that reference it.
    await ctx.store.insert(reward)

    await Promise.all([
        ctx.store.save(pool),
        ctx.store.save(members),
        inserts.length && ctx.store.insert(inserts),
        updates.length && ctx.store.save(updates),
    ])
}

function eraRewardsSnsEvent(item: EventItem, extrinsicId: string, data: EraRewardsProcessed, pool: NominationPool) {
    const snsEvent: SnsEvent = {
        id: item.id,
        name: item.name,
        body: {
            pool: data.poolId.toString(),
            era: data.era,
            rate: pool.rate,
            extrinsic: extrinsicId,
            name: pool.name,
            tokenId: `2-${pool.tokenId}`,
        },
    }
    return snsEvent
}

export async function eraRewardsProcessed(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventHandlerResult> {
    if (!item.extrinsic) return undefined

    const data = mappings.nominationPools.events.eraRewardsProcessed(item)

    const [existReward, memberBalances, era] = await Promise.all([
        ctx.store.findOneBy(EraReward, { id: `${data.poolId}-${data.era}` }),
        getMembersBalance(block, data.poolId),
        ctx.store.findOneBy(Era, { id: data.era.toString() }),
    ])
    const pool = await updatePool(ctx, block, data.poolId.toString())

    await recordEndedBonusCycle(ctx, block, data, pool)

    if (existReward) {
        await refreshEraReward(ctx, existReward, data, pool)
        return undefined
    }

    if (!era) await createEra(ctx, block, data.era)

    if (pool.isDestroying()) return undefined

    const history = await previousEraRewards(ctx, pool)
    const reward = newEraReward(data, pool, history)
    applyApy(pool, reward, eraApy(reward, history, pool.apy))
    accumulateCommission(pool, data)

    const members = await findMembers(ctx, pool, memberBalances)
    const memberRewards = await rewardMembers(ctx, data.era, pool, reward, members, memberBalances)
    await saveEraRewards(ctx, reward, pool, members, memberRewards)

    return [
        mappings.nominationPools.events.eraRewardsProcessedEventModel(item, data, pool.rate, pool.tokenId),
        eraRewardsSnsEvent(item, item.extrinsic.id, data, pool),
    ]
}

export const discardEra = (apy: number, totalApy: number) => {
    if (totalApy === 0) {
        return false
    }

    return Math.abs(apy - totalApy) >= 50
}

export const computeEraApy = (eraRewards: EraReward[], poolApy: number): Big => {
    if (eraRewards.length === 1) {
        return Big(eraRewards[0].apy)
    }

    const validApys = eraRewards.filter((reward) => !discardEra(reward.apy, poolApy))
    const validApysLength = validApys.slice(0, 15).length
    const sumOfApy = validApys.slice(0, 15).reduce((acc, reward) => acc + reward.apy, 0)

    if (validApys.length === 0) {
        return Big(poolApy)
    }

    const finalApy = Big(sumOfApy).div(validApysLength)

    if (finalApy.minus(poolApy).gt(50)) {
        return Big(validApys[0].averageApy)
    }

    return finalApy
}
