import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, Relation as Relation_} from "@subsquid/typeorm-store"
import {NominationPool} from "./nominationPool.model"
import {Validator} from "./validator.model"

@Entity_()
export class PoolValidator {
    constructor(props?: Partial<PoolValidator>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => NominationPool, {nullable: true})
    pool!: Relation_<NominationPool>

    @Index_()
    @ManyToOne_(() => Validator, {nullable: true})
    validator!: Relation_<Validator>
}
