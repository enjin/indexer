import assert from "assert"
import * as marshal from "./marshal"

export class AssetId {
  private _collectionId!: bigint
  private _tokenId!: bigint

  constructor(props?: Partial<Omit<AssetId, 'toJSON'>>, json?: any) {
    Object.assign(this, props)
    if (json != null) {
      this._collectionId = marshal.bigint.fromJSON(json.collectionId)
      this._tokenId = marshal.bigint.fromJSON(json.tokenId)
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

  toJSON(): object {
    return {
      collectionId: marshal.bigint.toJSON(this.collectionId),
      tokenId: marshal.bigint.toJSON(this.tokenId),
    }
  }
}
