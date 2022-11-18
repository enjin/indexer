import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"

export class MintEvent {
  public readonly isTypeOf = 'MintEvent'
  private _to!: string
  private _amount!: bigint

  constructor(props?: Partial<Omit<MintEvent, 'toJSON'>>, json?: any) {
    Object.assign(this, props)
    if (json != null) {
      this._to = marshal.string.fromJSON(json.to)
      this._amount = marshal.bigint.fromJSON(json.amount)
    }
  }

  get to(): string {
    assert(this._to != null, 'uninitialized access')
    return this._to
  }

  set to(value: string) {
    this._to = value
  }

  get amount(): bigint {
    assert(this._amount != null, 'uninitialized access')
    return this._amount
  }

  set amount(value: bigint) {
    this._amount = value
  }

  toJSON(): object {
    return {
      isTypeOf: this.isTypeOf,
      to: this.to,
      amount: marshal.bigint.toJSON(this.amount),
    }
  }
}
