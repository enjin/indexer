interface DataSource {
    archive: string | null
    chain: string
    fromBlock: number
}

export interface Config {
    environment: string
    chainName: string
    prefix: number | string
    genesisHash: string
    erasPerYear: number
    batchSize?: number
    dataSource: DataSource
    redis: {
        db: number
        host: string
        port: number
        tls: boolean
    }
    marketplace: {
        prod: string
        stg: string
    }
    sentryDsn?: string
    logLevel: number
    logtail: {
        token?: string
        host?: string
    }
    amazonSns: {
        topicArn: string
        region: string
        credentials: {
            accessKeyId: string
            secretAccessKey: string
        }
    }
    wsReconnectDelay: number
    truncateDatabase: boolean
    skipSync: boolean
    metricsLogFile?: string
}

const config: Config = {
    environment: process.env.APP_ENV || 'local',
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
        db:
            process.env.REDIS_URL && !isNaN(parseInt(process.env.REDIS_URL.replace('redis://', '').split('/')[1], 10))
                ? parseInt(process.env.REDIS_URL.replace('redis://', '').split('/')[1], 10)
                : process.env.REDIS_DB
                  ? parseInt(process.env.REDIS_DB, 10)
                  : 0,
        host: process.env.REDIS_URL
            ? process.env.REDIS_URL.replace('redis://', '').split(':')[0]
            : process.env.REDIS_HOST || 'localhost',
        port: process.env.REDIS_URL
            ? parseInt(process.env.REDIS_URL.replace('redis://', '').split(':')[1])
            : process.env.REDIS_PORT
              ? parseInt(process.env.REDIS_PORT, 10)
              : 6379,
        tls: process.env.REDIS_SUPPORTS_TLS === 'true',
    },
    marketplace: {
        prod: process.env.MARKETPLACE_API_PROD_URL || '',
        stg: process.env.MARKETPLACE_API_STG_URL || '',
    },
    sentryDsn: process.env.SENTRY_DSN,
    logLevel: process.env.LOG_LEVEL ? parseInt(process.env.LOG_LEVEL) : 2,
    logtail: {
        token: process.env.LOGTAIL_TOKEN,
        host: process.env.LOGTAIL_HOST,
    },
    amazonSns: {
        topicArn: process.env.AWS_SNS_TOPIC_ARN || process.env.SNS_TOPIC_ARN || '',
        region: process.env.AWS_DEFAULT_REGION || process.env.SQS_REGION || '',
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY || process.env.SQS_ACCESS_KEY || '',
            secretAccessKey: process.env.AWS_SECRET_KEY || process.env.SQS_SECRET_KEY || '',
        },
    },
    wsReconnectDelay: process.env.WS_RECONNECT_DELAY ? parseInt(process.env.WS_RECONNECT_DELAY, 10) : 1000,
    truncateDatabase: process.env.TRUNCATE_DATABASE === 'true',
    skipSync: process.env.SKIP_SYNC === 'true',
    metricsLogFile: process.env.METRICS_LOG_FILE,
}

export default config
