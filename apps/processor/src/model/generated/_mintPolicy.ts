import assert from "assert"
import * as marshal from "./marshal"

export class MintPolicy {
    private _maxTokenCount!: bigint | undefined | null
    private _maxTokenSupply!: bigint | undefined | null
    private _forceSingleMint!: boolean

    constructor(props?: Partial<Omit<MintPolicy, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._maxTokenCount = json.maxTokenCount == null ? undefined : marshal.bigint.fromJSON(json.maxTokenCount)
            this._maxTokenSupply = json.maxTokenSupply == null ? undefined : marshal.bigint.fromJSON(json.maxTokenSupply)
            this._forceSingleMint = marshal.boolean.fromJSON(json.forceSingleMint)
        }
    }

    get maxTokenCount(): bigint | undefined | null {
        return this._maxTokenCount
    }

    set maxTokenCount(value: bigint | undefined | null) {
        this._maxTokenCount = value
    }

    get maxTokenSupply(): bigint | undefined | null {
        return this._maxTokenSupply
    }

    set maxTokenSupply(value: bigint | undefined | null) {
        this._maxTokenSupply = value
    }

    get forceSingleMint(): boolean {
        assert(this._forceSingleMint != null, 'uninitialized access')
        return this._forceSingleMint
    }

    set forceSingleMint(value: boolean) {
        this._forceSingleMint = value
    }

    toJSON(): object {
        return {
            maxTokenCount: this.maxTokenCount == null ? undefined : marshal.bigint.toJSON(this.maxTokenCount),
            maxTokenSupply: this.maxTokenSupply == null ? undefined : marshal.bigint.toJSON(this.maxTokenSupply),
            forceSingleMint: this.forceSingleMint,
        }
    }
}
