import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"

export class MultiTokensCollectionDestroyed {
    public readonly isTypeOf = 'MultiTokensCollectionDestroyed'
    private _collectionId!: bigint
    private _caller!: string

    constructor(props?: Partial<Omit<MultiTokensCollectionDestroyed, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId)
            this._caller = marshal.string.fromJSON(json.caller)
        }
    }

    get collectionId(): bigint {
        assert(this._collectionId != null, 'uninitialized access')
        return this._collectionId
    }

    set collectionId(value: bigint) {
        this._collectionId = value
    }

    get caller(): string {
        assert(this._caller != null, 'uninitialized access')
        return this._caller
    }

    set caller(value: string) {
        this._caller = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            collectionId: marshal.bigint.toJSON(this.collectionId),
            caller: this.caller,
        }
    }
}
