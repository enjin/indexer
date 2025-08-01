import assert from "assert"
import * as marshal from "./marshal"
import {StakeExchangeOffer} from "./stakeExchangeOffer.model"
import {Account} from "./account.model"

export class StakeExchangeOfferCompleted {
    public readonly isTypeOf = 'StakeExchangeOfferCompleted'
<<<<<<< HEAD
    private _offer!: string
=======
    private _offer!: string | undefined | null
>>>>>>> 29c42ffa (add pool relation sync)
    private _offerId!: bigint
    private _account!: string
    private _amount!: bigint

    constructor(props?: Partial<Omit<StakeExchangeOfferCompleted, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
<<<<<<< HEAD
            this._offer = marshal.string.fromJSON(json.offer)
=======
            this._offer = json.offer == null ? undefined : marshal.string.fromJSON(json.offer)
>>>>>>> 29c42ffa (add pool relation sync)
            this._offerId = marshal.bigint.fromJSON(json.offerId)
            this._account = marshal.string.fromJSON(json.account)
            this._amount = marshal.bigint.fromJSON(json.amount)
        }
    }

    get offer(): string | undefined | null {
        return this._offer
    }

    set offer(value: string | undefined | null) {
        this._offer = value
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

    get amount(): bigint {
        assert(this._amount != null, 'uninitialized access')
        return this._amount
    }

    set amount(value: bigint) {
        this._amount = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            offer: this.offer,
            offerId: marshal.bigint.toJSON(this.offerId),
            account: this.account,
            amount: marshal.bigint.toJSON(this.amount),
        }
    }
}
