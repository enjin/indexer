import { createOrmConfig } from '@subsquid/typeorm-config'
import { DataSource } from 'typeorm'

let dataSource: DataSource | undefined
let initialization: Promise<DataSource> | undefined

export async function getRemoteSchemaDataSource(): Promise<DataSource> {
    if (dataSource?.isInitialized) {
        return dataSource
    }

    initialization ??= (async () => {
        const cfg = createOrmConfig({ projectDir: process.cwd() })
        const nextDataSource = new DataSource({
            ...cfg,
            extra: {
                ...((cfg as { extra?: Record<string, unknown> }).extra ?? {}),
                max: Number(process.env.EXTENSION_DB_CONNECTION_POOL_SIZE ?? 5),
                min: 1,
            },
        })

        try {
            await nextDataSource.initialize()
            dataSource = nextDataSource
            return nextDataSource
        } catch (error) {
            initialization = undefined
            throw error
        }
    })()

    return initialization
}

export async function closeRemoteSchemaDataSource(): Promise<void> {
    const current = dataSource ?? (initialization ? await initialization.catch(() => undefined) : undefined)
    dataSource = undefined
    initialization = undefined

    if (current?.isInitialized) {
        await current.destroy()
    }
}
