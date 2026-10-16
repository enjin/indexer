import assert from "assert"
import * as marshal from "./marshal"
import {NominationPool} from "./nominationPool.model"

export class NominationPoolsCommissionUpdated {
    public readonly isTypeOf = 'NominationPoolsCommissionUpdated'
    private _pool!: string
    private _current!: number | undefined | null
    private _poolId!: string

    constructor(props?: Partial<Omit<NominationPoolsCommissionUpdated, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._pool = marshal.string.fromJSON(json.pool)
            this._current = json.current == null ? undefined : marshal.float.fromJSON(json.current)
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

    get current(): number | undefined | null {
        return this._current
    }

    set current(value: number | undefined | null) {
        this._current = value
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
            current: this.current,
            poolId: this.poolId,
        }
    }
}
