import assert from "assert"
import * as marshal from "./marshal"
import {ClaimAccount} from "./_claimAccount"

export class ClaimsClaimRequested {
    public readonly isTypeOf = 'ClaimsClaimRequested'
    private _who!: ClaimAccount
    private _hash!: string
    private _amount!: bigint
    private _isEfiToken!: boolean
    private _isEarlyBird!: boolean

    constructor(props?: Partial<Omit<ClaimsClaimRequested, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._who = new ClaimAccount(undefined, marshal.nonNull(json.who))
            this._hash = marshal.string.fromJSON(json.hash)
            this._amount = marshal.bigint.fromJSON(json.amount)
            this._isEfiToken = marshal.boolean.fromJSON(json.isEfiToken)
            this._isEarlyBird = marshal.boolean.fromJSON(json.isEarlyBird)
        }
    }

    get who(): ClaimAccount {
        assert(this._who != null, 'uninitialized access')
        return this._who
    }

    set who(value: ClaimAccount) {
        this._who = value
    }

    get hash(): string {
        assert(this._hash != null, 'uninitialized access')
        return this._hash
    }

    set hash(value: string) {
        this._hash = value
    }

    get amount(): bigint {
        assert(this._amount != null, 'uninitialized access')
        return this._amount
    }

    set amount(value: bigint) {
        this._amount = value
    }

    get isEfiToken(): boolean {
        assert(this._isEfiToken != null, 'uninitialized access')
        return this._isEfiToken
    }

    set isEfiToken(value: boolean) {
        this._isEfiToken = value
    }

    get isEarlyBird(): boolean {
        assert(this._isEarlyBird != null, 'uninitialized access')
        return this._isEarlyBird
    }

    set isEarlyBird(value: boolean) {
        this._isEarlyBird = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            who: this.who.toJSON(),
            hash: this.hash,
            amount: marshal.bigint.toJSON(this.amount),
            isEfiToken: this.isEfiToken,
            isEarlyBird: this.isEarlyBird,
        }
    }
}
