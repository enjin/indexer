import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"

export class NominationPoolsDestroyed {
    public readonly isTypeOf = 'NominationPoolsDestroyed'
    private _pool!: string
    private _tokenId!: bigint | undefined | null
    private _account!: string

    constructor(props?: Partial<Omit<NominationPoolsDestroyed, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._pool = marshal.string.fromJSON(json.pool)
            this._tokenId = json.tokenId == null ? undefined : marshal.bigint.fromJSON(json.tokenId)
            this._account = marshal.string.fromJSON(json.account)
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

    get account(): string {
        assert(this._account != null, 'uninitialized access')
        return this._account
    }

    set account(value: string) {
        this._account = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            pool: this.pool,
            tokenId: this.tokenId == null ? undefined : marshal.bigint.toJSON(this.tokenId),
            account: this.account,
        }
    }
}
