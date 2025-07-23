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
import { WorkerFactory } from './worker.factory'

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

server.use('/', serverAdapter.getRouter())
server.listen(9090, () => {
    WorkerFactory.initializeWorkers()
    console.log(`Server running at port 9090`)
})
