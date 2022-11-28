import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Collection} from "./collection.model"
import {Token} from "./token.model"

@Entity_()
export class RoyaltyCurrency {
    constructor(props?: Partial<RoyaltyCurrency>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Collection, {nullable: true})
    collection!: Collection

    @Index_()
    @ManyToOne_(() => Token, {nullable: true})
    token!: Token
}
