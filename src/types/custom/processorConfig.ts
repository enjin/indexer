interface DataSource {
    archive: string | null
    chain: string
}

export interface ProcessorConfig {
    chainName: string
    prefix: number | string
    lastBlockHeight: number
    genesisHash: string
    batchSize?: number
    redisHost: string
    redisDb: number
    dataSource: DataSource
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
