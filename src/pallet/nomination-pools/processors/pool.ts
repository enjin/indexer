import Big from 'big.js'
import { constants } from '../../../type'
import { Block, CommonContext } from '../../../contexts'
import { EarlyBirdDetails, EraReward, NominationPool, PoolBalance } from '../../../model'
import processorConfig from '../../../util/config'
import * as mappings from '../../index'
import { BN } from '@polkadot/util'
import { bnToU8a, hexToU8a, stringToU8a, u8aConcat, u8aToHex } from '@polkadot/util'

const EMPTY_H256 = new Uint8Array(15)
const MOD_PREFIX = stringToU8a('modl')
const U32_OPTS = { bitLength: 32, isLe: true }

export function createAccount(block: Block, poolId: string, index: number) {
    const palletId = constants.nominationPools.palletId.enjinV100.get(block)
    return u8aToHex(
        u8aConcat(
            MOD_PREFIX,
            hexToU8a(palletId),
            new Uint8Array([index]),
            bnToU8a(new BN(poolId), U32_OPTS),
            EMPTY_H256
        )
    )
}

async function fetchPoolBalance(block: Block, poolId: string) {
    const accounts = [createAccount(block, poolId, 1), createAccount(block, poolId, 2), createAccount(block, poolId, 3)]
    return await mappings.system.storage.accounts(block, { accounts: accounts })
}

async function getPoolPointsStorage(block: Block, poolId: string) {
    return await mappings.multiTokens.storage.tokens(block, { collectionId: 1n, tokenId: BigInt(poolId) })
}

async function getActiveStake(block: Block, poolId: string) {
    return await mappings.staking.storage.ledger(block, createAccount(block, poolId, 1))
}

export async function updatePool(ctx: CommonContext, block: Block, poolId: string) {
    const [pool, poolBalance, poolPoints, activeStake, eraCount] = await Promise.all([
        ctx.store.findOneByOrFail<NominationPool>(NominationPool, { id: poolId }),
        fetchPoolBalance(block, poolId),
        getPoolPointsStorage(block, poolId),
        getActiveStake(block, poolId),
        ctx.store.countBy(EraReward, { pool: { id: poolId } }),
    ])

    pool.points = poolPoints?.supply ?? 0n
    pool.historicalApy = 0

    pool.balance = new PoolBalance({
        stash: poolBalance[0]?.data.free ?? 0n,
        reward: poolBalance[1]?.data.free ?? 0n,
        bonus: poolBalance[2]?.data.free ?? 0n,
        active: activeStake?.active ?? 0n,
    })

    if (poolPoints && poolPoints.supply > 0n && activeStake) {
        pool.rate = (activeStake.active * 1000_000_000_000_000_000n) / pool.points
    }
    if (poolPoints) {
        pool.availableStakePoints = pool.capacity - poolPoints.supply
        pool.availableStakeAmount = (pool.availableStakePoints * pool.rate) / 1000_000_000_000_000_000n
    }

    if (poolPoints) {
        pool.saturation = pool.points > 0n ? (poolPoints.supply * 100n) / pool.capacity : 0n
    }

    if (pool.rate && eraCount > 0) {
        pool.historicalApy = Big(pool.rate.toString())
            .div(1e18)
            .pow(Big(processorConfig.erasPerYear).div(eraCount).round(0, Big.roundUp).toNumber())
            .sub(1)
            .mul(100)
            .toNumber()
    }

    await ctx.store.save(pool)

    return pool
}

export async function updateEarlyBirdInfo(ctx: CommonContext, block: Block) {
    try {
        const earlyBirdBonusDistributionBlock =
            mappings.nominationPools.constants.earlyBirdBonusDistributionBlock(block)
        const bonusInfo = await mappings.nominationPools.storage.earlyBirdBonusInfo(block)
        const earlyBird = new EarlyBirdDetails({
            id: '0',
            earlyBirdBonusDistributionBlock,
            bonusCalculated: bonusInfo?.bonusCalculated,
            currentPaymentId: bonusInfo?.currentPaymentId,
            nextPaymentBlock: bonusInfo?.nextPaymentBlock,
            totalPaid: bonusInfo ? ('totalPaid' in bonusInfo ? bonusInfo.totalPaid : 0n) : 0n,
        })

        await ctx.store.save(earlyBird)
    } catch (error) {
        console.warn(error)
    }
}
