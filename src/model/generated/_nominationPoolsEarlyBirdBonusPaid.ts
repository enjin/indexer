import assert from "assert"
import * as marshal from "./marshal"
import {NominationPool} from "./nominationPool.model"

export class NominationPoolsEarlyBirdBonusPaid {
    public readonly isTypeOf = 'NominationPoolsEarlyBirdBonusPaid'
    private _pool!: string
    private _paymentId!: number
    private _totalAccounts!: number
    private _poolId!: string

    constructor(props?: Partial<Omit<NominationPoolsEarlyBirdBonusPaid, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._pool = marshal.string.fromJSON(json.pool)
            this._paymentId = marshal.int.fromJSON(json.paymentId)
            this._totalAccounts = marshal.int.fromJSON(json.totalAccounts)
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

    get paymentId(): number {
        assert(this._paymentId != null, 'uninitialized access')
        return this._paymentId
    }

    set paymentId(value: number) {
        this._paymentId = value
    }

    get totalAccounts(): number {
        assert(this._totalAccounts != null, 'uninitialized access')
        return this._totalAccounts
    }

    set totalAccounts(value: number) {
        this._totalAccounts = value
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
            paymentId: this.paymentId,
            totalAccounts: this.totalAccounts,
            poolId: this.poolId,
        }
    }
}
