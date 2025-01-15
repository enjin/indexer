import assert from "assert"
import * as marshal from "./marshal"
import {CapType} from "./_capType"

export class TokenCapSingleMint {
    public readonly isTypeOf = 'TokenCapSingleMint'
    private _type!: CapType

    constructor(props?: Partial<Omit<TokenCapSingleMint, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._type = marshal.enumFromJson(json.type, CapType)
        }
    }

    get type(): CapType {
        assert(this._type != null, 'uninitialized access')
        return this._type
    }

    set type(value: CapType) {
        this._type = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            type: this.type,
        }
    }
}
