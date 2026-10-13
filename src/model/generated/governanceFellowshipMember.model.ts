import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, IntColumn as IntColumn_, BooleanColumn as BooleanColumn_, Index as Index_} from "@subsquid/typeorm-store"

@Entity_()
export class GovernanceFellowshipMember {
    constructor(props?: Partial<GovernanceFellowshipMember>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @IntColumn_({nullable: true})
    rank!: number | undefined | null

    @BooleanColumn_({nullable: false})
    active!: boolean

    @Index_("idx_governance_fellowship_member_updated_at_block_428be4dd")
    @IntColumn_({nullable: false})
    updatedAtBlock!: number
}
