import assert from "assert"
import * as marshal from "./marshal"

export class CommissionChangeRate {
    private _maxDelta!: number | undefined | null
    private _minDelay!: number | undefined | null

    constructor(props?: Partial<Omit<CommissionChangeRate, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._maxDelta = json.maxDelta == null ? undefined : marshal.float.fromJSON(json.maxDelta)
            this._minDelay = json.minDelay == null ? undefined : marshal.int.fromJSON(json.minDelay)
        }
    }

    get maxDelta(): number | undefined | null {
        return this._maxDelta
    }

    set maxDelta(value: number | undefined | null) {
        this._maxDelta = value
    }

    get minDelay(): number | undefined | null {
        return this._minDelay
    }

    set minDelay(value: number | undefined | null) {
        this._minDelay = value
    }

    toJSON(): object {
        return {
            maxDelta: this.maxDelta,
            minDelay: this.minDelay,
        }
    }
}
