'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var config = {
    chainName: process.env.CHAIN_NAME || 'enjin-matrixchain',
    prefix: process.env.CHAIN_PREFIX ? parseInt(process.env.CHAIN_PREFIX, 10) : 1110,
    genesisHash: process.env.GENESIS_HASH || '0x3af4ff48ec76d2efc8476730f423ac07e25ad48f5f4c9dc39c778b164d808615',
    dataSource: {
        archive: process.env.ARCHIVE_ENDPOINT || null,
        chain: process.env.CHAIN_ENDPOINT || 'wss://archive.matrix.blockchain.enjin.io',
        fromBlock: process.env.FROM_BLOCK ? parseInt(process.env.FROM_BLOCK, 10) : 0,
    },
    erasPerYear: process.env.ERAS_PER_YEAR ? parseInt(process.env.ERAS_PER_YEAR, 10) : 365,
    redis: {
        db: process.env.REDIS_DB ? parseInt(process.env.REDIS_DB, 10) : 0,
        host: process.env.REDIS_URL
            ? process.env.REDIS_URL.replace('redis://', '').split(':')[0]
            : process.env.REDIS_HOST || 'localhost',
        port: process.env.REDIS_URL
            ? parseInt(process.env.REDIS_URL.replace('redis://', '').split(':')[1])
            : process.env.REDIS_PORT
              ? parseInt(process.env.REDIS_PORT, 10)
              : 6379,
        tls: !!process.env.REDIS_SUPPORTS_TLS,
    },
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
    wsReconnectDelay: process.env.WS_RECONNECT_DELAY ? parseInt(process.env.WS_RECONNECT_DELAY, 10) : 1000,
}
exports.default = config
