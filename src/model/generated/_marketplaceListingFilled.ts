import assert from "assert"
import * as marshal from "./marshal"
import {Listing} from "./listing.model"
import {Account} from "./account.model"

export class MarketplaceListingFilled {
    public readonly isTypeOf = 'MarketplaceListingFilled'
    private _listing!: string
    private _buyer!: string
    private _amountFilled!: bigint
    private _amountRemaining!: bigint
    private _protocolFee!: bigint | undefined | null
    private _price!: bigint
    private _royalty!: bigint | undefined | null

    constructor(props?: Partial<Omit<MarketplaceListingFilled, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._listing = marshal.string.fromJSON(json.listing)
            this._buyer = marshal.string.fromJSON(json.buyer)
            this._amountFilled = marshal.bigint.fromJSON(json.amountFilled)
            this._amountRemaining = marshal.bigint.fromJSON(json.amountRemaining)
            this._protocolFee = json.protocolFee == null ? undefined : marshal.bigint.fromJSON(json.protocolFee)
            this._price = marshal.bigint.fromJSON(json.price)
            this._royalty = json.royalty == null ? undefined : marshal.bigint.fromJSON(json.royalty)
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

    get amountFilled(): bigint {
        assert(this._amountFilled != null, 'uninitialized access')
        return this._amountFilled
    }

    set amountFilled(value: bigint) {
        this._amountFilled = value
    }

    get amountRemaining(): bigint {
        assert(this._amountRemaining != null, 'uninitialized access')
        return this._amountRemaining
    }

    set amountRemaining(value: bigint) {
        this._amountRemaining = value
    }

    get protocolFee(): bigint | undefined | null {
        return this._protocolFee
    }

    set protocolFee(value: bigint | undefined | null) {
        this._protocolFee = value
    }

    get price(): bigint {
        assert(this._price != null, 'uninitialized access')
        return this._price
    }

    set price(value: bigint) {
        this._price = value
    }

    get royalty(): bigint | undefined | null {
        return this._royalty
    }

    set royalty(value: bigint | undefined | null) {
        this._royalty = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            listing: this.listing,
            buyer: this.buyer,
            amountFilled: marshal.bigint.toJSON(this.amountFilled),
            amountRemaining: marshal.bigint.toJSON(this.amountRemaining),
            protocolFee: this.protocolFee == null ? undefined : marshal.bigint.toJSON(this.protocolFee),
            price: marshal.bigint.toJSON(this.price),
            royalty: this.royalty == null ? undefined : marshal.bigint.toJSON(this.royalty),
        }
    }
}
