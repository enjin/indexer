/* eslint-disable max-classes-per-file */
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
