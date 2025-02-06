import assert from "assert"
import * as marshal from "./marshal"
import {CommissionChangeRate} from "./_commissionChangeRate"

export class Commission {
    private _current!: number | undefined | null
    private _max!: number | undefined | null
    private _changeRate!: CommissionChangeRate | undefined | null
    private _throttleFrom!: number | undefined | null

    constructor(props?: Partial<Omit<Commission, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._current = json.current == null ? undefined : marshal.float.fromJSON(json.current)
            this._max = json.max == null ? undefined : marshal.float.fromJSON(json.max)
            this._changeRate = json.changeRate == null ? undefined : new CommissionChangeRate(undefined, json.changeRate)
            this._throttleFrom = json.throttleFrom == null ? undefined : marshal.int.fromJSON(json.throttleFrom)
        }
    }

    get current(): number | undefined | null {
        return this._current
    }

    set current(value: number | undefined | null) {
        this._current = value
    }

    get max(): number | undefined | null {
        return this._max
    }

    set max(value: number | undefined | null) {
        this._max = value
    }

    get changeRate(): CommissionChangeRate | undefined | null {
        return this._changeRate
    }

    set changeRate(value: CommissionChangeRate | undefined | null) {
        this._changeRate = value
    }

    get throttleFrom(): number | undefined | null {
        return this._throttleFrom
    }

    set throttleFrom(value: number | undefined | null) {
        this._throttleFrom = value
    }

    toJSON(): object {
        return {
            current: this.current,
            max: this.max,
            changeRate: this.changeRate == null ? undefined : this.changeRate.toJSON(),
            throttleFrom: this.throttleFrom,
        }
    }
}
