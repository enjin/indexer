import assert from "assert"
import * as marshal from "./marshal"
import {Listing} from "./listing.model"

export class MarketplaceListingNotIndexed {
    public readonly isTypeOf = 'MarketplaceListingNotIndexed'
    private _listingId!: string
    private _listing!: string | undefined | null

    constructor(props?: Partial<Omit<MarketplaceListingNotIndexed, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._listingId = marshal.string.fromJSON(json.listingId)
            this._listing = json.listing == null ? undefined : marshal.string.fromJSON(json.listing)
        }
    }

    get listingId(): string {
        assert(this._listingId != null, 'uninitialized access')
        return this._listingId
    }

    set listingId(value: string) {
        this._listingId = value
    }

    get listing(): string | undefined | null {
        return this._listing
    }

    set listing(value: string | undefined | null) {
        this._listing = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            listingId: this.listingId,
            listing: this.listing,
        }
    }
}
