import { DataSource } from 'typeorm'
import { createOrmConfig } from '@subsquid/typeorm-config'
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions'

const cfg: any = createOrmConfig()
const con = new DataSource({
    ...cfg,
    maxQueryExecutionTime: 5000,
    poolSize: 200,
    logging: ['error'],
    logger: 'advanced-console',
} as PostgresConnectionOptions)

export default con

export const getConnection = async () => {
    if (!con.isInitialized) {
        await con.initialize().catch((err) => {
            throw err
        })
    }

    return con
}
