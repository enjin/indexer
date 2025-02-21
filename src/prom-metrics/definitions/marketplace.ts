import client from 'prom-client'
import register from '../registry'
import { connectionManager } from '../../contexts'

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
    const em = connectionManager()

    const [
        tradesTotal,
        tradingVolume24h,
        auctionsCreated,
        auctionsFinalized,
        auctionsBid,
        listingsCreated,
        listingsFilled,
        listingsActive,
        listingsCanceled,
        tokenSellPriceAvg,
        uniqueSellers,
        uniqueBuyers,
    ] = await Promise.all([
        em.query('SELECT COUNT(*) FROM listing_sale'),
        em.query("SELECT SUM(amount*price) as sum FROM listing_sale WHERE created_at > NOW() - INTERVAL '24 hours'"),
        em.query("SELECT COUNT(*) FROM listing where type='Auction'"),
        em.query("SELECT COUNT(*) from listing_sale where listing_id in (select id from listing where type='Auction')"),
        em.query('SELECT COUNT(*) FROM bid'),
        em.query('SELECT COUNT(*) FROM listing'),
        em.query("SELECT COUNT(*) FROM listing_status where type = 'Finalized'"),
        em.query('SELECT COUNT(*) FROM listing where is_active = true'),
        em.query("SELECT COUNT(*) FROM listing_status where type = 'Cancelled'"),
        em.query('SELECT AVG(price) FROM listing_sale'),
        em.query('SELECT COUNT(DISTINCT seller_id) FROM listing'),
        em.query('SELECT COUNT(DISTINCT buyer_id) FROM listing_sale'),
    ])

    indexer_marketplace_trades_total.set(Number(tradesTotal[0].count))
    indexer_marketplace_24h_trading_volume_total.set(Number(tradingVolume24h[0].sum || 0) / 1e18)
    indexer_marketplace_auctions_created_total.set(Number(auctionsCreated[0].count))
    indexer_marketplace_auctions_finalized_total.set(Number(auctionsFinalized[0].count))
    indexer_marketplace_auctions_bid_total.set(Number(auctionsBid[0].count))
    indexer_marketplace_listings_created_total.set(Number(listingsCreated[0].count))
    indexer_marketplace_listings_filled_total.set(Number(listingsFilled[0].count))
    indexer_marketplace_listings_active_total.set(Number(listingsActive[0].count))
    indexer_marketplace_listings_canceled_total.set(Number(listingsCanceled[0].count))
    indexer_marketplace_token_sell_price_avg.set(Number(tokenSellPriceAvg[0].avg) / 1e18)
    indexer_marketplace_unique_sellers_total.set(Number(uniqueSellers[0].count))
    indexer_marketplace_unique_buyers_total.set(Number(uniqueBuyers[0].count))
}
