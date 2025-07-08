import assert from "assert"
import * as marshal from "./marshal"

export class NominationPoolsCreated {
    public readonly isTypeOf = 'NominationPoolsCreated'
    private _pool!: string
    private _tokenId!: bigint | undefined | null

    constructor(props?: Partial<Omit<NominationPoolsCreated, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._pool = marshal.string.fromJSON(json.pool)
            this._tokenId = json.tokenId == null ? undefined : marshal.bigint.fromJSON(json.tokenId)
        }
    }

    get pool(): string {
        assert(this._pool != null, 'uninitialized access')
        return this._pool
    }

    set pool(value: string) {
        this._pool = value
    }

    get tokenId(): bigint | undefined | null {
        return this._tokenId
    }

    set tokenId(value: bigint | undefined | null) {
        this._tokenId = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            pool: this.pool,
            tokenId: this.tokenId == null ? undefined : marshal.bigint.toJSON(this.tokenId),
        }
    }
}
