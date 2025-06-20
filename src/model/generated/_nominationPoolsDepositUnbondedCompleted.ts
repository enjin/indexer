import assert from "assert"
import * as marshal from "./marshal"

export class NominationPoolsDepositUnbondedCompleted {
    public readonly isTypeOf = 'NominationPoolsDepositUnbondedCompleted'
    private _pool!: string
    private _era!: number

    constructor(props?: Partial<Omit<NominationPoolsDepositUnbondedCompleted, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._pool = marshal.string.fromJSON(json.pool)
            this._era = marshal.int.fromJSON(json.era)
        }
    }

    get pool(): string {
        assert(this._pool != null, 'uninitialized access')
        return this._pool
    }

    set pool(value: string) {
        this._pool = value
    }

    get era(): number {
        assert(this._era != null, 'uninitialized access')
        return this._era
    }

    set era(value: number) {
        this._era = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            pool: this.pool,
            era: this.era,
        }
    }
}
