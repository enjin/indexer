import assert from "assert"
import * as marshal from "./marshal"

export class MarketplaceProtocolFeeSet {
    public readonly isTypeOf = 'MarketplaceProtocolFeeSet'
    private _protocolFeePerbill!: number

    constructor(props?: Partial<Omit<MarketplaceProtocolFeeSet, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._protocolFeePerbill = marshal.int.fromJSON(json.protocolFeePerbill)
        }
    }

    get protocolFeePerbill(): number {
        assert(this._protocolFeePerbill != null, 'uninitialized access')
        return this._protocolFeePerbill
    }

    set protocolFeePerbill(value: number) {
        this._protocolFeePerbill = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            protocolFeePerbill: this.protocolFeePerbill,
        }
    }
}
