import assert from "assert"
import * as marshal from "./marshal"
import {MarketplaceListingData} from "./_marketplaceListingData"

export class FixedPriceData {
    public readonly isTypeOf = 'FixedPriceData'
    private _listingType!: MarketplaceListingData

    constructor(props?: Partial<Omit<FixedPriceData, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._listingType = marshal.enumFromJson(json.listingType, MarketplaceListingData)
        }
    }

    get listingType(): MarketplaceListingData {
        assert(this._listingType != null, 'uninitialized access')
        return this._listingType
    }

    set listingType(value: MarketplaceListingData) {
        this._listingType = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            listingType: this.listingType,
        }
    }
}
