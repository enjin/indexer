import connection from '../connection'
import { metadataQueue } from '../jobs/process-metadata'

metadataQueue.process(async (job, done) => {
    if (!connection.isInitialized) {
        await connection.initialize().catch((err) => {
            throw err
        })
    }

    connection.manager.createQueryBuilder().select().from('metadata', 'metadata')
    done()
})
