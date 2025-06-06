import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"

export class StakeExchangeLiquidityWithdrawn {
    public readonly isTypeOf = 'StakeExchangeLiquidityWithdrawn'
    private _offerId!: bigint
    private _account!: string
    private _amount!: bigint

    constructor(props?: Partial<Omit<StakeExchangeLiquidityWithdrawn, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._offerId = marshal.bigint.fromJSON(json.offerId)
            this._account = marshal.string.fromJSON(json.account)
            this._amount = marshal.bigint.fromJSON(json.amount)
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
            offerId: marshal.bigint.toJSON(this.offerId),
            account: this.account,
            amount: marshal.bigint.toJSON(this.amount),
        }
    }
}
