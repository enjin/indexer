/* eslint-disable @typescript-eslint/naming-convention */
import client from 'prom-client'
import register from './registry'


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

export const indexer_identity_registrars_total = new client.Gauge({
    name: 'indexer_identity_registrars_total',
    labelNames: ['identity'],
    help: 'The total number of registrars.',
    registers: [register],
})

export const indexer_identity_identities_main_total = new client.Gauge({
    name: 'indexer_identity_identities_main_total',
    labelNames: ['identity'],
    help: 'The total number of “main” identities created (excludes sub identities).',
    registers: [register],
})

export const indexer_identity_identities_sub_total = new client.Gauge({
    name: 'indexer_identity_identities_sub_total',
    labelNames: ['identity'],
    help: 'The total number of “sub” identities created (excludes main identities).',
    registers: [register],
})

export const indexer_identity_identities_total = new client.Gauge({
    name: 'indexer_identity_identities_total',
    labelNames: ['identity'],
    help: 'The total number of identities created (including main and sub identities).',
    registers: [register],
})

export const indexer_identity_indeitities_sub_avg = new client.Gauge({
    name: 'indexer_identity_indeitities_sub_avg',
    labelNames: ['identity'],
    help: 'The average number of sub identities created per main identity.',
    registers: [register],
})

