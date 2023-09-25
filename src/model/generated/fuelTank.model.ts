import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Account} from "./account.model"
import {FuelTankUserAccounts} from "./fuelTankUserAccounts.model"
import {FuelTankUserAccountManagement} from "./_fuelTankUserAccountManagement"
import {FuelTankAccountRules} from "./fuelTankAccountRules.model"
import {FuelTankRuleSet} from "./fuelTankRuleSet.model"

@Entity_()
export class FuelTank {
    constructor(props?: Partial<FuelTank>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    tankAccount!: Account

    @Column_("text", {nullable: false})
    name!: string

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    owner!: Account

    @Column_("bool", {nullable: false})
    providesDeposit!: boolean

    @Column_("bool", {nullable: false})
    isFrozen!: boolean

    @Column_("int4", {nullable: false})
    accountCount!: number

    @OneToMany_(() => FuelTankUserAccounts, e => e.tank)
    userAccounts!: FuelTankUserAccounts[]

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new FuelTankUserAccountManagement(undefined, obj)}, nullable: true})
    userAccountManagement!: FuelTankUserAccountManagement | undefined | null

    @OneToMany_(() => FuelTankAccountRules, e => e.tank)
    accountRules!: FuelTankAccountRules[]

    @OneToMany_(() => FuelTankRuleSet, e => e.tank)
    ruleSets!: FuelTankRuleSet[]
}
