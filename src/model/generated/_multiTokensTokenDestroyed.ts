import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"

export class MultiTokensTokenDestroyed {
    public readonly isTypeOf = 'MultiTokensTokenDestroyed'
    private _collectionId!: bigint
    private _tokenId!: bigint
    private _caller!: string

    constructor(props?: Partial<Omit<MultiTokensTokenDestroyed, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId)
            this._tokenId = marshal.bigint.fromJSON(json.tokenId)
            this._caller = marshal.string.fromJSON(json.caller)
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

    get caller(): string {
        assert(this._caller != null, 'uninitialized access')
        return this._caller
    }

    set caller(value: string) {
        this._caller = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            collectionId: marshal.bigint.toJSON(this.collectionId),
            tokenId: marshal.bigint.toJSON(this.tokenId),
            caller: this.caller,
        }
    }
}
