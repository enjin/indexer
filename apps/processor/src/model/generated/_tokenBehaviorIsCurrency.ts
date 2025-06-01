import assert from "assert"
import * as marshal from "./marshal"
import {TokenBehaviorType} from "./_tokenBehaviorType"

export class TokenBehaviorIsCurrency {
    public readonly isTypeOf = 'TokenBehaviorIsCurrency'
    private _type!: TokenBehaviorType

    constructor(props?: Partial<Omit<TokenBehaviorIsCurrency, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._type = marshal.enumFromJson(json.type, TokenBehaviorType)
        }
    }

    get type(): TokenBehaviorType {
        assert(this._type != null, 'uninitialized access')
        return this._type
    }

    set type(value: TokenBehaviorType) {
        this._type = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            type: this.type,
        }
    }
}
