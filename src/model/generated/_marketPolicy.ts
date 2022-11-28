import assert from "assert"
import * as marshal from "./marshal"
import {Royalty} from "./_royalty"

export class MarketPolicy {
    private _royalty!: Royalty

    constructor(props?: Partial<Omit<MarketPolicy, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._royalty = new Royalty(undefined, marshal.nonNull(json.royalty))
        }
    }

    get royalty(): Royalty {
        assert(this._royalty != null, 'uninitialized access')
        return this._royalty
    }

    set royalty(value: Royalty) {
        this._royalty = value
    }

    toJSON(): object {
        return {
            royalty: this.royalty.toJSON(),
        }
    }
}
