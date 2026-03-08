import { ConnectionOptions } from 'bullmq'
import config from '~/util/config'

export const connection: ConnectionOptions = {
    host: config.redis.host,
    port: config.redis.port,
    db: config.redis.db,
    // Small delay on reconnect to avoid all workers hammering Redis at once (which can trigger another restart)
    retryStrategy: (times: number) => Math.min(times * 1000, 5000),
}

export default {
    connection,
}
