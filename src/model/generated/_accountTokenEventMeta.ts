import assert from "assert"
import * as marshal from "./marshal"
import {AccountTokenEventMetaCollection} from "./_accountTokenEventMetaCollection"
import {AccountTokenEventMetaToken} from "./_accountTokenEventMetaToken"

export class AccountTokenEventMeta {
    private _collection!: AccountTokenEventMetaCollection | undefined | null
    private _token!: AccountTokenEventMetaToken | undefined | null

    constructor(props?: Partial<Omit<AccountTokenEventMeta, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._collection = json.collection == null ? undefined : new AccountTokenEventMetaCollection(undefined, json.collection)
            this._token = json.token == null ? undefined : new AccountTokenEventMetaToken(undefined, json.token)
        }
    }

    get collection(): AccountTokenEventMetaCollection | undefined | null {
        return this._collection
    }

    set collection(value: AccountTokenEventMetaCollection | undefined | null) {
        this._collection = value
    }

    get token(): AccountTokenEventMetaToken | undefined | null {
        return this._token
    }

    set token(value: AccountTokenEventMetaToken | undefined | null) {
        this._token = value
    }

    toJSON(): object {
        return {
            collection: this.collection == null ? undefined : this.collection.toJSON(),
            token: this.token == null ? undefined : this.token.toJSON(),
        }
    }
}
