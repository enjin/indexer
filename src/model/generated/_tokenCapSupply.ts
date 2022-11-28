import assert from "assert"
import * as marshal from "./marshal"
import {CapType} from "./_capType"

export class TokenCapSupply {
    public readonly isTypeOf = 'TokenCapSupply'
    private _type!: CapType
    private _supply!: bigint

    constructor(props?: Partial<Omit<TokenCapSupply, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._type = marshal.enumFromJson(json.type, CapType)
            this._supply = marshal.bigint.fromJSON(json.supply)
        }
    }

    get type(): CapType {
        assert(this._type != null, 'uninitialized access')
        return this._type
    }

    set type(value: CapType) {
        this._type = value
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
            type: this.type,
            supply: marshal.bigint.toJSON(this.supply),
        }
    }
}
