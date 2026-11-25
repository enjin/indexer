import { QueryFailedError, type EntityManager } from 'typeorm'

export async function finalizedIndexedHeight(manager: Pick<EntityManager, 'query'>): Promise<number | null> {
    try {
        const rows = await manager.query<{ height: number }[]>('SELECT height FROM squid_processor.status WHERE id = 0')
        const status = rows.at(0)
        return status && status.height >= 0 ? status.height : null
    } catch (error) {
        if (error instanceof QueryFailedError && error.driverError.code === '42P01') return null
        throw error
    }
}
