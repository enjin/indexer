import assert from "assert"
import * as marshal from "./marshal"

export class MultiTokensAttributeRemoved {
    public readonly isTypeOf = 'MultiTokensAttributeRemoved'
    private _collectionId!: bigint
    private _tokenId!: bigint | undefined | null
    private _key!: string

    constructor(props?: Partial<Omit<MultiTokensAttributeRemoved, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId)
            this._tokenId = json.tokenId == null ? undefined : marshal.bigint.fromJSON(json.tokenId)
            this._key = marshal.string.fromJSON(json.key)
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

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            collectionId: marshal.bigint.toJSON(this.collectionId),
            tokenId: this.tokenId == null ? undefined : marshal.bigint.toJSON(this.tokenId),
            key: this.key,
        }
    }
}
