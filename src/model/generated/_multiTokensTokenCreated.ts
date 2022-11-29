import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"

export class MultiTokensTokenCreated {
    public readonly isTypeOf = 'MultiTokensTokenCreated'
    private _collectionId!: bigint
    private _tokenId!: bigint
    private _issuer!: string
    private _initialSupply!: bigint

    constructor(props?: Partial<Omit<MultiTokensTokenCreated, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId)
            this._tokenId = marshal.bigint.fromJSON(json.tokenId)
            this._issuer = marshal.string.fromJSON(json.issuer)
            this._initialSupply = marshal.bigint.fromJSON(json.initialSupply)
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

    get issuer(): string {
        assert(this._issuer != null, 'uninitialized access')
        return this._issuer
    }

    set issuer(value: string) {
        this._issuer = value
    }

    get initialSupply(): bigint {
        assert(this._initialSupply != null, 'uninitialized access')
        return this._initialSupply
    }

    set initialSupply(value: bigint) {
        this._initialSupply = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            collectionId: marshal.bigint.toJSON(this.collectionId),
            tokenId: marshal.bigint.toJSON(this.tokenId),
            issuer: this.issuer,
            initialSupply: marshal.bigint.toJSON(this.initialSupply),
        }
    }
}
