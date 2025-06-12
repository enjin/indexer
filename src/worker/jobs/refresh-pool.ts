import { EraReward, NominationPool } from '../../model'
import { connectionManager } from '../../contexts'
import { Job } from 'bullmq'
import Rpc from '../../util/rpc'
import { bnToU8a, hexToBigInt, hexToU8a, u8aConcat, u8aToHex, BN, stringToU8a, hexToString } from '@polkadot/util'
import Big from 'big.js'

const EMPTY_H256 = new Uint8Array(15)
const MOD_PREFIX = stringToU8a('modl')
const U32_OPTS = { bitLength: 32, isLe: true }

function createAccount(poolId: string, index: number) {
    const palletId = '0x70792f6e6f706c73'
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

export async function refreshPool(job: Job, poolId: string) {
    const em = await connectionManager()
    const { api } = await Rpc.getInstance()

    const poolPoints = await api.query.multiTokens.tokens(1n, BigInt(poolId))
    const activeStake = await api.query.staking.ledger(createAccount(poolId, 1))
    const bondedPools = await api.query.nominationPools.bondedPools(poolId)

    const eraCount = await em
        .createQueryBuilder(EraReward, 'eraReward')
        .where('eraReward.pool_id = :poolId', { poolId })
        .getCount()

    const poolPointsJson: any = poolPoints.toJSON()
    const activeStakeJson: any = activeStake.toJSON()
    const bondedPoolsJson: any = bondedPools.toJSON()
    const pool = await em.findOneOrFail(NominationPool, {
        where: { id: poolId },
    })

    if (!pool) {
        await job.log(`Pool ${poolId} not found`)
    }

    pool.points = hexToBigInt(poolPointsJson?.supply)
    pool.rate = (hexToBigInt(activeStakeJson?.active) * 1000_000_000_000_000_000n) / pool.points
    pool.saturation = pool.points > 0n ? (hexToBigInt(poolPointsJson?.supply) * 100n) / pool.capacity : 0n

    if (pool.rate && eraCount > 0) {
        pool.historicalApy = Big(pool.rate.toString())
            .div(1e18)
            .pow(Big(365).div(eraCount).round(0, Big.roundUp).toNumber())
            .sub(1)
            .mul(100)
            .toNumber()
    }

    if (bondedPoolsJson) {
        const name = bondedPoolsJson.name.toString()

        if (name == '0x') {
            pool.name = ''
        } else {
            pool.name = hexToString(name)
        }
    }

    await em.save(pool)
    await job.log(`Pool ${poolId} saved`)
}
