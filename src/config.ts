import { ProcessorConfig } from './types/custom/processorConfig'

const config: ProcessorConfig = {
    chainName: process.env.CHAIN_NAME || 'enjin-matrix',
    prefix: process.env.CHAIN_PREFIX ? parseInt(process.env.CHAIN_PREFIX, 10) : 1110,
    lastBlockHeight: process.env.LAST_BLOCK_HEIGHT ? parseInt(process.env.LAST_BLOCK_HEIGHT, 10) : 0,
    genesisHash: process.env.GENESIS_HASH || '0x3af4ff48ec76d2efc8476730f423ac07e25ad48f5f4c9dc39c778b164d808615',
    dataSource: {
        archive: process.env.ARCHIVE_ENDPOINT || null,
        chain: process.env.CHAIN_ENDPOINT || 'wss://archive.matrix.blockchain.enjin.io',
        fromBlock: process.env.FROM_BLOCK ? parseInt(process.env.FROM_BLOCK, 10) : 0,
    },
    redisUrl:
        process.env.REDIS_URL ||
        `${process.env.REDIS_SUPPORTS_TLS ? 'rediss' : 'redis'}://${process.env.REDIS_HOST}:${process.env.REDIS_PORT ?? 6379}/${process.env.REDIS_DB ?? 0}`,
    marketplaceUrl: process.env.MARKETPLACE_URL || 'https://nft.io',
    sentryDsn: process.env.SENTRY_DSN,
    amazonSns: {
        topicArn: process.env.AWS_SNS_TOPIC_ARN || process.env.SNS_TOPIC_ARN || '',
        region: process.env.AWS_DEFAULT_REGION || process.env.SQS_REGION || '',
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY || process.env.SQS_ACCESS_KEY || '',
            secretAccessKey: process.env.AWS_SECRET_KEY || process.env.SQS_SECRET_KEY || '',
        },
    },
}

export default config
