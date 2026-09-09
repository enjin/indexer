import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToOne as OneToOne_, Index as Index_, JoinColumn as JoinColumn_, Relation as Relation_, ManyToOne as ManyToOne_, BigIntColumn as BigIntColumn_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"
import {Token} from "./token.model"
import {Account} from "./account.model"

@Entity_()
export class TokenLoan {
    constructor(props?: Partial<TokenLoan>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_({unique: true})
    @OneToOne_(() => Token, {nullable: true})
    @JoinColumn_()
    token!: Relation_<Token>

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    lender!: Relation_<Account>

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    borrower!: Relation_<Account>

    @Index_()
    @BigIntColumn_({nullable: false})
    expiration!: bigint

    @Index_()
    @BigIntColumn_({nullable: false})
    lastObservedBlock!: bigint

    @DateTimeColumn_({nullable: false})
    createdAt!: Date

    @DateTimeColumn_({nullable: false})
    updatedAt!: Date
}
