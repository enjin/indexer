import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Account} from "./account.model"
import {Listing} from "./listing.model"

@Entity_()
export class ListingSale {
    constructor(props?: Partial<ListingSale>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    amount!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    price!: bigint

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    buyer!: Account

    @Index_()
    @ManyToOne_(() => Listing, {nullable: true})
    listing!: Listing

    @Column_("timestamp with time zone", {nullable: false})
    createdAt!: Date
}
