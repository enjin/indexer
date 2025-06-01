import assert from "assert"
import * as marshal from "./marshal"
import {ListingType} from "./_listingType"

export class FixedPriceState {
    public readonly isTypeOf = 'FixedPriceState'
    private _listingType!: ListingType
    private _amountFilled!: bigint

    constructor(props?: Partial<Omit<FixedPriceState, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._listingType = marshal.enumFromJson(json.listingType, ListingType)
            this._amountFilled = marshal.bigint.fromJSON(json.amountFilled)
        }
    }

    get listingType(): ListingType {
        assert(this._listingType != null, 'uninitialized access')
        return this._listingType
    }

    set listingType(value: ListingType) {
        this._listingType = value
    }

    get amountFilled(): bigint {
        assert(this._amountFilled != null, 'uninitialized access')
        return this._amountFilled
    }

    set amountFilled(value: bigint) {
        this._amountFilled = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            listingType: this.listingType,
            amountFilled: marshal.bigint.toJSON(this.amountFilled),
        }
    }
}
