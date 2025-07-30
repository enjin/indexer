import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, BigIntColumn as BigIntColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToOne as OneToOne_, OneToMany as OneToMany_, DateTimeColumn as DateTimeColumn_, IntColumn as IntColumn_} from "@subsquid/typeorm-store"
import {StakeExchangeOfferState} from "./_stakeExchangeOfferState"
import {Account} from "./account.model"
import {StakeExchangeTokenFilter} from "./stakeExchangeTokenFilter.model"
import {PoolsOffers} from "./poolsOffers.model"

@Entity_()
export class StakeExchangeOffer {
    constructor(props?: Partial<StakeExchangeOffer>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @BigIntColumn_({nullable: false})
    offerId!: bigint

    @Column_("varchar", {length: 9, nullable: false})
    state!: StakeExchangeOfferState

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    account!: Account

    @BigIntColumn_({nullable: true})
    amount!: bigint | undefined | null

    @BigIntColumn_({nullable: false})
    total!: bigint

    @BigIntColumn_({nullable: false})
    rate!: bigint

    @BigIntColumn_({nullable: false})
    minAverageRewardRate!: bigint

    @OneToOne_(() => StakeExchangeTokenFilter, e => e.offer)
    tokenFilter!: StakeExchangeTokenFilter | undefined | null

    @OneToMany_(() => PoolsOffers, e => e.offer)
    pools!: PoolsOffers[]

    @DateTimeColumn_({nullable: false})
    createdAt!: Date

    @IntColumn_({nullable: false})
    createdBlock!: number
}
