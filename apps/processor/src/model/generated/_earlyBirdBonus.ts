import assert from "assert"
import * as marshal from "./marshal"

export class EarlyBirdBonus {
    private _amount!: bigint
    private _shareCaptureBlock!: number | undefined | null
    private _lastPaymentId!: number | undefined | null
    private _totalPaid!: bigint | undefined | null

    constructor(props?: Partial<Omit<EarlyBirdBonus, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._amount = marshal.bigint.fromJSON(json.amount)
            this._shareCaptureBlock = json.shareCaptureBlock == null ? undefined : marshal.int.fromJSON(json.shareCaptureBlock)
            this._lastPaymentId = json.lastPaymentId == null ? undefined : marshal.int.fromJSON(json.lastPaymentId)
            this._totalPaid = json.totalPaid == null ? undefined : marshal.bigint.fromJSON(json.totalPaid)
        }
    }

    get amount(): bigint {
        assert(this._amount != null, 'uninitialized access')
        return this._amount
    }

    set amount(value: bigint) {
        this._amount = value
    }

    get shareCaptureBlock(): number | undefined | null {
        return this._shareCaptureBlock
    }

    set shareCaptureBlock(value: number | undefined | null) {
        this._shareCaptureBlock = value
    }

    get lastPaymentId(): number | undefined | null {
        return this._lastPaymentId
    }

    set lastPaymentId(value: number | undefined | null) {
        this._lastPaymentId = value
    }

    get totalPaid(): bigint | undefined | null {
        return this._totalPaid
    }

    set totalPaid(value: bigint | undefined | null) {
        this._totalPaid = value
    }

    toJSON(): object {
        return {
            amount: marshal.bigint.toJSON(this.amount),
            shareCaptureBlock: this.shareCaptureBlock,
            lastPaymentId: this.lastPaymentId,
            totalPaid: this.totalPaid == null ? undefined : marshal.bigint.toJSON(this.totalPaid),
        }
    }
}
