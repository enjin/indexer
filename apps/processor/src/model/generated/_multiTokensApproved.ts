import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"

export class MultiTokensApproved {
    public readonly isTypeOf = 'MultiTokensApproved'
    private _collectionId!: bigint
    private _tokenId!: bigint | undefined | null
    private _owner!: string
    private _operator!: string
    private _amount!: bigint | undefined | null
    private _expiration!: number | undefined | null

    constructor(props?: Partial<Omit<MultiTokensApproved, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId)
            this._tokenId = json.tokenId == null ? undefined : marshal.bigint.fromJSON(json.tokenId)
            this._owner = marshal.string.fromJSON(json.owner)
            this._operator = marshal.string.fromJSON(json.operator)
            this._amount = json.amount == null ? undefined : marshal.bigint.fromJSON(json.amount)
            this._expiration = json.expiration == null ? undefined : marshal.int.fromJSON(json.expiration)
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

    get amount(): bigint | undefined | null {
        return this._amount
    }

    set amount(value: bigint | undefined | null) {
        this._amount = value
    }

    get expiration(): number | undefined | null {
        return this._expiration
    }

    set expiration(value: number | undefined | null) {
        this._expiration = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            collectionId: marshal.bigint.toJSON(this.collectionId),
            tokenId: this.tokenId == null ? undefined : marshal.bigint.toJSON(this.tokenId),
            owner: this.owner,
            operator: this.operator,
            amount: this.amount == null ? undefined : marshal.bigint.toJSON(this.amount),
            expiration: this.expiration,
        }
    }
}
