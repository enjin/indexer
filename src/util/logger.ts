import { Logtail } from '@logtail/node'
import { Context } from '@logtail/types'
import { createLogger, Logger as SqdLogger } from '@subsquid/logger'
import config from './config'

export class Logger {
    private readonly sqdLogger: SqdLogger
    private readonly logtail?: Logtail
    private readonly context?: Context
    private static instances: Map<string, Logger> = new Map()
    private static defaultNamespace = 'sqd:default'

    constructor(namespace: string) {
        this.sqdLogger = createLogger(namespace)

        if (config.logtail.host && config.logtail.token) {
            this.context = {
                environment: config.environment,
                network: config.chainName,
            }

            this.logtail = new Logtail(config.logtail.token, {
                endpoint: config.logtail.host,
            })
        }
    }

    private static getInstance(namespace: string = Logger.defaultNamespace): Logger {
        if (!Logger.instances.has(namespace)) {
            Logger.instances.set(namespace, new Logger(namespace))
        }

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return Logger.instances.get(namespace)!
    }

    static info(msg: string, namespace?: string): void {
        Logger.getInstance(namespace).info(msg)
    }

    static debug(msg: string, namespace?: string): void {
        Logger.getInstance(namespace).debug(msg)
    }

    static warn(msg: string, namespace?: string): void {
        Logger.getInstance(namespace).warn(msg)
    }

    static error(msg: string, namespace?: string): void {
        Logger.getInstance(namespace).error(msg)
    }

    static trace(msg: string, namespace?: string): void {
        Logger.getInstance(namespace).trace(msg)
    }

    static fatal(msg: string, namespace?: string): void {
        Logger.getInstance(namespace).fatal(msg)
    }

    info(msg: string): void {
        this.sqdLogger.info(msg)

        if (this.logtail) {
            void this.logtail.info(msg, this.context)
        }
    }

    debug(msg: string): void {
        this.sqdLogger.debug(msg)

        if (this.logtail) {
            void this.logtail.debug(msg, this.context)
        }
    }

    warn(msg: string): void {
        this.sqdLogger.warn(msg)

        if (this.logtail) {
            void this.logtail.warn(msg, this.context)
        }
    }

    error(msg: string): void {
        this.sqdLogger.error(msg)

        if (this.logtail) {
            void this.logtail.error(msg, this.context)
        }
    }

    trace(msg: string): void {
        if (typeof this.sqdLogger.trace === 'function') {
            this.sqdLogger.trace(msg)
        }

        if (this.logtail) {
            void this.logtail.debug(msg, this.context)
        }
    }

    fatal(msg: string): void {
        if (typeof this.sqdLogger.fatal === 'function') {
            this.sqdLogger.fatal(msg)
        }

        if (this.logtail) {
            void this.logtail.error(msg, this.context)
        }
    }
}
