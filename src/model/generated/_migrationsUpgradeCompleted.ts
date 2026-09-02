import assert from "assert"
import * as marshal from "./marshal"

export class MigrationsUpgradeCompleted {
    public readonly isTypeOf = 'MigrationsUpgradeCompleted'
    private _blockNumber!: number
    private _specVersion!: number

    constructor(props?: Partial<Omit<MigrationsUpgradeCompleted, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._blockNumber = marshal.int.fromJSON(json.blockNumber)
            this._specVersion = marshal.int.fromJSON(json.specVersion)
        }
    }

    get blockNumber(): number {
        assert(this._blockNumber != null, 'uninitialized access')
        return this._blockNumber
    }

    set blockNumber(value: number) {
        this._blockNumber = value
    }

    get specVersion(): number {
        assert(this._specVersion != null, 'uninitialized access')
        return this._specVersion
    }

    set specVersion(value: number) {
        this._specVersion = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            blockNumber: this.blockNumber,
            specVersion: this.specVersion,
        }
    }
}
