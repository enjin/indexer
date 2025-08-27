import assert from "assert"
import * as marshal from "./marshal"
import {NominationPool} from "./nominationPool.model"
import {Account} from "./account.model"
import {CommissionPayment} from "./_commissionPayment"

export class NominationPoolsRewardPaid {
    public readonly isTypeOf = 'NominationPoolsRewardPaid'
    private _pool!: string
    private _era!: number
    private _validatorStash!: string
    private _reward!: bigint
    private _bonus!: bigint | undefined | null
    private _poolId!: string
    private _commission!: CommissionPayment | undefined | null

    constructor(props?: Partial<Omit<NominationPoolsRewardPaid, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._pool = marshal.string.fromJSON(json.pool)
            this._era = marshal.int.fromJSON(json.era)
            this._validatorStash = marshal.string.fromJSON(json.validatorStash)
            this._reward = marshal.bigint.fromJSON(json.reward)
            this._bonus = json.bonus == null ? undefined : marshal.bigint.fromJSON(json.bonus)
            this._poolId = marshal.string.fromJSON(json.poolId)
            this._commission = json.commission == null ? undefined : new CommissionPayment(undefined, json.commission)
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

    get bonus(): bigint | undefined | null {
        return this._bonus
    }

    set bonus(value: bigint | undefined | null) {
        this._bonus = value
    }

    get poolId(): string {
        assert(this._poolId != null, 'uninitialized access')
        return this._poolId
    }

    set poolId(value: string) {
        this._poolId = value
    }

    get commission(): CommissionPayment | undefined | null {
        return this._commission
    }

    set commission(value: CommissionPayment | undefined | null) {
        this._commission = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            pool: this.pool,
            era: this.era,
            validatorStash: this.validatorStash,
            reward: marshal.bigint.toJSON(this.reward),
            bonus: this.bonus == null ? undefined : marshal.bigint.toJSON(this.bonus),
            poolId: this.poolId,
            commission: this.commission == null ? undefined : this.commission.toJSON(),
        }
    }
}
