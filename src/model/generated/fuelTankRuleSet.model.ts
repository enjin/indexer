import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {FuelTank} from "./fuelTank.model"
import {MaxFuelBurnPerTransaction} from "./_maxFuelBurnPerTransaction"
import {UserFuelBudget} from "./_userFuelBudget"
import {TankFuelBudget} from "./_tankFuelBudget"
import {RequireToken} from "./_requireToken"
import {PermittedExtrinsics} from "./permittedExtrinsics.model"

@Entity_()
export class FuelTankRuleSet {
    constructor(props?: Partial<FuelTankRuleSet>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("int4", {nullable: false})
    index!: number

    @Index_()
    @ManyToOne_(() => FuelTank, {nullable: true})
    tank!: FuelTank

    @Column_("bool", {nullable: false})
    isFrozen!: boolean

    @Column_("bool", {nullable: false})
    isPermittedExtrinsicsEmpty!: boolean

    @Column_("text", {array: true, nullable: true})
    whitelistedCallers!: (string)[] | undefined | null

    @Column_("text", {array: true, nullable: true})
    whitelistedCollections!: (string | undefined | null)[] | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new MaxFuelBurnPerTransaction(undefined, obj)}, nullable: true})
    maxFuelBurnPerTransaction!: MaxFuelBurnPerTransaction | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new UserFuelBudget(undefined, obj)}, nullable: true})
    userFuelBudget!: UserFuelBudget | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new TankFuelBudget(undefined, obj)}, nullable: true})
    tankFuelBudget!: TankFuelBudget | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new RequireToken(undefined, obj)}, nullable: true})
    requireToken!: RequireToken | undefined | null

    @Column_("text", {array: true, nullable: true})
    permittedCalls!: (string)[] | undefined | null

    @OneToMany_(() => PermittedExtrinsics, e => e.ruleSet)
    permittedExtrinsics!: PermittedExtrinsics[]
}
