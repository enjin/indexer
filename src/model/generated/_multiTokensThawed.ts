import assert from "assert"
import * as marshal from "./marshal"
import {Extrinsic} from "./extrinsic.model"

export class MultiTokensThawed {
    public readonly isTypeOf = 'MultiTokensThawed'
    private _extrinsic!: string

    constructor(props?: Partial<Omit<MultiTokensThawed, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._extrinsic = marshal.string.fromJSON(json.extrinsic)
        }
    }

    get extrinsic(): string {
        assert(this._extrinsic != null, 'uninitialized access')
        return this._extrinsic
    }

    set extrinsic(value: string) {
        this._extrinsic = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            extrinsic: this.extrinsic,
        }
    }
}
