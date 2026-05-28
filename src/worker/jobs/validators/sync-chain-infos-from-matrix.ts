import axios from 'axios'
import { Job } from 'bullmq'
import { In } from 'typeorm'
import { connectionManager } from '~/contexts'
import { ChainInfo, Marketplace } from '~/model'
import { QueueUtils } from '~/queue'

const MATRIX_INDEXER_URL =
    process.env.MATRIX_INDEXER_GRAPHQL_URL || 'https://blockchain-matrix-indexer.stg.enjops.com/graphql'
const DEFAULT_BLOCK_NUMBER_LT = 5_147_899
const CHAIN_INFOS_BATCH_LIMIT = 1000

const CHAIN_INFOS_QUERY = `
query ChainInfos($blockNumberLt: Int!, $limit: Int!) {
  chainInfos(where: {blockNumber_lt: $blockNumberLt}, limit: $limit) {
    id
    specVersion
    transactionVersion
    genesisHash
    blockHash
    blockNumber
    existentialDeposit
    timestamp
    validator
    marketplace {
      protocolFee
      listingActiveDelay
      listingDeposit
      maxRoundingError
      maxSaltLength
      minimumBidIncreasePercentage
    }
    finalized
  }
}
`

type MatrixMarketplace = {
    protocolFee: number | string
    listingActiveDelay: number | string
    listingDeposit: number | string
    maxRoundingError: number | string
    maxSaltLength: number | string
    minimumBidIncreasePercentage: number | string
}

type MatrixChainInfo = {
    id: string
    specVersion: number
    transactionVersion: number
    genesisHash: string
    blockHash: string
    blockNumber: number
    existentialDeposit: string
    timestamp: string
    validator: string | null
    marketplace: MatrixMarketplace | null
    finalized: boolean | null
}

type GraphqlResponse = {
    data?: {
        chainInfos: MatrixChainInfo[]
    }
    errors?: Array<{ message: string }>
}

function toBigInt(value: string | number): bigint {
    return BigInt(String(value))
}

export async function syncChainInfosFromMatrix(job: Job): Promise<void> {
    const clientId = process.env.CF_ACCESS_CLIENT_ID
    const clientSecret = process.env.CF_ACCESS_CLIENT_SECRET

    if (!clientId || !clientSecret) {
        throw new Error('Missing CF access credentials: CF_ACCESS_CLIENT_ID/CF_ACCESS_CLIENT_SECRET')
    }

    const blockNumberLt =
        typeof job.data?.blockNumberLt === 'number' ? job.data.blockNumberLt : DEFAULT_BLOCK_NUMBER_LT

    await job.log(`Fetching chain infos from ${MATRIX_INDEXER_URL}`)

    const response = await axios.post<GraphqlResponse>(
        MATRIX_INDEXER_URL,
        {
            query: CHAIN_INFOS_QUERY,
            variables: {
                blockNumberLt,
                limit: CHAIN_INFOS_BATCH_LIMIT,
            },
        },
        {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'CF-Access-Client-Id': clientId,
                'CF-Access-Client-Secret': clientSecret,
            },
            timeout: 30_000,
        }
    )

    if (response.data.errors && response.data.errors.length > 0) {
        throw new Error(`Matrix indexer query failed: ${response.data.errors[0].message}`)
    }

    const chainInfos = response.data.data?.chainInfos ?? []
    if (chainInfos.length === 0) {
        await job.log(`No chain infos returned for blockNumber_lt=${blockNumberLt}`)
        return
    }

    const em = await connectionManager()
    const existing = await em.getRepository(ChainInfo).find({
        where: { id: In(chainInfos.map((item) => item.id)) },
        select: ['id'],
    })
    const existingIds = new Set(existing.map((item) => item.id))
    const incoming = chainInfos.filter((item) => !existingIds.has(item.id))

    if (incoming.length === 0) {
        await job.log(`All ${chainInfos.length} chain infos already exist in database`)
        return
    }

    const entities = incoming.map(
        (item) =>
            new ChainInfo({
                id: item.id,
                specVersion: item.specVersion,
                transactionVersion: item.transactionVersion,
                genesisHash: item.genesisHash,
                blockHash: item.blockHash,
                blockNumber: item.blockNumber,
                existentialDeposit: toBigInt(item.existentialDeposit),
                timestamp: new Date(item.timestamp),
                validator: item.validator,
                marketplace: item.marketplace
                    ? new Marketplace({
                          protocolFee: Number(item.marketplace.protocolFee),
                          listingActiveDelay: Number(item.marketplace.listingActiveDelay),
                          listingDeposit: toBigInt(item.marketplace.listingDeposit),
                          maxRoundingError: toBigInt(item.marketplace.maxRoundingError),
                          maxSaltLength: Number(item.marketplace.maxSaltLength),
                          minimumBidIncreasePercentage: Number(item.marketplace.minimumBidIncreasePercentage),
                      })
                    : null,
                finalized: item.finalized,
            })
    )

    await em.save(entities)
    await job.log(`Inserted ${entities.length} chain infos into database`)

    const nextBlockNumberLt = Math.min(...chainInfos.map((item) => item.blockNumber))
    const shouldContinue = chainInfos.length === CHAIN_INFOS_BATCH_LIMIT && nextBlockNumberLt > 0
    if (shouldContinue) {
        QueueUtils.dispatchSyncChainInfosFromMatrix(nextBlockNumberLt)
        await job.log(`Dispatched next chain infos batch with blockNumber_lt=${nextBlockNumberLt}`)
    }
}
