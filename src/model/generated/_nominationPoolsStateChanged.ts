import assert from "assert"
import * as marshal from "./marshal"
import {NominationPool} from "./nominationPool.model"

export class NominationPoolsStateChanged {
    public readonly isTypeOf = 'NominationPoolsStateChanged'
    private _pool!: string
    private _state!: string
    private _poolId!: string

    constructor(props?: Partial<Omit<NominationPoolsStateChanged, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._pool = marshal.string.fromJSON(json.pool)
            this._state = marshal.string.fromJSON(json.state)
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

    get state(): string {
        assert(this._state != null, 'uninitialized access')
        return this._state
    }

    set state(value: string) {
        this._state = value
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
            state: this.state,
            poolId: this.poolId,
        }
    }
}
