import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {BalancesAccount} from "./_balancesAccount"
import {AccountTransfer} from "./accountTransfer.model"

@Entity_()
export class Account {
  constructor(props?: Partial<Account>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("jsonb", {transformer: {to: obj => obj.toJSON(), from: obj => new BalancesAccount(undefined, marshal.nonNull(obj))}, nullable: false})
  balances!: BalancesAccount

  @OneToMany_(() => AccountTransfer, e => e.account)
  transfers!: AccountTransfer[]

  @Column_("int4", {nullable: false})
  lastUpdateBlock!: number
}
