import { Job } from 'bullmq'
import { connectionManager } from '~/contexts'
import { Account, AccountStats } from '~/model'

export async function computeAccountStats(job: Job) {
    const em = await connectionManager()

    await job.updateProgress(5)

    const accountId = job.data.id

    // Run aggregations in parallel to avoid one heavy multi-join query stalling the job
    const [
        { totalCollections },
        { totalTokens },
        { volume: volumeBuy },
        { volume: volumeOffer },
        { tokensValue: tokensValueSum },
        { totalInfused: totalInfusedSum },
    ] = await Promise.all([
        em
            .createQueryBuilder()
            .select('COUNT(*)', 'totalCollections')
            .from('collection', 'c')
            .where('c.owner_id = :accountId', { accountId })
            .getRawOne<{ totalCollections: string }>(),
        em
            .createQueryBuilder()
            .select('COUNT(*)', 'totalTokens')
            .from('token_account', 'ta')
            .where('ta.account_id = :accountId', { accountId })
            .andWhere("ta.collection_id != '1'")
            .getRawOne<{ totalTokens: string }>(),
        em
            .createQueryBuilder()
            .select('COALESCE(SUM(ls.amount * ls.price), 0)', 'volume')
            .from('listing_sale', 'ls')
            .where(
                'ls.listing_id NOT IN (SELECT id FROM listing WHERE type = :offerType)',
                { offerType: 'Offer' }
            )
            .andWhere('ls.buyer_id = :accountId', { accountId })
            .getRawOne<{ volume: string }>(),
        em
            .createQueryBuilder()
            .select('COALESCE(SUM(ls.amount * ls.price), 0)', 'volume')
            .from('listing_sale', 'ls')
            .innerJoin('listing', 'l', 'ls.listing_id = l.id')
            .where('l.type = :offerType', { offerType: 'Offer' })
            .andWhere('l.seller_id = :accountId', { accountId })
            .getRawOne<{ volume: string }>(),
        em
            .createQueryBuilder()
            .select(
                "COALESCE(SUM((c.stats->>'floorPrice')::numeric * ta.total_balance::numeric), 0)",
                'tokensValue'
            )
            .from('token_account', 'ta')
            .innerJoin('collection', 'c', 'ta.collection_id = c.id')
            .where('ta.account_id = :accountId', { accountId })
            .andWhere("ta.collection_id != '1'")
            .andWhere("c.stats->>'floorPrice' IS NOT NULL")
            .getRawOne<{ tokensValue: string }>(),
        em
            .createQueryBuilder()
            .select('COALESCE(SUM(amount), 0)', 'totalInfused')
            .from('user_infusion', 'ui')
            .where('ui.account_id = :accountId', { accountId })
            .getRawOne<{ totalInfused: string }>(),
    ])

    const volume = Number(volumeBuy || 0) + Number(volumeOffer || 0)
    const data = {
        totalCollections: Number(totalCollections ?? 0),
        totalTokens: Number(totalTokens ?? 0),
        volume,
        tokensValue: tokensValueSum ?? '0',
        totalInfused: totalInfusedSum ?? '0',
    }

    await job.updateProgress(60)

    const tokensValue = BigInt(data.tokensValue || '0')
    const totalInfused = BigInt(data.totalInfused || '0')

    await job.log(`Total collections: ${data.totalCollections}`)
    await job.log(`Total tokens: ${data.totalTokens}`)
    await job.log(`Volume: ${data.volume}`)
    await job.log(`Tokens value: ${tokensValue}`)
    await job.log(`Total infused: ${totalInfused}`)

    await job.updateProgress(80)

    await em.update(
        Account,
        { id: accountId },
        {
            stats: new AccountStats({
                totalCollections: Number(data.totalCollections),
                totalTokens: Number(data.totalTokens),
                volume: BigInt(data.volume),
                tokensValue: tokensValue,
                totalInfused: totalInfused,
            }),
        }
    )

    await job.log(`Computed stats for ${accountId}`)
    await job.updateProgress(100)
}
