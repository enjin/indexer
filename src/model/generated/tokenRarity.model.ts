import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, Relation as Relation_, OneToOne as OneToOne_, JoinColumn as JoinColumn_, FloatColumn as FloatColumn_, IntColumn as IntColumn_} from "@subsquid/typeorm-store"
import {Collection} from "./collection.model"
import {Token} from "./token.model"

@Entity_()
export class TokenRarity {
    constructor(props?: Partial<TokenRarity>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Collection, {nullable: true})
    collection!: Relation_<Collection>

    @Index_({unique: true})
    @OneToOne_(() => Token, {nullable: true})
    @JoinColumn_()
    token!: Relation_<Token>

    @FloatColumn_({nullable: false})
    score!: number

    @IntColumn_({nullable: false})
    rank!: number
}
