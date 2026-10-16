import assert from "assert"
import * as marshal from "./marshal"
import {NominationPool} from "./nominationPool.model"

export class NominationPoolsUnbondingPoolSlashed {
    public readonly isTypeOf = 'NominationPoolsUnbondingPoolSlashed'
    private _pool!: string
    private _era!: number
    private _balance!: bigint
    private _poolId!: string

    constructor(props?: Partial<Omit<NominationPoolsUnbondingPoolSlashed, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._pool = marshal.string.fromJSON(json.pool)
            this._era = marshal.int.fromJSON(json.era)
            this._balance = marshal.bigint.fromJSON(json.balance)
            this._poolId = marshal.string.fromJSON(json.poolId)
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

    get balance(): bigint {
        assert(this._balance != null, 'uninitialized access')
        return this._balance
    }

    set balance(value: bigint) {
        this._balance = value
    }

    get poolId(): string {
        assert(this._poolId != null, 'uninitialized access')
        return this._poolId
    }

    set poolId(value: string) {
        this._poolId = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            pool: this.pool,
            era: this.era,
            balance: marshal.bigint.toJSON(this.balance),
            poolId: this.poolId,
        }
    }
}
