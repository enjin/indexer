import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Account} from "./account.model"

@Entity_()
export class Fee {
  constructor(props?: Partial<Fee>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  amount!: bigint | undefined | null

  @Index_()
  @ManyToOne_(() => Account, {nullable: false})
  who!: Account
}
