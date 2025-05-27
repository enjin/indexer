import assert from "assert"
import * as marshal from "./marshal"

export class TokenCapSupply {
    public readonly isTypeOf = 'TokenCapSupply'
    private _supply!: bigint

    constructor(props?: Partial<Omit<TokenCapSupply, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._supply = marshal.bigint.fromJSON(json.supply)
        }
    }

    get supply(): bigint {
        assert(this._supply != null, 'uninitialized access')
        return this._supply
    }

    set supply(value: bigint) {
        this._supply = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            supply: marshal.bigint.toJSON(this.supply),
        }
    }
}
