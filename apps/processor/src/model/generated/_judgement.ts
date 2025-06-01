import assert from "assert"
import * as marshal from "./marshal"
import {JudgementType} from "./_judgementType"

export class Judgement {
    private _index!: number
    private _value!: JudgementType
    private _createdAt!: Date

    constructor(props?: Partial<Omit<Judgement, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._index = marshal.int.fromJSON(json.index)
            this._value = marshal.enumFromJson(json.value, JudgementType)
            this._createdAt = marshal.datetime.fromJSON(json.createdAt)
        }
    }

    get index(): number {
        assert(this._index != null, 'uninitialized access')
        return this._index
    }

    set index(value: number) {
        this._index = value
    }

    get value(): JudgementType {
        assert(this._value != null, 'uninitialized access')
        return this._value
    }

    set value(value: JudgementType) {
        this._value = value
    }

    get createdAt(): Date {
        assert(this._createdAt != null, 'uninitialized access')
        return this._createdAt
    }

    set createdAt(value: Date) {
        this._createdAt = value
    }

    toJSON(): object {
        return {
            index: this.index,
            value: this.value,
            createdAt: marshal.datetime.toJSON(this.createdAt),
        }
    }
}
