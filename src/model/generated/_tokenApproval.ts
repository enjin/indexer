import assert from "assert"
import * as marshal from "./marshal"

export class TokenApproval {
    private _account!: string
    private _amount!: bigint
    private _expiration!: number | undefined | null

    constructor(props?: Partial<Omit<TokenApproval, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._account = marshal.string.fromJSON(json.account)
            this._amount = marshal.bigint.fromJSON(json.amount)
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

    get amount(): bigint {
        assert(this._amount != null, 'uninitialized access')
        return this._amount
    }

    set amount(value: bigint) {
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
            account: this.account,
            amount: marshal.bigint.toJSON(this.amount),
            expiration: this.expiration,
        }
    }
}
