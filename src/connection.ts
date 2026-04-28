import { DataSource, DataSourceOptions } from 'typeorm'
import { createOrmConfig } from '@subsquid/typeorm-config'

let dataSource: DataSource | null = null

export const getDataSource = async (): Promise<DataSource> => {
    if (!dataSource) {
        const cfg: DataSourceOptions = createOrmConfig()
        dataSource = new DataSource({
            ...cfg,
            poolSize: 200,
        } as DataSourceOptions)
    }

    if (!dataSource.isInitialized) {
        await dataSource.initialize()
    }

    return dataSource
}
