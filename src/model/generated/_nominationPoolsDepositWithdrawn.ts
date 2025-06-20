import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"

export class NominationPoolsDepositWithdrawn {
    public readonly isTypeOf = 'NominationPoolsDepositWithdrawn'
    private _account!: string
    private _balance!: bigint
    private _points!: bigint
    private _pool!: string

    constructor(props?: Partial<Omit<NominationPoolsDepositWithdrawn, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._account = marshal.string.fromJSON(json.account)
            this._balance = marshal.bigint.fromJSON(json.balance)
            this._points = marshal.bigint.fromJSON(json.points)
            this._pool = marshal.string.fromJSON(json.pool)
        }
    }

    get account(): string {
        assert(this._account != null, 'uninitialized access')
        return this._account
    }

    set account(value: string) {
        this._account = value
    }

    get balance(): bigint {
        assert(this._balance != null, 'uninitialized access')
        return this._balance
    }

    set balance(value: bigint) {
        this._balance = value
    }

    get points(): bigint {
        assert(this._points != null, 'uninitialized access')
        return this._points
    }

    set points(value: bigint) {
        this._points = value
    }

    get pool(): string {
        assert(this._pool != null, 'uninitialized access')
        return this._pool
    }

    set pool(value: string) {
        this._pool = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            account: this.account,
            balance: marshal.bigint.toJSON(this.balance),
            points: marshal.bigint.toJSON(this.points),
            pool: this.pool,
        }
    }
}
