import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"

export class Royalty {
    private _beneficiary!: string
    private _percentage!: number

    constructor(props?: Partial<Omit<Royalty, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._beneficiary = marshal.string.fromJSON(json.beneficiary)
            this._percentage = marshal.float.fromJSON(json.percentage)
        }
    }

    get beneficiary(): string {
        assert(this._beneficiary != null, 'uninitialized access')
        return this._beneficiary
    }

    set beneficiary(value: string) {
        this._beneficiary = value
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
            beneficiary: this.beneficiary,
            percentage: this.percentage,
        }
    }
}
