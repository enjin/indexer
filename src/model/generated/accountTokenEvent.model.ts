import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, StringColumn as StringColumn_} from "@subsquid/typeorm-store"
import * as marshal from "./marshal"
import {Account} from "./account.model"
import {Event} from "./event.model"
import {AccountTokenEventMeta} from "./_accountTokenEventMeta"

@Entity_()
export class AccountTokenEvent {
    constructor(props?: Partial<AccountTokenEvent>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    from!: Account

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    to!: Account | undefined | null

    @Index_()
    @ManyToOne_(() => Event, {nullable: true})
    event!: Event

    @Index_()
    @StringColumn_({nullable: false})
    collectionId!: string

    @Index_()
    @StringColumn_({nullable: false})
    tokenId!: string

    @Column_("jsonb", {transformer: {to: obj => obj.toJSON(), from: obj => obj == null ? undefined : new AccountTokenEventMeta(undefined, obj)}, nullable: false})
    meta!: AccountTokenEventMeta
}
