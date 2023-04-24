import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"

export class ClaimsClaimedEnj {
    public readonly isTypeOf = 'ClaimsClaimedEnj'
    private _who!: string
    private _amount!: bigint

    constructor(props?: Partial<Omit<ClaimsClaimedEnj, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._who = marshal.string.fromJSON(json.who)
            this._amount = marshal.bigint.fromJSON(json.amount)
        }
    }

    get who(): string {
        assert(this._who != null, 'uninitialized access')
        return this._who
    }

    set who(value: string) {
        this._who = value
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
            isTypeOf: this.isTypeOf,
            who: this.who,
            amount: marshal.bigint.toJSON(this.amount),
        }
    }
}
