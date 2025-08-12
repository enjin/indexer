import assert from "assert"
import * as marshal from "./marshal"

export class MultiTokensTokenGroupCreated {
    public readonly isTypeOf = 'MultiTokensTokenGroupCreated'
    private _collectionId!: bigint
    private _tokenGroupId!: bigint

    constructor(props?: Partial<Omit<MultiTokensTokenGroupCreated, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId)
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
            tokenGroupId: marshal.bigint.toJSON(this.tokenGroupId),
        }
    }
}
