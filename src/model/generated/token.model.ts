import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, ManyToOne as ManyToOne_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {TokenCap, fromJsonTokenCap} from "./_tokenCap"
import {TokenBehavior, fromJsonTokenBehavior} from "./_tokenBehavior"
import {Collection} from "./collection.model"
import {TokenAccount} from "./tokenAccount.model"
import {Attribute} from "./attribute.model"
import {Listing} from "./listing.model"
import {Metadata} from "./_metadata"

@Entity_()
export class Token {
    constructor(props?: Partial<Token>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    tokenId!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    supply!: bigint

    @Column_("bool", {nullable: false})
    isFrozen!: boolean

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : fromJsonTokenCap(obj)}, nullable: true})
    cap!: TokenCap | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : fromJsonTokenBehavior(obj)}, nullable: true})
    behavior!: TokenBehavior | undefined | null

    @Column_("bool", {nullable: false})
    listingForbidden!: boolean

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    unitPrice!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    minimumBalance!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    mintDeposit!: bigint

    @Column_("int4", {nullable: false})
    attributeCount!: number

    @Index_()
    @ManyToOne_(() => Collection, {nullable: true})
    collection!: Collection

    @OneToMany_(() => TokenAccount, e => e.token)
    tokenAccounts!: TokenAccount[]

    @OneToMany_(() => Attribute, e => e.token)
    attributes!: Attribute[]

    @OneToMany_(() => Listing, e => e.makeAssetId)
    listings!: Listing[]

    @OneToMany_(() => Listing, e => e.takeAssetId)
    offers!: Listing[]

    @Column_("bool", {nullable: true})
    nonFungible!: boolean | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new Metadata(undefined, obj)}, nullable: true})
    metadata!: Metadata | undefined | null

    @Column_("timestamp with time zone", {nullable: false})
    createdAt!: Date
}
