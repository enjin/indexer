import connection from '../connection'
import { collectionStats } from '../jobs/collection-stats'
import { metadataQueue } from '../jobs/process-metadata'
import metadataHandler from './process-metadata'
import collectionStatsHandler from './collection-stats'

async function main() {
    if (!connection.isInitialized) {
        await connection.initialize().catch((err) => {
            throw err
        })
    }

    // eslint-disable-next-line no-console
    console.info('handling jobs...')

    metadataQueue.process(20, metadataHandler)
    collectionStats.process(10, collectionStatsHandler)
}

main()
