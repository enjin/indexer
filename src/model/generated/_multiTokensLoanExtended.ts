import assert from "assert"
import * as marshal from "./marshal"

export class MultiTokensLoanExtended {
    public readonly isTypeOf = 'MultiTokensLoanExtended'
    private _collectionId!: bigint
    private _tokenId!: bigint
    private _oldExpirationBlock!: bigint
    private _newExpirationBlock!: bigint
    private _observedBlock!: bigint

    constructor(props?: Partial<Omit<MultiTokensLoanExtended, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId)
            this._tokenId = marshal.bigint.fromJSON(json.tokenId)
            this._oldExpirationBlock = marshal.bigint.fromJSON(json.oldExpirationBlock)
            this._newExpirationBlock = marshal.bigint.fromJSON(json.newExpirationBlock)
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

    get oldExpirationBlock(): bigint {
        assert(this._oldExpirationBlock != null, 'uninitialized access')
        return this._oldExpirationBlock
    }

    set oldExpirationBlock(value: bigint) {
        this._oldExpirationBlock = value
    }

    get newExpirationBlock(): bigint {
        assert(this._newExpirationBlock != null, 'uninitialized access')
        return this._newExpirationBlock
    }

    set newExpirationBlock(value: bigint) {
        this._newExpirationBlock = value
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
            oldExpirationBlock: marshal.bigint.toJSON(this.oldExpirationBlock),
            newExpirationBlock: marshal.bigint.toJSON(this.newExpirationBlock),
            observedBlock: marshal.bigint.toJSON(this.observedBlock),
        }
    }
}
