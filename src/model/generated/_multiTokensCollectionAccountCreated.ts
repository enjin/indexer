import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"

export class MultiTokensCollectionAccountCreated {
    public readonly isTypeOf = 'MultiTokensCollectionAccountCreated'
    private _collectionId!: bigint
    private _account!: string

    constructor(props?: Partial<Omit<MultiTokensCollectionAccountCreated, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId)
            this._account = marshal.string.fromJSON(json.account)
        }
    }

    get collectionId(): bigint {
        assert(this._collectionId != null, 'uninitialized access')
        return this._collectionId
    }

    set collectionId(value: bigint) {
        this._collectionId = value
    }

    get account(): string {
        assert(this._account != null, 'uninitialized access')
        return this._account
    }

    set account(value: string) {
        this._account = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            collectionId: marshal.bigint.toJSON(this.collectionId),
            account: this.account,
        }
    }
}
