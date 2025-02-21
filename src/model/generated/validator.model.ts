import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, IntColumn as IntColumn_, BooleanColumn as BooleanColumn_, OneToMany as OneToMany_} from "@subsquid/typeorm-store"
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

    @IntColumn_({array: true, nullable: true})
    nodeCount28d!: (number)[] | undefined | null

    @IntColumn_({array: true, nullable: true})
    commission28d!: (number)[] | undefined | null

    @IntColumn_({array: true, nullable: true})
    blockProduction28d!: (number)[] | undefined | null

    @BooleanColumn_({array: true, nullable: true})
    slashes84d!: (boolean)[] | undefined | null

    @IntColumn_({array: true, nullable: true})
    peerCommission28d!: (number)[] | undefined | null

    @Column_("varchar", {length: 1, nullable: true})
    grade!: ScoreGrade | undefined | null

    @OneToMany_(() => PoolValidator, e => e.validator)
    pools!: PoolValidator[]
}
