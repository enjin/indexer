import assert from "assert"
import * as marshal from "./marshal"
import {RoyaltyBeneficiary} from "./_royaltyBeneficiary"

export class MarketPolicy {
    private _beneficiaries!: (RoyaltyBeneficiary)[] | undefined | null

    constructor(props?: Partial<Omit<MarketPolicy, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._beneficiaries = json.beneficiaries == null ? undefined : marshal.fromList(json.beneficiaries, val => new RoyaltyBeneficiary(undefined, marshal.nonNull(val)))
        }
    }

    get beneficiaries(): (RoyaltyBeneficiary)[] | undefined | null {
        return this._beneficiaries
    }

    set beneficiaries(value: (RoyaltyBeneficiary)[] | undefined | null) {
        this._beneficiaries = value
    }

    toJSON(): object {
        return {
            beneficiaries: this.beneficiaries == null ? undefined : this.beneficiaries.map((val: any) => val.toJSON()),
        }
    }
}
