import { Logtail } from '@logtail/node'
import { createLogger, Logger as SqdLogger, LogLevel } from '@subsquid/logger'
import config from './config'

// Create a custom logger that implements only the needed methods
export class Logger {
    private sqdLogger: SqdLogger
    private readonly logtail?: Logtail

    constructor(namespace: string) {
        // Create the original logger
        this.sqdLogger = createLogger(namespace)

        // Initialize Logtail if configured
        if (config.logtail && config.logtail.host && config.logtail.token) {
            console.log(config.logtail)
            this.logtail = new Logtail(config.logtail.token, {
                endpoint: config.logtail.host,
            })
        }
    }

    info(msg: string): void {
        this.sqdLogger.info(msg)

        if (this.logtail) {
            void this.logtail.info(msg)
        }
    }

    debug(msg: string): void {
        this.sqdLogger.debug(msg)

        if (this.logtail) {
            void this.logtail.debug(msg)
        }
    }

    warn(msg: string): void {
        this.sqdLogger.warn(msg)

        if (this.logtail) {
            void this.logtail.warn(msg)
        }
    }

    error(msg: string): void {
        this.sqdLogger.error(msg)

        if (this.logtail) {
            void this.logtail.error(msg)
        }
    }

    trace(msg: string): void {
        if (typeof this.sqdLogger.trace === 'function') {
            this.sqdLogger.trace(msg)
        }

        if (this.logtail) {
            void this.logtail.debug(msg)
        }
    }

    fatal(msg: string): void {
        if (typeof this.sqdLogger.fatal === 'function') {
            this.sqdLogger.fatal(msg)
        }

        if (this.logtail) {
            void this.logtail.error(msg)
        }
    }
}
