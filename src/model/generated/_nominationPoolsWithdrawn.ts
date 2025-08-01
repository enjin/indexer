import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"
import {PoolState} from "./_poolState"

export class NominationPoolsWithdrawn {
    public readonly isTypeOf = 'NominationPoolsWithdrawn'
    private _account!: string
    private _balance!: bigint
    private _points!: bigint
    private _numSlashingSpans!: number | undefined | null
    private _pool!: string
    private _tokenId!: bigint | undefined | null
    private _state!: PoolState

    constructor(props?: Partial<Omit<NominationPoolsWithdrawn, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._account = marshal.string.fromJSON(json.account)
            this._balance = marshal.bigint.fromJSON(json.balance)
            this._points = marshal.bigint.fromJSON(json.points)
            this._numSlashingSpans = json.numSlashingSpans == null ? undefined : marshal.int.fromJSON(json.numSlashingSpans)
            this._pool = marshal.string.fromJSON(json.pool)
            this._tokenId = json.tokenId == null ? undefined : marshal.bigint.fromJSON(json.tokenId)
            this._state = marshal.enumFromJson(json.state, PoolState)
        }
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

    get state(): PoolState {
        assert(this._state != null, 'uninitialized access')
        return this._state
    }

    set state(value: PoolState) {
        this._state = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            account: this.account,
            balance: marshal.bigint.toJSON(this.balance),
            points: marshal.bigint.toJSON(this.points),
            numSlashingSpans: this.numSlashingSpans,
            pool: this.pool,
            tokenId: this.tokenId == null ? undefined : marshal.bigint.toJSON(this.tokenId),
            state: this.state,
        }
    }
}
