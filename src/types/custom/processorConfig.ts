type Parameters<T> = T extends (...args: infer T) => any ? T : never

enum HandlerParams {
    NAME,
    OPTIONS,
    FUNC,
}

export interface ProcessorConfig {
    chainName: string
    prefix: number | string
    lastBlockHeight: number
    genesisHash: string
    rpc: string
    batchSize?: number
    redisHost: string
    redisDb: number
    redisSupportsTls: boolean
    redisPort: number
    marketplaceUrl: string
    sentryDsn?: string
    amazonSns: {
        topicArn: string
        region: string
        credentials: {
            accessKeyId: string
            secretAccessKey: string
        }
    }
}
