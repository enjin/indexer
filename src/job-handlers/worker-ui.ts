import express from 'express'
import Queue from 'bull'
import { createBullBoard } from '@bull-board/api'
import { BullAdapter } from '@bull-board/api/bullAdapter'
import { ExpressAdapter } from '@bull-board/express'
import { redisConfig } from '../jobs/common'

const collectionStatsQueue = new Queue('collectionStatsQueue', {
    redis: redisConfig,
})

const metadataQueue = new Queue('metadataQueue', {
    redis: redisConfig,
})

const serverAdapter = new ExpressAdapter()
serverAdapter.setBasePath('/')

createBullBoard({
    queues: [new BullAdapter(collectionStatsQueue), new BullAdapter(metadataQueue)],
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

app.listen(6000, () => {
    // eslint-disable-next-line no-console
    console.log('Running on 6000...')
})
