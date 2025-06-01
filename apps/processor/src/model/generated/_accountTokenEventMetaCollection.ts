import assert from "assert"
import * as marshal from "./marshal"
import {Metadata} from "./_metadata"

export class AccountTokenEventMetaCollection {
    private _metadata!: Metadata | undefined | null
    private _createdAt!: Date

    constructor(props?: Partial<Omit<AccountTokenEventMetaCollection, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._metadata = json.metadata == null ? undefined : new Metadata(undefined, json.metadata)
            this._createdAt = marshal.datetime.fromJSON(json.createdAt)
        }
    }

    get metadata(): Metadata | undefined | null {
        return this._metadata
    }

    set metadata(value: Metadata | undefined | null) {
        this._metadata = value
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
            metadata: this.metadata == null ? undefined : this.metadata.toJSON(),
            createdAt: marshal.datetime.toJSON(this.createdAt),
        }
    }
}
