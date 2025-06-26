import assert from "assert"
import * as marshal from "./marshal"
import {ListingType} from "./_listingType"
import {Bid} from "./bid.model"

export class AuctionState {
    public readonly isTypeOf = 'AuctionState'
    private _listingType!: ListingType
    private _highBid!: string | undefined | null
    private _isExpired!: boolean | undefined | null

    constructor(props?: Partial<Omit<AuctionState, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._listingType = marshal.enumFromJson(json.listingType, ListingType)
            this._highBid = json.highBid == null ? undefined : marshal.string.fromJSON(json.highBid)
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

    get highBid(): string | undefined | null {
        return this._highBid
    }

    set highBid(value: string | undefined | null) {
        this._highBid = value
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
            highBid: this.highBid,
            isExpired: this.isExpired,
        }
    }
}
