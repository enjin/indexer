import { ManyToOne as ManyToOne_, Index as Index_, Entity as Entity_ } from '@subsquid/typeorm-store'
import { NominationPool } from './nominationPool.model'
import { EraReward as EraRewardGenerated } from '../generated'

@Entity_()
export class EraReward extends EraRewardGenerated {
    @Index_()
    @ManyToOne_(() => NominationPool, { nullable: true })
    pool!: NominationPool
}
