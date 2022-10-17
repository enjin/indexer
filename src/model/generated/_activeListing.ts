import assert from "assert"
import * as marshal from "./marshal"
import {ListingStatusType} from "./_listingStatusType"

export class ActiveListing {
  public readonly isTypeOf = 'ActiveListing'
  private _listingStatus!: ListingStatusType

  constructor(props?: Partial<Omit<ActiveListing, 'toJSON'>>, json?: any) {
    Object.assign(this, props)
    if (json != null) {
      this._listingStatus = marshal.enumFromJson(json.listingStatus, ListingStatusType)
    }
  }

  get listingStatus(): ListingStatusType {
    assert(this._listingStatus != null, 'uninitialized access')
    return this._listingStatus
  }

  set listingStatus(value: ListingStatusType) {
    this._listingStatus = value
  }

  toJSON(): object {
    return {
      isTypeOf: this.isTypeOf,
      listingStatus: this.listingStatus,
    }
  }
}
