import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Account} from "./account.model"
import {Token} from "./token.model"
import {FeeSide} from "./_feeSide"
import {ListingData, fromJsonListingData} from "./_listingData"
import {ListingState, fromJsonListingState} from "./_listingState"
import {Bid} from "./bid.model"
import {ListingStatus, fromJsonListingStatus} from "./_listingStatus"

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

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  amount!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  price!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  minTakeValue!: bigint

  @Column_("varchar", {length: 5, nullable: false})
  feeSide!: FeeSide

  @Column_("int4", {nullable: false})
  height!: number

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  deposit!: bigint

  @Column_("text", {nullable: false})
  salt!: string

  @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : fromJsonListingData(obj)}, nullable: true})
  data!: ListingData | undefined | null

  @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : fromJsonListingState(obj)}, nullable: true})
  state!: ListingState | undefined | null

  @OneToMany_(() => Bid, e => e.listing)
  bids!: Bid[]

  @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : fromJsonListingStatus(obj)}, nullable: true})
  status!: ListingStatus | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  highestPrice!: bigint

  @Column_("timestamp with time zone", {nullable: false})
  createdAt!: Date

  @Column_("timestamp with time zone", {nullable: false})
  updatedAt!: Date
}
