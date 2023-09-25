import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
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

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    tankDeposit!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    userDeposit!: bigint
}
