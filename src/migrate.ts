import { createOrmConfig } from '@subsquid/typeorm-config'
import { DataSource } from 'typeorm'

async function migrate(): Promise<void> {
    const schema = process.env.DB_SCHEMA
    if (schema && !/^[A-Za-z_][A-Za-z0-9_$]*$/.test(schema)) {
        throw new Error('DB_SCHEMA must be a valid PostgreSQL identifier')
    }

    const connection = new DataSource({
        ...createOrmConfig(),
        ...(schema ? { schema } : {}),
        subscribers: [],
        synchronize: false,
        migrationsRun: false,
        dropSchema: false,
        logging: ['query', 'error', 'schema'],
    })

    await connection.initialize()

    try {
        if (schema) {
            await connection.query(`CREATE SCHEMA IF NOT EXISTS "${schema}"`)
            const searchPath = process.env.DB_SCHEMA_INCLUDE_PUBLIC === 'true' ? `"${schema}", public` : `"${schema}"`
            await connection.query(`SELECT set_config('search_path', $1, false)`, [searchPath])
        }

        // Per-migration transactions allow large indexes to opt out and use CREATE INDEX CONCURRENTLY.
        await connection.runMigrations({ transaction: 'each' })
    } finally {
        await connection.destroy().catch(() => null)
    }
}

migrate().catch((error: unknown) => {
    console.error(error)
    process.exitCode = 1
})
