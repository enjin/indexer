import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, IntColumn as IntColumn_, OneToOne as OneToOne_, Index as Index_, JoinColumn as JoinColumn_, BigIntColumn as BigIntColumn_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"
import {Account} from "./account.model"

@Entity_()
export class IdentityRegistrar {
    constructor(props?: Partial<IdentityRegistrar>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @IntColumn_({nullable: false})
    index!: number

    @Index_({unique: true})
    @OneToOne_(() => Account, {nullable: true})
    @JoinColumn_()
    account!: Account

    @BigIntColumn_({nullable: false})
    fee!: bigint

    @DateTimeColumn_({nullable: false})
    createdAt!: Date
}
