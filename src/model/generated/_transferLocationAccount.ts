import assert from "assert"
import * as marshal from "./marshal"

export class TransferLocationAccount {
  public readonly isTypeOf = 'TransferLocationAccount'
  private _id!: string

  constructor(props?: Partial<Omit<TransferLocationAccount, 'toJSON'>>, json?: any) {
    Object.assign(this, props)
    if (json != null) {
      this._id = marshal.string.fromJSON(json.id)
    }
  }

  get id(): string {
    assert(this._id != null, 'uninitialized access')
    return this._id
  }

  set id(value: string) {
    this._id = value
  }

  toJSON(): object {
    return {
      isTypeOf: this.isTypeOf,
      id: this.id,
    }
  }
}
