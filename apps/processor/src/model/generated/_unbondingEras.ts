import assert from "assert"
import * as marshal from "./marshal"

export class UnbondingEras {
    private _era!: number
    private _balance!: bigint

    constructor(props?: Partial<Omit<UnbondingEras, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._era = marshal.int.fromJSON(json.era)
            this._balance = marshal.bigint.fromJSON(json.balance)
        }
    }

    get era(): number {
        assert(this._era != null, 'uninitialized access')
        return this._era
    }

    set era(value: number) {
        this._era = value
    }

    get balance(): bigint {
        assert(this._balance != null, 'uninitialized access')
        return this._balance
    }

    set balance(value: bigint) {
        this._balance = value
    }

    toJSON(): object {
        return {
            era: this.era,
            balance: marshal.bigint.toJSON(this.balance),
        }
    }
}
