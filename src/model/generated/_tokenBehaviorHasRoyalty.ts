import assert from "assert"
import * as marshal from "./marshal"
import {TokenBehaviorType} from "./_tokenBehaviorType"
import {Royalty} from "./_royalty"

export class TokenBehaviorHasRoyalty {
    public readonly isTypeOf = 'TokenBehaviorHasRoyalty'
    private _type!: TokenBehaviorType
    private _royalty!: Royalty | undefined | null
    private _beneficiaries!: (Royalty | undefined | null)[] | undefined | null

    constructor(props?: Partial<Omit<TokenBehaviorHasRoyalty, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._type = marshal.enumFromJson(json.type, TokenBehaviorType)
            this._royalty = json.royalty == null ? undefined : new Royalty(undefined, json.royalty)
            this._beneficiaries = json.beneficiaries == null ? undefined : marshal.fromList(json.beneficiaries, val => val == null ? undefined : new Royalty(undefined, val))
        }
    }

    get type(): TokenBehaviorType {
        assert(this._type != null, 'uninitialized access')
        return this._type
    }

    set type(value: TokenBehaviorType) {
        this._type = value
    }

    get royalty(): Royalty | undefined | null {
        return this._royalty
    }

    set royalty(value: Royalty | undefined | null) {
        this._royalty = value
    }

    get beneficiaries(): (Royalty | undefined | null)[] | undefined | null {
        return this._beneficiaries
    }

    set beneficiaries(value: (Royalty | undefined | null)[] | undefined | null) {
        this._beneficiaries = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            type: this.type,
            royalty: this.royalty == null ? undefined : this.royalty.toJSON(),
            beneficiaries: this.beneficiaries == null ? undefined : this.beneficiaries.map((val: any) => val == null ? undefined : val.toJSON()),
        }
    }
}
