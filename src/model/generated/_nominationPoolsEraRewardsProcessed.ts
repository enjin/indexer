import assert from "assert"
import * as marshal from "./marshal"
import {NominationPool} from "./nominationPool.model"
import {EraReward} from "./eraReward.model"

export class NominationPoolsEraRewardsProcessed {
    public readonly isTypeOf = 'NominationPoolsEraRewardsProcessed'
    private _pool!: string
    private _era!: number
    private _eraReward!: string
    private _rate!: bigint | undefined | null
    private _poolId!: string
    private _tokenId!: bigint

    constructor(props?: Partial<Omit<NominationPoolsEraRewardsProcessed, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._pool = marshal.string.fromJSON(json.pool)
            this._era = marshal.int.fromJSON(json.era)
            this._eraReward = marshal.string.fromJSON(json.eraReward)
            this._rate = json.rate == null ? undefined : marshal.bigint.fromJSON(json.rate)
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

    get rate(): bigint | undefined | null {
        return this._rate
    }

    set rate(value: bigint | undefined | null) {
        this._rate = value
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
            era: this.era,
            eraReward: this.eraReward,
            rate: this.rate == null ? undefined : marshal.bigint.toJSON(this.rate),
            poolId: this.poolId,
            tokenId: marshal.bigint.toJSON(this.tokenId),
        }
    }
}
