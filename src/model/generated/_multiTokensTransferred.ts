import assert from "assert"
import * as marshal from "./marshal"
import {Token} from "./token.model"
import {Account} from "./account.model"

export class MultiTokensTransferred {
    public readonly isTypeOf = 'MultiTokensTransferred'
    private _collectionId!: bigint
    private _tokenId!: bigint
    private _token!: string | undefined | null
    private _operator!: string
    private _from!: string
    private _to!: string
    private _amount!: bigint

    constructor(props?: Partial<Omit<MultiTokensTransferred, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId)
            this._tokenId = marshal.bigint.fromJSON(json.tokenId)
            this._token = json.token == null ? undefined : marshal.string.fromJSON(json.token)
            this._operator = marshal.string.fromJSON(json.operator)
            this._from = marshal.string.fromJSON(json.from)
            this._to = marshal.string.fromJSON(json.to)
            this._amount = marshal.bigint.fromJSON(json.amount)
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

    get token(): string | undefined | null {
        return this._token
    }

    set token(value: string | undefined | null) {
        this._token = value
    }

    get operator(): string {
        assert(this._operator != null, 'uninitialized access')
        return this._operator
    }

    set operator(value: string) {
        this._operator = value
    }

    get from(): string {
        assert(this._from != null, 'uninitialized access')
        return this._from
    }

    set from(value: string) {
        this._from = value
    }

    get to(): string {
        assert(this._to != null, 'uninitialized access')
        return this._to
    }

    set to(value: string) {
        this._to = value
    }

    get amount(): bigint {
        assert(this._amount != null, 'uninitialized access')
        return this._amount
    }

    set amount(value: bigint) {
        this._amount = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            collectionId: marshal.bigint.toJSON(this.collectionId),
            tokenId: marshal.bigint.toJSON(this.tokenId),
            token: this.token,
            operator: this.operator,
            from: this.from,
            to: this.to,
            amount: marshal.bigint.toJSON(this.amount),
        }
    }
}
