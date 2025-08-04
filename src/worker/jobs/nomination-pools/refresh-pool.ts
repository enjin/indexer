import { NominationPool } from '~/model'
import { connectionManager } from '~/contexts'
import { Job } from 'bullmq'
import Rpc from '~/util/rpc'
import { hexToString } from '@polkadot/util'

export async function refreshPool(job: Job, poolId: string) {
    const em = await connectionManager()
    const { api } = await Rpc.getInstance()

    const bondedPools = await api.query.nominationPools.bondedPools(poolId)

    const bondedPoolsJson: any = bondedPools.toJSON()
    const pool = await em.findOneOrFail(NominationPool, {
        where: { id: poolId },
        relations: {
            degenToken: true,
        },
    })

    if (!pool) {
        await job.log(`Pool ${poolId} not found`)
    }

    if (bondedPoolsJson) {
        const name = bondedPoolsJson.name.toString()

        if (name == '0x') {
            pool.name = ''
        } else {
            pool.name = hexToString(name)
        }
    }

    if (pool.state === PoolState.Destroyed) {
        if (pool.degenToken === null) {
            pool.degenToken = await em.findOneOrFail(Token, {
                where: {
                    id: `2-${pool.tokenId}`,
                },
            })
        }
    }

    await em.save(pool)
    await job.log(`Pool ${poolId} saved`)
}
