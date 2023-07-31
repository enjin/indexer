import { SubstrateProcessor } from '@subsquid/substrate-processor'

type Parameters<T> = T extends (...args: infer T) => any ? T : never

enum HandlerParams {
    NAME,
    OPTIONS,
    FUNC,
}

export interface ProcessorConfig {
    chainName: string
    prefix: number | string
    chainStateHeight: number
    genesisHash: string
    rpc: string
    dataSource: Parameters<SubstrateProcessor<any>['setDataSource']>[HandlerParams.NAME]
    batchSize?: Parameters<SubstrateProcessor<any>['setBatchSize']>[HandlerParams.NAME]
    port?: Parameters<SubstrateProcessor<any>['setPrometheusPort']>[HandlerParams.NAME]
    blockRange?: Parameters<SubstrateProcessor<any>['setBlockRange']>[HandlerParams.NAME]
    redisHost: string
    redisDb: number
    redisSupportsTls: boolean
    redisPort: number
    marketplaceUrl: string
    shouldFetchAccounts: boolean
    sentryDsn?: string
}
