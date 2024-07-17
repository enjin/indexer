import assert from "assert"
import * as marshal from "./marshal"
import {ListingType} from "./_listingType"

export class OfferData {
    public readonly isTypeOf = 'OfferData'
    private _listingType!: ListingType
    private _expiration!: number

    constructor(props?: Partial<Omit<OfferData, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._listingType = marshal.enumFromJson(json.listingType, ListingType)
            this._expiration = marshal.int.fromJSON(json.expiration)
        }
    }

    get listingType(): ListingType {
        assert(this._listingType != null, 'uninitialized access')
        return this._listingType
    }

    set listingType(value: ListingType) {
        this._listingType = value
    }

    get expiration(): number {
        assert(this._expiration != null, 'uninitialized access')
        return this._expiration
    }

    set expiration(value: number) {
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
