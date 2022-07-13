import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Transfer} from "./transfer.model"
import {Account} from "./account.model"
import {TransferDirection} from "./_transferDirection"

@Entity_()
export class AccountTransfer {
  constructor(props?: Partial<AccountTransfer>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => Transfer, {nullable: true})
  transfer!: Transfer | undefined | null

  @Index_()
  @ManyToOne_(() => Account, {nullable: false})
  account!: Account

  @Column_("varchar", {length: 4, nullable: true})
  direction!: TransferDirection | undefined | null
}
