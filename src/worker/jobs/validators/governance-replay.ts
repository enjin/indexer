import { SubstrateBatchProcessor } from '@subsquid/substrate-processor'
import { TypeormDatabase } from '@subsquid/typeorm-store'
import { Event } from '~/model'
import { indexedEvent, processEvent } from '~/pallet/governance/processors'
import { governanceEventItems } from '~/processor.config'
import config from '~/util/config'
import { setEventBlock } from '~/util/event-block'

function blockNumber(value: string | undefined): number {
    const parsed = value && /^\d+$/.test(value) ? Number(value) : NaN
    if (!Number.isSafeInteger(parsed) || parsed < 0)
        throw new Error('Pass safe, non-negative from and to block numbers')
    return parsed
}

function main(): void {
    const from = blockNumber(process.argv[2])
    const to = blockNumber(process.argv[3])
    const chainName = process.argv[4]
    if (from > to) throw new Error('The from block must be at or before the to block')
    if (chainName !== config.chainName) throw new Error('Governance replay chain does not match this worker')

    // BullMQ owns the replay process. A crashed or stopped worker must not leave
    // an orphan writing to the database while a retry starts on another replica.
    process.on('disconnect', () => process.exit(1))

    const processor = new SubstrateBatchProcessor()
        .setRpcEndpoint(config.dataSource.chain)
        .setBlockRange({ from, to })
        .addEvent({ name: governanceEventItems, call: true, extrinsic: true })
        .setFields({ block: { timestamp: true }, call: { args: true, name: true, success: true } })

    processor.run(
        new TypeormDatabase({
            isolationLevel: 'READ COMMITTED',
            supportHotBlocks: false,
            stateSchema: `squid_governance_${from}_${to}`,
        }),
        async (ctx) => {
            for (const block of ctx.blocks) {
                for (const event of block.events) {
                    const activity = await processEvent(ctx, block.header, event)
                    if (!(await ctx.store.findOneBy(Event, { id: activity.id }))) {
                        const model = indexedEvent(activity, false)
                        setEventBlock(model, block.header, event.index)
                        await ctx.store.save(model)
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
