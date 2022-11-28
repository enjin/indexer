import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {TokenEventType, fromJsonTokenEventType} from "./_tokenEventType"
import {Token} from "./token.model"

@Entity_()
export class TokenEvent {
    constructor(props?: Partial<TokenEvent>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("jsonb", {transformer: {to: obj => obj.toJSON(), from: obj => obj == null ? undefined : fromJsonTokenEventType(obj)}, nullable: false})
    event!: TokenEventType

    @Index_()
    @ManyToOne_(() => Token, {nullable: true})
    token!: Token

    @Column_("int4", {nullable: false})
    height!: number

    @Column_("timestamp with time zone", {nullable: false})
    createdAt!: Date
}
