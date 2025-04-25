import { connectionManager } from '../contexts'
import { ChainInfo } from '../model'

export class DataService {
    private static instance: DataService | undefined
    private _chainInfo: ChainInfo | undefined | null
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

        const em = await connectionManager()

        try {
            this._chainInfo = await em
                .getRepository(ChainInfo)
                .createQueryBuilder('chainInfo')
                .orderBy('chainInfo.blockNumber', 'DESC')
                .getOne()
        } catch {
            this._chainInfo = null
        }

        this._isInitialized = true
    }

    async dropAllTables(): Promise<void> {
        const con = await connectionManager()

        // Get all tables from all schemas (excluding system schemas)
        const tablesQuery = `
            SELECT schemaname, tablename 
            FROM pg_tables 
            WHERE schemaname NOT IN ('pg_catalog', 'information_schema', 'pg_toast')
            ORDER BY schemaname, tablename
        `

        const tables = await con.query(tablesQuery)

        if (tables.length === 0) {
            console.log('No tables found to drop')
            return
        }

        // Disable foreign key checks temporarily
        await con.query('SET session_replication_role = replica;')

        try {
            // Create and execute DROP TABLE statements
            for (const table of tables) {
                const dropStatement = `DROP TABLE IF EXISTS "${table.schemaname}"."${table.tablename}" CASCADE`
                await con.query(dropStatement)
                console.log(`Dropped table: ${table.schemaname}.${table.tablename}`)
            }

            console.log(`Successfully dropped ${tables.length} tables`)
        } finally {
            // Re-enable foreign key checks
            await con.query('SET session_replication_role = DEFAULT;')
        }
    }

    get lastBlockNumber(): number {
        if (!this._isInitialized) {
            throw new Error('DataService not initialized')
        }

        return this._chainInfo?.blockNumber ?? 0
    }

    get chainInfo(): ChainInfo {
        if (!this._isInitialized || !this._chainInfo) {
            throw new Error('DataService not initialized')
        }

        return this._chainInfo
    }

    set chainInfo(value: ChainInfo) {
        this._chainInfo = value
    }
}
