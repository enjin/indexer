import { SubstrateBatchProcessor } from '@subsquid/substrate-processor'
import { FullTypeormDatabase } from '@subsquid/typeorm-store'
import config from '../config'
import { populateBlock } from '../populateBlock'
import { CommonContext } from '../mappings/types/contexts'
import connection from '../connection'
import * as ingest from './ingest'

export function sync() {
    const db = new FullTypeormDatabase({
        isolationLevel: 'READ COMMITTED',
    })

    new SubstrateBatchProcessor()
        .setDataSource(config.dataSource)
        .setBlockRange({ from: config.lastBlockHeight, to: config.lastBlockHeight })
        // We need at least one event or call to start the processor
        // Timestamp.set is a call that happens on every block
        .addCall('Timestamp.set')
        .run(db, async (ctx) => {
            ctx.log.info('Starting chain state sync process')
            const block = ctx.blocks[0]
            await populateBlock(ctx as unknown as CommonContext, block.header)
            ctx.log.info('After it finishes we need to restart the last block')
            await connection.query('UPDATE squid_processor.status SET height = -1 WHERE id = 0')
            ctx.log.info('Starting ingest now')
            ingest.run(db)
        })
}
