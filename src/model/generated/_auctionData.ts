import assert from "assert"
import * as marshal from "./marshal"
import {ListingType} from "./_listingType"

export class AuctionData {
    public readonly isTypeOf = 'AuctionData'
    private _listingType!: ListingType
    private _startHeight!: number
    private _endHeight!: number

    constructor(props?: Partial<Omit<AuctionData, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._listingType = marshal.enumFromJson(json.listingType, ListingType)
            this._startHeight = marshal.int.fromJSON(json.startHeight)
            this._endHeight = marshal.int.fromJSON(json.endHeight)
        }
    }

    get listingType(): ListingType {
        assert(this._listingType != null, 'uninitialized access')
        return this._listingType
    }

    set listingType(value: ListingType) {
        this._listingType = value
    }

    get startHeight(): number {
        assert(this._startHeight != null, 'uninitialized access')
        return this._startHeight
    }

    set startHeight(value: number) {
        this._startHeight = value
    }

    get endHeight(): number {
        assert(this._endHeight != null, 'uninitialized access')
        return this._endHeight
    }

    set endHeight(value: number) {
        this._endHeight = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            listingType: this.listingType,
            startHeight: this.startHeight,
            endHeight: this.endHeight,
        }
    }
}
