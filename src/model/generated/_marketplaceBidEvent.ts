import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"
import {Bid} from "./bid.model"

export class MarketplaceBidEvent {
    public readonly isTypeOf = 'MarketplaceBidEvent'
    private _from!: string
    private _bid!: string

    constructor(props?: Partial<Omit<MarketplaceBidEvent, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._from = marshal.string.fromJSON(json.from)
            this._bid = marshal.string.fromJSON(json.bid)
        }
    }

    get from(): string {
        assert(this._from != null, 'uninitialized access')
        return this._from
    }

    set from(value: string) {
        this._from = value
    }

    get bid(): string {
        assert(this._bid != null, 'uninitialized access')
        return this._bid
    }

    set bid(value: string) {
        this._bid = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            from: this.from,
            bid: this.bid,
        }
    }
}
