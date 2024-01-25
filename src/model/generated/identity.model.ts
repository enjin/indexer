import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToOne as OneToOne_, Index as Index_, JoinColumn as JoinColumn_, ManyToOne as ManyToOne_, OneToMany as OneToMany_} from "typeorm"
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

    @Column_("bool", {nullable: false})
    isSub!: boolean

    @Column_("text", {nullable: true})
    name!: string | undefined | null

    @Index_()
    @ManyToOne_(() => Registration, {nullable: true})
    info!: Registration

    @Index_()
    @ManyToOne_(() => Identity, {nullable: true})
    super!: Identity | undefined | null

    @OneToMany_(() => Identity, e => e.super)
    sub!: Identity[]

    @Column_("timestamp with time zone", {nullable: false})
    createdAt!: Date
}
