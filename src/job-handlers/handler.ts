import connection from '../connection'
import { collectionStats } from '../jobs/collection-stats'
import { metadataQueue } from '../jobs/process-metadata'

async function main() {
    if (!connection.isInitialized) {
        await connection.initialize().catch((err) => {
            throw err
        })
    }

    console.info('handling jobs...')

    metadataQueue.process(20, `${__dirname}/process-metadata.js`)
    collectionStats.process(10, `${__dirname}/collection-stats.js`)
}

main()
