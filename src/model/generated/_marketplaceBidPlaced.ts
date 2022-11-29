import assert from "assert"
import * as marshal from "./marshal"
import {Listing} from "./listing.model"
import {Bid} from "./bid.model"

export class MarketplaceBidPlaced {
    public readonly isTypeOf = 'MarketplaceBidPlaced'
    private _listing!: string
    private _bid!: string

    constructor(props?: Partial<Omit<MarketplaceBidPlaced, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._listing = marshal.string.fromJSON(json.listing)
            this._bid = marshal.string.fromJSON(json.bid)
        }
    }

    get listing(): string {
        assert(this._listing != null, 'uninitialized access')
        return this._listing
    }

    set listing(value: string) {
        this._listing = value
    }

    get bid(): string {
        assert(this._bid != null, 'uninitialized access')
        return this._bid
    }

    set bid(value: string) {
        this._bid = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            listing: this.listing,
            bid: this.bid,
        }
    }
}
