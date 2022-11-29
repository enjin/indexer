/* eslint-disable no-console */
import { SubstrateProcessor } from '@subsquid/substrate-processor'
import { FullTypeormDatabase } from '@subsquid/typeorm-store'
import config from './config'
import { handleChainState } from './chainState'
import { DEFAULT_PORT } from './common/consts'
import * as map from './mappings'
import { createEfiToken } from './createEfiToken'

const database = new FullTypeormDatabase()
const processor = new SubstrateProcessor(database)

processor.setDataSource(config.dataSource)
processor.setPrometheusPort(config.port || DEFAULT_PORT)
processor.setBlockRange(config.blockRange || { from: 0 })

processor.addPreHook(
    {
        range: { from: 1, to: 1 },
    },
    createEfiToken
)

// Saves all extrinsics to user account
processor.addCallHandler('*', { triggerForFailedCalls: true }, map.extrinsics.processor.save)

// Saves MultiTokens information
processor.addEventHandler('MultiTokens.CollectionCreated', map.multiTokens.events.collectionCreated)
processor.addEventHandler('MultiTokens.CollectionDestroyed', map.multiTokens.events.collectionDestroyed)
processor.addEventHandler('MultiTokens.CollectionMutated', map.multiTokens.events.collectionMutated)
processor.addEventHandler('MultiTokens.CollectionAccountCreated', map.multiTokens.events.collectionAccountCreated)
processor.addEventHandler('MultiTokens.CollectionAccountDestroyed', map.multiTokens.events.collectionAccountDestroyed)
processor.addEventHandler('MultiTokens.TokenCreated', map.multiTokens.events.tokenCreated)
processor.addEventHandler('MultiTokens.TokenDestroyed', map.multiTokens.events.tokenDestroyed)
processor.addEventHandler('MultiTokens.TokenMutated', map.multiTokens.events.tokenMutated)
processor.addEventHandler('MultiTokens.TokenAccountCreated', map.multiTokens.events.tokenAccountCreated)
processor.addEventHandler('MultiTokens.TokenAccountDestroyed', map.multiTokens.events.tokenAccountDestroyed)
processor.addEventHandler('MultiTokens.Minted', map.multiTokens.events.minted)
processor.addEventHandler('MultiTokens.Burned', map.multiTokens.events.burned)
processor.addEventHandler('MultiTokens.AttributeSet', map.multiTokens.events.attributeSet)
processor.addEventHandler('MultiTokens.AttributeRemoved', map.multiTokens.events.attributeRemoved)
processor.addEventHandler('MultiTokens.Frozen', map.multiTokens.events.frozen)
processor.addEventHandler('MultiTokens.Thawed', map.multiTokens.events.thawed)
processor.addEventHandler('MultiTokens.Approved', map.multiTokens.events.approved)
processor.addEventHandler('MultiTokens.Unapproved', map.multiTokens.events.unapproved)
processor.addEventHandler('MultiTokens.Transferred', map.multiTokens.events.transferred)

// Saves Marketplace information
processor.addEventHandler('Marketplace.ListingCreated', map.marketplace.events.listingCreated)
processor.addEventHandler('Marketplace.ListingCancelled', map.marketplace.events.listingCancelled)
processor.addEventHandler('Marketplace.ListingFilled', map.marketplace.events.listingFilled)
processor.addEventHandler('Marketplace.BidPlaced', map.marketplace.events.bidPlaced)
processor.addEventHandler('Marketplace.AuctionFinalized', map.marketplace.events.auctionFinalized)

// Updates balances
processor.addEventHandler('Balances.DustLost', map.balances.processor.save)
processor.addEventHandler('Balances.Endowed', map.balances.processor.save)
processor.addEventHandler('Balances.ReserveRepatriated', map.balances.processor.save)
processor.addEventHandler('Balances.Reserved', map.balances.processor.save)
processor.addEventHandler('Balances.Slashed', map.balances.processor.save)
processor.addEventHandler('Balances.Transfer', map.balances.processor.save)
processor.addEventHandler('Balances.Unreserved', map.balances.processor.save)
processor.addEventHandler('Balances.Withdraw', map.balances.processor.save)
processor.addEventHandler('Balances.BalanceSet', map.balances.processor.save)
processor.addEventHandler('Balances.Deposit', map.balances.processor.save)

processor.addPostHook(
    {
        range: {
            from: config.chainStateHeight,
        },
    },
    handleChainState
)

processor.run()
