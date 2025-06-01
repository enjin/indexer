import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"

export class FuelTankCreated {
    public readonly isTypeOf = 'FuelTankCreated'
    private _tank!: string
    private _name!: string
    private _owner!: string

    constructor(props?: Partial<Omit<FuelTankCreated, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._tank = marshal.string.fromJSON(json.tank)
            this._name = marshal.string.fromJSON(json.name)
            this._owner = marshal.string.fromJSON(json.owner)
        }
    }

    get tank(): string {
        assert(this._tank != null, 'uninitialized access')
        return this._tank
    }

    set tank(value: string) {
        this._tank = value
    }

    get name(): string {
        assert(this._name != null, 'uninitialized access')
        return this._name
    }

    set name(value: string) {
        this._name = value
    }

    get owner(): string {
        assert(this._owner != null, 'uninitialized access')
        return this._owner
    }

    set owner(value: string) {
        this._owner = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            tank: this.tank,
            name: this.name,
            owner: this.owner,
        }
    }
}
