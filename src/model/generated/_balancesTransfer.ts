import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"

export class BalancesTransfer {
    public readonly isTypeOf = 'BalancesTransfer'
    private _from!: string
    private _to!: string
    private _amount!: bigint | undefined | null

    constructor(props?: Partial<Omit<BalancesTransfer, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._from = marshal.string.fromJSON(json.from)
            this._to = marshal.string.fromJSON(json.to)
            this._amount = json.amount == null ? undefined : marshal.bigint.fromJSON(json.amount)
        }
    }

    get from(): string {
        assert(this._from != null, 'uninitialized access')
        return this._from
    }

    set from(value: string) {
        this._from = value
    }

    get to(): string {
        assert(this._to != null, 'uninitialized access')
        return this._to
    }

    set to(value: string) {
        this._to = value
    }

    get amount(): bigint | undefined | null {
        return this._amount
    }

    set amount(value: bigint | undefined | null) {
        this._amount = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            from: this.from,
            to: this.to,
            amount: this.amount == null ? undefined : marshal.bigint.toJSON(this.amount),
        }
    }
}
