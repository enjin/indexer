import assert from "assert"
import * as marshal from "./marshal"

export class Marketplace {
  private _protocolFee!: number
  private _fixedPriceListingCount!: number
  private _auctionListingCount!: number

  constructor(props?: Partial<Omit<Marketplace, 'toJSON'>>, json?: any) {
    Object.assign(this, props)
    if (json != null) {
      this._protocolFee = marshal.float.fromJSON(json.protocolFee)
      this._fixedPriceListingCount = marshal.int.fromJSON(json.fixedPriceListingCount)
      this._auctionListingCount = marshal.int.fromJSON(json.auctionListingCount)
    }
  }

  get protocolFee(): number {
    assert(this._protocolFee != null, 'uninitialized access')
    return this._protocolFee
  }

  set protocolFee(value: number) {
    this._protocolFee = value
  }

  get fixedPriceListingCount(): number {
    assert(this._fixedPriceListingCount != null, 'uninitialized access')
    return this._fixedPriceListingCount
  }

  set fixedPriceListingCount(value: number) {
    this._fixedPriceListingCount = value
  }

  get auctionListingCount(): number {
    assert(this._auctionListingCount != null, 'uninitialized access')
    return this._auctionListingCount
  }

  set auctionListingCount(value: number) {
    this._auctionListingCount = value
  }

  toJSON(): object {
    return {
      protocolFee: this.protocolFee,
      fixedPriceListingCount: this.fixedPriceListingCount,
      auctionListingCount: this.auctionListingCount,
    }
  }
}
