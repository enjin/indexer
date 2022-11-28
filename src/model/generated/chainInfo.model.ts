import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Marketplace} from "./_marketplace"

@Entity_()
export class ChainInfo {
    constructor(props?: Partial<ChainInfo>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("int4", {nullable: false})
    specVersion!: number

    @Column_("int4", {nullable: false})
    transactionVersion!: number

    @Column_("text", {nullable: false})
    genesisHash!: string

    @Column_("text", {nullable: false})
    blockHash!: string

    @Index_()
    @Column_("int4", {nullable: false})
    blockNumber!: number

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    existentialDeposit!: bigint

    @Column_("timestamp with time zone", {nullable: false})
    timestamp!: Date

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new Marketplace(undefined, obj)}, nullable: true})
    marketplace!: Marketplace | undefined | null
}
