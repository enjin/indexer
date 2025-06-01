import assert from "assert"
import * as marshal from "./marshal"

export class NativeTokenMetadata {
    private _name!: string
    private _symbol!: string
    private _decimalCount!: number

    constructor(props?: Partial<Omit<NativeTokenMetadata, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._name = marshal.string.fromJSON(json.name)
            this._symbol = marshal.string.fromJSON(json.symbol)
            this._decimalCount = marshal.int.fromJSON(json.decimalCount)
        }
    }

    get name(): string {
        assert(this._name != null, 'uninitialized access')
        return this._name
    }

    set name(value: string) {
        this._name = value
    }

    get symbol(): string {
        assert(this._symbol != null, 'uninitialized access')
        return this._symbol
    }

    set symbol(value: string) {
        this._symbol = value
    }

    get decimalCount(): number {
        assert(this._decimalCount != null, 'uninitialized access')
        return this._decimalCount
    }

    set decimalCount(value: number) {
        this._decimalCount = value
    }

    toJSON(): object {
        return {
            name: this.name,
            symbol: this.symbol,
            decimalCount: this.decimalCount,
        }
    }
}
