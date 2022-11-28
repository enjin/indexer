import assert from "assert"
import * as marshal from "./marshal"

export class MetadataMedia {
    private _url!: string
    private _alt!: string | undefined | null
    private _type!: string | undefined | null

    constructor(props?: Partial<Omit<MetadataMedia, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._url = marshal.string.fromJSON(json.url)
            this._alt = json.alt == null ? undefined : marshal.string.fromJSON(json.alt)
            this._type = json.type == null ? undefined : marshal.string.fromJSON(json.type)
        }
    }

    get url(): string {
        assert(this._url != null, 'uninitialized access')
        return this._url
    }

    set url(value: string) {
        this._url = value
    }

    get alt(): string | undefined | null {
        return this._alt
    }

    set alt(value: string | undefined | null) {
        this._alt = value
    }

    get type(): string | undefined | null {
        return this._type
    }

    set type(value: string | undefined | null) {
        this._type = value
    }

    toJSON(): object {
        return {
            url: this.url,
            alt: this.alt,
            type: this.type,
        }
    }
}
