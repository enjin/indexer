import { ProcessorConfig } from './types/custom/processorConfig'

const config: ProcessorConfig = {
    chainName: 'rocfinity',
    prefix: 195,
    // genesisHash: '0x1cb2120b3afd6da2dca23d8b95e30fd7eabe4357c3d470bc02487a7d6fd00d1d',
    dataSource: {
        archive: 'http://localhost:12093/graphql',
        chain: 'ws://54.151.181.83:9946',
    },
    batchSize: 100,
    blockRange: {
        from: 0,
    },
}

export default config
