import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, IntColumn as IntColumn_, StringColumn as StringColumn_, Index as Index_, BigIntColumn as BigIntColumn_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"
import * as marshal from "./marshal"
import {Marketplace} from "./_marketplace"

@Entity_()
export class ChainInfo {
    constructor(props?: Partial<ChainInfo>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @IntColumn_({nullable: false})
    specVersion!: number

    @IntColumn_({nullable: false})
    transactionVersion!: number

    @StringColumn_({nullable: false})
    genesisHash!: string

    @StringColumn_({nullable: false})
    blockHash!: string

    @Index_()
    @IntColumn_({nullable: false})
    blockNumber!: number

    @BigIntColumn_({nullable: false})
    existentialDeposit!: bigint

    @DateTimeColumn_({nullable: false})
    timestamp!: Date

    @Index_()
    @StringColumn_({nullable: true})
    validator!: string | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new Marketplace(undefined, obj)}, nullable: true})
    marketplace!: Marketplace | undefined | null
}
