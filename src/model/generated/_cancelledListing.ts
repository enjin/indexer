import assert from "assert"
import * as marshal from "./marshal"
import {ListingStatusType} from "./_listingStatusType"

export class CancelledListing {
  public readonly isTypeOf = 'CancelledListing'
  private _listingStatus!: ListingStatusType
  private _height!: number | undefined | null
  private _createdAt!: Date | undefined | null

  constructor(props?: Partial<Omit<CancelledListing, 'toJSON'>>, json?: any) {
    Object.assign(this, props)
    if (json != null) {
      this._listingStatus = marshal.enumFromJson(json.listingStatus, ListingStatusType)
      this._height = json.height == null ? undefined : marshal.int.fromJSON(json.height)
      this._createdAt = json.createdAt == null ? undefined : marshal.datetime.fromJSON(json.createdAt)
    }
  }

  get listingStatus(): ListingStatusType {
    assert(this._listingStatus != null, 'uninitialized access')
    return this._listingStatus
  }

  set listingStatus(value: ListingStatusType) {
    this._listingStatus = value
  }

  get height(): number | undefined | null {
    return this._height
  }

  set height(value: number | undefined | null) {
    this._height = value
  }

  get createdAt(): Date | undefined | null {
    return this._createdAt
  }

  set createdAt(value: Date | undefined | null) {
    this._createdAt = value
  }

  toJSON(): object {
    return {
      isTypeOf: this.isTypeOf,
      listingStatus: this.listingStatus,
      height: this.height,
      createdAt: this.createdAt == null ? undefined : marshal.datetime.toJSON(this.createdAt),
    }
  }
}
