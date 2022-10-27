import assert from "assert"
import * as marshal from "./marshal"
import {BehaviorType} from "./_behaviorType"
import {Royalty} from "./_royalty"

export class TokenBehaviorHasRoyalty {
  public readonly isTypeOf = 'TokenBehaviorHasRoyalty'
  private _type!: BehaviorType
  private _royalty!: Royalty

  constructor(props?: Partial<Omit<TokenBehaviorHasRoyalty, 'toJSON'>>, json?: any) {
    Object.assign(this, props)
    if (json != null) {
      this._type = marshal.enumFromJson(json.type, BehaviorType)
      this._royalty = new Royalty(undefined, marshal.nonNull(json.royalty))
    }
  }

  get type(): BehaviorType {
    assert(this._type != null, 'uninitialized access')
    return this._type
  }

  set type(value: BehaviorType) {
    this._type = value
  }

  get royalty(): Royalty {
    assert(this._royalty != null, 'uninitialized access')
    return this._royalty
  }

  set royalty(value: Royalty) {
    this._royalty = value
  }

  toJSON(): object {
    return {
      isTypeOf: this.isTypeOf,
      type: this.type,
      royalty: this.royalty.toJSON(),
    }
  }
}
