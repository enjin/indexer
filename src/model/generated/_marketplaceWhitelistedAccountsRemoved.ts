import assert from "assert"
import * as marshal from "./marshal"
import {Listing} from "./listing.model"

export class MarketplaceWhitelistedAccountsRemoved {
    public readonly isTypeOf = 'MarketplaceWhitelistedAccountsRemoved'
    private _listing!: string
    private _accounts!: (string | undefined | null)[]

    constructor(props?: Partial<Omit<MarketplaceWhitelistedAccountsRemoved, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._listing = marshal.string.fromJSON(json.listing)
            this._accounts = marshal.fromList(json.accounts, val => val == null ? undefined : marshal.string.fromJSON(val))
        }
    }

    get listing(): string {
        assert(this._listing != null, 'uninitialized access')
        return this._listing
    }

    set listing(value: string) {
        this._listing = value
    }

    get accounts(): (string | undefined | null)[] {
        assert(this._accounts != null, 'uninitialized access')
        return this._accounts
    }

    set accounts(value: (string | undefined | null)[]) {
        this._accounts = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            listing: this.listing,
            accounts: this.accounts,
        }
    }
}
