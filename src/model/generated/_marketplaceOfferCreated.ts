import assert from "assert"
import * as marshal from "./marshal"
import {Listing} from "./listing.model"

export class MarketplaceOfferCreated {
    public readonly isTypeOf = 'MarketplaceOfferCreated'
    private _listing!: string

    constructor(props?: Partial<Omit<MarketplaceOfferCreated, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._listing = marshal.string.fromJSON(json.listing)
        }
    }

    get listing(): string {
        assert(this._listing != null, 'uninitialized access')
        return this._listing
    }

    set listing(value: string) {
        this._listing = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            listing: this.listing,
        }
    }
}
