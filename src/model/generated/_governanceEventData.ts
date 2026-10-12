import assert from "assert"
import * as marshal from "./marshal"

export class GovernanceEventData {
    public readonly isTypeOf = 'GovernanceEventData'
    private _pallet!: string
    private _eventName!: string
    private _referendumId!: string | undefined | null
    private _governanceAccountId!: string | undefined | null
    private _blockNumber!: number
    private _args!: unknown | undefined | null

    constructor(props?: Partial<Omit<GovernanceEventData, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._pallet = marshal.string.fromJSON(json.pallet)
            this._eventName = marshal.string.fromJSON(json.eventName)
            this._referendumId = json.referendumId == null ? undefined : marshal.string.fromJSON(json.referendumId)
            this._governanceAccountId = json.governanceAccountId == null ? undefined : marshal.string.fromJSON(json.governanceAccountId)
            this._blockNumber = marshal.int.fromJSON(json.blockNumber)
            this._args = json.args
        }
    }

    get pallet(): string {
        assert(this._pallet != null, 'uninitialized access')
        return this._pallet
    }

    set pallet(value: string) {
        this._pallet = value
    }

    get eventName(): string {
        assert(this._eventName != null, 'uninitialized access')
        return this._eventName
    }

    set eventName(value: string) {
        this._eventName = value
    }

    get referendumId(): string | undefined | null {
        return this._referendumId
    }

    set referendumId(value: string | undefined | null) {
        this._referendumId = value
    }

    get governanceAccountId(): string | undefined | null {
        return this._governanceAccountId
    }

    set governanceAccountId(value: string | undefined | null) {
        this._governanceAccountId = value
    }

    get blockNumber(): number {
        assert(this._blockNumber != null, 'uninitialized access')
        return this._blockNumber
    }

    set blockNumber(value: number) {
        this._blockNumber = value
    }

    get args(): unknown | undefined | null {
        return this._args
    }

    set args(value: unknown | undefined | null) {
        this._args = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            pallet: this.pallet,
            eventName: this.eventName,
            referendumId: this.referendumId,
            governanceAccountId: this.governanceAccountId,
            blockNumber: this.blockNumber,
            args: this.args,
        }
    }
}
