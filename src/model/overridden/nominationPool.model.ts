import { NominationPool, PoolState } from '../generated'

declare module '../generated/nominationPool.model' {
    interface NominationPool {
        isOpen(): boolean
        isDestroying(): boolean
        isDestroyed(): boolean
    }
}

NominationPool.prototype.isOpen = function (): boolean {
    return this.state === PoolState.Open
}

NominationPool.prototype.isDestroying = function (): boolean {
    return this.state === PoolState.Destroying
}

NominationPool.prototype.isDestroyed = function (): boolean {
    return this.state === PoolState.Destroyed
}

export { NominationPool }
