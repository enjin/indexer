import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, JSONColumn as JSONColumn_, BooleanColumn as BooleanColumn_, IntColumn as IntColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class GovernanceVote {
    constructor(props?: Partial<GovernanceVote>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_("idx_governance_vote_referendum_id_f13fd6ff")
    @StringColumn_({nullable: false})
    referendumId!: string

    @Index_("idx_governance_vote_account_id_f634c228")
    @StringColumn_({nullable: false})
    accountId!: string

    @StringColumn_({nullable: true})
    currency!: string | undefined | null

    @JSONColumn_({nullable: true})
    vote!: unknown | undefined | null

    @BooleanColumn_({nullable: false})
    active!: boolean

    @Index_("idx_governance_vote_updated_at_block_bbf9aa41")
    @IntColumn_({nullable: false})
    updatedAtBlock!: number
}
