import assert from "assert"
import * as marshal from "./marshal"

export class TokenNamedReserve {
    private _pallet!: string
    private _amount!: bigint

    constructor(props?: Partial<Omit<TokenNamedReserve, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._pallet = marshal.string.fromJSON(json.pallet)
            this._amount = marshal.bigint.fromJSON(json.amount)
        }
    }

    get pallet(): string {
        assert(this._pallet != null, 'uninitialized access')
        return this._pallet
    }

    set pallet(value: string) {
        this._pallet = value
    }

    get amount(): bigint {
        assert(this._amount != null, 'uninitialized access')
        return this._amount
    }

    set amount(value: bigint) {
        this._amount = value
    }

    toJSON(): object {
        return {
            pallet: this.pallet,
            amount: marshal.bigint.toJSON(this.amount),
        }
    }
}
