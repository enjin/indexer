import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, BigIntColumn as BigIntColumn_, FloatColumn as FloatColumn_, OneToMany as OneToMany_} from "@subsquid/typeorm-store"
import * as marshal from "./marshal"
import {NominationPool} from "./nominationPool.model"
import {Era} from "./era.model"
import {CommissionPayment} from "./_commissionPayment"
import {PoolMemberRewards} from "./poolMemberRewards.model"

@Entity_()
export class EraReward {
    constructor(props?: Partial<EraReward>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => NominationPool, {nullable: true})
    pool!: NominationPool

    @Index_()
    @ManyToOne_(() => Era, {nullable: true})
    era!: Era

    @BigIntColumn_({nullable: false})
    rate!: bigint

    @BigIntColumn_({nullable: false})
    changeInRate!: bigint

    @BigIntColumn_({nullable: false})
    active!: bigint

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new CommissionPayment(undefined, obj)}, nullable: true})
    commission!: CommissionPayment | undefined | null

    @BigIntColumn_({nullable: true})
    bonus!: bigint | undefined | null

    @BigIntColumn_({nullable: false})
    reinvested!: bigint

    @FloatColumn_({nullable: false})
    apy!: number

    @FloatColumn_({nullable: false})
    averageApy!: number

    @OneToMany_(() => PoolMemberRewards, e => e.reward)
    memberRewards!: PoolMemberRewards[]
}
