import assert from "assert"
import * as marshal from "./marshal"
import {ListingType} from "./_listingType"
import {CounterOffer} from "./_counterOffer"

export class OfferState {
    public readonly isTypeOf = 'OfferState'
    private _listingType!: ListingType
    private _counter!: CounterOffer | undefined | null

    constructor(props?: Partial<Omit<OfferState, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._listingType = marshal.enumFromJson(json.listingType, ListingType)
            this._counter = json.counter == null ? undefined : new CounterOffer(undefined, json.counter)
        }
    }

    get listingType(): ListingType {
        assert(this._listingType != null, 'uninitialized access')
        return this._listingType
    }

    set listingType(value: ListingType) {
        this._listingType = value
    }

    get counter(): CounterOffer | undefined | null {
        return this._counter
    }

    set counter(value: CounterOffer | undefined | null) {
        this._counter = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            listingType: this.listingType,
            counter: this.counter == null ? undefined : this.counter.toJSON(),
        }
    }
}
