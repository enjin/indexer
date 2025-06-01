import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, BigIntColumn as BigIntColumn_, IntColumn as IntColumn_, StringColumn as StringColumn_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"
import {Account} from "./account.model"
import {Listing} from "./listing.model"

@Entity_()
export class Bid {
    constructor(props?: Partial<Bid>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    bidder!: Account

    @BigIntColumn_({nullable: false})
    price!: bigint

    @Index_()
    @ManyToOne_(() => Listing, {nullable: true})
    listing!: Listing

    @IntColumn_({nullable: false})
    height!: number

    @StringColumn_({nullable: true})
    extrinsicHash!: string | undefined | null

    @DateTimeColumn_({nullable: false})
    createdAt!: Date
}
