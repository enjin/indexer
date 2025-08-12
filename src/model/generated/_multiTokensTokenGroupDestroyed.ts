import assert from "assert"
import * as marshal from "./marshal"

export class MultiTokensTokenGroupDestroyed {
    public readonly isTypeOf = 'MultiTokensTokenGroupDestroyed'
    private _tokenGroupId!: bigint

    constructor(props?: Partial<Omit<MultiTokensTokenGroupDestroyed, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._tokenGroupId = marshal.bigint.fromJSON(json.tokenGroupId)
        }
    }

    get tokenGroupId(): bigint {
        assert(this._tokenGroupId != null, 'uninitialized access')
        return this._tokenGroupId
    }

    set tokenGroupId(value: bigint) {
        this._tokenGroupId = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            tokenGroupId: marshal.bigint.toJSON(this.tokenGroupId),
        }
    }
}
