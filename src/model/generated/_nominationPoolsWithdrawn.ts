import assert from "assert"
import * as marshal from "./marshal"
import {NominationPool} from "./nominationPool.model"
import {Account} from "./account.model"

export class NominationPoolsWithdrawn {
    public readonly isTypeOf = 'NominationPoolsWithdrawn'
    private _pool!: string
    private _account!: string
    private _balance!: bigint
    private _points!: bigint
    private _numSlashingSpans!: number | undefined | null
    private _poolId!: string
    private _tokenId!: bigint

    constructor(props?: Partial<Omit<NominationPoolsWithdrawn, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._pool = marshal.string.fromJSON(json.pool)
            this._account = marshal.string.fromJSON(json.account)
            this._balance = marshal.bigint.fromJSON(json.balance)
            this._points = marshal.bigint.fromJSON(json.points)
            this._numSlashingSpans = json.numSlashingSpans == null ? undefined : marshal.int.fromJSON(json.numSlashingSpans)
            this._poolId = marshal.string.fromJSON(json.poolId)
            this._tokenId = marshal.bigint.fromJSON(json.tokenId)
        }
    }

    get pool(): string {
        assert(this._pool != null, 'uninitialized access')
        return this._pool
    }

    set pool(value: string) {
        this._pool = value
    }

    get account(): string {
        assert(this._account != null, 'uninitialized access')
        return this._account
    }

    set account(value: string) {
        this._account = value
    }

    get balance(): bigint {
        assert(this._balance != null, 'uninitialized access')
        return this._balance
    }

    set balance(value: bigint) {
        this._balance = value
    }

    get points(): bigint {
        assert(this._points != null, 'uninitialized access')
        return this._points
    }

    set points(value: bigint) {
        this._points = value
    }

    get numSlashingSpans(): number | undefined | null {
        return this._numSlashingSpans
    }

    set numSlashingSpans(value: number | undefined | null) {
        this._numSlashingSpans = value
    }

    get poolId(): string {
        assert(this._poolId != null, 'uninitialized access')
        return this._poolId
    }

    set poolId(value: string) {
        this._poolId = value
    }

    get tokenId(): bigint {
        assert(this._tokenId != null, 'uninitialized access')
        return this._tokenId
    }

    set tokenId(value: bigint) {
        this._tokenId = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            pool: this.pool,
            account: this.account,
            balance: marshal.bigint.toJSON(this.balance),
            points: marshal.bigint.toJSON(this.points),
            numSlashingSpans: this.numSlashingSpans,
            poolId: this.poolId,
            tokenId: marshal.bigint.toJSON(this.tokenId),
        }
    }
}
