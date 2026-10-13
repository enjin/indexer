import express, { Application, Request, Response, NextFunction } from 'express'
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

// HTTP Basic Authentication middleware for Bull Board
const bullBoardAuth = (req: Request, res: Response, next: NextFunction) => {
    const username = process.env.BULL_BOARD_USERNAME
    const password = process.env.BULL_BOARD_PASSWORD

    // If credentials are not configured, deny access by default
    if (!username || !password) {
        console.error('BULL_BOARD_USERNAME and BULL_BOARD_PASSWORD must be configured')
        res.setHeader('WWW-Authenticate', 'Basic realm="Bull Board"')
        return res.status(401).send('Authentication required')
    }

    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Basic ')) {
        res.setHeader('WWW-Authenticate', 'Basic realm="Bull Board"')
        return res.status(401).send('Authentication required')
    }

    const base64Credentials = authHeader.substring(6)
    const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8')
    const [providedUsername, providedPassword] = credentials.split(':', 2)

    // Use constant-time comparison to prevent timing attacks
    const usernameMatch = username.length === providedUsername.length && 
        Buffer.from(username).equals(Buffer.from(providedUsername))
    const passwordMatch = password.length === providedPassword.length && 
        Buffer.from(password).equals(Buffer.from(providedPassword))

    if (usernameMatch && passwordMatch) {
        next(); return;
    }

    res.setHeader('WWW-Authenticate', 'Basic realm="Bull Board"')
    return res.status(401).send('Authentication required')
}

server.use('/', bullBoardAuth, serverAdapter.getRouter())
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
