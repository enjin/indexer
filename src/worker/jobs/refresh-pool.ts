import { NominationPool } from '../../model'
import { Block, connectionManager } from '../../contexts'
import { Job } from 'bullmq'
import * as mappings from '../../pallet/index'
import Rpc from '../../util/rpc'
async function getPoolPointsStorage(block: Block, poolId: string) {
    return await mappings.multiTokens.storage.tokens(block, { collectionId: 1n, tokenId: BigInt(poolId) })
}

export async function refreshPool(job: Job, poolId: string) {
    const em = await connectionManager()
    const { api } = await Rpc.getInstance()
    const block = 1

    const poolPoints = await api.query.multiTokens.tokens(1n, BigInt(poolId))

    const poolPointsJson: any = poolPoints.toJSON()

    const pool = await em.findOneOrFail(NominationPool, {
        where: { id: poolId },
    })

    if (!pool) {
        await job.log(`Pool ${poolId} not found`)
    }

    job.log(`Pool ${poolId} points: ${poolPointsJson?.supply}`)

    if (poolPointsJson?.supply) {
        pool.points = poolPointsJson.supply
    }

    await em.save(pool)
    job.log(`Pool ${poolId} points saved`)
}
