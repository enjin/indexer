import assert from "assert"
import * as marshal from "./marshal"

export class PermittedCalls {
    private _value!: (string)[]

    constructor(props?: Partial<Omit<PermittedCalls, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._value = marshal.fromList(json.value, val => marshal.string.fromJSON(val))
        }
    }

    get value(): (string)[] {
        assert(this._value != null, 'uninitialized access')
        return this._value
    }

    set value(value: (string)[]) {
        this._value = value
    }

    toJSON(): object {
        return {
            value: this.value,
        }
    }
}
