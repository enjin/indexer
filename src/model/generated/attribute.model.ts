import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, BigIntColumn as BigIntColumn_, ManyToOne as ManyToOne_, Relation as Relation_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"
import {Collection} from "./collection.model"
import {Token} from "./token.model"
import {TokenGroup} from "./tokenGroup.model"

@Entity_()
export class Attribute {
    constructor(props?: Partial<Attribute>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @StringColumn_({nullable: false})
    key!: string

    @StringColumn_({nullable: false})
    value!: string

    @BigIntColumn_({nullable: false})
    deposit!: bigint

    @Index_()
    @ManyToOne_(() => Collection, {nullable: true})
    collection!: Relation_<Collection> | undefined | null

    @Index_()
    @ManyToOne_(() => Token, {nullable: true})
    token!: Relation_<Token> | undefined | null

    @Index_()
    @ManyToOne_(() => TokenGroup, {nullable: true})
    tokenGroup!: Relation_<TokenGroup> | undefined | null

    @DateTimeColumn_({nullable: false})
    createdAt!: Date

    @DateTimeColumn_({nullable: false})
    updatedAt!: Date
}
