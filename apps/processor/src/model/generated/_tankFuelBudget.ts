import assert from "assert"
import * as marshal from "./marshal"

export class TankFuelBudget {
    private _amount!: bigint | undefined | null
    private _resetPeriod!: bigint | undefined | null

    constructor(props?: Partial<Omit<TankFuelBudget, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._amount = json.amount == null ? undefined : marshal.bigint.fromJSON(json.amount)
            this._resetPeriod = json.resetPeriod == null ? undefined : marshal.bigint.fromJSON(json.resetPeriod)
        }
    }

    get amount(): bigint | undefined | null {
        return this._amount
    }

    set amount(value: bigint | undefined | null) {
        this._amount = value
    }

    get resetPeriod(): bigint | undefined | null {
        return this._resetPeriod
    }

    set resetPeriod(value: bigint | undefined | null) {
        this._resetPeriod = value
    }

    toJSON(): object {
        return {
            amount: this.amount == null ? undefined : marshal.bigint.toJSON(this.amount),
            resetPeriod: this.resetPeriod == null ? undefined : marshal.bigint.toJSON(this.resetPeriod),
        }
    }
}
