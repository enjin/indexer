import assert from "assert"
import * as marshal from "./marshal"
import {MintRateLimit} from "./_mintRateLimit"
import {MintRateWindow} from "./_mintRateWindow"
import {PendingMintRateLimitChange} from "./_pendingMintRateLimitChange"

export class MintRateLimitState {
    private _limit!: MintRateLimit
    private _window!: MintRateWindow
    private _pending!: PendingMintRateLimitChange | undefined | null

    constructor(props?: Partial<Omit<MintRateLimitState, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._limit = new MintRateLimit(undefined, marshal.nonNull(json.limit))
            this._window = new MintRateWindow(undefined, marshal.nonNull(json.window))
            this._pending = json.pending == null ? undefined : new PendingMintRateLimitChange(undefined, json.pending)
        }
    }

    get limit(): MintRateLimit {
        assert(this._limit != null, 'uninitialized access')
        return this._limit
    }

    set limit(value: MintRateLimit) {
        this._limit = value
    }

    get window(): MintRateWindow {
        assert(this._window != null, 'uninitialized access')
        return this._window
    }

    set window(value: MintRateWindow) {
        this._window = value
    }

    get pending(): PendingMintRateLimitChange | undefined | null {
        return this._pending
    }

    set pending(value: PendingMintRateLimitChange | undefined | null) {
        this._pending = value
    }

    toJSON(): object {
        return {
            limit: this.limit.toJSON(),
            window: this.window.toJSON(),
            pending: this.pending == null ? undefined : this.pending.toJSON(),
        }
    }
}
