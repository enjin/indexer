import assert from "assert"
import * as marshal from "./marshal"

export class TransferLocationXcm {
  public readonly isTypeOf = 'TransferLocationXcm'
  private _id!: string | undefined | null
  private _paraId!: number | undefined | null

  constructor(props?: Partial<Omit<TransferLocationXcm, 'toJSON'>>, json?: any) {
    Object.assign(this, props)
    if (json != null) {
      this._id = json.id == null ? undefined : marshal.string.fromJSON(json.id)
      this._paraId = json.paraId == null ? undefined : marshal.int.fromJSON(json.paraId)
    }
  }

  get id(): string | undefined | null {
    return this._id
  }

  set id(value: string | undefined | null) {
    this._id = value
  }

  get paraId(): number | undefined | null {
    return this._paraId
  }

  set paraId(value: number | undefined | null) {
    this._paraId = value
  }

  toJSON(): object {
    return {
      isTypeOf: this.isTypeOf,
      id: this.id,
      paraId: this.paraId,
    }
  }
}
