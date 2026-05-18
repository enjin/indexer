import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, Relation as Relation_} from "@subsquid/typeorm-store"
import {Account} from "./account.model"
import {Event} from "./event.model"
import {Collection} from "./collection.model"
import {Token} from "./token.model"

@Entity_()
export class AccountTokenEvent {
    constructor(props?: Partial<AccountTokenEvent>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    from!: Relation_<Account>

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    to!: Relation_<Account> | undefined | null

    @Index_()
    @ManyToOne_(() => Event, {nullable: true})
    event!: Relation_<Event>

    @Index_()
    @ManyToOne_(() => Collection, {nullable: true})
    collection!: Relation_<Collection> | undefined | null

    @Index_()
    @ManyToOne_(() => Token, {nullable: true})
    token!: Relation_<Token> | undefined | null
}
