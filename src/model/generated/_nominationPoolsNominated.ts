import assert from "assert"
import * as marshal from "./marshal"

export class NominationPoolsNominated {
    public readonly isTypeOf = 'NominationPoolsNominated'
    private _pool!: string
    private _validators!: (string | undefined | null)[]

    constructor(props?: Partial<Omit<NominationPoolsNominated, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._pool = marshal.string.fromJSON(json.pool)
            this._validators = marshal.fromList(json.validators, val => val == null ? undefined : marshal.string.fromJSON(val))
        }
    }

    get pool(): string {
        assert(this._pool != null, 'uninitialized access')
        return this._pool
    }

    set pool(value: string) {
        this._pool = value
    }

    get validators(): (string | undefined | null)[] {
        assert(this._validators != null, 'uninitialized access')
        return this._validators
    }

    set validators(value: (string | undefined | null)[]) {
        this._validators = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            pool: this.pool,
            validators: this.validators,
        }
    }
}
