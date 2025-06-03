import { createHash } from 'crypto'
import { Logger } from '../util/logger'
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

export function logError(error: Error, job?: Job): void {
    const msg = `${error.name}: ${error.message}`
    Logger.error(msg, LOGGER_NAMESPACE)

    if (job) {
        void job.log(`[Error] ${msg}`)
    }
}

export function logInfo(msg: string, job?: Job): void {
    Logger.info(msg, LOGGER_NAMESPACE)

    if (job) {
        void job.log(`[Info] ${msg}`)
    }
}

export function logDebug(msg: string, job?: Job): void {
    Logger.debug(msg, LOGGER_NAMESPACE)

    if (job) {
        void job.log(`[Debug] ${msg}`)
    }
}
