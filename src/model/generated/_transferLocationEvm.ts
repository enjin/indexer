import assert from "assert"
import * as marshal from "./marshal"

export class TransferLocationEvm {
  public readonly isTypeOf = 'TransferLocationEvm'
  private _address!: string

  constructor(props?: Partial<Omit<TransferLocationEvm, 'toJSON'>>, json?: any) {
    Object.assign(this, props)
    if (json != null) {
      this._address = marshal.string.fromJSON(json.address)
    }
  }

  get address(): string {
    assert(this._address != null, 'uninitialized access')
    return this._address
  }

  set address(value: string) {
    this._address = value
  }

  toJSON(): object {
    return {
      isTypeOf: this.isTypeOf,
      address: this.address,
    }
  }
}
