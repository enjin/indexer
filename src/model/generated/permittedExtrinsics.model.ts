import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
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

    @Column_("text", {nullable: true})
    palletName!: string | undefined | null

    @Column_("text", {nullable: true})
    extrinsicName!: string | undefined | null
}
