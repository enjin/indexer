import client from 'prom-client'
import updateMultiTokenMetrics from './definitions/multi-token'
import updateTransactionMetrics from './definitions/transaction'
import updateFuelTankMetrics from './definitions/fuel-tank'
import updateInfoMetrics from './definitions/info'
import updateMigrationMetrics from './definitions/migration'
import updateMarketplaceMetrics from './definitions/marketplace'
import updateIdentityMetrics from './definitions/identity'
import register from './registry'
import express, { Application } from 'express'
import { createLogger } from '@subsquid/logger'

const log = createLogger('sqd:metrics')

client.collectDefaultMetrics({ register })

const updateMetrics = async () => {
    await Promise.all([
        updateMultiTokenMetrics(),
        updateMigrationMetrics(),
        updateFuelTankMetrics(),
        updateTransactionMetrics(),
        updateInfoMetrics(),
        updateIdentityMetrics(),
        updateMarketplaceMetrics(),
    ])
    log.info('Metrics updated')
}

setInterval(() => {
    updateMetrics().catch(log.error)
}, 300_000) // Update metrics every 5min

const server: Application = express()

server.get('/_metrics', async (_req, res) => {
    try {
        res.set('Content-Type', register.contentType)
        res.end(await register.metrics())
    } catch (e) {
        log.error(`Error occurred while fetching metrics: ${e}`)
        res.status(500).end('An internal server error occurred')
    }
})

server.get('/health', (_req, res) => {
    res.status(200).json({ status: 'ok' })
})

server.get('/', (_req, res) => {
    res.status(404).end()
})

server.listen(process.env.PROM_PORT || 8080, () => {
    log.info(`Prometheus metrics server started on port ${process.env.PROM_PORT || 8080}`)
    void updateMetrics()
})
