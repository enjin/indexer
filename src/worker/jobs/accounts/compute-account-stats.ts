import { Job } from 'bullmq'
import { Not } from 'typeorm'
import { connectionManager, dataHandlerContext } from '~/contexts'
import { Account, AccountStats, Collection, ListingSale, TokenAccount } from '~/model'

export async function computeAccountStats(job: Job) {
    const em = await connectionManager()

    const accountId = job.data.id

    const data = await em
        .createQueryBuilder()
        .select('account.stats', 'stats')
        .addSelect('COALESCE(collection_count.count, 0)', 'totalCollections')
        .addSelect('COALESCE(token_count.count, 0)', 'totalTokens')
        .addSelect('COALESCE(volume_sum.volume, 0)', 'volume')
        .addSelect('COALESCE(tokens_value_sum.tokensValue, 0)', 'tokensValue')
        .from(Account, 'account')
        .leftJoin(
            `(SELECT COUNT(*) as count FROM collection WHERE owner_id = '${accountId}')`,
            'collection_count',
            '1=1'
        )
        .leftJoin(
            `(SELECT COUNT(*) as count FROM token_account WHERE account_id = '${accountId}' AND collection_id NOT IN ('1'))`,
            'token_count',
            '1=1'
        )
        .leftJoin(
            `(SELECT COALESCE(SUM(amount * price), 0) as volume FROM listing_sale WHERE buyer_id = '${accountId}')`,
            'volume_sum',
            '1=1'
        )
        .leftJoin(
            `(SELECT COALESCE(SUM((collection.stats->>'floorPrice')::numeric * token_account.total_balance::numeric), 0) as tokensValue 
              FROM token_account 
              INNER JOIN collection ON token_account.collection_id = collection.id 
              WHERE token_account.account_id = '${accountId}' 
              AND token_account.collection_id NOT IN ('1')
              AND collection.stats->>'floorPrice' IS NOT NULL)`,
            'tokens_value_sum',
            '1=1'
        )
        .where('account.id = :accountId', { accountId })
        .getRawOne()

    const tokensValue = BigInt(data.tokensValue || '0')

    await job.log(`Total collections: ${data.totalCollections}`)
    await job.log(`Total tokens: ${data.totalTokens}`)
    await job.log(`Volume: ${data.volume}`)
    await job.log(`Tokens value: ${tokensValue}`)

    await em.update(
        Account,
        { id: accountId },
        {
            stats: new AccountStats({
                totalCollections: Number(data.totalCollections),
                totalTokens: Number(data.totalTokens),
                volume: BigInt(data.volume),
                tokensValue: tokensValue,
            }),
        }
    )

    await job.log(`Computed stats for ${accountId}`)
}
