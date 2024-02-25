import http from 'http'
import client from 'prom-client'
import config from './config'

const register = new client.Registry()

register.setDefaultLabels({
    name: `${config.chainName}-indexer`,
})

const indexer_migration_enj_migrated_total = new client.Gauge({
    name: 'indexer_migration_enj_migrated_total',
    labelNames: ['migration'],
    help: 'The total number of ENJ migrated to the Enjin Blockchain.',
    registers: [register],
})

const indexer_migration_enj_migrated_pct = new client.Gauge({})

client.collectDefaultMetrics({ register })

const server = http.createServer(async (req, res) => {
    if (!req.url) throw new Error('No url')

    if (req.url === '/metrics') {
        res.setHeader('Content-Type', register.contentType)
        res.end(await register.metrics())
    } else {
        res.writeHead(404)
        res.end()
    }
})

server.listen(8080)
