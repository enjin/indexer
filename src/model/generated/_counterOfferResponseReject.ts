import assert from "assert"
import * as marshal from "./marshal"
import {Response} from "./_response"

export class CounterOfferResponseReject {
    public readonly isTypeOf = 'CounterOfferResponseReject'
    private _kind!: Response

    constructor(props?: Partial<Omit<CounterOfferResponseReject, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._kind = marshal.enumFromJson(json.kind, Response)
        }
    }

    get kind(): Response {
        assert(this._kind != null, 'uninitialized access')
        return this._kind
    }

    set kind(value: Response) {
        this._kind = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            kind: this.kind,
        }
    }
}
