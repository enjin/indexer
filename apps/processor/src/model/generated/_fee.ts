import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"

export class Fee {
    private _amount!: bigint | undefined | null
    private _who!: string | undefined | null

    constructor(props?: Partial<Omit<Fee, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._amount = json.amount == null ? undefined : marshal.bigint.fromJSON(json.amount)
            this._who = json.who == null ? undefined : marshal.string.fromJSON(json.who)
        }
    }

    get amount(): bigint | undefined | null {
        return this._amount
    }

    set amount(value: bigint | undefined | null) {
        this._amount = value
    }

    get who(): string | undefined | null {
        return this._who
    }

    set who(value: string | undefined | null) {
        this._who = value
    }

    toJSON(): object {
        return {
            amount: this.amount == null ? undefined : marshal.bigint.toJSON(this.amount),
            who: this.who,
        }
    }
}
