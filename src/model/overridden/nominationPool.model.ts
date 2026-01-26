import { NominationPool as NominationPoolGenerated, PoolState } from '../generated'
import { Entity as Entity_, OneToMany as OneToMany_ } from '@subsquid/typeorm-store'
import { EraReward } from './eraReward.model'

@Entity_()
export class NominationPool extends NominationPoolGenerated {
    @OneToMany_(() => EraReward, (e) => e.pool)
    eraRewards!: EraReward[]
    isOpen: () => boolean = (): boolean => this.state === PoolState.Open

    isDestroying: () => boolean = (): boolean => this.state === PoolState.Destroying

    isDestroyed: () => boolean = (): boolean => this.state === PoolState.Destroyed
}
