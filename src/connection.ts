import { DataSource, DataSourceOptions } from 'typeorm'
import { createOrmConfig } from '@subsquid/typeorm-config'
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions'

let dataSource: DataSource | null = null

export const getDataSource = async (): Promise<DataSource> => {
    if (!dataSource) {
        const cfg: DataSourceOptions = createOrmConfig() as PostgresConnectionOptions
        dataSource = new DataSource({
            ...cfg,
            poolSize: 300,
            pool: { max: 100 },
            // Enable connection pooling for worker processes
            extra: {
                ...cfg.extra,
                max: 200,
                keepAlive: true,
                keepAliveInitialDelayMillis: 10000,
            },
        } as PostgresConnectionOptions)
    }

    if (!dataSource.isInitialized) {
        await dataSource.initialize()
    }

    return dataSource
}
