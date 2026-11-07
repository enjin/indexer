import { createHash } from 'crypto'
import { Logger } from '~/util/logger'
import { Job } from 'bullmq'

const LOGGER_NAMESPACE = 'sqd:worker'

export function isNotNullOrEmpty<T>(input: null | T): input is T {
    if (Array.isArray(input)) {
        return input.length > 0
    }

    return input != null
}

export function hash(str: string): string {
    return createHash('sha1').update(str).digest('hex')
}

/** Append a BullMQ log without letting logging failures affect job processing. */
export async function safeJobLog(job: Job | undefined, message: string): Promise<void> {
    if (!job) return
    try {
        await job.log(message)
    } catch {
        // The job may have been removed before the log write.
    }
}

export function logError(error: Error, job?: Job): void {
    void safeJobLog(job, `[${error.name}] ${error.message}`)

    Logger.error(error, LOGGER_NAMESPACE)
}

export function logInfo(msg: string, job?: Job): void {
    void safeJobLog(job, `[Info] ${msg}`)

    Logger.info(msg, LOGGER_NAMESPACE)
}

export function logDebug(msg: string, job?: Job): void {
    void safeJobLog(job, `[Debug] ${msg}`)

    Logger.debug(msg, LOGGER_NAMESPACE)
}

export function debugValue(v: unknown, maxLen = 3000): string {
    try {
        if (v != null && typeof (v as { toJSON?: () => unknown }).toJSON === 'function') {
            return JSON.stringify((v as { toJSON: () => unknown }).toJSON()).slice(0, maxLen)
        }
        return JSON.stringify(v, (_, val) => (typeof val === 'bigint' ? val.toString() : val)).slice(0, maxLen)
    } catch (e) {
        return `[unstringifiable: ${e instanceof Error ? e.message : String(e)}]`
    }
}
