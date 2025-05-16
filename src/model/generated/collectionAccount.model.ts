import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, BooleanColumn as BooleanColumn_, IntColumn as IntColumn_, ManyToOne as ManyToOne_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"
import * as marshal from "./marshal"
import {CollectionApproval} from "./_collectionApproval"
import {Account} from "./account.model"
import {Collection} from "./collection.model"

@Index_(["account", "collection"], {unique: true})
@Entity_()
export class CollectionAccount {
    constructor(props?: Partial<CollectionAccount>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @BooleanColumn_({nullable: false})
    isFrozen!: boolean

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.map((val: any) => val.toJSON()), from: obj => obj == null ? undefined : marshal.fromList(obj, val => new CollectionApproval(undefined, marshal.nonNull(val)))}, nullable: true})
    approvals!: (CollectionApproval)[] | undefined | null

    @IntColumn_({nullable: false})
    accountCount!: number

    @ManyToOne_(() => Account, {nullable: true})
    account!: Account

    @Index_()
    @ManyToOne_(() => Collection, {nullable: true})
    collection!: Collection

    @Index_()
    @DateTimeColumn_({nullable: false})
    createdAt!: Date

    @DateTimeColumn_({nullable: false})
    updatedAt!: Date
}
