import assert from "assert"
import * as marshal from "./marshal"

export class CollectionApproval {
    private _accountId!: string
    private _expiration!: number | undefined | null

    constructor(props?: Partial<Omit<CollectionApproval, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._accountId = marshal.string.fromJSON(json.accountId)
            this._expiration = json.expiration == null ? undefined : marshal.int.fromJSON(json.expiration)
        }
    }

    get accountId(): string {
        assert(this._accountId != null, 'uninitialized access')
        return this._accountId
    }

    set accountId(value: string) {
        this._accountId = value
    }

    get expiration(): number | undefined | null {
        return this._expiration
    }

    set expiration(value: number | undefined | null) {
        this._expiration = value
    }

    toJSON(): object {
        return {
            accountId: this.accountId,
            expiration: this.expiration,
        }
    }
}
