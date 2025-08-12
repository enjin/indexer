import assert from "assert"
import * as marshal from "./marshal"

export class MultiTokensTokenGroupAttributeSet {
    public readonly isTypeOf = 'MultiTokensTokenGroupAttributeSet'
    private _tokenGroupId!: bigint
    private _key!: string
    private _value!: string

    constructor(props?: Partial<Omit<MultiTokensTokenGroupAttributeSet, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._tokenGroupId = marshal.bigint.fromJSON(json.tokenGroupId)
            this._key = marshal.string.fromJSON(json.key)
            this._value = marshal.string.fromJSON(json.value)
        }
    }

    get tokenGroupId(): bigint {
        assert(this._tokenGroupId != null, 'uninitialized access')
        return this._tokenGroupId
    }

    set tokenGroupId(value: bigint) {
        this._tokenGroupId = value
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
            isTypeOf: this.isTypeOf,
            tokenGroupId: marshal.bigint.toJSON(this.tokenGroupId),
            key: this.key,
            value: this.value,
        }
    }
}
