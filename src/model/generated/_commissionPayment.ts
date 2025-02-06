import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"

export class CommissionPayment {
    private _beneficiary!: string
    private _amount!: bigint

    constructor(props?: Partial<Omit<CommissionPayment, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._beneficiary = marshal.string.fromJSON(json.beneficiary)
            this._amount = marshal.bigint.fromJSON(json.amount)
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

    toJSON(): object {
        return {
            beneficiary: this.beneficiary,
            amount: marshal.bigint.toJSON(this.amount),
        }
    }
}
