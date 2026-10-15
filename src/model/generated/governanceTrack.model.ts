import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, IntColumn as IntColumn_, BigIntColumn as BigIntColumn_, JSONColumn as JSONColumn_, OneToMany as OneToMany_, Relation as Relation_} from "@subsquid/typeorm-store"
import {GovernanceReferendum} from "./governanceReferendum.model"

@Entity_()
export class GovernanceTrack {
    constructor(props?: Partial<GovernanceTrack>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_("idx_governance_track_pallet_3f2c1f6f")
    @StringColumn_({nullable: false})
    pallet!: string

    @Index_("idx_governance_track_track_index_f421067b")
    @IntColumn_({nullable: false})
    trackIndex!: number

    @StringColumn_({nullable: false})
    name!: string

    @IntColumn_({nullable: false})
    maxDeciding!: number

    @BigIntColumn_({nullable: false})
    decisionDeposit!: bigint

    @IntColumn_({nullable: false})
    preparePeriod!: number

    @IntColumn_({nullable: false})
    decisionPeriod!: number

    @IntColumn_({nullable: false})
    confirmPeriod!: number

    @IntColumn_({nullable: false})
    minEnactmentPeriod!: number

    @JSONColumn_({nullable: false})
    minApproval!: unknown

    @JSONColumn_({nullable: false})
    minSupport!: unknown

    @Index_("idx_governance_track_updated_at_block_296f22aa")
    @IntColumn_({nullable: false})
    updatedAtBlock!: number

    @OneToMany_(() => GovernanceReferendum, e => e.governanceTrack)
    referendums!: Relation_<GovernanceReferendum[]>
}
