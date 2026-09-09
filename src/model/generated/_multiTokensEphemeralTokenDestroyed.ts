import assert from "assert"
import * as marshal from "./marshal"

export class MultiTokensEphemeralTokenDestroyed {
    public readonly isTypeOf = 'MultiTokensEphemeralTokenDestroyed'
    private _collectionId!: bigint
    private _tokenId!: bigint
    private _expirationBlock!: bigint
    private _observedBlock!: bigint

    constructor(props?: Partial<Omit<MultiTokensEphemeralTokenDestroyed, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId)
            this._tokenId = marshal.bigint.fromJSON(json.tokenId)
            this._expirationBlock = marshal.bigint.fromJSON(json.expirationBlock)
            this._observedBlock = marshal.bigint.fromJSON(json.observedBlock)
        }
    }

    get collectionId(): bigint {
        assert(this._collectionId != null, 'uninitialized access')
        return this._collectionId
    }

    set collectionId(value: bigint) {
        this._collectionId = value
    }

    get tokenId(): bigint {
        assert(this._tokenId != null, 'uninitialized access')
        return this._tokenId
    }

    set tokenId(value: bigint) {
        this._tokenId = value
    }

    get expirationBlock(): bigint {
        assert(this._expirationBlock != null, 'uninitialized access')
        return this._expirationBlock
    }

    set expirationBlock(value: bigint) {
        this._expirationBlock = value
    }

    get observedBlock(): bigint {
        assert(this._observedBlock != null, 'uninitialized access')
        return this._observedBlock
    }

    set observedBlock(value: bigint) {
        this._observedBlock = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            collectionId: marshal.bigint.toJSON(this.collectionId),
            tokenId: marshal.bigint.toJSON(this.tokenId),
            expirationBlock: marshal.bigint.toJSON(this.expirationBlock),
            observedBlock: marshal.bigint.toJSON(this.observedBlock),
        }
    }
}
