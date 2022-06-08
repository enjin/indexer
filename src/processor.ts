import config from './config'
import { SubstrateProcessor } from '@subsquid/substrate-processor'
import { DEFAULT_BATCH_SIZE } from './common/consts'
import * as modules from './mappings'

const processor = new SubstrateProcessor(`${config.chainName}-processor`)

processor.setBatchSize(config.batchSize || DEFAULT_BATCH_SIZE)
processor.setDataSource(config.dataSource)
processor.setPrometheusPort(3001)
processor.setBlockRange(config.blockRange || { from: 0 })

//events handlers
processor.addEventHandler('multiTokens.CollectionCreated', modules.multiTokens.events.handleCollectionCreated)

processor.run()
