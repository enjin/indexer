import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, BigIntColumn as BigIntColumn_, BooleanColumn as BooleanColumn_, IntColumn as IntColumn_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"
import {AccountClaimType} from "./_accountClaimType"

@Entity_()
export class ClaimRequest {
    constructor(props?: Partial<ClaimRequest>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @StringColumn_({nullable: false})
    who!: string

    @Column_("varchar", {length: 9, nullable: false})
    acountType!: AccountClaimType

    @Index_({unique: true})
    @StringColumn_({nullable: true})
    hash!: string | undefined | null

    @BigIntColumn_({nullable: false})
    amountClaimable!: bigint

    @BigIntColumn_({nullable: false})
    amountBurned!: bigint

    @BooleanColumn_({nullable: false})
    isEfiToken!: boolean

    @IntColumn_({nullable: true})
    extrinsicIndex!: number | undefined | null

    @BooleanColumn_({nullable: false})
    isClaimed!: boolean

    @BooleanColumn_({nullable: false})
    isRejected!: boolean

    @DateTimeColumn_({nullable: false})
    createdAt!: Date

    @IntColumn_({nullable: false})
    createdBlock!: number
}
