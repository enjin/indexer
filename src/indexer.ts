import { SubstrateBatchProcessor } from '@subsquid/substrate-processor'
import { FullTypeormDatabase } from '@subsquid/typeorm-store'
import config from './config'
import { populateBlock } from './populateBlock'
import { CommonContext } from './mappings/types/contexts'

new SubstrateBatchProcessor()
    .setDataSource(config.dataSource)
    .setBlockRange({ from: config.lastBlockHeight, to: config.lastBlockHeight })
    .addCall('Timestamp.set') // We need at least one event or call to start the processor
    .run(new FullTypeormDatabase(), async (ctx) => {
        ctx.log.info('Started chain state sync process')
        const block = ctx.blocks[0]
        await populateBlock(ctx as unknown as CommonContext, block.header)
    })
