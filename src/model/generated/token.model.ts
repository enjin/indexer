import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Collection} from "./collection.model"
import {TokenAccount} from "./tokenAccount.model"
import {CapType} from "./_capType"

@Entity_()
export class Token {
  constructor(props?: Partial<Token>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => Collection, {nullable: false})
  collection!: Collection

  @OneToMany_(() => TokenAccount, e => e.token)
  accounts!: TokenAccount[]

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  supply!: bigint

  @Column_("varchar", {length: 10, nullable: true})
  capType!: CapType | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  capSupply!: bigint

  @Column_("bool", {nullable: false})
  isFrozen!: boolean

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  minimumBalance!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  unitPrice!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  mintDeposit!: bigint

  @Column_("int4", {nullable: false})
  attributeCount!: number

  @Column_("timestamp with time zone", {nullable: false})
  createdAt!: Date
}
