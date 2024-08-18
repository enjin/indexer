import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, BigIntColumn as BigIntColumn_, ManyToOne as ManyToOne_, Index as Index_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"
import {Account} from "./account.model"
import {Listing} from "./listing.model"

@Entity_()
export class CounterOffer {
    constructor(props?: Partial<CounterOffer>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @BigIntColumn_({nullable: true})
    sellerPrice!: bigint | undefined | null

    @BigIntColumn_({nullable: true})
    buyerPrice!: bigint | undefined | null

    @BigIntColumn_({nullable: false})
    amount!: bigint

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    account!: Account

    @Index_()
    @ManyToOne_(() => Listing, {nullable: true})
    listing!: Listing

    @DateTimeColumn_({nullable: false})
    createdAt!: Date
}
