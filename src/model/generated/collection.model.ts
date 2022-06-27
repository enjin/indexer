import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Account} from "./account.model"
import {MintPolicy} from "./_mintPolicy"
import {TransferPolicy} from "./_transferPolicy"
import {Token} from "./token.model"
import {CollectionAccount} from "./collectionAccount.model"
import {TokenAccount} from "./tokenAccount.model"
import {Attribute} from "./attribute.model"

@Entity_()
export class Collection {
  constructor(props?: Partial<Collection>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => Account, {nullable: false})
  owner!: Account

  @Column_("jsonb", {transformer: {to: obj => obj.toJSON(), from: obj => new MintPolicy(undefined, marshal.nonNull(obj))}, nullable: false})
  mintPolicy!: MintPolicy

  @Column_("text", {nullable: true})
  burnPolicy!: string | undefined | null

  @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new TransferPolicy(undefined, obj)}, nullable: true})
  transferPolicy!: TransferPolicy | undefined | null

  @Column_("text", {nullable: true})
  attributePolicy!: string | undefined | null

  @Column_("int4", {nullable: false})
  tokenCount!: number

  @Column_("int4", {nullable: false})
  attributeCount!: number

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  totalDeposit!: bigint

  @OneToMany_(() => Token, e => e.collection)
  tokens!: Token[]

  @OneToMany_(() => CollectionAccount, e => e.collection)
  collectionAccounts!: CollectionAccount[]

  @OneToMany_(() => TokenAccount, e => e.collection)
  tokenAccounts!: TokenAccount[]

  @OneToMany_(() => Attribute, e => e.collection)
  attributes!: Attribute[]

  @Column_("text", {nullable: true})
  name!: string | undefined | null

  @Column_("timestamp with time zone", {nullable: false})
  createdAt!: Date
}
