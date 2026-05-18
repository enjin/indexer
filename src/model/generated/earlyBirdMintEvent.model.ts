import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, Relation as Relation_, BigIntColumn as BigIntColumn_, StringColumn as StringColumn_} from "@subsquid/typeorm-store"
import {NominationPool} from "./nominationPool.model"
import {PoolMember} from "./poolMember.model"
import {Era} from "./era.model"

@Entity_()
export class EarlyBirdMintEvent {
    constructor(props?: Partial<EarlyBirdMintEvent>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => NominationPool, {nullable: true})
    pool!: Relation_<NominationPool>

    @Index_()
    @ManyToOne_(() => PoolMember, {nullable: true})
    poolMember!: Relation_<PoolMember>

    @Index_()
    @ManyToOne_(() => Era, {nullable: true})
    era!: Relation_<Era>

    @BigIntColumn_({nullable: false})
    amount!: bigint

    @BigIntColumn_({nullable: false})
    reward!: bigint

    @StringColumn_({nullable: false})
    eventId!: string

    @StringColumn_({nullable: true})
    extrinsicId!: string | undefined | null
}
