import { NominationPool as NominationPoolGenerated, PoolState } from '~/model'
import { Entity as Entity_ } from '@subsquid/typeorm-store'

@Entity_()
export class NominationPool extends NominationPoolGenerated {
    isOpen: () => boolean = (): boolean => this.state === PoolState.Open

    isDestroying: () => boolean = (): boolean => this.state === PoolState.Destroying

    isDestroyed: () => boolean = (): boolean => this.state === PoolState.Destroyed
}
