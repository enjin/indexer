import assert from "assert"
import * as marshal from "./marshal"

export class CollectionStats {
  private _floorPrice!: bigint | undefined | null
  private _lastSale!: bigint | undefined | null
  private _highestSale!: bigint | undefined | null
  private _tokenCount!: number
  private _salesCount!: number
  private _rank!: number
  private _marketCap!: bigint
  private _volume!: bigint

  constructor(props?: Partial<Omit<CollectionStats, 'toJSON'>>, json?: any) {
    Object.assign(this, props)
    if (json != null) {
      this._floorPrice = json.floorPrice == null ? undefined : marshal.bigint.fromJSON(json.floorPrice)
      this._lastSale = json.lastSale == null ? undefined : marshal.bigint.fromJSON(json.lastSale)
      this._highestSale = json.highestSale == null ? undefined : marshal.bigint.fromJSON(json.highestSale)
      this._tokenCount = marshal.int.fromJSON(json.tokenCount)
      this._salesCount = marshal.int.fromJSON(json.salesCount)
      this._rank = marshal.int.fromJSON(json.rank)
      this._marketCap = marshal.bigint.fromJSON(json.marketCap)
      this._volume = marshal.bigint.fromJSON(json.volume)
    }
  }

  get floorPrice(): bigint | undefined | null {
    return this._floorPrice
  }

  set floorPrice(value: bigint | undefined | null) {
    this._floorPrice = value
  }

  get lastSale(): bigint | undefined | null {
    return this._lastSale
  }

  set lastSale(value: bigint | undefined | null) {
    this._lastSale = value
  }

  get highestSale(): bigint | undefined | null {
    return this._highestSale
  }

  set highestSale(value: bigint | undefined | null) {
    this._highestSale = value
  }

  get tokenCount(): number {
    assert(this._tokenCount != null, 'uninitialized access')
    return this._tokenCount
  }

  set tokenCount(value: number) {
    this._tokenCount = value
  }

  get salesCount(): number {
    assert(this._salesCount != null, 'uninitialized access')
    return this._salesCount
  }

  set salesCount(value: number) {
    this._salesCount = value
  }

  get rank(): number {
    assert(this._rank != null, 'uninitialized access')
    return this._rank
  }

  set rank(value: number) {
    this._rank = value
  }

  get marketCap(): bigint {
    assert(this._marketCap != null, 'uninitialized access')
    return this._marketCap
  }

  set marketCap(value: bigint) {
    this._marketCap = value
  }

  get volume(): bigint {
    assert(this._volume != null, 'uninitialized access')
    return this._volume
  }

  set volume(value: bigint) {
    this._volume = value
  }

  toJSON(): object {
    return {
      floorPrice: this.floorPrice == null ? undefined : marshal.bigint.toJSON(this.floorPrice),
      lastSale: this.lastSale == null ? undefined : marshal.bigint.toJSON(this.lastSale),
      highestSale: this.highestSale == null ? undefined : marshal.bigint.toJSON(this.highestSale),
      tokenCount: this.tokenCount,
      salesCount: this.salesCount,
      rank: this.rank,
      marketCap: marshal.bigint.toJSON(this.marketCap),
      volume: marshal.bigint.toJSON(this.volume),
    }
  }
}
