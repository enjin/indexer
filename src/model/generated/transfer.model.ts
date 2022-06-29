import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {TransferLocation, fromJsonTransferLocation} from "./_transferLocation"
import {TransferAsset, fromJsonTransferAsset} from "./_transferAsset"
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

  @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : fromJsonTransferLocation(obj)}, nullable: true})
  to!: TransferLocation | undefined | null

  @Column_("jsonb", {transformer: {to: obj => obj.toJSON(), from: obj => fromJsonTransferLocation(obj)}, nullable: false})
  from!: TransferLocation

  @Column_("jsonb", {transformer: {to: obj => obj.toJSON(), from: obj => fromJsonTransferAsset(obj)}, nullable: false})
  asset!: TransferAsset

  @Index_()
  @Column_("bool", {nullable: false})
  success!: boolean

  @Column_("varchar", {length: 12, nullable: false})
  type!: TransferType
}
