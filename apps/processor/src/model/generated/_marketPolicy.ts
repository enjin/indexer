import assert from "assert"
import * as marshal from "./marshal"
import {Royalty} from "./_royalty"
import {RoyaltyBeneficiary} from "./_royaltyBeneficiary"

export class MarketPolicy {
    private _royalty!: Royalty | undefined | null
    private _beneficiaries!: (RoyaltyBeneficiary)[] | undefined | null

    constructor(props?: Partial<Omit<MarketPolicy, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._royalty = json.royalty == null ? undefined : new Royalty(undefined, json.royalty)
            this._beneficiaries = json.beneficiaries == null ? undefined : marshal.fromList(json.beneficiaries, val => new RoyaltyBeneficiary(undefined, marshal.nonNull(val)))
        }
    }

    get royalty(): Royalty | undefined | null {
        return this._royalty
    }

    set royalty(value: Royalty | undefined | null) {
        this._royalty = value
    }

    get beneficiaries(): (RoyaltyBeneficiary)[] | undefined | null {
        return this._beneficiaries
    }

    set beneficiaries(value: (RoyaltyBeneficiary)[] | undefined | null) {
        this._beneficiaries = value
    }

    toJSON(): object {
        return {
            royalty: this.royalty == null ? undefined : this.royalty.toJSON(),
            beneficiaries: this.beneficiaries == null ? undefined : this.beneficiaries.map((val: any) => val.toJSON()),
        }
    }
}
