import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, IntColumn as IntColumn_, ManyToOne as ManyToOne_, Index as Index_, BooleanColumn as BooleanColumn_, StringColumn as StringColumn_, OneToMany as OneToMany_} from "@subsquid/typeorm-store"
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

    @IntColumn_({nullable: false})
    index!: number

    @Index_()
    @ManyToOne_(() => FuelTank, {nullable: true})
    tank!: FuelTank

    @BooleanColumn_({nullable: false})
    isFrozen!: boolean

    @BooleanColumn_({nullable: false})
    isPermittedExtrinsicsEmpty!: boolean

    @BooleanColumn_({nullable: false})
    isPermittedExtrinsicsNull!: boolean

    @StringColumn_({nullable: true})
    requireSignature!: string | undefined | null

    @StringColumn_({array: true, nullable: true})
    whitelistedCallers!: (string)[] | undefined | null

    @StringColumn_({array: true, nullable: true})
    whitelistedCollections!: (string | undefined | null)[] | undefined | null

    @StringColumn_({array: true, nullable: true})
    whitelistedPallets!: (string)[] | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new MaxFuelBurnPerTransaction(undefined, obj)}, nullable: true})
    maxFuelBurnPerTransaction!: MaxFuelBurnPerTransaction | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new UserFuelBudget(undefined, obj)}, nullable: true})
    userFuelBudget!: UserFuelBudget | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new TankFuelBudget(undefined, obj)}, nullable: true})
    tankFuelBudget!: TankFuelBudget | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new RequireToken(undefined, obj)}, nullable: true})
    requireToken!: RequireToken | undefined | null

    @StringColumn_({array: true, nullable: true})
    permittedCalls!: (string)[] | undefined | null

    @OneToMany_(() => PermittedExtrinsics, e => e.ruleSet)
    permittedExtrinsics!: PermittedExtrinsics[]
}
