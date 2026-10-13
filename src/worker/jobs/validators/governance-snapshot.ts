import { SubstrateBatchProcessor } from '@subsquid/substrate-processor'
import { TypeormDatabase } from '@subsquid/typeorm-store'
import { snapshotGovernance } from '~/pallet/governance/processors/snapshot'
import config from '~/util/config'

function main(): void {
    const rawBlock = process.argv[2]
    const blockNumber = rawBlock && /^\d+$/.test(rawBlock) ? Number(rawBlock) : NaN
    const blockHash = process.argv[3]
    const chainName = process.argv[4]
    const snapshotId = process.argv[5]
    if (!Number.isSafeInteger(blockNumber) || blockNumber < 0) throw new Error('Invalid snapshot block number')
    if (!blockHash || !/^0x[0-9a-f]{64}$/i.test(blockHash)) throw new Error('Invalid snapshot block hash')
    if (chainName !== config.chainName) throw new Error('Governance snapshot chain does not match this worker')
    if (!snapshotId || !/^[0-9a-f]{12}$/.test(snapshotId)) throw new Error('Invalid governance snapshot ID')

    process.on('disconnect', () => process.exit(1))

    new SubstrateBatchProcessor()
        .setRpcEndpoint(config.dataSource.chain)
        .setBlockRange({ from: blockNumber, to: blockNumber })
        .includeAllBlocks()
        .run(
            new TypeormDatabase({
                isolationLevel: 'READ COMMITTED',
                supportHotBlocks: false,
                stateSchema: `squid_governance_snapshot_${snapshotId}`,
            }),
            async (ctx) => {
                if (ctx.blocks.length !== 1 || ctx.blocks[0].header.hash.toLowerCase() !== blockHash.toLowerCase()) {
                    throw new Error('Governance snapshot block does not match the pinned finalized hash')
                }
                const counts = await snapshotGovernance(ctx, ctx.blocks[0].header)
                ctx.log.info(`Imported governance state: ${JSON.stringify(counts)}`)
            }
        )
}

try {
    main()
} catch (error: unknown) {
    console.error(error)
    process.exitCode = 1
}
