import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, BigIntColumn as BigIntColumn_, BooleanColumn as BooleanColumn_, ManyToOne as ManyToOne_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"
import * as marshal from "./marshal"
import {TokenNamedReserve} from "./_tokenNamedReserve"
import {TokenLock} from "./_tokenLock"
import {TokenApproval} from "./_tokenApproval"
import {Account} from "./account.model"
import {Collection} from "./collection.model"
import {Token} from "./token.model"

@Index_(["account", "token"], {unique: true})
@Entity_()
export class TokenAccount {
    constructor(props?: Partial<TokenAccount>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @BigIntColumn_({nullable: false})
    totalBalance!: bigint

    @BigIntColumn_({nullable: false})
    balance!: bigint

    @BigIntColumn_({nullable: false})
    reservedBalance!: bigint

    @BigIntColumn_({nullable: false})
    lockedBalance!: bigint

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.map((val: any) => val.toJSON()), from: obj => obj == null ? undefined : marshal.fromList(obj, val => new TokenNamedReserve(undefined, marshal.nonNull(val)))}, nullable: true})
    namedReserves!: (TokenNamedReserve)[] | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.map((val: any) => val.toJSON()), from: obj => obj == null ? undefined : marshal.fromList(obj, val => new TokenLock(undefined, marshal.nonNull(val)))}, nullable: true})
    locks!: (TokenLock)[] | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.map((val: any) => val.toJSON()), from: obj => obj == null ? undefined : marshal.fromList(obj, val => new TokenApproval(undefined, marshal.nonNull(val)))}, nullable: true})
    approvals!: (TokenApproval)[] | undefined | null

    @BooleanColumn_({nullable: false})
    isFrozen!: boolean

    @ManyToOne_(() => Account, {nullable: true})
    account!: Account

    @Index_()
    @ManyToOne_(() => Collection, {nullable: true})
    collection!: Collection

    @Index_()
    @ManyToOne_(() => Token, {nullable: true})
    token!: Token

    @Index_()
    @DateTimeColumn_({nullable: false})
    createdAt!: Date

    @DateTimeColumn_({nullable: false})
    updatedAt!: Date
}
