import { Job } from 'bullmq'
import { Not } from 'typeorm'
import { dataHandlerContext } from '~/contexts'
import { Account, AccountStats, Collection, ListingSale, TokenAccount } from '~/model'

export async function computeAccountStats(job: Job) {
    const ctx = await dataHandlerContext()

    const accountId = job.data.id

    const account = await ctx.store.findOne(Account, {
        where: { id: accountId },
    })

    if (!account) {
        throw new Error(`Account not found: ${accountId}`)
    }

    if (!account.stats) {
        account.stats = new AccountStats({
            totalCollections: 0,
            totalTokens: 0,
            volume: 0n,
        })
    }

    const collections = await ctx.store.find(Collection, {
        where: { owner: { id: accountId } },
    })
    account.stats.totalCollections = collections.length
    await job.log(`Computed total collections ${collections.length}`)

    const tokens = await ctx.store.find(TokenAccount, {
        where: { account: { id: accountId }, collection: { id: Not('1') } },
    })
    account.stats.totalTokens = tokens.length
    await job.log(`Computed total tokens ${tokens.length}`)

    const volume = await ctx.store.find(ListingSale, {
        where: { buyer: { id: accountId } },
    })
    account.stats.volume = volume.reduce((acc, sale) => acc + sale.amount * sale.price, 0n)
    await job.log(`Computed volume ${account.stats.volume}`)

    await ctx.store.save(account)

    await job.log(`Computed stats for ${accountId}`)
}
