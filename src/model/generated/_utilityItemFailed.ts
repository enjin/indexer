import assert from "assert"
import * as marshal from "./marshal"

export class UtilityItemFailed {
    public readonly isTypeOf = 'UtilityItemFailed'
    private _error!: string | undefined | null
    private _itemIndex!: number | undefined | null

    constructor(props?: Partial<Omit<UtilityItemFailed, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._error = json.error == null ? undefined : marshal.string.fromJSON(json.error)
            this._itemIndex = json.itemIndex == null ? undefined : marshal.int.fromJSON(json.itemIndex)
        }
    }

    get error(): string | undefined | null {
        return this._error
    }

    set error(value: string | undefined | null) {
        this._error = value
    }

    get itemIndex(): number | undefined | null {
        return this._itemIndex
    }

    set itemIndex(value: number | undefined | null) {
        this._itemIndex = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            error: this.error,
            itemIndex: this.itemIndex,
        }
    }
}
