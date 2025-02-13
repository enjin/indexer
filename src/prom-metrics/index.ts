import http from 'http'
import client from 'prom-client'
import throttle from 'lodash/throttle'
import updateMultiTokenMetrics from './definitions/multi-token'
import updateTransactionMetrics from './definitions/transaction'
import updateFuelTankMetrics from './definitions/fuel-tank'
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

const throttledUpdateMetrics = throttle(updateMetrics, 10_000)

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/_metrics':
            throttledUpdateMetrics()
                .then(() => register.metrics())
                .then((metrics) => res.writeHead(200, { 'Content-Type': register.contentType }).end(metrics))
                .catch(() => res.writeHead(500).end())
            break
        case '/health':
            res.writeHead(200, { 'Content-Type': 'application/json' }).end(JSON.stringify({ status: 'ok' }))
            break
        default:
            res.writeHead(404).end()
    }
})

server.listen(process.env.PROM_PORT || 8080, () => {
    console.log(`Prometheus metrics server started on port ${process.env.PROM_PORT || 8080}`)
})
