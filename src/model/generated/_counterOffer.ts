import assert from "assert"
import * as marshal from "./marshal"

export class CounterOffer {
    private _accountId!: string
    private _price!: bigint

    constructor(props?: Partial<Omit<CounterOffer, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._accountId = marshal.string.fromJSON(json.accountId)
            this._price = marshal.bigint.fromJSON(json.price)
        }
    }

    get accountId(): string {
        assert(this._accountId != null, 'uninitialized access')
        return this._accountId
    }

    set accountId(value: string) {
        this._accountId = value
    }

    get price(): bigint {
        assert(this._price != null, 'uninitialized access')
        return this._price
    }

    set price(value: bigint) {
        this._price = value
    }

    toJSON(): object {
        return {
            accountId: this.accountId,
            price: marshal.bigint.toJSON(this.price),
        }
    }
}
