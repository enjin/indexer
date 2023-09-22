import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {FuelTank} from "./fuelTank.model"
import {WhitelistedCallers} from "./_whitelistedCallers"
import {WhitelistedCollections} from "./_whitelistedCollections"
import {MaxFuelBurnPerTransaction} from "./_maxFuelBurnPerTransaction"
import {UserFuelBudget} from "./_userFuelBudget"
import {TankFuelBudget} from "./_tankFuelBudget"
import {RequireToken} from "./_requireToken"
import {PermittedCalls} from "./_permittedCalls"
import {PermittedExtrinsics} from "./_permittedExtrinsics"

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

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new WhitelistedCallers(undefined, obj)}, nullable: true})
    whitelistedCallers!: WhitelistedCallers | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new WhitelistedCollections(undefined, obj)}, nullable: true})
    whitelistedCollections!: WhitelistedCollections | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new MaxFuelBurnPerTransaction(undefined, obj)}, nullable: true})
    maxFuelBurnPerTransaction!: MaxFuelBurnPerTransaction | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new UserFuelBudget(undefined, obj)}, nullable: true})
    userFuelBudget!: UserFuelBudget | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new TankFuelBudget(undefined, obj)}, nullable: true})
    tankFuelBudget!: TankFuelBudget | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new RequireToken(undefined, obj)}, nullable: true})
    requireToken!: RequireToken | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new PermittedCalls(undefined, obj)}, nullable: true})
    permittedCalls!: PermittedCalls | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.map((val: any) => val == null ? undefined : val.toJSON()), from: obj => obj == null ? undefined : marshal.fromList(obj, val => val == null ? undefined : new PermittedExtrinsics(undefined, val))}, nullable: true})
    permittedExtrinsics!: (PermittedExtrinsics | undefined | null)[] | undefined | null
}
