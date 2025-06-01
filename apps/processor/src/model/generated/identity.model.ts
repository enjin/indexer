import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToOne as OneToOne_, Index as Index_, JoinColumn as JoinColumn_, BooleanColumn as BooleanColumn_, StringColumn as StringColumn_, ManyToOne as ManyToOne_, OneToMany as OneToMany_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"
import {Account} from "./account.model"
import {Registration} from "./registration.model"

@Entity_()
export class Identity {
    constructor(props?: Partial<Identity>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_({unique: true})
    @OneToOne_(() => Account, {nullable: true})
    @JoinColumn_()
    account!: Account

    @BooleanColumn_({nullable: false})
    isSub!: boolean

    @StringColumn_({nullable: true})
    name!: string | undefined | null

    @Index_()
    @ManyToOne_(() => Registration, {nullable: true})
    info!: Registration

    @Index_()
    @ManyToOne_(() => Identity, {nullable: true})
    super!: Identity | undefined | null

    @OneToMany_(() => Identity, e => e.super)
    sub!: Identity[]

    @DateTimeColumn_({nullable: false})
    createdAt!: Date
}
