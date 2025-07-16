import assert from "assert"
import * as marshal from "./marshal"
import {StakeExchangeTokenFilter} from "./stakeExchangeTokenFilter.model"

export class StakeExchangeOfferCompleted {
    public readonly isTypeOf = 'StakeExchangeOfferCompleted'
    private _offerId!: bigint
    private _tokenFilter!: string | undefined | null

    constructor(props?: Partial<Omit<StakeExchangeOfferCompleted, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._offerId = marshal.bigint.fromJSON(json.offerId)
            this._tokenFilter = json.tokenFilter == null ? undefined : marshal.string.fromJSON(json.tokenFilter)
        }
    }

    get offerId(): bigint {
        assert(this._offerId != null, 'uninitialized access')
        return this._offerId
    }

    set offerId(value: bigint) {
        this._offerId = value
    }

    get tokenFilter(): string | undefined | null {
        return this._tokenFilter
    }

    set tokenFilter(value: string | undefined | null) {
        this._tokenFilter = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            offerId: marshal.bigint.toJSON(this.offerId),
            tokenFilter: this.tokenFilter,
        }
    }
}
