import assert from "assert"
import * as marshal from "./marshal"

export class CollectionApproval {
    private _account!: string
    private _expiration!: number | undefined | null

    constructor(props?: Partial<Omit<CollectionApproval, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._account = marshal.string.fromJSON(json.account)
            this._expiration = json.expiration == null ? undefined : marshal.int.fromJSON(json.expiration)
        }
    }

    get account(): string {
        assert(this._account != null, 'uninitialized access')
        return this._account
    }

    set account(value: string) {
        this._account = value
    }

    get expiration(): number | undefined | null {
        return this._expiration
    }

    set expiration(value: number | undefined | null) {
        this._expiration = value
    }

    toJSON(): object {
        return {
            account: this.account,
            expiration: this.expiration,
        }
    }
}
