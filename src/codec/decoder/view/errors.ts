export class UnsafeTransactionViewError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'UnsafeTransactionViewError'
    }
}
