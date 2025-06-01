import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, StringColumn as StringColumn_, BigIntColumn as BigIntColumn_, OneToMany as OneToMany_} from "@subsquid/typeorm-store"
import {Collection} from "./collection.model"
import {TraitToken} from "./traitToken.model"

@Entity_()
export class Trait {
    constructor(props?: Partial<Trait>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Collection, {nullable: true})
    collection!: Collection

    @StringColumn_({nullable: false})
    traitType!: string

    @StringColumn_({nullable: false})
    value!: string

    @BigIntColumn_({nullable: false})
    count!: bigint

    @OneToMany_(() => TraitToken, e => e.trait)
    tokens!: TraitToken[]
}
