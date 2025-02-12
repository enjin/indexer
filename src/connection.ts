import { DataSource, DataSourceOptions } from 'typeorm'
import { createOrmConfig } from '@subsquid/typeorm-config'
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions'
import { Store } from '@subsquid/typeorm-store'
import { DataHandlerContext } from '@subsquid/substrate-processor'

const cfg: DataSourceOptions = createOrmConfig() as PostgresConnectionOptions
const con: DataSource = new DataSource({ ...cfg, poolSize: 200, pool: { max: 100 } } as PostgresConnectionOptions)

export default con

export const dataHandlerContext = () => {
    if (!con.isInitialized) {
        con.initialize().catch((err: unknown) => {
            throw err
        })
    }

    const store = new Store(() => con.manager)
    return { store } as DataHandlerContext<Store, never>
}
