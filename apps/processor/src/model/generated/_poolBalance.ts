import assert from "assert"
import * as marshal from "./marshal"

export class PoolBalance {
    private _stash!: bigint
    private _reward!: bigint
    private _bonus!: bigint
    private _active!: bigint

    constructor(props?: Partial<Omit<PoolBalance, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._stash = marshal.bigint.fromJSON(json.stash)
            this._reward = marshal.bigint.fromJSON(json.reward)
            this._bonus = marshal.bigint.fromJSON(json.bonus)
            this._active = marshal.bigint.fromJSON(json.active)
        }
    }

    get stash(): bigint {
        assert(this._stash != null, 'uninitialized access')
        return this._stash
    }

    set stash(value: bigint) {
        this._stash = value
    }

    get reward(): bigint {
        assert(this._reward != null, 'uninitialized access')
        return this._reward
    }

    set reward(value: bigint) {
        this._reward = value
    }

    get bonus(): bigint {
        assert(this._bonus != null, 'uninitialized access')
        return this._bonus
    }

    set bonus(value: bigint) {
        this._bonus = value
    }

    get active(): bigint {
        assert(this._active != null, 'uninitialized access')
        return this._active
    }

    set active(value: bigint) {
        this._active = value
    }

    toJSON(): object {
        return {
            stash: marshal.bigint.toJSON(this.stash),
            reward: marshal.bigint.toJSON(this.reward),
            bonus: marshal.bigint.toJSON(this.bonus),
            active: marshal.bigint.toJSON(this.active),
        }
    }
}
