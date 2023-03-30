import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, ManyToOne as ManyToOne_} from "typeorm"
import {Account} from "./account.model"
import {Event} from "./event.model"
import {Token} from "./token.model"

@Index_(["account", "token"], {unique: false})
@Entity_()
export class AccountTokenEvent {
    constructor(props?: Partial<AccountTokenEvent>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @ManyToOne_(() => Account, {nullable: true})
    account!: Account

    @Index_()
    @ManyToOne_(() => Event, {nullable: true})
    event!: Event

    @Index_()
    @ManyToOne_(() => Token, {nullable: true})
    token!: Token
}
