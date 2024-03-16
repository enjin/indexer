/* eslint-disable @typescript-eslint/naming-convention */
import client from 'prom-client'
import register from '../registry'
import connection from '../../connection'

export const indexer_transactions_extrinsics_total = new client.Gauge({
    name: 'indexer_transactions_extrinsics_total',
    labelNames: ['transactions'],
    help: 'The total number of extrinsics sent.',
    registers: [register],
})

export const indexer_transactions_enj_transfer_total = new client.Gauge({
    name: 'indexer_transactions_enj_transfer_total',
    labelNames: ['transactions'],
    help: 'The total number of transactions that involved an explicit transfer of ENJ',
    registers: [register],
})

export const indexer_transactions_token_transfer_total = new client.Gauge({
    name: 'indexer_transactions_token_transfer_total',
    labelNames: ['transactions'],
    help: 'The total number of transactions that involved an explicit transfer of a token.',
    registers: [register],
})

export default async () => {
    if (!connection.isInitialized) {
        await connection.initialize().catch(() => {
            throw Error('Failed to initialize connection')
        })
    }

    const em = connection.manager

    const [extrinsicsTotal, enjTransferTotal, tokenTransferTotal] = await Promise.all([
        em.query('SELECT COUNT(*) FROM extrinsic AND success = true'),
        em.query("SELECT COUNT(*) FROM extrinsic WHERE method = 'transfer' AND pallet = 'Balances' AND success = true"),
        em.query("SELECT COUNT(*) FROM extrinsic WHERE method = 'transfer' AND pallet = 'MultiTokens' AND success = true"),
    ])

    indexer_transactions_extrinsics_total.set(Number(extrinsicsTotal[0].count))
    indexer_transactions_enj_transfer_total.set(Number(enjTransferTotal[0].count))
    indexer_transactions_token_transfer_total.set(Number(tokenTransferTotal[0].count))
}
