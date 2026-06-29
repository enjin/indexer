import assert from "assert"
import * as marshal from "./marshal"
import {Listing} from "./listing.model"

export class MarketplaceListingCancelled {
    public readonly isTypeOf = 'MarketplaceListingCancelled'
    private _listing!: string | undefined | null

    constructor(props?: Partial<Omit<MarketplaceListingCancelled, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._listing = json.listing == null ? undefined : marshal.string.fromJSON(json.listing)
        }
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
            listing: this.listing,
        }
    }
}
