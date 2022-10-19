import assert from "assert"
import * as marshal from "./marshal"

export class MetadataMedia {
  private _uri!: string
  private _alt!: string | undefined | null
  private _type!: string

  constructor(props?: Partial<Omit<MetadataMedia, 'toJSON'>>, json?: any) {
    Object.assign(this, props)
    if (json != null) {
      this._uri = marshal.string.fromJSON(json.uri)
      this._alt = json.alt == null ? undefined : marshal.string.fromJSON(json.alt)
      this._type = marshal.string.fromJSON(json.type)
    }
  }

  get uri(): string {
    assert(this._uri != null, 'uninitialized access')
    return this._uri
  }

  set uri(value: string) {
    this._uri = value
  }

  get alt(): string | undefined | null {
    return this._alt
  }

  set alt(value: string | undefined | null) {
    this._alt = value
  }

  get type(): string {
    assert(this._type != null, 'uninitialized access')
    return this._type
  }

  set type(value: string) {
    this._type = value
  }

  toJSON(): object {
    return {
      uri: this.uri,
      alt: this.alt,
      type: this.type,
    }
  }
}
