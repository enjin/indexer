import assert from "assert"
import * as marshal from "./marshal"
import {NominationPool} from "./nominationPool.model"

export class NominationPoolsPoolSlashed {
    public readonly isTypeOf = 'NominationPoolsPoolSlashed'
    private _pool!: string
    private _balance!: bigint
    private _amount!: bigint | undefined | null
    private _poolId!: string

    constructor(props?: Partial<Omit<NominationPoolsPoolSlashed, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._pool = marshal.string.fromJSON(json.pool)
            this._balance = marshal.bigint.fromJSON(json.balance)
            this._amount = json.amount == null ? undefined : marshal.bigint.fromJSON(json.amount)
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

    get balance(): bigint {
        assert(this._balance != null, 'uninitialized access')
        return this._balance
    }

    set balance(value: bigint) {
        this._balance = value
    }

    get amount(): bigint | undefined | null {
        return this._amount
    }

    set amount(value: bigint | undefined | null) {
        this._amount = value
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
            balance: marshal.bigint.toJSON(this.balance),
            amount: this.amount == null ? undefined : marshal.bigint.toJSON(this.amount),
            poolId: this.poolId,
        }
    }
}
