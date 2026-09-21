import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"
import {MintRateLimit} from "./_mintRateLimit"

export class MultiTokensTokenCreated {
    public readonly isTypeOf = 'MultiTokensTokenCreated'
    private _collectionId!: bigint
    private _tokenId!: bigint
    private _issuer!: string
    private _initialSupply!: bigint
    private _isLendable!: boolean | undefined | null
    private _ephemeralExpiration!: bigint | undefined | null
    private _mintRateLimit!: MintRateLimit | undefined | null

    constructor(props?: Partial<Omit<MultiTokensTokenCreated, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId)
            this._tokenId = marshal.bigint.fromJSON(json.tokenId)
            this._issuer = marshal.string.fromJSON(json.issuer)
            this._initialSupply = marshal.bigint.fromJSON(json.initialSupply)
            this._isLendable = json.isLendable == null ? undefined : marshal.boolean.fromJSON(json.isLendable)
            this._ephemeralExpiration = json.ephemeralExpiration == null ? undefined : marshal.bigint.fromJSON(json.ephemeralExpiration)
            this._mintRateLimit = json.mintRateLimit == null ? undefined : new MintRateLimit(undefined, json.mintRateLimit)
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

    get isLendable(): boolean | undefined | null {
        return this._isLendable
    }

    set isLendable(value: boolean | undefined | null) {
        this._isLendable = value
    }

    get ephemeralExpiration(): bigint | undefined | null {
        return this._ephemeralExpiration
    }

    set ephemeralExpiration(value: bigint | undefined | null) {
        this._ephemeralExpiration = value
    }

    get mintRateLimit(): MintRateLimit | undefined | null {
        return this._mintRateLimit
    }

    set mintRateLimit(value: MintRateLimit | undefined | null) {
        this._mintRateLimit = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            collectionId: marshal.bigint.toJSON(this.collectionId),
            tokenId: marshal.bigint.toJSON(this.tokenId),
            issuer: this.issuer,
            initialSupply: marshal.bigint.toJSON(this.initialSupply),
            isLendable: this.isLendable,
            ephemeralExpiration: this.ephemeralExpiration == null ? undefined : marshal.bigint.toJSON(this.ephemeralExpiration),
            mintRateLimit: this.mintRateLimit == null ? undefined : this.mintRateLimit.toJSON(),
        }
    }
}
