import assert from "assert"
import * as marshal from "./marshal"
import {Listing} from "./listing.model"

export class MarketplaceListingSettlementAbandoned {
    public readonly isTypeOf = 'MarketplaceListingSettlementAbandoned'
    private _listingId!: string
    private _listing!: string | undefined | null
    private _attempts!: number

    constructor(props?: Partial<Omit<MarketplaceListingSettlementAbandoned, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._listingId = marshal.string.fromJSON(json.listingId)
            this._listing = json.listing == null ? undefined : marshal.string.fromJSON(json.listing)
            this._attempts = marshal.int.fromJSON(json.attempts)
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

    get attempts(): number {
        assert(this._attempts != null, 'uninitialized access')
        return this._attempts
    }

    set attempts(value: number) {
        this._attempts = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            listingId: this.listingId,
            listing: this.listing,
            attempts: this.attempts,
        }
    }
}
