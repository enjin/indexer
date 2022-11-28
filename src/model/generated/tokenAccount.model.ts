import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {TokenNamedReserve} from "./_tokenNamedReserve"
import {TokenLock} from "./_tokenLock"
import {TokenApproval} from "./_tokenApproval"
import {Account} from "./account.model"
import {Collection} from "./collection.model"
import {Token} from "./token.model"

@Entity_()
export class TokenAccount {
    constructor(props?: Partial<TokenAccount>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    balance!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    reservedBalance!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    lockedBalance!: bigint

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.map((val: any) => val.toJSON()), from: obj => obj == null ? undefined : marshal.fromList(obj, val => new TokenNamedReserve(undefined, marshal.nonNull(val)))}, nullable: true})
    namedReserves!: (TokenNamedReserve)[] | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.map((val: any) => val.toJSON()), from: obj => obj == null ? undefined : marshal.fromList(obj, val => new TokenLock(undefined, marshal.nonNull(val)))}, nullable: true})
    locks!: (TokenLock)[] | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.map((val: any) => val.toJSON()), from: obj => obj == null ? undefined : marshal.fromList(obj, val => new TokenApproval(undefined, marshal.nonNull(val)))}, nullable: true})
    approvals!: (TokenApproval)[] | undefined | null

    @Column_("bool", {nullable: false})
    isFrozen!: boolean

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    account!: Account

    @Index_()
    @ManyToOne_(() => Collection, {nullable: true})
    collection!: Collection

    @Index_()
    @ManyToOne_(() => Token, {nullable: true})
    token!: Token

    @Column_("timestamp with time zone", {nullable: false})
    createdAt!: Date

    @Column_("timestamp with time zone", {nullable: false})
    updatedAt!: Date
}
