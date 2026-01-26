import { NominationPool as NominationPoolGenerated, PoolState } from '~/model'

export class NominationPool extends NominationPoolGenerated {
    isOpen: () => boolean = (): boolean => this.state === PoolState.Open

    isDestroying: () => boolean = (): boolean => this.state === PoolState.Destroying

    isDestroyed: () => boolean = (): boolean => this.state === PoolState.Destroyed
}
