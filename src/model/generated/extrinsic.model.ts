import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Account} from "./account.model"
import {Fee} from "./_fee"
import {Event} from "./event.model"

@Entity_()
export class Extrinsic {
    constructor(props?: Partial<Extrinsic>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: false})
    hash!: string

    @Column_("int4", {nullable: false})
    blockNumber!: number

    @Column_("text", {nullable: false})
    blockHash!: string

    @Column_("bool", {nullable: false})
    success!: boolean

    @Column_("text", {nullable: false})
    pallet!: string

    @Column_("text", {nullable: false})
    method!: string

    @Column_("jsonb", {nullable: true})
    args!: unknown | undefined | null

    @Column_("jsonb", {nullable: false})
    signature!: unknown

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    signer!: Account

    @Column_("int4", {nullable: false})
    nonce!: number

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    tip!: bigint | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new Fee(undefined, obj)}, nullable: true})
    fee!: Fee | undefined | null

    @Column_("text", {nullable: true})
    error!: string | undefined | null

    @Column_("timestamp with time zone", {nullable: false})
    createdAt!: Date

    @OneToMany_(() => Event, e => e.extrinsic)
    events!: Event[]
}
