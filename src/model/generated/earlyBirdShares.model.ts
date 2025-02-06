import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"
import {NominationPool} from "./nominationPool.model"
import {Account} from "./account.model"

@Entity_()
export class EarlyBirdShares {
    constructor(props?: Partial<EarlyBirdShares>) {
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
    shares!: bigint
}
