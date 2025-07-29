import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"
import {StakeExchangeTokenFilter} from "./stakeExchangeTokenFilter.model"

export class StakeExchangeOfferCreated {
    public readonly isTypeOf = 'StakeExchangeOfferCreated'
    private _offerId!: bigint
    private _account!: string
    private _total!: bigint
    private _rate!: bigint
    private _minAverageCommission!: number
    private _minAverageRewardRate!: bigint
    private _tokenFilter!: string | undefined | null

    constructor(props?: Partial<Omit<StakeExchangeOfferCreated, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._offerId = marshal.bigint.fromJSON(json.offerId)
            this._account = marshal.string.fromJSON(json.account)
            this._total = marshal.bigint.fromJSON(json.total)
            this._rate = marshal.bigint.fromJSON(json.rate)
            this._minAverageCommission = marshal.int.fromJSON(json.minAverageCommission)
            this._minAverageRewardRate = marshal.bigint.fromJSON(json.minAverageRewardRate)
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

    get total(): bigint {
        assert(this._total != null, 'uninitialized access')
        return this._total
    }

    set total(value: bigint) {
        this._total = value
    }

    get rate(): bigint {
        assert(this._rate != null, 'uninitialized access')
        return this._rate
    }

    set rate(value: bigint) {
        this._rate = value
    }

    get minAverageCommission(): number {
        assert(this._minAverageCommission != null, 'uninitialized access')
        return this._minAverageCommission
    }

    set minAverageCommission(value: number) {
        this._minAverageCommission = value
    }

    get minAverageRewardRate(): bigint {
        assert(this._minAverageRewardRate != null, 'uninitialized access')
        return this._minAverageRewardRate
    }

    set minAverageRewardRate(value: bigint) {
        this._minAverageRewardRate = value
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
            total: marshal.bigint.toJSON(this.total),
            rate: marshal.bigint.toJSON(this.rate),
            minAverageCommission: this.minAverageCommission,
            minAverageRewardRate: marshal.bigint.toJSON(this.minAverageRewardRate),
            tokenFilter: this.tokenFilter,
        }
    }
}
