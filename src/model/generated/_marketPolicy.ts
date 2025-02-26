import assert from "assert"
import * as marshal from "./marshal"
import {Royalty} from "./_royalty"

export class MarketPolicy {
    private _royalty!: Royalty
    private _beneficiaries!: (Royalty)[] | undefined | null

    constructor(props?: Partial<Omit<MarketPolicy, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._royalty = new Royalty(undefined, marshal.nonNull(json.royalty))
            this._beneficiaries = json.beneficiaries == null ? undefined : marshal.fromList(json.beneficiaries, val => new Royalty(undefined, marshal.nonNull(val)))
        }
    }

    get royalty(): Royalty {
        assert(this._royalty != null, 'uninitialized access')
        return this._royalty
    }

    set royalty(value: Royalty) {
        this._royalty = value
    }

    get beneficiaries(): (Royalty)[] | undefined | null {
        return this._beneficiaries
    }

    set beneficiaries(value: (Royalty)[] | undefined | null) {
        this._beneficiaries = value
    }

    toJSON(): object {
        return {
            royalty: this.royalty.toJSON(),
            beneficiaries: this.beneficiaries == null ? undefined : this.beneficiaries.map((val: any) => val.toJSON()),
        }
    }
}
