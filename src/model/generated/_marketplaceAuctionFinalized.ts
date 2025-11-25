import assert from "assert"
import * as marshal from "./marshal"
import {Listing} from "./listing.model"
import {Bid} from "./bid.model"

export class MarketplaceAuctionFinalized {
    public readonly isTypeOf = 'MarketplaceAuctionFinalized'
    private _listing!: string
    private _winningBid!: string | undefined | null
    private _protocolFee!: bigint | undefined | null
    private _royalty!: bigint | undefined | null

    constructor(props?: Partial<Omit<MarketplaceAuctionFinalized, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._listing = marshal.string.fromJSON(json.listing)
            this._winningBid = json.winningBid == null ? undefined : marshal.string.fromJSON(json.winningBid)
            this._protocolFee = json.protocolFee == null ? undefined : marshal.bigint.fromJSON(json.protocolFee)
            this._royalty = json.royalty == null ? undefined : marshal.bigint.fromJSON(json.royalty)
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

    get protocolFee(): bigint | undefined | null {
        return this._protocolFee
    }

    set protocolFee(value: bigint | undefined | null) {
        this._protocolFee = value
    }

    get royalty(): bigint | undefined | null {
        return this._royalty
    }

    set royalty(value: bigint | undefined | null) {
        this._royalty = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            listing: this.listing,
            winningBid: this.winningBid,
            protocolFee: this.protocolFee == null ? undefined : marshal.bigint.toJSON(this.protocolFee),
            royalty: this.royalty == null ? undefined : marshal.bigint.toJSON(this.royalty),
        }
    }
}
