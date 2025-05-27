import assert from "assert"
import * as marshal from "./marshal"
import {MarketplaceListingData} from "./_marketplaceListingData"

export class OfferData {
    public readonly isTypeOf = 'OfferData'
    private _listingType!: MarketplaceListingData
    private _expiration!: number | undefined | null

    constructor(props?: Partial<Omit<OfferData, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._listingType = marshal.enumFromJson(json.listingType, MarketplaceListingData)
            this._expiration = json.expiration == null ? undefined : marshal.int.fromJSON(json.expiration)
        }
    }

    get listingType(): MarketplaceListingData {
        assert(this._listingType != null, 'uninitialized access')
        return this._listingType
    }

    set listingType(value: MarketplaceListingData) {
        this._listingType = value
    }

    get expiration(): number | undefined | null {
        return this._expiration
    }

    set expiration(value: number | undefined | null) {
        this._expiration = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            listingType: this.listingType,
            expiration: this.expiration,
        }
    }
}
