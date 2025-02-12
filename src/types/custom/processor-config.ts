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
    erasPerYear: number
    batchSize?: number
    dataSource: DataSource
    redis: {
        db: number
        host: string
        port: number
        tls: boolean
    }
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
    wsReconnectDelay: number
}
