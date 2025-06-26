import assert from "assert"
import * as marshal from "./marshal"
import {ListingType} from "./_listingType"

export class OfferState {
    public readonly isTypeOf = 'OfferState'
    private _listingType!: ListingType
    private _counterOfferCount!: number
    private _isExpired!: boolean | undefined | null

    constructor(props?: Partial<Omit<OfferState, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._listingType = marshal.enumFromJson(json.listingType, ListingType)
            this._counterOfferCount = marshal.int.fromJSON(json.counterOfferCount)
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
            isExpired: this.isExpired,
        }
    }
}
