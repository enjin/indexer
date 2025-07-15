import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"

export class StakeExchangeOfferCancelled {
    public readonly isTypeOf = 'StakeExchangeOfferCancelled'
    private _offerId!: bigint
    private _total!: bigint
    private _pool!: string
    private _account!: string

    constructor(props?: Partial<Omit<StakeExchangeOfferCancelled, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._offerId = marshal.bigint.fromJSON(json.offerId)
            this._total = marshal.bigint.fromJSON(json.total)
            this._pool = marshal.string.fromJSON(json.pool)
            this._account = marshal.string.fromJSON(json.account)
        }
    }

    get offerId(): bigint {
        assert(this._offerId != null, 'uninitialized access')
        return this._offerId
    }

    set offerId(value: bigint) {
        this._offerId = value
    }

    get total(): bigint {
        assert(this._total != null, 'uninitialized access')
        return this._total
    }

    set total(value: bigint) {
        this._total = value
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
            offerId: marshal.bigint.toJSON(this.offerId),
            total: marshal.bigint.toJSON(this.total),
            pool: this.pool,
            account: this.account,
        }
    }
}
