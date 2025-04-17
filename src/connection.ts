import { DataSource, DataSourceOptions } from 'typeorm'
import { createOrmConfig } from '@subsquid/typeorm-config'
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions'

let dataSource: DataSource | null = null

export const getDataSource = async (): Promise<DataSource> => {
    if (!dataSource) {
        const cfg: DataSourceOptions = createOrmConfig() as PostgresConnectionOptions
        dataSource = new DataSource({
            ...cfg,
            poolSize: 200,
        } as PostgresConnectionOptions)
    }

    if (!dataSource.isInitialized) {
        await dataSource.initialize()
    }

    return dataSource
}
