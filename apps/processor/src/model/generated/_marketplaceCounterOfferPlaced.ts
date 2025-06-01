import assert from "assert"
import * as marshal from "./marshal"
import {Listing} from "./listing.model"
import {Account} from "./account.model"

export class MarketplaceCounterOfferPlaced {
    public readonly isTypeOf = 'MarketplaceCounterOfferPlaced'
    private _listing!: string
    private _accountId!: string
    private _buyerPrice!: bigint | undefined | null
    private _sellerPrice!: bigint
    private _depositAmount!: bigint

    constructor(props?: Partial<Omit<MarketplaceCounterOfferPlaced, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._listing = marshal.string.fromJSON(json.listing)
            this._accountId = marshal.string.fromJSON(json.accountId)
            this._buyerPrice = json.buyerPrice == null ? undefined : marshal.bigint.fromJSON(json.buyerPrice)
            this._sellerPrice = marshal.bigint.fromJSON(json.sellerPrice)
            this._depositAmount = marshal.bigint.fromJSON(json.depositAmount)
        }
    }

    get listing(): string {
        assert(this._listing != null, 'uninitialized access')
        return this._listing
    }

    set listing(value: string) {
        this._listing = value
    }

    get accountId(): string {
        assert(this._accountId != null, 'uninitialized access')
        return this._accountId
    }

    set accountId(value: string) {
        this._accountId = value
    }

    get buyerPrice(): bigint | undefined | null {
        return this._buyerPrice
    }

    set buyerPrice(value: bigint | undefined | null) {
        this._buyerPrice = value
    }

    get sellerPrice(): bigint {
        assert(this._sellerPrice != null, 'uninitialized access')
        return this._sellerPrice
    }

    set sellerPrice(value: bigint) {
        this._sellerPrice = value
    }

    get depositAmount(): bigint {
        assert(this._depositAmount != null, 'uninitialized access')
        return this._depositAmount
    }

    set depositAmount(value: bigint) {
        this._depositAmount = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            listing: this.listing,
            accountId: this.accountId,
            buyerPrice: this.buyerPrice == null ? undefined : marshal.bigint.toJSON(this.buyerPrice),
            sellerPrice: marshal.bigint.toJSON(this.sellerPrice),
            depositAmount: marshal.bigint.toJSON(this.depositAmount),
        }
    }
}
