import { NominationPool, Token } from '~/model'
import { connectionManager } from '~/contexts'
import { Job } from 'bullmq'
import Rpc from '~/util/rpc'
import { hexToString } from '@polkadot/util'

export async function refreshPool(job: Job, poolId: string) {
    const em = await connectionManager()
    const { api } = await Rpc.getInstance()

    await job.updateProgress(10)

    const bondedPools = await api.query.nominationPools.bondedPools(poolId)

    const bondedPoolsJson: any = bondedPools.toJSON()
    
    await job.updateProgress(30)
    
    const pool = await em.findOneOrFail(NominationPool, {
        where: { id: poolId },
        relations: {
            degenToken: true,
        },
    })

    if (!pool) {
        await job.log(`Pool ${poolId} not found`)
    }

    await job.updateProgress(50)

    if (bondedPoolsJson) {
        const name = bondedPoolsJson.name.toString()

        if (name == '0x') {
            pool.name = ''
        } else {
            pool.name = hexToString(name)
        }
    }

    await job.updateProgress(65)

    if (pool.isDestroyed()) {
        if (pool.degenToken === null) {
            pool.degenToken = await em.findOneOrFail(Token, {
                where: {
                    id: `2-${pool.tokenId}`,
                },
            })
        }
    } else {
        const token = await em.findOneOrFail(Token, {
            where: {
                id: `2-${pool.tokenId}`,
            },
        })

        pool.degenToken = token
        token.nominationPool = pool
        await em.save(token)
        await em.save(pool)
    }

    await job.updateProgress(85)

    await em.save(pool)
    await job.log(`Pool ${poolId} saved`)
    await job.updateProgress(100)
}
