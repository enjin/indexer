import assert from "assert"
import * as marshal from "./marshal"
import {ListingType} from "./_listingType"

export class FixedPriceState {
  public readonly isTypeOf = 'FixedPriceState'
  private _listingType!: ListingType
  private _amountRemaining!: bigint

  constructor(props?: Partial<Omit<FixedPriceState, 'toJSON'>>, json?: any) {
    Object.assign(this, props)
    if (json != null) {
      this._listingType = marshal.enumFromJson(json.listingType, ListingType)
      this._amountRemaining = marshal.bigint.fromJSON(json.amountRemaining)
    }
  }

  get listingType(): ListingType {
    assert(this._listingType != null, 'uninitialized access')
    return this._listingType
  }

  set listingType(value: ListingType) {
    this._listingType = value
  }

  get amountRemaining(): bigint {
    assert(this._amountRemaining != null, 'uninitialized access')
    return this._amountRemaining
  }

  set amountRemaining(value: bigint) {
    this._amountRemaining = value
  }

  toJSON(): object {
    return {
      isTypeOf: this.isTypeOf,
      listingType: this.listingType,
      amountRemaining: marshal.bigint.toJSON(this.amountRemaining),
    }
  }
}
