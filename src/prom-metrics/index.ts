import http from 'http'
import client from 'prom-client'
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
    //await updateMultiTokenMetrics()
    // await Promise.all([updateMigrationMetrics(), updateFuelTankMetrics(), updateTransactionMetrics(), updateInfoMetrics()])

    await updateIdentityMetrics()
    await updateMarketplaceMetrics()
}

const server = http.createServer(async (req, res) => {
    if (!req.url) throw new Error('No url')

    if (req.url === '/_metrics') {
        await updateMetrics()
        res.setHeader('Content-Type', register.contentType)
        res.end(await register.metrics())
    } else {
        res.writeHead(404)
        res.end()
    }
})

server.listen(8080)
