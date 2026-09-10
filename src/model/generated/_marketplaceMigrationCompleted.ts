import assert from "assert"
import * as marshal from "./marshal"

export class MarketplaceMigrationCompleted {
    public readonly isTypeOf = 'MarketplaceMigrationCompleted'
    private _storageVersion!: number

    constructor(props?: Partial<Omit<MarketplaceMigrationCompleted, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._storageVersion = marshal.int.fromJSON(json.storageVersion)
        }
    }

    get storageVersion(): number {
        assert(this._storageVersion != null, 'uninitialized access')
        return this._storageVersion
    }

    set storageVersion(value: number) {
        this._storageVersion = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            storageVersion: this.storageVersion,
        }
    }
}
