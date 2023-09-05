import assert from "assert"
import * as marshal from "./marshal"
import {Account} from "./account.model"

export class ClaimsClaimed {
    public readonly isTypeOf = 'ClaimsClaimed'
    private _account!: string
    private _efiSum!: bigint
    private _enjSum!: bigint
    private _amount!: bigint
    private _exchangeRate!: number | undefined | null

    constructor(props?: Partial<Omit<ClaimsClaimed, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._account = marshal.string.fromJSON(json.account)
            this._efiSum = marshal.bigint.fromJSON(json.efiSum)
            this._enjSum = marshal.bigint.fromJSON(json.enjSum)
            this._amount = marshal.bigint.fromJSON(json.amount)
            this._exchangeRate = json.exchangeRate == null ? undefined : marshal.int.fromJSON(json.exchangeRate)
        }
    }

    get account(): string {
        assert(this._account != null, 'uninitialized access')
        return this._account
    }

    set account(value: string) {
        this._account = value
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

    get amount(): bigint {
        assert(this._amount != null, 'uninitialized access')
        return this._amount
    }

    set amount(value: bigint) {
        this._amount = value
    }

    get exchangeRate(): number | undefined | null {
        return this._exchangeRate
    }

    set exchangeRate(value: number | undefined | null) {
        this._exchangeRate = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            account: this.account,
            efiSum: marshal.bigint.toJSON(this.efiSum),
            enjSum: marshal.bigint.toJSON(this.enjSum),
            amount: marshal.bigint.toJSON(this.amount),
            exchangeRate: this.exchangeRate,
        }
    }
}
