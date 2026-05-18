import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, IntColumn as IntColumn_, OneToMany as OneToMany_, Relation as Relation_, OneToOne as OneToOne_, DateTimeColumn as DateTimeColumn_, BooleanColumn as BooleanColumn_} from "@subsquid/typeorm-store"
import * as marshal from "./marshal"
import {Balance} from "./_balance"
import {Extrinsic} from "./extrinsic.model"
import {Collection} from "./collection.model"
import {CollectionAccount} from "./collectionAccount.model"
import {TokenAccount} from "./tokenAccount.model"
import {AccountTokenEvent} from "./accountTokenEvent.model"
import {PoolMember} from "./poolMember.model"
import {EarlyBirdShares} from "./earlyBirdShares.model"
import {StakeExchangeTokenFilter} from "./stakeExchangeTokenFilter.model"
import {Identity} from "./identity.model"
import {IdentityRegistrar} from "./identityRegistrar.model"
import {UserInfusion} from "./userInfusion.model"
import {AccountStats} from "./_accountStats"

@Entity_()
export class Account {
    constructor(props?: Partial<Account>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @StringColumn_({nullable: false})
    address!: string

    @IntColumn_({nullable: false})
    nonce!: number

    @Column_("jsonb", {transformer: {to: obj => obj.toJSON(), from: obj => obj == null ? undefined : new Balance(undefined, obj)}, nullable: false})
    balance!: Balance

    @OneToMany_(() => Extrinsic, e => e.signer)
    extrinsics!: Relation_<Extrinsic[]>

    @OneToMany_(() => Collection, e => e.owner)
    collectionsOwned!: Relation_<Collection[]>

    @OneToMany_(() => CollectionAccount, e => e.account)
    collectionAccounts!: Relation_<CollectionAccount[]>

    @OneToMany_(() => TokenAccount, e => e.account)
    tokenAccounts!: Relation_<TokenAccount[]>

    @OneToMany_(() => AccountTokenEvent, e => e.from)
    tokenEvents!: Relation_<AccountTokenEvent[]>

    @OneToMany_(() => PoolMember, e => e.account)
    joinedPools!: Relation_<PoolMember[]>

    @OneToMany_(() => EarlyBirdShares, e => e.account)
    earlyBirdShares!: Relation_<EarlyBirdShares[]>

    @OneToOne_(() => StakeExchangeTokenFilter, e => e.account)
    tokenFilter!: Relation_<StakeExchangeTokenFilter> | undefined | null

    @OneToOne_(() => Identity, e => e.account)
    identity!: Relation_<Identity> | undefined | null

    @OneToOne_(() => IdentityRegistrar, e => e.account)
    registrar!: Relation_<IdentityRegistrar> | undefined | null

    @OneToMany_(() => UserInfusion, e => e.account)
    userInfusions!: Relation_<UserInfusion[]>

    @IntColumn_({nullable: true})
    lastUpdateBlock!: number | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new AccountStats(undefined, obj)}, nullable: true})
    stats!: AccountStats | undefined | null

    @StringColumn_({nullable: true})
    username!: string | undefined | null

    @DateTimeColumn_({nullable: true})
    verifiedAt!: Date | undefined | null

    @BooleanColumn_({nullable: false})
    verified!: boolean

    @StringColumn_({nullable: true})
    image!: string | undefined | null
}
