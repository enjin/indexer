import assert from "assert"
import * as marshal from "./marshal"

export class RoyaltyBeneficiary {
    private _accountId!: string
    private _percentage!: number

    constructor(props?: Partial<Omit<RoyaltyBeneficiary, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._accountId = marshal.string.fromJSON(json.accountId)
            this._percentage = marshal.float.fromJSON(json.percentage)
        }
    }

    get accountId(): string {
        assert(this._accountId != null, 'uninitialized access')
        return this._accountId
    }

    set accountId(value: string) {
        this._accountId = value
    }

    get percentage(): number {
        assert(this._percentage != null, 'uninitialized access')
        return this._percentage
    }

    set percentage(value: number) {
        this._percentage = value
    }

    toJSON(): object {
        return {
            accountId: this.accountId,
            percentage: this.percentage,
        }
    }
}
