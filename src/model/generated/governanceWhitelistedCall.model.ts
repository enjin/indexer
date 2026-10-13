import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, BooleanColumn as BooleanColumn_, IntColumn as IntColumn_, Index as Index_} from "@subsquid/typeorm-store"

@Entity_()
export class GovernanceWhitelistedCall {
    constructor(props?: Partial<GovernanceWhitelistedCall>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @BooleanColumn_({nullable: false})
    active!: boolean

    @IntColumn_({nullable: true})
    lastDispatchedBlock!: number | undefined | null

    @Index_("idx_governance_whitelisted_call_updated_at_block_0ae98db8")
    @IntColumn_({nullable: false})
    updatedAtBlock!: number
}
