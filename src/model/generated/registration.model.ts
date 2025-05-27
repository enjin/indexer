import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, BigIntColumn as BigIntColumn_, ManyToOne as ManyToOne_, Index as Index_, JSONColumn as JSONColumn_, StringColumn as StringColumn_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"
import * as marshal from "./marshal"
import {Account} from "./account.model"
import {Judgement} from "./_judgement"
import {IdentityJudgement} from "./_identityJudgement"

@Entity_()
export class Registration {
    constructor(props?: Partial<Registration>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @BigIntColumn_({nullable: false})
    deposit!: bigint

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    account!: Account

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.map((val: any) => val.toJSON()), from: obj => obj == null ? undefined : marshal.fromList(obj, val => new Judgement(undefined, marshal.nonNull(val)))}, nullable: true})
    judgements!: (Judgement)[] | undefined | null

    @Column_("varchar", {length: 10, nullable: false})
    currentJudgement!: IdentityJudgement

    @JSONColumn_({nullable: true})
    additional!: unknown | undefined | null

    @StringColumn_({nullable: true})
    display!: string | undefined | null

    @StringColumn_({nullable: true})
    legal!: string | undefined | null

    @StringColumn_({nullable: true})
    web!: string | undefined | null

    @StringColumn_({nullable: true})
    riot!: string | undefined | null

    @StringColumn_({nullable: true})
    email!: string | undefined | null

    @StringColumn_({nullable: true})
    pgpFingerprint!: string | undefined | null

    @StringColumn_({nullable: true})
    image!: string | undefined | null

    @StringColumn_({nullable: true})
    twitter!: string | undefined | null

    @DateTimeColumn_({nullable: false})
    createdAt!: Date
}
