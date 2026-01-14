import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"
import * as marshal from "./marshal"
import {Collection} from "./collection.model"
import {Attribute} from "./attribute.model"
import {Metadata} from "./_metadata"
import {TokenGroupToken} from "./tokenGroupToken.model"

@Entity_()
export class TokenGroup {
    constructor(props?: Partial<TokenGroup>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Collection, {nullable: true})
    collection!: Collection

    @OneToMany_(() => Attribute, e => e.tokenGroup)
    attributes!: Attribute[]

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new Metadata(undefined, obj)}, nullable: true})
    metadata!: Metadata | undefined | null

    @OneToMany_(() => TokenGroupToken, e => e.tokenGroup)
    tokenGroupTokens!: TokenGroupToken[]

    @DateTimeColumn_({nullable: true})
    createdAt!: Date | undefined | null
}
