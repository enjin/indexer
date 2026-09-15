import assert from "assert"
import * as marshal from "./marshal"

export class MintRateLimit {
    private _period!: bigint
    private _max!: bigint

    constructor(props?: Partial<Omit<MintRateLimit, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._period = marshal.bigint.fromJSON(json.period)
            this._max = marshal.bigint.fromJSON(json.max)
        }
    }

    get period(): bigint {
        assert(this._period != null, 'uninitialized access')
        return this._period
    }

    set period(value: bigint) {
        this._period = value
    }

    get max(): bigint {
        assert(this._max != null, 'uninitialized access')
        return this._max
    }

    set max(value: bigint) {
        this._max = value
    }

    toJSON(): object {
        return {
            period: marshal.bigint.toJSON(this.period),
            max: marshal.bigint.toJSON(this.max),
        }
    }
}
