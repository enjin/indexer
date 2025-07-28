import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"
import {NominationPool} from "./nominationPool.model"
import {PoolMember} from "./poolMember.model"
import {EraReward} from "./eraReward.model"

@Entity_()
export class PoolMemberRewards {
    constructor(props?: Partial<PoolMemberRewards>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => NominationPool, {nullable: true})
    pool!: NominationPool

    @Index_()
    @ManyToOne_(() => PoolMember, {nullable: true})
    member!: PoolMember

    @Index_()
    @ManyToOne_(() => EraReward, {nullable: true})
    reward!: EraReward

    @BigIntColumn_({nullable: false})
    points!: bigint

    @BigIntColumn_({nullable: false})
    accumulatedRewards!: bigint

    @BigIntColumn_({nullable: false})
    rewards!: bigint

    @BigIntColumn_({nullable: false})
    earlyBirdRewards!: bigint
}
