import assert from "assert"
import * as marshal from "./marshal"
import {EraReward} from "./eraReward.model"

export class NominationPoolsEraRewardsProcessed {
    public readonly isTypeOf = 'NominationPoolsEraRewardsProcessed'
    private _pool!: string
    private _era!: number
    private _eraReward!: string
    private _rate!: bigint

    constructor(props?: Partial<Omit<NominationPoolsEraRewardsProcessed, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._pool = marshal.string.fromJSON(json.pool)
            this._era = marshal.int.fromJSON(json.era)
            this._eraReward = marshal.string.fromJSON(json.eraReward)
            this._rate = marshal.bigint.fromJSON(json.rate)
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

    get eraReward(): string {
        assert(this._eraReward != null, 'uninitialized access')
        return this._eraReward
    }

    set eraReward(value: string) {
        this._eraReward = value
    }

    get rate(): bigint {
        assert(this._rate != null, 'uninitialized access')
        return this._rate
    }

    set rate(value: bigint) {
        this._rate = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            pool: this.pool,
            era: this.era,
            eraReward: this.eraReward,
            rate: marshal.bigint.toJSON(this.rate),
        }
    }
}
