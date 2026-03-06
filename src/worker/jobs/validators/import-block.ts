import { Job } from 'bullmq'
import { In } from 'typeorm'
import { ChainInfo, Marketplace } from '~/model'
import { connectionManager } from '~/contexts'
import Rpc from '~/util/rpc'
import { decodeAddress } from '~/util/tools'

const BATCH_SIZE = 10
const RPC_RETRY_ATTEMPTS = 2
const RPC_RETRY_DELAY_MS = 10000

function isRpcConnectionError(err: unknown): boolean {
    const msg = err instanceof Error ? err.message : String(err)
    return /WebSocket is not connected|is not connected|connection|ECONNRESET|ECONNREFUSED/i.test(msg)
}

async function withRpcRetry<T>(rpc: Rpc, fn: () => Promise<T>): Promise<T> {
    let lastErr: unknown
    for (let attempt = 1; attempt <= RPC_RETRY_ATTEMPTS; attempt++) {
        try {
            await rpc.ensureConnected()
            return await fn()
        } catch (err) {
            lastErr = err
            if (!isRpcConnectionError(err) || attempt === RPC_RETRY_ATTEMPTS) throw err
            await new Promise((r) => setTimeout(r, RPC_RETRY_DELAY_MS))
        }
    }
    throw lastErr
}

export async function importBlock(job: Job, blockNumber: number, toBlock?: number): Promise<void> {
    const em = await connectionManager()
    const rpc = await Rpc.getInstance()
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
    ] = await withRpcRetry(rpc, async () => {
        const { api } = rpc
        return Promise.all([
            api.consts.system.version,
            api.consts.balances.existentialDeposit,
            api.consts.marketplace.listingActiveDelay,
            api.consts.marketplace.listingDeposit,
            api.consts.marketplace.maxRoundingError,
            api.consts.marketplace.maxSaltLength,
            api.consts.marketplace.minimumBidIncreasePercentage,
        ])
    })

    const totalBlocks = endBlock - fromBlock + 1
    let states: ChainInfo[] = []

    for (let i = 0; i < totalBlocks; i += BATCH_SIZE) {
        const batchCount = Math.min(BATCH_SIZE, totalBlocks - i)
        const batchStart = fromBlock + i
        const batchEnd = batchStart + batchCount - 1

        await job.log(`Fetching block hashes for batch ${batchStart}–${batchEnd}`)

        const blockNumbers = Array.from({ length: batchCount }, (_, j) => batchStart + j)

        const existingBlocks = await em.getRepository(ChainInfo).find({
            where: { blockNumber: In(blockNumbers) },
            select: ['blockNumber'],
        })
        const existingSet = new Set(existingBlocks.map((b) => b.blockNumber))

        const missingNumbers = blockNumbers.filter((n) => !existingSet.has(n))
        if (missingNumbers.length === 0) {
            await job.log(`All blocks in batch ${batchStart}–${batchEnd} already exist, skipping`)
            continue
        }

        await job.log(`Fetching ${missingNumbers.length} missing blocks in batch ${batchStart}–${batchEnd}`)

        const hashes = await withRpcRetry(rpc, () =>
            Promise.all(missingNumbers.map((n) => rpc.api.rpc.chain.getBlockHash(n)))
        )

        const [headers, timestamps, runtimeVersions] = await withRpcRetry(rpc, () =>
            Promise.all([
                Promise.all(hashes.map((h) => rpc.api.derive.chain.getHeader(h.toString()))),
                Promise.all(hashes.map((h) => rpc.api.query.timestamp.now.at(h.toString()))),
                Promise.all(hashes.map((h) => rpc.api.rpc.state.getRuntimeVersion(h.toString()))),
            ])
        )

        for (let j = 0; j < missingNumbers.length; j++) {
            const height = missingNumbers[j]
            const hash = hashes[j].toString()
            const header = headers[j]
            const timestamp = Number((timestamps[j] as unknown as { toNumber: () => number }).toNumber())
            const specVersion = runtimeVersions[j].specVersion.toNumber()

            const state = new ChainInfo({
                id: hash,
                genesisHash: rpc.api.genesisHash.toString(),
                transactionVersion: transactionVersion.toNumber(),
                specVersion,
                blockNumber: height,
                blockHash: hash,
                existentialDeposit: existentialDeposit.toBigInt(),
                timestamp: new Date(timestamp),
                validator: (() => {
                    const author = header.author?.toString()
                    if (!author || author.length === 0) return null
                    try {
                        return decodeAddress(author)
                    } catch {
                        return null
                    }
                })(),
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
