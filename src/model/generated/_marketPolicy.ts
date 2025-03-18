import assert from "assert"
import * as marshal from "./marshal"
import {Royalty} from "./_royalty"

export class MarketPolicy {
    private _royalty!: Royalty | undefined | null
    private _beneficiaries!: (Royalty | undefined | null)[]

    constructor(props?: Partial<Omit<MarketPolicy, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._royalty = json.royalty == null ? undefined : new Royalty(undefined, json.royalty)
            this._beneficiaries = marshal.fromList(json.beneficiaries, val => val == null ? undefined : new Royalty(undefined, val))
        }
    }

    get royalty(): Royalty | undefined | null {
        return this._royalty
    }

    set royalty(value: Royalty | undefined | null) {
        this._royalty = value
    }

    get beneficiaries(): (Royalty | undefined | null)[] {
        assert(this._beneficiaries != null, 'uninitialized access')
        return this._beneficiaries
    }

    set beneficiaries(value: (Royalty | undefined | null)[]) {
        this._beneficiaries = value
    }

    toJSON(): object {
        return {
            royalty: this.royalty == null ? undefined : this.royalty.toJSON(),
            beneficiaries: this.beneficiaries.map((val: any) => val == null ? undefined : val.toJSON()),
        }
    }
}
