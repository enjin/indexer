import client from 'prom-client'
import register from '../registry'
import connection from '../../contexts'

export const indexer_migration_enj_migrated_total = new client.Gauge({
    name: 'indexer_migration_enj_migrated_total',
    labelNames: ['migration'],
    help: 'The total number of ENJ migrated to the Enjin Blockchain.',
    registers: [register],
})

export const indexer_migration_enj_migrated_pct = new client.Gauge({
    name: 'indexer_migration_enj_migrated_pct',
    labelNames: ['migration'],
    help: 'The percentage of ENJ migrated to the Enjin Blockchain.',
    registers: [register],
})

export const indexer_migration_efi_migrated_total = new client.Gauge({
    name: 'indexer_migration_efi_migrated_total',
    labelNames: ['migration'],
    help: 'The amount of EFI migrated to the Enjin Blockchain.',
    registers: [register],
})

export const indexer_migration_efi_migrated_pct = new client.Gauge({
    name: 'indexer_migration_efi_migrated_pct',
    labelNames: ['migration'],
    help: 'The percentage of EFI migrated to the Enjin Blockchain.',
    registers: [register],
})

export const indexer_migration_requests_total = new client.Gauge({
    name: 'indexer_migration_requests_total',
    labelNames: ['migration'],
    help: 'The total amount of tokens migration requests to the Enjin Blockchain.',
    registers: [register],
})

const ENJ_MIGRATION_TARGET = 1000_000_000
const EFI_MIGRATION_TARGET = 500_000_000

export default async () => {
    if (!connection.isInitialized) {
        await connection.initialize().catch(() => {
            throw Error('Failed to initialize connection')
        })
    }

    const em = connection.manager

    const [enjMigrated, efiMigrated, claimRequests] = await Promise.all([
        em.query('SELECT SUM(enj_sum) FROM claim'),
        em.query('SELECT SUM(efi_sum) FROM claim'),
        em.query('SELECT SUM(amount_claimable)::numeric / POW(10,18) AS sum FROM claim_request'),
    ])

    const enjMigratedTotal = BigInt(enjMigrated[0].sum || 0) / BigInt(10 ** 18)
    const efiMigratedTotal = BigInt(efiMigrated[0].sum || 0) / BigInt(10 ** 18)

    indexer_migration_enj_migrated_total.set(Number(enjMigratedTotal))
    indexer_migration_enj_migrated_pct.set((Number(enjMigratedTotal) / ENJ_MIGRATION_TARGET) * 100)
    indexer_migration_efi_migrated_total.set(Number(efiMigratedTotal))
    indexer_migration_efi_migrated_pct.set((Number(efiMigratedTotal) / EFI_MIGRATION_TARGET) * 100)
    indexer_migration_requests_total.set(Number(claimRequests[0].sum))
}
