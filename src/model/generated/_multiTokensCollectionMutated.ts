import assert from "assert"
import * as marshal from "./marshal"

export class MultiTokensCollectionMutated {
    public readonly isTypeOf = 'MultiTokensCollectionMutated'
    private _collectionId!: bigint

    constructor(props?: Partial<Omit<MultiTokensCollectionMutated, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId)
        }
    }

    get collectionId(): bigint {
        assert(this._collectionId != null, 'uninitialized access')
        return this._collectionId
    }

    set collectionId(value: bigint) {
        this._collectionId = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            collectionId: marshal.bigint.toJSON(this.collectionId),
        }
    }
}
