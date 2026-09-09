import assert from "assert"
import * as marshal from "./marshal"

export class MultiTokensTokenReturned {
    public readonly isTypeOf = 'MultiTokensTokenReturned'
    private _collectionId!: bigint
    private _tokenId!: bigint
    private _lender!: string
    private _borrower!: string
    private _observedBlock!: bigint

    constructor(props?: Partial<Omit<MultiTokensTokenReturned, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._collectionId = marshal.bigint.fromJSON(json.collectionId)
            this._tokenId = marshal.bigint.fromJSON(json.tokenId)
            this._lender = marshal.string.fromJSON(json.lender)
            this._borrower = marshal.string.fromJSON(json.borrower)
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

    get lender(): string {
        assert(this._lender != null, 'uninitialized access')
        return this._lender
    }

    set lender(value: string) {
        this._lender = value
    }

    get borrower(): string {
        assert(this._borrower != null, 'uninitialized access')
        return this._borrower
    }

    set borrower(value: string) {
        this._borrower = value
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
            lender: this.lender,
            borrower: this.borrower,
            observedBlock: marshal.bigint.toJSON(this.observedBlock),
        }
    }
}
