import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, IntColumn as IntColumn_, JSONColumn as JSONColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class GovernanceActivity {
    constructor(props?: Partial<GovernanceActivity>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_("idx_governance_activity_pallet_a0349c17")
    @StringColumn_({nullable: false})
    pallet!: string

    @Index_("idx_governance_activity_name_1eb20180")
    @StringColumn_({nullable: false})
    name!: string

    @Index_("idx_governance_activity_referendum_id_50de1e54")
    @StringColumn_({nullable: true})
    referendumId!: string | undefined | null

    @Index_("idx_governance_activity_account_id_11ada085")
    @StringColumn_({nullable: true})
    accountId!: string | undefined | null

    @Index_("idx_governance_activity_block_number_c4280d4d")
    @IntColumn_({nullable: false})
    blockNumber!: number

    @StringColumn_({nullable: true})
    extrinsicId!: string | undefined | null

    @JSONColumn_({nullable: true})
    data!: unknown | undefined | null
}
