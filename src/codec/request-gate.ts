import type { RequestHandler } from 'express'
import { CODEC_REQUEST_BURST, CODEC_REQUESTS_PER_SECOND, MAX_CODEC_IN_FLIGHT } from './limits'

/** A process-wide bound, including body parsing and requests waiting on RPC. */
export function createRequestGate(
    maxInFlight = MAX_CODEC_IN_FLIGHT,
    burst = CODEC_REQUEST_BURST,
    requestsPerSecond = CODEC_REQUESTS_PER_SECOND
): RequestHandler {
    let active = 0
    let tokens = burst
    let updatedAt = Date.now()
    return (req, res, next) => {
        if (req.method !== 'POST') {
            next()
            return
        }
        const now = Date.now()
        tokens = Math.min(burst, tokens + (Math.max(0, now - updatedAt) * requestsPerSecond) / 1000)
        updatedAt = now
        if (active >= maxInFlight || tokens < 1) {
            res.set('Retry-After', '1')
            res.status(429).json({ error: 'Codec request capacity exceeded; retry later' })
            return
        }
        active++
        tokens--
        const bodyTimeout = setTimeout(() => {
            if (!req.complete) req.destroy()
        }, 10_000)
        bodyTimeout.unref()
        const clearBodyTimeout = () => {
            clearTimeout(bodyTimeout)
        }
        req.once('end', clearBodyTimeout)
        req.once('close', clearBodyTimeout)
        let released = false
        const release = () => {
            if (!released) {
                released = true
                active--
            }
        }
        res.locals.codecRelease = release
        res.once('finish', release)
        res.once('close', () => {
            if (!res.locals.codecWorking) release()
        })
        next()
    }
}
