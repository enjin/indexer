import assert from "assert"
import * as marshal from "./marshal"
import {IdentityJudgement} from "./_identityJudgement"

export class Judgement {
    private _index!: number
    private _value!: IdentityJudgement
    private _createdAt!: Date

    constructor(props?: Partial<Omit<Judgement, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._index = marshal.int.fromJSON(json.index)
            this._value = marshal.enumFromJson(json.value, IdentityJudgement)
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

    get value(): IdentityJudgement {
        assert(this._value != null, 'uninitialized access')
        return this._value
    }

    set value(value: IdentityJudgement) {
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
