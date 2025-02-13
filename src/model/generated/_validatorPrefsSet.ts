import assert from "assert"
import * as marshal from "./marshal"

export class ValidatorPrefsSet {
    public readonly isTypeOf = 'ValidatorPrefsSet'
    private _validator!: string

    constructor(props?: Partial<Omit<ValidatorPrefsSet, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._validator = marshal.string.fromJSON(json.validator)
        }
    }

    get validator(): string {
        assert(this._validator != null, 'uninitialized access')
        return this._validator
    }

    set validator(value: string) {
        this._validator = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            validator: this.validator,
        }
    }
}
