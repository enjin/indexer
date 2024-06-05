import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"
import {FuelTank} from "./fuelTank.model"
import {Account} from "./account.model"

@Entity_()
export class FuelTankUserAccounts {
    constructor(props?: Partial<FuelTankUserAccounts>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => FuelTank, {nullable: true})
    tank!: FuelTank

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    account!: Account

    @BigIntColumn_({nullable: false})
    tankDeposit!: bigint

    @BigIntColumn_({nullable: false})
    userDeposit!: bigint
}
