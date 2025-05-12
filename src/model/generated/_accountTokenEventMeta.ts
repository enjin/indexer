import assert from "assert"
import * as marshal from "./marshal"
import {AccountTokenEventMetaCollection} from "./_accountTokenEventMetaCollection"
import {AccountTokenEventMetaToken} from "./_accountTokenEventMetaToken"

export class AccountTokenEventMeta {
    private _collection!: AccountTokenEventMetaCollection
    private _token!: AccountTokenEventMetaToken

    constructor(props?: Partial<Omit<AccountTokenEventMeta, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._collection = new AccountTokenEventMetaCollection(undefined, marshal.nonNull(json.collection))
            this._token = new AccountTokenEventMetaToken(undefined, marshal.nonNull(json.token))
        }
    }

    get collection(): AccountTokenEventMetaCollection {
        assert(this._collection != null, 'uninitialized access')
        return this._collection
    }

    set collection(value: AccountTokenEventMetaCollection) {
        this._collection = value
    }

    get token(): AccountTokenEventMetaToken {
        assert(this._token != null, 'uninitialized access')
        return this._token
    }

    set token(value: AccountTokenEventMetaToken) {
        this._token = value
    }

    toJSON(): object {
        return {
            collection: this.collection.toJSON(),
            token: this.token.toJSON(),
        }
    }
}
