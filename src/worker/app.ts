import express, { Application } from 'express'
import { createBullBoard } from '@bull-board/api'
import { ExpressAdapter } from '@bull-board/express'
import { BalancesQueue, AccountsQueue, CollectionsQueue, MetadataQueue } from './queue/index'
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter'

const app: Application = express()
const serverAdapter = new ExpressAdapter()

serverAdapter.setBasePath('/')

createBullBoard({
    queues: [
        new BullMQAdapter(MetadataQueue),
        new BullMQAdapter(CollectionsQueue),
        new BullMQAdapter(BalancesQueue),
        new BullMQAdapter(AccountsQueue),
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

app.use('/', serverAdapter.getRouter())

export default app
