import assert from "assert"
import * as marshal from "./marshal"
import {Token} from "./token.model"
import {Account} from "./account.model"

export class MultiTokensBurned {
    public readonly isTypeOf = 'MultiTokensBurned'
    private _collectionId!: bigint
    private _tokenId!: bigint
    private _token!: string | undefined | null
    private _account!: string
    private _amount!: bigint
    private _cause!: string | undefined | null
    private _expirationBlock!: bigint | undefined | null

    constructor(props?: Partial<Omit<MultiTokensBurned, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId)
            this._tokenId = marshal.bigint.fromJSON(json.tokenId)
            this._token = json.token == null ? undefined : marshal.string.fromJSON(json.token)
            this._account = marshal.string.fromJSON(json.account)
            this._amount = marshal.bigint.fromJSON(json.amount)
            this._cause = json.cause == null ? undefined : marshal.string.fromJSON(json.cause)
            this._expirationBlock = json.expirationBlock == null ? undefined : marshal.bigint.fromJSON(json.expirationBlock)
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

    get account(): string {
        assert(this._account != null, 'uninitialized access')
        return this._account
    }

    set account(value: string) {
        this._account = value
    }

    get amount(): bigint {
        assert(this._amount != null, 'uninitialized access')
        return this._amount
    }

    set amount(value: bigint) {
        this._amount = value
    }

    /**
     * Why the token was burned: `burn` (a user action) or `ephemeralExpiry` (the chain burned an expired ephemeral token). Rows indexed before this field existed have none, which means `burn`.
     */
    get cause(): string | undefined | null {
        return this._cause
    }

    set cause(value: string | undefined | null) {
        this._cause = value
    }

    /**
     * The expiration block of an ephemeral token burned by the chain; set only with cause `ephemeralExpiry`.
     */
    get expirationBlock(): bigint | undefined | null {
        return this._expirationBlock
    }

    set expirationBlock(value: bigint | undefined | null) {
        this._expirationBlock = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            collectionId: marshal.bigint.toJSON(this.collectionId),
            tokenId: marshal.bigint.toJSON(this.tokenId),
            token: this.token,
            account: this.account,
            amount: marshal.bigint.toJSON(this.amount),
            cause: this.cause,
            expirationBlock: this.expirationBlock == null ? undefined : marshal.bigint.toJSON(this.expirationBlock),
        }
    }
}
