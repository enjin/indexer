import assert from "assert"
import * as marshal from "./marshal"

export class NominationPoolsEarlyBirdBonusPaid {
    public readonly isTypeOf = 'NominationPoolsEarlyBirdBonusPaid'
    private _pool!: string
    private _paymentId!: number
    private _totalAccounts!: number

    constructor(props?: Partial<Omit<NominationPoolsEarlyBirdBonusPaid, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._pool = marshal.string.fromJSON(json.pool)
            this._paymentId = marshal.int.fromJSON(json.paymentId)
            this._totalAccounts = marshal.int.fromJSON(json.totalAccounts)
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

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            pool: this.pool,
            paymentId: this.paymentId,
            totalAccounts: this.totalAccounts,
        }
    }
}
