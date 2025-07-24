import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, StringColumn as StringColumn_, BigIntColumn as BigIntColumn_, ManyToOne as ManyToOne_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"
import {Collection} from "./collection.model"
import {Token} from "./token.model"

@Index_(["key", "token", "collection"], {unique: false})
@Entity_()
export class Attribute {
    constructor(props?: Partial<Attribute>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @StringColumn_({nullable: false})
    key!: string

    @StringColumn_({nullable: false})
    value!: string

    @BigIntColumn_({nullable: false})
    deposit!: bigint

    @Index_()
    @ManyToOne_(() => Collection, {nullable: true})
    collection!: Collection | undefined | null

    @Index_()
    @ManyToOne_(() => Token, {nullable: true})
    token!: Token | undefined | null

    @DateTimeColumn_({nullable: false})
    createdAt!: Date

    @DateTimeColumn_({nullable: false})
    updatedAt!: Date
}
