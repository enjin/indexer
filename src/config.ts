import { ProcessorConfig } from './types/custom/processorConfig'

const config: ProcessorConfig = {
    chainName: process.env.CHAIN_NAME || 'enjin-matrixchain',
    prefix: process.env.CHAIN_PREFIX ? parseInt(process.env.CHAIN_PREFIX, 10) : 1110,
    lastBlockHeight: process.env.LAST_BLOCK_HEIGHT ? parseInt(process.env.LAST_BLOCK_HEIGHT, 10) : 0,
    genesisHash: process.env.GENESIS_HASH || '0x3af4ff48ec76d2efc8476730f423ac07e25ad48f5f4c9dc39c778b164d808615',
    rpc: process.env.CHAIN_RPC || 'wss://rpc.matrix.blockchain.enjin.io',
    dataSource: {
        archive: process.env.ARCHIVE_ENDPOINT || 'https://matrixchain.archive.subsquid.io/graphql',
        chain: process.env.CHAIN_ENDPOINT || 'wss://archive.matrix.blockchain.enjin.io',
    },
    batchSize: 100,
    blockRange: {
        from: 0,
    },
    redisHost: process.env.REDIS_HOST || 'indexer_redis',
    redisDb: process.env.REDIS_DB ? parseInt(process.env.REDIS_DB, 10) : 0,
    redisSupportsTls: Boolean(process.env.REDIS_SUPPORTS_TLS || false),
    redisPort: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT, 10) : 6379,
    marketplaceUrl: process.env.MARKETPLACE_URL || 'https://beta.nft.io',
    sentryDsn: process.env.SENTRY_DSN,
    amazonSns: {
        topicArn: process.env.SNS_TOPIC_ARN || '',
        region: process.env.SQS_REGION || '',
        credentials: {
            accessKeyId: process.env.SQS_ACCESS_KEY || '',
            secretAccessKey: process.env.SQS_SECRET_KEY || '',
        },
    },
}

export default config
