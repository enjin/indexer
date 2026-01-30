import { ConnectionOptions } from 'bullmq'
import config from '~/util/config'

export const connection: ConnectionOptions = {
    host: config.redis.host,
    port: config.redis.port,
    db: config.redis.db,
    retryStrategy: (times: number) => {
        // Exponential backoff: retry after 1s, 2s, 4s, 8s, up to 30s
        const delay = Math.min(Math.pow(2, times) * 1000, 30000)
        console.log(`Redis connection retry attempt ${times}, waiting ${delay}ms`)
        return delay
    },
    maxRetriesPerRequest: null, // Infinite retries for long-running operations
    enableReadyCheck: true,
    enableOfflineQueue: true,
    keepAlive: 30000, // Send keep-alive packets every 30 seconds
    connectTimeout: 60000, // 60 second connection timeout
    commandTimeout: 120000, // 2 minute command timeout for long operations
    lazyConnect: false, // Connect immediately
    reconnectOnError: (err) => {
        // Reconnect on common errors
        const targetError = 'READONLY'
        if (err.message.includes(targetError)) {
            return true
        }
        return false
    },
}

export default {
    connection,
}
