import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Trait} from "./trait.model"
import {Token} from "./token.model"

@Entity_()
export class TraitToken {
    constructor(props?: Partial<TraitToken>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Trait, {nullable: true})
    trait!: Trait

    @Index_()
    @ManyToOne_(() => Token, {nullable: true})
    token!: Token
}
