import assert from "assert"
import * as marshal from "./marshal"

export class FuelTankDestroyed {
    public readonly isTypeOf = 'FuelTankDestroyed'
    private _tank!: string

    constructor(props?: Partial<Omit<FuelTankDestroyed, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._tank = marshal.string.fromJSON(json.tank)
        }
    }

    get tank(): string {
        assert(this._tank != null, 'uninitialized access')
        return this._tank
    }

    set tank(value: string) {
        this._tank = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            tank: this.tank,
        }
    }
}
