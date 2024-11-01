import * as Sentry from '@sentry/node'

export class UnknownVersionError extends Error {
    constructor(name: string) {
        super(`There is no relevant version for ${name}`)
    }
}

export class UnsupportedCallError extends Error {
    constructor(name: string) {
        super(`${name} is not supported`)
    }
}

export class CallNotDefinedError extends Error {
    constructor() {
        super('Call is not defined')
    }
}

export function throwError(message: string, severity: Sentry.SeverityLevel = 'error'): void {
    if (process.env.NODE_ENV === 'development' && severity === 'fatal') {
        throw new Error(message)
    } else {
        Sentry.captureMessage(message, severity)
    }
}
