import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"

export class TeleportBalanceWithdrawn {
    public readonly isTypeOf = 'TeleportBalanceWithdrawn'
    private _beneficiary!: string
    private _amount!: bigint
    private _account!: string
    private _destination!: string

    constructor(props?: Partial<Omit<TeleportBalanceWithdrawn, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._beneficiary = marshal.string.fromJSON(json.beneficiary)
            this._amount = marshal.bigint.fromJSON(json.amount)
            this._account = marshal.string.fromJSON(json.account)
            this._destination = marshal.string.fromJSON(json.destination)
        }
    }

    get beneficiary(): string {
        assert(this._beneficiary != null, 'uninitialized access')
        return this._beneficiary
    }

    set beneficiary(value: string) {
        this._beneficiary = value
    }

    get amount(): bigint {
        assert(this._amount != null, 'uninitialized access')
        return this._amount
    }

    set amount(value: bigint) {
        this._amount = value
    }

    get account(): string {
        assert(this._account != null, 'uninitialized access')
        return this._account
    }

    set account(value: string) {
        this._account = value
    }

    get destination(): string {
        assert(this._destination != null, 'uninitialized access')
        return this._destination
    }

    set destination(value: string) {
        this._destination = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            beneficiary: this.beneficiary,
            amount: marshal.bigint.toJSON(this.amount),
            account: this.account,
            destination: this.destination,
        }
    }
}
