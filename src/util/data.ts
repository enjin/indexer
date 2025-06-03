import { connectionManager } from '../contexts'
import { Config, ChainInfo } from '../model'
import { createLogger } from '@subsquid/logger'

export class DataService {
    private static instance: DataService | undefined
    private _stateBlock: number | undefined
    private _isInitialized = false

    private constructor() {}

    static getInstance(): DataService {
        if (!DataService.instance) {
            DataService.instance = new DataService()
        }

        return DataService.instance
    }

    async initialize(): Promise<void> {
        if (this._isInitialized) return

        await this.createMetadataSchema()

        this._stateBlock = await this.getStateBlock()
        this._isInitialized = true
    }

    async getStateBlock(): Promise<number> {
        const em = await connectionManager()
        try {
            const config = await em.getRepository(Config).createQueryBuilder('config').where({ id: '0' }).getOne()

            return config?.stateBlock ?? 0
        } catch {
            const chainInfo = await em
                .getRepository(ChainInfo)
                .createQueryBuilder('chainInfo')
                .orderBy('chainInfo.blockNumber', 'DESC')
                .getOne()
                .catch(() => null)

            if (chainInfo) {
                return chainInfo.blockNumber
            }
        }

        return 0
    }

    async createMetadataSchema(): Promise<void> {
        const con = await connectionManager()
        await con.query('CREATE SCHEMA IF NOT EXISTS metadata;')
        await con.query(
            'CREATE TABLE IF NOT EXISTS "metadata"."metadata" (id TEXT PRIMARY KEY, metadata JSONB, uri TEXT, last_updated_at TIMESTAMP);'
        )
        await con.query('CREATE INDEX IF NOT EXISTS metadata_uri ON "metadata"."metadata" (uri);')
    }

    async dropAllTables(): Promise<void> {
        const log = createLogger('sqd:processor')

        const con = await connectionManager()

        const tablesQuery = `
            SELECT schemaname, tablename 
            FROM pg_tables 
            WHERE schemaname NOT IN ('pg_catalog', 'information_schema', 'pg_toast', 'metadata')
            ORDER BY schemaname, tablename
        `

        const tables = await con.query(tablesQuery)

        if (tables.length === 0) {
            log.warn('No tables found to drop')
            return
        }

        await con.query('SET session_replication_role = replica;')

        try {
            for (const table of tables) {
                const dropStatement = `DROP TABLE IF EXISTS "${table.schemaname}"."${table.tablename}" CASCADE`
                await con.query(dropStatement)
                log.warn(`Dropped table: ${table.schemaname}.${table.tablename}`)
            }

            log.warn(`Successfully dropped ${tables.length} tables`)
        } finally {
            await con.query('SET session_replication_role = DEFAULT;')
        }
    }

    async setLastBlockNumber(blockNumber: number): Promise<void> {
        const em = await connectionManager()
        await em
            .getRepository(Config)
            .createQueryBuilder('config')
            .insert()
            .values({ id: '0', stateBlock: blockNumber })
            .execute()

        this._stateBlock = blockNumber
    }

    get lastBlockNumber(): number {
        if (!this._isInitialized) {
            throw new Error('DataService not initialized')
        }

        return 5038368 //this._stateBlock ?? 0
    }
}
