import assert from "assert"
import * as marshal from "./marshal"

export class StakingUnbonded {
    public readonly isTypeOf = 'StakingUnbonded'
    private _validator!: string
    private _amount!: bigint

    constructor(props?: Partial<Omit<StakingUnbonded, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._validator = marshal.string.fromJSON(json.validator)
            this._amount = marshal.bigint.fromJSON(json.amount)
        }
    }

    get validator(): string {
        assert(this._validator != null, 'uninitialized access')
        return this._validator
    }

    set validator(value: string) {
        this._validator = value
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
            isTypeOf: this.isTypeOf,
            validator: this.validator,
            amount: marshal.bigint.toJSON(this.amount),
        }
    }
}
