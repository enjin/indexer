import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, IntColumn as IntColumn_, BooleanColumn as BooleanColumn_, BigIntColumn as BigIntColumn_, OneToMany as OneToMany_} from "@subsquid/typeorm-store"
import {Account} from "./account.model"
import {ScoreGrade} from "./_scoreGrade"
import {PoolValidator} from "./poolValidator.model"

@Entity_()
export class Validator {
    constructor(props?: Partial<Validator>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    account!: Account

    @IntColumn_({nullable: true})
    commission!: number | undefined | null

    @BooleanColumn_({nullable: true})
    blocked!: boolean | undefined | null

    @IntColumn_({array: true, nullable: false})
    nodeCount28d!: (number)[]

    @IntColumn_({array: true, nullable: false})
    commission28d!: (number)[]

    @IntColumn_({array: true, nullable: false})
    blockProduction28d!: (number)[]

    @BooleanColumn_({array: true, nullable: false})
    slashes84d!: (boolean)[]

    @IntColumn_({array: true, nullable: false})
    peerCommission28d!: (number)[]

    @Column_("varchar", {length: 1, nullable: true})
    grade!: ScoreGrade | undefined | null

    @IntColumn_({nullable: true})
    nominatorsCount!: number | undefined | null

    @BooleanColumn_({nullable: true})
    isActive!: boolean | undefined | null

    @BigIntColumn_({nullable: true})
    bonded!: bigint | undefined | null

    @BigIntColumn_({nullable: true})
    accumulatedRewards!: bigint | undefined | null

    @OneToMany_(() => PoolValidator, e => e.validator)
    pools!: PoolValidator[]
}
