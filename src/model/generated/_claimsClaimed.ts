import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"

export class ClaimsClaimed {
    public readonly isTypeOf = 'ClaimsClaimed'
    private _who!: string
    private _ethereumAddress!: string
    private _amount!: bigint | undefined | null

    constructor(props?: Partial<Omit<ClaimsClaimed, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._who = marshal.string.fromJSON(json.who)
            this._ethereumAddress = marshal.string.fromJSON(json.ethereumAddress)
            this._amount = json.amount == null ? undefined : marshal.bigint.fromJSON(json.amount)
        }
    }

    get who(): string {
        assert(this._who != null, 'uninitialized access')
        return this._who
    }

    set who(value: string) {
        this._who = value
    }

    get ethereumAddress(): string {
        assert(this._ethereumAddress != null, 'uninitialized access')
        return this._ethereumAddress
    }

    set ethereumAddress(value: string) {
        this._ethereumAddress = value
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
            who: this.who,
            ethereumAddress: this.ethereumAddress,
            amount: this.amount == null ? undefined : marshal.bigint.toJSON(this.amount),
        }
    }
}
