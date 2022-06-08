import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Collection} from "./collection.model"
import {Token} from "./token.model"

@Entity_()
export class TokenAccount {
  constructor(props?: Partial<TokenAccount>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => Collection, {nullable: false})
  collection!: Collection

  @Index_()
  @ManyToOne_(() => Token, {nullable: false})
  token!: Token

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  balance!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  reservedBalance!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  lockedBalance!: bigint

  @Column_("bool", {nullable: false})
  isFrozen!: boolean
}
