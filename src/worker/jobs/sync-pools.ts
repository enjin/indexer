import { Account, NominationPool, PoolMember, TokenAccount } from '../../model'
import { connectionManager } from '../../contexts'
import { Job } from 'bullmq'

export async function syncPools(job: Job) {
    const em = await connectionManager()

    const pools = await em.find(NominationPool, {
        relations: {
            members: true,
        },
    })

    for (const pool of pools) {
        const poolId = pool.id
        const poolMembers = pool.members

        // sync pool members
        const tokenAccounts = await em
            .createQueryBuilder(TokenAccount, 'tokenAccount')
            .select('tokenAccount.id')
            .select('account.id')
            .select('tokenAccount.balance')
            .leftJoin(Account, 'account', 'account.id = tokenAccount.account_id')
            .where('tokenAccount.token_id = :tokenId', { tokenId: `1-${poolId}` })
            .getMany()

        for (const tokenAccount of tokenAccounts) {
            const poolMember = poolMembers.find((poolMember) => poolMember.account.id === tokenAccount.account.id)
            if (!poolMember) {
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
