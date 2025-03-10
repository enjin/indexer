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
} from '../queues'
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter'
import { EventEmitter } from 'events'
import {
    ComputeCollectionsWorker,
    ComputeMetadataWorker,
    ComputeRarityWorker,
    ComputeStatsWorker,
    ComputeValidatorsWorker,
    ComputeTraitsWorker,
    DeleteTraitsWorker,
    FetchAccountsWorker,
    FetchBalancesWorker,
    FetchCollectionsWorker,
    InvalidateListingsWorker,
} from './jobs'

// Increase max listeners to avoid warnings
// We have 11 workers, so setting to 15 gives us some headroom
EventEmitter.defaultMaxListeners = 30

const WorkerMap = new Map([
    ['ComputeCollections', ComputeCollectionsWorker],
    ['ComputeMetadata', ComputeMetadataWorker],
    ['ComputeRarity', ComputeRarityWorker],
    ['ComputeStats', ComputeStatsWorker],
    ['ComputeTraits', ComputeTraitsWorker],
    ['ComputeValidators', ComputeValidatorsWorker],
    ['DeleteTraits', DeleteTraitsWorker],
    ['FetchAccounts', FetchAccountsWorker],
    ['FetchBalances', FetchBalancesWorker],
    ['FetchCollections', FetchCollectionsWorker],
    ['InvalidateListings', InvalidateListingsWorker],
])

/**
 * Initialize workers by binding an event listener to it
 */
function initializeJobs() {
    WorkerMap.forEach((worker) => {
        worker.on('error', (err) => {
            console.error(err)
        })
    })
}

const index: Application = express()
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

index.use('/', serverAdapter.getRouter())

index.listen(9090, () => {
    initializeJobs()
    console.log(`Server running at port 9090`)
})
