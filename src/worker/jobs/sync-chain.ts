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

const saveChainInfo = async (em: EntityManager, api: ApiPromise, block: LocalBlock) => {
    try {
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

    if (!fromBlock) {
        const chainInfo = await em
            .getRepository(ChainInfo)
            .createQueryBuilder('chain_info')
            .orderBy('block_number', 'DESC')
            .getOneOrFail()

        currentBlock = chainInfo?.blockNumber ?? 0
        variableDate = chainInfo.timestamp.getTime()
        length28dBlock = currentBlock - 28 * blocksInDay

        for (let i = currentBlock; i >= length28dBlock; i -= blocksInDay) {
            QueueUtils.dispatchSyncChain(i, i - blocksInDay)
        }

        await _job.log(`Dispatched jobs for blocks from ${currentBlock} to ${length28dBlock}`)
        return
    }

    if (fromBlock) {
        currentBlock = fromBlock
    }

    if (toBlock) {
        length28dBlock = toBlock
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

        const blockHash = await api.rpc.chain.getBlockHash(i)
        const header = await api.derive.chain.getHeader(blockHash.toString())

        const localBlock: LocalBlock = {
            hash: blockHash.toString(),
            height: header.number.toNumber(),
            timestamp: variableDate * 1000,
            validator: header.author?.toString() ?? '',
            specVersion: Number(1050),
        }

        const state = await saveChainInfo(em, api, localBlock)
        await em.save(state)
    }

    await _job.log(`Synced blocks from ${fromBlock} to ${toBlock}`)
}
