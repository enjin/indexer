import { Job } from 'bullmq'
import { ChainInfo, Marketplace } from '~/model'
import { connectionManager } from '~/contexts'
import Rpc from '~/util/rpc'
import { decodeAddress } from '~/util/tools'

const BATCH_SIZE = 100

export async function importBlock(job: Job, blockNumber: number, toBlock?: number): Promise<void> {
    const em = await connectionManager()
    const { api } = await Rpc.getInstance()

    const fromBlock = blockNumber
    const endBlock = toBlock ?? blockNumber

    if (fromBlock > endBlock) {
        throw new Error(`fromBlock (${fromBlock}) must be <= toBlock (${endBlock})`)
    }

    await job.log(`Importing blocks from ${fromBlock} to ${endBlock}`)

    const [
        { transactionVersion },
        existentialDeposit,
        listingActiveDelay,
        listingDeposit,
        maxRoundingError,
        maxSaltLength,
        minimumBidIncreasePercentage,
    ] = await Promise.all([
        api.consts.system.version,
        api.consts.balances.existentialDeposit,
        api.consts.marketplace.listingActiveDelay,
        api.consts.marketplace.listingDeposit,
        api.consts.marketplace.maxRoundingError,
        api.consts.marketplace.maxSaltLength,
        api.consts.marketplace.minimumBidIncreasePercentage,
    ])

    const totalBlocks = endBlock - fromBlock + 1
    let states: ChainInfo[] = []

    for (let i = 0; i < totalBlocks; i += BATCH_SIZE) {
        const batchCount = Math.min(BATCH_SIZE, totalBlocks - i)
        const batchStart = fromBlock + i
        const batchEnd = batchStart + batchCount - 1

        await job.log(`Fetching block hashes for batch ${batchStart}–${batchEnd}`)

        const blockNumbers = Array.from({ length: batchCount }, (_, j) => batchStart + j)

        const existingBlocks = await em.getRepository(ChainInfo).find({
            where: blockNumbers.map((n) => ({ blockNumber: n })),
            select: ['blockNumber'],
        })
        const existingSet = new Set(existingBlocks.map((b) => b.blockNumber))

        const missingNumbers = blockNumbers.filter((n) => !existingSet.has(n))
        if (missingNumbers.length === 0) {
            await job.log(`All blocks in batch ${batchStart}–${batchEnd} already exist, skipping`)
            continue
        }

        await job.log(`Fetching ${missingNumbers.length} missing blocks in batch ${batchStart}–${batchEnd}`)

        const hashes = await Promise.all(missingNumbers.map((n) => api.rpc.chain.getBlockHash(n)))

        const [headers, timestamps, runtimeVersions] = await Promise.all([
            Promise.all(hashes.map((h) => api.derive.chain.getHeader(h.toString()))),
            Promise.all(hashes.map((h) => api.query.timestamp.now.at(h.toString()))),
            Promise.all(hashes.map((h) => api.rpc.state.getRuntimeVersion(h.toString()))),
        ])

        for (let j = 0; j < missingNumbers.length; j++) {
            const height = missingNumbers[j]
            const hash = hashes[j].toString()
            const header = headers[j]
            const timestamp = Number((timestamps[j] as unknown as { toNumber: () => number }).toNumber())
            const specVersion = runtimeVersions[j].specVersion.toNumber()

            const state = new ChainInfo({
                id: hash,
                genesisHash: api.genesisHash.toString(),
                transactionVersion: transactionVersion.toNumber(),
                specVersion,
                blockNumber: height,
                blockHash: hash,
                existentialDeposit: existentialDeposit.toBigInt(),
                timestamp: new Date(timestamp),
                validator: decodeAddress(header.author?.toString() ?? '') ?? null,
                marketplace: new Marketplace({
                    protocolFee: 25_000000,
                    listingActiveDelay: Number(listingActiveDelay.toString()),
                    listingDeposit: BigInt(listingDeposit.toString()),
                    maxRoundingError: BigInt(maxRoundingError.toString()),
                    maxSaltLength: Number(maxSaltLength.toString()),
                    minimumBidIncreasePercentage: Number(minimumBidIncreasePercentage.toString()),
                }),
            })

            states.push(state)
        }

        if (states.length >= BATCH_SIZE) {
            await em.save(states)
            await job.log(`Saved batch of ${states.length} ChainInfo records`)
            states = []
        }
    }

    if (states.length > 0) {
        await em.save(states)
        await job.log(`Saved final batch of ${states.length} ChainInfo records`)
    }

    await job.log(`Finished importing blocks from ${fromBlock} to ${endBlock}`)
}
