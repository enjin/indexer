import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class ClaimDetails {
    constructor(props?: Partial<ClaimDetails>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("int4", {nullable: true})
    exchangeRate!: number | undefined | null

    @Column_("int4", {nullable: true})
    delayClaimsPeriod!: number | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    totalUnclaimedAmount!: bigint
}
