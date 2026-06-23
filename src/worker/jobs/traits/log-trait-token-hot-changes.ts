import { Job } from 'bullmq'
import { connectionManager } from '~/contexts'
import { logInfo } from '~/worker/utils'

export interface LogTraitTokenHotChangesData {
    tokenId: string
    delete?: boolean
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

const TOKEN_TRAIT_TOKEN_FILTER = `change->>'table' = 'trait_token' AND change->'fields'->>'token_id' = $1`

export async function logTraitTokenHotChanges(job: Job<LogTraitTokenHotChangesData>): Promise<void> {
    const { tokenId, delete: shouldDelete = false } = job.data
    const em = await connectionManager()

    const rows: HotChangeLogRow[] = await em.query(
        `SELECT block_height, index, change
         FROM squid_processor.hot_change_log
         WHERE ${TOKEN_TRAIT_TOKEN_FILTER}
         ORDER BY block_height, index`,
        [tokenId]
    )

    await job.log(`Found ${rows.length} hot_change_log entries for token ${tokenId}`)

    for (const row of rows) {
        const message = JSON.stringify(row)
        await job.log(message)
        logInfo(message, job)
    }

    if (!shouldDelete) {
        await job.updateProgress(100)
        return
    }

    const removed: HotChangeLogRow[] = await em.query(
        `DELETE FROM squid_processor.hot_change_log
         WHERE ${TOKEN_TRAIT_TOKEN_FILTER}
           AND change->>'kind' = 'delete'
         RETURNING block_height, index, change`,
        [tokenId]
    )

    await job.log(`Removed ${removed.length} delete-kind hot_change_log entries for token ${tokenId}`)

    await job.updateProgress(100)
}
