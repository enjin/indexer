import assert from "assert"
import * as marshal from "./marshal"
import {ListingType} from "./_listingType"

export class FixedPriceData {
    public readonly isTypeOf = 'FixedPriceData'
    private _listingType!: ListingType
    private _notUsed!: number | undefined | null

    constructor(props?: Partial<Omit<FixedPriceData, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._listingType = marshal.enumFromJson(json.listingType, ListingType)
            this._notUsed = json.notUsed == null ? undefined : marshal.int.fromJSON(json.notUsed)
        }
    }

    get listingType(): ListingType {
        assert(this._listingType != null, 'uninitialized access')
        return this._listingType
    }

    set listingType(value: ListingType) {
        this._listingType = value
    }

    get notUsed(): number | undefined | null {
        return this._notUsed
    }

    set notUsed(value: number | undefined | null) {
        this._notUsed = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            listingType: this.listingType,
            notUsed: this.notUsed,
        }
    }
}
