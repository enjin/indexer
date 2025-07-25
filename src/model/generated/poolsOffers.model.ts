import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "@subsquid/typeorm-store"
import {NominationPool} from "./nominationPool.model"
import {StakeExchangeOffer} from "./stakeExchangeOffer.model"

@Entity_()
export class PoolsOffers {
    constructor(props?: Partial<PoolsOffers>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => NominationPool, {nullable: true})
    pool!: NominationPool

    @Index_()
    @ManyToOne_(() => StakeExchangeOffer, {nullable: true})
    offer!: StakeExchangeOffer
}
