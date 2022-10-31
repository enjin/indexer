import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"
import {Listing} from "./listing.model"

export class MarketplacePurchaseEvent {
  public readonly isTypeOf = 'MarketplacePurchaseEvent'
  private _from!: string
  private _to!: string
  private _listing!: string

  constructor(props?: Partial<Omit<MarketplacePurchaseEvent, 'toJSON'>>, json?: any) {
    Object.assign(this, props)
    if (json != null) {
      this._from = marshal.string.fromJSON(json.from)
      this._to = marshal.string.fromJSON(json.to)
      this._listing = marshal.string.fromJSON(json.listing)
    }
  }

  get from(): string {
    assert(this._from != null, 'uninitialized access')
    return this._from
  }

  set from(value: string) {
    this._from = value
  }

  get to(): string {
    assert(this._to != null, 'uninitialized access')
    return this._to
  }

  set to(value: string) {
    this._to = value
  }

  get listing(): string {
    assert(this._listing != null, 'uninitialized access')
    return this._listing
  }

  set listing(value: string) {
    this._listing = value
  }

  toJSON(): object {
    return {
      isTypeOf: this.isTypeOf,
      from: this.from,
      to: this.to,
      listing: this.listing,
    }
  }
}
