import assert from "assert"
import * as marshal from "./marshal"
import {Listing} from "./listing.model"
import {Account} from "./account.model"

export class MarketplaceOfferSettled {
    public readonly isTypeOf = 'MarketplaceOfferSettled'
    private _listing!: string
    private _buyer!: string
    private _amount!: bigint | undefined | null
    private _price!: bigint

    constructor(props?: Partial<Omit<MarketplaceOfferSettled, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._listing = marshal.string.fromJSON(json.listing)
            this._buyer = marshal.string.fromJSON(json.buyer)
            this._amount = json.amount == null ? undefined : marshal.bigint.fromJSON(json.amount)
            this._price = marshal.bigint.fromJSON(json.price)
        }
    }

    get listing(): string {
        assert(this._listing != null, 'uninitialized access')
        return this._listing
    }

    set listing(value: string) {
        this._listing = value
    }

    get buyer(): string {
        assert(this._buyer != null, 'uninitialized access')
        return this._buyer
    }

    set buyer(value: string) {
        this._buyer = value
    }

    get amount(): bigint | undefined | null {
        return this._amount
    }

    set amount(value: bigint | undefined | null) {
        this._amount = value
    }

    get price(): bigint {
        assert(this._price != null, 'uninitialized access')
        return this._price
    }

    set price(value: bigint) {
        this._price = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            listing: this.listing,
            buyer: this.buyer,
            amount: this.amount == null ? undefined : marshal.bigint.toJSON(this.amount),
            price: marshal.bigint.toJSON(this.price),
        }
    }
}
