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

        // check if pool members are not in the token accounts
        const poolMembersToRemove = poolMembers.filter(
            (poolMember) => !tokenAccounts.some((tokenAccount) => tokenAccount.account.id === poolMember.account.id)
        )

        await job.log(`Found ${poolMembersToRemove.length} pool members to remove`)

        for (const poolMember of poolMembersToRemove) {
            await job.log(`Removing pool member ${poolMember.account.id}`)

            pool.members = pool.members.filter((member) => member.account.id !== poolMember.account.id)
        }

        for (const tokenAccount of tokenAccounts) {
            const poolMember = poolMembers.find((poolMember) => poolMember.account.id === tokenAccount.account.id)

            if (!poolMember) {
                await job.log(`Syncing pool member ${tokenAccount.account.id}`)

                const newPoolMember = await em.save(
                    new PoolMember({
                        id: `${poolId}-${tokenAccount.account.id}`,
                        pool,
                        account: tokenAccount.account,
                        bonded: tokenAccount.balance,
                        tokenAccount: tokenAccount,
                        joinedEra: null,
                    })
                )

                pool.members = [...pool.members, newPoolMember]
            }
        }

        await em.save(pool)
        await job.log(`Pool ${poolId} saved`)
    }
}
