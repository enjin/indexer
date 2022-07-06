import { ProcessorConfig } from './types/custom/processorConfig'

const config: ProcessorConfig = {
    chainName: 'efinity',
    prefix: 1110,
    genesisHash: '0x335369975fced3fc22e23498da306a712f4fd964c957364d53c49cea9db8bc2f',
    rpc: 'wss://rpc.efinity.io',
    dataSource: {
        archive: 'http://archive_gateway:8000/graphql',
        chain: 'wss://archive.rpc.efinity.io',
    },
    batchSize: 100,
    blockRange: {
        from: 0,
    },
}

export default config
