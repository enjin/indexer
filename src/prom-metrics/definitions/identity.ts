/* eslint-disable @typescript-eslint/naming-convention */
import client from 'prom-client'
import register from '../registry'
import connection from '../../connection'

export const indexer_identity_registrars_total = new client.Gauge({
    name: 'indexer_identity_registrars_total',
    labelNames: ['identity'],
    help: 'The total number of registrars.',
    registers: [register],
})

export const indexer_identity_identities_main_total = new client.Gauge({
    name: 'indexer_identity_identities_main_total',
    labelNames: ['identity'],
    help: 'The total number of “main” identities created (excludes sub identities).',
    registers: [register],
})

export const indexer_identity_identities_sub_total = new client.Gauge({
    name: 'indexer_identity_identities_sub_total',
    labelNames: ['identity'],
    help: 'The total number of “sub” identities created (excludes main identities).',
    registers: [register],
})

export const indexer_identity_identities_total = new client.Gauge({
    name: 'indexer_identity_identities_total',
    labelNames: ['identity'],
    help: 'The total number of identities created (including main and sub identities).',
    registers: [register],
})

export const indexer_identity_indeitities_sub_avg = new client.Gauge({
    name: 'indexer_identity_indeitities_sub_avg',
    labelNames: ['identity'],
    help: 'The average number of sub identities created per main identity.',
    registers: [register],
})

export default async () => {
    if (!connection.isInitialized) {
        await connection.initialize().catch(() => {
            throw Error('Failed to initialize connection')
        })
    }

    const em = connection.manager

    const [registrars, mainIdentities, subIdentities, identities, subAvg] = await Promise.all([
        em.query('SELECT COUNT(*) FROM identity_registrar'),
        em.query("SELECT COUNT(*) FROM extrinsic WHERE pallet = 'Identity' AND method = 'set_identity' AND success = true"),
        em.query(
            `SELECT SUM(count) as count
            FROM (
                SELECT COUNT(DISTINCT address) as count
                FROM (
                    SELECT JSONB_ARRAY_ELEMENTS(args->'subs') AS elem
                    FROM extrinsic 
                    WHERE pallet = 'Identity' 
                    AND method = 'set_subs' 
                    AND success = true
                ) AS sub,
                LATERAL (
                    SELECT elem->>0 as address
                ) AS addresses
            ) AS sub_count;`
        ),
        em.query('SELECT COUNT(*) FROM identity'),
        em.query(
            'SELECT COUNT(*) / (SELECT COUNT(*) FROM identity WHERE super_id IS NULL) as count FROM identity WHERE super_id IS NOT NULL'
        ),
    ])

    indexer_identity_registrars_total.set(Number(registrars[0].count))
    indexer_identity_identities_main_total.set(Number(mainIdentities[0].count))
    indexer_identity_identities_sub_total.set(Number(subIdentities[0].count))
    indexer_identity_identities_total.set(Number(identities[0].count))
    indexer_identity_indeitities_sub_avg.set(Number(subAvg[0].count))
}
