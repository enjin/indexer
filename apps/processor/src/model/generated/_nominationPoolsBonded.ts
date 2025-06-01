import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"

export class NominationPoolsBonded {
    public readonly isTypeOf = 'NominationPoolsBonded'
    private _pool!: string
    private _account!: string
    private _bonded!: bigint

    constructor(props?: Partial<Omit<NominationPoolsBonded, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._pool = marshal.string.fromJSON(json.pool)
            this._account = marshal.string.fromJSON(json.account)
            this._bonded = marshal.bigint.fromJSON(json.bonded)
        }
    }

    get pool(): string {
        assert(this._pool != null, 'uninitialized access')
        return this._pool
    }

    set pool(value: string) {
        this._pool = value
    }

    get account(): string {
        assert(this._account != null, 'uninitialized access')
        return this._account
    }

    set account(value: string) {
        this._account = value
    }

    get bonded(): bigint {
        assert(this._bonded != null, 'uninitialized access')
        return this._bonded
    }

    set bonded(value: bigint) {
        this._bonded = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            pool: this.pool,
            account: this.account,
            bonded: marshal.bigint.toJSON(this.bonded),
        }
    }
}
