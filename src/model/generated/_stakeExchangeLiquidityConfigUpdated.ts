import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"
import {StakeExchangeTokenFilter} from "./stakeExchangeTokenFilter.model"

export class StakeExchangeLiquidityConfigUpdated {
    public readonly isTypeOf = 'StakeExchangeLiquidityConfigUpdated'
    private _account!: string
    private _tokenFilter!: string

    constructor(props?: Partial<Omit<StakeExchangeLiquidityConfigUpdated, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._account = marshal.string.fromJSON(json.account)
            this._tokenFilter = marshal.string.fromJSON(json.tokenFilter)
        }
    }

    get account(): string {
        assert(this._account != null, 'uninitialized access')
        return this._account
    }

    set account(value: string) {
        this._account = value
    }

    get tokenFilter(): string {
        assert(this._tokenFilter != null, 'uninitialized access')
        return this._tokenFilter
    }

    set tokenFilter(value: string) {
        this._tokenFilter = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            account: this.account,
            tokenFilter: this.tokenFilter,
        }
    }
}
