import assert from "assert"
import * as marshal from "./marshal"

export class NominationPoolsEarlyBirdSharesCaptured {
    public readonly isTypeOf = 'NominationPoolsEarlyBirdSharesCaptured'
    private _pool!: string
    private _totalAccounts!: number

    constructor(props?: Partial<Omit<NominationPoolsEarlyBirdSharesCaptured, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._pool = marshal.string.fromJSON(json.pool)
            this._totalAccounts = marshal.int.fromJSON(json.totalAccounts)
        }
    }

    get pool(): string {
        assert(this._pool != null, 'uninitialized access')
        return this._pool
    }

    set pool(value: string) {
        this._pool = value
    }

    get totalAccounts(): number {
        assert(this._totalAccounts != null, 'uninitialized access')
        return this._totalAccounts
    }

    set totalAccounts(value: number) {
        this._totalAccounts = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            pool: this.pool,
            totalAccounts: this.totalAccounts,
        }
    }
}
