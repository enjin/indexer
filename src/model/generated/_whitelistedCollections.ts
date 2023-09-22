import assert from "assert"
import * as marshal from "./marshal"

export class WhitelistedCollections {
    private _value!: (bigint)[]

    constructor(props?: Partial<Omit<WhitelistedCollections, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._value = marshal.fromList(json.value, val => marshal.bigint.fromJSON(val))
        }
    }

    get value(): (bigint)[] {
        assert(this._value != null, 'uninitialized access')
        return this._value
    }

    set value(value: (bigint)[]) {
        this._value = value
    }

    toJSON(): object {
        return {
            value: this.value.map((val: any) => marshal.bigint.toJSON(val)),
        }
    }
}
