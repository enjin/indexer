import { Job } from 'bullmq'
import { connectionManager } from '~/contexts'

export async function migrateTokenGroupIds(job: Job): Promise<void> {
    const { id: collectionId } = job.data as { id: string }

    if (!collectionId) {
        throw new Error('migrateTokenGroupIds: collectionId is required')
    }

    const em = await connectionManager()

    await job.log(`Starting token group attribute ID migration for collection ${collectionId}`)
    await job.updateProgress(5)

    // Count how many attributes need migrating (token group attributes without the -tg suffix)
    const countResult = await em.connection.query(
        `SELECT COUNT(*) AS count
         FROM attribute a
         INNER JOIN token_group tg ON tg.id = a.token_group_id
         WHERE tg.collection_id = $1
           AND a.id NOT LIKE '%-tg'`,
        [collectionId]
    )

    const total = parseInt(countResult[0]?.count ?? '0', 10)
    await job.log(`Found ${total} token group attributes to migrate for collection ${collectionId}`)
    await job.updateProgress(20)

    if (total === 0) {
        await job.log('Nothing to migrate')
        await job.updateProgress(100)
        return
    }

    // Update IDs from `${groupId}-${key}` to `${groupId}-${key}-tg`
    const updateResult = await em.connection.query(
        `UPDATE attribute a
         SET id = a.id || '-tg'
         FROM token_group tg
         WHERE tg.id = a.token_group_id
           AND tg.collection_id = $1
           AND a.id NOT LIKE '%-tg'`,
        [collectionId]
    )

    const migrated = updateResult[1] ?? total
    await job.log(`Migrated ${migrated} token group attribute IDs for collection ${collectionId}`)
    await job.updateProgress(100)
}
