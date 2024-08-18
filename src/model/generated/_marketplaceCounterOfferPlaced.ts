import assert from "assert"
import * as marshal from "./marshal"
import {Listing} from "./listing.model"
import {CounterOffer} from "./_counterOffer"
import {Account} from "./account.model"

export class MarketplaceCounterOfferPlaced {
    public readonly isTypeOf = 'MarketplaceCounterOfferPlaced'
    private _listing!: string
    private _offer!: CounterOffer
    private _accountId!: string
    private _price!: bigint

    constructor(props?: Partial<Omit<MarketplaceCounterOfferPlaced, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._listing = marshal.string.fromJSON(json.listing)
            this._offer = new CounterOffer(undefined, marshal.nonNull(json.offer))
            this._accountId = marshal.string.fromJSON(json.accountId)
            this._price = marshal.bigint.fromJSON(json.price)
        }
    }

    get listing(): string {
        assert(this._listing != null, 'uninitialized access')
        return this._listing
    }

    set listing(value: string) {
        this._listing = value
    }

    get offer(): CounterOffer {
        assert(this._offer != null, 'uninitialized access')
        return this._offer
    }

    set offer(value: CounterOffer) {
        this._offer = value
    }

    get accountId(): string {
        assert(this._accountId != null, 'uninitialized access')
        return this._accountId
    }

    set accountId(value: string) {
        this._accountId = value
    }

    get price(): bigint {
        assert(this._price != null, 'uninitialized access')
        return this._price
    }

    set price(value: bigint) {
        this._price = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            listing: this.listing,
            offer: this.offer.toJSON(),
            accountId: this.accountId,
            price: marshal.bigint.toJSON(this.price),
        }
    }
}
