import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, ManyToOne as ManyToOne_, Relation as Relation_, IntColumn as IntColumn_} from "@subsquid/typeorm-store"
import {Token} from "./token.model"
import {TokenGroup} from "./tokenGroup.model"

@Index_(["token", "tokenGroup"], {unique: true})
@Entity_()
export class TokenGroupToken {
    constructor(props?: Partial<TokenGroupToken>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @ManyToOne_(() => Token, {nullable: true})
    token!: Relation_<Token>

    @Index_()
    @ManyToOne_(() => TokenGroup, {nullable: true})
    tokenGroup!: Relation_<TokenGroup>

    @IntColumn_({nullable: true})
    position!: number | undefined | null
}
