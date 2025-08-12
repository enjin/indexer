import assert from "assert"
import * as marshal from "./marshal"

export class MultiTokensTokenGroupsUpdated {
    public readonly isTypeOf = 'MultiTokensTokenGroupsUpdated'
    private _collectionId!: bigint
    private _tokenId!: bigint
    private _tokenGroups!: (bigint)[]

    constructor(props?: Partial<Omit<MultiTokensTokenGroupsUpdated, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId)
            this._tokenId = marshal.bigint.fromJSON(json.tokenId)
            this._tokenGroups = marshal.fromList(json.tokenGroups, val => marshal.bigint.fromJSON(val))
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

    get tokenGroups(): (bigint)[] {
        assert(this._tokenGroups != null, 'uninitialized access')
        return this._tokenGroups
    }

    set tokenGroups(value: (bigint)[]) {
        this._tokenGroups = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            collectionId: marshal.bigint.toJSON(this.collectionId),
            tokenId: marshal.bigint.toJSON(this.tokenId),
            tokenGroups: this.tokenGroups.map((val: any) => marshal.bigint.toJSON(val)),
        }
    }
}
