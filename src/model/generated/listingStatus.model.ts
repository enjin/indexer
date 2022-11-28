import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {ListingStatusType} from "./_listingStatusType"
import {Listing} from "./listing.model"

@Entity_()
export class ListingStatus {
    constructor(props?: Partial<ListingStatus>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("varchar", {length: 9, nullable: false})
    type!: ListingStatusType

    @Index_()
    @ManyToOne_(() => Listing, {nullable: true})
    listing!: Listing

    @Column_("int4", {nullable: false})
    height!: number

    @Column_("timestamp with time zone", {nullable: false})
    createdAt!: Date
}
