import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"

export class MultiTokensCollectionCreated {
    public readonly isTypeOf = 'MultiTokensCollectionCreated'
    private _collectionId!: bigint
    private _owner!: string

    constructor(props?: Partial<Omit<MultiTokensCollectionCreated, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId)
            this._owner = marshal.string.fromJSON(json.owner)
        }
    }

    get collectionId(): bigint {
        assert(this._collectionId != null, 'uninitialized access')
        return this._collectionId
    }

    set collectionId(value: bigint) {
        this._collectionId = value
    }

    get owner(): string {
        assert(this._owner != null, 'uninitialized access')
        return this._owner
    }

    set owner(value: string) {
        this._owner = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            collectionId: marshal.bigint.toJSON(this.collectionId),
            owner: this.owner,
        }
    }
}
