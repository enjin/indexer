import { connectionManager } from '../contexts'
import { Config, ChainInfo } from '../model'

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

        const em = await connectionManager()
        try {
            const config = await em.getRepository(Config).createQueryBuilder('config').where({ id: '0' }).getOne()
            this._stateBlock = config?.stateBlock ?? 0
        } catch {
            const chainInfo = await em
                .getRepository(ChainInfo)
                .createQueryBuilder('chainInfo')
                .orderBy('chainInfo.blockNumber', 'DESC')
                .getOne()
                .catch(() => null)

            if (chainInfo) {
                this._stateBlock = chainInfo.blockNumber
            }

            this._stateBlock = 0
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

        return this._stateBlock ?? 0
    }
}
