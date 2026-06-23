import { Job } from 'bullmq'
import { connectionManager } from '~/contexts'
import { logInfo } from '~/worker/utils'

export interface LogTraitTokenHotChangesData {
    id: string
    blockHeight?: number
    index?: number
}

interface HotChangeLogRow {
    block_height: number
    index: number
    change: {
        kind: string
        table: string
        id: string
        fields?: Record<string, unknown>
    }
}

const TRAIT_TOKEN_FILTER = `change->>'table' = 'trait_token' AND change->>'id' = $1`

export async function logTraitTokenHotChanges(job: Job<LogTraitTokenHotChangesData>): Promise<void> {
    const { id, blockHeight, index } = job.data
    const em = await connectionManager()

    if (blockHeight !== undefined && index !== undefined) {
        const removed: HotChangeLogRow[] = await em.query(
            `DELETE FROM squid_processor.hot_change_log
             WHERE block_height = $2
               AND index = $3
               AND ${TRAIT_TOKEN_FILTER}
             RETURNING block_height, index, change`,
            [id, blockHeight, index]
        )

        if (removed.length === 0) {
            const message = `No hot_change_log entry to remove for trait_token id ${id} at block_height=${blockHeight}, index=${index}`
            await job.log(message)
            logInfo(message, job)
        } else {
            for (const row of removed) {
                const message = `Removed: ${JSON.stringify(row)}`
                await job.log(message)
                logInfo(message, job)
            }
        }

        await job.updateProgress(100)
        return
    }

    const rows: HotChangeLogRow[] = await em.query(
        `SELECT block_height, index, change
         FROM squid_processor.hot_change_log
         WHERE ${TRAIT_TOKEN_FILTER}
         ORDER BY block_height, index`,
        [id]
    )

    await job.log(`Found ${rows.length} hot_change_log entries for trait_token id ${id}`)

    if (rows.length === 0) {
        logInfo(`No hot_change_log entries for trait_token id ${id}`, job)
        await job.updateProgress(100)
        return
    }

    for (const row of rows) {
        const message = JSON.stringify(row)
        await job.log(message)
        logInfo(message, job)
    }

    await job.updateProgress(100)
}
