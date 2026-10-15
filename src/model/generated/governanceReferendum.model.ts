import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_, Relation as Relation_, StringColumn as StringColumn_, Index as Index_, IntColumn as IntColumn_, ManyToOne as ManyToOne_, JSONColumn as JSONColumn_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"
import {GovernanceVote} from "./governanceVote.model"
import {GovernanceTrack} from "./governanceTrack.model"

@Entity_()
export class GovernanceReferendum {
    constructor(props?: Partial<GovernanceReferendum>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @OneToMany_(() => GovernanceVote, e => e.referendum)
    voters!: Relation_<GovernanceVote[]>

    @Index_("idx_governance_referendum_pallet_b6b95dfb")
    @StringColumn_({nullable: false})
    pallet!: string

    @IntColumn_({nullable: true})
    track!: number | undefined | null

    @Index_("idx_governance_referendum_governance_track_17a7a2ec")
    @ManyToOne_(() => GovernanceTrack, {nullable: true})
    governanceTrack!: Relation_<GovernanceTrack> | undefined | null

    @Index_("idx_governance_referendum_status_6611f23d")
    @StringColumn_({nullable: false})
    status!: string

    @JSONColumn_({nullable: true})
    proposal!: unknown | undefined | null

    @Index_("idx_governance_referendum_proposal_preimage_hash_74b0a0b5")
    @StringColumn_({nullable: true})
    proposalPreimageHash!: string | undefined | null

    @StringColumn_({nullable: true})
    proposalPreimageStatus!: string | undefined | null

    @StringColumn_({nullable: true})
    proposalPreimage!: string | undefined | null

    @StringColumn_({nullable: true})
    metadataHash!: string | undefined | null

    @BigIntColumn_({nullable: true})
    tallyAyes!: bigint | undefined | null

    @BigIntColumn_({nullable: true})
    tallyNays!: bigint | undefined | null

    @BigIntColumn_({nullable: true})
    tallySupport!: bigint | undefined | null

    @JSONColumn_({nullable: true})
    submissionDeposit!: unknown | undefined | null

    @JSONColumn_({nullable: true})
    decisionDeposit!: unknown | undefined | null

    @IntColumn_({nullable: true})
    submittedAtBlock!: number | undefined | null

    @IntColumn_({nullable: true})
    endedAtBlock!: number | undefined | null

    @Index_("idx_governance_referendum_updated_at_block_34acf9a1")
    @IntColumn_({nullable: false})
    updatedAtBlock!: number
}
