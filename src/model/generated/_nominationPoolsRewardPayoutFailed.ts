import assert from "assert"
import * as marshal from "./marshal"
import {NominationPool} from "./nominationPool.model"
import {Account} from "./account.model"

export class NominationPoolsRewardPayoutFailed {
    public readonly isTypeOf = 'NominationPoolsRewardPayoutFailed'
    private _pool!: string
    private _era!: number
    private _validatorStash!: string
    private _reward!: bigint
    private _error!: string | undefined | null
    private _poolId!: string

    constructor(props?: Partial<Omit<NominationPoolsRewardPayoutFailed, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._pool = marshal.string.fromJSON(json.pool)
            this._era = marshal.int.fromJSON(json.era)
            this._validatorStash = marshal.string.fromJSON(json.validatorStash)
            this._reward = marshal.bigint.fromJSON(json.reward)
            this._error = json.error == null ? undefined : marshal.string.fromJSON(json.error)
            this._poolId = marshal.string.fromJSON(json.poolId)
        }
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

    get validatorStash(): string {
        assert(this._validatorStash != null, 'uninitialized access')
        return this._validatorStash
    }

    set validatorStash(value: string) {
        this._validatorStash = value
    }

    get reward(): bigint {
        assert(this._reward != null, 'uninitialized access')
        return this._reward
    }

    set reward(value: bigint) {
        this._reward = value
    }

    get error(): string | undefined | null {
        return this._error
    }

    set error(value: string | undefined | null) {
        this._error = value
    }

    get poolId(): string {
        assert(this._poolId != null, 'uninitialized access')
        return this._poolId
    }

    set poolId(value: string) {
        this._poolId = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            pool: this.pool,
            era: this.era,
            validatorStash: this.validatorStash,
            reward: marshal.bigint.toJSON(this.reward),
            error: this.error,
            poolId: this.poolId,
        }
    }
}
