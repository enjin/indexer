import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, BigIntColumn as BigIntColumn_, OneToMany as OneToMany_, BooleanColumn as BooleanColumn_} from "@subsquid/typeorm-store"
import * as marshal from "./marshal"
import {NominationPool} from "./nominationPool.model"
import {Account} from "./account.model"
import {TokenAccount} from "./tokenAccount.model"
import {PoolMemberRewards} from "./poolMemberRewards.model"
import {UnbondingEras} from "./_unbondingEras"
import {Era} from "./era.model"

@Entity_()
export class PoolMember {
    constructor(props?: Partial<PoolMember>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => NominationPool, {nullable: true})
    pool!: NominationPool

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    account!: Account

    @BigIntColumn_({nullable: false})
    bonded!: bigint

    @Index_()
    @ManyToOne_(() => TokenAccount, {nullable: true})
    tokenAccount!: TokenAccount | undefined | null

    @OneToMany_(() => PoolMemberRewards, e => e.member)
    rewards!: PoolMemberRewards[]

    @BigIntColumn_({nullable: true})
    accumulatedRewards!: bigint | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.map((val: any) => val.toJSON()), from: obj => obj == null ? undefined : marshal.fromList(obj, val => new UnbondingEras(undefined, marshal.nonNull(val)))}, nullable: true})
    unbondingEras!: (UnbondingEras)[] | undefined | null

    @BooleanColumn_({nullable: true})
    isStash!: boolean | undefined | null

    @BooleanColumn_({nullable: true})
    isActive!: boolean | undefined | null

    @Index_()
    @ManyToOne_(() => Era, {nullable: true})
    joinedEra!: Era | undefined | null
}
