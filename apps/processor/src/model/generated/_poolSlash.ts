import assert from "assert"
import * as marshal from "./marshal"

export class PoolSlash {
    private _amount!: bigint
    private _appliedAt!: Date
    private _appliedBlock!: number

    constructor(props?: Partial<Omit<PoolSlash, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._amount = marshal.bigint.fromJSON(json.amount)
            this._appliedAt = marshal.datetime.fromJSON(json.appliedAt)
            this._appliedBlock = marshal.int.fromJSON(json.appliedBlock)
        }
    }

    get amount(): bigint {
        assert(this._amount != null, 'uninitialized access')
        return this._amount
    }

    set amount(value: bigint) {
        this._amount = value
    }

    get appliedAt(): Date {
        assert(this._appliedAt != null, 'uninitialized access')
        return this._appliedAt
    }

    set appliedAt(value: Date) {
        this._appliedAt = value
    }

    get appliedBlock(): number {
        assert(this._appliedBlock != null, 'uninitialized access')
        return this._appliedBlock
    }

    set appliedBlock(value: number) {
        this._appliedBlock = value
    }

    toJSON(): object {
        return {
            amount: marshal.bigint.toJSON(this.amount),
            appliedAt: marshal.datetime.toJSON(this.appliedAt),
            appliedBlock: this.appliedBlock,
        }
    }
}
