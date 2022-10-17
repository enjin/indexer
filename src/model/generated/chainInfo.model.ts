import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, ManyToOne as ManyToOne_} from "typeorm"
import * as marshal from "./marshal"
import {Marketplace} from "./marketplace.model"

@Entity_()
export class ChainInfo {
  constructor(props?: Partial<ChainInfo>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("int4", {nullable: false})
  specVersion!: number

  @Column_("int4", {nullable: false})
  transactionVersion!: number

  @Column_("text", {nullable: false})
  genesisHash!: string

  @Column_("text", {nullable: false})
  blockHash!: string

  @Index_()
  @Column_("int4", {nullable: false})
  blockNumber!: number

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  existentialDeposit!: bigint

  @Column_("timestamp with time zone", {nullable: false})
  timestamp!: Date

  @Index_()
  @ManyToOne_(() => Marketplace, {nullable: true})
  marketplace!: Marketplace | undefined | null
}
