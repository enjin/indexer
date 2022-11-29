/* eslint-disable no-console */
import { SubstrateProcessor } from '@subsquid/substrate-processor'
import { FullTypeormDatabase } from '@subsquid/typeorm-store'
import config from './config'
import { handleChainState } from './chainState'
import { DEFAULT_PORT } from './common/consts'
import * as modules from './mappings'
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
processor.addCallHandler('*', { triggerForFailedCalls: true }, modules.extrinsics.processor.save)

// Saves MultiTokens information
processor.addEventHandler('MultiTokens.CollectionCreated', modules.multiTokens.events.handleCollectionCreated)
processor.addEventHandler('MultiTokens.CollectionDestroyed', modules.multiTokens.events.handleCollectionDestroyed)
processor.addEventHandler('MultiTokens.CollectionMutated', modules.multiTokens.events.handleCollectionMutated)
processor.addEventHandler(
    'MultiTokens.CollectionAccountCreated',
    modules.multiTokens.events.handleCollectionAccountCreated
)
processor.addEventHandler(
    'MultiTokens.CollectionAccountDestroyed',
    modules.multiTokens.events.handleCollectionAccountDestroyed
)
processor.addEventHandler('MultiTokens.TokenCreated', modules.multiTokens.events.handleTokenCreated)
processor.addEventHandler('MultiTokens.TokenDestroyed', modules.multiTokens.events.handleTokenDestroyed)
processor.addEventHandler('MultiTokens.TokenMutated', modules.multiTokens.events.handleTokenMutated)
processor.addEventHandler('MultiTokens.TokenAccountCreated', modules.multiTokens.events.handleTokenAccountCreated)
processor.addEventHandler('MultiTokens.TokenAccountDestroyed', modules.multiTokens.events.handleTokenAccountDestroyed)
processor.addEventHandler('MultiTokens.Minted', modules.multiTokens.events.handleMinted)
processor.addEventHandler('MultiTokens.Burned', modules.multiTokens.events.handleBurned)
processor.addEventHandler('MultiTokens.AttributeSet', modules.multiTokens.events.handleAttributeSet)
processor.addEventHandler('MultiTokens.AttributeRemoved', modules.multiTokens.events.handleAttributeRemoved)
processor.addEventHandler('MultiTokens.Frozen', modules.multiTokens.events.handleFrozen)
processor.addEventHandler('MultiTokens.Thawed', modules.multiTokens.events.handleThawed)
processor.addEventHandler('MultiTokens.Approved', modules.multiTokens.events.handleApproved)
processor.addEventHandler('MultiTokens.Unapproved', modules.multiTokens.events.handleUnapproved)
processor.addEventHandler('MultiTokens.Transferred', modules.multiTokens.events.handleTransferred)

// Saves Marketplace information
processor.addEventHandler('Marketplace.ListingCreated', modules.marketplace.events.handleListingCreated)
processor.addEventHandler('Marketplace.ListingCancelled', modules.marketplace.events.handleListingCancelled)
processor.addEventHandler('Marketplace.ListingFilled', modules.marketplace.events.handleListingFilled)
processor.addEventHandler('Marketplace.BidPlaced', modules.marketplace.events.handleBidPlaced)
processor.addEventHandler('Marketplace.AuctionFinalized', modules.marketplace.events.handleAuctionFinalized)

// Updates balances
processor.addEventHandler('Balances.DustLost', modules.balances.processor.save)
processor.addEventHandler('Balances.Endowed', modules.balances.processor.save)
processor.addEventHandler('Balances.ReserveRepatriated', modules.balances.processor.save)
processor.addEventHandler('Balances.Reserved', modules.balances.processor.save)
processor.addEventHandler('Balances.Slashed', modules.balances.processor.save)
processor.addEventHandler('Balances.Transfer', modules.balances.processor.save)
processor.addEventHandler('Balances.Unreserved', modules.balances.processor.save)
processor.addEventHandler('Balances.Withdraw', modules.balances.processor.save)
processor.addEventHandler('Balances.BalanceSet', modules.balances.processor.save)
processor.addEventHandler('Balances.Deposit', modules.balances.processor.save)

processor.addPostHook(
    {
        range: {
            from: config.chainStateHeight,
        },
    },
    handleChainState
)

processor.run()
