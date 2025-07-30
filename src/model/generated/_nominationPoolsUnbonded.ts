import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"
import {PoolState} from "./_poolState"

export class NominationPoolsUnbonded {
    public readonly isTypeOf = 'NominationPoolsUnbonded'
    private _account!: string
    private _unbondingPoints!: bigint
    private _balance!: bigint
    private _pool!: string
    private _era!: number
    private _tokenId!: bigint | undefined | null
    private _state!: PoolState

    constructor(props?: Partial<Omit<NominationPoolsUnbonded, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._account = marshal.string.fromJSON(json.account)
            this._unbondingPoints = marshal.bigint.fromJSON(json.unbondingPoints)
            this._balance = marshal.bigint.fromJSON(json.balance)
            this._pool = marshal.string.fromJSON(json.pool)
            this._era = marshal.int.fromJSON(json.era)
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

    get unbondingPoints(): bigint {
        assert(this._unbondingPoints != null, 'uninitialized access')
        return this._unbondingPoints
    }

    set unbondingPoints(value: bigint) {
        this._unbondingPoints = value
    }

    get balance(): bigint {
        assert(this._balance != null, 'uninitialized access')
        return this._balance
    }

    set balance(value: bigint) {
        this._balance = value
    }

    get pool(): string {
        assert(this._pool != null, 'uninitialized access')
        return this._pool
    }

    set pool(value: string) {
        this._pool = value
    }

    get era(): number {
        assert(this._era != null, 'uninitialized access')
        return this._era
    }

    set era(value: number) {
        this._era = value
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
            unbondingPoints: marshal.bigint.toJSON(this.unbondingPoints),
            balance: marshal.bigint.toJSON(this.balance),
            pool: this.pool,
            era: this.era,
            tokenId: this.tokenId == null ? undefined : marshal.bigint.toJSON(this.tokenId),
            state: this.state,
        }
    }
}
