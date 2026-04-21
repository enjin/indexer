import { ConnectionOptions } from 'bullmq'
import config from '~/util/config'

// Give up and exit the process if Redis is still unreachable after this long.
// Orchestrator (pm2, k8s, docker, ...) will restart us with a fresh connection.
const MAX_REDIS_DOWNTIME_MS = 2 * 60 * 1000

let firstRetryAt: number | null = null

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
    retryStrategy: (times: number) => {
        if (times === 1) firstRetryAt = Date.now()
        const elapsed = firstRetryAt ? Date.now() - firstRetryAt : 0

        if (elapsed >= MAX_REDIS_DOWNTIME_MS) {
             
            console.error(
                `[redis] unreachable for ${Math.round(elapsed / 1000)}s (${times} attempts). Exiting so the process can be restarted.`
            )
            setImmediate(() => process.exit(1))
            return null
        }

        return Math.min(times * 500, 5000)
    },
    reconnectOnError: (err: Error) => {
        const retriable = ['READONLY', 'ETIMEDOUT', 'ECONNRESET', 'EPIPE']
        return retriable.some((code) => err.message.includes(code))
    },
}

export default {
    connection,
}
