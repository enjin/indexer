import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {AccountClaimType} from "./_accountClaimType"

@Entity_()
export class ClaimRequest {
    constructor(props?: Partial<ClaimRequest>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: false})
    account!: string

    @Column_("varchar", {length: 9, nullable: false})
    acountType!: AccountClaimType

    @Index_({unique: true})
    @Column_("text", {nullable: true})
    hash!: string | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    amountClaimable!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    amountBurned!: bigint

    @Column_("bool", {nullable: false})
    isEfiToken!: boolean

    @Column_("int4", {nullable: true})
    extrinsicIndex!: number | undefined | null

    @Column_("bool", {nullable: false})
    isClaimed!: boolean

    @Column_("bool", {nullable: false})
    isRejected!: boolean

    @Column_("timestamp with time zone", {nullable: false})
    createdAt!: Date

    @Column_("int4", {nullable: false})
    createdBlock!: number
}
