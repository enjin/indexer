import { EraReward, NominationPool, PoolState, Token } from '~/model'
import { connectionManager } from '~/contexts'
import { Job } from 'bullmq'
import Rpc from '~/util/rpc'
import { hexToString } from '@polkadot/util'


export async function refreshPool(job: Job, poolId: string) {
    const em = await connectionManager()

    const pool = await em.findOneOrFail(NominationPool, {
        relations: {
            degenToken: true,
        },
        where: { id: poolId },
    })

    if (!pool) {
        await job.log(`Pool ${poolId} not found`)
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
