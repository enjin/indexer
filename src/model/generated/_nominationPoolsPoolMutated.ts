import assert from "assert"
import * as marshal from "./marshal"
import {PoolState} from "./_poolState"

export class NominationPoolsPoolMutated {
    public readonly isTypeOf = 'NominationPoolsPoolMutated'
    private _pool!: string
    private _mutation!: unknown
    private _state!: PoolState

    constructor(props?: Partial<Omit<NominationPoolsPoolMutated, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._pool = marshal.string.fromJSON(json.pool)
            this._mutation = json.mutation
            this._state = marshal.enumFromJson(json.state, PoolState)
        }
    }

    get pool(): string {
        assert(this._pool != null, 'uninitialized access')
        return this._pool
    }

    set pool(value: string) {
        this._pool = value
    }

    get mutation(): unknown {
        assert(this._mutation != null, 'uninitialized access')
        return this._mutation
    }

    set mutation(value: unknown) {
        this._mutation = value
    }

    get state(): PoolState {
        assert(this._state != null, 'uninitialized access')
        return this._state
    }

    set state(value: PoolState) {
        this._state = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            pool: this.pool,
            mutation: this.mutation,
            state: this.state,
        }
    }
}
