import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {FuelTank} from "./fuelTank.model"
import {AccountRule, fromJsonAccountRule} from "./_accountRule"

@Entity_()
export class FuelTankAccountRules {
    constructor(props?: Partial<FuelTankAccountRules>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => FuelTank, {nullable: true})
    tank!: FuelTank

    @Column_("jsonb", {transformer: {to: obj => obj.toJSON(), from: obj => obj == null ? undefined : fromJsonAccountRule(obj)}, nullable: false})
    rule!: AccountRule
}
