import assert from "assert"
import * as marshal from "./marshal"

export class BonusCycle {
    private _previousStart!: number | undefined | null
    private _start!: number
    private _end!: number
    private _pendingDuration!: number | undefined | null

    constructor(props?: Partial<Omit<BonusCycle, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._previousStart = json.previousStart == null ? undefined : marshal.int.fromJSON(json.previousStart)
            this._start = marshal.int.fromJSON(json.start)
            this._end = marshal.int.fromJSON(json.end)
            this._pendingDuration = json.pendingDuration == null ? undefined : marshal.int.fromJSON(json.pendingDuration)
        }
    }

    get previousStart(): number | undefined | null {
        return this._previousStart
    }

    set previousStart(value: number | undefined | null) {
        this._previousStart = value
    }

    get start(): number {
        assert(this._start != null, 'uninitialized access')
        return this._start
    }

    set start(value: number) {
        this._start = value
    }

    get end(): number {
        assert(this._end != null, 'uninitialized access')
        return this._end
    }

    set end(value: number) {
        this._end = value
    }

    get pendingDuration(): number | undefined | null {
        return this._pendingDuration
    }

    set pendingDuration(value: number | undefined | null) {
        this._pendingDuration = value
    }

    toJSON(): object {
        return {
            previousStart: this.previousStart,
            start: this.start,
            end: this.end,
            pendingDuration: this.pendingDuration,
        }
    }
}
