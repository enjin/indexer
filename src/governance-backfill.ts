import { SubstrateBatchProcessor } from '@subsquid/substrate-processor'
import { TypeormDatabase } from '@subsquid/typeorm-store'
import { Event } from '~/model'
import { indexedEvent, processEvent } from '~/pallet/governance/processors'
import { governanceEventItems } from '~/processor.config'
import config from '~/util/config'

function blockNumber(value: string | undefined): number {
    const parsed = value && /^\d+$/.test(value) ? Number(value) : NaN
    if (!Number.isSafeInteger(parsed) || parsed < 0)
        throw new Error('Pass safe, non-negative from and to block numbers')
    return parsed
}

function main(): void {
    const from = blockNumber(process.argv[2])
    const to = blockNumber(process.argv[3])
    if (from > to) throw new Error('The from block must be at or before the to block')
    if (!config.dataSource.archive) throw new Error('A configured archive gateway is required for governance backfill')

    const processor = new SubstrateBatchProcessor()
        .setRpcEndpoint(config.dataSource.chain)
        .setGateway({ url: config.dataSource.archive, apiKey: config.dataSource.archiveApiKey })
        .setBlockRange({ from, to })
        .addEvent({ name: governanceEventItems, call: true, extrinsic: true })
        .setFields({ call: { args: true, name: true, success: true } })

    processor.run(
        new TypeormDatabase({
            isolationLevel: 'READ COMMITTED',
            supportHotBlocks: false,
            stateSchema: 'squid_governance_backfill',
        }),
        async (ctx) => {
            for (const block of ctx.blocks) {
                for (const event of block.events) {
                    const activity = await processEvent(ctx, block.header, event)
                    if (!(await ctx.store.findOneBy(Event, { id: activity.id }))) {
                        await ctx.store.save(indexedEvent(activity, false))
                    }
                }
            }
        }
    )
}

try {
    main()
} catch (error: unknown) {
    console.error(error)
    process.exitCode = 1
}
