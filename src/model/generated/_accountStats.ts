import assert from "assert"
import * as marshal from "./marshal"

export class AccountStats {
    private _totalCollections!: number
    private _totalTokens!: number
    private _volume!: bigint

    constructor(props?: Partial<Omit<AccountStats, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._totalCollections = marshal.int.fromJSON(json.totalCollections)
            this._totalTokens = marshal.int.fromJSON(json.totalTokens)
            this._volume = marshal.bigint.fromJSON(json.volume)
        }
    }

    get totalCollections(): number {
        assert(this._totalCollections != null, 'uninitialized access')
        return this._totalCollections
    }

    set totalCollections(value: number) {
        this._totalCollections = value
    }

    get totalTokens(): number {
        assert(this._totalTokens != null, 'uninitialized access')
        return this._totalTokens
    }

    set totalTokens(value: number) {
        this._totalTokens = value
    }

    get volume(): bigint {
        assert(this._volume != null, 'uninitialized access')
        return this._volume
    }

    set volume(value: bigint) {
        this._volume = value
    }

    toJSON(): object {
        return {
            totalCollections: this.totalCollections,
            totalTokens: this.totalTokens,
            volume: marshal.bigint.toJSON(this.volume),
        }
    }
}
