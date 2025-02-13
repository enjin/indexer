import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, OneToOne as OneToOne_, Index as Index_, JoinColumn as JoinColumn_} from "@subsquid/typeorm-store"
import {StakeExchangeTokenFilterType} from "./_stakeExchangeTokenFilterType"
import {Account} from "./account.model"
import {StakeExchangeOffer} from "./stakeExchangeOffer.model"

@Entity_()
export class StakeExchangeTokenFilter {
    constructor(props?: Partial<StakeExchangeTokenFilter>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @StringColumn_({array: true, nullable: true})
    value!: (string | undefined | null)[] | undefined | null

    @Column_("varchar", {length: 9, nullable: false})
    type!: StakeExchangeTokenFilterType

    @Index_({unique: true})
    @OneToOne_(() => Account, {nullable: true})
    @JoinColumn_()
    account!: Account | undefined | null

    @Index_({unique: true})
    @OneToOne_(() => StakeExchangeOffer, {nullable: true})
    @JoinColumn_()
    offer!: StakeExchangeOffer | undefined | null
}
