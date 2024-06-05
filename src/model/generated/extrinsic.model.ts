import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, IntColumn as IntColumn_, BooleanColumn as BooleanColumn_, JSONColumn as JSONColumn_, ManyToOne as ManyToOne_, BigIntColumn as BigIntColumn_, DateTimeColumn as DateTimeColumn_, OneToMany as OneToMany_} from "@subsquid/typeorm-store"
import * as marshal from "./marshal"
import {Account} from "./account.model"
import {Fee} from "./_fee"
import {Event} from "./event.model"
import {FuelTankData} from "./_fuelTankData"

@Entity_()
export class Extrinsic {
    constructor(props?: Partial<Extrinsic>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @StringColumn_({nullable: false})
    hash!: string

    @Index_()
    @IntColumn_({nullable: false})
    blockNumber!: number

    @StringColumn_({nullable: false})
    blockHash!: string

    @BooleanColumn_({nullable: false})
    success!: boolean

    @StringColumn_({nullable: false})
    pallet!: string

    @StringColumn_({nullable: false})
    method!: string

    @JSONColumn_({nullable: true})
    args!: unknown | undefined | null

    @JSONColumn_({nullable: false})
    signature!: unknown

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    signer!: Account

    @IntColumn_({nullable: false})
    nonce!: number

    @BigIntColumn_({nullable: true})
    tip!: bigint | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new Fee(undefined, obj)}, nullable: true})
    fee!: Fee | undefined | null

    @StringColumn_({nullable: true})
    error!: string | undefined | null

    @DateTimeColumn_({nullable: false})
    createdAt!: Date

    @OneToMany_(() => Event, e => e.extrinsic)
    events!: Event[]

    @StringColumn_({array: true, nullable: false})
    participants!: (string)[]

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new FuelTankData(undefined, obj)}, nullable: true})
    fuelTank!: FuelTankData | undefined | null
}
