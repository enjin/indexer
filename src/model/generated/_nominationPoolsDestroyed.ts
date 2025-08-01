import assert from "assert"
import * as marshal from "./marshal"
import {NominationPool} from "./nominationPool.model"
import {Account} from "./account.model"

export class NominationPoolsDestroyed {
    public readonly isTypeOf = 'NominationPoolsDestroyed'
    private _pool!: string
    private _account!: string

    constructor(props?: Partial<Omit<NominationPoolsDestroyed, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._pool = marshal.string.fromJSON(json.pool)
            this._account = marshal.string.fromJSON(json.account)
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

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            pool: this.pool,
            account: this.account,
        }
    }
}
