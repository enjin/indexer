import assert from "assert"
import * as marshal from "./marshal"

export class TokenCapSingleMint {
    public readonly isTypeOf = 'TokenCapSingleMint'
    private _supply!: bigint

    constructor(props?: Partial<Omit<TokenCapSingleMint, 'toJSON'>>, json?: any) {
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
