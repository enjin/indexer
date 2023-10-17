import express from 'express'
import { createBullBoard } from '@bull-board/api'
import { BullAdapter } from '@bull-board/api/bullAdapter'
import { ExpressAdapter } from '@bull-board/express'
import connection from '../connection'
import { collectionStatsQueue } from '../jobs/collection-stats'
import { metadataQueue } from '../jobs/process-metadata'
import { fetchAccountQueue } from '../jobs/fetch-account'
import { traitsQueue } from '../jobs/compute-traits'
import { fetchCollectionExtraQueue } from '../jobs/fetch-collection-extra'

async function main() {
    if (!connection.isInitialized) {
        await connection.initialize().catch((err) => {
            throw err
        })
    }

    // eslint-disable-next-line no-console
    console.info('handling jobs...')

    traitsQueue.process(2, `${__dirname}/compute-traits.js`)
    metadataQueue.process(50, `${__dirname}/process-metadata.js`)
    collectionStatsQueue.process(10, `${__dirname}/collection-stats.js`)
    fetchAccountQueue.process(5, `${__dirname}/fetch-account.js`)
    fetchCollectionExtraQueue.process(5, `${__dirname}/fetch-collection-extra.js`)

    const serverAdapter = new ExpressAdapter()
    serverAdapter.setBasePath('/')

    createBullBoard({
        queues: [
            new BullAdapter(metadataQueue),
            new BullAdapter(collectionStatsQueue),
            new BullAdapter(fetchAccountQueue),
            new BullAdapter(traitsQueue),
            new BullAdapter(fetchCollectionExtraQueue),
        ],
        serverAdapter,
        options: {
            uiConfig: {
                boardTitle: 'Indexer Queue',
                boardLogo: {
                    path: 'https://cdn.nft.io/branding/enjin.svg',
                    width: '50px',
                    height: 80,
                },
            },
        },
    })

    const app = express()

    app.use('/', serverAdapter.getRouter())

    // other configurations of your server

    app.listen(9090, () => {
        // eslint-disable-next-line no-console
        console.log('Running on 9090...')
    })
}

main()
