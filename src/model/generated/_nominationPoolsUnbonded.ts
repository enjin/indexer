import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"

export class NominationPoolsUnbonded {
    public readonly isTypeOf = 'NominationPoolsUnbonded'
    private _account!: string
    private _unbondingPoints!: bigint
    private _balance!: bigint
    private _pool!: string
    private _era!: number

    constructor(props?: Partial<Omit<NominationPoolsUnbonded, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._account = marshal.string.fromJSON(json.account)
            this._unbondingPoints = marshal.bigint.fromJSON(json.unbondingPoints)
            this._balance = marshal.bigint.fromJSON(json.balance)
            this._pool = marshal.string.fromJSON(json.pool)
            this._era = marshal.int.fromJSON(json.era)
        }
    }

    get account(): string {
        assert(this._account != null, 'uninitialized access')
        return this._account
    }

    set account(value: string) {
        this._account = value
    }

    get unbondingPoints(): bigint {
        assert(this._unbondingPoints != null, 'uninitialized access')
        return this._unbondingPoints
    }

    set unbondingPoints(value: bigint) {
        this._unbondingPoints = value
    }

    get balance(): bigint {
        assert(this._balance != null, 'uninitialized access')
        return this._balance
    }

    set balance(value: bigint) {
        this._balance = value
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
            account: this.account,
            unbondingPoints: marshal.bigint.toJSON(this.unbondingPoints),
            balance: marshal.bigint.toJSON(this.balance),
            pool: this.pool,
            era: this.era,
        }
    }
}
