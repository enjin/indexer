import assert from "assert"
import * as marshal from "./marshal"
import {Extrinsic} from "./extrinsic.model"

export class MultiTokensFrozen {
    public readonly isTypeOf = 'MultiTokensFrozen'
    private _extrinsic!: string | undefined | null
    private _kind!: string | undefined | null
    private _collectionId!: bigint | undefined | null
    private _tokenId!: bigint | undefined | null
    private _tokenGroupId!: bigint | undefined | null
    private _attributeKey!: string | undefined | null
    private _targetAccount!: string | undefined | null

    constructor(props?: Partial<Omit<MultiTokensFrozen, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._extrinsic = json.extrinsic == null ? undefined : marshal.string.fromJSON(json.extrinsic)
            this._kind = json.kind == null ? undefined : marshal.string.fromJSON(json.kind)
            this._collectionId = json.collectionId == null ? undefined : marshal.bigint.fromJSON(json.collectionId)
            this._tokenId = json.tokenId == null ? undefined : marshal.bigint.fromJSON(json.tokenId)
            this._tokenGroupId = json.tokenGroupId == null ? undefined : marshal.bigint.fromJSON(json.tokenGroupId)
            this._attributeKey = json.attributeKey == null ? undefined : marshal.string.fromJSON(json.attributeKey)
            this._targetAccount = json.targetAccount == null ? undefined : marshal.string.fromJSON(json.targetAccount)
        }
    }

    get extrinsic(): string | undefined | null {
        return this._extrinsic
    }

    set extrinsic(value: string | undefined | null) {
        this._extrinsic = value
    }

    get kind(): string | undefined | null {
        return this._kind
    }

    set kind(value: string | undefined | null) {
        this._kind = value
    }

    get collectionId(): bigint | undefined | null {
        return this._collectionId
    }

    set collectionId(value: bigint | undefined | null) {
        this._collectionId = value
    }

    get tokenId(): bigint | undefined | null {
        return this._tokenId
    }

    set tokenId(value: bigint | undefined | null) {
        this._tokenId = value
    }

    get tokenGroupId(): bigint | undefined | null {
        return this._tokenGroupId
    }

    set tokenGroupId(value: bigint | undefined | null) {
        this._tokenGroupId = value
    }

    get attributeKey(): string | undefined | null {
        return this._attributeKey
    }

    set attributeKey(value: string | undefined | null) {
        this._attributeKey = value
    }

    get targetAccount(): string | undefined | null {
        return this._targetAccount
    }

    set targetAccount(value: string | undefined | null) {
        this._targetAccount = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            extrinsic: this.extrinsic,
            kind: this.kind,
            collectionId: this.collectionId == null ? undefined : marshal.bigint.toJSON(this.collectionId),
            tokenId: this.tokenId == null ? undefined : marshal.bigint.toJSON(this.tokenId),
            tokenGroupId: this.tokenGroupId == null ? undefined : marshal.bigint.toJSON(this.tokenGroupId),
            attributeKey: this.attributeKey,
            targetAccount: this.targetAccount,
        }
    }
}
