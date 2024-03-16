/* eslint-disable @typescript-eslint/naming-convention */
import client from 'prom-client'
import register from '../registry'

export const indexer_marketplace_trades_total = new client.Gauge({
    name: 'indexer_marketplace_trades_total',
    labelNames: ['marketplace'],
    help: 'The total number of trades on the marketplace.',
    registers: [register],
})

export const indexer_marketplace_24h_trading_volume_total = new client.Gauge({
    name: 'indexer_marketplace_24h_trading_volume_total',
    labelNames: ['marketplace'],
    help: 'The trading volume of ENJ in the past 24 hours (in ENJ).',
    registers: [register],
})

export const indexer_marketplace_auctions_created_total = new client.Gauge({
    name: 'indexer_marketplace_auctions_created_total',
    labelNames: ['marketplace'],
    help: 'The total number of auctions created.',
    registers: [register],
})

export const indexer_marketplace_auctions_finalized_total = new client.Gauge({
    name: 'indexer_marketplace_auctions_finalized_total',
    labelNames: ['marketplace'],
    help: 'The total number of auctions finalized (lifetime).',
    registers: [register],
})

export const indexer_marketplace_auctions_bid_total = new client.Gauge({
    name: 'indexer_marketplace_auctions_bid_total',
    labelNames: ['marketplace'],
    help: 'The total number of bids performed in auctions (lifetime).',
    registers: [register],
})

export const indexer_marketplace_listings_created_total = new client.Gauge({
    name: 'indexer_marketplace_listings_created_total',
    labelNames: ['marketplace'],
    help: 'The total number of listings created (lifetime).',
    registers: [register],
})

export const indexer_marketplace_listings_filled_total = new client.Gauge({
    name: 'indexer_marketplace_listings_filled_total',
    labelNames: ['marketplace'],
    help: 'The total number of listings filled (lifetime).',
    registers: [register],
})

export const indexer_marketplace_listings_active_total = new client.Gauge({
    name: 'indexer_marketplace_listings_active_total',
    labelNames: ['marketplace'],
    help: 'The number of total active (current) listings.',
    registers: [register],
})

export const indexer_marketplace_listings_canceled_total = new client.Gauge({
    name: 'indexer_marketplace_listings_canceled_total',
    labelNames: ['marketplace'],
    help: 'The total number of listings canceled (lifetime).',
    registers: [register],
})

export const indexer_marketplace_token_sell_price_avg = new client.Gauge({
    name: 'indexer_marketplace_token_sell_price_avg',
    labelNames: ['marketplace'],
    help: 'The average value a token sold for in ENJ.',
    registers: [register],
})

export const indexer_marketplace_unique_sellers_total = new client.Gauge({
    name: 'indexer_marketplace_unique_sellers_total',
    labelNames: ['marketplace'],
    help: 'The total number of unique accounts that were used to create a listing.',
    registers: [register],
})

export const indexer_marketplace_unique_buyers_total = new client.Gauge({
    name: 'indexer_marketplace_unique_buyers_total',
    labelNames: ['marketplace'],
    help: 'The total number of unique accounts that were used to buy a listing.',
    registers: [register],
})

export default async () => {
    if (!connection.isInitialized) {
        await connection.initialize().catch(() => {
            throw Error('Failed to initialize connection')
        })
    }

    const em = connection.manager
}
