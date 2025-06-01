import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, BigIntColumn as BigIntColumn_, IntColumn as IntColumn_, StringColumn as StringColumn_, BooleanColumn as BooleanColumn_, OneToMany as OneToMany_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"
import * as marshal from "./marshal"
import {Account} from "./account.model"
import {Token} from "./token.model"
import {FeeSide} from "./_feeSide"
import {ListingData, fromJsonListingData} from "./_listingData"
import {ListingState, fromJsonListingState} from "./_listingState"
import {Bid} from "./bid.model"
import {ListingStatus} from "./listingStatus.model"
import {ListingSale} from "./listingSale.model"
import {CounterOffer} from "./counterOffer.model"
import {WhitelistedAccount} from "./whitelistedAccount.model"
import {ListingType} from "./_listingType"

@Entity_()
export class Listing {
    constructor(props?: Partial<Listing>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    seller!: Account

    @Index_()
    @ManyToOne_(() => Token, {nullable: true})
    makeAssetId!: Token

    @Index_()
    @ManyToOne_(() => Token, {nullable: true})
    takeAssetId!: Token

    @BigIntColumn_({nullable: false})
    amount!: bigint

    @BigIntColumn_({nullable: false})
    price!: bigint

    @BigIntColumn_({nullable: false})
    minTakeValue!: bigint

    @Column_("varchar", {length: 5, nullable: false})
    feeSide!: FeeSide

    @IntColumn_({nullable: false})
    height!: number

    @BigIntColumn_({nullable: false})
    deposit!: bigint

    @StringColumn_({nullable: false})
    salt!: string

    @Column_("jsonb", {transformer: {to: obj => obj.toJSON(), from: obj => obj == null ? undefined : fromJsonListingData(obj)}, nullable: false})
    data!: ListingData

    @Column_("jsonb", {transformer: {to: obj => obj.toJSON(), from: obj => obj == null ? undefined : fromJsonListingState(obj)}, nullable: false})
    state!: ListingState

    @IntColumn_({nullable: true})
    startBlock!: number | undefined | null

    @IntColumn_({nullable: false})
    creationBlock!: number

    @BooleanColumn_({nullable: false})
    usesWhitelist!: boolean

    @OneToMany_(() => Bid, e => e.listing)
    bids!: Bid[]

    @OneToMany_(() => ListingStatus, e => e.listing)
    status!: ListingStatus[]

    @OneToMany_(() => ListingSale, e => e.listing)
    sales!: ListingSale[]

    @OneToMany_(() => CounterOffer, e => e.listing)
    counterOffers!: CounterOffer[]

    @OneToMany_(() => WhitelistedAccount, e => e.listing)
    whitelistedAccounts!: WhitelistedAccount[]

    @Index_()
    @BigIntColumn_({nullable: false})
    highestPrice!: bigint

    @BooleanColumn_({nullable: true})
    deadListing!: boolean | undefined | null

    @Index_()
    @BooleanColumn_({nullable: false})
    isActive!: boolean

    @Index_()
    @Column_("varchar", {length: 10, nullable: false})
    type!: ListingType

    @Index_()
    @BooleanColumn_({nullable: true})
    hasRoyaltyIncreased!: boolean | undefined | null

    @Index_()
    @DateTimeColumn_({nullable: false})
    createdAt!: Date

    @DateTimeColumn_({nullable: false})
    updatedAt!: Date
}
