import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"

export class StakeExchangeBuyOrderCompleted {
    public readonly isTypeOf = 'StakeExchangeBuyOrderCompleted'
    private _offerId!: bigint
    private _account!: string
    private _tokenId!: bigint
    private _amount!: bigint
    private _rate!: bigint
    private _points!: bigint

    constructor(props?: Partial<Omit<StakeExchangeBuyOrderCompleted, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._offerId = marshal.bigint.fromJSON(json.offerId)
            this._account = marshal.string.fromJSON(json.account)
            this._tokenId = marshal.bigint.fromJSON(json.tokenId)
            this._amount = marshal.bigint.fromJSON(json.amount)
            this._rate = marshal.bigint.fromJSON(json.rate)
            this._points = marshal.bigint.fromJSON(json.points)
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

    get tokenId(): bigint {
        assert(this._tokenId != null, 'uninitialized access')
        return this._tokenId
    }

    set tokenId(value: bigint) {
        this._tokenId = value
    }

    get amount(): bigint {
        assert(this._amount != null, 'uninitialized access')
        return this._amount
    }

    set amount(value: bigint) {
        this._amount = value
    }

    get rate(): bigint {
        assert(this._rate != null, 'uninitialized access')
        return this._rate
    }

    set rate(value: bigint) {
        this._rate = value
    }

    get points(): bigint {
        assert(this._points != null, 'uninitialized access')
        return this._points
    }

    set points(value: bigint) {
        this._points = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            offerId: marshal.bigint.toJSON(this.offerId),
            account: this.account,
            tokenId: marshal.bigint.toJSON(this.tokenId),
            amount: marshal.bigint.toJSON(this.amount),
            rate: marshal.bigint.toJSON(this.rate),
            points: marshal.bigint.toJSON(this.points),
        }
    }
}
