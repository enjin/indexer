import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, IntColumn as IntColumn_, BigIntColumn as BigIntColumn_, BooleanColumn as BooleanColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class GovernanceDelegation {
    constructor(props?: Partial<GovernanceDelegation>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_("idx_governance_delegation_account_id_298dcb0b")
    @StringColumn_({nullable: false})
    accountId!: string

    @IntColumn_({nullable: true})
    track!: number | undefined | null

    @StringColumn_({nullable: true})
    currency!: string | undefined | null

    @StringColumn_({nullable: true})
    target!: string | undefined | null

    @StringColumn_({nullable: true})
    conviction!: string | undefined | null

    @BigIntColumn_({nullable: true})
    balance!: bigint | undefined | null

    @BooleanColumn_({nullable: false})
    active!: boolean

    @Index_("idx_governance_delegation_updated_at_block_e3469896")
    @IntColumn_({nullable: false})
    updatedAtBlock!: number
}
