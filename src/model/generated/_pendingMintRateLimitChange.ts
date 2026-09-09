import assert from "assert"
import * as marshal from "./marshal"
import {MintRateLimit} from "./_mintRateLimit"

export class PendingMintRateLimitChange {
    private _newLimit!: MintRateLimit | undefined | null
    private _effectiveBlock!: bigint

    constructor(props?: Partial<Omit<PendingMintRateLimitChange, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._newLimit = json.newLimit == null ? undefined : new MintRateLimit(undefined, json.newLimit)
            this._effectiveBlock = marshal.bigint.fromJSON(json.effectiveBlock)
        }
    }

    get newLimit(): MintRateLimit | undefined | null {
        return this._newLimit
    }

    set newLimit(value: MintRateLimit | undefined | null) {
        this._newLimit = value
    }

    get effectiveBlock(): bigint {
        assert(this._effectiveBlock != null, 'uninitialized access')
        return this._effectiveBlock
    }

    set effectiveBlock(value: bigint) {
        this._effectiveBlock = value
    }

    toJSON(): object {
        return {
            newLimit: this.newLimit == null ? undefined : this.newLimit.toJSON(),
            effectiveBlock: marshal.bigint.toJSON(this.effectiveBlock),
        }
    }
}
