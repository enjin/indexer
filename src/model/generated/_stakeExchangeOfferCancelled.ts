import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"
import {StakeExchangeTokenFilter} from "./stakeExchangeTokenFilter.model"

export class StakeExchangeOfferCancelled {
    public readonly isTypeOf = 'StakeExchangeOfferCancelled'
    private _offerId!: bigint
    private _total!: bigint
    private _account!: string | undefined | null
    private _tokenFilter!: string | undefined | null

    constructor(props?: Partial<Omit<StakeExchangeOfferCancelled, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._offerId = marshal.bigint.fromJSON(json.offerId)
            this._total = marshal.bigint.fromJSON(json.total)
            this._account = json.account == null ? undefined : marshal.string.fromJSON(json.account)
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

    get total(): bigint {
        assert(this._total != null, 'uninitialized access')
        return this._total
    }

    set total(value: bigint) {
        this._total = value
    }

    get account(): string | undefined | null {
        return this._account
    }

    set account(value: string | undefined | null) {
        this._account = value
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
            total: marshal.bigint.toJSON(this.total),
            account: this.account,
            tokenFilter: this.tokenFilter,
        }
    }
}
