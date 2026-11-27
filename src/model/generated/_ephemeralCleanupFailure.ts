import assert from "assert"
import * as marshal from "./marshal"

export class EphemeralCleanupFailure {
    private _expirationBlock!: bigint
    private _error!: string | undefined | null

    constructor(props?: Partial<Omit<EphemeralCleanupFailure, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._expirationBlock = marshal.bigint.fromJSON(json.expirationBlock)
            this._error = json.error == null ? undefined : marshal.string.fromJSON(json.error)
        }
    }

    get expirationBlock(): bigint {
        assert(this._expirationBlock != null, 'uninitialized access')
        return this._expirationBlock
    }

    set expirationBlock(value: bigint) {
        this._expirationBlock = value
    }

    get error(): string | undefined | null {
        return this._error
    }

    set error(value: string | undefined | null) {
        this._error = value
    }

    toJSON(): object {
        return {
            expirationBlock: marshal.bigint.toJSON(this.expirationBlock),
            error: this.error,
        }
    }
}
