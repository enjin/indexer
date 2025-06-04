import assert from "assert"
import * as marshal from "./marshal"
import {AccountTokenEventAttribute} from "./_accountTokenEventAttribute"

export class AccountTokenEventToken {
    private _id!: string
    private _tokenId!: string
    private _attributes!: (AccountTokenEventAttribute | undefined | null)[] | undefined | null

    constructor(props?: Partial<Omit<AccountTokenEventToken, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._id = marshal.string.fromJSON(json.id)
            this._tokenId = marshal.string.fromJSON(json.tokenId)
            this._attributes = json.attributes == null ? undefined : marshal.fromList(json.attributes, val => val == null ? undefined : new AccountTokenEventAttribute(undefined, val))
        }
    }

    get id(): string {
        assert(this._id != null, 'uninitialized access')
        return this._id
    }

    set id(value: string) {
        this._id = value
    }

    get tokenId(): string {
        assert(this._tokenId != null, 'uninitialized access')
        return this._tokenId
    }

    set tokenId(value: string) {
        this._tokenId = value
    }

    get attributes(): (AccountTokenEventAttribute | undefined | null)[] | undefined | null {
        return this._attributes
    }

    set attributes(value: (AccountTokenEventAttribute | undefined | null)[] | undefined | null) {
        this._attributes = value
    }

    toJSON(): object {
        return {
            id: this.id,
            tokenId: this.tokenId,
            attributes: this.attributes == null ? undefined : this.attributes.map((val: any) => val == null ? undefined : val.toJSON()),
        }
    }
}
