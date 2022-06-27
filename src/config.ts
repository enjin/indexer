import { ProcessorConfig } from './types/custom/processorConfig'

const config: ProcessorConfig = {
    chainName: 'rocfinity',
    prefix: 195,
    // genesisHash: '0x1cb2120b3afd6da2dca23d8b95e30fd7eabe4357c3d470bc02487a7d6fd00d1d',
    dataSource: {
        archive: 'http://archive_gateway:8000/graphql',
        chain: 'wss://archive.rpc.rococo.efinity.io',
    },
    batchSize: 1,
    blockRange: {
        from: 0,
    },
}

export default config
