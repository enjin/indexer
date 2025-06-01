import assert from "assert"
import * as marshal from "./marshal"
import {CounterOfferResponseType} from "./_counterOfferResponseType"

export class CounterOfferResponseCounter {
    public readonly isTypeOf = 'CounterOfferResponseCounter'
    private _kind!: CounterOfferResponseType
    private _value!: bigint

    constructor(props?: Partial<Omit<CounterOfferResponseCounter, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._kind = marshal.enumFromJson(json.kind, CounterOfferResponseType)
            this._value = marshal.bigint.fromJSON(json.value)
        }
    }

    get kind(): CounterOfferResponseType {
        assert(this._kind != null, 'uninitialized access')
        return this._kind
    }

    set kind(value: CounterOfferResponseType) {
        this._kind = value
    }

    get value(): bigint {
        assert(this._value != null, 'uninitialized access')
        return this._value
    }

    set value(value: bigint) {
        this._value = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            kind: this.kind,
            value: marshal.bigint.toJSON(this.value),
        }
    }
}
