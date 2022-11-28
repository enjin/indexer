import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {CollectionApproval} from "./_collectionApproval"
import {Account} from "./account.model"
import {Collection} from "./collection.model"

@Entity_()
export class CollectionAccount {
    constructor(props?: Partial<CollectionAccount>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("bool", {nullable: false})
    isFrozen!: boolean

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.map((val: any) => val.toJSON()), from: obj => obj == null ? undefined : marshal.fromList(obj, val => new CollectionApproval(undefined, marshal.nonNull(val)))}, nullable: true})
    approvals!: (CollectionApproval)[] | undefined | null

    @Column_("int4", {nullable: false})
    accountCount!: number

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    account!: Account

    @Index_()
    @ManyToOne_(() => Collection, {nullable: true})
    collection!: Collection

    @Column_("timestamp with time zone", {nullable: false})
    createdAt!: Date

    @Column_("timestamp with time zone", {nullable: false})
    updatedAt!: Date
}
