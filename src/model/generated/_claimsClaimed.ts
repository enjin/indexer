import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"

export class ClaimsClaimed {
    public readonly isTypeOf = 'ClaimsClaimed'
    private _account!: string
    private _ethAccount!: string | undefined | null
    private _efiSum!: bigint
    private _enjSum!: bigint
    private _efiBurned!: bigint
    private _amount!: bigint

    constructor(props?: Partial<Omit<ClaimsClaimed, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._account = marshal.string.fromJSON(json.account)
            this._ethAccount = json.ethAccount == null ? undefined : marshal.string.fromJSON(json.ethAccount)
            this._efiSum = marshal.bigint.fromJSON(json.efiSum)
            this._enjSum = marshal.bigint.fromJSON(json.enjSum)
            this._efiBurned = marshal.bigint.fromJSON(json.efiBurned)
            this._amount = marshal.bigint.fromJSON(json.amount)
        }
    }

    get account(): string {
        assert(this._account != null, 'uninitialized access')
        return this._account
    }

    set account(value: string) {
        this._account = value
    }

    get ethAccount(): string | undefined | null {
        return this._ethAccount
    }

    set ethAccount(value: string | undefined | null) {
        this._ethAccount = value
    }

    get efiSum(): bigint {
        assert(this._efiSum != null, 'uninitialized access')
        return this._efiSum
    }

    set efiSum(value: bigint) {
        this._efiSum = value
    }

    get enjSum(): bigint {
        assert(this._enjSum != null, 'uninitialized access')
        return this._enjSum
    }

    set enjSum(value: bigint) {
        this._enjSum = value
    }

    get efiBurned(): bigint {
        assert(this._efiBurned != null, 'uninitialized access')
        return this._efiBurned
    }

    set efiBurned(value: bigint) {
        this._efiBurned = value
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
            account: this.account,
            ethAccount: this.ethAccount,
            efiSum: marshal.bigint.toJSON(this.efiSum),
            enjSum: marshal.bigint.toJSON(this.enjSum),
            efiBurned: marshal.bigint.toJSON(this.efiBurned),
            amount: marshal.bigint.toJSON(this.amount),
        }
    }
}
