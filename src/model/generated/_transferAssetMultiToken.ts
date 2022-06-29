import assert from "assert"
import * as marshal from "./marshal"
import {TransferAssetToken} from "./_transferAssetToken"

export class TransferAssetMultiToken {
  public readonly isTypeOf = 'TransferAssetMultiToken'
  private _tokens!: (TransferAssetToken | undefined | null)[] | undefined | null

  constructor(props?: Partial<Omit<TransferAssetMultiToken, 'toJSON'>>, json?: any) {
    Object.assign(this, props)
    if (json != null) {
      this._tokens = json.tokens == null ? undefined : marshal.fromList(json.tokens, val => val == null ? undefined : new TransferAssetToken(undefined, val))
    }
  }

  get tokens(): (TransferAssetToken | undefined | null)[] | undefined | null {
    return this._tokens
  }

  set tokens(value: (TransferAssetToken | undefined | null)[] | undefined | null) {
    this._tokens = value
  }

  toJSON(): object {
    return {
      isTypeOf: this.isTypeOf,
      tokens: this.tokens == null ? undefined : this.tokens.map((val: any) => val == null ? undefined : val.toJSON()),
    }
  }
}
