import * as Sentry from '@sentry/node'
import config from '~/util/config'
import { Logger } from '~/util/logger'

const FLUSH_TIMEOUT_MS = 5_000
const IGNORED_ERRORS = ['API/INIT: RPC methods not decorated:', 'REGISTRY: Unknown signed extensions']

export interface CrashContext {
    [key: string]: unknown
}

export function initializeCrashReporting(service: string): void {
    Sentry.init({
        dsn: config.sentryDsn,
        environment: config.environment,
        ignoreErrors: IGNORED_ERRORS,
        initialScope: {
            tags: {
                network: config.chainName,
                service,
            },
        },
        shutdownTimeout: FLUSH_TIMEOUT_MS,
        tracesSampleRate: 0.0,
    })
}

export async function reportCrash(
    error: unknown,
    logger: Logger,
    service: string,
    source: string,
    context: CrashContext = {}
): Promise<void> {
    const normalizedError = normalizeError(error)
    const runtimeContext = {
        environment: config.environment,
        hostname: process.env.HOSTNAME,
        memoryUsage: process.memoryUsage(),
        network: config.chainName,
        nodeVersion: process.version,
        pid: process.pid,
        service,
        source,
        uptimeSeconds: Math.floor(process.uptime()),
        ...context,
    }

    logger.fatal(
        JSON.stringify(
            {
                event: 'process_crash',
                error: {
                    message: normalizedError.message,
                    name: normalizedError.name,
                    stack: normalizedError.stack,
                },
                ...runtimeContext,
            },
            (_key, value: unknown) => (typeof value === 'bigint' ? value.toString() : value)
        )
    )

    Sentry.withScope((scope) => {
        scope.setLevel('fatal')
        scope.setTag('crash.source', source)
        scope.setTag('service', service)
        scope.setContext('crash', runtimeContext)
        Sentry.captureException(normalizedError)
    })

    await Promise.allSettled([flushWithTimeout(logger.flush(), FLUSH_TIMEOUT_MS), Sentry.flush(FLUSH_TIMEOUT_MS)])
}

function normalizeError(error: unknown): Error {
    if (error instanceof Error) return error

    if (typeof error === 'string') return new Error(error)

    try {
        return new Error(JSON.stringify(error))
    } catch {
        return new Error(String(error))
    }
}

async function flushWithTimeout(operation: Promise<void>, timeoutMs: number): Promise<void> {
    let timeout: NodeJS.Timeout | undefined

    try {
        await Promise.race([
            operation,
            new Promise<void>((resolve) => {
                timeout = setTimeout(resolve, timeoutMs)
            }),
        ])
    } finally {
        if (timeout) clearTimeout(timeout)
    }
}
