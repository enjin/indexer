import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, IntColumn as IntColumn_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"
import {Status} from "./_status"
import {Listing} from "./listing.model"

@Entity_()
export class ListingStatus {
    constructor(props?: Partial<ListingStatus>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("varchar", {length: 9, nullable: false})
    type!: Status

    @Index_()
    @ManyToOne_(() => Listing, {nullable: true})
    listing!: Listing

    @IntColumn_({nullable: false})
    height!: number

    @DateTimeColumn_({nullable: false})
    createdAt!: Date
}
