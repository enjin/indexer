import assert from "assert"
import * as marshal from "./marshal"

export class FuelTankConsumptionSet {
    public readonly isTypeOf = 'FuelTankConsumptionSet'
    private _tank!: string
    private _user!: string | undefined | null
    private _ruleSetId!: number
    private _totalConsumed!: bigint
    private _lastResetBlock!: number | undefined | null

    constructor(props?: Partial<Omit<FuelTankConsumptionSet, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._tank = marshal.string.fromJSON(json.tank)
            this._user = json.user == null ? undefined : marshal.string.fromJSON(json.user)
            this._ruleSetId = marshal.int.fromJSON(json.ruleSetId)
            this._totalConsumed = marshal.bigint.fromJSON(json.totalConsumed)
            this._lastResetBlock = json.lastResetBlock == null ? undefined : marshal.int.fromJSON(json.lastResetBlock)
        }
    }

    get tank(): string {
        assert(this._tank != null, 'uninitialized access')
        return this._tank
    }

    set tank(value: string) {
        this._tank = value
    }

    get user(): string | undefined | null {
        return this._user
    }

    set user(value: string | undefined | null) {
        this._user = value
    }

    get ruleSetId(): number {
        assert(this._ruleSetId != null, 'uninitialized access')
        return this._ruleSetId
    }

    set ruleSetId(value: number) {
        this._ruleSetId = value
    }

    get totalConsumed(): bigint {
        assert(this._totalConsumed != null, 'uninitialized access')
        return this._totalConsumed
    }

    set totalConsumed(value: bigint) {
        this._totalConsumed = value
    }

    get lastResetBlock(): number | undefined | null {
        return this._lastResetBlock
    }

    set lastResetBlock(value: number | undefined | null) {
        this._lastResetBlock = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            tank: this.tank,
            user: this.user,
            ruleSetId: this.ruleSetId,
            totalConsumed: marshal.bigint.toJSON(this.totalConsumed),
            lastResetBlock: this.lastResetBlock,
        }
    }
}
