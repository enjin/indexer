import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"

export class MultiTokensTokenAccountDestroyed {
    public readonly isTypeOf = 'MultiTokensTokenAccountDestroyed'
    private _collectionId!: bigint
    private _tokenId!: bigint
    private _accountId!: string

    constructor(props?: Partial<Omit<MultiTokensTokenAccountDestroyed, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId)
            this._tokenId = marshal.bigint.fromJSON(json.tokenId)
            this._accountId = marshal.string.fromJSON(json.accountId)
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

    get accountId(): string {
        assert(this._accountId != null, 'uninitialized access')
        return this._accountId
    }

    set accountId(value: string) {
        this._accountId = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            collectionId: marshal.bigint.toJSON(this.collectionId),
            tokenId: marshal.bigint.toJSON(this.tokenId),
            accountId: this.accountId,
        }
    }
}
