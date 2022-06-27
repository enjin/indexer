import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import {Collection} from "./collection.model"
import {CollectionAccount} from "./collectionAccount.model"
import {TokenAccount} from "./tokenAccount.model"

@Entity_()
export class Account {
  constructor(props?: Partial<Account>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @OneToMany_(() => Collection, e => e.owner)
  collectionsOwned!: Collection[]

  @OneToMany_(() => CollectionAccount, e => e.account)
  collectionAccounts!: CollectionAccount[]

  @OneToMany_(() => TokenAccount, e => e.account)
  tokenAccounts!: TokenAccount[]

  @Column_("int4", {nullable: false})
  lastUpdateBlock!: number
}
