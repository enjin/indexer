import { createOrmConfig } from '@subsquid/typeorm-config'
import { DataSource } from 'typeorm'

let dataSource: DataSource | undefined

export async function getActionDataSource(): Promise<DataSource> {
    if (dataSource?.isInitialized) {
        return dataSource
    }
    const cfg = createOrmConfig({ projectDir: process.cwd() })
    dataSource = new DataSource({
        ...cfg,
        extra: {
            ...((cfg as { extra?: Record<string, unknown> }).extra ?? {}),
            max: 5,
            min: 1,
        },
    })
    await dataSource.initialize()
    return dataSource
}
