import http from 'http'
import client from 'prom-client'
import updateMultiTokenMetrics from './multiToken'
import updateTransactionMetrics from './transaction'
import updateFuelTankMetrics from './fuelTank'
import updateInfoMetrics from './info'
import updateMigrationMetrics from './migration'
import register from './registry'

client.collectDefaultMetrics({ register })

const updateMetrics = async () => {
    //await updateMultiTokenMetrics()
    await Promise.all([updateMigrationMetrics(), updateFuelTankMetrics(), updateTransactionMetrics(), updateInfoMetrics()])
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
