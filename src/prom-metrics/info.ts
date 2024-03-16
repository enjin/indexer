/* eslint-disable @typescript-eslint/naming-convention */
import client from 'prom-client'
import register from './registry'
import connection from '../connection'

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
    if (!connection.isInitialized) {
        await connection.initialize().catch(() => {
            throw Error('Failed to initialize connection')
        })
    }

    const em = connection.manager

    const [uniqueHolders, uniqueEnjHolders] = await Promise.all([
        em.query(
            "SELECT COUNT(DISTINCT ac.id) as count FROM account ac LEFT JOIN token_account tc ON ac.id = tc.account_id  WHERE (ac.balance->>'free')::numeric >= POW(10,18) OR tc.total_balance > 0"
        ),
        em.query("SELECT COUNT(DISTINCT address) FROM account WHERE (balance->>'free')::numeric > 0"),
    ])

    indexer_info_unique_holders_total.set(Number(uniqueHolders[0].count))
    indexer_info_unique_enj_holders_total.set(Number(uniqueEnjHolders[0].count))
}
