import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, ManyToOne as ManyToOne_} from "typeorm"
import * as marshal from "./marshal"
import {TransferLocationAccount} from "./_transferLocationAccount"
import {TransferAsset, fromJsonTransferAsset} from "./_transferAsset"
import {Fee} from "./fee.model"
import {TransferType} from "./_transferType"

@Entity_()
export class Transfer {
  constructor(props?: Partial<Transfer>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("timestamp with time zone", {nullable: false})
  timestamp!: Date

  @Index_()
  @Column_("int4", {nullable: false})
  blockNumber!: number

  @Index_()
  @Column_("text", {nullable: false})
  extrinsicHash!: string

  @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new TransferLocationAccount(undefined, obj)}, nullable: true})
  to!: TransferLocationAccount | undefined | null

  @Column_("jsonb", {transformer: {to: obj => obj.toJSON(), from: obj => obj == null ? undefined : new TransferLocationAccount(undefined, obj)}, nullable: false})
  from!: TransferLocationAccount

  @Column_("jsonb", {transformer: {to: obj => obj.toJSON(), from: obj => obj == null ? undefined : fromJsonTransferAsset(obj)}, nullable: false})
  asset!: TransferAsset

  @Index_()
  @ManyToOne_(() => Fee, {nullable: true})
  fee!: Fee | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  tip!: bigint | undefined | null

  @Column_("text", {nullable: true})
  error!: string | undefined | null

  @Index_()
  @Column_("bool", {nullable: false})
  success!: boolean

  @Column_("varchar", {length: 6, nullable: false})
  type!: TransferType
}
