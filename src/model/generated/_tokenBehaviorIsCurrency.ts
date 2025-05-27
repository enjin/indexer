import assert from "assert"
import * as marshal from "./marshal"
import {TokenMarketBehavior} from "./_tokenMarketBehavior"

export class TokenBehaviorIsCurrency {
    public readonly isTypeOf = 'TokenBehaviorIsCurrency'
    private _type!: TokenMarketBehavior

    constructor(props?: Partial<Omit<TokenBehaviorIsCurrency, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._type = marshal.enumFromJson(json.type, TokenMarketBehavior)
        }
    }

    get type(): TokenMarketBehavior {
        assert(this._type != null, 'uninitialized access')
        return this._type
    }

    set type(value: TokenMarketBehavior) {
        this._type = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            type: this.type,
        }
    }
}
