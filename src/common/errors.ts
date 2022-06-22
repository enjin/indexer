export class UnknownVersionError extends Error {
    constructor(name: string) {
        super(`There is no relevant version for ${name}`)
    }
}
