import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"

export class BurnEvent {
  public readonly isTypeOf = 'BurnEvent'
  private _from!: string
  private _amount!: bigint

  constructor(props?: Partial<Omit<BurnEvent, 'toJSON'>>, json?: any) {
    Object.assign(this, props)
    if (json != null) {
      this._from = marshal.string.fromJSON(json.from)
      this._amount = marshal.bigint.fromJSON(json.amount)
    }
  }

  get from(): string {
    assert(this._from != null, 'uninitialized access')
    return this._from
  }

  set from(value: string) {
    this._from = value
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
      from: this.from,
      amount: marshal.bigint.toJSON(this.amount),
    }
  }
}
