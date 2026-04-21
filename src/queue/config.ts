import { ConnectionOptions } from 'bullmq'
import processorConfig from '~/util/config'

// Give up and exit the process if Redis is still unreachable after this long.
// Orchestrator (pm2, k8s, docker, ...) will restart us.
const MAX_REDIS_DOWNTIME_MS = 2 * 60 * 1000

// Tracks the wall-clock start of the current disconnection cycle. Reset every
// time ioredis re-enters a fresh reconnection loop (`times === 1`).
let firstRetryAt: number | null = null

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
    // Reconnect, backing off up to 5s, but *give up* after
    // MAX_REDIS_DOWNTIME_MS so a wedged Redis can't trap us forever. Returning
    // a non-number from retryStrategy tells ioredis to stop reconnecting.
    retryStrategy: (times: number) => {
        if (times === 1) firstRetryAt = Date.now()
        const elapsed = firstRetryAt ? Date.now() - firstRetryAt : 0

        if (elapsed >= MAX_REDIS_DOWNTIME_MS) {
            // eslint-disable-next-line no-console
            console.error(
                `[redis] unreachable for ${Math.round(elapsed / 1000)}s (${times} attempts). Exiting so the process can be restarted.`
            )
            // Let the current tick finish logging before we exit.
            setImmediate(() => process.exit(1))
            return null
        }

        return Math.min(times * 500, 5000)
    },
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
