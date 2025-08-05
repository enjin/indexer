import assert from "assert"
import * as marshal from "./marshal"
import {NominationPool} from "./nominationPool.model"
import {Account} from "./account.model"

export class NominationPoolsPoolMutated {
    public readonly isTypeOf = 'NominationPoolsPoolMutated'
    private _pool!: string
    private _account!: string
    private _mutation!: unknown
    private _poolId!: string

    constructor(props?: Partial<Omit<NominationPoolsPoolMutated, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._pool = marshal.string.fromJSON(json.pool)
            this._account = marshal.string.fromJSON(json.account)
            this._mutation = json.mutation
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

    get account(): string {
        assert(this._account != null, 'uninitialized access')
        return this._account
    }

    set account(value: string) {
        this._account = value
    }

    get mutation(): unknown {
        assert(this._mutation != null, 'uninitialized access')
        return this._mutation
    }

    set mutation(value: unknown) {
        this._mutation = value
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
            account: this.account,
            mutation: this.mutation,
            poolId: this.poolId,
        }
    }
}
