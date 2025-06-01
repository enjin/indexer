import assert from "assert"
import * as marshal from "./marshal"

export class NominationPoolsPoolMutated {
    public readonly isTypeOf = 'NominationPoolsPoolMutated'
    private _pool!: string
    private _mutation!: unknown

    constructor(props?: Partial<Omit<NominationPoolsPoolMutated, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._pool = marshal.string.fromJSON(json.pool)
            this._mutation = json.mutation
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

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            pool: this.pool,
            mutation: this.mutation,
        }
    }
}
