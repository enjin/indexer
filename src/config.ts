import { ProcessorConfig } from './types/custom/processorConfig'

const config: ProcessorConfig = {
    chainName: process.env.CHAIN_NAME || 'efinity',
    prefix: process.env.CHAIN_PREFIX ? parseInt(process.env.CHAIN_PREFIX) : 1110,
    chainStateHeight: process.env.CHAIN_STATE_HEIGHT ? parseInt(process.env.CHAIN_STATE_HEIGHT) : 792000,
    genesisHash: process.env.GENESIS_HASH || '0x335369975fced3fc22e23498da306a712f4fd964c957364d53c49cea9db8bc2f',
    rpc: process.env.CHAIN_RPC || 'wss://rpc.efinity.io',
    dataSource: {
        archive: 'http://archive_gateway:8000/graphql',
        chain: process.env.CHAIN_ENDPOINT || 'wss://archive.rpc.efinity.io',
    },
    batchSize: 100,
    blockRange: {
        from: 0,
    },
}

export default config
