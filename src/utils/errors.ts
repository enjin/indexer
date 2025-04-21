import * as Sentry from '@sentry/node'
import { CallItem, EventItem } from '../contexts'

export class UnsupportedEventError extends Error {
    constructor(event: EventItem) {
        super(`Event ${event.name} at ${event.block.height} is not supported`)
    }
}

export class UnsupportedCallError extends Error {
    constructor(call: CallItem) {
        super(
            `Call ${call.name} (spec: ${call.block.specName}-${call.block.specVersion}) at block #${call.block.height} is not supported`
        )
    }
}

export class UnsupportedStorageError extends Error {
    constructor(storage: string) {
        super(`Storage ${storage} is not supported`)
    }
}

export class AccountNotParsableError extends Error {
    constructor(account: string) {
        super(`Account ${account} is not parsable`)
    }
}

export class AccountNotFoundError extends Error {
    constructor(account: string) {
        super(`Account ${account} not found`)
    }
}

export class CallNotDefinedError extends Error {
    constructor() {
        super('Call is not defined')
    }
}

export function throwFatalError(message: string): void {
    if (process.env.NODE_ENV === 'development') {
        throw new Error(message)
    } else {
        Sentry.captureMessage(message, 'fatal')
    }
}
