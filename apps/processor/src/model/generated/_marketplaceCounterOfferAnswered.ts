import assert from "assert"
import * as marshal from "./marshal"
import {Listing} from "./listing.model"
import {Account} from "./account.model"
import {CounterOfferResponse, fromJsonCounterOfferResponse} from "./_counterOfferResponse"

export class MarketplaceCounterOfferAnswered {
    public readonly isTypeOf = 'MarketplaceCounterOfferAnswered'
    private _listing!: string
    private _creator!: string
    private _response!: CounterOfferResponse

    constructor(props?: Partial<Omit<MarketplaceCounterOfferAnswered, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._listing = marshal.string.fromJSON(json.listing)
            this._creator = marshal.string.fromJSON(json.creator)
            this._response = fromJsonCounterOfferResponse(json.response)
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

    get response(): CounterOfferResponse {
        assert(this._response != null, 'uninitialized access')
        return this._response
    }

    set response(value: CounterOfferResponse) {
        this._response = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            listing: this.listing,
            creator: this.creator,
            response: this.response.toJSON(),
        }
    }
}
