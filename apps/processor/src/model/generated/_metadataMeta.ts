import assert from "assert"
import * as marshal from "./marshal"

export class MetadataMeta {
    private _version!: number
    private _language!: string | undefined | null
    private _sensitiveContent!: string | undefined | null

    constructor(props?: Partial<Omit<MetadataMeta, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._version = marshal.float.fromJSON(json.version)
            this._language = json.language == null ? undefined : marshal.string.fromJSON(json.language)
            this._sensitiveContent = json.sensitiveContent == null ? undefined : marshal.string.fromJSON(json.sensitiveContent)
        }
    }

    get version(): number {
        assert(this._version != null, 'uninitialized access')
        return this._version
    }

    set version(value: number) {
        this._version = value
    }

    get language(): string | undefined | null {
        return this._language
    }

    set language(value: string | undefined | null) {
        this._language = value
    }

    get sensitiveContent(): string | undefined | null {
        return this._sensitiveContent
    }

    set sensitiveContent(value: string | undefined | null) {
        this._sensitiveContent = value
    }

    toJSON(): object {
        return {
            version: this.version,
            language: this.language,
            sensitiveContent: this.sensitiveContent,
        }
    }
}
