import assert from "assert"
import * as marshal from "./marshal"
import {Extrinsic} from "./extrinsic.model"

export class MultiTokensTokenMutated {
    public readonly isTypeOf = 'MultiTokensTokenMutated'
    private _extrinsic!: string | undefined | null

    constructor(props?: Partial<Omit<MultiTokensTokenMutated, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._extrinsic = json.extrinsic == null ? undefined : marshal.string.fromJSON(json.extrinsic)
        }
    }

    get extrinsic(): string | undefined | null {
        return this._extrinsic
    }

    set extrinsic(value: string | undefined | null) {
        this._extrinsic = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            extrinsic: this.extrinsic,
        }
    }
}
