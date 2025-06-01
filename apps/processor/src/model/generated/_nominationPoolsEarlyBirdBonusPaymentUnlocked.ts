import assert from "assert"
import * as marshal from "./marshal"

export class NominationPoolsEarlyBirdBonusPaymentUnlocked {
    public readonly isTypeOf = 'NominationPoolsEarlyBirdBonusPaymentUnlocked'
    private _paymentId!: number
    private _nextPaymentBlock!: number

    constructor(props?: Partial<Omit<NominationPoolsEarlyBirdBonusPaymentUnlocked, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._paymentId = marshal.int.fromJSON(json.paymentId)
            this._nextPaymentBlock = marshal.int.fromJSON(json.nextPaymentBlock)
        }
    }

    get paymentId(): number {
        assert(this._paymentId != null, 'uninitialized access')
        return this._paymentId
    }

    set paymentId(value: number) {
        this._paymentId = value
    }

    get nextPaymentBlock(): number {
        assert(this._nextPaymentBlock != null, 'uninitialized access')
        return this._nextPaymentBlock
    }

    set nextPaymentBlock(value: number) {
        this._nextPaymentBlock = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            paymentId: this.paymentId,
            nextPaymentBlock: this.nextPaymentBlock,
        }
    }
}
