import express, { Application } from 'express'
import { createBullBoard } from '@bull-board/api'
import { ExpressAdapter } from '@bull-board/express'
import {
    BalancesQueue,
    AccountsQueue,
    CollectionsQueue,
    MetadataQueue,
    TokensQueue,
    TraitsQueue,
    ValidatorsQueue,
    ListingsQueue,
} from '../queue'
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter'
import { EventEmitter } from 'events'
import {
    AccountsWorker,
    BalancesWorker,
    CollectionsWorker,
    ListingsWorker,
    MetadataWorker,
    TokensWorker,
    TraitsWorker,
    ValidatorsWorker,
} from './processors'
import { createClient } from 'redis'

// Increase max listeners to avoid warnings
EventEmitter.defaultMaxListeners = 30

const WorkerMap = new Map([
    ['Accounts', AccountsWorker],
    ['Balances', BalancesWorker],
    ['Collections', CollectionsWorker],
    ['Listings', ListingsWorker],
    ['Metadata', MetadataWorker],
    ['Tokens', TokensWorker],
    ['Traits', TraitsWorker],
    ['Validators', ValidatorsWorker],
])

/**
 * Initialize workers by binding an event listener to it
 */
async function initializeJobs() {
    const client = createClient({
        url: process.env.REDIS_URL,
    })

    console.log('Connecting to Redis...')

    while (!client.isReady) {
        await client.flushAll()
    }
    console.log('Redis client is ready')

    WorkerMap.forEach((worker) => {
        worker.on('error', (err) => {
            console.error(err)
        })
    })
}

const server: Application = express()
const serverAdapter = new ExpressAdapter()

serverAdapter.setBasePath('/')

createBullBoard({
    queues: [
        new BullMQAdapter(AccountsQueue),
        new BullMQAdapter(BalancesQueue),
        new BullMQAdapter(CollectionsQueue),
        new BullMQAdapter(ListingsQueue),
        new BullMQAdapter(MetadataQueue),
        new BullMQAdapter(TokensQueue),
        new BullMQAdapter(TraitsQueue),
        new BullMQAdapter(ValidatorsQueue),
    ],
    serverAdapter,
    options: {
        uiConfig: {
            boardTitle: 'Enjin Indexer',
            boardLogo: {
                path: 'https://cdn.nft.io/branding/enjin.svg',
                width: '45px',
                height: 45,
            },
        },
    },
})

server.use('/', serverAdapter.getRouter())
server.listen(9090, () => {
    void initializeJobs()
    console.log(`Server running at port 9090`)
})
