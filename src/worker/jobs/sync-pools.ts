import { Account, NominationPool, PoolMember, TokenAccount } from '../../model'
import { connectionManager } from '../../contexts'
import { Job } from 'bullmq'

export async function syncPools(job: Job) {
    const em = await connectionManager()

    const pools = await em.find(NominationPool, {
        relations: {
            members: {
                account: true,
            },
        },
    })

    for (const pool of pools) {
        const poolId = pool.id
        const poolMembers = pool.members

        await job.log(`Syncing pool ${poolId}`)

        // sync pool members
        const tokenAccounts = await em.find(TokenAccount, {
            where: {
                token: {
                    id: `1-${poolId}`,
                },
            },
            select: ['id', 'balance', 'token'],
            relations: {
                account: true,
                token: true,
            },
        })

        await job.log(`Found ${tokenAccounts.length} token accounts`)

        for (const tokenAccount of tokenAccounts) {
            const poolMember = poolMembers.find((poolMember) => poolMember.account.id === tokenAccount.account.id)

            if (!poolMember) {
                await job.log(`Syncing pool member ${tokenAccount.account.id}`)

                await em.save(
                    new PoolMember({
                        id: `${poolId}-${tokenAccount.account.id}`,
                        pool,
                        account: tokenAccount.account,
                        bonded: tokenAccount.balance,
                        tokenAccount: tokenAccount,
                        joinedEra: null,
                    })
                )
            }
        }

        await em.save(pool)
        await job.log(`Pool ${poolId} saved`)
    }
}
