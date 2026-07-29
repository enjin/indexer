import assert from "assert"
import * as marshal from "./marshal"

export class FuelTankDispatchFailed {
    public readonly isTypeOf = 'FuelTankDispatchFailed'
    private _error!: string | undefined | null

    constructor(props?: Partial<Omit<FuelTankDispatchFailed, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._error = json.error == null ? undefined : marshal.string.fromJSON(json.error)
        }
    }

    get error(): string | undefined | null {
        return this._error
    }

    set error(value: string | undefined | null) {
        this._error = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            error: this.error,
        }
    }
}
