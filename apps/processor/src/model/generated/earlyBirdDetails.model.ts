import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, BooleanColumn as BooleanColumn_, IntColumn as IntColumn_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class EarlyBirdDetails {
    constructor(props?: Partial<EarlyBirdDetails>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @BooleanColumn_({nullable: false})
    bonusCalculated!: boolean

    @IntColumn_({nullable: true})
    currentPaymentId!: number | undefined | null

    @IntColumn_({nullable: true})
    nextPaymentBlock!: number | undefined | null

    @IntColumn_({nullable: false})
    earlyBirdBonusDistributionBlock!: number

    @BigIntColumn_({nullable: true})
    totalPaid!: bigint | undefined | null
}
