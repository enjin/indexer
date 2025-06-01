import assert from "assert"
import * as marshal from "./marshal"
import {AccountClaimType} from "./_accountClaimType"

export class ClaimsClaimRequested {
    public readonly isTypeOf = 'ClaimsClaimRequested'
    private _who!: string
    private _accountType!: AccountClaimType
    private _hash!: string | undefined | null
    private _amountClaimable!: bigint
    private _amountBurned!: bigint
    private _isEfiToken!: boolean

    constructor(props?: Partial<Omit<ClaimsClaimRequested, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._who = marshal.string.fromJSON(json.who)
            this._accountType = marshal.enumFromJson(json.accountType, AccountClaimType)
            this._hash = json.hash == null ? undefined : marshal.string.fromJSON(json.hash)
            this._amountClaimable = marshal.bigint.fromJSON(json.amountClaimable)
            this._amountBurned = marshal.bigint.fromJSON(json.amountBurned)
            this._isEfiToken = marshal.boolean.fromJSON(json.isEfiToken)
        }
    }

    get who(): string {
        assert(this._who != null, 'uninitialized access')
        return this._who
    }

    set who(value: string) {
        this._who = value
    }

    get accountType(): AccountClaimType {
        assert(this._accountType != null, 'uninitialized access')
        return this._accountType
    }

    set accountType(value: AccountClaimType) {
        this._accountType = value
    }

    get hash(): string | undefined | null {
        return this._hash
    }

    set hash(value: string | undefined | null) {
        this._hash = value
    }

    get amountClaimable(): bigint {
        assert(this._amountClaimable != null, 'uninitialized access')
        return this._amountClaimable
    }

    set amountClaimable(value: bigint) {
        this._amountClaimable = value
    }

    get amountBurned(): bigint {
        assert(this._amountBurned != null, 'uninitialized access')
        return this._amountBurned
    }

    set amountBurned(value: bigint) {
        this._amountBurned = value
    }

    get isEfiToken(): boolean {
        assert(this._isEfiToken != null, 'uninitialized access')
        return this._isEfiToken
    }

    set isEfiToken(value: boolean) {
        this._isEfiToken = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            who: this.who,
            accountType: this.accountType,
            hash: this.hash,
            amountClaimable: marshal.bigint.toJSON(this.amountClaimable),
            amountBurned: marshal.bigint.toJSON(this.amountBurned),
            isEfiToken: this.isEfiToken,
        }
    }
}
