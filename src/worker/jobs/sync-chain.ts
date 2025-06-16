import { Job } from 'bullmq'
import { ChainInfo, Marketplace } from '../../model'
import { connectionManager } from '../../contexts'
import Rpc from '../../util/rpc'
import { EntityManager } from 'typeorm'
import { ApiPromise } from '@polkadot/api'
import { QueueUtils } from '../../queue'

type LocalBlock = {
    hash: string
    height: number
    timestamp: number
    validator: string
    specVersion: number
}

const saveChainInfo = async (api: ApiPromise, block: LocalBlock, blockData: any) => {
    try {
        const [
            { transactionVersion },
            existentialDeposit,
            listingActiveDelay,
            listingDeposit,
            maxRoundingError,
            maxSaltLength,
            minimumBidIncreasePercentage,
        ] = blockData

        const state = new ChainInfo({
            id: block.hash,
            genesisHash: '0x3af4ff48ec76d2efc8476730f423ac07e25ad48f5f4c9dc39c778b164d808615',
            transactionVersion: transactionVersion.toNumber(),
            specVersion: Number(block.specVersion),
            blockNumber: block.height,
            blockHash: block.hash,
            existentialDeposit: existentialDeposit.toBigInt(),
            timestamp: new Date(block.timestamp ?? 0),
            validator: block.validator ?? null,
            marketplace: new Marketplace({
                protocolFee: 25_000000,
                listingActiveDelay: Number(listingActiveDelay.toString()),
                listingDeposit: BigInt(listingDeposit.toString()),
                maxRoundingError: BigInt(maxRoundingError.toString()),
                maxSaltLength: Number(maxSaltLength.toString()),
                minimumBidIncreasePercentage: Number(minimumBidIncreasePercentage.toString()),
            }),
        })

        return state
    } catch (error) {
        console.error(error)
    }
}

export async function syncChain(_job: Job, fromBlock?: number, toBlock?: number) {
    const em = await connectionManager()

    const { api } = await Rpc.getInstance()
    const blocksInDay = 10 * 60 * 24
    let currentBlock = 0
    let variableDate = 0
    let length28dBlock = 0

    await _job.log('Starting fetching data')
    const blockData = await Promise.all([
        api.consts.system.version,
        api.consts.balances.existentialDeposit,
        api.consts.marketplace.listingActiveDelay,
        api.consts.marketplace.listingDeposit,
        api.consts.marketplace.maxRoundingError,
        api.consts.marketplace.maxSaltLength,
        api.consts.marketplace.minimumBidIncreasePercentage,
    ])
    await _job.log('Fetching data done')

    const chainInfo = await em.find(ChainInfo, {
        order: {
            blockNumber: 'DESC',
        },
        take: 1,
    })

    variableDate = chainInfo[0].timestamp.getTime()
    await _job.log('Fetching chain info done')

    if (!fromBlock) {
        currentBlock = chainInfo[0].blockNumber
        length28dBlock = currentBlock - 28 * blocksInDay

        for (let i = currentBlock; i >= length28dBlock; i -= 1000) {
            QueueUtils.dispatchSyncChain(i, i - 1000)
        }

        await _job.log(`Dispatched jobs for blocks from ${currentBlock} to ${length28dBlock}`)
        return
    }

    if (fromBlock) {
        currentBlock = fromBlock
        variableDate = variableDate - (chainInfo[0].blockNumber - fromBlock) * 6 * 1000
    }
    if (toBlock) {
        length28dBlock = toBlock
    }

    const states = []

    let blockHashes = []
    let blockHeaders = []

    const BATCH_SIZE = 100
    const totalBlocks = currentBlock - length28dBlock + 1

    // Fetch block hashes in batches of 100
    for (let i = 0; i < totalBlocks; i += BATCH_SIZE) {
        const batchEnd = Math.min(i + BATCH_SIZE, totalBlocks)
        const batchSize = batchEnd - i

        await _job.log(
            `Fetching block hashes: batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(totalBlocks / BATCH_SIZE)} (${batchSize} blocks)`
        )

        const hashBatch = await Promise.all(
            Array.from({ length: batchSize }, (_, j) => api.rpc.chain.getBlockHash(currentBlock - (i + j)))
        )

        blockHashes.push(...hashBatch)
    }

    // Fetch block headers in batches of 100
    for (let i = 0; i < blockHashes.length; i += BATCH_SIZE) {
        const batchEnd = Math.min(i + BATCH_SIZE, blockHashes.length)
        const hashBatch = blockHashes.slice(i, batchEnd)

        await _job.log(
            `Fetching block headers: batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(blockHashes.length / BATCH_SIZE)} (${hashBatch.length} headers)`
        )

        const headerBatch = await Promise.all(hashBatch.map((hash) => api.derive.chain.getHeader(hash.toString())))

        blockHeaders.push(...headerBatch)
    }

    for (let i = currentBlock; i >= length28dBlock; i--) {
        if (i % 1000 === 0) {
            await _job.log(`Syncing block ${i}`)
        }

        variableDate = variableDate - 6 * 1000
        const existing = await em.getRepository(ChainInfo).findOne({
            where: {
                blockNumber: i,
            },
        })
        if (existing) {
            continue
        }

        const blockHash = blockHashes[i - length28dBlock]
        const header = blockHeaders[i - length28dBlock]

        const localBlock: LocalBlock = {
            hash: blockHash.toString(),
            height: header.number.toNumber(),
            timestamp: variableDate,
            validator: header.author?.toString() ?? '',
            specVersion: Number(1050),
        }

        const state = await saveChainInfo(api, localBlock, blockData)

        if (state) {
            states.push(state)
        }

        if (states.length >= BATCH_SIZE) {
            await em.save(states)
            await _job.log(`Saved batch of ${states.length} chain info records`)
            states.length = 0
        }
    }

    if (states.length > 0) {
        await em.save(states)
        await _job.log(`Saved final batch of ${states.length} chain info records`)
    }

    await _job.log(`Synced batch blocks from ${fromBlock} to ${toBlock}`)
}
