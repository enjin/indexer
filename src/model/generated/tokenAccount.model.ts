import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {TokenApproval} from "./_tokenApproval"
import {Account} from "./account.model"
import {Collection} from "./collection.model"
import {Token} from "./token.model"

@Entity_()
export class TokenAccount {
  constructor(props?: Partial<TokenAccount>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  balance!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  reservedBalance!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  lockedBalance!: bigint

  @Column_("text", {nullable: true})
  namedReserves!: string | undefined | null

  @Column_("text", {nullable: true})
  locks!: string | undefined | null

  @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.map((val: any) => val.toJSON()), from: obj => obj == null ? undefined : marshal.fromList(obj, val => new TokenApproval(undefined, marshal.nonNull(val)))}, nullable: true})
  approvals!: (TokenApproval)[] | undefined | null

  @Column_("bool", {nullable: false})
  isFrozen!: boolean

  @Index_()
  @ManyToOne_(() => Account, {nullable: false})
  account!: Account

  @Index_()
  @ManyToOne_(() => Collection, {nullable: false})
  collection!: Collection

  @Index_()
  @ManyToOne_(() => Token, {nullable: false})
  token!: Token

  @Column_("timestamp with time zone", {nullable: false})
  createdAt!: Date

  @Column_("timestamp with time zone", {nullable: false})
  updatedAt!: Date
}
