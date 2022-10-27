import assert from "assert"
import * as marshal from "./marshal"
import {BehaviorType} from "./_behaviorType"

export class TokenBehaviorIsCurrency {
  public readonly isTypeOf = 'TokenBehaviorIsCurrency'
  private _type!: BehaviorType

  constructor(props?: Partial<Omit<TokenBehaviorIsCurrency, 'toJSON'>>, json?: any) {
    Object.assign(this, props)
    if (json != null) {
      this._type = marshal.enumFromJson(json.type, BehaviorType)
    }
  }

  get type(): BehaviorType {
    assert(this._type != null, 'uninitialized access')
    return this._type
  }

  set type(value: BehaviorType) {
    this._type = value
  }

  toJSON(): object {
    return {
      isTypeOf: this.isTypeOf,
      type: this.type,
    }
  }
}
