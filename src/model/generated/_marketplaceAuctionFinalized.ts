import assert from "assert"
import * as marshal from "./marshal"
import {Listing} from "./listing.model"
import {Bid} from "./bid.model"

export class MarketplaceAuctionFinalized {
    public readonly isTypeOf = 'MarketplaceAuctionFinalized'
    private _listing!: string
    private _winningBid!: string | undefined | null
    private _protocolFee!: bigint
    private _royalty!: bigint

    constructor(props?: Partial<Omit<MarketplaceAuctionFinalized, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._listing = marshal.string.fromJSON(json.listing)
            this._winningBid = json.winningBid == null ? undefined : marshal.string.fromJSON(json.winningBid)
            this._protocolFee = marshal.bigint.fromJSON(json.protocolFee)
            this._royalty = marshal.bigint.fromJSON(json.royalty)
        }
    }

    get listing(): string {
        assert(this._listing != null, 'uninitialized access')
        return this._listing
    }

    set listing(value: string) {
        this._listing = value
    }

    get winningBid(): string | undefined | null {
        return this._winningBid
    }

    set winningBid(value: string | undefined | null) {
        this._winningBid = value
    }

    get protocolFee(): bigint {
        assert(this._protocolFee != null, 'uninitialized access')
        return this._protocolFee
    }

    set protocolFee(value: bigint) {
        this._protocolFee = value
    }

    get royalty(): bigint {
        assert(this._royalty != null, 'uninitialized access')
        return this._royalty
    }

    set royalty(value: bigint) {
        this._royalty = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            listing: this.listing,
            winningBid: this.winningBid,
            protocolFee: marshal.bigint.toJSON(this.protocolFee),
            royalty: marshal.bigint.toJSON(this.royalty),
        }
    }
}
