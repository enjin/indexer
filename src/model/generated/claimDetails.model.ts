import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, IntColumn as IntColumn_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class ClaimDetails {
    constructor(props?: Partial<ClaimDetails>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @IntColumn_({nullable: true})
    exchangeRate!: number | undefined | null

    @BigIntColumn_({nullable: true})
    delayClaimsPeriod!: bigint | undefined | null

    @BigIntColumn_({nullable: false})
    totalUnclaimedAmount!: bigint
}
