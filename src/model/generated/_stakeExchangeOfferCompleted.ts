import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"
import {StakeExchangeTokenFilter} from "./stakeExchangeTokenFilter.model"

export class StakeExchangeOfferCompleted {
    public readonly isTypeOf = 'StakeExchangeOfferCompleted'
    private _offerId!: bigint
    private _account!: string
    private _tokenFilter!: string | undefined | null

    constructor(props?: Partial<Omit<StakeExchangeOfferCompleted, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._offerId = marshal.bigint.fromJSON(json.offerId)
            this._account = marshal.string.fromJSON(json.account)
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

    get account(): string {
        assert(this._account != null, 'uninitialized access')
        return this._account
    }

    set account(value: string) {
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
            account: this.account,
            tokenFilter: this.tokenFilter,
        }
    }
}
