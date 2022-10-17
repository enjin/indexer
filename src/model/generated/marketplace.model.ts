import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class Marketplace {
  constructor(props?: Partial<Marketplace>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("numeric", {transformer: marshal.floatTransformer, nullable: false})
  protocolFee!: number

  @Column_("int4", {nullable: false})
  fixedPriceListingCount!: number

  @Column_("int4", {nullable: false})
  auctionListingCount!: number
}
