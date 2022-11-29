import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"

export class MultiTokensCollectionDestroyed {
    public readonly isTypeOf = 'MultiTokensCollectionDestroyed'
    private _collectionId!: bigint
    private _called!: string

    constructor(props?: Partial<Omit<MultiTokensCollectionDestroyed, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId)
            this._called = marshal.string.fromJSON(json.called)
        }
    }

    get collectionId(): bigint {
        assert(this._collectionId != null, 'uninitialized access')
        return this._collectionId
    }

    set collectionId(value: bigint) {
        this._collectionId = value
    }

    get called(): string {
        assert(this._called != null, 'uninitialized access')
        return this._called
    }

    set called(value: string) {
        this._called = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            collectionId: marshal.bigint.toJSON(this.collectionId),
            called: this.called,
        }
    }
}
