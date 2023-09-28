import assert from "assert"
import * as marshal from "./marshal"

export class CollectionFlags {
    private _hiddenForLegalReasons!: boolean
    private _featured!: boolean
    private _verified!: boolean

    constructor(props?: Partial<Omit<CollectionFlags, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._hiddenForLegalReasons = marshal.boolean.fromJSON(json.hiddenForLegalReasons)
            this._featured = marshal.boolean.fromJSON(json.featured)
            this._verified = marshal.boolean.fromJSON(json.verified)
        }
    }

    get hiddenForLegalReasons(): boolean {
        assert(this._hiddenForLegalReasons != null, 'uninitialized access')
        return this._hiddenForLegalReasons
    }

    set hiddenForLegalReasons(value: boolean) {
        this._hiddenForLegalReasons = value
    }

    get featured(): boolean {
        assert(this._featured != null, 'uninitialized access')
        return this._featured
    }

    set featured(value: boolean) {
        this._featured = value
    }

    get verified(): boolean {
        assert(this._verified != null, 'uninitialized access')
        return this._verified
    }

    set verified(value: boolean) {
        this._verified = value
    }

    toJSON(): object {
        return {
            hiddenForLegalReasons: this.hiddenForLegalReasons,
            featured: this.featured,
            verified: this.verified,
        }
    }
}
