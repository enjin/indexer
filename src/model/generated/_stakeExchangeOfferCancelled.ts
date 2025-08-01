import assert from "assert"
import * as marshal from "./marshal"
import {StakeExchangeOffer} from "./stakeExchangeOffer.model"
import {Account} from "./account.model"

export class StakeExchangeOfferCancelled {
    public readonly isTypeOf = 'StakeExchangeOfferCancelled'
    private _offer!: string
    private _offerId!: bigint
    private _total!: bigint
    private _account!: string | undefined | null

    constructor(props?: Partial<Omit<StakeExchangeOfferCancelled, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._offer = marshal.string.fromJSON(json.offer)
            this._offerId = marshal.bigint.fromJSON(json.offerId)
            this._total = marshal.bigint.fromJSON(json.total)
            this._account = json.account == null ? undefined : marshal.string.fromJSON(json.account)
        }
    }

    get offer(): string {
        assert(this._offer != null, 'uninitialized access')
        return this._offer
    }

    set offer(value: string) {
        this._offer = value
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

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            offer: this.offer,
            offerId: marshal.bigint.toJSON(this.offerId),
            total: marshal.bigint.toJSON(this.total),
            account: this.account,
        }
    }
}
