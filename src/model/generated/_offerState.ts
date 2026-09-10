import assert from "assert"
import * as marshal from "./marshal"
import {ListingType} from "./_listingType"

export class OfferState {
    public readonly isTypeOf = 'OfferState'
    private _listingType!: ListingType
    private _counterOfferCount!: number
    private _amountFilled!: bigint
    private _amountRemaining!: bigint
    private _isExpired!: boolean | undefined | null

    constructor(props?: Partial<Omit<OfferState, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._listingType = marshal.enumFromJson(json.listingType, ListingType)
            this._counterOfferCount = marshal.int.fromJSON(json.counterOfferCount)
            this._amountFilled = marshal.bigint.fromJSON(json.amountFilled)
            this._amountRemaining = marshal.bigint.fromJSON(json.amountRemaining)
            this._isExpired = json.isExpired == null ? undefined : marshal.boolean.fromJSON(json.isExpired)
        }
    }

    get listingType(): ListingType {
        assert(this._listingType != null, 'uninitialized access')
        return this._listingType
    }

    set listingType(value: ListingType) {
        this._listingType = value
    }

    get counterOfferCount(): number {
        assert(this._counterOfferCount != null, 'uninitialized access')
        return this._counterOfferCount
    }

    set counterOfferCount(value: number) {
        this._counterOfferCount = value
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

    get isExpired(): boolean | undefined | null {
        return this._isExpired
    }

    set isExpired(value: boolean | undefined | null) {
        this._isExpired = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            listingType: this.listingType,
            counterOfferCount: this.counterOfferCount,
            amountFilled: marshal.bigint.toJSON(this.amountFilled),
            amountRemaining: marshal.bigint.toJSON(this.amountRemaining),
            isExpired: this.isExpired,
        }
    }
}
