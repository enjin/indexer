import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"

export class TransferEvent {
  public readonly isTypeOf = 'TransferEvent'
  private _from!: string
  private _to!: string

  constructor(props?: Partial<Omit<TransferEvent, 'toJSON'>>, json?: any) {
    Object.assign(this, props)
    if (json != null) {
      this._from = marshal.string.fromJSON(json.from)
      this._to = marshal.string.fromJSON(json.to)
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

  toJSON(): object {
    return {
      isTypeOf: this.isTypeOf,
      from: this.from,
      to: this.to,
    }
  }
}
