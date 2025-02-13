import assert from "assert"
import * as marshal from "./marshal"

export class NominationPoolsEarlyBirdBonusCalculated {
    public readonly isTypeOf = 'NominationPoolsEarlyBirdBonusCalculated'
    private _totalAmount!: bigint

    constructor(props?: Partial<Omit<NominationPoolsEarlyBirdBonusCalculated, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._totalAmount = marshal.bigint.fromJSON(json.totalAmount)
        }
    }

    get totalAmount(): bigint {
        assert(this._totalAmount != null, 'uninitialized access')
        return this._totalAmount
    }

    set totalAmount(value: bigint) {
        this._totalAmount = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            totalAmount: marshal.bigint.toJSON(this.totalAmount),
        }
    }
}
