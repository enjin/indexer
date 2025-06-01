import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"

export class MultiTokensClaimTokensInitiated {
    public readonly isTypeOf = 'MultiTokensClaimTokensInitiated'
    private _account!: string
    private _ethAccount!: string

    constructor(props?: Partial<Omit<MultiTokensClaimTokensInitiated, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._account = marshal.string.fromJSON(json.account)
            this._ethAccount = marshal.string.fromJSON(json.ethAccount)
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

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            account: this.account,
            ethAccount: this.ethAccount,
        }
    }
}
