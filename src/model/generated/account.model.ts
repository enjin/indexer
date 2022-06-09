import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {AccountBalance} from "./_accountBalance"
import {CollectionAccount} from "./collectionAccount.model"
import {TokenAccount} from "./tokenAccount.model"

@Entity_()
export class Account {
  constructor(props?: Partial<Account>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("jsonb", {transformer: {to: obj => obj.toJSON(), from: obj => new AccountBalance(undefined, marshal.nonNull(obj))}, nullable: false})
  balance!: AccountBalance

  @Column_("int4", {nullable: false})
  nonce!: number

  @OneToMany_(() => CollectionAccount, e => e.account)
  collectionAccounts!: CollectionAccount[]

  @OneToMany_(() => TokenAccount, e => e.account)
  tokenAccounts!: TokenAccount[]

  @Column_("int4", {nullable: false})
  lastUpdateBlock!: number
}
