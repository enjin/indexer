import assert from "assert"
import * as marshal from "./marshal"
import {AccountClaimType} from "./_accountClaimType"

export class ClaimAccount {
    private _type!: AccountClaimType
    private _account!: string

    constructor(props?: Partial<Omit<ClaimAccount, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._type = marshal.enumFromJson(json.type, AccountClaimType)
            this._account = marshal.string.fromJSON(json.account)
        }
    }

    get type(): AccountClaimType {
        assert(this._type != null, 'uninitialized access')
        return this._type
    }

    set type(value: AccountClaimType) {
        this._type = value
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
            type: this.type,
            account: this.account,
        }
    }
}
