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
    NominationPoolsQueue,
} from '~/queue'
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter'
import { EventEmitter } from 'events'
import { initializeWorkers } from './worker.factory'

// Increase max listeners to avoid warnings
EventEmitter.defaultMaxListeners = 30

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
        new BullMQAdapter(NominationPoolsQueue),
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

// Lightweight health endpoint that never touches Redis, so load balancers
// never see 504s while startup / Bull Board is slow.
server.get('/healthz', (_req, res) => {
    res.status(200).send('ok')
})

server.use('/', serverAdapter.getRouter())
server.listen(9090, () => {
    console.log(`Server running at port 9090`)
    // Construct Workers in the next tick so the HTTP server is immediately
    // responsive on /healthz even if Redis is slow / reconnecting.
    setImmediate(() => {
        try {
            initializeWorkers()
        } catch (err) {
            console.error('Failed to initialize workers', err)
        }
    })
})
