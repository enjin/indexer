import { Job } from 'bullmq'
import { ChainInfo, Marketplace } from '../../model'
import { connectionManager } from '../../contexts'
import Rpc from '../../util/rpc'
import { EntityManager } from 'typeorm'

type LocalBlock = {
    hash: string
    height: number
    timestamp: number
    validator: string
    specVersion: number
}

const saveChainInfo = async (em: EntityManager, block: LocalBlock) => {
    try {
        const existing = await em.getRepository(ChainInfo).findOne({
            where: {
                blockNumber: block.height,
            },
        })

        if (existing) {
            return
        }

        const { api } = await Rpc.getInstance()
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

        await em.save(state)
    } catch (error) {
        console.error(error)
    }
}

export async function syncChain(_job: Job) {
    const em = await connectionManager()

    const { api } = await Rpc.getInstance()

    const chainInfo = await em
        .getRepository(ChainInfo)
        .createQueryBuilder('chain_info')
        .orderBy('block_number', 'DESC')
        .getOneOrFail()

    const currentBlock = chainInfo?.blockNumber ?? 0
    let variableDate = chainInfo.timestamp.getTime()

    const blocksInDay = 10 * 60 * 24
    const length28dBlock = currentBlock - 28 * blocksInDay
    for (let i = currentBlock; i >= length28dBlock; i--) {
        const blockHash = await api.rpc.chain.getBlockHash(i)
        const header = await api.derive.chain.getHeader(blockHash.toString())
        variableDate = variableDate - 6 * 1000

        const localBlock: LocalBlock = {
            hash: blockHash.toString(),
            height: header.number.toNumber(),
            timestamp: variableDate,
            validator: header.author?.toString() ?? '',
            specVersion: Number(1050),
        }

        await saveChainInfo(em, localBlock)

        await _job.log(`Synced block ${i}`)
    }
}
