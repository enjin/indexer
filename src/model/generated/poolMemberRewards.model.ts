import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, IntColumn as IntColumn_, ManyToOne as ManyToOne_, Index as Index_, Relation as Relation_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"
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

    @IntColumn_({nullable: true})
    eraIndex!: number | undefined | null

    @Index_()
    @ManyToOne_(() => NominationPool, {nullable: true})
    pool!: Relation_<NominationPool>

    @Index_()
    @ManyToOne_(() => PoolMember, {nullable: true})
    member!: Relation_<PoolMember>

    @Index_()
    @ManyToOne_(() => EraReward, {nullable: true})
    reward!: Relation_<EraReward>

    @BigIntColumn_({nullable: false})
    points!: bigint

    @BigIntColumn_({nullable: false})
    accumulatedRewards!: bigint

    @BigIntColumn_({nullable: false})
    rewards!: bigint
}
