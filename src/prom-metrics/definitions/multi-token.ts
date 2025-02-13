import client from 'prom-client'
import register from '../registry'
import connection from '../../contexts'

export const indexer_multitokens_unique_holders_total = new client.Gauge({
    name: 'indexer_multitokens_unique_holders_total',
    labelNames: ['multitoken'],
    help: 'The total number of unique holders of at least 1 multi-token.',
    registers: [register],
})

export const indexer_multitokens_collections_total = new client.Gauge({
    name: 'indexer_multitokens_collections_total',
    labelNames: ['multitoken'],
    help: 'The total number of existing collections on the multi-token pallet.',
    registers: [register],
})

export const indexer_multitokens_unique_tokens_total = new client.Gauge({
    name: 'indexer_multitokens_unique_tokens_total',
    labelNames: ['multitoken'],
    help: 'The total number of tokens created (where each FT is considered 1).',
    registers: [register],
})

export const indexer_multitokens_collection_holders_avg = new client.Gauge({
    name: 'indexer_multitokens_collection_holders_avg',
    labelNames: ['multitoken'],
    help: 'The average number of holders per collection.',
    registers: [register],
})

export const indexer_multitokens_collection_tokens_avg = new client.Gauge({
    name: 'indexer_multitokens_collection_tokens_avg',
    labelNames: ['multitoken'],
    help: 'The average number of tokens per collection.',
    registers: [register],
})

export const indexer_multitokens_account_tokens_avg = new client.Gauge({
    name: 'indexer_multitokens_account_tokens_avg',
    labelNames: ['multitoken'],
    help: 'The average number of tokens per account.',
    registers: [register],
})

export const indexer_multitokens_existential_deposit_total = new client.Gauge({
    name: 'indexer_multitokens_existential_deposit_total',
    labelNames: ['multitoken'],
    help: 'The total ENJ locked to cover the existential deposit for each token.',
    registers: [register],
})

export const indexer_multitokens_enj_infused_total = new client.Gauge({
    name: 'indexer_multitokens_enj_infused_total',
    labelNames: ['multitoken'],
    help: 'The total ENJ infused in all tokens.',
    registers: [register],
})

export const indexer_multitokens_infused_tokens_total = new client.Gauge({
    name: 'indexer_multitokens_infused_tokens_total',
    labelNames: ['multitoken'],
    help: 'The total number of infused tokens. (Tokens with infusion > 0) including, multiplied by their supply',
    registers: [register],
})

export const indexer_multitokens_infused_unique_tokens_total = new client.Gauge({
    name: 'indexer_multitokens_infused_unique_tokens_total',
    labelNames: ['multitoken'],
    help: 'The total number of unique infused tokens. (Tokens with infusion > 0), where FTs is considered 1',
    registers: [register],
})

export default async () => {
    if (!connection.isInitialized) {
        await connection.initialize().catch(() => {
            throw Error('Failed to initialize connection')
        })
    }

    const em = connection.manager

    const [
        uniqueHolders,
        collectionsTotal,
        tokensTotal,
        collectionHoldersAvg,
        collectionTokensAvg,
        accountTokensAvg,
        existentialDepositTotal,
        enjInfusedTotal,
        infusedTokensTotal,
        infusedUniqueTokensTotal,
    ] = await Promise.all([
        em.query('SELECT COUNT(DISTINCT account_id) FROM token_account where total_balance::numeric > 0'),
        em.query('SELECT COUNT(*) as count FROM collection'),
        em.query('SELECT COUNT(*) as count FROM token'),
        em.query(
            'SELECT AVG(sq.holders) as avg FROM (SELECT COUNT(id) as holders FROM collection_account GROUP BY collection_id) as sq'
        ),
        em.query(
            'SELECT AVG(sq.tokens) as avg FROM (SELECT COUNT(id) as tokens FROM token GROUP BY collection_id) as sq'
        ),
        em.query(
            'SELECT AVG(sq.tokens) as avg FROM (SELECT COUNT(id) as tokens FROM token_account GROUP BY account_id) as sq'
        ),
        em.query('SELECT SUM(unit_price)::numeric / POW(10,18) as sum FROM token'),
        em.query('SELECT SUM(infusion)::numeric / POW(10,18) as sum FROM token WHERE infusion::numeric > 0'),
        em.query('SELECT SUM(supply::numeric) as sum FROM token WHERE infusion::numeric > 0'),
        em.query('SELECT COUNT(*) as count FROM token WHERE infusion::numeric > 0'),
    ])

    indexer_multitokens_unique_holders_total.set(Number(uniqueHolders[0].count))
    indexer_multitokens_collections_total.set(Number(collectionsTotal[0].count))
    indexer_multitokens_unique_tokens_total.set(Number(tokensTotal[0].count))
    indexer_multitokens_collection_holders_avg.set(parseInt(collectionHoldersAvg[0].avg, 10))
    indexer_multitokens_collection_tokens_avg.set(parseInt(collectionTokensAvg[0].avg, 10))
    indexer_multitokens_account_tokens_avg.set(parseInt(accountTokensAvg[0].avg, 10))
    indexer_multitokens_existential_deposit_total.set(Number(existentialDepositTotal[0].sum))
    indexer_multitokens_enj_infused_total.set(Number(enjInfusedTotal[0].sum))
    indexer_multitokens_infused_tokens_total.set(Number(infusedTokensTotal[0].sum))
    indexer_multitokens_infused_unique_tokens_total.set(Number(infusedUniqueTokensTotal[0].count))
}
