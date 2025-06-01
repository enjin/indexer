import assert from "assert"
import * as marshal from "./marshal"
import {CounterOfferResponseType} from "./_counterOfferResponseType"

export class CounterOfferResponseAccept {
    public readonly isTypeOf = 'CounterOfferResponseAccept'
    private _kind!: CounterOfferResponseType

    constructor(props?: Partial<Omit<CounterOfferResponseAccept, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._kind = marshal.enumFromJson(json.kind, CounterOfferResponseType)
        }
    }

    get kind(): CounterOfferResponseType {
        assert(this._kind != null, 'uninitialized access')
        return this._kind
    }

    set kind(value: CounterOfferResponseType) {
        this._kind = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            kind: this.kind,
        }
    }
}
