import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, IntColumn as IntColumn_, BigIntColumn as BigIntColumn_, ManyToOne as ManyToOne_, Index as Index_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"
import {Account} from "./account.model"
import {Listing} from "./listing.model"

@Entity_()
export class WhitelistedAccount {
    constructor(props?: Partial<WhitelistedAccount>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @IntColumn_({nullable: false})
    allowance!: number

    @IntColumn_({nullable: false})
    amountUsed!: number

    @BigIntColumn_({nullable: false})
    deposit!: bigint

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    account!: Account

    @Index_()
    @ManyToOne_(() => Listing, {nullable: true})
    listing!: Listing

    @DateTimeColumn_({nullable: false})
    createdAt!: Date

    @DateTimeColumn_({nullable: false})
    updatedAt!: Date
}
