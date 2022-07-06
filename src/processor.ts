import config from './config'
import { handleChainState } from './chainState'
import { SubstrateProcessor } from '@subsquid/substrate-processor'
import { DEFAULT_BATCH_SIZE, DEFAULT_PORT } from './common/consts'
import * as modules from './mappings'
import { TypeormDatabase } from '@subsquid/typeorm-store'

const database = new TypeormDatabase()
const processor = new SubstrateProcessor(database)

processor.setBatchSize(config.batchSize || DEFAULT_BATCH_SIZE)
processor.setDataSource(config.dataSource)
processor.setPrometheusPort(config.port || DEFAULT_PORT)
processor.setBlockRange(config.blockRange || { from: 0 })

processor.addCallHandler(
    'Balances.transfer',
    { triggerForFailedCalls: true },
    modules.balances.extrinsics.handleTransfer
)
processor.addCallHandler(
    'Balances.transfer_keep_alive',
    { triggerForFailedCalls: true },
    modules.balances.extrinsics.handleTransferKeepAlive
)
processor.addCallHandler(
    'Balances.force_transfer',
    { triggerForFailedCalls: true },
    modules.balances.extrinsics.handleForceTransfer
)
processor.addCallHandler(
    'Balances.transfer_all',
    { triggerForFailedCalls: true },
    modules.balances.extrinsics.handleTransferAll
)

processor.addEventHandler('MultiTokens.CollectionCreated', modules.multiTokens.events.handleCollectionCreated)
processor.addEventHandler('MultiTokens.CollectionDestroyed', modules.multiTokens.events.handleCollectionDestroyed)
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

processor.addPostHook(
    {
        range: {
            from: 750000,
        },
    },
    handleChainState
)

processor.run()
