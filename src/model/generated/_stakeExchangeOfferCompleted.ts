import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"
import {StakeExchangeTokenFilter} from "./stakeExchangeTokenFilter.model"
import {PoolState} from "./_poolState"

export class StakeExchangeOfferCompleted {
    public readonly isTypeOf = 'StakeExchangeOfferCompleted'
    private _offerId!: bigint
    private _account!: string
    private _tokenFilter!: string | undefined | null
    private _amount!: bigint
    private _state!: PoolState

    constructor(props?: Partial<Omit<StakeExchangeOfferCompleted, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._offerId = marshal.bigint.fromJSON(json.offerId)
            this._account = marshal.string.fromJSON(json.account)
            this._tokenFilter = json.tokenFilter == null ? undefined : marshal.string.fromJSON(json.tokenFilter)
            this._amount = marshal.bigint.fromJSON(json.amount)
            this._state = marshal.enumFromJson(json.state, PoolState)
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

    get amount(): bigint {
        assert(this._amount != null, 'uninitialized access')
        return this._amount
    }

    set amount(value: bigint) {
        this._amount = value
    }

    get state(): PoolState {
        assert(this._state != null, 'uninitialized access')
        return this._state
    }

    set state(value: PoolState) {
        this._state = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            offerId: marshal.bigint.toJSON(this.offerId),
            account: this.account,
            tokenFilter: this.tokenFilter,
            amount: marshal.bigint.toJSON(this.amount),
            state: this.state,
        }
    }
}
