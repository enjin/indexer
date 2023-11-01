import assert from "assert"
import * as marshal from "./marshal"

export class FuelTankData {
    private _id!: string
    private _name!: string
    private _ruleSetId!: number | undefined | null
    private _paysRemainingFee!: boolean | undefined | null
    private _useNoneOrigin!: boolean | undefined | null
    private _feePaid!: bigint | undefined | null

    constructor(props?: Partial<Omit<FuelTankData, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._id = marshal.string.fromJSON(json.id)
            this._name = marshal.string.fromJSON(json.name)
            this._ruleSetId = json.ruleSetId == null ? undefined : marshal.int.fromJSON(json.ruleSetId)
            this._paysRemainingFee = json.paysRemainingFee == null ? undefined : marshal.boolean.fromJSON(json.paysRemainingFee)
            this._useNoneOrigin = json.useNoneOrigin == null ? undefined : marshal.boolean.fromJSON(json.useNoneOrigin)
            this._feePaid = json.feePaid == null ? undefined : marshal.bigint.fromJSON(json.feePaid)
        }
    }

    get id(): string {
        assert(this._id != null, 'uninitialized access')
        return this._id
    }

    set id(value: string) {
        this._id = value
    }

    get name(): string {
        assert(this._name != null, 'uninitialized access')
        return this._name
    }

    set name(value: string) {
        this._name = value
    }

    get ruleSetId(): number | undefined | null {
        return this._ruleSetId
    }

    set ruleSetId(value: number | undefined | null) {
        this._ruleSetId = value
    }

    get paysRemainingFee(): boolean | undefined | null {
        return this._paysRemainingFee
    }

    set paysRemainingFee(value: boolean | undefined | null) {
        this._paysRemainingFee = value
    }

    get useNoneOrigin(): boolean | undefined | null {
        return this._useNoneOrigin
    }

    set useNoneOrigin(value: boolean | undefined | null) {
        this._useNoneOrigin = value
    }

    get feePaid(): bigint | undefined | null {
        return this._feePaid
    }

    set feePaid(value: bigint | undefined | null) {
        this._feePaid = value
    }

    toJSON(): object {
        return {
            id: this.id,
            name: this.name,
            ruleSetId: this.ruleSetId,
            paysRemainingFee: this.paysRemainingFee,
            useNoneOrigin: this.useNoneOrigin,
            feePaid: this.feePaid == null ? undefined : marshal.bigint.toJSON(this.feePaid),
        }
    }
}
