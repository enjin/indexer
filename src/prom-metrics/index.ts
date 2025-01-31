/* eslint-disable no-console */
import http from 'http'
import client from 'prom-client'
import trottle from 'lodash/throttle'
import updateMultiTokenMetrics from './definitions/multiToken'
import updateTransactionMetrics from './definitions/transaction'
import updateFuelTankMetrics from './definitions/fuelTank'
import updateInfoMetrics from './definitions/info'
import updateMigrationMetrics from './definitions/migration'
import updateMarketplaceMetrics from './definitions/marketplace'
import updateIdentityMetrics from './definitions/identity'
import register from './registry'

client.collectDefaultMetrics({ register })

const updateMetrics = async () => {
    console.log('Updating metrics')

    await Promise.all([
        updateMultiTokenMetrics(),
        updateMigrationMetrics(),
        updateFuelTankMetrics(),
        updateTransactionMetrics(),
        updateInfoMetrics(),
        updateIdentityMetrics(),
        updateMarketplaceMetrics(),
    ])
}

const throttledUpdateMetrics = trottle(updateMetrics, 10_000)

const server = http.createServer(async (req, res) => {
    if (!req.url) throw new Error('No url')

    if (req.url === '/_metrics') {
        await throttledUpdateMetrics()
        res.setHeader('Content-Type', register.contentType)
        res.end(await register.metrics())
    } else if (req.url === '/health') {
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ status: 'ok' }))
    } else {
        res.writeHead(404)
        res.end()
    }
})

server.listen(process.env.PROM_PORT || 8080)
console.log(`Prometheus metrics server started on port ${process.env.PROM_PORT || 8080}`)
