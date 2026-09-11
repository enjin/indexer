import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"
import {MarketplaceOrderSide} from "./_marketplaceOrderSide"
import {Listing} from "./listing.model"

export class MarketplaceOrderMatched {
    public readonly isTypeOf = 'MarketplaceOrderMatched'
    private _taker!: string
    private _assetId!: string
    private _currencyId!: string
    private _side!: MarketplaceOrderSide
    private _amountMatched!: bigint
    private _ordersExamined!: number
    private _remainderListingId!: string | undefined | null
    private _remainderListing!: string | undefined | null
    private _unrestedAmount!: bigint

    constructor(props?: Partial<Omit<MarketplaceOrderMatched, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._taker = marshal.string.fromJSON(json.taker)
            this._assetId = marshal.string.fromJSON(json.assetId)
            this._currencyId = marshal.string.fromJSON(json.currencyId)
            this._side = marshal.enumFromJson(json.side, MarketplaceOrderSide)
            this._amountMatched = marshal.bigint.fromJSON(json.amountMatched)
            this._ordersExamined = marshal.int.fromJSON(json.ordersExamined)
            this._remainderListingId = json.remainderListingId == null ? undefined : marshal.string.fromJSON(json.remainderListingId)
            this._remainderListing = json.remainderListing == null ? undefined : marshal.string.fromJSON(json.remainderListing)
            this._unrestedAmount = marshal.bigint.fromJSON(json.unrestedAmount)
        }
    }

    get taker(): string {
        assert(this._taker != null, 'uninitialized access')
        return this._taker
    }

    set taker(value: string) {
        this._taker = value
    }

    get assetId(): string {
        assert(this._assetId != null, 'uninitialized access')
        return this._assetId
    }

    set assetId(value: string) {
        this._assetId = value
    }

    get currencyId(): string {
        assert(this._currencyId != null, 'uninitialized access')
        return this._currencyId
    }

    set currencyId(value: string) {
        this._currencyId = value
    }

    get side(): MarketplaceOrderSide {
        assert(this._side != null, 'uninitialized access')
        return this._side
    }

    set side(value: MarketplaceOrderSide) {
        this._side = value
    }

    get amountMatched(): bigint {
        assert(this._amountMatched != null, 'uninitialized access')
        return this._amountMatched
    }

    set amountMatched(value: bigint) {
        this._amountMatched = value
    }

    get ordersExamined(): number {
        assert(this._ordersExamined != null, 'uninitialized access')
        return this._ordersExamined
    }

    set ordersExamined(value: number) {
        this._ordersExamined = value
    }

    get remainderListingId(): string | undefined | null {
        return this._remainderListingId
    }

    set remainderListingId(value: string | undefined | null) {
        this._remainderListingId = value
    }

    get remainderListing(): string | undefined | null {
        return this._remainderListing
    }

    set remainderListing(value: string | undefined | null) {
        this._remainderListing = value
    }

    get unrestedAmount(): bigint {
        assert(this._unrestedAmount != null, 'uninitialized access')
        return this._unrestedAmount
    }

    set unrestedAmount(value: bigint) {
        this._unrestedAmount = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            taker: this.taker,
            assetId: this.assetId,
            currencyId: this.currencyId,
            side: this.side,
            amountMatched: marshal.bigint.toJSON(this.amountMatched),
            ordersExamined: this.ordersExamined,
            remainderListingId: this.remainderListingId,
            remainderListing: this.remainderListing,
            unrestedAmount: marshal.bigint.toJSON(this.unrestedAmount),
        }
    }
}
