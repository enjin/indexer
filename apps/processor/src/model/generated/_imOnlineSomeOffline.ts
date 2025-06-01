import assert from "assert"
import * as marshal from "./marshal"

export class ImOnlineSomeOffline {
    public readonly isTypeOf = 'ImOnlineSomeOffline'
    private _validators!: (string | undefined | null)[]

    constructor(props?: Partial<Omit<ImOnlineSomeOffline, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._validators = marshal.fromList(json.validators, val => val == null ? undefined : marshal.string.fromJSON(val))
        }
    }

    get validators(): (string | undefined | null)[] {
        assert(this._validators != null, 'uninitialized access')
        return this._validators
    }

    set validators(value: (string | undefined | null)[]) {
        this._validators = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            validators: this.validators,
        }
    }
}
