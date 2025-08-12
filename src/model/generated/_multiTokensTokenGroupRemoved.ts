import assert from "assert"
import * as marshal from "./marshal"

export class MultiTokensTokenGroupRemoved {
    public readonly isTypeOf = 'MultiTokensTokenGroupRemoved'
    private _collectionId!: bigint
    private _tokenId!: bigint
    private _tokenGroupId!: bigint

    constructor(props?: Partial<Omit<MultiTokensTokenGroupRemoved, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId)
            this._tokenId = marshal.bigint.fromJSON(json.tokenId)
            this._tokenGroupId = marshal.bigint.fromJSON(json.tokenGroupId)
        }
    }

    get collectionId(): bigint {
        assert(this._collectionId != null, 'uninitialized access')
        return this._collectionId
    }

    set collectionId(value: bigint) {
        this._collectionId = value
    }

    get tokenId(): bigint {
        assert(this._tokenId != null, 'uninitialized access')
        return this._tokenId
    }

    set tokenId(value: bigint) {
        this._tokenId = value
    }

    get tokenGroupId(): bigint {
        assert(this._tokenGroupId != null, 'uninitialized access')
        return this._tokenGroupId
    }

    set tokenGroupId(value: bigint) {
        this._tokenGroupId = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            collectionId: marshal.bigint.toJSON(this.collectionId),
            tokenId: marshal.bigint.toJSON(this.tokenId),
            tokenGroupId: marshal.bigint.toJSON(this.tokenGroupId),
        }
    }
}
