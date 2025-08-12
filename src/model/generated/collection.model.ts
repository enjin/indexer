import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, BigIntColumn as BigIntColumn_, Index as Index_, ManyToOne as ManyToOne_, OneToMany as OneToMany_, StringColumn as StringColumn_, IntColumn as IntColumn_, BooleanColumn as BooleanColumn_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"
import * as marshal from "./marshal"
import {Account} from "./account.model"
import {MintPolicy} from "./_mintPolicy"
import {MarketPolicy} from "./_marketPolicy"
import {RoyaltyCurrency} from "./royaltyCurrency.model"
import {TransferPolicy} from "./_transferPolicy"
import {Token} from "./token.model"
import {CollectionAccount} from "./collectionAccount.model"
import {TokenAccount} from "./tokenAccount.model"
import {Attribute} from "./attribute.model"
import {Trait} from "./trait.model"
import {TokenRarity} from "./tokenRarity.model"
import {TokenGroup} from "./tokenGroup.model"
import {Metadata} from "./_metadata"
import {CollectionFlags} from "./_collectionFlags"
import {CollectionSocials} from "./_collectionSocials"
import {CollectionStats} from "./_collectionStats"

@Entity_()
export class Collection {
    constructor(props?: Partial<Collection>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @BigIntColumn_({nullable: false})
    collectionId!: bigint

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    owner!: Account

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new MintPolicy(undefined, obj)}, nullable: true})
    mintPolicy!: MintPolicy | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new MarketPolicy(undefined, obj)}, nullable: true})
    marketPolicy!: MarketPolicy | undefined | null

    @OneToMany_(() => RoyaltyCurrency, e => e.collection)
    explicitRoyaltyCurrencies!: RoyaltyCurrency[]

    @StringColumn_({nullable: true})
    burnPolicy!: string | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new TransferPolicy(undefined, obj)}, nullable: true})
    transferPolicy!: TransferPolicy | undefined | null

    @StringColumn_({nullable: true})
    attributePolicy!: string | undefined | null

    @IntColumn_({nullable: false})
    attributeCount!: number

    @BigIntColumn_({nullable: false})
    totalDeposit!: bigint

    @BooleanColumn_({nullable: true})
    isTransferPending!: boolean | undefined | null

    @OneToMany_(() => Token, e => e.collection)
    tokens!: Token[]

    @OneToMany_(() => CollectionAccount, e => e.collection)
    collectionAccounts!: CollectionAccount[]

    @OneToMany_(() => TokenAccount, e => e.collection)
    tokenAccounts!: TokenAccount[]

    @OneToMany_(() => Attribute, e => e.collection)
    attributes!: Attribute[]

    @OneToMany_(() => Trait, e => e.collection)
    traits!: Trait[]

    @OneToMany_(() => TokenRarity, e => e.collection)
    rarity!: TokenRarity[]

    @OneToMany_(() => TokenGroup, e => e.collection)
    tokenGroups!: TokenGroup[]

    @Index_()
    @StringColumn_({nullable: true})
    name!: string | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new Metadata(undefined, obj)}, nullable: true})
    metadata!: Metadata | undefined | null

    @DateTimeColumn_({nullable: false})
    createdAt!: Date

    @Column_("jsonb", {transformer: {to: obj => obj.toJSON(), from: obj => obj == null ? undefined : new CollectionFlags(undefined, obj)}, nullable: false})
    flags!: CollectionFlags

    @Column_("jsonb", {transformer: {to: obj => obj.toJSON(), from: obj => obj == null ? undefined : new CollectionSocials(undefined, obj)}, nullable: false})
    socials!: CollectionSocials

    @StringColumn_({nullable: true})
    category!: string | undefined | null

    @DateTimeColumn_({nullable: true})
    verifiedAt!: Date | undefined | null

    @Index_()
    @BooleanColumn_({nullable: false})
    hidden!: boolean

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new CollectionStats(undefined, obj)}, nullable: true})
    stats!: CollectionStats | undefined | null
}
