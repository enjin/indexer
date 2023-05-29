import { SubstrateBatchProcessor } from '@subsquid/substrate-processor'

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
    dataSource: Parameters<SubstrateBatchProcessor<any>['setDataSource']>[HandlerParams.NAME]
    batchSize?: Parameters<SubstrateBatchProcessor<any>['setBatchSize']>[HandlerParams.NAME]
    port?: Parameters<SubstrateBatchProcessor<any>['setPrometheusPort']>[HandlerParams.NAME]
    blockRange?: Parameters<SubstrateBatchProcessor<any>['setBlockRange']>[HandlerParams.NAME]
    redisHost: string
    redisDb: number
    redisSupportsTls: boolean
    redisPort: number
    pusher: any
}
