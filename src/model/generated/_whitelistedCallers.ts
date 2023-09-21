import assert from "assert"
import * as marshal from "./marshal"

export class WhitelistedCallers {
    public readonly isTypeOf = 'WhitelistedCallers'
    private _accounts!: (string)[]

    constructor(props?: Partial<Omit<WhitelistedCallers, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._accounts = marshal.fromList(json.accounts, val => marshal.string.fromJSON(val))
        }
    }

    get accounts(): (string)[] {
        assert(this._accounts != null, 'uninitialized access')
        return this._accounts
    }

    set accounts(value: (string)[]) {
        this._accounts = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            accounts: this.accounts,
        }
    }
}
