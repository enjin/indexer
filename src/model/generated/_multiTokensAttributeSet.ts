import assert from "assert"
import * as marshal from "./marshal"

export class MultiTokensAttributeSet {
    public readonly isTypeOf = 'MultiTokensAttributeSet'
    private _collectionId!: bigint
    private _tokenId!: bigint | undefined | null
    private _key!: string
    private _value!: string

    constructor(props?: Partial<Omit<MultiTokensAttributeSet, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId)
            this._tokenId = json.tokenId == null ? undefined : marshal.bigint.fromJSON(json.tokenId)
            this._key = marshal.string.fromJSON(json.key)
            this._value = marshal.string.fromJSON(json.value)
        }
    }

    get collectionId(): bigint {
        assert(this._collectionId != null, 'uninitialized access')
        return this._collectionId
    }

    set collectionId(value: bigint) {
        this._collectionId = value
    }

    get tokenId(): bigint | undefined | null {
        return this._tokenId
    }

    set tokenId(value: bigint | undefined | null) {
        this._tokenId = value
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
            collectionId: marshal.bigint.toJSON(this.collectionId),
            tokenId: this.tokenId == null ? undefined : marshal.bigint.toJSON(this.tokenId),
            key: this.key,
            value: this.value,
        }
    }
}
