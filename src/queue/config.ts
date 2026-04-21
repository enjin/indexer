import { ConnectionOptions } from 'bullmq'
import processorConfig from '~/util/config'

export const connection: ConnectionOptions = {
    host: processorConfig.redis.host,
    port: processorConfig.redis.port,
    db: processorConfig.redis.db,
    // BullMQ requires this to be null so blocking commands (brpoplpush, etc.)
    // are not aborted mid-flight when Redis is briefly unavailable. Without it
    // the worker loses its lock, the job is marked stalled, and after a few
    // stalls it fails with "job stalled more than allowable limit".
    maxRetriesPerRequest: null,
    enableReadyCheck: false,
    enableOfflineQueue: true,
    // Reconnect forever, backing off up to 5s. ioredis passes the attempt count.
    retryStrategy: (times: number) => Math.min(times * 500, 5000),
    // Reconnect (not just retry) on failovers and transient network errors so
    // the client picks up a new master / re-establishes the subscription.
    reconnectOnError: (err: Error) => {
        const retriable = ['READONLY', 'ETIMEDOUT', 'ECONNRESET', 'EPIPE']
        return retriable.some((code) => err.message.includes(code))
    },
}

export default {
    connection,
}
