import { ConnectionOptions } from 'bullmq'
import config from '~/util/config'

export const connection: ConnectionOptions = {
    host: config.redis.host,
    port: config.redis.port,
    db: config.redis.db,
    // BullMQ workers use blocking commands (brpoplpush / bzpopmin) to receive
    // jobs and keep locks alive. If maxRetriesPerRequest is not null, ioredis
    // gives up on those commands during a Redis hiccup, locks expire, and jobs
    // get marked stalled -> eventually fail with UnrecoverableError.
    maxRetriesPerRequest: null,
    enableReadyCheck: false,
    enableOfflineQueue: true,
    retryStrategy: (times: number) => Math.min(times * 500, 5000),
    reconnectOnError: (err: Error) => {
        const retriable = ['READONLY', 'ETIMEDOUT', 'ECONNRESET', 'EPIPE']
        return retriable.some((code) => err.message.includes(code))
    },
}

export default {
    connection,
}
