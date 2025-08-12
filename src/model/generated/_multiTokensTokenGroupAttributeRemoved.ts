import assert from "assert"
import * as marshal from "./marshal"

export class MultiTokensTokenGroupAttributeRemoved {
    public readonly isTypeOf = 'MultiTokensTokenGroupAttributeRemoved'
    private _tokenGroupId!: bigint
    private _key!: string

    constructor(props?: Partial<Omit<MultiTokensTokenGroupAttributeRemoved, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._tokenGroupId = marshal.bigint.fromJSON(json.tokenGroupId)
            this._key = marshal.string.fromJSON(json.key)
        }
    }

    get tokenGroupId(): bigint {
        assert(this._tokenGroupId != null, 'uninitialized access')
        return this._tokenGroupId
    }

    set tokenGroupId(value: bigint) {
        this._tokenGroupId = value
    }

    get key(): string {
        assert(this._key != null, 'uninitialized access')
        return this._key
    }

    set key(value: string) {
        this._key = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            tokenGroupId: marshal.bigint.toJSON(this.tokenGroupId),
            key: this.key,
        }
    }
}
