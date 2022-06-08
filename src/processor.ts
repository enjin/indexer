import config from './config'
import { SubstrateProcessor } from '@subsquid/substrate-processor'
import { DEFAULT_BATCH_SIZE } from './common/consts'
import * as modules from './mappings'

const processor = new SubstrateProcessor(`${config.chainName}-processor`)

processor.setBatchSize(config.batchSize || DEFAULT_BATCH_SIZE)
processor.setDataSource(config.dataSource)
processor.setPrometheusPort(3001)
processor.setBlockRange(config.blockRange || { from: 0 })

processor.addEventHandler('multiTokens.CollectionCreated', modules.multiTokens.events.handleCollectionCreated)
processor.addEventHandler('multiTokens.CollectionDestroyed', modules.multiTokens.events.handleCollectionDestroyed)
processor.addEventHandler(
    'multiTokens.CollectionAccountCreated',
    modules.multiTokens.events.handleCollectionAccountCreated
)
processor.addEventHandler(
    'multiTokens.CollectionAccountDestroyed',
    modules.multiTokens.events.handleCollectionAccountDestroyed
)
processor.addEventHandler('multiTokens.TokenCreated', modules.multiTokens.events.handleTokenCreated)
processor.addEventHandler('multiTokens.TokenDestroyed', modules.multiTokens.events.handleTokenDestroyed)
processor.addEventHandler('multiTokens.TokenAccountCreated', modules.multiTokens.events.handleTokenAccountCreated)
processor.addEventHandler('multiTokens.TokenAccountDestroyed', modules.multiTokens.events.handleTokenAccountDestroyed)
// processor.addEventHandler('multiTokens.Minted', modules.multiTokens.events.handleMinted)
// processor.addEventHandler('multiTokens.Burned', modules.multiTokens.events.handleBurned)
processor.addEventHandler('multiTokens.AttributeSet', modules.multiTokens.events.handleAttributeSet)
processor.addEventHandler('multiTokens.AttributeRemoved', modules.multiTokens.events.handleAttributeRemoved)
processor.addEventHandler('multiTokens.Frozen', modules.multiTokens.events.handleFrozen)
processor.addEventHandler('multiTokens.Thawed', modules.multiTokens.events.handleThawed)

processor.run()
