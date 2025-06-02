import assert from "assert"
import * as marshal from "./marshal"

export class AccountTokenEventAttribute {
    private _id!: string
    private _key!: string
    private _value!: string

    constructor(props?: Partial<Omit<AccountTokenEventAttribute, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._id = marshal.string.fromJSON(json.id)
            this._key = marshal.string.fromJSON(json.key)
            this._value = marshal.string.fromJSON(json.value)
        }
    }

    get id(): string {
        assert(this._id != null, 'uninitialized access')
        return this._id
    }

    set id(value: string) {
        this._id = value
    }

    get key(): string {
        assert(this._key != null, 'uninitialized access')
        return this._key
    }

    set key(value: string) {
        this._key = value
    }

    get value(): string {
        assert(this._value != null, 'uninitialized access')
        return this._value
    }

    set value(value: string) {
        this._value = value
    }

    toJSON(): object {
        return {
            id: this.id,
            key: this.key,
            value: this.value,
        }
    }
}
