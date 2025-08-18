import assert from "assert"
import * as marshal from "./marshal"

export class StakingEraPaid {
    public readonly isTypeOf = 'StakingEraPaid'
    private _eraIndex!: number
    private _validatorPayout!: bigint
    private _remainder!: bigint
    private _validator!: string | undefined | null

    constructor(props?: Partial<Omit<StakingEraPaid, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._eraIndex = marshal.int.fromJSON(json.eraIndex)
            this._validatorPayout = marshal.bigint.fromJSON(json.validatorPayout)
            this._remainder = marshal.bigint.fromJSON(json.remainder)
            this._validator = json.validator == null ? undefined : marshal.string.fromJSON(json.validator)
        }
    }

    get eraIndex(): number {
        assert(this._eraIndex != null, 'uninitialized access')
        return this._eraIndex
    }

    set eraIndex(value: number) {
        this._eraIndex = value
    }

    get validatorPayout(): bigint {
        assert(this._validatorPayout != null, 'uninitialized access')
        return this._validatorPayout
    }

    set validatorPayout(value: bigint) {
        this._validatorPayout = value
    }

    get remainder(): bigint {
        assert(this._remainder != null, 'uninitialized access')
        return this._remainder
    }

    set remainder(value: bigint) {
        this._remainder = value
    }

    get validator(): string | undefined | null {
        return this._validator
    }

    set validator(value: string | undefined | null) {
        this._validator = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            eraIndex: this.eraIndex,
            validatorPayout: marshal.bigint.toJSON(this.validatorPayout),
            remainder: marshal.bigint.toJSON(this.remainder),
            validator: this.validator,
        }
    }
}
