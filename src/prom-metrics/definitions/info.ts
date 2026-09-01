import client from 'prom-client'
import register from '~/prom-metrics/registry'
import { connectionManager } from '~/contexts'

export const indexer_info_unique_holders_total = new client.Gauge({
    name: 'indexer_info_unique_holders_total',
    labelNames: ['info'],
    help: 'The total unique accounts holding at least an amount of ENJ, including tokens.',
    registers: [register],
})

export const indexer_info_unique_enj_holders_total = new client.Gauge({
    name: 'indexer_info_unique_enj_holders_total',
    labelNames: ['info'],
    help: 'The total unique accounts holding at least an amount of ENJ.',
    registers: [register],
})

export default async () => {
    const em = await connectionManager()

    const [uniqueHolders, uniqueEnjHolders] = await Promise.all([
        em.query(
            `WITH holder_accounts AS (
                SELECT id
                FROM account
                WHERE (balance->>'free')::numeric >= 1000000000000000000::numeric
                UNION
                SELECT account_id
                FROM token_account
                WHERE total_balance > 0 AND account_id IS NOT NULL
            )
            SELECT COUNT(*) AS count FROM holder_accounts`
        ),
        em.query("SELECT COUNT(DISTINCT address) AS count FROM account WHERE (balance->>'free')::numeric > 0"),
    ])

    indexer_info_unique_holders_total.set(Number(uniqueHolders[0].count))
    indexer_info_unique_enj_holders_total.set(Number(uniqueEnjHolders[0].count))
}
