import assert from "assert"
import * as marshal from "./marshal"

export class StakeExchangeOfferCancelled {
    public readonly isTypeOf = 'StakeExchangeOfferCancelled'
    private _offerId!: bigint

    constructor(props?: Partial<Omit<StakeExchangeOfferCancelled, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._offerId = marshal.bigint.fromJSON(json.offerId)
        }
    }

    get offerId(): bigint {
        assert(this._offerId != null, 'uninitialized access')
        return this._offerId
    }

    set offerId(value: bigint) {
        this._offerId = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            offerId: marshal.bigint.toJSON(this.offerId),
        }
    }
}
