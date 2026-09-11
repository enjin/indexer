import assert from "assert"
import * as marshal from "./marshal"

export class MintRateWindow {
    private _lastSlot!: bigint
    private _buckets!: (bigint)[]

    constructor(props?: Partial<Omit<MintRateWindow, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._lastSlot = marshal.bigint.fromJSON(json.lastSlot)
            this._buckets = marshal.fromList(json.buckets, val => marshal.bigint.fromJSON(val))
        }
    }

    get lastSlot(): bigint {
        assert(this._lastSlot != null, 'uninitialized access')
        return this._lastSlot
    }

    set lastSlot(value: bigint) {
        this._lastSlot = value
    }

    get buckets(): (bigint)[] {
        assert(this._buckets != null, 'uninitialized access')
        return this._buckets
    }

    set buckets(value: (bigint)[]) {
        this._buckets = value
    }

    toJSON(): object {
        return {
            lastSlot: marshal.bigint.toJSON(this.lastSlot),
            buckets: this.buckets.map((val: any) => marshal.bigint.toJSON(val)),
        }
    }
}
