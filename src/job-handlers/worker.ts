import express from 'express'
import { createBullBoard } from '@bull-board/api'
import { BullAdapter } from '@bull-board/api/bullAdapter'
import { ExpressAdapter } from '@bull-board/express'
import { throwError } from '../common/errors'
import connection from '../connection'
import { collectionStatsQueue } from '../jobs/collection-stats'
import { metadataQueue } from '../jobs/process-metadata'
import { fetchAccountQueue } from '../jobs/fetch-account'
import { fetchInfusionQueue } from '../jobs/fetch-infusion'
import { fetchBalanceQueue } from '../jobs/fetch-balance'
import { traitsQueue } from '../jobs/compute-traits'
import { fetchCollectionExtraQueue } from '../jobs/fetch-collection-extra'
// import { invalidateExpiredListings } from '../jobs/invalidate-expired-listings'
import { rarityQueue } from '../jobs/rarity-ranker'
import process from 'process'

async function main() {
    if (!connection.isInitialized) {
        await connection.initialize().catch((err) => {
            throw err
        })
    }

    // eslint-disable-next-line no-console
    console.info('handling jobs...')

    // traitsQueue.process(3, `${__dirname}/compute-traits.js`)
    // rarityQueue.process(3, `${__dirname}/rarity-ranker.js`)
    // metadataQueue.process(
    //     process.env.MAX_WORKER_CONCURRENCY ? parseInt(process.env.MAX_WORKER_CONCURRENCY, 10) : 50,
    //     `${__dirname}/process-metadata.js`
    // )
    // collectionStatsQueue.process(3, `${__dirname}/collection-stats.js`)
    //
    // fetchAccountQueue.process(5, `${__dirname}/fetch-account.js`)
    // fetchInfusionQueue.process(1, `${__dirname}/fetch-infusion.js`)
    // fetchBalanceQueue.process(5, `${__dirname}/fetch-balance.js`)
    // fetchCollectionExtraQueue.process(5, `${__dirname}/fetch-collection-extra.js`)
    // invalidateExpiredListings.process(1, `${__dirname}/invalidate-expired-listings.js`)
    //
    traitsQueue.on('global:failed', (job, err) => {
        console.log(`traitsQueue:Job ${job.id} failed with error: ${err.message}`, 'warning')
    })

    metadataQueue.on('global:failed', (job, err) => {
        console.log(`metadataQueue:Job ${job.id} failed with error: ${err.message}`, 'warning')
    })

    rarityQueue.on('global:failed', (job, err) => {
        console.log(`rarityQueue:Job ${job.id} failed with error: ${err.message}`, 'warning')
    })

    collectionStatsQueue.on('global:failed', (job, err) => {
        console.log(`collectionStatsQueue:Job ${job.id} failed with error: ${err.message}`, 'warning')
    })

    fetchAccountQueue.on('global:failed', (job, err) => {
        console.log(`fetchAccountQueue:Job ${job.id} failed with error: ${err.message}`, 'warning')
    })

    fetchInfusionQueue.on('global:failed', (job, err) => {
        console.log(`fetchInfusionQueue:Job ${job.id} failed with error: ${err.message}`, 'warning')
    })

    fetchBalanceQueue.on('global:failed', (job, err) => {
        console.log(`fetchBalanceQueue:Job ${job.id} failed with error: ${err.message}`, 'warning')
    })

    fetchCollectionExtraQueue.on('global:failed', (job, err) => {
        console.log(`fetchCollectionExtraQueue:Job ${job.id} failed with error: ${err.message}`, 'warning')
    })
    //
    // invalidateExpiredListings.on('global:failed', (job, err) => {
    //     console.log(`invalidateExpiredListings:Job ${job.id} failed with error: ${err.message}`, 'warning')
    //     throwError(`invalidateExpiredListings:Job ${job.id} failed with error: ${err.message}`, 'warning')
    // })

    const serverAdapter = new ExpressAdapter()
    serverAdapter.setBasePath('/')

    createBullBoard({
        queues: [
            new BullAdapter(metadataQueue),
            new BullAdapter(collectionStatsQueue),
            new BullAdapter(fetchAccountQueue),
            new BullAdapter(fetchInfusionQueue),
            new BullAdapter(fetchBalanceQueue),
            new BullAdapter(traitsQueue),
            new BullAdapter(rarityQueue),
            new BullAdapter(fetchCollectionExtraQueue),
            // new BullAdapter(invalidateExpiredListings),
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
