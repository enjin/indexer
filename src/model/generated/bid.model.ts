import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
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

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    price!: bigint

    @Index_()
    @ManyToOne_(() => Listing, {nullable: true})
    listing!: Listing

    @Column_("int4", {nullable: false})
    height!: number

    @Column_("text", {nullable: true})
    extrinsicHash!: string | undefined | null

    @Column_("timestamp with time zone", {nullable: false})
    createdAt!: Date
}
