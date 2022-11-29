import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"

export class MultiTokensUnapproved {
    public readonly isTypeOf = 'MultiTokensUnapproved'
    private _collectionId!: bigint
    private _tokenId!: bigint | undefined | null
    private _owner!: string
    private _operator!: string

    constructor(props?: Partial<Omit<MultiTokensUnapproved, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId)
            this._tokenId = json.tokenId == null ? undefined : marshal.bigint.fromJSON(json.tokenId)
            this._owner = marshal.string.fromJSON(json.owner)
            this._operator = marshal.string.fromJSON(json.operator)
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

    get owner(): string {
        assert(this._owner != null, 'uninitialized access')
        return this._owner
    }

    set owner(value: string) {
        this._owner = value
    }

    get operator(): string {
        assert(this._operator != null, 'uninitialized access')
        return this._operator
    }

    set operator(value: string) {
        this._operator = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            collectionId: marshal.bigint.toJSON(this.collectionId),
            tokenId: this.tokenId == null ? undefined : marshal.bigint.toJSON(this.tokenId),
            owner: this.owner,
            operator: this.operator,
        }
    }
}
