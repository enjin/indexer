import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, IntColumn as IntColumn_, JSONColumn as JSONColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class GovernanceTreasuryItem {
    constructor(props?: Partial<GovernanceTreasuryItem>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_("idx_governance_treasury_item_kind_33195396")
    @StringColumn_({nullable: false})
    kind!: string

    @Index_("idx_governance_treasury_item_item_index_913aac79")
    @IntColumn_({nullable: false})
    itemIndex!: number

    @Index_("idx_governance_treasury_item_status_f2c85ced")
    @StringColumn_({nullable: false})
    status!: string

    @JSONColumn_({nullable: true})
    details!: unknown | undefined | null

    @Index_("idx_governance_treasury_item_updated_at_block_fff0e418")
    @IntColumn_({nullable: false})
    updatedAtBlock!: number
}
