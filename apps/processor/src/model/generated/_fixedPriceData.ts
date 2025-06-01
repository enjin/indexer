import assert from "assert"
import * as marshal from "./marshal"
import {ListingType} from "./_listingType"

export class FixedPriceData {
    public readonly isTypeOf = 'FixedPriceData'
    private _listingType!: ListingType

    constructor(props?: Partial<Omit<FixedPriceData, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._listingType = marshal.enumFromJson(json.listingType, ListingType)
        }
    }

    get listingType(): ListingType {
        assert(this._listingType != null, 'uninitialized access')
        return this._listingType
    }

    set listingType(value: ListingType) {
        this._listingType = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            listingType: this.listingType,
        }
    }
}
