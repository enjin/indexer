import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"

export class MultiTokensClaimedCollections {
    public readonly isTypeOf = 'MultiTokensClaimedCollections'
    private _account!: string
    private _ethAccount!: string
    private _collectionIds!: (bigint)[] | undefined | null

    constructor(props?: Partial<Omit<MultiTokensClaimedCollections, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._account = marshal.string.fromJSON(json.account)
            this._ethAccount = marshal.string.fromJSON(json.ethAccount)
            this._collectionIds = json.collectionIds == null ? undefined : marshal.fromList(json.collectionIds, val => marshal.bigint.fromJSON(val))
        }
    }

    get account(): string {
        assert(this._account != null, 'uninitialized access')
        return this._account
    }

    set account(value: string) {
        this._account = value
    }

    get ethAccount(): string {
        assert(this._ethAccount != null, 'uninitialized access')
        return this._ethAccount
    }

    set ethAccount(value: string) {
        this._ethAccount = value
    }

    get collectionIds(): (bigint)[] | undefined | null {
        return this._collectionIds
    }

    set collectionIds(value: (bigint)[] | undefined | null) {
        this._collectionIds = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            account: this.account,
            ethAccount: this.ethAccount,
            collectionIds: this.collectionIds == null ? undefined : this.collectionIds.map((val: any) => marshal.bigint.toJSON(val)),
        }
    }
}
