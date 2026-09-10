import assert from "assert"
import * as marshal from "./marshal"
import {MintRateLimit} from "./_mintRateLimit"

export class MultiTokensMintRateLimitUpdated {
    public readonly isTypeOf = 'MultiTokensMintRateLimitUpdated'
    private _collectionId!: bigint
    private _tokenId!: bigint | undefined | null
    private _limit!: MintRateLimit | undefined | null

    constructor(props?: Partial<Omit<MultiTokensMintRateLimitUpdated, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId)
            this._tokenId = json.tokenId == null ? undefined : marshal.bigint.fromJSON(json.tokenId)
            this._limit = json.limit == null ? undefined : new MintRateLimit(undefined, json.limit)
        }
    }

    get collectionId(): bigint {
        assert(this._collectionId != null, 'uninitialized access')
        return this._collectionId
    }

    set collectionId(value: bigint) {
        this._collectionId = value
    }

    get tokenId(): bigint | undefined | null {
        return this._tokenId
    }

    set tokenId(value: bigint | undefined | null) {
        this._tokenId = value
    }

    get limit(): MintRateLimit | undefined | null {
        return this._limit
    }

    set limit(value: MintRateLimit | undefined | null) {
        this._limit = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            collectionId: marshal.bigint.toJSON(this.collectionId),
            tokenId: this.tokenId == null ? undefined : marshal.bigint.toJSON(this.tokenId),
            limit: this.limit == null ? undefined : this.limit.toJSON(),
        }
    }
}
