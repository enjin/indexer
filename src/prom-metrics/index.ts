import client from 'prom-client'
import updateMultiTokenMetrics from './definitions/multi-token'
import updateTransactionMetrics from './definitions/transaction'
import updateFuelTankMetrics from './definitions/fuel-tank'
import updateInfoMetrics from './definitions/info'
import updateMigrationMetrics from './definitions/migration'
import updateMarketplaceMetrics from './definitions/marketplace'
import updateIdentityMetrics from './definitions/identity'
import updateStakingMetrics from './definitions/staking'
import register from './registry'
import express, { Application } from 'express'
import { createLogger } from '@subsquid/logger'

const log = createLogger('sqd:metrics')
let cachedMetrics: string = ''
let metricsUpdatedAt: number = 0

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
        updateStakingMetrics(),
    ])

    cachedMetrics = await register.metrics()
    metricsUpdatedAt = Date.now()

    log.info('Metrics updated')
}

setInterval(() => {
    updateMetrics().catch(log.error)
}, 300_000) // Update metrics every 5 min

const server: Application = express()

server.get('/_metrics', (_req, res) => {
    try {
        res.set('Content-Type', register.contentType)
        res.end(cachedMetrics)
    } catch (e) {
        log.error(`Error occurred while fetching metrics: ${e}`)
        res.status(500).end('An internal server error occurred')
    }
})

server.get('/health', (_req, res) => {
    res.status(200).json({
        status: 'ok',
        updated_at: metricsUpdatedAt,
    })
})

server.get('/', (_req, res) => {
    res.status(404).end()
})

server.listen(process.env.PROM_PORT || 8080, () => {
    log.info(`Prometheus metrics server started on port ${process.env.PROM_PORT || 8080}`)
    void updateMetrics()
})
