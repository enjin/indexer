import assert from "assert"
import * as marshal from "./marshal"

export class NominationPoolsCreated {
    public readonly isTypeOf = 'NominationPoolsCreated'
    private _pool!: string

    constructor(props?: Partial<Omit<NominationPoolsCreated, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._pool = marshal.string.fromJSON(json.pool)
        }
    }

    get pool(): string {
        assert(this._pool != null, 'uninitialized access')
        return this._pool
    }

    set pool(value: string) {
        this._pool = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            pool: this.pool,
        }
    }
}
