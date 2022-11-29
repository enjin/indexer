import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"

export class MultiTokensMinted {
    public readonly isTypeOf = 'MultiTokensMinted'
    private _collectionId!: bigint
    private _tokenId!: bigint
    private _issuer!: string
    private _recipient!: string
    private _amount!: bigint

    constructor(props?: Partial<Omit<MultiTokensMinted, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId)
            this._tokenId = marshal.bigint.fromJSON(json.tokenId)
            this._issuer = marshal.string.fromJSON(json.issuer)
            this._recipient = marshal.string.fromJSON(json.recipient)
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

    get issuer(): string {
        assert(this._issuer != null, 'uninitialized access')
        return this._issuer
    }

    set issuer(value: string) {
        this._issuer = value
    }

    get recipient(): string {
        assert(this._recipient != null, 'uninitialized access')
        return this._recipient
    }

    set recipient(value: string) {
        this._recipient = value
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
            issuer: this.issuer,
            recipient: this.recipient,
            amount: marshal.bigint.toJSON(this.amount),
        }
    }
}
