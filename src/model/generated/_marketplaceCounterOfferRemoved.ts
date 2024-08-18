import assert from "assert"
import * as marshal from "./marshal"
import {Listing} from "./listing.model"
import {Account} from "./account.model"

export class MarketplaceCounterOfferRemoved {
    public readonly isTypeOf = 'MarketplaceCounterOfferRemoved'
    private _listing!: string
    private _creator!: string

    constructor(props?: Partial<Omit<MarketplaceCounterOfferRemoved, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._listing = marshal.string.fromJSON(json.listing)
            this._creator = marshal.string.fromJSON(json.creator)
        }
    }

    get listing(): string {
        assert(this._listing != null, 'uninitialized access')
        return this._listing
    }

    set listing(value: string) {
        this._listing = value
    }

    get creator(): string {
        assert(this._creator != null, 'uninitialized access')
        return this._creator
    }

    set creator(value: string) {
        this._creator = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            listing: this.listing,
            creator: this.creator,
        }
    }
}
