import assert from "assert"
import * as marshal from "./marshal"

export class FuelTankAccountRuleDataRemoved {
    public readonly isTypeOf = 'FuelTankAccountRuleDataRemoved'
    private _tank!: string
    private _user!: string
    private _ruleSetId!: number
    private _ruleKind!: string

    constructor(props?: Partial<Omit<FuelTankAccountRuleDataRemoved, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._tank = marshal.string.fromJSON(json.tank)
            this._user = marshal.string.fromJSON(json.user)
            this._ruleSetId = marshal.int.fromJSON(json.ruleSetId)
            this._ruleKind = marshal.string.fromJSON(json.ruleKind)
        }
    }

    get tank(): string {
        assert(this._tank != null, 'uninitialized access')
        return this._tank
    }

    set tank(value: string) {
        this._tank = value
    }

    get user(): string {
        assert(this._user != null, 'uninitialized access')
        return this._user
    }

    set user(value: string) {
        this._user = value
    }

    get ruleSetId(): number {
        assert(this._ruleSetId != null, 'uninitialized access')
        return this._ruleSetId
    }

    set ruleSetId(value: number) {
        this._ruleSetId = value
    }

    get ruleKind(): string {
        assert(this._ruleKind != null, 'uninitialized access')
        return this._ruleKind
    }

    set ruleKind(value: string) {
        this._ruleKind = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            tank: this.tank,
            user: this.user,
            ruleSetId: this.ruleSetId,
            ruleKind: this.ruleKind,
        }
    }
}
