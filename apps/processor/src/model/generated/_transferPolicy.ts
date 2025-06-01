import assert from "assert"
import * as marshal from "./marshal"

export class TransferPolicy {
    private _isFrozen!: boolean | undefined | null

    constructor(props?: Partial<Omit<TransferPolicy, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._isFrozen = json.isFrozen == null ? undefined : marshal.boolean.fromJSON(json.isFrozen)
        }
    }

    get isFrozen(): boolean | undefined | null {
        return this._isFrozen
    }

    set isFrozen(value: boolean | undefined | null) {
        this._isFrozen = value
    }

    toJSON(): object {
        return {
            isFrozen: this.isFrozen,
        }
    }
}
