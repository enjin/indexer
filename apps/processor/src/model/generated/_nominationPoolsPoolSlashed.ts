import assert from "assert"
import * as marshal from "./marshal"

export class NominationPoolsPoolSlashed {
    public readonly isTypeOf = 'NominationPoolsPoolSlashed'
    private _pool!: string
    private _balance!: bigint

    constructor(props?: Partial<Omit<NominationPoolsPoolSlashed, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._pool = marshal.string.fromJSON(json.pool)
            this._balance = marshal.bigint.fromJSON(json.balance)
        }
    }

    get pool(): string {
        assert(this._pool != null, 'uninitialized access')
        return this._pool
    }

    set pool(value: string) {
        this._pool = value
    }

    get balance(): bigint {
        assert(this._balance != null, 'uninitialized access')
        return this._balance
    }

    set balance(value: bigint) {
        this._balance = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            pool: this.pool,
            balance: marshal.bigint.toJSON(this.balance),
        }
    }
}
