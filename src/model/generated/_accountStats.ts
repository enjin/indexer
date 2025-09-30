import assert from "assert"
import * as marshal from "./marshal"

export class AccountStats {
    private _totalCollections!: number
    private _totalTokens!: number
    private _volume!: bigint
    private _tokensValue!: bigint

    constructor(props?: Partial<Omit<AccountStats, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._totalCollections = marshal.int.fromJSON(json.totalCollections)
            this._totalTokens = marshal.int.fromJSON(json.totalTokens)
            this._volume = marshal.bigint.fromJSON(json.volume)
            this._tokensValue = marshal.bigint.fromJSON(json.tokensValue)
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

    get tokensValue(): bigint {
        assert(this._tokensValue != null, 'uninitialized access')
        return this._tokensValue
    }

    set tokensValue(value: bigint) {
        this._tokensValue = value
    }

    toJSON(): object {
        return {
            totalCollections: this.totalCollections,
            totalTokens: this.totalTokens,
            volume: marshal.bigint.toJSON(this.volume),
            tokensValue: marshal.bigint.toJSON(this.tokensValue),
        }
    }
}
