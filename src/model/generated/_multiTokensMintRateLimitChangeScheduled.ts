import assert from "assert"
import * as marshal from "./marshal"
import {MintRateLimit} from "./_mintRateLimit"

export class MultiTokensMintRateLimitChangeScheduled {
    public readonly isTypeOf = 'MultiTokensMintRateLimitChangeScheduled'
    private _collectionId!: bigint
    private _tokenId!: bigint | undefined | null
    private _newLimit!: MintRateLimit | undefined | null
    private _effectiveBlock!: bigint

    constructor(props?: Partial<Omit<MultiTokensMintRateLimitChangeScheduled, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId)
            this._tokenId = json.tokenId == null ? undefined : marshal.bigint.fromJSON(json.tokenId)
            this._newLimit = json.newLimit == null ? undefined : new MintRateLimit(undefined, json.newLimit)
            this._effectiveBlock = marshal.bigint.fromJSON(json.effectiveBlock)
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

    get newLimit(): MintRateLimit | undefined | null {
        return this._newLimit
    }

    set newLimit(value: MintRateLimit | undefined | null) {
        this._newLimit = value
    }

    get effectiveBlock(): bigint {
        assert(this._effectiveBlock != null, 'uninitialized access')
        return this._effectiveBlock
    }

    set effectiveBlock(value: bigint) {
        this._effectiveBlock = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            collectionId: marshal.bigint.toJSON(this.collectionId),
            tokenId: this.tokenId == null ? undefined : marshal.bigint.toJSON(this.tokenId),
            newLimit: this.newLimit == null ? undefined : this.newLimit.toJSON(),
            effectiveBlock: marshal.bigint.toJSON(this.effectiveBlock),
        }
    }
}
