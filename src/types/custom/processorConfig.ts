interface DataSource {
    archive: string | null
    chain: string
    fromBlock: number
}

export interface ProcessorConfig {
    chainName: string
    prefix: number | string
    lastBlockHeight: number
    genesisHash: string
    batchSize?: number
    dataSource: DataSource
    redisUrl: string
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
