import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, StringColumn as StringColumn_} from "@subsquid/typeorm-store"
import {FuelTankRuleSet} from "./fuelTankRuleSet.model"

@Entity_()
export class PermittedExtrinsics {
    constructor(props?: Partial<PermittedExtrinsics>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => FuelTankRuleSet, {nullable: true})
    ruleSet!: FuelTankRuleSet

    @StringColumn_({nullable: true})
    palletName!: string | undefined | null

    @StringColumn_({nullable: true})
    extrinsicName!: string | undefined | null
}
