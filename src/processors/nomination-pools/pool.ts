import { BN, bnToU8a, hexToU8a, stringToU8a, u8aConcat, u8aToHex } from '@polkadot/util'
import Big from 'big.js'
import { constants, storage } from '../../types/generated'
import { BlockHeader, CommonContext } from '../types/contexts'
import { EarlyBirdDetails, EraReward, NominationPool, PoolBalance } from '../../model'
import config from '../../config'
import { UnknownVersionError } from '../../common/errors'

const EMPTY_H256 = new Uint8Array(15)
const MOD_PREFIX = stringToU8a('modl')
const U32_OPTS = { bitLength: 32, isLe: true }

export function createAccount(block: BlockHeader, poolId: string, index: number) {
    const palletId = constants.nominationPools.palletId.enjinV100.get(block)
    return u8aToHex(
        u8aConcat(MOD_PREFIX, hexToU8a(palletId), new Uint8Array([index]), bnToU8a(new BN(poolId), U32_OPTS), EMPTY_H256)
    )
}

async function fetchPoolBalance(block: BlockHeader, poolId: string) {
    const accounts = [createAccount(block, poolId, 1), createAccount(block, poolId, 2), createAccount(block, poolId, 3)]

    if (storage.system.account.enjinV100.is(block)) {
        return storage.system.account.enjinV100.getMany(block, accounts)
    }

    if (storage.system.account.v104.is(block)) {
        return storage.system.account.v104.getMany(block, accounts)
    }

    if (storage.system.account.v100.is(block)) {
        return storage.system.account.v100.getMany(block, accounts)
    }

    throw new UnknownVersionError('System.Account')
}

async function getPoolPointsStorage(block: BlockHeader, poolId: string) {
    if (storage.multiTokens.tokens.enjinV1032.is(block)) {
        return storage.multiTokens.tokens.enjinV1032.get(block, 1n, BigInt(poolId))
    }

    if (storage.multiTokens.tokens.enjinV100.is(block)) {
        return storage.multiTokens.tokens.enjinV100.get(block, 1n, BigInt(poolId))
    }

    if (storage.multiTokens.tokens.v1050.is(block)) {
        return storage.multiTokens.tokens.v1050.get(block, 1n, BigInt(poolId))
    }

    if (storage.multiTokens.tokens.v1030.is(block)) {
        return storage.multiTokens.tokens.v1030.get(block, 1n, BigInt(poolId))
    }

    if (storage.multiTokens.tokens.v102.is(block)) {
        return storage.multiTokens.tokens.v102.get(block, 1n, BigInt(poolId))
    }

    if (storage.multiTokens.tokens.v100.is(block)) {
        return storage.multiTokens.tokens.v100.get(block, 1n, BigInt(poolId))
    }

    throw new UnknownVersionError('MultiTokens.Tokens')
}

async function getActiveStake(block: BlockHeader, poolId: string) {
    if (storage.staking.ledger.enjinV1032.is(block)) {
        return storage.staking.ledger.enjinV1032.get(block, createAccount(block, poolId, 1))
    }

    if (storage.staking.ledger.enjinV100.is(block)) {
        return storage.staking.ledger.enjinV100.get(block, createAccount(block, poolId, 1))
    }

    if (storage.staking.ledger.v1030.is(block)) {
        return storage.staking.ledger.v1030.get(block, createAccount(block, poolId, 1))
    }

    if (storage.staking.ledger.v100.is(block)) {
        return storage.staking.ledger.v100.get(block, createAccount(block, poolId, 1))
    }

    throw new UnknownVersionError('Staking.Ledger')
}

export async function updatePool(ctx: CommonContext, block: BlockHeader, poolId: string) {
    const [pool, poolBalance, poolPoints, activeStake, eraCount] = await Promise.all([
        ctx.store.findOneByOrFail(NominationPool, { id: poolId }),
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
            .pow(Big(config.erasPerYear).div(eraCount).round(0, Big.roundUp).toNumber())
            .sub(1)
            .mul(100)
            .toNumber()
    }

    await ctx.store.save(pool)

    return pool
}

function getEarlyBirdBonusDistributionBlockConstant(block: BlockHeader) {
    if (constants.nominationPools.earlyBirdBonusDistributionBlock.enjinV101.is(block)) {
        return constants.nominationPools.earlyBirdBonusDistributionBlock.enjinV101.get(block)
    }

    return 0
}

async function getEarlyBirdBonusInfo(block: BlockHeader) {
    if (storage.nominationPools.earlyBirdBonusInfo.enjinV1023.is(block)) {
        return storage.nominationPools.earlyBirdBonusInfo.enjinV1023.get(block)
    }

    if (storage.nominationPools.earlyBirdBonusInfo.enjinV1021.is(block)) {
        return storage.nominationPools.earlyBirdBonusInfo.enjinV1021.get(block)
    }

    if (storage.nominationPools.earlyBirdBonusInfo.v1023.is(block)) {
        return storage.nominationPools.earlyBirdBonusInfo.v1023.get(block)
    }

    if (storage.nominationPools.earlyBirdBonusInfo.v1021.is(block)) {
        return storage.nominationPools.earlyBirdBonusInfo.v1021.get(block)
    }

    return {
        bonusCalculated: false,
        currentPaymentId: null,
        nextPaymentBlock: null,
        totalPaid: null,
    }
}

export async function updateEarlyBirdInfo(ctx: CommonContext, block: BlockHeader) {
    try {
        const earlyBirdBonusDistributionBlock = getEarlyBirdBonusDistributionBlockConstant(block)
        const bonusInfo = await getEarlyBirdBonusInfo(block)

        if (!bonusInfo) {
            return
        }

        const earlyBird = new EarlyBirdDetails({
            id: '0',
            earlyBirdBonusDistributionBlock,
            bonusCalculated: bonusInfo.bonusCalculated,
            currentPaymentId: bonusInfo.currentPaymentId,
            nextPaymentBlock: bonusInfo.nextPaymentBlock,
            totalPaid: 'totalPaid' in bonusInfo ? bonusInfo.totalPaid : 0n,
        })

        await ctx.store.save(earlyBird)
    } catch (error) {
        console.warn(error)
    }
}
