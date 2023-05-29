import { ProcessorConfig } from './types/custom/processorConfig'

const config: ProcessorConfig = {
    chainName: process.env.CHAIN_NAME || 'efinity',
    prefix: process.env.CHAIN_PREFIX ? parseInt(process.env.CHAIN_PREFIX, 10) : 1110,
    chainStateHeight: process.env.CHAIN_STATE_HEIGHT ? parseInt(process.env.CHAIN_STATE_HEIGHT, 10) : 792000,
    genesisHash: process.env.GENESIS_HASH || '0x335369975fced3fc22e23498da306a712f4fd964c957364d53c49cea9db8bc2f',
    rpc: process.env.CHAIN_RPC || 'wss://rpc.efinity.io',
    dataSource: {
        archive: process.env.ARCHIVE_ENDPOINT || 'https://efinity.archive.subsquid.io/graphql',
        chain: process.env.CHAIN_ENDPOINT || 'wss://archive.rpc.efinity.io',
    },
    batchSize: 100,
    blockRange: {
        from: 0,
    },
    redisHost: process.env.REDIS_HOST || 'indexer_redis',
    redisDb: process.env.REDIS_DB ? parseInt(process.env.REDIS_DB, 10) : 0,
    redisSupportsTls: process.env.REDIS_SUPPORTS_TLS === 'true',
    redisPort: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT, 10) : 6379,
    pusher: {
        appId: process.env.PUSHER_APP_ID,
        key: process.env.PUSHER_APP_KEY,
        secret: process.env.PUSHER_APP_SECRET,
        cluster: process.env.PUSHER_APP_CLUSTER,
    },
}

export default config
