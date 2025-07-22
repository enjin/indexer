import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, BigIntColumn as BigIntColumn_, FloatColumn as FloatColumn_, OneToMany as OneToMany_, OneToOne as OneToOne_, Index as Index_, JoinColumn as JoinColumn_, IntColumn as IntColumn_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"
import * as marshal from "./marshal"
import {PoolState} from "./_poolState"
import {Commission} from "./_commission"
import {BonusCycle} from "./_bonusCycle"
import {PoolBalance} from "./_poolBalance"
import {EarlyBirdBonus} from "./_earlyBirdBonus"
import {PoolMember} from "./poolMember.model"
import {EraReward} from "./eraReward.model"
import {PoolSlash} from "./_poolSlash"
import {PoolValidator} from "./poolValidator.model"
import {Token} from "./token.model"
import {ScoreGrade} from "./_scoreGrade"

@Entity_()
export class NominationPool {
    constructor(props?: Partial<NominationPool>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @StringColumn_({nullable: false})
    name!: string

    @BigIntColumn_({nullable: false})
    points!: bigint

    @Column_("varchar", {length: 10, nullable: false})
    state!: PoolState

    @Column_("jsonb", {transformer: {to: obj => obj.toJSON(), from: obj => obj == null ? undefined : new Commission(undefined, obj)}, nullable: false})
    commission!: Commission

    @BigIntColumn_({nullable: false})
    capacity!: bigint

    @BigIntColumn_({nullable: false})
    deposit!: bigint

    @Column_("jsonb", {transformer: {to: obj => obj.toJSON(), from: obj => obj == null ? undefined : new BonusCycle(undefined, obj)}, nullable: false})
    bonusCycle!: BonusCycle

    @BigIntColumn_({nullable: false})
    tokenId!: bigint

    @Column_("jsonb", {transformer: {to: obj => obj.toJSON(), from: obj => obj == null ? undefined : new PoolBalance(undefined, obj)}, nullable: false})
    balance!: PoolBalance

    @BigIntColumn_({nullable: false})
    rate!: bigint

    @FloatColumn_({nullable: false})
    apy!: number

    @FloatColumn_({nullable: false})
    historicalApy!: number

    @BigIntColumn_({nullable: false})
    saturation!: bigint

    @BigIntColumn_({nullable: false})
    availableStakeAmount!: bigint

    @BigIntColumn_({nullable: false})
    availableStakePoints!: bigint

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new EarlyBirdBonus(undefined, obj)}, nullable: true})
    earlyBirdBonus!: EarlyBirdBonus | undefined | null

    @OneToMany_(() => PoolMember, e => e.pool)
    members!: PoolMember[]

    @OneToMany_(() => EraReward, e => e.pool)
    eraRewards!: EraReward[]

    @Column_("jsonb", {transformer: {to: obj => obj.map((val: any) => val == null ? undefined : val.toJSON()), from: obj => obj == null ? undefined : marshal.fromList(obj, val => val == null ? undefined : new PoolSlash(undefined, val))}, nullable: false})
    slashes!: (PoolSlash | undefined | null)[]

    @OneToMany_(() => PoolValidator, e => e.pool)
    validators!: PoolValidator[]

    @Index_({unique: true})
    @OneToOne_(() => Token, {nullable: true})
    @JoinColumn_()
    degenToken!: Token | undefined | null

    @Column_("varchar", {length: 1, nullable: true})
    score!: ScoreGrade | undefined | null

    @IntColumn_({nullable: false})
    totalMembers!: number

    @DateTimeColumn_({nullable: false})
    createdAt!: Date

    @IntColumn_({nullable: false})
    createdBlock!: number

    @IntColumn_({nullable: false})
    nodeCount!: number
}
