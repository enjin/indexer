/* eslint-disable sonarjs/no-duplicate-string */
import { ProcessorConfig } from './types/custom/processorConfig'

const config: ProcessorConfig = {
    chainName: 'rocfinity',
    prefix: 195,
    dataSource: {
        archive: 'http://localhost:8080/v1/graphql',
        chain: 'ws://localhost:10010',
    },
    batchSize: 500,
    blockRange: {
        from: 1,
    },
}

export default config
