import {sts, Result, Option, Bytes, BitSequence} from './support'

export interface UserAccount {
    tankDeposit: bigint
    userDeposit: bigint
    totalReceived: bigint
    ruleDataSets: [number, [DispatchRuleKind, Bytes][]][]
}

export type DispatchRuleKind = DispatchRuleKind_MaxFuelBurnPerTransaction | DispatchRuleKind_MinimumInfusion | DispatchRuleKind_PermittedCalls | DispatchRuleKind_PermittedExtrinsics | DispatchRuleKind_RequireSignature | DispatchRuleKind_RequireToken | DispatchRuleKind_TankFuelBudget | DispatchRuleKind_UserFuelBudget | DispatchRuleKind_WhitelistedCallers | DispatchRuleKind_WhitelistedCollections | DispatchRuleKind_WhitelistedPallets

export interface DispatchRuleKind_MaxFuelBurnPerTransaction {
    __kind: 'MaxFuelBurnPerTransaction'
}

export interface DispatchRuleKind_MinimumInfusion {
    __kind: 'MinimumInfusion'
}

export interface DispatchRuleKind_PermittedCalls {
    __kind: 'PermittedCalls'
}

export interface DispatchRuleKind_PermittedExtrinsics {
    __kind: 'PermittedExtrinsics'
}

export interface DispatchRuleKind_RequireSignature {
    __kind: 'RequireSignature'
}

export interface DispatchRuleKind_RequireToken {
    __kind: 'RequireToken'
}

export interface DispatchRuleKind_TankFuelBudget {
    __kind: 'TankFuelBudget'
}

export interface DispatchRuleKind_UserFuelBudget {
    __kind: 'UserFuelBudget'
}

export interface DispatchRuleKind_WhitelistedCallers {
    __kind: 'WhitelistedCallers'
}

export interface DispatchRuleKind_WhitelistedCollections {
    __kind: 'WhitelistedCollections'
}

export interface DispatchRuleKind_WhitelistedPallets {
    __kind: 'WhitelistedPallets'
}

export const UserAccount: sts.Type<UserAccount> = sts.struct(() => {
    return  {
        tankDeposit: sts.bigint(),
        userDeposit: sts.bigint(),
        totalReceived: sts.bigint(),
        ruleDataSets: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [DispatchRuleKind, sts.bytes()]))])),
    }
})

export type AccountId32 = Bytes

export interface FuelTank {
    owner: AccountId32
    name: Bytes
    ruleSets: [number, RuleSet][]
    totalReserved: bigint
    accountCount: number
    userAccountManagement?: (UserAccountManagement | undefined)
    isFrozen: boolean
    coveragePolicy: CoveragePolicy
    accountRules: [AccountRuleKind, AccountRuleWrapper][]
}

export type AccountRuleWrapper = AccountRuleWrapper_RequireToken | AccountRuleWrapper_WhitelistedCallers

export interface AccountRuleWrapper_RequireToken {
    __kind: 'RequireToken'
    value: RequireTokenRule
}

export interface AccountRuleWrapper_WhitelistedCallers {
    __kind: 'WhitelistedCallers'
    value: AccountId32[]
}

export interface RequireTokenRule {
    collectionId: bigint
    tokenId: bigint
}

export type AccountRuleKind = AccountRuleKind_RequireToken | AccountRuleKind_WhitelistedCallers

export interface AccountRuleKind_RequireToken {
    __kind: 'RequireToken'
}

export interface AccountRuleKind_WhitelistedCallers {
    __kind: 'WhitelistedCallers'
}

export type CoveragePolicy = CoveragePolicy_Fees | CoveragePolicy_FeesAndDeposit

export interface CoveragePolicy_Fees {
    __kind: 'Fees'
}

export interface CoveragePolicy_FeesAndDeposit {
    __kind: 'FeesAndDeposit'
}

export interface UserAccountManagement {
    tankReservesAccountCreationDeposit: boolean
}

export interface RuleSet {
    rules: [DispatchRuleKind, DispatchRuleWrapper][]
    isFrozen: boolean
    requireAccount: boolean
}

export type DispatchRuleWrapper = DispatchRuleWrapper_MaxFuelBurnPerTransaction | DispatchRuleWrapper_MinimumInfusion | DispatchRuleWrapper_PermittedCalls | DispatchRuleWrapper_PermittedExtrinsics | DispatchRuleWrapper_RequireSignature | DispatchRuleWrapper_RequireToken | DispatchRuleWrapper_TankFuelBudget | DispatchRuleWrapper_UserFuelBudget | DispatchRuleWrapper_WhitelistedCallers | DispatchRuleWrapper_WhitelistedCollections | DispatchRuleWrapper_WhitelistedPallets

export interface DispatchRuleWrapper_MaxFuelBurnPerTransaction {
    __kind: 'MaxFuelBurnPerTransaction'
    value: MaxFuelBurnPerTransactionRule
}

export interface DispatchRuleWrapper_MinimumInfusion {
    __kind: 'MinimumInfusion'
    value: MinimumInfusionRule
}

export interface DispatchRuleWrapper_PermittedCalls {
    __kind: 'PermittedCalls'
    value: Bytes[]
}

export interface DispatchRuleWrapper_PermittedExtrinsics {
    __kind: 'PermittedExtrinsics'
    value: ExtrinsicInfo[]
}

export interface DispatchRuleWrapper_RequireSignature {
    __kind: 'RequireSignature'
    value: RequireSignatureRule
}

export interface DispatchRuleWrapper_RequireToken {
    __kind: 'RequireToken'
    value: RequireTokenRule
}

export interface DispatchRuleWrapper_TankFuelBudget {
    __kind: 'TankFuelBudget'
    value: TankFuelBudgetRule
}

export interface DispatchRuleWrapper_UserFuelBudget {
    __kind: 'UserFuelBudget'
    value: UserFuelBudgetRule
}

export interface DispatchRuleWrapper_WhitelistedCallers {
    __kind: 'WhitelistedCallers'
    value: AccountId32[]
}

export interface DispatchRuleWrapper_WhitelistedCollections {
    __kind: 'WhitelistedCollections'
    value: bigint[]
}

export interface DispatchRuleWrapper_WhitelistedPallets {
    __kind: 'WhitelistedPallets'
    value: Bytes[]
}

export interface UserFuelBudgetRule {
    budget: Budget
    userCount: number
}

export interface Budget {
    amount: bigint
    resetPeriod: number
}

export interface TankFuelBudgetRule {
    budget: Budget
    consumption: Consumption
}

export interface Consumption {
    totalConsumed: bigint
    lastResetBlock?: (number | undefined)
}

export type RequireSignatureRule = Bytes

export interface ExtrinsicInfo {
    palletName: Bytes
    extrinsicName: Bytes
}

export type MinimumInfusionRule = bigint

export type MaxFuelBurnPerTransactionRule = bigint

export const FuelTank: sts.Type<FuelTank> = sts.struct(() => {
    return  {
        owner: AccountId32,
        name: sts.bytes(),
        ruleSets: sts.array(() => sts.tuple(() => [sts.number(), RuleSet])),
        totalReserved: sts.bigint(),
        accountCount: sts.number(),
        userAccountManagement: sts.option(() => UserAccountManagement),
        isFrozen: sts.boolean(),
        coveragePolicy: CoveragePolicy,
        accountRules: sts.array(() => sts.tuple(() => [AccountRuleKind, AccountRuleWrapper])),
    }
})

export const AccountRuleWrapper: sts.Type<AccountRuleWrapper> = sts.closedEnum(() => {
    return  {
        RequireToken: RequireTokenRule,
        WhitelistedCallers: sts.array(() => AccountId32),
    }
})

export const RequireTokenRule: sts.Type<RequireTokenRule> = sts.struct(() => {
    return  {
        collectionId: sts.bigint(),
        tokenId: sts.bigint(),
    }
})

export const AccountRuleKind: sts.Type<AccountRuleKind> = sts.closedEnum(() => {
    return  {
        RequireToken: sts.unit(),
        WhitelistedCallers: sts.unit(),
    }
})

export const CoveragePolicy: sts.Type<CoveragePolicy> = sts.closedEnum(() => {
    return  {
        Fees: sts.unit(),
        FeesAndDeposit: sts.unit(),
    }
})

export const UserAccountManagement: sts.Type<UserAccountManagement> = sts.struct(() => {
    return  {
        tankReservesAccountCreationDeposit: sts.boolean(),
    }
})

export const RuleSet: sts.Type<RuleSet> = sts.struct(() => {
    return  {
        rules: sts.array(() => sts.tuple(() => [DispatchRuleKind, DispatchRuleWrapper])),
        isFrozen: sts.boolean(),
        requireAccount: sts.boolean(),
    }
})

export const DispatchRuleWrapper: sts.Type<DispatchRuleWrapper> = sts.closedEnum(() => {
    return  {
        MaxFuelBurnPerTransaction: MaxFuelBurnPerTransactionRule,
        MinimumInfusion: MinimumInfusionRule,
        PermittedCalls: sts.array(() => sts.bytes()),
        PermittedExtrinsics: sts.array(() => ExtrinsicInfo),
        RequireSignature: RequireSignatureRule,
        RequireToken: RequireTokenRule,
        TankFuelBudget: TankFuelBudgetRule,
        UserFuelBudget: UserFuelBudgetRule,
        WhitelistedCallers: sts.array(() => AccountId32),
        WhitelistedCollections: sts.array(() => sts.bigint()),
        WhitelistedPallets: sts.array(() => sts.bytes()),
    }
})

export const UserFuelBudgetRule: sts.Type<UserFuelBudgetRule> = sts.struct(() => {
    return  {
        budget: Budget,
        userCount: sts.number(),
    }
})

export const Budget: sts.Type<Budget> = sts.struct(() => {
    return  {
        amount: sts.bigint(),
        resetPeriod: sts.number(),
    }
})

export const TankFuelBudgetRule: sts.Type<TankFuelBudgetRule> = sts.struct(() => {
    return  {
        budget: Budget,
        consumption: Consumption,
    }
})

export const Consumption: sts.Type<Consumption> = sts.struct(() => {
    return  {
        totalConsumed: sts.bigint(),
        lastResetBlock: sts.option(() => sts.number()),
    }
})

export const RequireSignatureRule = sts.bytes()

export const ExtrinsicInfo: sts.Type<ExtrinsicInfo> = sts.struct(() => {
    return  {
        palletName: sts.bytes(),
        extrinsicName: sts.bytes(),
    }
})

export const MinimumInfusionRule = sts.bigint()

export const MaxFuelBurnPerTransactionRule = sts.bigint()

export type H256 = Bytes

export type Call = Call_Balances | Call_Bounties | Call_Claims | Call_CollatorStaking | Call_CommunityPool | Call_Council | Call_CumulusXcm | Call_Democracy | Call_DmpQueue | Call_ExtrinsicPause | Call_FuelTanks | Call_Identity | Call_Marketplace | Call_MatrixUtility | Call_MatrixXcm | Call_MessageQueue | Call_Migrations | Call_MultiTokens | Call_Multisig | Call_OrmlXcm | Call_ParachainInfo | Call_ParachainSystem | Call_PolkadotXcm | Call_Pools | Call_Preimage | Call_Proxy | Call_SafeMode | Call_Scheduler | Call_Session | Call_Sudo | Call_System | Call_TechnicalCommittee | Call_TechnicalMembership | Call_Timestamp | Call_Utility | Call_XTokens | Call_XcmpQueue

export interface Call_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Call_Bounties {
    __kind: 'Bounties'
    value: BountiesCall
}

export interface Call_Claims {
    __kind: 'Claims'
    value: ClaimsCall
}

export interface Call_CollatorStaking {
    __kind: 'CollatorStaking'
    value: CollatorStakingCall
}

export interface Call_CommunityPool {
    __kind: 'CommunityPool'
    value: CommunityPoolCall
}

export interface Call_Council {
    __kind: 'Council'
    value: CouncilCall
}

export interface Call_CumulusXcm {
    __kind: 'CumulusXcm'
    value: CumulusXcmCall
}

export interface Call_Democracy {
    __kind: 'Democracy'
    value: DemocracyCall
}

export interface Call_DmpQueue {
    __kind: 'DmpQueue'
    value: DmpQueueCall
}

export interface Call_ExtrinsicPause {
    __kind: 'ExtrinsicPause'
    value: ExtrinsicPauseCall
}

export interface Call_FuelTanks {
    __kind: 'FuelTanks'
    value: FuelTanksCall
}

export interface Call_Identity {
    __kind: 'Identity'
    value: IdentityCall
}

export interface Call_Marketplace {
    __kind: 'Marketplace'
    value: MarketplaceCall
}

export interface Call_MatrixUtility {
    __kind: 'MatrixUtility'
    value: MatrixUtilityCall
}

export interface Call_MatrixXcm {
    __kind: 'MatrixXcm'
    value: MatrixXcmCall
}

export interface Call_MessageQueue {
    __kind: 'MessageQueue'
    value: MessageQueueCall
}

export interface Call_Migrations {
    __kind: 'Migrations'
    value: MigrationsCall
}

export interface Call_MultiTokens {
    __kind: 'MultiTokens'
    value: MultiTokensCall
}

export interface Call_Multisig {
    __kind: 'Multisig'
    value: MultisigCall
}

export interface Call_OrmlXcm {
    __kind: 'OrmlXcm'
    value: OrmlXcmCall
}

export interface Call_ParachainInfo {
    __kind: 'ParachainInfo'
    value: ParachainInfoCall
}

export interface Call_ParachainSystem {
    __kind: 'ParachainSystem'
    value: ParachainSystemCall
}

export interface Call_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: PolkadotXcmCall
}

export interface Call_Pools {
    __kind: 'Pools'
    value: PoolsCall
}

export interface Call_Preimage {
    __kind: 'Preimage'
    value: PreimageCall
}

export interface Call_Proxy {
    __kind: 'Proxy'
    value: ProxyCall
}

export interface Call_SafeMode {
    __kind: 'SafeMode'
    value: SafeModeCall
}

export interface Call_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerCall
}

export interface Call_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Call_Sudo {
    __kind: 'Sudo'
    value: SudoCall
}

export interface Call_System {
    __kind: 'System'
    value: SystemCall
}

export interface Call_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeCall
}

export interface Call_TechnicalMembership {
    __kind: 'TechnicalMembership'
    value: TechnicalMembershipCall
}

export interface Call_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Call_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Call_XTokens {
    __kind: 'XTokens'
    value: XTokensCall
}

export interface Call_XcmpQueue {
    __kind: 'XcmpQueue'
    value: XcmpQueueCall
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type XcmpQueueCall = XcmpQueueCall_resume_xcm_execution | XcmpQueueCall_suspend_xcm_execution | XcmpQueueCall_update_drop_threshold | XcmpQueueCall_update_resume_threshold | XcmpQueueCall_update_suspend_threshold

/**
 * Resumes all XCM executions for the XCMP queue.
 * 
 * Note that this function doesn't change the status of the in/out bound channels.
 * 
 * - `origin`: Must pass `ControllerOrigin`.
 */
export interface XcmpQueueCall_resume_xcm_execution {
    __kind: 'resume_xcm_execution'
}

/**
 * Suspends all XCM executions for the XCMP queue, regardless of the sender's origin.
 * 
 * - `origin`: Must pass `ControllerOrigin`.
 */
export interface XcmpQueueCall_suspend_xcm_execution {
    __kind: 'suspend_xcm_execution'
}

/**
 * Overwrites the number of pages which must be in the queue after which we drop any
 * further messages from the channel.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.drop_threshold`
 */
export interface XcmpQueueCall_update_drop_threshold {
    __kind: 'update_drop_threshold'
    new: number
}

/**
 * Overwrites the number of pages which the queue must be reduced to before it signals
 * that message sending may recommence after it has been suspended.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.resume_threshold`
 */
export interface XcmpQueueCall_update_resume_threshold {
    __kind: 'update_resume_threshold'
    new: number
}

/**
 * Overwrites the number of pages which must be in the queue for the other side to be
 * told to suspend their sending.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.suspend_value`
 */
export interface XcmpQueueCall_update_suspend_threshold {
    __kind: 'update_suspend_threshold'
    new: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type XTokensCall = XTokensCall_transfer | XTokensCall_transfer_multiasset | XTokensCall_transfer_multiasset_with_fee | XTokensCall_transfer_multiassets | XTokensCall_transfer_multicurrencies | XTokensCall_transfer_with_fee

/**
 * Transfer native currencies.
 * 
 * `dest_weight_limit` is the weight for XCM execution on the dest
 * chain, and it would be charged from the transferred assets. If set
 * below requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer {
    __kind: 'transfer'
    currencyId: AssetId
    amount: bigint
    dest: VersionedLocation
    destWeightLimit: V3WeightLimit
}

/**
 * Transfer `Asset`.
 * 
 * `dest_weight_limit` is the weight for XCM execution on the dest
 * chain, and it would be charged from the transferred assets. If set
 * below requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_multiasset {
    __kind: 'transfer_multiasset'
    asset: VersionedAsset
    dest: VersionedLocation
    destWeightLimit: V3WeightLimit
}

/**
 * Transfer `Asset` specifying the fee and amount as separate.
 * 
 * `dest_weight_limit` is the weight for XCM execution on the dest
 * chain, and it would be charged from the transferred assets. If set
 * below requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * `fee` is the Asset to be spent to pay for execution in
 * destination chain. Both fee and amount will be subtracted form the
 * callers balance For now we only accept fee and asset having the same
 * `Location` id.
 * 
 * If `fee` is not high enough to cover for the execution costs in the
 * destination chain, then the assets will be trapped in the
 * destination chain
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_multiasset_with_fee {
    __kind: 'transfer_multiasset_with_fee'
    asset: VersionedAsset
    fee: VersionedAsset
    dest: VersionedLocation
    destWeightLimit: V3WeightLimit
}

/**
 * Transfer several `Asset` specifying the item to be used as fee
 * 
 * `dest_weight_limit` is the weight for XCM execution on the dest
 * chain, and it would be charged from the transferred assets. If set
 * below requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * `fee_item` is index of the Assets that we want to use for
 * payment
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_multiassets {
    __kind: 'transfer_multiassets'
    assets: VersionedAssets
    feeItem: number
    dest: VersionedLocation
    destWeightLimit: V3WeightLimit
}

/**
 * Transfer several currencies specifying the item to be used as fee
 * 
 * `dest_weight_limit` is the weight for XCM execution on the dest
 * chain, and it would be charged from the transferred assets. If set
 * below requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * `fee_item` is index of the currencies tuple that we want to use for
 * payment
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_multicurrencies {
    __kind: 'transfer_multicurrencies'
    currencies: [AssetId, bigint][]
    feeItem: number
    dest: VersionedLocation
    destWeightLimit: V3WeightLimit
}

/**
 * Transfer native currencies specifying the fee and amount as
 * separate.
 * 
 * `dest_weight_limit` is the weight for XCM execution on the dest
 * chain, and it would be charged from the transferred assets. If set
 * below requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * `fee` is the amount to be spent to pay for execution in destination
 * chain. Both fee and amount will be subtracted form the callers
 * balance.
 * 
 * If `fee` is not high enough to cover for the execution costs in the
 * destination chain, then the assets will be trapped in the
 * destination chain
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_with_fee {
    __kind: 'transfer_with_fee'
    currencyId: AssetId
    amount: bigint
    fee: bigint
    dest: VersionedLocation
    destWeightLimit: V3WeightLimit
}

export type VersionedAssets = VersionedAssets_V2 | VersionedAssets_V3 | VersionedAssets_V4

export interface VersionedAssets_V2 {
    __kind: 'V2'
    value: V2MultiAsset[]
}

export interface VersionedAssets_V3 {
    __kind: 'V3'
    value: V3MultiAsset[]
}

export interface VersionedAssets_V4 {
    __kind: 'V4'
    value: V4Asset[]
}

export interface V4Asset {
    id: V4AssetId
    fun: V4Fungibility
}

export type V4Fungibility = V4Fungibility_Fungible | V4Fungibility_NonFungible

export interface V4Fungibility_Fungible {
    __kind: 'Fungible'
    value: bigint
}

export interface V4Fungibility_NonFungible {
    __kind: 'NonFungible'
    value: V4AssetInstance
}

export type V4AssetInstance = V4AssetInstance_Array16 | V4AssetInstance_Array32 | V4AssetInstance_Array4 | V4AssetInstance_Array8 | V4AssetInstance_Index | V4AssetInstance_Undefined

export interface V4AssetInstance_Array16 {
    __kind: 'Array16'
    value: Bytes
}

export interface V4AssetInstance_Array32 {
    __kind: 'Array32'
    value: Bytes
}

export interface V4AssetInstance_Array4 {
    __kind: 'Array4'
    value: Bytes
}

export interface V4AssetInstance_Array8 {
    __kind: 'Array8'
    value: Bytes
}

export interface V4AssetInstance_Index {
    __kind: 'Index'
    value: bigint
}

export interface V4AssetInstance_Undefined {
    __kind: 'Undefined'
}

export interface V4AssetId {
    parents: number
    interior: V4Junctions
}

export type V4Junctions = V4Junctions_Here | V4Junctions_X1 | V4Junctions_X2 | V4Junctions_X3 | V4Junctions_X4 | V4Junctions_X5 | V4Junctions_X6 | V4Junctions_X7 | V4Junctions_X8

export interface V4Junctions_Here {
    __kind: 'Here'
}

export interface V4Junctions_X1 {
    __kind: 'X1'
    value: V4Junction[]
}

export interface V4Junctions_X2 {
    __kind: 'X2'
    value: V4Junction[]
}

export interface V4Junctions_X3 {
    __kind: 'X3'
    value: V4Junction[]
}

export interface V4Junctions_X4 {
    __kind: 'X4'
    value: V4Junction[]
}

export interface V4Junctions_X5 {
    __kind: 'X5'
    value: V4Junction[]
}

export interface V4Junctions_X6 {
    __kind: 'X6'
    value: V4Junction[]
}

export interface V4Junctions_X7 {
    __kind: 'X7'
    value: V4Junction[]
}

export interface V4Junctions_X8 {
    __kind: 'X8'
    value: V4Junction[]
}

export type V4Junction = V4Junction_AccountId32 | V4Junction_AccountIndex64 | V4Junction_AccountKey20 | V4Junction_GeneralIndex | V4Junction_GeneralKey | V4Junction_GlobalConsensus | V4Junction_OnlyChild | V4Junction_PalletInstance | V4Junction_Parachain | V4Junction_Plurality

export interface V4Junction_AccountId32 {
    __kind: 'AccountId32'
    network?: (V4NetworkId | undefined)
    id: Bytes
}

export interface V4Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network?: (V4NetworkId | undefined)
    index: bigint
}

export interface V4Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network?: (V4NetworkId | undefined)
    key: Bytes
}

export interface V4Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V4Junction_GeneralKey {
    __kind: 'GeneralKey'
    length: number
    data: Bytes
}

export interface V4Junction_GlobalConsensus {
    __kind: 'GlobalConsensus'
    value: V4NetworkId
}

export interface V4Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V4Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V4Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V4Junction_Plurality {
    __kind: 'Plurality'
    id: V3BodyId
    part: V3BodyPart
}

export type V3BodyPart = V3BodyPart_AtLeastProportion | V3BodyPart_Fraction | V3BodyPart_Members | V3BodyPart_MoreThanProportion | V3BodyPart_Voice

export interface V3BodyPart_AtLeastProportion {
    __kind: 'AtLeastProportion'
    nom: number
    denom: number
}

export interface V3BodyPart_Fraction {
    __kind: 'Fraction'
    nom: number
    denom: number
}

export interface V3BodyPart_Members {
    __kind: 'Members'
    count: number
}

export interface V3BodyPart_MoreThanProportion {
    __kind: 'MoreThanProportion'
    nom: number
    denom: number
}

export interface V3BodyPart_Voice {
    __kind: 'Voice'
}

export type V3BodyId = V3BodyId_Administration | V3BodyId_Defense | V3BodyId_Executive | V3BodyId_Index | V3BodyId_Judicial | V3BodyId_Legislative | V3BodyId_Moniker | V3BodyId_Technical | V3BodyId_Treasury | V3BodyId_Unit

export interface V3BodyId_Administration {
    __kind: 'Administration'
}

export interface V3BodyId_Defense {
    __kind: 'Defense'
}

export interface V3BodyId_Executive {
    __kind: 'Executive'
}

export interface V3BodyId_Index {
    __kind: 'Index'
    value: number
}

export interface V3BodyId_Judicial {
    __kind: 'Judicial'
}

export interface V3BodyId_Legislative {
    __kind: 'Legislative'
}

export interface V3BodyId_Moniker {
    __kind: 'Moniker'
    value: Bytes
}

export interface V3BodyId_Technical {
    __kind: 'Technical'
}

export interface V3BodyId_Treasury {
    __kind: 'Treasury'
}

export interface V3BodyId_Unit {
    __kind: 'Unit'
}

export type V4NetworkId = V4NetworkId_BitcoinCash | V4NetworkId_BitcoinCore | V4NetworkId_ByFork | V4NetworkId_ByGenesis | V4NetworkId_Ethereum | V4NetworkId_Kusama | V4NetworkId_Polkadot | V4NetworkId_PolkadotBulletin | V4NetworkId_Rococo | V4NetworkId_Westend | V4NetworkId_Wococo

export interface V4NetworkId_BitcoinCash {
    __kind: 'BitcoinCash'
}

export interface V4NetworkId_BitcoinCore {
    __kind: 'BitcoinCore'
}

export interface V4NetworkId_ByFork {
    __kind: 'ByFork'
    blockNumber: bigint
    blockHash: Bytes
}

export interface V4NetworkId_ByGenesis {
    __kind: 'ByGenesis'
    value: Bytes
}

export interface V4NetworkId_Ethereum {
    __kind: 'Ethereum'
    chainId: bigint
}

export interface V4NetworkId_Kusama {
    __kind: 'Kusama'
}

export interface V4NetworkId_Polkadot {
    __kind: 'Polkadot'
}

export interface V4NetworkId_PolkadotBulletin {
    __kind: 'PolkadotBulletin'
}

export interface V4NetworkId_Rococo {
    __kind: 'Rococo'
}

export interface V4NetworkId_Westend {
    __kind: 'Westend'
}

export interface V4NetworkId_Wococo {
    __kind: 'Wococo'
}

export interface V3MultiAsset {
    id: V3AssetId
    fun: V3Fungibility
}

export type V3Fungibility = V3Fungibility_Fungible | V3Fungibility_NonFungible

export interface V3Fungibility_Fungible {
    __kind: 'Fungible'
    value: bigint
}

export interface V3Fungibility_NonFungible {
    __kind: 'NonFungible'
    value: V3AssetInstance
}

export type V3AssetInstance = V3AssetInstance_Array16 | V3AssetInstance_Array32 | V3AssetInstance_Array4 | V3AssetInstance_Array8 | V3AssetInstance_Index | V3AssetInstance_Undefined

export interface V3AssetInstance_Array16 {
    __kind: 'Array16'
    value: Bytes
}

export interface V3AssetInstance_Array32 {
    __kind: 'Array32'
    value: Bytes
}

export interface V3AssetInstance_Array4 {
    __kind: 'Array4'
    value: Bytes
}

export interface V3AssetInstance_Array8 {
    __kind: 'Array8'
    value: Bytes
}

export interface V3AssetInstance_Index {
    __kind: 'Index'
    value: bigint
}

export interface V3AssetInstance_Undefined {
    __kind: 'Undefined'
}

export type V3AssetId = V3AssetId_Abstract | V3AssetId_Concrete

export interface V3AssetId_Abstract {
    __kind: 'Abstract'
    value: Bytes
}

export interface V3AssetId_Concrete {
    __kind: 'Concrete'
    value: V3MultiLocation
}

export interface V3MultiLocation {
    parents: number
    interior: V3Junctions
}

export type V3Junctions = V3Junctions_Here | V3Junctions_X1 | V3Junctions_X2 | V3Junctions_X3 | V3Junctions_X4 | V3Junctions_X5 | V3Junctions_X6 | V3Junctions_X7 | V3Junctions_X8

export interface V3Junctions_Here {
    __kind: 'Here'
}

export interface V3Junctions_X1 {
    __kind: 'X1'
    value: V3Junction
}

export interface V3Junctions_X2 {
    __kind: 'X2'
    value: [V3Junction, V3Junction]
}

export interface V3Junctions_X3 {
    __kind: 'X3'
    value: [V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X4 {
    __kind: 'X4'
    value: [V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X5 {
    __kind: 'X5'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X6 {
    __kind: 'X6'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X7 {
    __kind: 'X7'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X8 {
    __kind: 'X8'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export type V3Junction = V3Junction_AccountId32 | V3Junction_AccountIndex64 | V3Junction_AccountKey20 | V3Junction_GeneralIndex | V3Junction_GeneralKey | V3Junction_GlobalConsensus | V3Junction_OnlyChild | V3Junction_PalletInstance | V3Junction_Parachain | V3Junction_Plurality

export interface V3Junction_AccountId32 {
    __kind: 'AccountId32'
    network?: (V3NetworkId | undefined)
    id: Bytes
}

export interface V3Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network?: (V3NetworkId | undefined)
    index: bigint
}

export interface V3Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network?: (V3NetworkId | undefined)
    key: Bytes
}

export interface V3Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V3Junction_GeneralKey {
    __kind: 'GeneralKey'
    length: number
    data: Bytes
}

export interface V3Junction_GlobalConsensus {
    __kind: 'GlobalConsensus'
    value: V3NetworkId
}

export interface V3Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V3Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V3Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V3Junction_Plurality {
    __kind: 'Plurality'
    id: V3BodyId
    part: V3BodyPart
}

export type V3NetworkId = V3NetworkId_BitcoinCash | V3NetworkId_BitcoinCore | V3NetworkId_ByFork | V3NetworkId_ByGenesis | V3NetworkId_Ethereum | V3NetworkId_Kusama | V3NetworkId_Polkadot | V3NetworkId_PolkadotBulletin | V3NetworkId_Rococo | V3NetworkId_Westend | V3NetworkId_Wococo

export interface V3NetworkId_BitcoinCash {
    __kind: 'BitcoinCash'
}

export interface V3NetworkId_BitcoinCore {
    __kind: 'BitcoinCore'
}

export interface V3NetworkId_ByFork {
    __kind: 'ByFork'
    blockNumber: bigint
    blockHash: Bytes
}

export interface V3NetworkId_ByGenesis {
    __kind: 'ByGenesis'
    value: Bytes
}

export interface V3NetworkId_Ethereum {
    __kind: 'Ethereum'
    chainId: bigint
}

export interface V3NetworkId_Kusama {
    __kind: 'Kusama'
}

export interface V3NetworkId_Polkadot {
    __kind: 'Polkadot'
}

export interface V3NetworkId_PolkadotBulletin {
    __kind: 'PolkadotBulletin'
}

export interface V3NetworkId_Rococo {
    __kind: 'Rococo'
}

export interface V3NetworkId_Westend {
    __kind: 'Westend'
}

export interface V3NetworkId_Wococo {
    __kind: 'Wococo'
}

export interface V2MultiAsset {
    id: V2AssetId
    fun: V2Fungibility
}

export type V2Fungibility = V2Fungibility_Fungible | V2Fungibility_NonFungible

export interface V2Fungibility_Fungible {
    __kind: 'Fungible'
    value: bigint
}

export interface V2Fungibility_NonFungible {
    __kind: 'NonFungible'
    value: V2AssetInstance
}

export type V2AssetInstance = V2AssetInstance_Array16 | V2AssetInstance_Array32 | V2AssetInstance_Array4 | V2AssetInstance_Array8 | V2AssetInstance_Blob | V2AssetInstance_Index | V2AssetInstance_Undefined

export interface V2AssetInstance_Array16 {
    __kind: 'Array16'
    value: Bytes
}

export interface V2AssetInstance_Array32 {
    __kind: 'Array32'
    value: Bytes
}

export interface V2AssetInstance_Array4 {
    __kind: 'Array4'
    value: Bytes
}

export interface V2AssetInstance_Array8 {
    __kind: 'Array8'
    value: Bytes
}

export interface V2AssetInstance_Blob {
    __kind: 'Blob'
    value: Bytes
}

export interface V2AssetInstance_Index {
    __kind: 'Index'
    value: bigint
}

export interface V2AssetInstance_Undefined {
    __kind: 'Undefined'
}

export type V2AssetId = V2AssetId_Abstract | V2AssetId_Concrete

export interface V2AssetId_Abstract {
    __kind: 'Abstract'
    value: Bytes
}

export interface V2AssetId_Concrete {
    __kind: 'Concrete'
    value: V2MultiLocation
}

export interface V2MultiLocation {
    parents: number
    interior: V2Junctions
}

export type V2Junctions = V2Junctions_Here | V2Junctions_X1 | V2Junctions_X2 | V2Junctions_X3 | V2Junctions_X4 | V2Junctions_X5 | V2Junctions_X6 | V2Junctions_X7 | V2Junctions_X8

export interface V2Junctions_Here {
    __kind: 'Here'
}

export interface V2Junctions_X1 {
    __kind: 'X1'
    value: V2Junction
}

export interface V2Junctions_X2 {
    __kind: 'X2'
    value: [V2Junction, V2Junction]
}

export interface V2Junctions_X3 {
    __kind: 'X3'
    value: [V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X4 {
    __kind: 'X4'
    value: [V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X5 {
    __kind: 'X5'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X6 {
    __kind: 'X6'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X7 {
    __kind: 'X7'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X8 {
    __kind: 'X8'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export type V2Junction = V2Junction_AccountId32 | V2Junction_AccountIndex64 | V2Junction_AccountKey20 | V2Junction_GeneralIndex | V2Junction_GeneralKey | V2Junction_OnlyChild | V2Junction_PalletInstance | V2Junction_Parachain | V2Junction_Plurality

export interface V2Junction_AccountId32 {
    __kind: 'AccountId32'
    network: V2NetworkId
    id: Bytes
}

export interface V2Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network: V2NetworkId
    index: bigint
}

export interface V2Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network: V2NetworkId
    key: Bytes
}

export interface V2Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V2Junction_GeneralKey {
    __kind: 'GeneralKey'
    value: WeakBoundedVec
}

export interface V2Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V2Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V2Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V2Junction_Plurality {
    __kind: 'Plurality'
    id: V2BodyId
    part: V2BodyPart
}

export type V2BodyPart = V2BodyPart_AtLeastProportion | V2BodyPart_Fraction | V2BodyPart_Members | V2BodyPart_MoreThanProportion | V2BodyPart_Voice

export interface V2BodyPart_AtLeastProportion {
    __kind: 'AtLeastProportion'
    nom: number
    denom: number
}

export interface V2BodyPart_Fraction {
    __kind: 'Fraction'
    nom: number
    denom: number
}

export interface V2BodyPart_Members {
    __kind: 'Members'
    count: number
}

export interface V2BodyPart_MoreThanProportion {
    __kind: 'MoreThanProportion'
    nom: number
    denom: number
}

export interface V2BodyPart_Voice {
    __kind: 'Voice'
}

export type V2BodyId = V2BodyId_Administration | V2BodyId_Defense | V2BodyId_Executive | V2BodyId_Index | V2BodyId_Judicial | V2BodyId_Legislative | V2BodyId_Named | V2BodyId_Technical | V2BodyId_Treasury | V2BodyId_Unit

export interface V2BodyId_Administration {
    __kind: 'Administration'
}

export interface V2BodyId_Defense {
    __kind: 'Defense'
}

export interface V2BodyId_Executive {
    __kind: 'Executive'
}

export interface V2BodyId_Index {
    __kind: 'Index'
    value: number
}

export interface V2BodyId_Judicial {
    __kind: 'Judicial'
}

export interface V2BodyId_Legislative {
    __kind: 'Legislative'
}

export interface V2BodyId_Named {
    __kind: 'Named'
    value: WeakBoundedVec
}

export interface V2BodyId_Technical {
    __kind: 'Technical'
}

export interface V2BodyId_Treasury {
    __kind: 'Treasury'
}

export interface V2BodyId_Unit {
    __kind: 'Unit'
}

export type WeakBoundedVec = Bytes

export type V2NetworkId = V2NetworkId_Any | V2NetworkId_Kusama | V2NetworkId_Named | V2NetworkId_Polkadot

export interface V2NetworkId_Any {
    __kind: 'Any'
}

export interface V2NetworkId_Kusama {
    __kind: 'Kusama'
}

export interface V2NetworkId_Named {
    __kind: 'Named'
    value: WeakBoundedVec
}

export interface V2NetworkId_Polkadot {
    __kind: 'Polkadot'
}

export type VersionedAsset = VersionedAsset_V2 | VersionedAsset_V3 | VersionedAsset_V4

export interface VersionedAsset_V2 {
    __kind: 'V2'
    value: V2MultiAsset
}

export interface VersionedAsset_V3 {
    __kind: 'V3'
    value: V3MultiAsset
}

export interface VersionedAsset_V4 {
    __kind: 'V4'
    value: V4Asset
}

export type V3WeightLimit = V3WeightLimit_Limited | V3WeightLimit_Unlimited

export interface V3WeightLimit_Limited {
    __kind: 'Limited'
    value: Weight
}

export interface V3WeightLimit_Unlimited {
    __kind: 'Unlimited'
}

export interface Weight {
    refTime: bigint
    proofSize: bigint
}

export type VersionedLocation = VersionedLocation_V2 | VersionedLocation_V3 | VersionedLocation_V4

export interface VersionedLocation_V2 {
    __kind: 'V2'
    value: V2MultiLocation
}

export interface VersionedLocation_V3 {
    __kind: 'V3'
    value: V3MultiLocation
}

export interface VersionedLocation_V4 {
    __kind: 'V4'
    value: V4Location
}

export interface V4Location {
    parents: number
    interior: V4Junctions
}

export interface AssetId {
    collectionId: bigint
    tokenId: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type UtilityCall = UtilityCall_as_derivative | UtilityCall_batch | UtilityCall_batch_all | UtilityCall_dispatch_as | UtilityCall_force_batch | UtilityCall_with_weight

/**
 * Send a call through an indexed pseudonym of the sender.
 * 
 * Filter from origin are passed along. The call will be dispatched with an origin which
 * use the same filter as the origin of this call.
 * 
 * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
 * because you expect `proxy` to have been used prior in the call stack and you do not want
 * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
 * in the Multisig pallet instead.
 * 
 * NOTE: Prior to version *12, this was called `as_limited_sub`.
 * 
 * The dispatch origin for this call must be _Signed_.
 */
export interface UtilityCall_as_derivative {
    __kind: 'as_derivative'
    index: number
    call: Call
}

/**
 * Send a batch of dispatch calls.
 * 
 * May be called from any origin except `None`.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then the calls are dispatched without checking origin filter. (This
 * includes bypassing `frame_system::Config::BaseCallFilter`).
 * 
 * ## Complexity
 * - O(C) where C is the number of calls to be batched.
 * 
 * This will return `Ok` in all circumstances. To determine the success of the batch, an
 * event is deposited. If a call failed and the batch was interrupted, then the
 * `BatchInterrupted` event is deposited, along with the number of successful calls made
 * and the error of the failed call. If all were successful, then the `BatchCompleted`
 * event is deposited.
 */
export interface UtilityCall_batch {
    __kind: 'batch'
    calls: Call[]
}

/**
 * Send a batch of dispatch calls and atomically execute them.
 * The whole transaction will rollback and fail if any of the calls failed.
 * 
 * May be called from any origin except `None`.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then the calls are dispatched without checking origin filter. (This
 * includes bypassing `frame_system::Config::BaseCallFilter`).
 * 
 * ## Complexity
 * - O(C) where C is the number of calls to be batched.
 */
export interface UtilityCall_batch_all {
    __kind: 'batch_all'
    calls: Call[]
}

/**
 * Dispatches a function call with a provided origin.
 * 
 * The dispatch origin for this call must be _Root_.
 * 
 * ## Complexity
 * - O(1).
 */
export interface UtilityCall_dispatch_as {
    __kind: 'dispatch_as'
    asOrigin: OriginCaller
    call: Call
}

/**
 * Send a batch of dispatch calls.
 * Unlike `batch`, it allows errors and won't interrupt.
 * 
 * May be called from any origin except `None`.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then the calls are dispatch without checking origin filter. (This
 * includes bypassing `frame_system::Config::BaseCallFilter`).
 * 
 * ## Complexity
 * - O(C) where C is the number of calls to be batched.
 */
export interface UtilityCall_force_batch {
    __kind: 'force_batch'
    calls: Call[]
}

/**
 * Dispatch a function call with a specified weight.
 * 
 * This function does not check the weight of the call, and instead allows the
 * Root origin to specify the weight of the call.
 * 
 * The dispatch origin for this call must be _Root_.
 */
export interface UtilityCall_with_weight {
    __kind: 'with_weight'
    call: Call
    weight: Weight
}

export type OriginCaller = OriginCaller_Council | OriginCaller_CumulusXcm | OriginCaller_PolkadotXcm | OriginCaller_TechnicalCommittee | OriginCaller_Void | OriginCaller_system

export interface OriginCaller_Council {
    __kind: 'Council'
    value: Type_361
}

export interface OriginCaller_CumulusXcm {
    __kind: 'CumulusXcm'
    value: Type_364
}

export interface OriginCaller_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: Origin
}

export interface OriginCaller_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: Type_362
}

export interface OriginCaller_Void {
    __kind: 'Void'
    value: Void
}

export interface OriginCaller_system {
    __kind: 'system'
    value: RawOrigin
}

export type RawOrigin = RawOrigin_None | RawOrigin_Root | RawOrigin_Signed

export interface RawOrigin_None {
    __kind: 'None'
}

export interface RawOrigin_Root {
    __kind: 'Root'
}

export interface RawOrigin_Signed {
    __kind: 'Signed'
    value: AccountId32
}

export type Void = never

export type Type_362 = Type_362_Member | Type_362_Members | Type_362__Phantom

export interface Type_362_Member {
    __kind: 'Member'
    value: AccountId32
}

export interface Type_362_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_362__Phantom {
    __kind: '_Phantom'
}

export type Origin = Origin_Response | Origin_Xcm

export interface Origin_Response {
    __kind: 'Response'
    value: V4Location
}

export interface Origin_Xcm {
    __kind: 'Xcm'
    value: V4Location
}

export type Type_364 = Type_364_Relay | Type_364_SiblingParachain

export interface Type_364_Relay {
    __kind: 'Relay'
}

export interface Type_364_SiblingParachain {
    __kind: 'SiblingParachain'
    value: Id
}

export type Id = number

export type Type_361 = Type_361_Member | Type_361_Members | Type_361__Phantom

export interface Type_361_Member {
    __kind: 'Member'
    value: AccountId32
}

export interface Type_361_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_361__Phantom {
    __kind: '_Phantom'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TimestampCall = TimestampCall_set

/**
 * Set the current time.
 * 
 * This call should be invoked exactly once per block. It will panic at the finalization
 * phase, if this call hasn't been invoked by that time.
 * 
 * The timestamp should be greater than the previous one by the amount specified by
 * [`Config::MinimumPeriod`].
 * 
 * The dispatch origin for this call must be _None_.
 * 
 * This dispatch class is _Mandatory_ to ensure it gets executed in the block. Be aware
 * that changing the complexity of this call could result exhausting the resources in a
 * block to execute any other calls.
 * 
 * ## Complexity
 * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
 * - 1 storage read and 1 storage mutation (codec `O(1)` because of `DidUpdate::take` in
 *   `on_finalize`)
 * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
 */
export interface TimestampCall_set {
    __kind: 'set'
    now: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TechnicalMembershipCall = TechnicalMembershipCall_add_member | TechnicalMembershipCall_change_key | TechnicalMembershipCall_clear_prime | TechnicalMembershipCall_remove_member | TechnicalMembershipCall_reset_members | TechnicalMembershipCall_set_prime | TechnicalMembershipCall_swap_member

/**
 * Add a member `who` to the set.
 * 
 * May only be called from `T::AddOrigin`.
 */
export interface TechnicalMembershipCall_add_member {
    __kind: 'add_member'
    who: MultiAddress
}

/**
 * Swap out the sending member for some other key `new`.
 * 
 * May only be called from `Signed` origin of a current member.
 * 
 * Prime membership is passed from the origin account to `new`, if extant.
 */
export interface TechnicalMembershipCall_change_key {
    __kind: 'change_key'
    new: MultiAddress
}

/**
 * Remove the prime member if it exists.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalMembershipCall_clear_prime {
    __kind: 'clear_prime'
}

/**
 * Remove a member `who` from the set.
 * 
 * May only be called from `T::RemoveOrigin`.
 */
export interface TechnicalMembershipCall_remove_member {
    __kind: 'remove_member'
    who: MultiAddress
}

/**
 * Change the membership to a new set, disregarding the existing membership. Be nice and
 * pass `members` pre-sorted.
 * 
 * May only be called from `T::ResetOrigin`.
 */
export interface TechnicalMembershipCall_reset_members {
    __kind: 'reset_members'
    members: AccountId32[]
}

/**
 * Set the prime member. Must be a current member.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalMembershipCall_set_prime {
    __kind: 'set_prime'
    who: MultiAddress
}

/**
 * Swap out one member `remove` for another `add`.
 * 
 * May only be called from `T::SwapOrigin`.
 * 
 * Prime membership is *not* passed from `remove` to `add`, if extant.
 */
export interface TechnicalMembershipCall_swap_member {
    __kind: 'swap_member'
    remove: MultiAddress
    add: MultiAddress
}

export type MultiAddress = MultiAddress_Address20 | MultiAddress_Address32 | MultiAddress_Id | MultiAddress_Index | MultiAddress_Raw

export interface MultiAddress_Address20 {
    __kind: 'Address20'
    value: Bytes
}

export interface MultiAddress_Address32 {
    __kind: 'Address32'
    value: Bytes
}

export interface MultiAddress_Id {
    __kind: 'Id'
    value: AccountId32
}

export interface MultiAddress_Index {
    __kind: 'Index'
}

export interface MultiAddress_Raw {
    __kind: 'Raw'
    value: Bytes
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TechnicalCommitteeCall = TechnicalCommitteeCall_close | TechnicalCommitteeCall_disapprove_proposal | TechnicalCommitteeCall_execute | TechnicalCommitteeCall_propose | TechnicalCommitteeCall_set_members | TechnicalCommitteeCall_vote

/**
 * Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 * May be called by any signed account in order to finish voting and close the proposal.
 * 
 * If called before the end of the voting period it will only close the vote if it is
 * has enough votes to be approved or disapproved.
 * 
 * If called after the end of the voting period abstentions are counted as rejections
 * unless there is a prime member set and the prime member cast an approval.
 * 
 * If the close operation completes successfully with disapproval, the transaction fee will
 * be waived. Otherwise execution of the approved operation will be charged to the caller.
 * 
 * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
 * proposal.
 * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 * ## Complexity
 * - `O(B + M + P1 + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - `P1` is the complexity of `proposal` preimage.
 *   - `P2` is proposal-count (code-bounded)
 */
export interface TechnicalCommitteeCall_close {
    __kind: 'close'
    proposalHash: H256
    index: number
    proposalWeightBound: Weight
    lengthBound: number
}

/**
 * Disapprove a proposal, close, and remove it from the system, regardless of its current
 * state.
 * 
 * Must be called by the Root origin.
 * 
 * Parameters:
 * * `proposal_hash`: The hash of the proposal that should be disapproved.
 * 
 * ## Complexity
 * O(P) where P is the number of max proposals
 */
export interface TechnicalCommitteeCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: H256
}

/**
 * Dispatch a proposal from a member using the `Member` origin.
 * 
 * Origin must be a member of the collective.
 * 
 * ## Complexity:
 * - `O(B + M + P)` where:
 * - `B` is `proposal` size in bytes (length-fee-bounded)
 * - `M` members-count (code-bounded)
 * - `P` complexity of dispatching `proposal`
 */
export interface TechnicalCommitteeCall_execute {
    __kind: 'execute'
    proposal: Call
    lengthBound: number
}

/**
 * Add a new proposal to either be voted on or executed directly.
 * 
 * Requires the sender to be member.
 * 
 * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
 * or put up for voting.
 * 
 * ## Complexity
 * - `O(B + M + P1)` or `O(B + M + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - branching is influenced by `threshold` where:
 *     - `P1` is proposal execution complexity (`threshold < 2`)
 *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 */
export interface TechnicalCommitteeCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Call
    lengthBound: number
}

/**
 * Set the collective's membership.
 * 
 * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 * - `prime`: The prime member whose vote sets the default.
 * - `old_count`: The upper bound for the previous number of members in storage. Used for
 *   weight estimation.
 * 
 * The dispatch of this call must be `SetMembersOrigin`.
 * 
 * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
 *       the weight estimations rely on it to estimate dispatchable weight.
 * 
 * # WARNING:
 * 
 * The `pallet-collective` can also be managed by logic outside of the pallet through the
 * implementation of the trait [`ChangeMembers`].
 * Any call to `set_members` must be careful that the member set doesn't get out of sync
 * with other logic managing the member set.
 * 
 * ## Complexity:
 * - `O(MP + N)` where:
 *   - `M` old-members-count (code- and governance-bounded)
 *   - `N` new-members-count (code- and governance-bounded)
 *   - `P` proposals-count (code-bounded)
 */
export interface TechnicalCommitteeCall_set_members {
    __kind: 'set_members'
    newMembers: AccountId32[]
    prime?: (AccountId32 | undefined)
    oldCount: number
}

/**
 * Add an aye or nay vote for the sender to the given proposal.
 * 
 * Requires the sender to be a member.
 * 
 * Transaction fees will be waived if the member is voting on any particular proposal
 * for the first time and the call is successful. Subsequent vote changes will charge a
 * fee.
 * ## Complexity
 * - `O(M)` where `M` is members-count (code- and governance-bounded)
 */
export interface TechnicalCommitteeCall_vote {
    __kind: 'vote'
    proposal: H256
    index: number
    approve: boolean
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SystemCall = SystemCall_apply_authorized_upgrade | SystemCall_authorize_upgrade | SystemCall_authorize_upgrade_without_checks | SystemCall_kill_prefix | SystemCall_kill_storage | SystemCall_remark | SystemCall_remark_with_event | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_heap_pages | SystemCall_set_storage

/**
 * Provide the preimage (runtime binary) `code` for an upgrade that has been authorized.
 * 
 * If the authorization required a version check, this call will ensure the spec name
 * remains unchanged and that the spec version has increased.
 * 
 * Depending on the runtime's `OnSetCode` configuration, this function may directly apply
 * the new `code` in the same block or attempt to schedule the upgrade.
 * 
 * All origins are allowed.
 */
export interface SystemCall_apply_authorized_upgrade {
    __kind: 'apply_authorized_upgrade'
    code: Bytes
}

/**
 * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
 * later.
 * 
 * This call requires Root origin.
 */
export interface SystemCall_authorize_upgrade {
    __kind: 'authorize_upgrade'
    codeHash: H256
}

/**
 * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
 * later.
 * 
 * WARNING: This authorizes an upgrade that will take place without any safety checks, for
 * example that the spec name remains the same and that the version number increases. Not
 * recommended for normal use. Use `authorize_upgrade` instead.
 * 
 * This call requires Root origin.
 */
export interface SystemCall_authorize_upgrade_without_checks {
    __kind: 'authorize_upgrade_without_checks'
    codeHash: H256
}

/**
 * Kill all storage items with a key that starts with the given prefix.
 * 
 * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
 * the prefix we are removing to accurately calculate the weight of this function.
 */
export interface SystemCall_kill_prefix {
    __kind: 'kill_prefix'
    prefix: Bytes
    subkeys: number
}

/**
 * Kill some items from storage.
 */
export interface SystemCall_kill_storage {
    __kind: 'kill_storage'
    keys: Bytes[]
}

/**
 * Make some on-chain remark.
 * 
 * Can be executed by every `origin`.
 */
export interface SystemCall_remark {
    __kind: 'remark'
    remark: Bytes
}

/**
 * Make some on-chain remark and emit event.
 */
export interface SystemCall_remark_with_event {
    __kind: 'remark_with_event'
    remark: Bytes
}

/**
 * Set the new runtime code.
 */
export interface SystemCall_set_code {
    __kind: 'set_code'
    code: Bytes
}

/**
 * Set the new runtime code without doing any checks of the given `code`.
 * 
 * Note that runtime upgrades will not run if this is called with a not-increasing spec
 * version!
 */
export interface SystemCall_set_code_without_checks {
    __kind: 'set_code_without_checks'
    code: Bytes
}

/**
 * Set the number of pages in the WebAssembly environment's heap.
 */
export interface SystemCall_set_heap_pages {
    __kind: 'set_heap_pages'
    pages: bigint
}

/**
 * Set some items of storage.
 */
export interface SystemCall_set_storage {
    __kind: 'set_storage'
    items: [Bytes, Bytes][]
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SudoCall = SudoCall_remove_key | SudoCall_set_key | SudoCall_sudo | SudoCall_sudo_as | SudoCall_sudo_unchecked_weight

/**
 * Permanently removes the sudo key.
 * 
 * **This cannot be un-done.**
 */
export interface SudoCall_remove_key {
    __kind: 'remove_key'
}

/**
 * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
 * key.
 */
export interface SudoCall_set_key {
    __kind: 'set_key'
    new: MultiAddress
}

/**
 * Authenticates the sudo key and dispatches a function call with `Root` origin.
 */
export interface SudoCall_sudo {
    __kind: 'sudo'
    call: Call
}

/**
 * Authenticates the sudo key and dispatches a function call with `Signed` origin from
 * a given account.
 * 
 * The dispatch origin for this call must be _Signed_.
 */
export interface SudoCall_sudo_as {
    __kind: 'sudo_as'
    who: MultiAddress
    call: Call
}

/**
 * Authenticates the sudo key and dispatches a function call with `Root` origin.
 * This function does not check the weight of the call, and instead allows the
 * Sudo user to specify the weight of the call.
 * 
 * The dispatch origin for this call must be _Signed_.
 */
export interface SudoCall_sudo_unchecked_weight {
    __kind: 'sudo_unchecked_weight'
    call: Call
    weight: Weight
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SessionCall = SessionCall_purge_keys | SessionCall_set_keys

/**
 * Removes any session key(s) of the function caller.
 * 
 * This doesn't take effect until the next session.
 * 
 * The dispatch origin of this function must be Signed and the account must be either be
 * convertible to a validator ID using the chain's typical addressing system (this usually
 * means being a controller account) or directly convertible into a validator ID (which
 * usually means being a stash account).
 * 
 * ## Complexity
 * - `O(1)` in number of key types. Actual cost depends on the number of length of
 *   `T::Keys::key_ids()` which is fixed.
 */
export interface SessionCall_purge_keys {
    __kind: 'purge_keys'
}

/**
 * Sets the session key(s) of the function caller to `keys`.
 * Allows an account to set its session key prior to becoming a validator.
 * This doesn't take effect until the next session.
 * 
 * The dispatch origin of this function must be signed.
 * 
 * ## Complexity
 * - `O(1)`. Actual cost depends on the number of length of `T::Keys::key_ids()` which is
 *   fixed.
 */
export interface SessionCall_set_keys {
    __kind: 'set_keys'
    keys: SessionKeys
    proof: Bytes
}

export interface SessionKeys {
    aura: Public
    pools: Public
}

export type Public = Bytes

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SchedulerCall = SchedulerCall_cancel | SchedulerCall_cancel_named | SchedulerCall_cancel_retry | SchedulerCall_cancel_retry_named | SchedulerCall_schedule | SchedulerCall_schedule_after | SchedulerCall_schedule_named | SchedulerCall_schedule_named_after | SchedulerCall_set_retry | SchedulerCall_set_retry_named

/**
 * Cancel an anonymously scheduled task.
 */
export interface SchedulerCall_cancel {
    __kind: 'cancel'
    when: number
    index: number
}

/**
 * Cancel a named scheduled task.
 */
export interface SchedulerCall_cancel_named {
    __kind: 'cancel_named'
    id: Bytes
}

/**
 * Removes the retry configuration of a task.
 */
export interface SchedulerCall_cancel_retry {
    __kind: 'cancel_retry'
    task: [number, number]
}

/**
 * Cancel the retry configuration of a named task.
 */
export interface SchedulerCall_cancel_retry_named {
    __kind: 'cancel_retry_named'
    id: Bytes
}

/**
 * Anonymously schedule a task.
 */
export interface SchedulerCall_schedule {
    __kind: 'schedule'
    when: number
    maybePeriodic?: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * Anonymously schedule a task after a delay.
 */
export interface SchedulerCall_schedule_after {
    __kind: 'schedule_after'
    after: number
    maybePeriodic?: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * Schedule a named task.
 */
export interface SchedulerCall_schedule_named {
    __kind: 'schedule_named'
    id: Bytes
    when: number
    maybePeriodic?: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * Schedule a named task after a delay.
 */
export interface SchedulerCall_schedule_named_after {
    __kind: 'schedule_named_after'
    id: Bytes
    after: number
    maybePeriodic?: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * Set a retry configuration for a task so that, in case its scheduled run fails, it will
 * be retried after `period` blocks, for a total amount of `retries` retries or until it
 * succeeds.
 * 
 * Tasks which need to be scheduled for a retry are still subject to weight metering and
 * agenda space, same as a regular task. If a periodic task fails, it will be scheduled
 * normally while the task is retrying.
 * 
 * Tasks scheduled as a result of a retry for a periodic task are unnamed, non-periodic
 * clones of the original task. Their retry configuration will be derived from the
 * original task's configuration, but will have a lower value for `remaining` than the
 * original `total_retries`.
 */
export interface SchedulerCall_set_retry {
    __kind: 'set_retry'
    task: [number, number]
    retries: number
    period: number
}

/**
 * Set a retry configuration for a named task so that, in case its scheduled run fails, it
 * will be retried after `period` blocks, for a total amount of `retries` retries or until
 * it succeeds.
 * 
 * Tasks which need to be scheduled for a retry are still subject to weight metering and
 * agenda space, same as a regular task. If a periodic task fails, it will be scheduled
 * normally while the task is retrying.
 * 
 * Tasks scheduled as a result of a retry for a periodic task are unnamed, non-periodic
 * clones of the original task. Their retry configuration will be derived from the
 * original task's configuration, but will have a lower value for `remaining` than the
 * original `total_retries`.
 */
export interface SchedulerCall_set_retry_named {
    __kind: 'set_retry_named'
    id: Bytes
    retries: number
    period: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SafeModeCall = SafeModeCall_enter | SafeModeCall_extend | SafeModeCall_force_enter | SafeModeCall_force_exit | SafeModeCall_force_extend | SafeModeCall_force_release_deposit | SafeModeCall_force_slash_deposit | SafeModeCall_release_deposit

/**
 * Enter safe-mode permissionlessly for [`Config::EnterDuration`] blocks.
 * 
 * Reserves [`Config::EnterDepositAmount`] from the caller's account.
 * Emits an [`Event::Entered`] event on success.
 * Errors with [`Error::Entered`] if the safe-mode is already entered.
 * Errors with [`Error::NotConfigured`] if the deposit amount is `None`.
 */
export interface SafeModeCall_enter {
    __kind: 'enter'
}

/**
 * Extend the safe-mode permissionlessly for [`Config::ExtendDuration`] blocks.
 * 
 * This accumulates on top of the current remaining duration.
 * Reserves [`Config::ExtendDepositAmount`] from the caller's account.
 * Emits an [`Event::Extended`] event on success.
 * Errors with [`Error::Exited`] if the safe-mode is entered.
 * Errors with [`Error::NotConfigured`] if the deposit amount is `None`.
 * 
 * This may be called by any signed origin with [`Config::ExtendDepositAmount`] free
 * currency to reserve. This call can be disabled for all origins by configuring
 * [`Config::ExtendDepositAmount`] to `None`.
 */
export interface SafeModeCall_extend {
    __kind: 'extend'
}

/**
 * Enter safe-mode by force for a per-origin configured number of blocks.
 * 
 * Emits an [`Event::Entered`] event on success.
 * Errors with [`Error::Entered`] if the safe-mode is already entered.
 * 
 * Can only be called by the [`Config::ForceEnterOrigin`] origin.
 */
export interface SafeModeCall_force_enter {
    __kind: 'force_enter'
}

/**
 * Exit safe-mode by force.
 * 
 * Emits an [`Event::Exited`] with [`ExitReason::Force`] event on success.
 * Errors with [`Error::Exited`] if the safe-mode is inactive.
 * 
 * Note: `safe-mode` will be automatically deactivated by [`Pallet::on_initialize`] hook
 * after the block height is greater than the [`EnteredUntil`] storage item.
 * Emits an [`Event::Exited`] with [`ExitReason::Timeout`] event when deactivated in the
 * hook.
 */
export interface SafeModeCall_force_exit {
    __kind: 'force_exit'
}

/**
 * Extend the safe-mode by force for a per-origin configured number of blocks.
 * 
 * Emits an [`Event::Extended`] event on success.
 * Errors with [`Error::Exited`] if the safe-mode is inactive.
 * 
 * Can only be called by the [`Config::ForceExtendOrigin`] origin.
 */
export interface SafeModeCall_force_extend {
    __kind: 'force_extend'
}

/**
 * Force to release a deposit for an account that entered safe-mode at a given
 * historical block.
 * 
 * This can be called while safe-mode is still entered.
 * 
 * Emits a [`Event::DepositReleased`] event on success.
 * Errors with [`Error::Entered`] if safe-mode is entered.
 * Errors with [`Error::NoDeposit`] if the payee has no reserved currency at the
 * specified block.
 * 
 * Can only be called by the [`Config::ForceDepositOrigin`] origin.
 */
export interface SafeModeCall_force_release_deposit {
    __kind: 'force_release_deposit'
    account: AccountId32
    block: number
}

/**
 * Slash a deposit for an account that entered or extended safe-mode at a given
 * historical block.
 * 
 * This can only be called while safe-mode is entered.
 * 
 * Emits a [`Event::DepositSlashed`] event on success.
 * Errors with [`Error::Entered`] if safe-mode is entered.
 * 
 * Can only be called by the [`Config::ForceDepositOrigin`] origin.
 */
export interface SafeModeCall_force_slash_deposit {
    __kind: 'force_slash_deposit'
    account: AccountId32
    block: number
}

/**
 * Permissionlessly release a deposit for an account that entered safe-mode at a
 * given historical block.
 * 
 * The call can be completely disabled by setting [`Config::ReleaseDelay`] to `None`.
 * This cannot be called while safe-mode is entered and not until
 * [`Config::ReleaseDelay`] blocks have passed since safe-mode was entered.
 * 
 * Emits a [`Event::DepositReleased`] event on success.
 * Errors with [`Error::Entered`] if the safe-mode is entered.
 * Errors with [`Error::CannotReleaseYet`] if [`Config::ReleaseDelay`] block have not
 * passed since safe-mode was entered. Errors with [`Error::NoDeposit`] if the payee has no
 * reserved currency at the block specified.
 */
export interface SafeModeCall_release_deposit {
    __kind: 'release_deposit'
    account: AccountId32
    block: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ProxyCall = ProxyCall_add_proxy | ProxyCall_announce | ProxyCall_create_pure | ProxyCall_kill_pure | ProxyCall_proxy | ProxyCall_proxy_announced | ProxyCall_reject_announcement | ProxyCall_remove_announcement | ProxyCall_remove_proxies | ProxyCall_remove_proxy

/**
 * Register a proxy account for the sender that is able to make calls on its behalf.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `proxy`: The account that the `caller` would like to make a proxy.
 * - `proxy_type`: The permissions allowed for this proxy account.
 * - `delay`: The announcement period required of the initial proxy. Will generally be
 * zero.
 */
export interface ProxyCall_add_proxy {
    __kind: 'add_proxy'
    delegate: MultiAddress
    proxyType: ProxyType
    delay: number
}

/**
 * Publish the hash of a proxy-call that will be made in the future.
 * 
 * This must be called some number of blocks before the corresponding `proxy` is attempted
 * if the delay associated with the proxy relationship is greater than zero.
 * 
 * No more than `MaxPending` announcements may be made at any one time.
 * 
 * This will take a deposit of `AnnouncementDepositFactor` as well as
 * `AnnouncementDepositBase` if there are no other pending announcements.
 * 
 * The dispatch origin for this call must be _Signed_ and a proxy of `real`.
 * 
 * Parameters:
 * - `real`: The account that the proxy will make a call on behalf of.
 * - `call_hash`: The hash of the call to be made by the `real` account.
 */
export interface ProxyCall_announce {
    __kind: 'announce'
    real: MultiAddress
    callHash: H256
}

/**
 * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
 * initialize it with a proxy of `proxy_type` for `origin` sender.
 * 
 * Requires a `Signed` origin.
 * 
 * - `proxy_type`: The type of the proxy that the sender will be registered as over the
 * new account. This will almost always be the most permissive `ProxyType` possible to
 * allow for maximum flexibility.
 * - `index`: A disambiguation index, in case this is called multiple times in the same
 * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
 * want to use `0`.
 * - `delay`: The announcement period required of the initial proxy. Will generally be
 * zero.
 * 
 * Fails with `Duplicate` if this has already been called in this transaction, from the
 * same sender, with the same parameters.
 * 
 * Fails if there are insufficient funds to pay for deposit.
 */
export interface ProxyCall_create_pure {
    __kind: 'create_pure'
    proxyType: ProxyType
    delay: number
    index: number
}

/**
 * Removes a previously spawned pure proxy.
 * 
 * WARNING: **All access to this account will be lost.** Any funds held in it will be
 * inaccessible.
 * 
 * Requires a `Signed` origin, and the sender account must have been created by a call to
 * `pure` with corresponding parameters.
 * 
 * - `spawner`: The account that originally called `pure` to create this account.
 * - `index`: The disambiguation index originally passed to `pure`. Probably `0`.
 * - `proxy_type`: The proxy type originally passed to `pure`.
 * - `height`: The height of the chain when the call to `pure` was processed.
 * - `ext_index`: The extrinsic index in which the call to `pure` was processed.
 * 
 * Fails with `NoPermission` in case the caller is not a previously created pure
 * account whose `pure` call has corresponding parameters.
 */
export interface ProxyCall_kill_pure {
    __kind: 'kill_pure'
    spawner: MultiAddress
    proxyType: ProxyType
    index: number
    height: number
    extIndex: number
}

/**
 * Dispatch the given `call` from an account that the sender is authorised for through
 * `add_proxy`.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `real`: The account that the proxy will make a call on behalf of.
 * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
 * - `call`: The call to be made by the `real` account.
 */
export interface ProxyCall_proxy {
    __kind: 'proxy'
    real: MultiAddress
    forceProxyType?: (ProxyType | undefined)
    call: Call
}

/**
 * Dispatch the given `call` from an account that the sender is authorized for through
 * `add_proxy`.
 * 
 * Removes any corresponding announcement(s).
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `real`: The account that the proxy will make a call on behalf of.
 * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
 * - `call`: The call to be made by the `real` account.
 */
export interface ProxyCall_proxy_announced {
    __kind: 'proxy_announced'
    delegate: MultiAddress
    real: MultiAddress
    forceProxyType?: (ProxyType | undefined)
    call: Call
}

/**
 * Remove the given announcement of a delegate.
 * 
 * May be called by a target (proxied) account to remove a call that one of their delegates
 * (`delegate`) has announced they want to execute. The deposit is returned.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `delegate`: The account that previously announced the call.
 * - `call_hash`: The hash of the call to be made.
 */
export interface ProxyCall_reject_announcement {
    __kind: 'reject_announcement'
    delegate: MultiAddress
    callHash: H256
}

/**
 * Remove a given announcement.
 * 
 * May be called by a proxy account to remove a call they previously announced and return
 * the deposit.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `real`: The account that the proxy will make a call on behalf of.
 * - `call_hash`: The hash of the call to be made by the `real` account.
 */
export interface ProxyCall_remove_announcement {
    __kind: 'remove_announcement'
    real: MultiAddress
    callHash: H256
}

/**
 * Unregister all proxy accounts for the sender.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * WARNING: This may be called on accounts created by `pure`, however if done, then
 * the unreserved fees will be inaccessible. **All access to this account will be lost.**
 */
export interface ProxyCall_remove_proxies {
    __kind: 'remove_proxies'
}

/**
 * Unregister a proxy account for the sender.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `proxy`: The account that the `caller` would like to remove as a proxy.
 * - `proxy_type`: The permissions currently enabled for the removed proxy account.
 */
export interface ProxyCall_remove_proxy {
    __kind: 'remove_proxy'
    delegate: MultiAddress
    proxyType: ProxyType
    delay: number
}

export type ProxyType = ProxyType_Any | ProxyType_Governance | ProxyType_Tokens

export interface ProxyType_Any {
    __kind: 'Any'
}

export interface ProxyType_Governance {
    __kind: 'Governance'
}

export interface ProxyType_Tokens {
    __kind: 'Tokens'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type PreimageCall = PreimageCall_ensure_updated | PreimageCall_note_preimage | PreimageCall_request_preimage | PreimageCall_unnote_preimage | PreimageCall_unrequest_preimage

/**
 * Ensure that the a bulk of pre-images is upgraded.
 * 
 * The caller pays no fee if at least 90% of pre-images were successfully updated.
 */
export interface PreimageCall_ensure_updated {
    __kind: 'ensure_updated'
    hashes: H256[]
}

/**
 * Register a preimage on-chain.
 * 
 * If the preimage was previously requested, no fees or deposits are taken for providing
 * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
 */
export interface PreimageCall_note_preimage {
    __kind: 'note_preimage'
    bytes: Bytes
}

/**
 * Request a preimage be uploaded to the chain without paying any fees or deposits.
 * 
 * If the preimage requests has already been provided on-chain, we unreserve any deposit
 * a user may have paid, and take the control of the preimage out of their hands.
 */
export interface PreimageCall_request_preimage {
    __kind: 'request_preimage'
    hash: H256
}

/**
 * Clear an unrequested preimage from the runtime storage.
 * 
 * If `len` is provided, then it will be a much cheaper operation.
 * 
 * - `hash`: The hash of the preimage to be removed from the store.
 * - `len`: The length of the preimage of `hash`.
 */
export interface PreimageCall_unnote_preimage {
    __kind: 'unnote_preimage'
    hash: H256
}

/**
 * Clear a previously made request for a preimage.
 * 
 * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
 */
export interface PreimageCall_unrequest_preimage {
    __kind: 'unrequest_preimage'
    hash: H256
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type PoolsCall = PoolsCall_mutate_pools

/**
 * Mutate the pools. Can only be called by root.
 * 
 * This extrinsic can udpate the fee share of each pool, by applying provided `mutation`
 * consisting of all pools and their `fee_share`, which is a percentage value. This allows
 * changing how fees are split between pools. Total percentage must be 100%, otherwise
 * `InvalidFeeShares` error is returned. Emits `PoolsMutated` event in the success case.
 * 
 * # Errors
 * 
 * - [`Error::InvalidFeeShares`] if the fee shares do not add up to 100%
 */
export interface PoolsCall_mutate_pools {
    __kind: 'mutate_pools'
    mutation: PoolsMutation
}

export interface PoolsMutation {
    community: Pool
    collator: Pool
    fuelTanks: Pool
    priceDiscovery: Pool
}

export interface Pool {
    feeShare: Perbill
}

export type Perbill = number

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type PolkadotXcmCall = PolkadotXcmCall_claim_assets | PolkadotXcmCall_execute | PolkadotXcmCall_force_default_xcm_version | PolkadotXcmCall_force_subscribe_version_notify | PolkadotXcmCall_force_suspension | PolkadotXcmCall_force_unsubscribe_version_notify | PolkadotXcmCall_force_xcm_version | PolkadotXcmCall_limited_reserve_transfer_assets | PolkadotXcmCall_limited_teleport_assets | PolkadotXcmCall_reserve_transfer_assets | PolkadotXcmCall_send | PolkadotXcmCall_teleport_assets | PolkadotXcmCall_transfer_assets

/**
 * Claims assets trapped on this pallet because of leftover assets during XCM execution.
 * 
 * - `origin`: Anyone can call this extrinsic.
 * - `assets`: The exact assets that were trapped. Use the version to specify what version
 * was the latest when they were trapped.
 * - `beneficiary`: The location/account where the claimed assets will be deposited.
 */
export interface PolkadotXcmCall_claim_assets {
    __kind: 'claim_assets'
    assets: VersionedAssets
    beneficiary: VersionedLocation
}

/**
 * Execute an XCM message from a local, signed, origin.
 * 
 * An event is deposited indicating whether `msg` could be executed completely or only
 * partially.
 * 
 * No more than `max_weight` will be used in its attempted execution. If this is less than
 * the maximum amount of weight that the message could take to be executed, then no
 * execution attempt will be made.
 */
export interface PolkadotXcmCall_execute {
    __kind: 'execute'
    message: Type_414
    maxWeight: Weight
}

/**
 * Set a safe XCM version (the version that XCM should be encoded with if the most recent
 * version a destination can accept is unknown).
 * 
 * - `origin`: Must be an origin specified by AdminOrigin.
 * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
 */
export interface PolkadotXcmCall_force_default_xcm_version {
    __kind: 'force_default_xcm_version'
    maybeXcmVersion?: (number | undefined)
}

/**
 * Ask a location to notify us regarding their XCM version and any changes to it.
 * 
 * - `origin`: Must be an origin specified by AdminOrigin.
 * - `location`: The location to which we should subscribe for XCM version notifications.
 */
export interface PolkadotXcmCall_force_subscribe_version_notify {
    __kind: 'force_subscribe_version_notify'
    location: VersionedLocation
}

/**
 * Set or unset the global suspension state of the XCM executor.
 * 
 * - `origin`: Must be an origin specified by AdminOrigin.
 * - `suspended`: `true` to suspend, `false` to resume.
 */
export interface PolkadotXcmCall_force_suspension {
    __kind: 'force_suspension'
    suspended: boolean
}

/**
 * Require that a particular destination should no longer notify us regarding any XCM
 * version changes.
 * 
 * - `origin`: Must be an origin specified by AdminOrigin.
 * - `location`: The location to which we are currently subscribed for XCM version
 *   notifications which we no longer desire.
 */
export interface PolkadotXcmCall_force_unsubscribe_version_notify {
    __kind: 'force_unsubscribe_version_notify'
    location: VersionedLocation
}

/**
 * Extoll that a particular destination can be communicated with through a particular
 * version of XCM.
 * 
 * - `origin`: Must be an origin specified by AdminOrigin.
 * - `location`: The destination that is being described.
 * - `xcm_version`: The latest version of XCM that `location` supports.
 */
export interface PolkadotXcmCall_force_xcm_version {
    __kind: 'force_xcm_version'
    location: V4Location
    version: number
}

/**
 * Transfer some assets from the local chain to the destination chain through their local,
 * destination or remote reserve.
 * 
 * `assets` must have same reserve location and may not be teleportable to `dest`.
 *  - `assets` have local reserve: transfer assets to sovereign account of destination
 *    chain and forward a notification XCM to `dest` to mint and deposit reserve-based
 *    assets to `beneficiary`.
 *  - `assets` have destination reserve: burn local assets and forward a notification to
 *    `dest` chain to withdraw the reserve assets from this chain's sovereign account and
 *    deposit them to `beneficiary`.
 *  - `assets` have remote reserve: burn local assets, forward XCM to reserve chain to move
 *    reserves from this chain's SA to `dest` chain's SA, and forward another XCM to `dest`
 *    to mint and deposit reserve-based assets to `beneficiary`.
 * 
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
 * is needed than `weight_limit`, then the operation will fail and the assets send may be
 * at risk.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `[Parent,
 *   Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
 *   relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
 *   generally be an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
 *   fee on the `dest` (and possibly reserve) chains.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
 */
export interface PolkadotXcmCall_limited_reserve_transfer_assets {
    __kind: 'limited_reserve_transfer_assets'
    dest: VersionedLocation
    beneficiary: VersionedLocation
    assets: VersionedAssets
    feeAssetItem: number
    weightLimit: V3WeightLimit
}

/**
 * Teleport some assets from the local chain to some destination chain.
 * 
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
 * is needed than `weight_limit`, then the operation will fail and the assets send may be
 * at risk.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `[Parent,
 *   Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
 *   relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
 *   generally be an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
 *   fee on the `dest` chain.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
 */
export interface PolkadotXcmCall_limited_teleport_assets {
    __kind: 'limited_teleport_assets'
    dest: VersionedLocation
    beneficiary: VersionedLocation
    assets: VersionedAssets
    feeAssetItem: number
    weightLimit: V3WeightLimit
}

/**
 * Transfer some assets from the local chain to the destination chain through their local,
 * destination or remote reserve.
 * 
 * `assets` must have same reserve location and may not be teleportable to `dest`.
 *  - `assets` have local reserve: transfer assets to sovereign account of destination
 *    chain and forward a notification XCM to `dest` to mint and deposit reserve-based
 *    assets to `beneficiary`.
 *  - `assets` have destination reserve: burn local assets and forward a notification to
 *    `dest` chain to withdraw the reserve assets from this chain's sovereign account and
 *    deposit them to `beneficiary`.
 *  - `assets` have remote reserve: burn local assets, forward XCM to reserve chain to move
 *    reserves from this chain's SA to `dest` chain's SA, and forward another XCM to `dest`
 *    to mint and deposit reserve-based assets to `beneficiary`.
 * 
 * **This function is deprecated: Use `limited_reserve_transfer_assets` instead.**
 * 
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
 * with all fees taken as needed from the asset.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `[Parent,
 *   Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
 *   relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
 *   generally be an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
 *   fee on the `dest` (and possibly reserve) chains.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 */
export interface PolkadotXcmCall_reserve_transfer_assets {
    __kind: 'reserve_transfer_assets'
    dest: VersionedLocation
    beneficiary: VersionedLocation
    assets: VersionedAssets
    feeAssetItem: number
}

export interface PolkadotXcmCall_send {
    __kind: 'send'
    dest: VersionedLocation
    message: VersionedXcm
}

/**
 * Teleport some assets from the local chain to some destination chain.
 * 
 * **This function is deprecated: Use `limited_teleport_assets` instead.**
 * 
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
 * with all fees taken as needed from the asset.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `[Parent,
 *   Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
 *   relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
 *   generally be an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
 *   fee on the `dest` chain.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 */
export interface PolkadotXcmCall_teleport_assets {
    __kind: 'teleport_assets'
    dest: VersionedLocation
    beneficiary: VersionedLocation
    assets: VersionedAssets
    feeAssetItem: number
}

/**
 * Transfer some assets from the local chain to the destination chain through their local,
 * destination or remote reserve, or through teleports.
 * 
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item` (hence referred to as `fees`), up to enough to pay for
 * `weight_limit` of weight. If more weight is needed than `weight_limit`, then the
 * operation will fail and the assets sent may be at risk.
 * 
 * `assets` (excluding `fees`) must have same reserve location or otherwise be teleportable
 * to `dest`, no limitations imposed on `fees`.
 *  - for local reserve: transfer assets to sovereign account of destination chain and
 *    forward a notification XCM to `dest` to mint and deposit reserve-based assets to
 *    `beneficiary`.
 *  - for destination reserve: burn local assets and forward a notification to `dest` chain
 *    to withdraw the reserve assets from this chain's sovereign account and deposit them
 *    to `beneficiary`.
 *  - for remote reserve: burn local assets, forward XCM to reserve chain to move reserves
 *    from this chain's SA to `dest` chain's SA, and forward another XCM to `dest` to mint
 *    and deposit reserve-based assets to `beneficiary`.
 *  - for teleports: burn local assets and forward XCM to `dest` chain to mint/teleport
 *    assets and deposit them to `beneficiary`.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent,
 *   Parachain(..))` to send from parachain to parachain, or `X1(Parachain(..))` to send
 *   from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
 *   generally be an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
 *   fee on the `dest` (and possibly reserve) chains.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
 */
export interface PolkadotXcmCall_transfer_assets {
    __kind: 'transfer_assets'
    dest: VersionedLocation
    beneficiary: VersionedLocation
    assets: VersionedAssets
    feeAssetItem: number
    weightLimit: V3WeightLimit
}

export type VersionedXcm = VersionedXcm_V2 | VersionedXcm_V3 | VersionedXcm_V4

export interface VersionedXcm_V2 {
    __kind: 'V2'
    value: V2Instruction[]
}

export interface VersionedXcm_V3 {
    __kind: 'V3'
    value: V3Instruction[]
}

export interface VersionedXcm_V4 {
    __kind: 'V4'
    value: V4Instruction[]
}

export type V4Instruction = V4Instruction_AliasOrigin | V4Instruction_BurnAsset | V4Instruction_BuyExecution | V4Instruction_ClaimAsset | V4Instruction_ClearError | V4Instruction_ClearOrigin | V4Instruction_ClearTopic | V4Instruction_ClearTransactStatus | V4Instruction_DepositAsset | V4Instruction_DepositReserveAsset | V4Instruction_DescendOrigin | V4Instruction_ExchangeAsset | V4Instruction_ExpectAsset | V4Instruction_ExpectError | V4Instruction_ExpectOrigin | V4Instruction_ExpectPallet | V4Instruction_ExpectTransactStatus | V4Instruction_ExportMessage | V4Instruction_HrmpChannelAccepted | V4Instruction_HrmpChannelClosing | V4Instruction_HrmpNewChannelOpenRequest | V4Instruction_InitiateReserveWithdraw | V4Instruction_InitiateTeleport | V4Instruction_LockAsset | V4Instruction_NoteUnlockable | V4Instruction_QueryPallet | V4Instruction_QueryResponse | V4Instruction_ReceiveTeleportedAsset | V4Instruction_RefundSurplus | V4Instruction_ReportError | V4Instruction_ReportHolding | V4Instruction_ReportTransactStatus | V4Instruction_RequestUnlock | V4Instruction_ReserveAssetDeposited | V4Instruction_SetAppendix | V4Instruction_SetErrorHandler | V4Instruction_SetFeesMode | V4Instruction_SetTopic | V4Instruction_SubscribeVersion | V4Instruction_Transact | V4Instruction_TransferAsset | V4Instruction_TransferReserveAsset | V4Instruction_Trap | V4Instruction_UniversalOrigin | V4Instruction_UnlockAsset | V4Instruction_UnpaidExecution | V4Instruction_UnsubscribeVersion | V4Instruction_WithdrawAsset

export interface V4Instruction_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V4Location
}

export interface V4Instruction_BurnAsset {
    __kind: 'BurnAsset'
    value: V4Asset[]
}

export interface V4Instruction_BuyExecution {
    __kind: 'BuyExecution'
    fees: V4Asset
    weightLimit: V3WeightLimit
}

export interface V4Instruction_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V4Asset[]
    ticket: V4Location
}

export interface V4Instruction_ClearError {
    __kind: 'ClearError'
}

export interface V4Instruction_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface V4Instruction_ClearTopic {
    __kind: 'ClearTopic'
}

export interface V4Instruction_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface V4Instruction_DepositAsset {
    __kind: 'DepositAsset'
    assets: V4AssetFilter
    beneficiary: V4Location
}

export interface V4Instruction_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V4AssetFilter
    dest: V4Location
    xcm: V4Instruction[]
}

export interface V4Instruction_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V4Junctions
}

export interface V4Instruction_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V4AssetFilter
    want: V4Asset[]
    maximal: boolean
}

export interface V4Instruction_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V4Asset[]
}

export interface V4Instruction_ExpectError {
    __kind: 'ExpectError'
    value?: ([number, V3Error] | undefined)
}

export interface V4Instruction_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value?: (V4Location | undefined)
}

export interface V4Instruction_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Bytes
    moduleName: Bytes
    crateMajor: number
    minCrateMinor: number
}

export interface V4Instruction_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface V4Instruction_ExportMessage {
    __kind: 'ExportMessage'
    network: V4NetworkId
    destination: V4Junctions
    xcm: V4Instruction[]
}

export interface V4Instruction_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface V4Instruction_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface V4Instruction_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface V4Instruction_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V4AssetFilter
    reserve: V4Location
    xcm: V4Instruction[]
}

export interface V4Instruction_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V4AssetFilter
    dest: V4Location
    xcm: V4Instruction[]
}

export interface V4Instruction_LockAsset {
    __kind: 'LockAsset'
    asset: V4Asset
    unlocker: V4Location
}

export interface V4Instruction_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V4Asset
    owner: V4Location
}

export interface V4Instruction_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Bytes
    responseInfo: V4QueryResponseInfo
}

export interface V4Instruction_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V4Response
    maxWeight: Weight
    querier?: (V4Location | undefined)
}

export interface V4Instruction_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V4Asset[]
}

export interface V4Instruction_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface V4Instruction_ReportError {
    __kind: 'ReportError'
    value: V4QueryResponseInfo
}

export interface V4Instruction_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V4QueryResponseInfo
    assets: V4AssetFilter
}

export interface V4Instruction_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V4QueryResponseInfo
}

export interface V4Instruction_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V4Asset
    locker: V4Location
}

export interface V4Instruction_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V4Asset[]
}

export interface V4Instruction_SetAppendix {
    __kind: 'SetAppendix'
    value: V4Instruction[]
}

export interface V4Instruction_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: V4Instruction[]
}

export interface V4Instruction_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface V4Instruction_SetTopic {
    __kind: 'SetTopic'
    value: Bytes
}

export interface V4Instruction_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface V4Instruction_Transact {
    __kind: 'Transact'
    originKind: V2OriginKind
    requireWeightAtMost: Weight
    call: DoubleEncoded
}

export interface V4Instruction_TransferAsset {
    __kind: 'TransferAsset'
    assets: V4Asset[]
    beneficiary: V4Location
}

export interface V4Instruction_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V4Asset[]
    dest: V4Location
    xcm: V4Instruction[]
}

export interface V4Instruction_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V4Instruction_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V4Junction
}

export interface V4Instruction_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V4Asset
    target: V4Location
}

export interface V4Instruction_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin?: (V4Location | undefined)
}

export interface V4Instruction_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface V4Instruction_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V4Asset[]
}

export interface DoubleEncoded {
    encoded: Bytes
}

export type V2OriginKind = V2OriginKind_Native | V2OriginKind_SovereignAccount | V2OriginKind_Superuser | V2OriginKind_Xcm

export interface V2OriginKind_Native {
    __kind: 'Native'
}

export interface V2OriginKind_SovereignAccount {
    __kind: 'SovereignAccount'
}

export interface V2OriginKind_Superuser {
    __kind: 'Superuser'
}

export interface V2OriginKind_Xcm {
    __kind: 'Xcm'
}

export type V4Response = V4Response_Assets | V4Response_DispatchResult | V4Response_ExecutionResult | V4Response_Null | V4Response_PalletsInfo | V4Response_Version

export interface V4Response_Assets {
    __kind: 'Assets'
    value: V4Asset[]
}

export interface V4Response_DispatchResult {
    __kind: 'DispatchResult'
    value: V3MaybeErrorCode
}

export interface V4Response_ExecutionResult {
    __kind: 'ExecutionResult'
    value?: ([number, V3Error] | undefined)
}

export interface V4Response_Null {
    __kind: 'Null'
}

export interface V4Response_PalletsInfo {
    __kind: 'PalletsInfo'
    value: V4PalletInfo[]
}

export interface V4Response_Version {
    __kind: 'Version'
    value: number
}

export interface V4PalletInfo {
    index: number
    name: BoundedVec
    moduleName: BoundedVec
    major: number
    minor: number
    patch: number
}

export type BoundedVec = Bytes

export interface V4QueryResponseInfo {
    destination: V4Location
    queryId: bigint
    maxWeight: Weight
}

export type V3MaybeErrorCode = V3MaybeErrorCode_Error | V3MaybeErrorCode_Success | V3MaybeErrorCode_TruncatedError

export interface V3MaybeErrorCode_Error {
    __kind: 'Error'
    value: Bytes
}

export interface V3MaybeErrorCode_Success {
    __kind: 'Success'
}

export interface V3MaybeErrorCode_TruncatedError {
    __kind: 'TruncatedError'
    value: Bytes
}

export type V3Error = V3Error_AssetNotFound | V3Error_BadOrigin | V3Error_Barrier | V3Error_DestinationUnsupported | V3Error_ExceedsMaxMessageSize | V3Error_ExceedsStackLimit | V3Error_ExpectationFalse | V3Error_ExportError | V3Error_FailedToDecode | V3Error_FailedToTransactAsset | V3Error_FeesNotMet | V3Error_HoldingWouldOverflow | V3Error_InvalidLocation | V3Error_LocationCannotHold | V3Error_LocationFull | V3Error_LocationNotInvertible | V3Error_LockError | V3Error_MaxWeightInvalid | V3Error_NameMismatch | V3Error_NoDeal | V3Error_NoPermission | V3Error_NotDepositable | V3Error_NotHoldingFees | V3Error_NotWithdrawable | V3Error_Overflow | V3Error_PalletNotFound | V3Error_ReanchorFailed | V3Error_TooExpensive | V3Error_Transport | V3Error_Trap | V3Error_Unanchored | V3Error_UnhandledXcmVersion | V3Error_Unimplemented | V3Error_UnknownClaim | V3Error_Unroutable | V3Error_UntrustedReserveLocation | V3Error_UntrustedTeleportLocation | V3Error_VersionIncompatible | V3Error_WeightLimitReached | V3Error_WeightNotComputable

export interface V3Error_AssetNotFound {
    __kind: 'AssetNotFound'
}

export interface V3Error_BadOrigin {
    __kind: 'BadOrigin'
}

export interface V3Error_Barrier {
    __kind: 'Barrier'
}

export interface V3Error_DestinationUnsupported {
    __kind: 'DestinationUnsupported'
}

export interface V3Error_ExceedsMaxMessageSize {
    __kind: 'ExceedsMaxMessageSize'
}

export interface V3Error_ExceedsStackLimit {
    __kind: 'ExceedsStackLimit'
}

export interface V3Error_ExpectationFalse {
    __kind: 'ExpectationFalse'
}

export interface V3Error_ExportError {
    __kind: 'ExportError'
}

export interface V3Error_FailedToDecode {
    __kind: 'FailedToDecode'
}

export interface V3Error_FailedToTransactAsset {
    __kind: 'FailedToTransactAsset'
}

export interface V3Error_FeesNotMet {
    __kind: 'FeesNotMet'
}

export interface V3Error_HoldingWouldOverflow {
    __kind: 'HoldingWouldOverflow'
}

export interface V3Error_InvalidLocation {
    __kind: 'InvalidLocation'
}

export interface V3Error_LocationCannotHold {
    __kind: 'LocationCannotHold'
}

export interface V3Error_LocationFull {
    __kind: 'LocationFull'
}

export interface V3Error_LocationNotInvertible {
    __kind: 'LocationNotInvertible'
}

export interface V3Error_LockError {
    __kind: 'LockError'
}

export interface V3Error_MaxWeightInvalid {
    __kind: 'MaxWeightInvalid'
}

export interface V3Error_NameMismatch {
    __kind: 'NameMismatch'
}

export interface V3Error_NoDeal {
    __kind: 'NoDeal'
}

export interface V3Error_NoPermission {
    __kind: 'NoPermission'
}

export interface V3Error_NotDepositable {
    __kind: 'NotDepositable'
}

export interface V3Error_NotHoldingFees {
    __kind: 'NotHoldingFees'
}

export interface V3Error_NotWithdrawable {
    __kind: 'NotWithdrawable'
}

export interface V3Error_Overflow {
    __kind: 'Overflow'
}

export interface V3Error_PalletNotFound {
    __kind: 'PalletNotFound'
}

export interface V3Error_ReanchorFailed {
    __kind: 'ReanchorFailed'
}

export interface V3Error_TooExpensive {
    __kind: 'TooExpensive'
}

export interface V3Error_Transport {
    __kind: 'Transport'
}

export interface V3Error_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V3Error_Unanchored {
    __kind: 'Unanchored'
}

export interface V3Error_UnhandledXcmVersion {
    __kind: 'UnhandledXcmVersion'
}

export interface V3Error_Unimplemented {
    __kind: 'Unimplemented'
}

export interface V3Error_UnknownClaim {
    __kind: 'UnknownClaim'
}

export interface V3Error_Unroutable {
    __kind: 'Unroutable'
}

export interface V3Error_UntrustedReserveLocation {
    __kind: 'UntrustedReserveLocation'
}

export interface V3Error_UntrustedTeleportLocation {
    __kind: 'UntrustedTeleportLocation'
}

export interface V3Error_VersionIncompatible {
    __kind: 'VersionIncompatible'
}

export interface V3Error_WeightLimitReached {
    __kind: 'WeightLimitReached'
    value: Weight
}

export interface V3Error_WeightNotComputable {
    __kind: 'WeightNotComputable'
}

export type V4AssetFilter = V4AssetFilter_Definite | V4AssetFilter_Wild

export interface V4AssetFilter_Definite {
    __kind: 'Definite'
    value: V4Asset[]
}

export interface V4AssetFilter_Wild {
    __kind: 'Wild'
    value: V4WildAsset
}

export type V4WildAsset = V4WildAsset_All | V4WildAsset_AllCounted | V4WildAsset_AllOf | V4WildAsset_AllOfCounted

export interface V4WildAsset_All {
    __kind: 'All'
}

export interface V4WildAsset_AllCounted {
    __kind: 'AllCounted'
    value: number
}

export interface V4WildAsset_AllOf {
    __kind: 'AllOf'
    id: V4AssetId
    fun: V4WildFungibility
}

export interface V4WildAsset_AllOfCounted {
    __kind: 'AllOfCounted'
    id: V4AssetId
    fun: V4WildFungibility
    count: number
}

export type V4WildFungibility = V4WildFungibility_Fungible | V4WildFungibility_NonFungible

export interface V4WildFungibility_Fungible {
    __kind: 'Fungible'
}

export interface V4WildFungibility_NonFungible {
    __kind: 'NonFungible'
}

export type V3Instruction = V3Instruction_AliasOrigin | V3Instruction_BurnAsset | V3Instruction_BuyExecution | V3Instruction_ClaimAsset | V3Instruction_ClearError | V3Instruction_ClearOrigin | V3Instruction_ClearTopic | V3Instruction_ClearTransactStatus | V3Instruction_DepositAsset | V3Instruction_DepositReserveAsset | V3Instruction_DescendOrigin | V3Instruction_ExchangeAsset | V3Instruction_ExpectAsset | V3Instruction_ExpectError | V3Instruction_ExpectOrigin | V3Instruction_ExpectPallet | V3Instruction_ExpectTransactStatus | V3Instruction_ExportMessage | V3Instruction_HrmpChannelAccepted | V3Instruction_HrmpChannelClosing | V3Instruction_HrmpNewChannelOpenRequest | V3Instruction_InitiateReserveWithdraw | V3Instruction_InitiateTeleport | V3Instruction_LockAsset | V3Instruction_NoteUnlockable | V3Instruction_QueryPallet | V3Instruction_QueryResponse | V3Instruction_ReceiveTeleportedAsset | V3Instruction_RefundSurplus | V3Instruction_ReportError | V3Instruction_ReportHolding | V3Instruction_ReportTransactStatus | V3Instruction_RequestUnlock | V3Instruction_ReserveAssetDeposited | V3Instruction_SetAppendix | V3Instruction_SetErrorHandler | V3Instruction_SetFeesMode | V3Instruction_SetTopic | V3Instruction_SubscribeVersion | V3Instruction_Transact | V3Instruction_TransferAsset | V3Instruction_TransferReserveAsset | V3Instruction_Trap | V3Instruction_UniversalOrigin | V3Instruction_UnlockAsset | V3Instruction_UnpaidExecution | V3Instruction_UnsubscribeVersion | V3Instruction_WithdrawAsset

export interface V3Instruction_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V3MultiLocation
}

export interface V3Instruction_BurnAsset {
    __kind: 'BurnAsset'
    value: V3MultiAsset[]
}

export interface V3Instruction_BuyExecution {
    __kind: 'BuyExecution'
    fees: V3MultiAsset
    weightLimit: V3WeightLimit
}

export interface V3Instruction_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V3MultiAsset[]
    ticket: V3MultiLocation
}

export interface V3Instruction_ClearError {
    __kind: 'ClearError'
}

export interface V3Instruction_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface V3Instruction_ClearTopic {
    __kind: 'ClearTopic'
}

export interface V3Instruction_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface V3Instruction_DepositAsset {
    __kind: 'DepositAsset'
    assets: V3MultiAssetFilter
    beneficiary: V3MultiLocation
}

export interface V3Instruction_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface V3Instruction_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V3Junctions
}

export interface V3Instruction_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V3MultiAssetFilter
    want: V3MultiAsset[]
    maximal: boolean
}

export interface V3Instruction_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V3MultiAsset[]
}

export interface V3Instruction_ExpectError {
    __kind: 'ExpectError'
    value?: ([number, V3Error] | undefined)
}

export interface V3Instruction_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value?: (V3MultiLocation | undefined)
}

export interface V3Instruction_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Bytes
    moduleName: Bytes
    crateMajor: number
    minCrateMinor: number
}

export interface V3Instruction_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface V3Instruction_ExportMessage {
    __kind: 'ExportMessage'
    network: V3NetworkId
    destination: V3Junctions
    xcm: V3Instruction[]
}

export interface V3Instruction_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface V3Instruction_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface V3Instruction_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface V3Instruction_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V3MultiAssetFilter
    reserve: V3MultiLocation
    xcm: V3Instruction[]
}

export interface V3Instruction_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface V3Instruction_LockAsset {
    __kind: 'LockAsset'
    asset: V3MultiAsset
    unlocker: V3MultiLocation
}

export interface V3Instruction_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V3MultiAsset
    owner: V3MultiLocation
}

export interface V3Instruction_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Bytes
    responseInfo: V3QueryResponseInfo
}

export interface V3Instruction_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V3Response
    maxWeight: Weight
    querier?: (V3MultiLocation | undefined)
}

export interface V3Instruction_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V3MultiAsset[]
}

export interface V3Instruction_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface V3Instruction_ReportError {
    __kind: 'ReportError'
    value: V3QueryResponseInfo
}

export interface V3Instruction_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V3QueryResponseInfo
    assets: V3MultiAssetFilter
}

export interface V3Instruction_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V3QueryResponseInfo
}

export interface V3Instruction_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V3MultiAsset
    locker: V3MultiLocation
}

export interface V3Instruction_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V3MultiAsset[]
}

export interface V3Instruction_SetAppendix {
    __kind: 'SetAppendix'
    value: V3Instruction[]
}

export interface V3Instruction_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: V3Instruction[]
}

export interface V3Instruction_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface V3Instruction_SetTopic {
    __kind: 'SetTopic'
    value: Bytes
}

export interface V3Instruction_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface V3Instruction_Transact {
    __kind: 'Transact'
    originKind: V2OriginKind
    requireWeightAtMost: Weight
    call: DoubleEncoded
}

export interface V3Instruction_TransferAsset {
    __kind: 'TransferAsset'
    assets: V3MultiAsset[]
    beneficiary: V3MultiLocation
}

export interface V3Instruction_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V3MultiAsset[]
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface V3Instruction_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V3Instruction_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V3Junction
}

export interface V3Instruction_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V3MultiAsset
    target: V3MultiLocation
}

export interface V3Instruction_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin?: (V3MultiLocation | undefined)
}

export interface V3Instruction_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface V3Instruction_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V3MultiAsset[]
}

export type V3Response = V3Response_Assets | V3Response_DispatchResult | V3Response_ExecutionResult | V3Response_Null | V3Response_PalletsInfo | V3Response_Version

export interface V3Response_Assets {
    __kind: 'Assets'
    value: V3MultiAsset[]
}

export interface V3Response_DispatchResult {
    __kind: 'DispatchResult'
    value: V3MaybeErrorCode
}

export interface V3Response_ExecutionResult {
    __kind: 'ExecutionResult'
    value?: ([number, V3Error] | undefined)
}

export interface V3Response_Null {
    __kind: 'Null'
}

export interface V3Response_PalletsInfo {
    __kind: 'PalletsInfo'
    value: V3PalletInfo[]
}

export interface V3Response_Version {
    __kind: 'Version'
    value: number
}

export interface V3PalletInfo {
    index: number
    name: Bytes
    moduleName: Bytes
    major: number
    minor: number
    patch: number
}

export interface V3QueryResponseInfo {
    destination: V3MultiLocation
    queryId: bigint
    maxWeight: Weight
}

export type V3MultiAssetFilter = V3MultiAssetFilter_Definite | V3MultiAssetFilter_Wild

export interface V3MultiAssetFilter_Definite {
    __kind: 'Definite'
    value: V3MultiAsset[]
}

export interface V3MultiAssetFilter_Wild {
    __kind: 'Wild'
    value: V3WildMultiAsset
}

export type V3WildMultiAsset = V3WildMultiAsset_All | V3WildMultiAsset_AllCounted | V3WildMultiAsset_AllOf | V3WildMultiAsset_AllOfCounted

export interface V3WildMultiAsset_All {
    __kind: 'All'
}

export interface V3WildMultiAsset_AllCounted {
    __kind: 'AllCounted'
    value: number
}

export interface V3WildMultiAsset_AllOf {
    __kind: 'AllOf'
    id: V3AssetId
    fun: V3WildFungibility
}

export interface V3WildMultiAsset_AllOfCounted {
    __kind: 'AllOfCounted'
    id: V3AssetId
    fun: V3WildFungibility
    count: number
}

export type V3WildFungibility = V3WildFungibility_Fungible | V3WildFungibility_NonFungible

export interface V3WildFungibility_Fungible {
    __kind: 'Fungible'
}

export interface V3WildFungibility_NonFungible {
    __kind: 'NonFungible'
}

export type V2Instruction = V2Instruction_BuyExecution | V2Instruction_ClaimAsset | V2Instruction_ClearError | V2Instruction_ClearOrigin | V2Instruction_DepositAsset | V2Instruction_DepositReserveAsset | V2Instruction_DescendOrigin | V2Instruction_ExchangeAsset | V2Instruction_HrmpChannelAccepted | V2Instruction_HrmpChannelClosing | V2Instruction_HrmpNewChannelOpenRequest | V2Instruction_InitiateReserveWithdraw | V2Instruction_InitiateTeleport | V2Instruction_QueryHolding | V2Instruction_QueryResponse | V2Instruction_ReceiveTeleportedAsset | V2Instruction_RefundSurplus | V2Instruction_ReportError | V2Instruction_ReserveAssetDeposited | V2Instruction_SetAppendix | V2Instruction_SetErrorHandler | V2Instruction_SubscribeVersion | V2Instruction_Transact | V2Instruction_TransferAsset | V2Instruction_TransferReserveAsset | V2Instruction_Trap | V2Instruction_UnsubscribeVersion | V2Instruction_WithdrawAsset

export interface V2Instruction_BuyExecution {
    __kind: 'BuyExecution'
    fees: V2MultiAsset
    weightLimit: V2WeightLimit
}

export interface V2Instruction_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V2MultiAsset[]
    ticket: V2MultiLocation
}

export interface V2Instruction_ClearError {
    __kind: 'ClearError'
}

export interface V2Instruction_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface V2Instruction_DepositAsset {
    __kind: 'DepositAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    beneficiary: V2MultiLocation
}

export interface V2Instruction_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V2Junctions
}

export interface V2Instruction_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V2MultiAssetFilter
    receive: V2MultiAsset[]
}

export interface V2Instruction_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface V2Instruction_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface V2Instruction_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface V2Instruction_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V2MultiAssetFilter
    reserve: V2MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V2MultiAssetFilter
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V2MultiLocation
    assets: V2MultiAssetFilter
    maxResponseWeight: bigint
}

export interface V2Instruction_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface V2Instruction_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V2MultiAsset[]
}

export interface V2Instruction_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface V2Instruction_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V2MultiLocation
    maxResponseWeight: bigint
}

export interface V2Instruction_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V2MultiAsset[]
}

export interface V2Instruction_SetAppendix {
    __kind: 'SetAppendix'
    value: V2Instruction[]
}

export interface V2Instruction_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: V2Instruction[]
}

export interface V2Instruction_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface V2Instruction_Transact {
    __kind: 'Transact'
    originType: V2OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface V2Instruction_TransferAsset {
    __kind: 'TransferAsset'
    assets: V2MultiAsset[]
    beneficiary: V2MultiLocation
}

export interface V2Instruction_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V2MultiAsset[]
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V2Instruction_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface V2Instruction_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V2MultiAsset[]
}

export type V2Response = V2Response_Assets | V2Response_ExecutionResult | V2Response_Null | V2Response_Version

export interface V2Response_Assets {
    __kind: 'Assets'
    value: V2MultiAsset[]
}

export interface V2Response_ExecutionResult {
    __kind: 'ExecutionResult'
    value?: ([number, V2Error] | undefined)
}

export interface V2Response_Null {
    __kind: 'Null'
}

export interface V2Response_Version {
    __kind: 'Version'
    value: number
}

export type V2Error = V2Error_AssetNotFound | V2Error_BadOrigin | V2Error_Barrier | V2Error_DestinationUnsupported | V2Error_ExceedsMaxMessageSize | V2Error_FailedToDecode | V2Error_FailedToTransactAsset | V2Error_InvalidLocation | V2Error_LocationCannotHold | V2Error_MaxWeightInvalid | V2Error_MultiLocationFull | V2Error_MultiLocationNotInvertible | V2Error_NotHoldingFees | V2Error_NotWithdrawable | V2Error_Overflow | V2Error_TooExpensive | V2Error_Transport | V2Error_Trap | V2Error_UnhandledXcmVersion | V2Error_Unimplemented | V2Error_UnknownClaim | V2Error_Unroutable | V2Error_UntrustedReserveLocation | V2Error_UntrustedTeleportLocation | V2Error_WeightLimitReached | V2Error_WeightNotComputable

export interface V2Error_AssetNotFound {
    __kind: 'AssetNotFound'
}

export interface V2Error_BadOrigin {
    __kind: 'BadOrigin'
}

export interface V2Error_Barrier {
    __kind: 'Barrier'
}

export interface V2Error_DestinationUnsupported {
    __kind: 'DestinationUnsupported'
}

export interface V2Error_ExceedsMaxMessageSize {
    __kind: 'ExceedsMaxMessageSize'
}

export interface V2Error_FailedToDecode {
    __kind: 'FailedToDecode'
}

export interface V2Error_FailedToTransactAsset {
    __kind: 'FailedToTransactAsset'
}

export interface V2Error_InvalidLocation {
    __kind: 'InvalidLocation'
}

export interface V2Error_LocationCannotHold {
    __kind: 'LocationCannotHold'
}

export interface V2Error_MaxWeightInvalid {
    __kind: 'MaxWeightInvalid'
}

export interface V2Error_MultiLocationFull {
    __kind: 'MultiLocationFull'
}

export interface V2Error_MultiLocationNotInvertible {
    __kind: 'MultiLocationNotInvertible'
}

export interface V2Error_NotHoldingFees {
    __kind: 'NotHoldingFees'
}

export interface V2Error_NotWithdrawable {
    __kind: 'NotWithdrawable'
}

export interface V2Error_Overflow {
    __kind: 'Overflow'
}

export interface V2Error_TooExpensive {
    __kind: 'TooExpensive'
}

export interface V2Error_Transport {
    __kind: 'Transport'
}

export interface V2Error_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V2Error_UnhandledXcmVersion {
    __kind: 'UnhandledXcmVersion'
}

export interface V2Error_Unimplemented {
    __kind: 'Unimplemented'
}

export interface V2Error_UnknownClaim {
    __kind: 'UnknownClaim'
}

export interface V2Error_Unroutable {
    __kind: 'Unroutable'
}

export interface V2Error_UntrustedReserveLocation {
    __kind: 'UntrustedReserveLocation'
}

export interface V2Error_UntrustedTeleportLocation {
    __kind: 'UntrustedTeleportLocation'
}

export interface V2Error_WeightLimitReached {
    __kind: 'WeightLimitReached'
    value: bigint
}

export interface V2Error_WeightNotComputable {
    __kind: 'WeightNotComputable'
}

export type V2MultiAssetFilter = V2MultiAssetFilter_Definite | V2MultiAssetFilter_Wild

export interface V2MultiAssetFilter_Definite {
    __kind: 'Definite'
    value: V2MultiAsset[]
}

export interface V2MultiAssetFilter_Wild {
    __kind: 'Wild'
    value: V2WildMultiAsset
}

export type V2WildMultiAsset = V2WildMultiAsset_All | V2WildMultiAsset_AllOf

export interface V2WildMultiAsset_All {
    __kind: 'All'
}

export interface V2WildMultiAsset_AllOf {
    __kind: 'AllOf'
    id: V2AssetId
    fun: V2WildFungibility
}

export type V2WildFungibility = V2WildFungibility_Fungible | V2WildFungibility_NonFungible

export interface V2WildFungibility_Fungible {
    __kind: 'Fungible'
}

export interface V2WildFungibility_NonFungible {
    __kind: 'NonFungible'
}

export type V2WeightLimit = V2WeightLimit_Limited | V2WeightLimit_Unlimited

export interface V2WeightLimit_Limited {
    __kind: 'Limited'
    value: bigint
}

export interface V2WeightLimit_Unlimited {
    __kind: 'Unlimited'
}

export type Type_414 = Type_414_V2 | Type_414_V3 | Type_414_V4

export interface Type_414_V2 {
    __kind: 'V2'
    value: Type_417[]
}

export interface Type_414_V3 {
    __kind: 'V3'
    value: Type_421[]
}

export interface Type_414_V4 {
    __kind: 'V4'
    value: Type_424[]
}

export type Type_424 = Type_424_AliasOrigin | Type_424_BurnAsset | Type_424_BuyExecution | Type_424_ClaimAsset | Type_424_ClearError | Type_424_ClearOrigin | Type_424_ClearTopic | Type_424_ClearTransactStatus | Type_424_DepositAsset | Type_424_DepositReserveAsset | Type_424_DescendOrigin | Type_424_ExchangeAsset | Type_424_ExpectAsset | Type_424_ExpectError | Type_424_ExpectOrigin | Type_424_ExpectPallet | Type_424_ExpectTransactStatus | Type_424_ExportMessage | Type_424_HrmpChannelAccepted | Type_424_HrmpChannelClosing | Type_424_HrmpNewChannelOpenRequest | Type_424_InitiateReserveWithdraw | Type_424_InitiateTeleport | Type_424_LockAsset | Type_424_NoteUnlockable | Type_424_QueryPallet | Type_424_QueryResponse | Type_424_ReceiveTeleportedAsset | Type_424_RefundSurplus | Type_424_ReportError | Type_424_ReportHolding | Type_424_ReportTransactStatus | Type_424_RequestUnlock | Type_424_ReserveAssetDeposited | Type_424_SetAppendix | Type_424_SetErrorHandler | Type_424_SetFeesMode | Type_424_SetTopic | Type_424_SubscribeVersion | Type_424_Transact | Type_424_TransferAsset | Type_424_TransferReserveAsset | Type_424_Trap | Type_424_UniversalOrigin | Type_424_UnlockAsset | Type_424_UnpaidExecution | Type_424_UnsubscribeVersion | Type_424_WithdrawAsset

export interface Type_424_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V4Location
}

export interface Type_424_BurnAsset {
    __kind: 'BurnAsset'
    value: V4Asset[]
}

export interface Type_424_BuyExecution {
    __kind: 'BuyExecution'
    fees: V4Asset
    weightLimit: V3WeightLimit
}

export interface Type_424_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V4Asset[]
    ticket: V4Location
}

export interface Type_424_ClearError {
    __kind: 'ClearError'
}

export interface Type_424_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_424_ClearTopic {
    __kind: 'ClearTopic'
}

export interface Type_424_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface Type_424_DepositAsset {
    __kind: 'DepositAsset'
    assets: V4AssetFilter
    beneficiary: V4Location
}

export interface Type_424_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V4AssetFilter
    dest: V4Location
    xcm: V4Instruction[]
}

export interface Type_424_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V4Junctions
}

export interface Type_424_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V4AssetFilter
    want: V4Asset[]
    maximal: boolean
}

export interface Type_424_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V4Asset[]
}

export interface Type_424_ExpectError {
    __kind: 'ExpectError'
    value?: ([number, V3Error] | undefined)
}

export interface Type_424_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value?: (V4Location | undefined)
}

export interface Type_424_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Bytes
    moduleName: Bytes
    crateMajor: number
    minCrateMinor: number
}

export interface Type_424_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface Type_424_ExportMessage {
    __kind: 'ExportMessage'
    network: V4NetworkId
    destination: V4Junctions
    xcm: V4Instruction[]
}

export interface Type_424_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_424_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_424_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_424_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V4AssetFilter
    reserve: V4Location
    xcm: V4Instruction[]
}

export interface Type_424_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V4AssetFilter
    dest: V4Location
    xcm: V4Instruction[]
}

export interface Type_424_LockAsset {
    __kind: 'LockAsset'
    asset: V4Asset
    unlocker: V4Location
}

export interface Type_424_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V4Asset
    owner: V4Location
}

export interface Type_424_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Bytes
    responseInfo: V4QueryResponseInfo
}

export interface Type_424_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V4Response
    maxWeight: Weight
    querier?: (V4Location | undefined)
}

export interface Type_424_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V4Asset[]
}

export interface Type_424_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_424_ReportError {
    __kind: 'ReportError'
    value: V4QueryResponseInfo
}

export interface Type_424_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V4QueryResponseInfo
    assets: V4AssetFilter
}

export interface Type_424_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V4QueryResponseInfo
}

export interface Type_424_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V4Asset
    locker: V4Location
}

export interface Type_424_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V4Asset[]
}

export interface Type_424_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_424[]
}

export interface Type_424_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_424[]
}

export interface Type_424_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface Type_424_SetTopic {
    __kind: 'SetTopic'
    value: Bytes
}

export interface Type_424_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface Type_424_Transact {
    __kind: 'Transact'
    originKind: V2OriginKind
    requireWeightAtMost: Weight
    call: Type_418
}

export interface Type_424_TransferAsset {
    __kind: 'TransferAsset'
    assets: V4Asset[]
    beneficiary: V4Location
}

export interface Type_424_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V4Asset[]
    dest: V4Location
    xcm: V4Instruction[]
}

export interface Type_424_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_424_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V4Junction
}

export interface Type_424_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V4Asset
    target: V4Location
}

export interface Type_424_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin?: (V4Location | undefined)
}

export interface Type_424_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_424_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V4Asset[]
}

export interface Type_418 {
    encoded: Bytes
}

export type Type_421 = Type_421_AliasOrigin | Type_421_BurnAsset | Type_421_BuyExecution | Type_421_ClaimAsset | Type_421_ClearError | Type_421_ClearOrigin | Type_421_ClearTopic | Type_421_ClearTransactStatus | Type_421_DepositAsset | Type_421_DepositReserveAsset | Type_421_DescendOrigin | Type_421_ExchangeAsset | Type_421_ExpectAsset | Type_421_ExpectError | Type_421_ExpectOrigin | Type_421_ExpectPallet | Type_421_ExpectTransactStatus | Type_421_ExportMessage | Type_421_HrmpChannelAccepted | Type_421_HrmpChannelClosing | Type_421_HrmpNewChannelOpenRequest | Type_421_InitiateReserveWithdraw | Type_421_InitiateTeleport | Type_421_LockAsset | Type_421_NoteUnlockable | Type_421_QueryPallet | Type_421_QueryResponse | Type_421_ReceiveTeleportedAsset | Type_421_RefundSurplus | Type_421_ReportError | Type_421_ReportHolding | Type_421_ReportTransactStatus | Type_421_RequestUnlock | Type_421_ReserveAssetDeposited | Type_421_SetAppendix | Type_421_SetErrorHandler | Type_421_SetFeesMode | Type_421_SetTopic | Type_421_SubscribeVersion | Type_421_Transact | Type_421_TransferAsset | Type_421_TransferReserveAsset | Type_421_Trap | Type_421_UniversalOrigin | Type_421_UnlockAsset | Type_421_UnpaidExecution | Type_421_UnsubscribeVersion | Type_421_WithdrawAsset

export interface Type_421_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V3MultiLocation
}

export interface Type_421_BurnAsset {
    __kind: 'BurnAsset'
    value: V3MultiAsset[]
}

export interface Type_421_BuyExecution {
    __kind: 'BuyExecution'
    fees: V3MultiAsset
    weightLimit: V3WeightLimit
}

export interface Type_421_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V3MultiAsset[]
    ticket: V3MultiLocation
}

export interface Type_421_ClearError {
    __kind: 'ClearError'
}

export interface Type_421_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_421_ClearTopic {
    __kind: 'ClearTopic'
}

export interface Type_421_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface Type_421_DepositAsset {
    __kind: 'DepositAsset'
    assets: V3MultiAssetFilter
    beneficiary: V3MultiLocation
}

export interface Type_421_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_421_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V3Junctions
}

export interface Type_421_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V3MultiAssetFilter
    want: V3MultiAsset[]
    maximal: boolean
}

export interface Type_421_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V3MultiAsset[]
}

export interface Type_421_ExpectError {
    __kind: 'ExpectError'
    value?: ([number, V3Error] | undefined)
}

export interface Type_421_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value?: (V3MultiLocation | undefined)
}

export interface Type_421_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Bytes
    moduleName: Bytes
    crateMajor: number
    minCrateMinor: number
}

export interface Type_421_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface Type_421_ExportMessage {
    __kind: 'ExportMessage'
    network: V3NetworkId
    destination: V3Junctions
    xcm: V3Instruction[]
}

export interface Type_421_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_421_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_421_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_421_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V3MultiAssetFilter
    reserve: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_421_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_421_LockAsset {
    __kind: 'LockAsset'
    asset: V3MultiAsset
    unlocker: V3MultiLocation
}

export interface Type_421_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V3MultiAsset
    owner: V3MultiLocation
}

export interface Type_421_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Bytes
    responseInfo: V3QueryResponseInfo
}

export interface Type_421_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V3Response
    maxWeight: Weight
    querier?: (V3MultiLocation | undefined)
}

export interface Type_421_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V3MultiAsset[]
}

export interface Type_421_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_421_ReportError {
    __kind: 'ReportError'
    value: V3QueryResponseInfo
}

export interface Type_421_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V3QueryResponseInfo
    assets: V3MultiAssetFilter
}

export interface Type_421_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V3QueryResponseInfo
}

export interface Type_421_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V3MultiAsset
    locker: V3MultiLocation
}

export interface Type_421_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V3MultiAsset[]
}

export interface Type_421_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_421[]
}

export interface Type_421_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_421[]
}

export interface Type_421_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface Type_421_SetTopic {
    __kind: 'SetTopic'
    value: Bytes
}

export interface Type_421_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface Type_421_Transact {
    __kind: 'Transact'
    originKind: V2OriginKind
    requireWeightAtMost: Weight
    call: Type_418
}

export interface Type_421_TransferAsset {
    __kind: 'TransferAsset'
    assets: V3MultiAsset[]
    beneficiary: V3MultiLocation
}

export interface Type_421_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V3MultiAsset[]
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_421_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_421_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V3Junction
}

export interface Type_421_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V3MultiAsset
    target: V3MultiLocation
}

export interface Type_421_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin?: (V3MultiLocation | undefined)
}

export interface Type_421_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_421_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V3MultiAsset[]
}

export type Type_417 = Type_417_BuyExecution | Type_417_ClaimAsset | Type_417_ClearError | Type_417_ClearOrigin | Type_417_DepositAsset | Type_417_DepositReserveAsset | Type_417_DescendOrigin | Type_417_ExchangeAsset | Type_417_HrmpChannelAccepted | Type_417_HrmpChannelClosing | Type_417_HrmpNewChannelOpenRequest | Type_417_InitiateReserveWithdraw | Type_417_InitiateTeleport | Type_417_QueryHolding | Type_417_QueryResponse | Type_417_ReceiveTeleportedAsset | Type_417_RefundSurplus | Type_417_ReportError | Type_417_ReserveAssetDeposited | Type_417_SetAppendix | Type_417_SetErrorHandler | Type_417_SubscribeVersion | Type_417_Transact | Type_417_TransferAsset | Type_417_TransferReserveAsset | Type_417_Trap | Type_417_UnsubscribeVersion | Type_417_WithdrawAsset

export interface Type_417_BuyExecution {
    __kind: 'BuyExecution'
    fees: V2MultiAsset
    weightLimit: V2WeightLimit
}

export interface Type_417_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V2MultiAsset[]
    ticket: V2MultiLocation
}

export interface Type_417_ClearError {
    __kind: 'ClearError'
}

export interface Type_417_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_417_DepositAsset {
    __kind: 'DepositAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    beneficiary: V2MultiLocation
}

export interface Type_417_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_417_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V2Junctions
}

export interface Type_417_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V2MultiAssetFilter
    receive: V2MultiAsset[]
}

export interface Type_417_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_417_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_417_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_417_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V2MultiAssetFilter
    reserve: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_417_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V2MultiAssetFilter
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_417_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V2MultiLocation
    assets: V2MultiAssetFilter
    maxResponseWeight: bigint
}

export interface Type_417_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface Type_417_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V2MultiAsset[]
}

export interface Type_417_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_417_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V2MultiLocation
    maxResponseWeight: bigint
}

export interface Type_417_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V2MultiAsset[]
}

export interface Type_417_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_417[]
}

export interface Type_417_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_417[]
}

export interface Type_417_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface Type_417_Transact {
    __kind: 'Transact'
    originType: V2OriginKind
    requireWeightAtMost: bigint
    call: Type_418
}

export interface Type_417_TransferAsset {
    __kind: 'TransferAsset'
    assets: V2MultiAsset[]
    beneficiary: V2MultiLocation
}

export interface Type_417_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V2MultiAsset[]
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_417_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_417_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_417_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V2MultiAsset[]
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParachainSystemCall = ParachainSystemCall_authorize_upgrade | ParachainSystemCall_enact_authorized_upgrade | ParachainSystemCall_set_validation_data | ParachainSystemCall_sudo_send_upward_message

/**
 * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
 * later.
 * 
 * The `check_version` parameter sets a boolean flag for whether or not the runtime's spec
 * version and name should be verified on upgrade. Since the authorization only has a hash,
 * it cannot actually perform the verification.
 * 
 * This call requires Root origin.
 */
export interface ParachainSystemCall_authorize_upgrade {
    __kind: 'authorize_upgrade'
    codeHash: H256
    checkVersion: boolean
}

/**
 * Provide the preimage (runtime binary) `code` for an upgrade that has been authorized.
 * 
 * If the authorization required a version check, this call will ensure the spec name
 * remains unchanged and that the spec version has increased.
 * 
 * Note that this function will not apply the new `code`, but only attempt to schedule the
 * upgrade with the Relay Chain.
 * 
 * All origins are allowed.
 */
export interface ParachainSystemCall_enact_authorized_upgrade {
    __kind: 'enact_authorized_upgrade'
    code: Bytes
}

/**
 * Set the current validation data.
 * 
 * This should be invoked exactly once per block. It will panic at the finalization
 * phase if the call was not invoked.
 * 
 * The dispatch origin for this call must be `Inherent`
 * 
 * As a side effect, this function upgrades the current validation function
 * if the appropriate time has come.
 */
export interface ParachainSystemCall_set_validation_data {
    __kind: 'set_validation_data'
    data: ParachainInherentData
}

export interface ParachainSystemCall_sudo_send_upward_message {
    __kind: 'sudo_send_upward_message'
    message: Bytes
}

export interface ParachainInherentData {
    validationData: V6PersistedValidationData
    relayChainState: StorageProof
    downwardMessages: InboundDownwardMessage[]
    horizontalMessages: [Id, InboundHrmpMessage[]][]
}

export interface InboundHrmpMessage {
    sentAt: number
    data: Bytes
}

export interface InboundDownwardMessage {
    sentAt: number
    msg: Bytes
}

export interface StorageProof {
    trieNodes: Bytes[]
}

export interface V6PersistedValidationData {
    parentHead: HeadData
    relayParentNumber: number
    relayParentStorageRoot: H256
    maxPovSize: number
}

export type HeadData = Bytes

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParachainInfoCall = never

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type OrmlXcmCall = OrmlXcmCall_send_as_sovereign

/**
 * Send an XCM message as parachain sovereign.
 */
export interface OrmlXcmCall_send_as_sovereign {
    __kind: 'send_as_sovereign'
    dest: VersionedLocation
    message: VersionedXcm
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type MultisigCall = MultisigCall_approve_as_multi | MultisigCall_as_multi | MultisigCall_as_multi_threshold_1 | MultisigCall_cancel_as_multi

/**
 * Register approval for a dispatch to be made from a deterministic composite account if
 * approved by a total of `threshold - 1` of `other_signatories`.
 * 
 * Payment: `DepositBase` will be reserved if this is the first approval, plus
 * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 * is cancelled.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `threshold`: The total number of approvals for this dispatch before it is executed.
 * - `other_signatories`: The accounts (other than the sender) who can approve this
 * dispatch. May not be empty.
 * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 * not the first approval, then it must be `Some`, with the timepoint (block number and
 * transaction index) of the first approval transaction.
 * - `call_hash`: The hash of the call to be executed.
 * 
 * NOTE: If this is the final approval, you will want to use `as_multi` instead.
 * 
 * ## Complexity
 * - `O(S)`.
 * - Up to one balance-reserve or unreserve operation.
 * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 * - One encode & hash, both of complexity `O(S)`.
 * - Up to one binary search and insert (`O(logS + S)`).
 * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 * - One event.
 * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
 *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
 */
export interface MultisigCall_approve_as_multi {
    __kind: 'approve_as_multi'
    threshold: number
    otherSignatories: AccountId32[]
    maybeTimepoint?: (Timepoint | undefined)
    callHash: Bytes
    maxWeight: Weight
}

/**
 * Register approval for a dispatch to be made from a deterministic composite account if
 * approved by a total of `threshold - 1` of `other_signatories`.
 * 
 * If there are enough, then dispatch the call.
 * 
 * Payment: `DepositBase` will be reserved if this is the first approval, plus
 * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 * is cancelled.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `threshold`: The total number of approvals for this dispatch before it is executed.
 * - `other_signatories`: The accounts (other than the sender) who can approve this
 * dispatch. May not be empty.
 * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 * not the first approval, then it must be `Some`, with the timepoint (block number and
 * transaction index) of the first approval transaction.
 * - `call`: The call to be executed.
 * 
 * NOTE: Unless this is the final approval, you will generally want to use
 * `approve_as_multi` instead, since it only requires a hash of the call.
 * 
 * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
 * on success, result is `Ok` and the result from the interior call, if it was executed,
 * may be found in the deposited `MultisigExecuted` event.
 * 
 * ## Complexity
 * - `O(S + Z + Call)`.
 * - Up to one balance-reserve or unreserve operation.
 * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
 * - One encode & hash, both of complexity `O(S)`.
 * - Up to one binary search and insert (`O(logS + S)`).
 * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 * - One event.
 * - The weight of the `call`.
 * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
 *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
 */
export interface MultisigCall_as_multi {
    __kind: 'as_multi'
    threshold: number
    otherSignatories: AccountId32[]
    maybeTimepoint?: (Timepoint | undefined)
    call: Call
    maxWeight: Weight
}

/**
 * Immediately dispatch a multi-signature call using a single approval from the caller.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `other_signatories`: The accounts (other than the sender) who are part of the
 * multi-signature, but do not participate in the approval process.
 * - `call`: The call to be executed.
 * 
 * Result is equivalent to the dispatched result.
 * 
 * ## Complexity
 * O(Z + C) where Z is the length of the call and C its execution weight.
 */
export interface MultisigCall_as_multi_threshold_1 {
    __kind: 'as_multi_threshold_1'
    otherSignatories: AccountId32[]
    call: Call
}

/**
 * Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
 * for this operation will be unreserved on success.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `threshold`: The total number of approvals for this dispatch before it is executed.
 * - `other_signatories`: The accounts (other than the sender) who can approve this
 * dispatch. May not be empty.
 * - `timepoint`: The timepoint (block number and transaction index) of the first approval
 * transaction for this dispatch.
 * - `call_hash`: The hash of the call to be executed.
 * 
 * ## Complexity
 * - `O(S)`.
 * - Up to one balance-reserve or unreserve operation.
 * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 * - One encode & hash, both of complexity `O(S)`.
 * - One event.
 * - I/O: 1 read `O(S)`, one remove.
 * - Storage: removes one item.
 */
export interface MultisigCall_cancel_as_multi {
    __kind: 'cancel_as_multi'
    threshold: number
    otherSignatories: AccountId32[]
    timepoint: Timepoint
    callHash: Bytes
}

export interface Timepoint {
    height: number
    index: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type MultiTokensCall = MultiTokensCall_accept_collection_transfer | MultiTokensCall_approve_collection | MultiTokensCall_approve_token | MultiTokensCall_batch_mint | MultiTokensCall_batch_set_attribute | MultiTokensCall_batch_transfer | MultiTokensCall_burn | MultiTokensCall_cancel_collection_transfer | MultiTokensCall_claim_collections | MultiTokensCall_claim_tokens | MultiTokensCall_create_collection | MultiTokensCall_destroy_collection | MultiTokensCall_finish_claim_tokens | MultiTokensCall_force_approve_collection | MultiTokensCall_force_burn | MultiTokensCall_force_create_collection | MultiTokensCall_force_create_ethereum_collection | MultiTokensCall_force_freeze | MultiTokensCall_force_mint | MultiTokensCall_force_mutate_collection | MultiTokensCall_force_set_attribute | MultiTokensCall_force_set_collection | MultiTokensCall_force_set_collection_account | MultiTokensCall_force_set_ethereum_account | MultiTokensCall_force_set_ethereum_collection_id | MultiTokensCall_force_set_ethereum_unmintable_token_ids | MultiTokensCall_force_set_next_collection_id | MultiTokensCall_force_set_token | MultiTokensCall_force_set_token_account | MultiTokensCall_force_set_unmintable_token_ids | MultiTokensCall_force_transfer | MultiTokensCall_freeze | MultiTokensCall_infuse | MultiTokensCall_mint | MultiTokensCall_mutate_collection | MultiTokensCall_mutate_token | MultiTokensCall_remove_all_attributes | MultiTokensCall_remove_attribute | MultiTokensCall_set_attribute | MultiTokensCall_thaw | MultiTokensCall_transfer | MultiTokensCall_unapprove_collection | MultiTokensCall_unapprove_token | MultiTokensCall_update_account_deposit

/**
 * Accepts a pending collection transfer. Requires calling [`Self::mutate_collection`]
 * first. Only callable by the new owner.
 */
export interface MultiTokensCall_accept_collection_transfer {
    __kind: 'accept_collection_transfer'
    collectionId: bigint
}

/**
 * Allow `operator` to manage all of `origin`'s tokens belonging to `collection_id`.
 * If an `expiration` is provided, the approval will end when it expires.
 * 
 * # Errors
 * 
 * - [`Error::CannotApproveSelf`] if `origin == operator`
 * - [`Error::AlreadyExpired`] if `expiration` is earlier than now
 * - [`Error::CollectionAccountNotFound`] if the collection account does not exist
 * - [`Error::MaxApprovalsExceeded`] if approval count has exceeded the maximum
 */
export interface MultiTokensCall_approve_collection {
    __kind: 'approve_collection'
    collectionId: bigint
    operator: AccountId32
    expiration?: (number | undefined)
}

/**
 * Approve `operator` to transfer up to `amount` of `caller`'s balance for `token_id` of
 * `collection_id`. An `expiration` can be provided.
 * 
 * For security reasons, `current_amount` must match the amount of the previous approval,
 * or `0` if there's none.
 * 
 * # Errors
 * - [`Error::CannotApproveSelf`] if `origin == operator`
 * - [`Error::CollectionAlreadyApproved`] if `collection_id` is already approved
 * - [`Error::AlreadyExpired`] if `expiration` is earlier than now
 * - [`Error::TokenAccountNotFound`] if the token account does not exist
 * - [`Error::MaxApprovalsExceeded`] if approval count has exceeded the maximum
 * - [`Error::WrongCurrentApprovedAmount`] if `current_amount` does not match the current
 *   approval amount
 */
export interface MultiTokensCall_approve_token {
    __kind: 'approve_token'
    collectionId: bigint
    tokenId: bigint
    operator: AccountId32
    amount: bigint
    expiration?: (number | undefined)
    currentAmount: bigint
}

/**
 * Collection owner mints tokens of `collection_id` to `recipients` consisting of an
 * [`AccountId`](frame_system::Config::AccountId) and [`MintParams`]. A single mint failure
 * will fail all of them in the batch.
 * 
 * Batch minting is slightly less expensive than performing the same number of mint calls
 * sequentially.
 * 
 * # Errors
 * - [`Error::AmountZero`] if `amount == 0`.
 * - [`Error::CollectionNotFound`] if `collection` does **not** exist.
 * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
 * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
 * - [`Error::MaxTokenCountExceeded`] if the mint policy max_token_count is exceeded
 * - [`Error::DepositReserveFailed`] if the issuer does not have sufficient balance for
 *   token deposit
 */
export interface MultiTokensCall_batch_mint {
    __kind: 'batch_mint'
    collectionId: bigint
    recipients: Type_463[]
}

/**
 * Collection owner sets `attributes` to `collection_id`
 * 
 * If `token_id` is [`None`], the attribute is added to the collection. If it is [`Some`],
 * the attribute is added to the token.
 * 
 * # Errors
 * 
 * - [`Error::InvalidAttributeKey`] if `key.len() == 0`
 * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
 * - [`Error::TokenNotFound`] if `token_id` is `Some` and does not exist.
 * - [`Error::NoPermission`] if `source` account is not the owner of the collection.
 * - [`Error::DepositReserveFailed`] if unable to reserve the deposit for the attribute
 *   storage.
 */
export interface MultiTokensCall_batch_set_attribute {
    __kind: 'batch_set_attribute'
    collectionId: bigint
    tokenId?: (bigint | undefined)
    attributes: AttributeKeyValuePair[]
    depositor?: (MultiAddress | undefined)
}

/**
 * Transfers the specific amount of tokens of `collection` to `recipients` from `origin`
 * account. A single failure will fail all transfers.
 * 
 * Performs multiple transfers in a single call. Can optionally continue if any calls fail,
 * depending on the `continueOnFailure` parameter.
 * 
 * # Errors
 * 
 * - [`Error::AmountZero`] if `amount == 0`.
 * - [`Error::BalanceLow`] if `source` does not own enough amount of `collection`.
 */
export interface MultiTokensCall_batch_transfer {
    __kind: 'batch_transfer'
    collectionId: bigint
    recipients: Recipient[]
}

/**
 * Reduces the balance of `owner` by `amount` of `token_id` from `collection_id`.
 * It also updates the total supply of `collection_id`.
 * 
 * # Errors
 * - [`Error::CollectionNotFound`] if `collection` does not exist.
 * - [`Error::BalanceLow`] if `owner` account does not has enough amount of any token in
 *   `tokens` of `collection`.
 * - [`Error::DepositUnreserveFailed`] if caller does not have enough reserved balance to
 *   unreserve
 * - [`Error::DestroyForbiddenByAttributeCount`] if removing token from storage but the
 *   attribute count is greater than zero
 */
export interface MultiTokensCall_burn {
    __kind: 'burn'
    collectionId: bigint
    params: DefaultBurnParams
}

/**
 * Cancels a pending collection transfer. Requires calling [`Self::mutate_collection`]
 * first. Only callable by the new owner or the current collection owner.
 */
export interface MultiTokensCall_cancel_collection_transfer {
    __kind: 'cancel_collection_transfer'
    collectionId: bigint
}

/**
 * Transfers ownership of collections to `destination` if the signature and
 * `collection_count` matches.
 * 
 * The dispatch origin for this call must be _None_.
 * 
 * Unsigned Validation:
 * A call to claim is deemed valid if the signature provided matches
 * the expected signed message of:
 * 
 * > Ethereum Signed Message:
 * > (configured prefix string)(address)
 * 
 * and `address` matches the `destination` account.
 * 
 * This will always execute with weight of [`Config::MaxClaimableCollectionsPerAccount`]
 * and it will reimburse weight for collections under that number.
 * 
 * ### Parameters:
 * - `destination`: The account that will receive ownership of the collections
 * - `ethereum_signature`: The signature of an ethereum signed message matching the format
 *   described above.
 * - `ethereum_address`: The Ethereum address from which the message is signed.
 * - `collection_count`: The number of collections that will be claimed. It can also be
 *   higher than the actual number, but if it's lower it will fail.
 */
export interface MultiTokensCall_claim_collections {
    __kind: 'claim_collections'
    destination: AccountId32
    ethereumSignature: Signature
    ethereumAddress: H160
    collectionCount: number
}

/**
 * Sends [`Event::ClaimTokensInitiated`] event if validation of the params succeeds.
 * 
 * The dispatch origin for this call must be _None_.
 * 
 * Unsigned Validation:
 * A call to claim is deemed valid if the signature provided matches
 * the expected signed message of:
 * 
 * > Ethereum Signed Message:
 * > (configured prefix string)(address)
 * 
 * and `address` matches the `destination` account.
 * 
 * ### Parameters:
 * - `destination`: The account that will receive token balances
 * - `ethereum_signature`: The signature of an ethereum signed message matching the format
 *   described above.
 * - `ethereum_address` : The Ethereum address from which the message is signed.
 */
export interface MultiTokensCall_claim_tokens {
    __kind: 'claim_tokens'
    destination: AccountId32
    ethereumSignature: Signature
    ethereumAddress: H160
}

/**
 * Creates a new [`Collection`](ep_multi_tokens::Collection) from `descriptor`
 * 
 * See [`CollectionDescriptor`](ep_multi_tokens::DefaultCollectionDescriptor) and
 * [`CollectionPolicyDescriptor`](ep_multi_tokens::DefaultCollectionPolicyDescriptor)
 * for more info about specific parameters. The [Mint
 * Policy](ep_multi_tokens::DefaultMintPolicyDescriptor) has the most parameters.
 * 
 * **Minting Policy**
 * 
 * - Max token count (optional)
 * - Max token supply (optional)
 * - Force Single Mint
 *   - If Yes, each token minted in the collection MUST be an NFT with a cap of 1.
 * 
 * **Royalty (optional)**
 * 
 *   - Beneficiary address
 *   - The percentage of marketplace sale royalty that will be sent to the beneficiary.
 * 
 * **Explicit Royalty Currencies (optional)**
 * 
 *   Optionally provide a list of tokens (must be currencies).
 *   - If no currencies are provided here, then ALL currencies are allowed for royalties.
 *   - If one or more currencies are provided here, they will be whitelisted for use as a
 *     royalty currency and ONLY this list of currencies will be allowed for royalties.
 * 
 * # Errors
 * 
 * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
 */
export interface MultiTokensCall_create_collection {
    __kind: 'create_collection'
    descriptor: DefaultCollectionDescriptor
}

/**
 * Destroys [`Collection`](ep_multi_tokens::Collection) with `id`. `origin` must be the
 * owner of the [`Collection`](ep_multi_tokens::Collection).
 * 
 * # Errors
 * 
 * - [`Error::NoPermission`] if `origin` is not the owner of the collection.
 * - [`Error::CollectionNotFound`] if `Collection` with `id` does not exist.
 * - [`Error::DestroyForbiddenByCollectionEvent`] if another pallet is blocking the
 *   collection's destruction
 * - [`Error::DestroyForbiddenByRemainingTokens`] if collection still has tokens when
 *   destroying
 * - [`Error::DestroyForbiddenByAttributeCount`] if collection still has attributes when
 *   destroying
 * current number of collection attributes.
 */
export interface MultiTokensCall_destroy_collection {
    __kind: 'destroy_collection'
    collectionId: bigint
}

/**
 * Sends an event that signifies claiming the tokens was completed. Only callable by
 * [`Config::EthereumMigrationOrigin`].
 */
export interface MultiTokensCall_finish_claim_tokens {
    __kind: 'finish_claim_tokens'
    destination: AccountId32
    ethereumAddress: H160
}

/**
 * Same as [`approve_collection`](Self::approve_collection), but it is callable by
 * [`Config::ForceOrigin`].
 */
export interface MultiTokensCall_force_approve_collection {
    __kind: 'force_approve_collection'
    caller: MultiAddress
    collectionId: bigint
    operator: AccountId32
    expiration?: (number | undefined)
}

/**
 * Same as [`burn`](Self::burn), but it is only callable by
 * [`Config::ForceOrigin`]. Executes the burn by `caller`.
 */
export interface MultiTokensCall_force_burn {
    __kind: 'force_burn'
    caller: MultiAddress
    collectionId: bigint
    params: DefaultBurnParams
}

/**
 * Creates a new collection from `descriptor` at `collection_id`, origin must be root
 * 
 * # Errors
 * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
 * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
 */
export interface MultiTokensCall_force_create_collection {
    __kind: 'force_create_collection'
    owner: AccountId32
    collectionId: bigint
    descriptor: DefaultCollectionDescriptor
}

/**
 * Creates a new collection from `descriptor` at `collection_id`, origin must be
 * [`Config::EthereumMigrationOrigin`]. It differs from `force_create_collection`
 * since it writes to `NativeCollectionIds` and `ClaimableCollectionIds`.
 * 
 * # Params
 * - `owner` - the account that will own the new collection
 * - `claimer` - the ethereum address that will be able to claim the collection
 * - `ethereum_collection_id` - the collection id on ethereum
 * 
 * # Errors
 * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
 * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
 */
export interface MultiTokensCall_force_create_ethereum_collection {
    __kind: 'force_create_ethereum_collection'
    owner: AccountId32
    claimer: H160
    ethereumCollectionId: bigint
    descriptor: DefaultCollectionDescriptor
}

/**
 * Same as [`freeze`](Self::freeze), but it is callable by [`Config::ForceOrigin`]
 */
export interface MultiTokensCall_force_freeze {
    __kind: 'force_freeze'
    info: Freeze
}

/**
 * Same as [`mint`](Self::mint), but it is callable by
 * [`Config::EthereumMigrationOrigin`]. If `caller` is None, it will use the collection
 * owner. If `depositor` is `Some`, they will pay the deposit for minting.
 */
export interface MultiTokensCall_force_mint {
    __kind: 'force_mint'
    caller?: (MultiAddress | undefined)
    recipient: MultiAddress
    collectionId: bigint
    params: FlexibleMintParams
    depositor?: (MultiAddress | undefined)
}

/**
 * Exactly as [`mutate_collection`](Self::mutate_collection), except the origin must be
 * root and the `caller` account should be specified.
 * 
 * # Errors
 * 
 * Same as [`mutate_collection`](Self::mutate_collection)
 */
export interface MultiTokensCall_force_mutate_collection {
    __kind: 'force_mutate_collection'
    collectionId: bigint
    mutation: DefaultCollectionMutation
}

/**
 * Set the Tokens storage to the given `value`, origin must be root
 */
export interface MultiTokensCall_force_set_attribute {
    __kind: 'force_set_attribute'
    collectionId: bigint
    tokenId?: (bigint | undefined)
    key: Bytes
    value?: (Attribute | undefined)
}

/**
 * Set the Collections storage to the given `value`, origin must be root
 */
export interface MultiTokensCall_force_set_collection {
    __kind: 'force_set_collection'
    collectionId: bigint
    value?: (Collection | undefined)
}

/**
 * Set the CollectionAccounts storage to the given `value`, origin must be root
 */
export interface MultiTokensCall_force_set_collection_account {
    __kind: 'force_set_collection_account'
    collectionId: bigint
    accountId: MultiAddress
    value?: (CollectionAccount | undefined)
}

/**
 * Sets [`ClaimableCollectionIds`] to `value`. Only callable by [`Config::ForceOrigin`].
 */
export interface MultiTokensCall_force_set_ethereum_account {
    __kind: 'force_set_ethereum_account'
    address: H160
    value?: (bigint[] | undefined)
}

/**
 * Sets [`NativeCollectionIds`] to `native_collection_id`. Only callable by
 * [`Config::ForceOrigin`].
 */
export interface MultiTokensCall_force_set_ethereum_collection_id {
    __kind: 'force_set_ethereum_collection_id'
    ethereumCollectionId: bigint
    nativeCollectionId?: (bigint | undefined)
}

/**
 * Sets [`UnmintableTokenIds`] using ethereum_collection_id, the function will fail if the
 * ethereum_collection_id is invalid
 */
export interface MultiTokensCall_force_set_ethereum_unmintable_token_ids {
    __kind: 'force_set_ethereum_unmintable_token_ids'
    ethereumCollectionId: bigint
    baseTokenId: bigint
    tokenIndex: bigint
}

/**
 * Sets [`NextCollectionId`] to `value`. Only callable by [`Config::ForceOrigin`].
 */
export interface MultiTokensCall_force_set_next_collection_id {
    __kind: 'force_set_next_collection_id'
    value: bigint
}

/**
 * Set the Tokens storage to the given `value`, origin must be root
 */
export interface MultiTokensCall_force_set_token {
    __kind: 'force_set_token'
    collectionId: bigint
    tokenId: bigint
    value?: (Token | undefined)
}

/**
 * Set the TokenAccounts storage to the given `value`, origin must be root
 */
export interface MultiTokensCall_force_set_token_account {
    __kind: 'force_set_token_account'
    collectionId: bigint
    tokenId: bigint
    accountId: MultiAddress
    value?: (TokenAccount | undefined)
}

/**
 * Sets [`UnmintableTokenIds`] storage. Only callable by
 * [`Config::ForceOrigin`].
 */
export interface MultiTokensCall_force_set_unmintable_token_ids {
    __kind: 'force_set_unmintable_token_ids'
    collectionId: bigint
    baseTokenId: bigint
    tokenIndex: bigint
}

/**
 * Exactly as [`transfer`](Self::transfer), except the origin must be root and the source
 * account should be specified.
 * 
 * # Errors
 * 
 * Same as [`transfer`](Self::transfer)
 */
export interface MultiTokensCall_force_transfer {
    __kind: 'force_transfer'
    source: MultiAddress
    destination: MultiAddress
    collectionId: bigint
    params: DefaultTransferParams
}

/**
 * Freeze collection, token or account
 */
export interface MultiTokensCall_freeze {
    __kind: 'freeze'
    info: Freeze
}

/**
 * Infuses ENJ into the token. The actual amount reserved is amount * supply
 * It is permissionless if the anyone_can_infuse is true
 * 
 * See [Infusion](crate#infusions)
 * 
 * The function calculates the total amount to be reserved by multiplying the infusion
 * amount by the token's supply.
 * 
 * Note: If the caller is not the collection owner, the infusion amount is transferred from
 * the caller to the owner. The amount is then reserved in the owner's account.
 */
export interface MultiTokensCall_infuse {
    __kind: 'infuse'
    collectionId: bigint
    tokenId: bigint
    amount: bigint
}

/**
 * `origin` mints to `recipient` for `collection_id` with `params` using the pallet's
 * [`MintPolicy`](traits::CollectionPolicy::Mint).
 * 
 * Tokens are minted using [`MintParams`], and it may only be done by the collection's
 * owner. There are two types of mint operations:
 * 
 * **Create**
 * 
 * This must be called the first time a token is being created. Any token id can be chosen
 * when creating a token. They do not have to be sequential.
 * 
 * You can specify additional parameters that can apply constraints to the token or give it
 * a royalty. Some of these values can be changed later using the
 * [`mutateToken`](Self::mutate_token) extrinsic.
 * 
 * **Mint**
 * 
 * After a token is created, you can mint additional balance using this variant.
 * 
 * # Errors
 * 
 * - [`Error::AmountZero`] if `amount == 0`.
 * - [`Error::CollectionNotFound`] if `Collection` does not exist.
 * - [`Error::TokenNotFound`] if `Token` does not exist.
 * - [`Error::TokenAlreadyExists`] if attempting to create a token that already exists
 * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
 * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
 * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
 * - [`Error::DepositReserveFailed`] if the issuer does not have sufficient balance for
 *   token deposit
 * - [`Error::ConflictingLocation`] if the token is foreign and the location is already
 *   mapped to another asset in `AssetIdsByLocation`
 */
export interface MultiTokensCall_mint {
    __kind: 'mint'
    recipient: MultiAddress
    collectionId: bigint
    params: DefaultMintParams
}

/**
 * Modify [`Collection`](ep_multi_tokens::Collection) with `id` by applying `mutation`. See
 * ['CollectionMutation'] for more info.
 * 
 * A new owner of the collection can be assigned. (optional)
 * Explicit Royalty Currencies can be set for the entire collection (see the Explicit
 * Royalty Currencies section for a detailed description)
 * 
 * # Errors
 * 
 * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
 * - [`Error::NoPermission`] if `origin` is not the owner of `collection`.
 */
export interface MultiTokensCall_mutate_collection {
    __kind: 'mutate_collection'
    collectionId: bigint
    mutation: DefaultCollectionMutation
}

/**
 * Modify [`Token`](ep_multi_tokens::Token) with `token_id`  from
 * [`Collection`](ep_multi_tokens::Collection) with `collection_id` by applying `mutation`
 * 
 * The collection creator/owner can mutate the settings of a token.
 * See [DefaultTokenMutation](ep_multi_tokens::DefaultTokenMutation) for specific fields
 * and descriptions.
 * 
 * Note that `behavior` is a nested option of type
 * [TokenMarketBehavior](ep_multi_tokens::TokenMarketBehavior). This can either be set to
 * `None`, a `Currency`, or a royalty.
 * 
 * All fields are `Optional`, so only set the specific fields you want to change to `Some`.
 * 
 * # Errors
 * 
 * - [`Error::CurrencyIncompatibleWithCollectionRoyalty`] if token has already been
 *   assigned a royalty
 * - [`Error::NoPermission`] if not the collection owner
 * - [`Error::TokenNotFound`] if Token does not exist
 * - [`Error::ConflictingLocation`] if the new location is already occupied
 */
export interface MultiTokensCall_mutate_token {
    __kind: 'mutate_token'
    collectionId: bigint
    tokenId: bigint
    mutation: DefaultTokenMutation
}

/**
 * Removes all attributes from the given `collection_id` or `token_id`.
 * 
 * # Errors
 * - `InvalidAttributeCount` if `attribute_count` doesn't match the number of attributes
 * - [`Error::CollectionNotFound`] if Collection with `collection_id` does not exist.
 * - [`Error::TokenNotFound`] if Token with `token_id` does not exist.
 * - [`Error::NoPermission`] if `origin` account is not the owner of the Collection or
 *   Token
 * - other errors from `remove_attribute`
 */
export interface MultiTokensCall_remove_all_attributes {
    __kind: 'remove_all_attributes'
    collectionId: bigint
    tokenId?: (bigint | undefined)
    attributeCount: number
}

/**
 * Removes the `key` attribute from the given `collection_id` or `token_id`.
 * Only callable by the collection owner.
 * 
 * # Errors
 * - [`Error::InvalidAttributeKey`] if `key.len() == 0`
 * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
 * - [`Error::TokenNotFound`] if `token_id` is `Some` and does not exist.
 * - [`Error::NoPermission`] if `caller` is not the owner of the collection.
 * - `Underflow` if an attribute counter underflows
 */
export interface MultiTokensCall_remove_attribute {
    __kind: 'remove_attribute'
    collectionId: bigint
    tokenId?: (bigint | undefined)
    key: Bytes
}

/**
 * Sets the attribute `key` to `value` for `collection_id`.
 * If `token_id` is [`None`], the attribute is added to the collection. If it is [`Some`],
 * the attribute is added to the token.
 * Only callable by the collection's owner.
 * 
 * # Errors
 * - [`Error::InvalidAttributeKey`] if `key.len() == 0`
 * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
 * - [`Error::TokenNotFound`] if `token_id` is `Some` and does not exist.
 * - [`Error::NoPermission`] if `source` account is not the owner of the collection.
 * - [`Error::DepositReserveFailed`] if unable to reserve the deposit for the attribute
 *   storage.
 */
export interface MultiTokensCall_set_attribute {
    __kind: 'set_attribute'
    collectionId: bigint
    tokenId?: (bigint | undefined)
    key: Bytes
    value: Bytes
    depositor?: (MultiAddress | undefined)
}

/**
 * Thaw collection, token or account
 */
export interface MultiTokensCall_thaw {
    __kind: 'thaw'
    info: Freeze
}

/**
 * `operator` transfers to `recipient` for `collection_id` with `params`
 * 
 * Can accept [`DefaultTransferParams`](ep_multi_tokens::DefaultTransferParams):
 * 
 * - The `Simple` transfer is a regular transfer
 * - The `Operator` transfer is the same as `transfer_from` and requires approval. See
 *   [Operator](crate#operator) in the pallet's documentation for more info.
 * 
 * # Errors
 * 
 * - [`Error::AmountZero`] if `amount == 0`.
 * - [`Error::BalanceLow`] if `source` does not own enough amount of `collection`.
 */
export interface MultiTokensCall_transfer {
    __kind: 'transfer'
    recipient: MultiAddress
    collectionId: bigint
    params: DefaultTransferParams
}

/**
 * Disallows `operator` from managing all of `origin`'s tokens belonging to `collection`.
 * It will only undo a previous `approveCollection` call. It does not affect individual
 * token approvals.
 * 
 * # Errors
 * 
 * - [`Error::CollectionAccountNotFound`] if the collection account cannot be found
 */
export interface MultiTokensCall_unapprove_collection {
    __kind: 'unapprove_collection'
    collectionId: bigint
    operator: AccountId32
}

/**
 * Disallows `operator` from transfering previously approved `origin`'s `token_id` of
 * `collection_id`. Completely removes any previous approval.
 * 
 * # Errors
 * 
 * - [`Error::TokenAccountNotFound`] if the token account does not exist
 */
export interface MultiTokensCall_unapprove_token {
    __kind: 'unapprove_token'
    collectionId: bigint
    tokenId: bigint
    operator: AccountId32
}

/**
 * Can add or remove deposit for the number of accounts the token can accommodate. It is
 * permissionless if increased. Only the collection owner can decrease.
 * The locked amount is stored in the collection owner's account.
 */
export interface MultiTokensCall_update_account_deposit {
    __kind: 'update_account_deposit'
    collectionId: bigint
    tokenId: bigint
    deltaAccountCount: number
}

export interface DefaultTokenMutation {
    behavior: Type_164
    listingForbidden: Type_167
    anyoneCanInfuse: Type_167
    name: Type_168
}

export type Type_168 = Type_168_NoMutation | Type_168_SomeMutation

export interface Type_168_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_168_SomeMutation {
    __kind: 'SomeMutation'
    value: BoundedString
}

export type BoundedString = Bytes

export type Type_167 = Type_167_NoMutation | Type_167_SomeMutation

export interface Type_167_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_167_SomeMutation {
    __kind: 'SomeMutation'
    value: boolean
}

export type Type_164 = Type_164_NoMutation | Type_164_SomeMutation

export interface Type_164_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_164_SomeMutation {
    __kind: 'SomeMutation'
    value?: (TokenMarketBehavior | undefined)
}

export type TokenMarketBehavior = TokenMarketBehavior_HasRoyalty | TokenMarketBehavior_IsCurrency

export interface TokenMarketBehavior_HasRoyalty {
    __kind: 'HasRoyalty'
    value: DefaultRoyalty
}

export interface TokenMarketBehavior_IsCurrency {
    __kind: 'IsCurrency'
}

export interface DefaultRoyalty {
    beneficiary: AccountId32
    percentage: number
}

export type DefaultMintParams = DefaultMintParams_CreateToken | DefaultMintParams_Mint

export interface DefaultMintParams_CreateToken {
    __kind: 'CreateToken'
    tokenId: bigint
    initialSupply: bigint
    accountDepositCount: number
    cap?: (TokenCap | undefined)
    behavior?: (TokenMarketBehavior | undefined)
    listingForbidden: boolean
    freezeState?: (FreezeState | undefined)
    attributes: AttributeKeyValuePair[]
    infusion: bigint
    anyoneCanInfuse: boolean
    metadata: CreateTokenMetadata
    privilegedParams?: (PrivilegedCreateTokenParams | undefined)
}

export interface DefaultMintParams_Mint {
    __kind: 'Mint'
    tokenId: bigint
    amount: bigint
    depositor?: (AccountId32 | undefined)
}

export interface PrivilegedCreateTokenParams {
    requiresDeposit: boolean
    foreignParams?: (ForeignTokenCreationParams | undefined)
    depositor?: (AccountId32 | undefined)
}

export interface ForeignTokenCreationParams {
    location?: (V4Location | undefined)
    unitsPerSecond?: (bigint | undefined)
}

export interface CreateTokenMetadata {
    name: BoundedString
    symbol: Bytes
    decimalCount: number
}

export type FreezeState = FreezeState_Never | FreezeState_Permanent | FreezeState_Temporary

export interface FreezeState_Never {
    __kind: 'Never'
}

export interface FreezeState_Permanent {
    __kind: 'Permanent'
}

export interface FreezeState_Temporary {
    __kind: 'Temporary'
}

export type TokenCap = TokenCap_CollapsingSupply | TokenCap_Supply

export interface TokenCap_CollapsingSupply {
    __kind: 'CollapsingSupply'
    value: bigint
}

export interface TokenCap_Supply {
    __kind: 'Supply'
    value: bigint
}

export type DefaultTransferParams = DefaultTransferParams_Operator | DefaultTransferParams_Simple

export interface DefaultTransferParams_Operator {
    __kind: 'Operator'
    tokenId: bigint
    source: AccountId32
    amount: bigint
    depositor?: (AccountId32 | undefined)
}

export interface DefaultTransferParams_Simple {
    __kind: 'Simple'
    tokenId: bigint
    amount: bigint
    depositor?: (AccountId32 | undefined)
}

export interface TokenAccount {
    balance: bigint
    reservedBalance: bigint
    lockedBalance: bigint
    namedReserves: [Bytes, bigint][]
    locks: [Bytes, bigint][]
    approvals: [AccountId32, Approval][]
    isFrozen: boolean
    deposit?: (Deposit | undefined)
}

export interface Deposit {
    depositor: AccountId32
    amount: bigint
}

export interface Approval {
    amount: bigint
    expiration?: (number | undefined)
}

export interface Token {
    supply: bigint
    cap?: (TokenCap | undefined)
    freezeState?: (FreezeState | undefined)
    requiresDeposit: boolean
    creationDeposit: AmbiguousDeposit
    ownerDeposit: bigint
    totalTokenAccountDeposit: bigint
    attributeCount: number
    accountCount: number
    marketBehavior?: (TokenMarketBehavior | undefined)
    listingForbidden: boolean
    metadata: DefaultTokenMetadata
    infusion: bigint
    anyoneCanInfuse: boolean
    groups: bigint[]
}

export interface DefaultTokenMetadata {
    decimalCount: number
    name: BoundedString
    symbol: Bytes
    foreign?: (DefaultForeignTokenMetadata | undefined)
}

export interface DefaultForeignTokenMetadata {
    location?: (V4Location | undefined)
    unitsPerSecond?: (bigint | undefined)
}

export interface AmbiguousDeposit {
    depositor?: (AccountId32 | undefined)
    amount: bigint
}

export interface CollectionAccount {
    isFrozen: boolean
    approvals: [AccountId32, (number | undefined)][]
    accountCount: number
}

export interface Collection {
    owner: AccountId32
    policy: DefaultCollectionPolicy
    tokenCount: bigint
    attributeCount: number
    creationDeposit: Deposit
    totalDeposit: bigint
    explicitRoyaltyCurrencies: [AssetId, null][]
    totalInfusion: bigint
}

export interface DefaultCollectionPolicy {
    mint: DefaultMintPolicy
    transfer: DefaultTransferPolicy
    market: DefaultMarketPolicy
}

export interface DefaultMarketPolicy {
    royalty?: (DefaultRoyalty | undefined)
}

export interface DefaultTransferPolicy {
    isFrozen: boolean
}

export interface DefaultMintPolicy {
    maxTokenCount?: (bigint | undefined)
    maxTokenSupply?: (bigint | undefined)
    forceCollapsingSupply: boolean
}

export interface Attribute {
    value: Bytes
    deposit: bigint
    depositor?: (AccountId32 | undefined)
}

export interface DefaultCollectionMutation {
    owner?: (AccountId32 | undefined)
    royalty: ShouldMutate
    explicitRoyaltyCurrencies?: (AssetId[] | undefined)
}

export type ShouldMutate = ShouldMutate_NoMutation | ShouldMutate_SomeMutation

export interface ShouldMutate_NoMutation {
    __kind: 'NoMutation'
}

export interface ShouldMutate_SomeMutation {
    __kind: 'SomeMutation'
    value?: (DefaultRoyalty | undefined)
}

export type FlexibleMintParams = FlexibleMintParams_CreateOrMint | FlexibleMintParams_Mint

export interface FlexibleMintParams_CreateOrMint {
    __kind: 'CreateOrMint'
    value: CreateTokenParams
}

export interface FlexibleMintParams_Mint {
    __kind: 'Mint'
    tokenId: bigint
    amount: bigint
    depositor?: (AccountId32 | undefined)
}

export interface CreateTokenParams {
    tokenId: bigint
    amount: bigint
    accountDepositCount: number
    cap?: (TokenCap | undefined)
    behavior?: (TokenMarketBehavior | undefined)
    listingForbidden: boolean
    freezeState?: (FreezeState | undefined)
    attributes: AttributeKeyValuePair[]
    infusion: bigint
    anyoneCanInfuse: boolean
    metadata: CreateTokenMetadata
    privilegedParams?: (PrivilegedCreateTokenParams | undefined)
}

export interface Freeze {
    collectionId: bigint
    freezeType: FreezeType
}

export type FreezeType = FreezeType_Collection | FreezeType_CollectionAccount | FreezeType_Token | FreezeType_TokenAccount

export interface FreezeType_Collection {
    __kind: 'Collection'
}

export interface FreezeType_CollectionAccount {
    __kind: 'CollectionAccount'
    value: AccountId32
}

export interface FreezeType_Token {
    __kind: 'Token'
    tokenId: bigint
    freezeState?: (FreezeState | undefined)
}

export interface FreezeType_TokenAccount {
    __kind: 'TokenAccount'
    tokenId: bigint
    accountId: AccountId32
}

export interface DefaultCollectionDescriptor {
    policy: DefaultCollectionPolicyDescriptor
    depositor?: (AccountId32 | undefined)
    explicitRoyaltyCurrencies: AssetId[]
    attributes: AttributeKeyValuePair[]
}

export interface DefaultCollectionPolicyDescriptor {
    mint: DefaultMintPolicyDescriptor
    market: DefaultMarketPolicyDescriptor
}

export interface DefaultMarketPolicyDescriptor {
    royalty?: (DefaultRoyalty | undefined)
}

export interface DefaultMintPolicyDescriptor {
    maxTokenCount?: (bigint | undefined)
    maxTokenSupply?: (bigint | undefined)
    forceCollapsingSupply: boolean
}

export type H160 = Bytes

export type Signature = Bytes

export interface DefaultBurnParams {
    tokenId: bigint
    amount: bigint
    removeTokenStorage: boolean
}

export interface Recipient {
    accountId: AccountId32
    params: DefaultTransferParams
}

export interface AttributeKeyValuePair {
    key: Bytes
    value: Bytes
}

export interface Type_463 {
    accountId: AccountId32
    params: DefaultMintParams
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type MigrationsCall = MigrationsCall_clear_historic | MigrationsCall_force_onboard_mbms | MigrationsCall_force_set_active_cursor | MigrationsCall_force_set_cursor

/**
 * Clears the `Historic` set.
 * 
 * `map_cursor` must be set to the last value that was returned by the
 * `HistoricCleared` event. The first time `None` can be used. `limit` must be chosen in a
 * way that will result in a sensible weight.
 */
export interface MigrationsCall_clear_historic {
    __kind: 'clear_historic'
    selector: HistoricCleanupSelector
}

/**
 * Forces the onboarding of the migrations.
 * 
 * This process happens automatically on a runtime upgrade. It is in place as an emergency
 * measurement. The cursor needs to be `None` for this to succeed.
 */
export interface MigrationsCall_force_onboard_mbms {
    __kind: 'force_onboard_mbms'
}

/**
 * Allows root to set an active cursor to forcefully start/forward the migration process.
 * 
 * This is an edge-case version of [`Self::force_set_cursor`] that allows to set the
 * `started_at` value to the next block number. Otherwise this would not be possible, since
 * `force_set_cursor` takes an absolute block number. Setting `started_at` to `None`
 * indicates that the current block number plus one should be used.
 */
export interface MigrationsCall_force_set_active_cursor {
    __kind: 'force_set_active_cursor'
    index: number
    innerCursor?: (Bytes | undefined)
    startedAt?: (number | undefined)
}

/**
 * Allows root to set a cursor to forcefully start, stop or forward the migration process.
 * 
 * Should normally not be needed and is only in place as emergency measure. Note that
 * restarting the migration process in this manner will not call the
 * [`MigrationStatusHandler::started`] hook or emit an `UpgradeStarted` event.
 */
export interface MigrationsCall_force_set_cursor {
    __kind: 'force_set_cursor'
    cursor?: (MigrationCursor | undefined)
}

export type MigrationCursor = MigrationCursor_Active | MigrationCursor_Stuck

export interface MigrationCursor_Active {
    __kind: 'Active'
    value: ActiveCursor
}

export interface MigrationCursor_Stuck {
    __kind: 'Stuck'
}

export interface ActiveCursor {
    index: number
    innerCursor?: (Bytes | undefined)
    startedAt: number
}

export type HistoricCleanupSelector = HistoricCleanupSelector_Specific | HistoricCleanupSelector_Wildcard

export interface HistoricCleanupSelector_Specific {
    __kind: 'Specific'
    value: Bytes[]
}

export interface HistoricCleanupSelector_Wildcard {
    __kind: 'Wildcard'
    limit?: (number | undefined)
    previousCursor?: (Bytes | undefined)
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type MessageQueueCall = MessageQueueCall_execute_overweight | MessageQueueCall_reap_page

/**
 * Execute an overweight message.
 * 
 * Temporary processing errors will be propagated whereas permanent errors are treated
 * as success condition.
 * 
 * - `origin`: Must be `Signed`.
 * - `message_origin`: The origin from which the message to be executed arrived.
 * - `page`: The page in the queue in which the message to be executed is sitting.
 * - `index`: The index into the queue of the message to be executed.
 * - `weight_limit`: The maximum amount of weight allowed to be consumed in the execution
 *   of the message.
 * 
 * Benchmark complexity considerations: O(index + weight_limit).
 */
export interface MessageQueueCall_execute_overweight {
    __kind: 'execute_overweight'
    messageOrigin: AggregateMessageOrigin
    page: number
    index: number
    weightLimit: Weight
}

/**
 * Remove a page which has no more messages remaining to be processed or is stale.
 */
export interface MessageQueueCall_reap_page {
    __kind: 'reap_page'
    messageOrigin: AggregateMessageOrigin
    pageIndex: number
}

export type AggregateMessageOrigin = AggregateMessageOrigin_Here | AggregateMessageOrigin_Parent | AggregateMessageOrigin_Sibling

export interface AggregateMessageOrigin_Here {
    __kind: 'Here'
}

export interface AggregateMessageOrigin_Parent {
    __kind: 'Parent'
}

export interface AggregateMessageOrigin_Sibling {
    __kind: 'Sibling'
    value: Id
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type MatrixXcmCall = MatrixXcmCall_force_set_minimum_weight | MatrixXcmCall_transfer_asset_to_parachain | MatrixXcmCall_transfer_asset_with_fee | MatrixXcmCall_transfer_to_parachain

/**
 * Used by governance/sudo in order to set the minimum weight for an [XcmOperation](https://s3.ap-southeast-1.amazonaws.com/docs.rust.dev.efinity.io/efinity_pallet_xcm/enum.XcmOperation.html).
 * Primarily used for chains like Statemint when transferring multiple assets as a way to determine the correct fee for the fee-payment asset. Emits the [`MinimumWeightUpdated`](https://s3.ap-southeast-1.amazonaws.com/docs.rust.dev.efinity.io/efinity_pallet_xcm/pallet/enum.Event.html#variant.MinimumWeightUpdated) event.
 */
export interface MatrixXcmCall_force_set_minimum_weight {
    __kind: 'force_set_minimum_weight'
    xcmCall: XcmOperation
    xcmWeightFeeMisc: MinimumWeightFeePair
}

/**
 * `origin` transfers `amount` of `asset` to `beneficiary` on the `parachain`
 * 
 * Unlike `transfer_to_parachain`, this extrinsic has the ability to transfer any asset on
 * Efinity to another chain. It may be used for transferring NFTs and foreign tokens. It
 * requires specifying the [Account](ep_core::Account) format in addition to other standard
 * parameters for an xcm transfer.
 * 
 * Note: `asset` needs to be registered as foreign token in destination parachain
 * 
 * - `para_id`: destination parachain
 * - `beneficiary`: account to receive `asset` in destination parachain
 * - `asset`: asset to transfer
 * - `amount`: amount of `asset` to transfer
 * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
 *   `None`
 * 
 * # Errors
 * 
 * - [`Error::InvalidAddress`]: `beneficiary` is invalid, i.e could not be converted to
 *   [`Location`]
 * - [`Error::NotTransferable`]: A corresponding Location could not be converted for the
 *   asset.
 */
export interface MatrixXcmCall_transfer_asset_to_parachain {
    __kind: 'transfer_asset_to_parachain'
    paraId: ParachainId
    beneficiary: Account
    currencyId: AssetId
    amount: bigint
    destWeight?: (bigint | undefined)
}

/**
 * `origin` transfers `asset` to `beneficiary` at `parachain` using `fee_asset` for
 * the fee. This allows the transfer of custom assets like a non-fungible which
 * cannot be used to pay fees.
 * 
 * Note: each [`Asset`] must be registered as a foreign asset at the destination
 * parachain.
 * 
 * - `asset`: asset to transfer
 * - `fee_asset`: asset to be used as fee
 * - `beneficiary`: account to receive `asset` in destination parachain
 * - `para_id`: destination parachain
 * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
 * 
 * # Errors
 * - [`Error::InvalidAddress`]: `beneficiary` is invalid, i.e could not be converted to
 *   [`Location`]
 */
export interface MatrixXcmCall_transfer_asset_with_fee {
    __kind: 'transfer_asset_with_fee'
    assetPair: CurrencyIdAmountPair
    feePair: CurrencyIdAmountPair
    paraId: ParachainId
    beneficiary: Account
    destWeight?: (bigint | undefined)
}

/**
 * `origin` transfers `amount` of ENJ to `beneficiary` on the `parachain`.
 * 
 * This extrinsic requires specifying the correct account format, see
 * [Account](ep_core::Account) in addition to other standard parameters for an xcm
 * transfer.
 * 
 * Note: ENJ needs to be registered as foreign token in destination parachain
 * 
 * - `para_id`: destination parachain
 * - `beneficiary`: account to receive ENJ in destination parachain
 * - `amount`: amount of ENJ to transfer
 * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
 *   `None`
 * 
 * # Errors
 * 
 * - [`Error::InvalidAddress`]: `beneficiary` is invalid, i.e could not be converted to
 *   [`Location`]
 */
export interface MatrixXcmCall_transfer_to_parachain {
    __kind: 'transfer_to_parachain'
    paraId: ParachainId
    beneficiary: Account
    amount: bigint
    destWeight?: (bigint | undefined)
}

export interface CurrencyIdAmountPair {
    currencyId: AssetId
    amount: bigint
}

export type Account = Account_EVM | Account_Substrate

export interface Account_EVM {
    __kind: 'EVM'
    value: H160
}

export interface Account_Substrate {
    __kind: 'Substrate'
    value: AccountId32
}

export type ParachainId = ParachainId_Acala | ParachainId_Moonbeam | ParachainId_Statemint

export interface ParachainId_Acala {
    __kind: 'Acala'
}

export interface ParachainId_Moonbeam {
    __kind: 'Moonbeam'
}

export interface ParachainId_Statemint {
    __kind: 'Statemint'
}

export interface MinimumWeightFeePair {
    minimumWeight: Weight
    fee: bigint
}

export type XcmOperation = XcmOperation_ParachainFee | XcmOperation_XTokensTransfer

export interface XcmOperation_ParachainFee {
    __kind: 'ParachainFee'
    value: V4Location
}

export interface XcmOperation_XTokensTransfer {
    __kind: 'XTokensTransfer'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type MatrixUtilityCall = MatrixUtilityCall_batch

/**
 * Dispatch a batch of calls.
 * 
 * May be called from any origin except [`None`].
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then the calls are dispatched without checking origin filter. (This
 * includes bypassing [`frame_system::Config::BaseCallFilter`]).
 * 
 * # Errors
 * 
 * - [`Error::TooManyCalls`]: If the number of calls exceeds the limit.
 */
export interface MatrixUtilityCall_batch {
    __kind: 'batch'
    calls: Call[]
    continueOnFailure: boolean
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type MarketplaceCall = MarketplaceCall_answer_counter_offer | MarketplaceCall_cancel_listing | MarketplaceCall_create_listing | MarketplaceCall_fill_listing | MarketplaceCall_finalize_auction | MarketplaceCall_force_cancel_listing | MarketplaceCall_force_create_listing | MarketplaceCall_force_place_bid | MarketplaceCall_place_bid | MarketplaceCall_place_counter_offer | MarketplaceCall_remove_expired_listing | MarketplaceCall_set_protocol_fee

/**
 * Responds to a counter offer on a listing. The caller must be the seller of the listing.
 * If the counter offer is accepted, the listing will be filled. If it's rejected, the
 * counter offer is deleted. It can also be updated with a `Counter` response. Only the
 * buyer and seller may call this extrinsic.
 * 
 * ### Parameters
 * - `listing_id` - the id of the offer that will be countered
 * - `creator` - the account that created the counter offer (the seller)
 * - `response` - whether the counter is accepted, rejected, or countered
 * - `current_price` - must match the price being countered
 */
export interface MarketplaceCall_answer_counter_offer {
    __kind: 'answer_counter_offer'
    listingId: H256
    creator: AccountId32
    response: CounterOfferResponse
    currentPrice: bigint
}

/**
 * Cancels the listing with `listing_id`. Only callable by the seller.
 * 
 * # Parameters
 * 
 * - `listing_id`: The ID of the listing to cancel
 * 
 * # Errors
 * 
 * - [`Error::ListingNotFound`] if the listing under `listing_id` does not exist
 * - [`Error::NoPermission`] if the listing seller is not the caller, `origin`
 */
export interface MarketplaceCall_cancel_listing {
    __kind: 'cancel_listing'
    listingId: H256
}

/**
 * Places a sell order. Requires `make_asset_id` or `take_asset_id` to be a currency.
 * The id for the listing is generated by hashing the encoded bytes of the listing.
 * 
 * The listing does not become active until after the `listingActiveDelay` (5 blocks) has
 * passed. If it's an auction, it starts when its `start_block` is reached.
 * 
 * A `Token` cannot be listed on the marketplace if its `listing_forbidden` field is set to
 * true.
 * 
 * # Parameters
 * 
 * - `make_asset_id`: The id of the asset being sold
 * - `take_asset_id`: The id of the asset being requested
 * - `amount`: The number of units being sold
 * - `price`: The requested price for each unit. If it's an auction, this is the minimum
 *   bid
 * - `salt`: Can be used to differentiate listings
 * - `listing_data`: This determines the type of listing
 * - `depositor`: The account that will reserve the deposit. This must be set to None and
 *   can only be set internally by a fuel tank.
 * 
 * # Errors
 * 
 * - [`Error::InvalidAuctionStart`] if the start is less than the current block +
 *   `T::ListingActiveDelay`
 * - [`Error::NoCurrency`] Neither the make or take side is considered a currency
 * - [`Error::ListingForbidden`] if make or take side tokens are not allowed to be listed
 * - [`Error::CurrencyNotAllowedAsRoyalty`] if currency cannot be used as a royalty
 * - [`Error::LowBaseCurrencyBalance`] if base currency balance is too low
 * - [`Error::LowTokenBalance`] token balance is too low for reserve
 * - [`Error::ListingAlreadyExists`] if a listing with the same ID already exists
 */
export interface MarketplaceCall_create_listing {
    __kind: 'create_listing'
    makeAssetId: AssetId
    takeAssetId: AssetId
    amount: bigint
    price: bigint
    salt: Bytes
    listingData: ListingData
    depositor?: (MultiAddress | undefined)
}

/**
 * Fills a fixed price listing. This will execute immediately.
 * # Parameters
 * 
 * - `listing_id`: The id for the listing to buy from
 * - `amount`: The number of units purchased
 * 
 * # Errors
 * 
 * - [`Error::ListingNotFound`] if the listing under `listing_id` does not exist
 * - [`Error::BuyerIsSeller`] if the buyer is the seller of the listing
 * - [`Error::ListingIsWrongType`] if the listing is not under auction
 * - [`Error::InvalidAmount`] if the amount that still needs to be filled is greater than
 *   `amount`
 * - [`Error::ListingNotActive`] if the listing has not passed the `ListingActiveDelay` yet
 * - [`Error::ReceivedValueUnderMinimum`] if the listings `take` value is under the minimum
 *   required
 * - [`Error::LowTokenBalance`] if the buyer does not have enough tokens for reserve
 */
export interface MarketplaceCall_fill_listing {
    __kind: 'fill_listing'
    listingId: H256
    amount: bigint
}

/**
 * Finalize the auction with id: `listing_id`. This will end the auction and transfer
 * funds. It fails if the auction is not over. It can be called by anyone.
 * 
 * # Parameters
 * 
 * - `listing_id`: The ID for the listing to finalize
 * 
 * # Errors
 * 
 * - [`Error::ListingNotFound`] if listing under `listing_id` does not exist
 * - [`Error::ListingIsWrongType`] if listing is not an auction
 * - [`Error::AuctionNotOver`] if the auction has not finished yet
 * - [`Error::ReceivedValueUnderMinimum`] if the take value is less than the minimum
 *   required
 */
export interface MarketplaceCall_finalize_auction {
    __kind: 'finalize_auction'
    listingId: H256
}

/**
 * Force cancel a listing. This is only callable by the [`Config::ForceOrigin`].
 */
export interface MarketplaceCall_force_cancel_listing {
    __kind: 'force_cancel_listing'
    listingId: H256
}

/**
 * Force create a listing. This is only callable by the [`Config::ForceOrigin`].
 * 
 * # Parameters
 * 
 * Mostly the same as [`Self::create_listing`], but `deposit_backer` can be included to pay
 * a deposit if `seller` does not have enough.
 * 
 * # Errors
 * 
 * Same as [`Self::create_listing`], except `BadOrigin` if the origin is not
 * [`Config::ForceOrigin`]
 */
export interface MarketplaceCall_force_create_listing {
    __kind: 'force_create_listing'
    seller: MultiAddress
    makeAssetId: AssetId
    takeAssetId: AssetId
    amount: bigint
    price: bigint
    salt: Bytes
    listingData: ListingData
    depositBacker?: (MultiAddress | undefined)
}

/**
 * Same as [create_listing](Self::place_bid), but allows specifying the `bidder` and can
 * place a bid in an inactive auction. Only callable by [`Config::ForceOrigin`]. If
 * `funds_backer` is `Some`, it will transfer balance if `bidder` does not have enough.
 */
export interface MarketplaceCall_force_place_bid {
    __kind: 'force_place_bid'
    bidder: MultiAddress
    listingId: H256
    price: bigint
    fundsBacker?: (MultiAddress | undefined)
}

/**
 * Places a bid on a listing. The listing must be an auction, and it must be currently
 * active.
 * An auction is considered active if the current block is between the start and end blocks
 * of the auction. Only the latest bid is stored on an auction. All bids must increase by
 * the `minimumBidIncreasePercentage`, and the first bid must be higher than the price set
 * when the listing was created.
 * 
 * # Parameters
 * 
 * - `listing_id`: The id for the listing to buy from
 * - `price`: The price for a single unit
 * 
 * # Errors
 * 
 * - [`Error::ListingNotFound`] if listing under `listing_id` does not exist
 * - [`Error::BuyerIsSeller`] if the bidder is the seller of the listing
 * - [`Error::InactiveAuction`] if listing operates outside of specified start and end
 *   block
 * - [`Error::InvalidPrice`] if price is less than minimum_price for a bid
 */
export interface MarketplaceCall_place_bid {
    __kind: 'place_bid'
    listingId: H256
    price: bigint
}

/**
 * Places a counter offer on a listing. The listing must be an offer. The caller must own
 * the token that the offer is requesting. The counter offer can only be updated by calling
 * [`Self::answer_counter_offer`]. Only one counter offer can be made at a time and it
 * cannot be replaced.
 * 
 * ### Parameters
 * - `listing_id` - the id of the offer that will be countered
 * - `price` - the price for the counter offer. It must be higher than the offer price.
 * - `depositor` - must be set to `None`. It is only usable internally by fuel tanks.
 */
export interface MarketplaceCall_place_counter_offer {
    __kind: 'place_counter_offer'
    listingId: H256
    price: bigint
    depositor?: (MultiAddress | undefined)
}

/**
 * Remove a listing that is expired. It only works for offers. This call is permissionless.
 */
export interface MarketplaceCall_remove_expired_listing {
    __kind: 'remove_expired_listing'
    listingId: H256
}

/**
 * Change the protocol fee to `protocol_fee`. Can only be called by `ForceOrigin`.
 * 
 * #Parameters
 * 
 * - `protocol_fee`: Percentage of fee to set
 */
export interface MarketplaceCall_set_protocol_fee {
    __kind: 'set_protocol_fee'
    protocolFee: Perbill
}

export type ListingData = ListingData_Auction | ListingData_FixedPrice | ListingData_Offer

export interface ListingData_Auction {
    __kind: 'Auction'
    value: AuctionData
}

export interface ListingData_FixedPrice {
    __kind: 'FixedPrice'
}

export interface ListingData_Offer {
    __kind: 'Offer'
    value: OfferData
}

export interface OfferData {
    expiration?: (number | undefined)
}

export interface AuctionData {
    startBlock: number
    endBlock: number
}

export type CounterOfferResponse = CounterOfferResponse_Accept | CounterOfferResponse_Counter | CounterOfferResponse_Reject

export interface CounterOfferResponse_Accept {
    __kind: 'Accept'
}

export interface CounterOfferResponse_Counter {
    __kind: 'Counter'
    value: bigint
}

export interface CounterOfferResponse_Reject {
    __kind: 'Reject'
}

/**
 * Identity pallet declaration.
 */
export type IdentityCall = IdentityCall_accept_username | IdentityCall_add_registrar | IdentityCall_add_sub | IdentityCall_add_username_authority | IdentityCall_cancel_request | IdentityCall_clear_identity | IdentityCall_kill_identity | IdentityCall_provide_judgement | IdentityCall_quit_sub | IdentityCall_remove_dangling_username | IdentityCall_remove_expired_approval | IdentityCall_remove_sub | IdentityCall_remove_username_authority | IdentityCall_rename_sub | IdentityCall_request_judgement | IdentityCall_set_account_id | IdentityCall_set_fee | IdentityCall_set_fields | IdentityCall_set_identity | IdentityCall_set_primary_username | IdentityCall_set_subs | IdentityCall_set_username_for

/**
 * Accept a given username that an `authority` granted. The call must include the full
 * username, as in `username.suffix`.
 */
export interface IdentityCall_accept_username {
    __kind: 'accept_username'
    username: Bytes
}

/**
 * Add a registrar to the system.
 * 
 * The dispatch origin for this call must be `T::RegistrarOrigin`.
 * 
 * - `account`: the account of the registrar.
 * 
 * Emits `RegistrarAdded` if successful.
 */
export interface IdentityCall_add_registrar {
    __kind: 'add_registrar'
    account: MultiAddress
}

/**
 * Add the given account to the sender's subs.
 * 
 * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 * to the sender.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * sub identity of `sub`.
 */
export interface IdentityCall_add_sub {
    __kind: 'add_sub'
    sub: MultiAddress
    data: Data
}

/**
 * Add an `AccountId` with permission to grant usernames with a given `suffix` appended.
 * 
 * The authority can grant up to `allocation` usernames. To top up their allocation, they
 * should just issue (or request via governance) a new `add_username_authority` call.
 */
export interface IdentityCall_add_username_authority {
    __kind: 'add_username_authority'
    authority: MultiAddress
    suffix: Bytes
    allocation: number
}

/**
 * Cancel a previous request.
 * 
 * Payment: A previously reserved deposit is returned on success.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a
 * registered identity.
 * 
 * - `reg_index`: The index of the registrar whose judgement is no longer requested.
 * 
 * Emits `JudgementUnrequested` if successful.
 */
export interface IdentityCall_cancel_request {
    __kind: 'cancel_request'
    regIndex: number
}

/**
 * Clear an account's identity info and all sub-accounts and return all deposits.
 * 
 * Payment: All reserved balances on the account are returned.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * identity.
 * 
 * Emits `IdentityCleared` if successful.
 */
export interface IdentityCall_clear_identity {
    __kind: 'clear_identity'
}

/**
 * Remove an account's identity and sub-account information and slash the deposits.
 * 
 * Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
 * `Slash`. Verification request deposits are not returned; they should be cancelled
 * manually using `cancel_request`.
 * 
 * The dispatch origin for this call must match `T::ForceOrigin`.
 * 
 * - `target`: the account whose identity the judgement is upon. This must be an account
 *   with a registered identity.
 * 
 * Emits `IdentityKilled` if successful.
 */
export interface IdentityCall_kill_identity {
    __kind: 'kill_identity'
    target: MultiAddress
}

/**
 * Provide a judgement for an account's identity.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `reg_index`.
 * 
 * - `reg_index`: the index of the registrar whose judgement is being made.
 * - `target`: the account whose identity the judgement is upon. This must be an account
 *   with a registered identity.
 * - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
 * - `identity`: The hash of the [`IdentityInformationProvider`] for that the judgement is
 *   provided.
 * 
 * Note: Judgements do not apply to a username.
 * 
 * Emits `JudgementGiven` if successful.
 */
export interface IdentityCall_provide_judgement {
    __kind: 'provide_judgement'
    regIndex: number
    target: MultiAddress
    judgement: Judgement
    identity: H256
}

/**
 * Remove the sender as a sub-account.
 * 
 * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 * to the sender (*not* the original depositor).
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * super-identity.
 * 
 * NOTE: This should not normally be used, but is provided in the case that the non-
 * controller of an account is maliciously registered as a sub-account.
 */
export interface IdentityCall_quit_sub {
    __kind: 'quit_sub'
}

/**
 * Remove a username that corresponds to an account with no identity. Exists when a user
 * gets a username but then calls `clear_identity`.
 */
export interface IdentityCall_remove_dangling_username {
    __kind: 'remove_dangling_username'
    username: Bytes
}

/**
 * Remove an expired username approval. The username was approved by an authority but never
 * accepted by the user and must now be beyond its expiration. The call must include the
 * full username, as in `username.suffix`.
 */
export interface IdentityCall_remove_expired_approval {
    __kind: 'remove_expired_approval'
    username: Bytes
}

/**
 * Remove the given account from the sender's subs.
 * 
 * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 * to the sender.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * sub identity of `sub`.
 */
export interface IdentityCall_remove_sub {
    __kind: 'remove_sub'
    sub: MultiAddress
}

/**
 * Remove `authority` from the username authorities.
 */
export interface IdentityCall_remove_username_authority {
    __kind: 'remove_username_authority'
    authority: MultiAddress
}

/**
 * Alter the associated name of the given sub-account.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * sub identity of `sub`.
 */
export interface IdentityCall_rename_sub {
    __kind: 'rename_sub'
    sub: MultiAddress
    data: Data
}

/**
 * Request a judgement from a registrar.
 * 
 * Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
 * given.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a
 * registered identity.
 * 
 * - `reg_index`: The index of the registrar whose judgement is requested.
 * - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
 * 
 * ```nocompile
 * Self::registrars().get(reg_index).unwrap().fee
 * ```
 * 
 * Emits `JudgementRequested` if successful.
 */
export interface IdentityCall_request_judgement {
    __kind: 'request_judgement'
    regIndex: number
    maxFee: bigint
}

/**
 * Change the account associated with a registrar.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `index`.
 * 
 * - `index`: the index of the registrar whose fee is to be set.
 * - `new`: the new account ID.
 */
export interface IdentityCall_set_account_id {
    __kind: 'set_account_id'
    index: number
    new: MultiAddress
}

/**
 * Set the fee required for a judgement to be requested from a registrar.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `index`.
 * 
 * - `index`: the index of the registrar whose fee is to be set.
 * - `fee`: the new fee.
 */
export interface IdentityCall_set_fee {
    __kind: 'set_fee'
    index: number
    fee: bigint
}

/**
 * Set the field information for a registrar.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `index`.
 * 
 * - `index`: the index of the registrar whose fee is to be set.
 * - `fields`: the fields that the registrar concerns themselves with.
 */
export interface IdentityCall_set_fields {
    __kind: 'set_fields'
    index: number
    fields: bigint
}

/**
 * Set an account's identity information and reserve the appropriate deposit.
 * 
 * If the account already has identity information, the deposit is taken as part payment
 * for the new deposit.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `info`: The identity information.
 * 
 * Emits `IdentitySet` if successful.
 */
export interface IdentityCall_set_identity {
    __kind: 'set_identity'
    info: IdentityInfo
}

/**
 * Set a given username as the primary. The username should include the suffix.
 */
export interface IdentityCall_set_primary_username {
    __kind: 'set_primary_username'
    username: Bytes
}

/**
 * Set the sub-accounts of the sender.
 * 
 * Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
 * and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * identity.
 * 
 * - `subs`: The identity's (new) sub-accounts.
 */
export interface IdentityCall_set_subs {
    __kind: 'set_subs'
    subs: [AccountId32, Data][]
}

/**
 * Set the username for `who`. Must be called by a username authority.
 * 
 * The authority must have an `allocation`. Users can either pre-sign their usernames or
 * accept them later.
 * 
 * Usernames must:
 *   - Only contain lowercase ASCII characters or digits.
 *   - When combined with the suffix of the issuing authority be _less than_ the
 *     `MaxUsernameLength`.
 */
export interface IdentityCall_set_username_for {
    __kind: 'set_username_for'
    who: MultiAddress
    username: Bytes
    signature?: (MultiSignature | undefined)
}

export type MultiSignature = MultiSignature_Ecdsa | MultiSignature_Ed25519 | MultiSignature_Sr25519

export interface MultiSignature_Ecdsa {
    __kind: 'Ecdsa'
    value: Signature
}

export interface MultiSignature_Ed25519 {
    __kind: 'Ed25519'
    value: Bytes
}

export interface MultiSignature_Sr25519 {
    __kind: 'Sr25519'
    value: Bytes
}

export interface IdentityInfo {
    additional: [Data, Data][]
    display: Data
    legal: Data
    web: Data
    riot: Data
    email: Data
    pgpFingerprint?: (Bytes | undefined)
    image: Data
    twitter: Data
}

export type Judgement = Judgement_Erroneous | Judgement_FeePaid | Judgement_KnownGood | Judgement_LowQuality | Judgement_OutOfDate | Judgement_Reasonable | Judgement_Unknown

export interface Judgement_Erroneous {
    __kind: 'Erroneous'
}

export interface Judgement_FeePaid {
    __kind: 'FeePaid'
    value: bigint
}

export interface Judgement_KnownGood {
    __kind: 'KnownGood'
}

export interface Judgement_LowQuality {
    __kind: 'LowQuality'
}

export interface Judgement_OutOfDate {
    __kind: 'OutOfDate'
}

export interface Judgement_Reasonable {
    __kind: 'Reasonable'
}

export interface Judgement_Unknown {
    __kind: 'Unknown'
}

export type Data = Data_BlakeTwo256 | Data_Keccak256 | Data_None | Data_Raw0 | Data_Raw1 | Data_Raw10 | Data_Raw11 | Data_Raw12 | Data_Raw13 | Data_Raw14 | Data_Raw15 | Data_Raw16 | Data_Raw17 | Data_Raw18 | Data_Raw19 | Data_Raw2 | Data_Raw20 | Data_Raw21 | Data_Raw22 | Data_Raw23 | Data_Raw24 | Data_Raw25 | Data_Raw26 | Data_Raw27 | Data_Raw28 | Data_Raw29 | Data_Raw3 | Data_Raw30 | Data_Raw31 | Data_Raw32 | Data_Raw4 | Data_Raw5 | Data_Raw6 | Data_Raw7 | Data_Raw8 | Data_Raw9 | Data_Sha256 | Data_ShaThree256

export interface Data_BlakeTwo256 {
    __kind: 'BlakeTwo256'
    value: Bytes
}

export interface Data_Keccak256 {
    __kind: 'Keccak256'
    value: Bytes
}

export interface Data_None {
    __kind: 'None'
}

export interface Data_Raw0 {
    __kind: 'Raw0'
    value: Bytes
}

export interface Data_Raw1 {
    __kind: 'Raw1'
    value: Bytes
}

export interface Data_Raw10 {
    __kind: 'Raw10'
    value: Bytes
}

export interface Data_Raw11 {
    __kind: 'Raw11'
    value: Bytes
}

export interface Data_Raw12 {
    __kind: 'Raw12'
    value: Bytes
}

export interface Data_Raw13 {
    __kind: 'Raw13'
    value: Bytes
}

export interface Data_Raw14 {
    __kind: 'Raw14'
    value: Bytes
}

export interface Data_Raw15 {
    __kind: 'Raw15'
    value: Bytes
}

export interface Data_Raw16 {
    __kind: 'Raw16'
    value: Bytes
}

export interface Data_Raw17 {
    __kind: 'Raw17'
    value: Bytes
}

export interface Data_Raw18 {
    __kind: 'Raw18'
    value: Bytes
}

export interface Data_Raw19 {
    __kind: 'Raw19'
    value: Bytes
}

export interface Data_Raw2 {
    __kind: 'Raw2'
    value: Bytes
}

export interface Data_Raw20 {
    __kind: 'Raw20'
    value: Bytes
}

export interface Data_Raw21 {
    __kind: 'Raw21'
    value: Bytes
}

export interface Data_Raw22 {
    __kind: 'Raw22'
    value: Bytes
}

export interface Data_Raw23 {
    __kind: 'Raw23'
    value: Bytes
}

export interface Data_Raw24 {
    __kind: 'Raw24'
    value: Bytes
}

export interface Data_Raw25 {
    __kind: 'Raw25'
    value: Bytes
}

export interface Data_Raw26 {
    __kind: 'Raw26'
    value: Bytes
}

export interface Data_Raw27 {
    __kind: 'Raw27'
    value: Bytes
}

export interface Data_Raw28 {
    __kind: 'Raw28'
    value: Bytes
}

export interface Data_Raw29 {
    __kind: 'Raw29'
    value: Bytes
}

export interface Data_Raw3 {
    __kind: 'Raw3'
    value: Bytes
}

export interface Data_Raw30 {
    __kind: 'Raw30'
    value: Bytes
}

export interface Data_Raw31 {
    __kind: 'Raw31'
    value: Bytes
}

export interface Data_Raw32 {
    __kind: 'Raw32'
    value: Bytes
}

export interface Data_Raw4 {
    __kind: 'Raw4'
    value: Bytes
}

export interface Data_Raw5 {
    __kind: 'Raw5'
    value: Bytes
}

export interface Data_Raw6 {
    __kind: 'Raw6'
    value: Bytes
}

export interface Data_Raw7 {
    __kind: 'Raw7'
    value: Bytes
}

export interface Data_Raw8 {
    __kind: 'Raw8'
    value: Bytes
}

export interface Data_Raw9 {
    __kind: 'Raw9'
    value: Bytes
}

export interface Data_Sha256 {
    __kind: 'Sha256'
    value: Bytes
}

export interface Data_ShaThree256 {
    __kind: 'ShaThree256'
    value: Bytes
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type FuelTanksCall = FuelTanksCall_add_account | FuelTanksCall_batch_add_account | FuelTanksCall_batch_remove_account | FuelTanksCall_create_fuel_tank | FuelTanksCall_destroy_fuel_tank | FuelTanksCall_dispatch | FuelTanksCall_dispatch_and_touch | FuelTanksCall_force_batch_add_account | FuelTanksCall_force_create_fuel_tank | FuelTanksCall_force_set_consumption | FuelTanksCall_insert_rule_set | FuelTanksCall_mutate_freeze_state | FuelTanksCall_mutate_fuel_tank | FuelTanksCall_remove_account | FuelTanksCall_remove_account_rule_data | FuelTanksCall_remove_rule_set

/**
 * Adds new account for `user_id` to fuel tank at `tank_id`. An account is
 * required to dispatch calls. A deposit is required, and may be paid by
 * the user or the fuel tank, depending on the settings.
 * 
 * ### Errors
 * 
 * - [`Error::FuelTankNotFound`] if fuel tank at `tank_id` does not exist
 * - [`Error::NoPermission`] if `origin` does not have permission to add an account
 * - [`Error::AccountAlreadyExists`] if account at `user_id` already exists
 */
export interface FuelTanksCall_add_account {
    __kind: 'add_account'
    tankId: MultiAddress
    userId: MultiAddress
}

/**
 * Similar to add_account but takes a list of
 * [`AccountId`](frame_system::Config::AccountId)s to insert into a fuel tank.
 * ### Errors
 * - [`Error::FuelTankNotFound`] if fuel tank at `tank_id` does not exist
 * - [`Error::NoPermission`] if `origin` does not have permission to add an account
 * - [`Error::AccountAlreadyExists`] if account at `user_id` already exists
 */
export interface FuelTanksCall_batch_add_account {
    __kind: 'batch_add_account'
    tankId: MultiAddress
    userIds: MultiAddress[]
}

/**
 * Similar to remove_account but takes a list of
 * [`AccountId`](frame_system::Config::AccountId)s to remove from a fuel tank.
 * ### Errors
 * - [`Error::FuelTankNotFound`] if fuel tank at `tank_id` does not exist
 * - [`Error::NoPermission`] if `origin` does not have permission to add an account
 * - [`Error::AccountNotFound`] if account at `user_id` does not exist
 */
export interface FuelTanksCall_batch_remove_account {
    __kind: 'batch_remove_account'
    tankId: MultiAddress
    userIds: MultiAddress[]
}

/**
 * Creates a fuel tank, given a `descriptor`.
 * 
 * Generates a discrete `AccountId` for the fuel tank based on passed in parameters, it
 * takes a storage deposit and emits `FuelTankCreated` event in the success case.
 * 
 * # Errors
 * 
 * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
 * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
 */
export interface FuelTanksCall_create_fuel_tank {
    __kind: 'create_fuel_tank'
    descriptor: FuelTankDescriptor
}

/**
 * Destroy the fuel tank by scheduling the deletion for `on_finalize` to execute
 * Only callable by owner
 * The fuel tank must be frozen
 * Can only be destroyed if all accounts are removed
 * 
 * # Errors
 * 
 * - [`Error::FuelTankNotFound`] if tank_id does not exist
 * - [`Error::NoPermission`] if caller is not owner
 * - [`Error::DestroyUnfrozenTank`] if tank is not frozen
 * - [`Error::DestroyWithExistingAccounts`] if there are still accounts on the tank
 */
export interface FuelTanksCall_destroy_fuel_tank {
    __kind: 'destroy_fuel_tank'
    tankId: MultiAddress
}

/**
 * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
 * 
 * # Errors
 * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
 * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
 * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
 *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
 * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
 */
export interface FuelTanksCall_dispatch {
    __kind: 'dispatch'
    tankId: MultiAddress
    ruleSetId: number
    call: Call
    settings?: (DispatchSettings | undefined)
}

/**
 * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
 * exist and is allowed by the fuel tank's `user_account_management` settings.
 * 
 * # Errors
 * 
 * Returns the same errors as [dispatch](Self::dispatch) and
 * [add_account](Self::add_account)
 */
export interface FuelTanksCall_dispatch_and_touch {
    __kind: 'dispatch_and_touch'
    tankId: MultiAddress
    ruleSetId: number
    call: Call
    settings?: (DispatchSettings | undefined)
}

/**
 * Sets the account storage for give tank_id and account
 */
export interface FuelTanksCall_force_batch_add_account {
    __kind: 'force_batch_add_account'
    owner: MultiAddress
    tankId: MultiAddress
    userIds: MultiAddress[]
}

/**
 * Force creates a fuel tank
 * 
 * # Errors
 * 
 * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
 */
export interface FuelTanksCall_force_create_fuel_tank {
    __kind: 'force_create_fuel_tank'
    owner: MultiAddress
    descriptor: FuelTankDescriptor
}

/**
 * Force set the fuel tank consumption
 * If `user_id` is [`Some`], it sets the consumption for that account.
 * If it is [`None`], it sets the consumption on the fuel tank directly.
 * 
 * # Errors
 * 
 * - [`Error::AccountNotFound`] if `user_id` is `Some` and account does not exist
 * - [`Error::FuelTankNotFound`] if tank_id does not exist
 * - [`Error::NoPermission`] if caller is not ForceOrigin or fuel tank owner
 * - [`Error::InvalidRuleSet`] if `rule_set_id` does not exist
 * - [`Error::MissingRequiredRule`] if `rule_set_id` does not have the required role
 */
export interface FuelTanksCall_force_set_consumption {
    __kind: 'force_set_consumption'
    tankId: MultiAddress
    userId?: (MultiAddress | undefined)
    ruleSetId: number
    consumption: Consumption
}

/**
 * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
 * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
 * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
 * the data first. If a rule is being replaced, it will be mutated with the new parameters,
 * and it will maintain any persistent data it already has.
 * 
 * This is only callable by the fuel tank's owner.
 * ### Errors
 * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
 * - [`Error::NoPermission`] if caller is not the fuel tank owner
 * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
 * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
 *   account data
 * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
 * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
 *   kind
 */
export interface FuelTanksCall_insert_rule_set {
    __kind: 'insert_rule_set'
    tankId: MultiAddress
    ruleSetId: number
    ruleSet: RuleSetDescriptor
}

/**
 * Mutate `is_frozen` state that determines if fuel tank or rule set can be used
 * 
 * # Errors
 * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
 * - [`Error::NoPermission`] if caller is not a fuel tank owner
 */
export interface FuelTanksCall_mutate_freeze_state {
    __kind: 'mutate_freeze_state'
    tankId: MultiAddress
    ruleSetId?: (number | undefined)
    isFrozen: boolean
}

/**
 * Apply `mutation` to fuel tank with `tank_id`.
 * 
 * Caller must be the owner of the fuel tank, and the tank must be frozen.
 * 
 * # Errors
 * 
 * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
 * - [`Error::NoPermission`] if `origin` is not the fuel tank owner
 * - [`Error::RequiresFrozenTankOrRuleset`] if tank is not frozen
 */
export interface FuelTanksCall_mutate_fuel_tank {
    __kind: 'mutate_fuel_tank'
    tankId: MultiAddress
    mutation: DefaultTankMutation
}

/**
 * Removes account for `user_id` from fuel tank at `tank_id`. Any deposits
 * are returned.
 * 
 * ### Errors
 * 
 * - [`Error::FuelTankNotFound`] if fuel tank at `tank_id` does not exist
 * - [`Error::NoPermission`] if `origin` does not have permission to add an account
 * - [`Error::AccountNotFound`] if account at `user_id` does not exist
 */
export interface FuelTanksCall_remove_account {
    __kind: 'remove_account'
    tankId: MultiAddress
    userId: MultiAddress
}

/**
 * Remove account rule data if it exists. Only callable by the fuel tank's owner. Requires
 * the fuel tank or the rule set to be frozen.
 * 
 * ### Errors
 * 
 * - [`Error::FuelTankNotFound`] if fuel tank for `tank_id` doesn't exist
 * - [`Error::NoPermission`] if called by non-owner
 * - [`Error::AccountNotFound`] if account does not exist for `user_id`
 * - [`Error::RuleSetNotFound`] if rule set does not exist for `rule_set_id`
 * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
 * - [`Error::RuleNotFound`] if rule does not exist for `rule_kind`
 */
export interface FuelTanksCall_remove_account_rule_data {
    __kind: 'remove_account_rule_data'
    tankId: MultiAddress
    userId: MultiAddress
    ruleSetId: number
    ruleKind: DispatchRuleKind
}

/**
 * Remove rule set for `tank_id` and `rule_set_id`. A rule that is storing data on
 * any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove the
 * data first. This is only callable by the fuel tank's owner.
 * # Errors
 * 
 * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
 * - [`Error::NoPermission`] if caller is not the fuel tank owner
 * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
 * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
 *   account data
 */
export interface FuelTanksCall_remove_rule_set {
    __kind: 'remove_rule_set'
    tankId: MultiAddress
    ruleSetId: number
}

export interface DefaultTankMutation {
    userAccountManagement: Type_241
    coveragePolicy?: (CoveragePolicy | undefined)
    accountRules?: (AccountRuleDescriptor[] | undefined)
}

export type AccountRuleDescriptor = AccountRuleDescriptor_RequireToken | AccountRuleDescriptor_WhitelistedCallers

export interface AccountRuleDescriptor_RequireToken {
    __kind: 'RequireToken'
    value: RequireTokenRule
}

export interface AccountRuleDescriptor_WhitelistedCallers {
    __kind: 'WhitelistedCallers'
    value: AccountId32[]
}

export type Type_241 = Type_241_NoMutation | Type_241_SomeMutation

export interface Type_241_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_241_SomeMutation {
    __kind: 'SomeMutation'
    value?: (UserAccountManagement | undefined)
}

export interface RuleSetDescriptor {
    rules: DispatchRuleDescriptor[]
    requireAccount: boolean
}

export type DispatchRuleDescriptor = DispatchRuleDescriptor_MaxFuelBurnPerTransaction | DispatchRuleDescriptor_MinimumInfusion | DispatchRuleDescriptor_PermittedCalls | DispatchRuleDescriptor_PermittedExtrinsics | DispatchRuleDescriptor_RequireSignature | DispatchRuleDescriptor_RequireToken | DispatchRuleDescriptor_TankFuelBudget | DispatchRuleDescriptor_UserFuelBudget | DispatchRuleDescriptor_WhitelistedCallers | DispatchRuleDescriptor_WhitelistedCollections | DispatchRuleDescriptor_WhitelistedPallets

export interface DispatchRuleDescriptor_MaxFuelBurnPerTransaction {
    __kind: 'MaxFuelBurnPerTransaction'
    value: MaxFuelBurnPerTransactionRule
}

export interface DispatchRuleDescriptor_MinimumInfusion {
    __kind: 'MinimumInfusion'
    value: MinimumInfusionRule
}

export interface DispatchRuleDescriptor_PermittedCalls {
    __kind: 'PermittedCalls'
    value: Bytes[]
}

export interface DispatchRuleDescriptor_PermittedExtrinsics {
    __kind: 'PermittedExtrinsics'
    value: Call[]
}

export interface DispatchRuleDescriptor_RequireSignature {
    __kind: 'RequireSignature'
    value: RequireSignatureRule
}

export interface DispatchRuleDescriptor_RequireToken {
    __kind: 'RequireToken'
    value: RequireTokenRule
}

export interface DispatchRuleDescriptor_TankFuelBudget {
    __kind: 'TankFuelBudget'
    value: TankFuelBudgetRuleDescriptor
}

export interface DispatchRuleDescriptor_UserFuelBudget {
    __kind: 'UserFuelBudget'
    value: UserFuelBudgetRuleDescriptor
}

export interface DispatchRuleDescriptor_WhitelistedCallers {
    __kind: 'WhitelistedCallers'
    value: AccountId32[]
}

export interface DispatchRuleDescriptor_WhitelistedCollections {
    __kind: 'WhitelistedCollections'
    value: bigint[]
}

export interface DispatchRuleDescriptor_WhitelistedPallets {
    __kind: 'WhitelistedPallets'
    value: Call[]
}

export interface UserFuelBudgetRuleDescriptor {
    amount: bigint
    resetPeriod: number
}

export interface TankFuelBudgetRuleDescriptor {
    amount: bigint
    resetPeriod: number
}

export interface DispatchSettings {
    useNoneOrigin: boolean
    paysRemainingFee: boolean
    signature?: (ExpirableSignature | undefined)
}

export interface ExpirableSignature {
    signature: Bytes
    expiryBlock: number
}

export interface FuelTankDescriptor {
    name: Bytes
    userAccountManagement?: (UserAccountManagement | undefined)
    ruleSets: [number, RuleSetDescriptor][]
    coveragePolicy: CoveragePolicy
    accountRules: AccountRuleDescriptor[]
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ExtrinsicPauseCall = ExtrinsicPauseCall_pause_extrinsic | ExtrinsicPauseCall_resume_extrinsic

/**
 * Pause execution of extrinsic(s)
 * 
 * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
 * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
 * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
 * is paused, else the entire pallet is paused.
 * 
 * # Errors
 * 
 * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
 * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
 */
export interface ExtrinsicPauseCall_pause_extrinsic {
    __kind: 'pause_extrinsic'
    call: Call
    pauseOnlyExtrinsic: boolean
}

/**
 * Resume execution of extrinsic(s)
 * 
 * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
 * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
 * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
 * is resumed, else the entire pallet is resumed.
 * 
 * # Errors
 * 
 * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
 */
export interface ExtrinsicPauseCall_resume_extrinsic {
    __kind: 'resume_extrinsic'
    call: Call
    resumeOnlyExtrinsic: boolean
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type DmpQueueCall = never

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type DemocracyCall = DemocracyCall_blacklist | DemocracyCall_cancel_proposal | DemocracyCall_cancel_referendum | DemocracyCall_clear_public_proposals | DemocracyCall_delegate | DemocracyCall_emergency_cancel | DemocracyCall_external_propose | DemocracyCall_external_propose_default | DemocracyCall_external_propose_majority | DemocracyCall_fast_track | DemocracyCall_propose | DemocracyCall_remove_other_vote | DemocracyCall_remove_vote | DemocracyCall_second | DemocracyCall_set_metadata | DemocracyCall_undelegate | DemocracyCall_unlock | DemocracyCall_veto_external | DemocracyCall_vote

/**
 * Permanently place a proposal into the blacklist. This prevents it from ever being
 * proposed again.
 * 
 * If called on a queued public or external proposal, then this will result in it being
 * removed. If the `ref_index` supplied is an active referendum with the proposal hash,
 * then it will be cancelled.
 * 
 * The dispatch origin of this call must be `BlacklistOrigin`.
 * 
 * - `proposal_hash`: The proposal hash to blacklist permanently.
 * - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
 * cancelled.
 * 
 * Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
 *   reasonable value).
 */
export interface DemocracyCall_blacklist {
    __kind: 'blacklist'
    proposalHash: H256
    maybeRefIndex?: (number | undefined)
}

/**
 * Remove a proposal.
 * 
 * The dispatch origin of this call must be `CancelProposalOrigin`.
 * 
 * - `prop_index`: The index of the proposal to cancel.
 * 
 * Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
 */
export interface DemocracyCall_cancel_proposal {
    __kind: 'cancel_proposal'
    propIndex: number
}

/**
 * Remove a referendum.
 * 
 * The dispatch origin of this call must be _Root_.
 * 
 * - `ref_index`: The index of the referendum to cancel.
 * 
 * # Weight: `O(1)`.
 */
export interface DemocracyCall_cancel_referendum {
    __kind: 'cancel_referendum'
    refIndex: number
}

/**
 * Clears all public proposals.
 * 
 * The dispatch origin of this call must be _Root_.
 * 
 * Weight: `O(1)`.
 */
export interface DemocracyCall_clear_public_proposals {
    __kind: 'clear_public_proposals'
}

/**
 * Delegate the voting power (with some given conviction) of the sending account.
 * 
 * The balance delegated is locked for as long as it's delegated, and thereafter for the
 * time appropriate for the conviction's lock period.
 * 
 * The dispatch origin of this call must be _Signed_, and the signing account must either:
 *   - be delegating already; or
 *   - have no voting activity (if there is, then it will need to be removed/consolidated
 *     through `reap_vote` or `unvote`).
 * 
 * - `to`: The account whose voting the `target` account's voting power will follow.
 * - `conviction`: The conviction that will be attached to the delegated votes. When the
 *   account is undelegated, the funds will be locked for the corresponding period.
 * - `balance`: The amount of the account's balance to be used in delegating. This must not
 *   be more than the account's current balance.
 * 
 * Emits `Delegated`.
 * 
 * Weight: `O(R)` where R is the number of referendums the voter delegating to has
 *   voted on. Weight is charged as if maximum votes.
 */
export interface DemocracyCall_delegate {
    __kind: 'delegate'
    to: MultiAddress
    conviction: Conviction
    balance: bigint
}

/**
 * Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
 * referendum.
 * 
 * The dispatch origin of this call must be `CancellationOrigin`.
 * 
 * -`ref_index`: The index of the referendum to cancel.
 * 
 * Weight: `O(1)`.
 */
export interface DemocracyCall_emergency_cancel {
    __kind: 'emergency_cancel'
    refIndex: number
}

/**
 * Schedule a referendum to be tabled once it is legal to schedule an external
 * referendum.
 * 
 * The dispatch origin of this call must be `ExternalOrigin`.
 * 
 * - `proposal_hash`: The preimage hash of the proposal.
 */
export interface DemocracyCall_external_propose {
    __kind: 'external_propose'
    proposal: Bounded
}

/**
 * Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
 * schedule an external referendum.
 * 
 * The dispatch of this call must be `ExternalDefaultOrigin`.
 * 
 * - `proposal_hash`: The preimage hash of the proposal.
 * 
 * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 * pre-scheduled `external_propose` call.
 * 
 * Weight: `O(1)`
 */
export interface DemocracyCall_external_propose_default {
    __kind: 'external_propose_default'
    proposal: Bounded
}

/**
 * Schedule a majority-carries referendum to be tabled next once it is legal to schedule
 * an external referendum.
 * 
 * The dispatch of this call must be `ExternalMajorityOrigin`.
 * 
 * - `proposal_hash`: The preimage hash of the proposal.
 * 
 * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 * pre-scheduled `external_propose` call.
 * 
 * Weight: `O(1)`
 */
export interface DemocracyCall_external_propose_majority {
    __kind: 'external_propose_majority'
    proposal: Bounded
}

/**
 * Schedule the currently externally-proposed majority-carries referendum to be tabled
 * immediately. If there is no externally-proposed referendum currently, or if there is one
 * but it is not a majority-carries referendum then it fails.
 * 
 * The dispatch of this call must be `FastTrackOrigin`.
 * 
 * - `proposal_hash`: The hash of the current external proposal.
 * - `voting_period`: The period that is allowed for voting on this proposal. Increased to
 * 	Must be always greater than zero.
 * 	For `FastTrackOrigin` must be equal or greater than `FastTrackVotingPeriod`.
 * - `delay`: The number of block after voting has ended in approval and this should be
 *   enacted. This doesn't have a minimum amount.
 * 
 * Emits `Started`.
 * 
 * Weight: `O(1)`
 */
export interface DemocracyCall_fast_track {
    __kind: 'fast_track'
    proposalHash: H256
    votingPeriod: number
    delay: number
}

/**
 * Propose a sensitive action to be taken.
 * 
 * The dispatch origin of this call must be _Signed_ and the sender must
 * have funds to cover the deposit.
 * 
 * - `proposal_hash`: The hash of the proposal preimage.
 * - `value`: The amount of deposit (must be at least `MinimumDeposit`).
 * 
 * Emits `Proposed`.
 */
export interface DemocracyCall_propose {
    __kind: 'propose'
    proposal: Bounded
    value: bigint
}

/**
 * Remove a vote for a referendum.
 * 
 * If the `target` is equal to the signer, then this function is exactly equivalent to
 * `remove_vote`. If not equal to the signer, then the vote must have expired,
 * either because the referendum was cancelled, because the voter lost the referendum or
 * because the conviction period is over.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `target`: The account of the vote to be removed; this account must have voted for
 *   referendum `index`.
 * - `index`: The index of referendum of the vote to be removed.
 * 
 * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
 *   Weight is calculated for the maximum number of vote.
 */
export interface DemocracyCall_remove_other_vote {
    __kind: 'remove_other_vote'
    target: MultiAddress
    index: number
}

/**
 * Remove a vote for a referendum.
 * 
 * If:
 * - the referendum was cancelled, or
 * - the referendum is ongoing, or
 * - the referendum has ended such that
 *   - the vote of the account was in opposition to the result; or
 *   - there was no conviction to the account's vote; or
 *   - the account made a split vote
 * ...then the vote is removed cleanly and a following call to `unlock` may result in more
 * funds being available.
 * 
 * If, however, the referendum has ended and:
 * - it finished corresponding to the vote of the account, and
 * - the account made a standard vote with conviction, and
 * - the lock period of the conviction is not over
 * ...then the lock will be aggregated into the overall account's lock, which may involve
 * *overlocking* (where the two locks are combined into a single lock that is the maximum
 * of both the amount locked and the time is it locked for).
 * 
 * The dispatch origin of this call must be _Signed_, and the signer must have a vote
 * registered for referendum `index`.
 * 
 * - `index`: The index of referendum of the vote to be removed.
 * 
 * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
 *   Weight is calculated for the maximum number of vote.
 */
export interface DemocracyCall_remove_vote {
    __kind: 'remove_vote'
    index: number
}

/**
 * Signals agreement with a particular proposal.
 * 
 * The dispatch origin of this call must be _Signed_ and the sender
 * must have funds to cover the deposit, equal to the original deposit.
 * 
 * - `proposal`: The index of the proposal to second.
 */
export interface DemocracyCall_second {
    __kind: 'second'
    proposal: number
}

/**
 * Set or clear a metadata of a proposal or a referendum.
 * 
 * Parameters:
 * - `origin`: Must correspond to the `MetadataOwner`.
 *     - `ExternalOrigin` for an external proposal with the `SuperMajorityApprove`
 *       threshold.
 *     - `ExternalDefaultOrigin` for an external proposal with the `SuperMajorityAgainst`
 *       threshold.
 *     - `ExternalMajorityOrigin` for an external proposal with the `SimpleMajority`
 *       threshold.
 *     - `Signed` by a creator for a public proposal.
 *     - `Signed` to clear a metadata for a finished referendum.
 *     - `Root` to set a metadata for an ongoing referendum.
 * - `owner`: an identifier of a metadata owner.
 * - `maybe_hash`: The hash of an on-chain stored preimage. `None` to clear a metadata.
 */
export interface DemocracyCall_set_metadata {
    __kind: 'set_metadata'
    owner: MetadataOwner
    maybeHash?: (H256 | undefined)
}

/**
 * Undelegate the voting power of the sending account.
 * 
 * Tokens may be unlocked following once an amount of time consistent with the lock period
 * of the conviction with which the delegation was issued.
 * 
 * The dispatch origin of this call must be _Signed_ and the signing account must be
 * currently delegating.
 * 
 * Emits `Undelegated`.
 * 
 * Weight: `O(R)` where R is the number of referendums the voter delegating to has
 *   voted on. Weight is charged as if maximum votes.
 */
export interface DemocracyCall_undelegate {
    __kind: 'undelegate'
}

/**
 * Unlock tokens that have an expired lock.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `target`: The account to remove the lock on.
 * 
 * Weight: `O(R)` with R number of vote of target.
 */
export interface DemocracyCall_unlock {
    __kind: 'unlock'
    target: MultiAddress
}

/**
 * Veto and blacklist the external proposal hash.
 * 
 * The dispatch origin of this call must be `VetoOrigin`.
 * 
 * - `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
 * 
 * Emits `Vetoed`.
 * 
 * Weight: `O(V + log(V))` where V is number of `existing vetoers`
 */
export interface DemocracyCall_veto_external {
    __kind: 'veto_external'
    proposalHash: H256
}

/**
 * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
 * otherwise it is a vote to keep the status quo.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `ref_index`: The index of the referendum to vote for.
 * - `vote`: The vote configuration.
 */
export interface DemocracyCall_vote {
    __kind: 'vote'
    refIndex: number
    vote: AccountVote
}

export type AccountVote = AccountVote_Split | AccountVote_Standard

export interface AccountVote_Split {
    __kind: 'Split'
    aye: bigint
    nay: bigint
}

export interface AccountVote_Standard {
    __kind: 'Standard'
    vote: Vote
    balance: bigint
}

export type Vote = number

export type MetadataOwner = MetadataOwner_External | MetadataOwner_Proposal | MetadataOwner_Referendum

export interface MetadataOwner_External {
    __kind: 'External'
}

export interface MetadataOwner_Proposal {
    __kind: 'Proposal'
    value: number
}

export interface MetadataOwner_Referendum {
    __kind: 'Referendum'
    value: number
}

export type Bounded = Bounded_Inline | Bounded_Legacy | Bounded_Lookup

export interface Bounded_Inline {
    __kind: 'Inline'
    value: Bytes
}

export interface Bounded_Legacy {
    __kind: 'Legacy'
    hash: H256
}

export interface Bounded_Lookup {
    __kind: 'Lookup'
    hash: H256
    len: number
}

export type Conviction = Conviction_Locked1x | Conviction_Locked2x | Conviction_Locked3x | Conviction_Locked4x | Conviction_Locked5x | Conviction_Locked6x | Conviction_None

export interface Conviction_Locked1x {
    __kind: 'Locked1x'
}

export interface Conviction_Locked2x {
    __kind: 'Locked2x'
}

export interface Conviction_Locked3x {
    __kind: 'Locked3x'
}

export interface Conviction_Locked4x {
    __kind: 'Locked4x'
}

export interface Conviction_Locked5x {
    __kind: 'Locked5x'
}

export interface Conviction_Locked6x {
    __kind: 'Locked6x'
}

export interface Conviction_None {
    __kind: 'None'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type CumulusXcmCall = never

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type CouncilCall = CouncilCall_close | CouncilCall_disapprove_proposal | CouncilCall_execute | CouncilCall_propose | CouncilCall_set_members | CouncilCall_vote

/**
 * Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 * May be called by any signed account in order to finish voting and close the proposal.
 * 
 * If called before the end of the voting period it will only close the vote if it is
 * has enough votes to be approved or disapproved.
 * 
 * If called after the end of the voting period abstentions are counted as rejections
 * unless there is a prime member set and the prime member cast an approval.
 * 
 * If the close operation completes successfully with disapproval, the transaction fee will
 * be waived. Otherwise execution of the approved operation will be charged to the caller.
 * 
 * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
 * proposal.
 * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 * ## Complexity
 * - `O(B + M + P1 + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - `P1` is the complexity of `proposal` preimage.
 *   - `P2` is proposal-count (code-bounded)
 */
export interface CouncilCall_close {
    __kind: 'close'
    proposalHash: H256
    index: number
    proposalWeightBound: Weight
    lengthBound: number
}

/**
 * Disapprove a proposal, close, and remove it from the system, regardless of its current
 * state.
 * 
 * Must be called by the Root origin.
 * 
 * Parameters:
 * * `proposal_hash`: The hash of the proposal that should be disapproved.
 * 
 * ## Complexity
 * O(P) where P is the number of max proposals
 */
export interface CouncilCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: H256
}

/**
 * Dispatch a proposal from a member using the `Member` origin.
 * 
 * Origin must be a member of the collective.
 * 
 * ## Complexity:
 * - `O(B + M + P)` where:
 * - `B` is `proposal` size in bytes (length-fee-bounded)
 * - `M` members-count (code-bounded)
 * - `P` complexity of dispatching `proposal`
 */
export interface CouncilCall_execute {
    __kind: 'execute'
    proposal: Call
    lengthBound: number
}

/**
 * Add a new proposal to either be voted on or executed directly.
 * 
 * Requires the sender to be member.
 * 
 * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
 * or put up for voting.
 * 
 * ## Complexity
 * - `O(B + M + P1)` or `O(B + M + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - branching is influenced by `threshold` where:
 *     - `P1` is proposal execution complexity (`threshold < 2`)
 *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 */
export interface CouncilCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Call
    lengthBound: number
}

/**
 * Set the collective's membership.
 * 
 * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 * - `prime`: The prime member whose vote sets the default.
 * - `old_count`: The upper bound for the previous number of members in storage. Used for
 *   weight estimation.
 * 
 * The dispatch of this call must be `SetMembersOrigin`.
 * 
 * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
 *       the weight estimations rely on it to estimate dispatchable weight.
 * 
 * # WARNING:
 * 
 * The `pallet-collective` can also be managed by logic outside of the pallet through the
 * implementation of the trait [`ChangeMembers`].
 * Any call to `set_members` must be careful that the member set doesn't get out of sync
 * with other logic managing the member set.
 * 
 * ## Complexity:
 * - `O(MP + N)` where:
 *   - `M` old-members-count (code- and governance-bounded)
 *   - `N` new-members-count (code- and governance-bounded)
 *   - `P` proposals-count (code-bounded)
 */
export interface CouncilCall_set_members {
    __kind: 'set_members'
    newMembers: AccountId32[]
    prime?: (AccountId32 | undefined)
    oldCount: number
}

/**
 * Add an aye or nay vote for the sender to the given proposal.
 * 
 * Requires the sender to be a member.
 * 
 * Transaction fees will be waived if the member is voting on any particular proposal
 * for the first time and the call is successful. Subsequent vote changes will charge a
 * fee.
 * ## Complexity
 * - `O(M)` where `M` is members-count (code- and governance-bounded)
 */
export interface CouncilCall_vote {
    __kind: 'vote'
    proposal: H256
    index: number
    approve: boolean
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type CommunityPoolCall = CommunityPoolCall_approve_proposal | CommunityPoolCall_check_status | CommunityPoolCall_payout | CommunityPoolCall_propose_spend | CommunityPoolCall_reject_proposal | CommunityPoolCall_remove_approval | CommunityPoolCall_spend | CommunityPoolCall_spend_local | CommunityPoolCall_void_spend

/**
 * Approve a proposal.
 * 
 * ## Dispatch Origin
 * 
 * Must be [`Config::ApproveOrigin`].
 * 
 * ## Details
 * 
 * At a later time, the proposal will be allocated to the beneficiary and the original
 * deposit will be returned.
 * 
 * ### Complexity
 *  - O(1).
 * 
 * ## Events
 * 
 * No events are emitted from this dispatch.
 */
export interface CommunityPoolCall_approve_proposal {
    __kind: 'approve_proposal'
    proposalId: number
}

/**
 * Check the status of the spend and remove it from the storage if processed.
 * 
 * ## Dispatch Origin
 * 
 * Must be signed.
 * 
 * ## Details
 * 
 * The status check is a prerequisite for retrying a failed payout.
 * If a spend has either succeeded or expired, it is removed from the storage by this
 * function. In such instances, transaction fees are refunded.
 * 
 * ### Parameters
 * - `index`: The spend index.
 * 
 * ## Events
 * 
 * Emits [`Event::PaymentFailed`] if the spend payout has failed.
 * Emits [`Event::SpendProcessed`] if the spend payout has succeed.
 */
export interface CommunityPoolCall_check_status {
    __kind: 'check_status'
    index: number
}

/**
 * Claim a spend.
 * 
 * ## Dispatch Origin
 * 
 * Must be signed.
 * 
 * ## Details
 * 
 * Spends must be claimed within some temporal bounds. A spend may be claimed within one
 * [`Config::PayoutPeriod`] from the `valid_from` block.
 * In case of a payout failure, the spend status must be updated with the `check_status`
 * dispatchable before retrying with the current function.
 * 
 * ### Parameters
 * - `index`: The spend index.
 * 
 * ## Events
 * 
 * Emits [`Event::Paid`] if successful.
 */
export interface CommunityPoolCall_payout {
    __kind: 'payout'
    index: number
}

/**
 * Put forward a suggestion for spending.
 * 
 * ## Dispatch Origin
 * 
 * Must be signed.
 * 
 * ## Details
 * A deposit proportional to the value is reserved and slashed if the proposal is rejected.
 * It is returned once the proposal is awarded.
 * 
 * ### Complexity
 * - O(1)
 * 
 * ## Events
 * 
 * Emits [`Event::Proposed`] if successful.
 */
export interface CommunityPoolCall_propose_spend {
    __kind: 'propose_spend'
    value: bigint
    beneficiary: MultiAddress
}

/**
 * Reject a proposed spend.
 * 
 * ## Dispatch Origin
 * 
 * Must be [`Config::RejectOrigin`].
 * 
 * ## Details
 * The original deposit will be slashed.
 * 
 * ### Complexity
 * - O(1)
 * 
 * ## Events
 * 
 * Emits [`Event::Rejected`] if successful.
 */
export interface CommunityPoolCall_reject_proposal {
    __kind: 'reject_proposal'
    proposalId: number
}

/**
 * Force a previously approved proposal to be removed from the approval queue.
 * 
 * ## Dispatch Origin
 * 
 * Must be [`Config::RejectOrigin`].
 * 
 * ## Details
 * 
 * The original deposit will no longer be returned.
 * 
 * ### Parameters
 * - `proposal_id`: The index of a proposal
 * 
 * ### Complexity
 * - O(A) where `A` is the number of approvals
 * 
 * ### Errors
 * - [`Error::ProposalNotApproved`]: The `proposal_id` supplied was not found in the
 *   approval queue, i.e., the proposal has not been approved. This could also mean the
 *   proposal does not exist altogether, thus there is no way it would have been approved
 *   in the first place.
 */
export interface CommunityPoolCall_remove_approval {
    __kind: 'remove_approval'
    proposalId: number
}

/**
 * Propose and approve a spend of treasury funds.
 * 
 * ## Dispatch Origin
 * 
 * Must be [`Config::SpendOrigin`] with the `Success` value being at least
 * `amount` of `asset_kind` in the native asset. The amount of `asset_kind` is converted
 * for assertion using the [`Config::BalanceConverter`].
 * 
 * ## Details
 * 
 * Create an approved spend for transferring a specific `amount` of `asset_kind` to a
 * designated beneficiary. The spend must be claimed using the `payout` dispatchable within
 * the [`Config::PayoutPeriod`].
 * 
 * ### Parameters
 * - `asset_kind`: An indicator of the specific asset class to be spent.
 * - `amount`: The amount to be transferred from the treasury to the `beneficiary`.
 * - `beneficiary`: The beneficiary of the spend.
 * - `valid_from`: The block number from which the spend can be claimed. It can refer to
 *   the past if the resulting spend has not yet expired according to the
 *   [`Config::PayoutPeriod`]. If `None`, the spend can be claimed immediately after
 *   approval.
 * 
 * ## Events
 * 
 * Emits [`Event::AssetSpendApproved`] if successful.
 */
export interface CommunityPoolCall_spend {
    __kind: 'spend'
    amount: bigint
    beneficiary: AccountId32
    validFrom?: (number | undefined)
}

/**
 * Propose and approve a spend of treasury funds.
 * 
 * ## Dispatch Origin
 * 
 * Must be [`Config::SpendOrigin`] with the `Success` value being at least `amount`.
 * 
 * ### Details
 * NOTE: For record-keeping purposes, the proposer is deemed to be equivalent to the
 * beneficiary.
 * 
 * ### Parameters
 * - `amount`: The amount to be transferred from the treasury to the `beneficiary`.
 * - `beneficiary`: The destination account for the transfer.
 * 
 * ## Events
 * 
 * Emits [`Event::SpendApproved`] if successful.
 */
export interface CommunityPoolCall_spend_local {
    __kind: 'spend_local'
    amount: bigint
    beneficiary: MultiAddress
}

/**
 * Void previously approved spend.
 * 
 * ## Dispatch Origin
 * 
 * Must be [`Config::RejectOrigin`].
 * 
 * ## Details
 * 
 * A spend void is only possible if the payout has not been attempted yet.
 * 
 * ### Parameters
 * - `index`: The spend index.
 * 
 * ## Events
 * 
 * Emits [`Event::AssetSpendVoided`] if successful.
 */
export interface CommunityPoolCall_void_spend {
    __kind: 'void_spend'
    index: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type CollatorStakingCall = CollatorStakingCall_force_set_current_max_candidates | CollatorStakingCall_force_set_min_collator_stake | CollatorStakingCall_join_candidates | CollatorStakingCall_nominate | CollatorStakingCall_remove_nomination | CollatorStakingCall_set_invulnerables | CollatorStakingCall_unbond

/**
 * Set the current maximum number of candidates, must be within 0 and
 * [`MaxCandidates`](Config::MaxCandidates)
 * 
 * Only [`ForceOrigin`](Config::ForceOrigin) can call this function.
 * 
 * # Errors
 * 
 * - [`Error::TooManyCandidates`] if the number of candidates is already at the maximum.
 */
export interface CollatorStakingCall_force_set_current_max_candidates {
    __kind: 'force_set_current_max_candidates'
    maxCandidates: number
}

/**
 * Set the minimum collator stake amount
 * 
 * [`T::ForceOrigin`](Config::ForceOrigin) call only
 */
export interface CollatorStakingCall_force_set_min_collator_stake {
    __kind: 'force_set_min_collator_stake'
    minCollatorStake: bigint
}

/**
 * Join the list of candidates for collation.
 * 
 * Being added to the candidate set means the caller may be selected to be a collator from
 * the next session onwards.
 * 
 * # Errors
 * 
 * - [`Error::BelowMinStakeAmount`] if `amount` is below the minimum required amount.
 * - [`Error::NominationExists`] if nomination already exists.
 * - [`Error::AccountIdNotRegistered`] if `AccountId` is not registered as a collator.
 * - [`Error::NoAssociatedValidatorId`] if no associated validator ID for `AccountId`.
 * - [`Error::TooManyCandidates`] if the number of candidates is already at the maximum.
 */
export interface CollatorStakingCall_join_candidates {
    __kind: 'join_candidates'
    amount: bigint
    rewardsCut: Perbill
}

/**
 * Nominate a specific candidate to be selected for collation and block production.
 * 
 * This allows the caller to put up a stake to nominate an existing collator, this
 * increases the `total_stake` of the collation candidate and increases the chance to get
 * selected as a collator.
 * 
 * # Errors
 * 
 * - [`Error::CandidateDoesNotExist`] if the candidate does not exist.
 * - [`Error::NominationExists`] if the nomination already exists.
 * - [`Error::BelowMinNominationStakeAmount`] if the nomination amount is below the
 *   minimum.
 * - [`Error::TooManyNominations`] if there are too many nominations for the candidate.
 */
export interface CollatorStakingCall_nominate {
    __kind: 'nominate'
    collatorId: AccountId32
    amount: bigint
}

/**
 * Remove a nomination previously registered for a specific collator candidate.
 * 
 * The call will also refund the stake to the caller.
 * 
 * # Errors
 * 
 * - [`Error::CandidateDoesNotExist`] if the candidate does not exist.
 * - [`Error::NominationDoesNotExist`] if the nomination does not exist.
 * - [`Error::TooManyCandidates`] if there are too many candidates in the set.
 */
export interface CollatorStakingCall_remove_nomination {
    __kind: 'remove_nomination'
    collatorId: AccountId32
}

/**
 * Force set the invulnerables.
 * 
 * These accounts will always be in the collator set and do not require a stake.
 * 
 * [`ForceOrigin`](Config::ForceOrigin) call only.
 * 
 * # Errors
 * 
 * - [`Error::TooManyInvulnerables`] if the number of invulnerables exceeds the maximum
 */
export interface CollatorStakingCall_set_invulnerables {
    __kind: 'set_invulnerables'
    accounts: AccountId32[]
}

/**
 * Leave the collator set of this parachain.
 * 
 * In this case, if the calling account is already a collator, an exit
 * is registered so that this account is not selected for the next set of collators.
 * Otherwise, if the account is only a candidate, this candidate will be removed
 * and the nominations would be freed up.
 * 
 * # Errors
 * 
 * - [`Error::CandidateDoesNotExist`] if candidate does not exist.
 * - [`Error::CannotUnbondInvulnerable`] cannot unbond an invulnerable collator.
 * - [`Error::ExitInProgress`] if unbonding for collator already in progress.
 */
export interface CollatorStakingCall_unbond {
    __kind: 'unbond'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ClaimsCall = ClaimsCall_claim | ClaimsCall_mint_claim | ClaimsCall_move_claim | ClaimsCall_reject_claims | ClaimsCall_request_claims | ClaimsCall_set_delay_time | ClaimsCall_set_exchange_rate

/**
 * Make a claim to collect your EFI.
 * 
 * The dispatch origin for this call must be _None_.
 * 
 * Unsigned Validation:
 * A call to claim is deemed valid if the signature provided matches
 * the expected signed message of:
 * 
 * > Ethereum Signed Message:
 * > (configured prefix string)(address)
 * 
 * and `address` matches the `dest` account.
 * 
 * Parameters:
 * - `dest`: The destination account to payout the claim.
 * - `ethereum_signature`: The signature of an ethereum signed message matching the format
 *   described above.
 * - `ethereum_address` : The Ethereum address from which the message is signed.
 * 
 * <weight>
 * The weight of this call is invariant over the input parameters.
 * Weight includes logic to validate unsigned `claim` call.
 * 
 * Total Complexity: O(1)
 * </weight>
 */
export interface ClaimsCall_claim {
    __kind: 'claim'
    dest: AccountId32
    ethereumSignature: Signature
    ethereumAddress: H160
}

/**
 * Mint a new claim for an Ethereum address to collect EFIs. The dispatch origin for this
 * call must be _Root_. This extrinsic is in the pallet in case an event was somehow missed
 * by the relayer and now the root or the governance admin want to mint a claim for a user
 * directly without going through the request claim process.
 * 
 * Parameters:
 * - `who`: The Ethereum address allowed to collect this claim.
 * - `value`: The number of EFIs that will be claimed.
 * 
 * <weight>
 * The weight of this call is invariant over the input parameters.
 * 
 * Total Complexity: O(1)
 * </weight>
 */
export interface ClaimsCall_mint_claim {
    __kind: 'mint_claim'
    who: H160
    value: bigint
}

/**
 * `move_claim` moves the claim from one Ethereum address to another
 * 
 * Arguments:
 * 
 * * `old`: EthereumAddress,
 * * `new`: EthereumAddress,
 * 
 * The weight of this call is invariant over the input parameters.
 * 
 * Total Complexity: O(1)
 */
export interface ClaimsCall_move_claim {
    __kind: 'move_claim'
    old: H160
    new: H160
}

/**
 * `reject_claims` is a function that is called by ForceOrigin and allows to reject a batch
 * of claims that were rejected upon verification
 * 
 * Arguments:
 * 
 * * `batch_data`: A vector of user accounts and transaction hashes.
 * 
 * The weight of this call is invariant over the input parameters.
 * Weight includes logic to iterate over pending approval ETH transaction
 * And REMOVE the pending ETH transaction
 * 
 * Total Complexity: O(N)
 */
export interface ClaimsCall_reject_claims {
    __kind: 'reject_claims'
    batchData: RejectData[]
}

/**
 * `request_claims` is only accessible by the relayer and allows them to request claims for
 * a batch of transactions.
 * 
 * The users burns their Ethereum EFI/ENJ holdings to get them onto Enjin relaychain as
 * ENJ2 tokens. The relayer listens to the burn events batches them and calls this
 * extrinsic to requests claim for them. Relayer also sends the block number upto which all
 * the burn events were processed as a parameter. This block is stored on pallet to prevent
 * replay attack. Also it is important to set the exchange rate before this extrinsic is
 * called.
 * 
 * Parameters:
 * 
 * * `block_number`: The block number of Ethereum or Parachain block that contains the
 *   transaction.
 * * `batch_data`: A vector of EthereumTransactionDataOf structs.
 * 
 * The weight of this call is invariant over the input parameters.
 * Weight includes logic to iterate over pending approval ETH transaction
 * 
 * Total Complexity: O(N)
 */
export interface ClaimsCall_request_claims {
    __kind: 'request_claims'
    blockNumber: number
    batchData: Claim[]
}

/**
 * This function sets a delay time for claims and requires a governance origin to execute.
 * 
 * Arguments:
 * 
 * * `delay_time`: The delay_time parameter is the number of blocks that must pass before a
 * certain action can be taken. In this case, it is being used to set the delay time for
 * claims in the governance pallet.
 * 
 * Returns:
 * 
 * either `Ok(())` if the delay time is successfully set, or an `Err` with a
 * `DispatchError` if the delay time is less than 24 hours.
 */
export interface ClaimsCall_set_delay_time {
    __kind: 'set_delay_time'
    delayTime: number
}

/**
 * `set_exchange_rate` is a function that can be called by ForceOrigin and
 * it sets the exchange rate
 * 
 * Parameters:
 * 
 * * `numerator`: u128,
 * * `denominator`: u128,
 * 
 * The weight of this call is invariant over the input parameters.
 * 
 * Total Complexity: O(1)
 */
export interface ClaimsCall_set_exchange_rate {
    __kind: 'set_exchange_rate'
    numerator: bigint
    denominator: bigint
}

export interface Claim {
    hash: H256
    claim: TransactionData
    isEfiToken: boolean
}

export interface TransactionData {
    account: H160
    amount: bigint
}

export interface RejectData {
    account: H160
    hash: H256
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type BountiesCall = BountiesCall_accept_curator | BountiesCall_approve_bounty | BountiesCall_award_bounty | BountiesCall_claim_bounty | BountiesCall_close_bounty | BountiesCall_extend_bounty_expiry | BountiesCall_propose_bounty | BountiesCall_propose_curator | BountiesCall_unassign_curator

/**
 * Accept the curator role for a bounty.
 * A deposit will be reserved from curator and refund upon successful payout.
 * 
 * May only be called from the curator.
 * 
 * ## Complexity
 * - O(1).
 */
export interface BountiesCall_accept_curator {
    __kind: 'accept_curator'
    bountyId: number
}

/**
 * Approve a bounty proposal. At a later time, the bounty will be funded and become active
 * and the original deposit will be returned.
 * 
 * May only be called from `T::SpendOrigin`.
 * 
 * ## Complexity
 * - O(1).
 */
export interface BountiesCall_approve_bounty {
    __kind: 'approve_bounty'
    bountyId: number
}

/**
 * Award bounty to a beneficiary account. The beneficiary will be able to claim the funds
 * after a delay.
 * 
 * The dispatch origin for this call must be the curator of this bounty.
 * 
 * - `bounty_id`: Bounty ID to award.
 * - `beneficiary`: The beneficiary account whom will receive the payout.
 * 
 * ## Complexity
 * - O(1).
 */
export interface BountiesCall_award_bounty {
    __kind: 'award_bounty'
    bountyId: number
    beneficiary: MultiAddress
}

/**
 * Claim the payout from an awarded bounty after payout delay.
 * 
 * The dispatch origin for this call must be the beneficiary of this bounty.
 * 
 * - `bounty_id`: Bounty ID to claim.
 * 
 * ## Complexity
 * - O(1).
 */
export interface BountiesCall_claim_bounty {
    __kind: 'claim_bounty'
    bountyId: number
}

/**
 * Cancel a proposed or active bounty. All the funds will be sent to treasury and
 * the curator deposit will be unreserved if possible.
 * 
 * Only `T::RejectOrigin` is able to cancel a bounty.
 * 
 * - `bounty_id`: Bounty ID to cancel.
 * 
 * ## Complexity
 * - O(1).
 */
export interface BountiesCall_close_bounty {
    __kind: 'close_bounty'
    bountyId: number
}

/**
 * Extend the expiry time of an active bounty.
 * 
 * The dispatch origin for this call must be the curator of this bounty.
 * 
 * - `bounty_id`: Bounty ID to extend.
 * - `remark`: additional information.
 * 
 * ## Complexity
 * - O(1).
 */
export interface BountiesCall_extend_bounty_expiry {
    __kind: 'extend_bounty_expiry'
    bountyId: number
    remark: Bytes
}

/**
 * Propose a new bounty.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
 * `DataDepositPerByte` for each byte in `reason`. It will be unreserved upon approval,
 * or slashed when rejected.
 * 
 * - `curator`: The curator account whom will manage this bounty.
 * - `fee`: The curator fee.
 * - `value`: The total payment amount of this bounty, curator fee included.
 * - `description`: The description of this bounty.
 */
export interface BountiesCall_propose_bounty {
    __kind: 'propose_bounty'
    value: bigint
    description: Bytes
}

/**
 * Propose a curator to a funded bounty.
 * 
 * May only be called from `T::SpendOrigin`.
 * 
 * ## Complexity
 * - O(1).
 */
export interface BountiesCall_propose_curator {
    __kind: 'propose_curator'
    bountyId: number
    curator: MultiAddress
    fee: bigint
}

/**
 * Unassign curator from a bounty.
 * 
 * This function can only be called by the `RejectOrigin` a signed origin.
 * 
 * If this function is called by the `RejectOrigin`, we assume that the curator is
 * malicious or inactive. As a result, we will slash the curator when possible.
 * 
 * If the origin is the curator, we take this as a sign they are unable to do their job and
 * they willingly give up. We could slash them, but for now we allow them to recover their
 * deposit and exit without issue. (We may want to change this if it is abused.)
 * 
 * Finally, the origin can be anyone if and only if the curator is "inactive". This allows
 * anyone in the community to call out that a curator is not doing their due diligence, and
 * we should pick a new curator. In this case the curator should also be slashed.
 * 
 * ## Complexity
 * - O(1).
 */
export interface BountiesCall_unassign_curator {
    __kind: 'unassign_curator'
    bountyId: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type BalancesCall = BalancesCall_force_adjust_total_issuance | BalancesCall_force_set_balance | BalancesCall_force_transfer | BalancesCall_force_unreserve | BalancesCall_transfer_all | BalancesCall_transfer_allow_death | BalancesCall_transfer_keep_alive | BalancesCall_upgrade_accounts

/**
 * Adjust the total issuance in a saturating way.
 * 
 * Can only be called by root and always needs a positive `delta`.
 * 
 * # Example
 */
export interface BalancesCall_force_adjust_total_issuance {
    __kind: 'force_adjust_total_issuance'
    direction: AdjustmentDirection
    delta: bigint
}

/**
 * Set the regular balance of a given account.
 * 
 * The dispatch origin for this call is `root`.
 */
export interface BalancesCall_force_set_balance {
    __kind: 'force_set_balance'
    who: MultiAddress
    newFree: bigint
}

/**
 * Exactly as `transfer_allow_death`, except the origin must be root and the source account
 * may be specified.
 */
export interface BalancesCall_force_transfer {
    __kind: 'force_transfer'
    source: MultiAddress
    dest: MultiAddress
    value: bigint
}

/**
 * Unreserve some balance from a user by force.
 * 
 * Can only be called by ROOT.
 */
export interface BalancesCall_force_unreserve {
    __kind: 'force_unreserve'
    who: MultiAddress
    amount: bigint
}

/**
 * Transfer the entire transferable balance from the caller account.
 * 
 * NOTE: This function only attempts to transfer _transferable_ balances. This means that
 * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
 * transferred by this function. To ensure that this function results in a killed account,
 * you might need to prepare the account by removing any reference counters, storage
 * deposits, etc...
 * 
 * The dispatch origin of this call must be Signed.
 * 
 * - `dest`: The recipient of the transfer.
 * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
 *   of the funds the account has, causing the sender account to be killed (false), or
 *   transfer everything except at least the existential deposit, which will guarantee to
 *   keep the sender account alive (true).
 */
export interface BalancesCall_transfer_all {
    __kind: 'transfer_all'
    dest: MultiAddress
    keepAlive: boolean
}

/**
 * Transfer some liquid free balance to another account.
 * 
 * `transfer_allow_death` will set the `FreeBalance` of the sender and receiver.
 * If the sender's account is below the existential deposit as a result
 * of the transfer, the account will be reaped.
 * 
 * The dispatch origin for this call must be `Signed` by the transactor.
 */
export interface BalancesCall_transfer_allow_death {
    __kind: 'transfer_allow_death'
    dest: MultiAddress
    value: bigint
}

/**
 * Same as the [`transfer_allow_death`] call, but with a check that the transfer will not
 * kill the origin account.
 * 
 * 99% of the time you want [`transfer_allow_death`] instead.
 * 
 * [`transfer_allow_death`]: struct.Pallet.html#method.transfer
 */
export interface BalancesCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    dest: MultiAddress
    value: bigint
}

/**
 * Upgrade a specified account.
 * 
 * - `origin`: Must be `Signed`.
 * - `who`: The account to be upgraded.
 * 
 * This will waive the transaction fee if at least all but 10% of the accounts needed to
 * be upgraded. (We let some not have to be upgraded just in order to allow for the
 * possibililty of churn).
 */
export interface BalancesCall_upgrade_accounts {
    __kind: 'upgrade_accounts'
    who: AccountId32[]
}

export type AdjustmentDirection = AdjustmentDirection_Decrease | AdjustmentDirection_Increase

export interface AdjustmentDirection_Decrease {
    __kind: 'Decrease'
}

export interface AdjustmentDirection_Increase {
    __kind: 'Increase'
}

export const H256 = sts.bytes()

export interface EventRecord {
    phase: Phase
    event: Event
    topics: H256[]
}

export type Event = Event_Balances | Event_Bounties | Event_Claims | Event_CollatorStaking | Event_CommunityPool | Event_Council | Event_CumulusXcm | Event_Democracy | Event_DmpQueue | Event_ExtrinsicPause | Event_FuelTanks | Event_Identity | Event_Marketplace | Event_MatrixUtility | Event_MatrixXcm | Event_MessageQueue | Event_Migrations | Event_MultiTokens | Event_Multisig | Event_OrmlXcm | Event_ParachainSystem | Event_PolkadotXcm | Event_Pools | Event_Preimage | Event_Proxy | Event_SafeMode | Event_Scheduler | Event_Session | Event_Sudo | Event_System | Event_TechnicalCommittee | Event_TechnicalMembership | Event_TransactionPayment | Event_UnknownTokens | Event_Utility | Event_XTokens | Event_XcmpQueue

export interface Event_Balances {
    __kind: 'Balances'
    value: BalancesEvent
}

export interface Event_Bounties {
    __kind: 'Bounties'
    value: BountiesEvent
}

export interface Event_Claims {
    __kind: 'Claims'
    value: ClaimsEvent
}

export interface Event_CollatorStaking {
    __kind: 'CollatorStaking'
    value: CollatorStakingEvent
}

export interface Event_CommunityPool {
    __kind: 'CommunityPool'
    value: CommunityPoolEvent
}

export interface Event_Council {
    __kind: 'Council'
    value: CouncilEvent
}

export interface Event_CumulusXcm {
    __kind: 'CumulusXcm'
    value: CumulusXcmEvent
}

export interface Event_Democracy {
    __kind: 'Democracy'
    value: DemocracyEvent
}

export interface Event_DmpQueue {
    __kind: 'DmpQueue'
    value: DmpQueueEvent
}

export interface Event_ExtrinsicPause {
    __kind: 'ExtrinsicPause'
    value: ExtrinsicPauseEvent
}

export interface Event_FuelTanks {
    __kind: 'FuelTanks'
    value: FuelTanksEvent
}

export interface Event_Identity {
    __kind: 'Identity'
    value: IdentityEvent
}

export interface Event_Marketplace {
    __kind: 'Marketplace'
    value: MarketplaceEvent
}

export interface Event_MatrixUtility {
    __kind: 'MatrixUtility'
    value: MatrixUtilityEvent
}

export interface Event_MatrixXcm {
    __kind: 'MatrixXcm'
    value: MatrixXcmEvent
}

export interface Event_MessageQueue {
    __kind: 'MessageQueue'
    value: MessageQueueEvent
}

export interface Event_Migrations {
    __kind: 'Migrations'
    value: MigrationsEvent
}

export interface Event_MultiTokens {
    __kind: 'MultiTokens'
    value: MultiTokensEvent
}

export interface Event_Multisig {
    __kind: 'Multisig'
    value: MultisigEvent
}

export interface Event_OrmlXcm {
    __kind: 'OrmlXcm'
    value: OrmlXcmEvent
}

export interface Event_ParachainSystem {
    __kind: 'ParachainSystem'
    value: ParachainSystemEvent
}

export interface Event_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: PolkadotXcmEvent
}

export interface Event_Pools {
    __kind: 'Pools'
    value: PoolsEvent
}

export interface Event_Preimage {
    __kind: 'Preimage'
    value: PreimageEvent
}

export interface Event_Proxy {
    __kind: 'Proxy'
    value: ProxyEvent
}

export interface Event_SafeMode {
    __kind: 'SafeMode'
    value: SafeModeEvent
}

export interface Event_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerEvent
}

export interface Event_Session {
    __kind: 'Session'
    value: SessionEvent
}

export interface Event_Sudo {
    __kind: 'Sudo'
    value: SudoEvent
}

export interface Event_System {
    __kind: 'System'
    value: SystemEvent
}

export interface Event_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeEvent
}

export interface Event_TechnicalMembership {
    __kind: 'TechnicalMembership'
    value: TechnicalMembershipEvent
}

export interface Event_TransactionPayment {
    __kind: 'TransactionPayment'
    value: TransactionPaymentEvent
}

export interface Event_UnknownTokens {
    __kind: 'UnknownTokens'
    value: UnknownTokensEvent
}

export interface Event_Utility {
    __kind: 'Utility'
    value: UtilityEvent
}

export interface Event_XTokens {
    __kind: 'XTokens'
    value: XTokensEvent
}

export interface Event_XcmpQueue {
    __kind: 'XcmpQueue'
    value: XcmpQueueEvent
}

/**
 * The `Event` enum of this pallet
 */
export type XcmpQueueEvent = XcmpQueueEvent_XcmpMessageSent

/**
 * An HRMP message was sent to a sibling parachain.
 */
export interface XcmpQueueEvent_XcmpMessageSent {
    __kind: 'XcmpMessageSent'
    messageHash: Bytes
}

/**
 * The `Event` enum of this pallet
 */
export type XTokensEvent = XTokensEvent_TransferredAssets

/**
 * Transferred `Asset` with fee.
 */
export interface XTokensEvent_TransferredAssets {
    __kind: 'TransferredAssets'
    sender: AccountId32
    assets: V4Asset[]
    fee: V4Asset
    dest: V4Location
}

/**
 * The `Event` enum of this pallet
 */
export type UtilityEvent = UtilityEvent_BatchCompleted | UtilityEvent_BatchCompletedWithErrors | UtilityEvent_BatchInterrupted | UtilityEvent_DispatchedAs | UtilityEvent_ItemCompleted | UtilityEvent_ItemFailed

/**
 * Batch of dispatches completed fully with no error.
 */
export interface UtilityEvent_BatchCompleted {
    __kind: 'BatchCompleted'
}

/**
 * Batch of dispatches completed but has errors.
 */
export interface UtilityEvent_BatchCompletedWithErrors {
    __kind: 'BatchCompletedWithErrors'
}

/**
 * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
 * well as the error.
 */
export interface UtilityEvent_BatchInterrupted {
    __kind: 'BatchInterrupted'
    index: number
    error: DispatchError
}

/**
 * A call was dispatched.
 */
export interface UtilityEvent_DispatchedAs {
    __kind: 'DispatchedAs'
    result: Result<null, DispatchError>
}

/**
 * A single item within a Batch of dispatches has completed with no error.
 */
export interface UtilityEvent_ItemCompleted {
    __kind: 'ItemCompleted'
}

/**
 * A single item within a Batch of dispatches has completed with error.
 */
export interface UtilityEvent_ItemFailed {
    __kind: 'ItemFailed'
    error: DispatchError
}

export type DispatchError = DispatchError_Arithmetic | DispatchError_BadOrigin | DispatchError_CannotLookup | DispatchError_ConsumerRemaining | DispatchError_Corruption | DispatchError_Exhausted | DispatchError_Module | DispatchError_NoProviders | DispatchError_Other | DispatchError_RootNotAllowed | DispatchError_Token | DispatchError_TooManyConsumers | DispatchError_Transactional | DispatchError_Unavailable

export interface DispatchError_Arithmetic {
    __kind: 'Arithmetic'
    value: ArithmeticError
}

export interface DispatchError_BadOrigin {
    __kind: 'BadOrigin'
}

export interface DispatchError_CannotLookup {
    __kind: 'CannotLookup'
}

export interface DispatchError_ConsumerRemaining {
    __kind: 'ConsumerRemaining'
}

export interface DispatchError_Corruption {
    __kind: 'Corruption'
}

export interface DispatchError_Exhausted {
    __kind: 'Exhausted'
}

export interface DispatchError_Module {
    __kind: 'Module'
    value: ModuleError
}

export interface DispatchError_NoProviders {
    __kind: 'NoProviders'
}

export interface DispatchError_Other {
    __kind: 'Other'
}

export interface DispatchError_RootNotAllowed {
    __kind: 'RootNotAllowed'
}

export interface DispatchError_Token {
    __kind: 'Token'
    value: TokenError
}

export interface DispatchError_TooManyConsumers {
    __kind: 'TooManyConsumers'
}

export interface DispatchError_Transactional {
    __kind: 'Transactional'
    value: TransactionalError
}

export interface DispatchError_Unavailable {
    __kind: 'Unavailable'
}

export type TransactionalError = TransactionalError_LimitReached | TransactionalError_NoLayer

export interface TransactionalError_LimitReached {
    __kind: 'LimitReached'
}

export interface TransactionalError_NoLayer {
    __kind: 'NoLayer'
}

export type TokenError = TokenError_BelowMinimum | TokenError_Blocked | TokenError_CannotCreate | TokenError_CannotCreateHold | TokenError_Frozen | TokenError_FundsUnavailable | TokenError_NotExpendable | TokenError_OnlyProvider | TokenError_UnknownAsset | TokenError_Unsupported

export interface TokenError_BelowMinimum {
    __kind: 'BelowMinimum'
}

export interface TokenError_Blocked {
    __kind: 'Blocked'
}

export interface TokenError_CannotCreate {
    __kind: 'CannotCreate'
}

export interface TokenError_CannotCreateHold {
    __kind: 'CannotCreateHold'
}

export interface TokenError_Frozen {
    __kind: 'Frozen'
}

export interface TokenError_FundsUnavailable {
    __kind: 'FundsUnavailable'
}

export interface TokenError_NotExpendable {
    __kind: 'NotExpendable'
}

export interface TokenError_OnlyProvider {
    __kind: 'OnlyProvider'
}

export interface TokenError_UnknownAsset {
    __kind: 'UnknownAsset'
}

export interface TokenError_Unsupported {
    __kind: 'Unsupported'
}

export interface ModuleError {
    index: number
    error: Bytes
}

export type ArithmeticError = ArithmeticError_DivisionByZero | ArithmeticError_Overflow | ArithmeticError_Underflow

export interface ArithmeticError_DivisionByZero {
    __kind: 'DivisionByZero'
}

export interface ArithmeticError_Overflow {
    __kind: 'Overflow'
}

export interface ArithmeticError_Underflow {
    __kind: 'Underflow'
}

/**
 * The `Event` enum of this pallet
 */
export type UnknownTokensEvent = UnknownTokensEvent_Deposited | UnknownTokensEvent_Withdrawn

/**
 * Deposit success.
 */
export interface UnknownTokensEvent_Deposited {
    __kind: 'Deposited'
    asset: V4Asset
    who: V4Location
}

/**
 * Withdraw success.
 */
export interface UnknownTokensEvent_Withdrawn {
    __kind: 'Withdrawn'
    asset: V4Asset
    who: V4Location
}

/**
 * The `Event` enum of this pallet
 */
export type TransactionPaymentEvent = TransactionPaymentEvent_TransactionFeePaid

/**
 * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
 * has been paid by `who`.
 */
export interface TransactionPaymentEvent_TransactionFeePaid {
    __kind: 'TransactionFeePaid'
    who: AccountId32
    actualFee: bigint
    tip: bigint
}

/**
 * The `Event` enum of this pallet
 */
export type TechnicalMembershipEvent = TechnicalMembershipEvent_Dummy | TechnicalMembershipEvent_KeyChanged | TechnicalMembershipEvent_MemberAdded | TechnicalMembershipEvent_MemberRemoved | TechnicalMembershipEvent_MembersReset | TechnicalMembershipEvent_MembersSwapped

/**
 * Phantom member, never used.
 */
export interface TechnicalMembershipEvent_Dummy {
    __kind: 'Dummy'
}

/**
 * One of the members' keys changed.
 */
export interface TechnicalMembershipEvent_KeyChanged {
    __kind: 'KeyChanged'
}

/**
 * The given member was added; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MemberAdded {
    __kind: 'MemberAdded'
}

/**
 * The given member was removed; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MemberRemoved {
    __kind: 'MemberRemoved'
}

/**
 * The membership was reset; see the transaction for who the new set is.
 */
export interface TechnicalMembershipEvent_MembersReset {
    __kind: 'MembersReset'
}

/**
 * Two members were swapped; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MembersSwapped {
    __kind: 'MembersSwapped'
}

/**
 * The `Event` enum of this pallet
 */
export type TechnicalCommitteeEvent = TechnicalCommitteeEvent_Approved | TechnicalCommitteeEvent_Closed | TechnicalCommitteeEvent_Disapproved | TechnicalCommitteeEvent_Executed | TechnicalCommitteeEvent_MemberExecuted | TechnicalCommitteeEvent_Proposed | TechnicalCommitteeEvent_Voted

/**
 * A motion was approved by the required threshold.
 */
export interface TechnicalCommitteeEvent_Approved {
    __kind: 'Approved'
    proposalHash: H256
}

/**
 * A proposal was closed because its threshold was reached or after its duration was up.
 */
export interface TechnicalCommitteeEvent_Closed {
    __kind: 'Closed'
    proposalHash: H256
    yes: number
    no: number
}

/**
 * A motion was not approved by the required threshold.
 */
export interface TechnicalCommitteeEvent_Disapproved {
    __kind: 'Disapproved'
    proposalHash: H256
}

/**
 * A motion was executed; result will be `Ok` if it returned without error.
 */
export interface TechnicalCommitteeEvent_Executed {
    __kind: 'Executed'
    proposalHash: H256
    result: Result<null, DispatchError>
}

/**
 * A single member did some action; result will be `Ok` if it returned without error.
 */
export interface TechnicalCommitteeEvent_MemberExecuted {
    __kind: 'MemberExecuted'
    proposalHash: H256
    result: Result<null, DispatchError>
}

/**
 * A motion (given hash) has been proposed (by given account) with a threshold (given
 * `MemberCount`).
 */
export interface TechnicalCommitteeEvent_Proposed {
    __kind: 'Proposed'
    account: AccountId32
    proposalIndex: number
    proposalHash: H256
    threshold: number
}

/**
 * A motion (given hash) has been voted on by given account, leaving
 * a tally (yes votes and no votes given respectively as `MemberCount`).
 */
export interface TechnicalCommitteeEvent_Voted {
    __kind: 'Voted'
    account: AccountId32
    proposalHash: H256
    voted: boolean
    yes: number
    no: number
}

/**
 * Event for the System pallet.
 */
export type SystemEvent = SystemEvent_CodeUpdated | SystemEvent_ExtrinsicFailed | SystemEvent_ExtrinsicSuccess | SystemEvent_KilledAccount | SystemEvent_NewAccount | SystemEvent_Remarked | SystemEvent_UpgradeAuthorized

/**
 * `:code` was updated.
 */
export interface SystemEvent_CodeUpdated {
    __kind: 'CodeUpdated'
}

/**
 * An extrinsic failed.
 */
export interface SystemEvent_ExtrinsicFailed {
    __kind: 'ExtrinsicFailed'
    dispatchError: DispatchError
    dispatchInfo: DispatchInfo
}

/**
 * An extrinsic completed successfully.
 */
export interface SystemEvent_ExtrinsicSuccess {
    __kind: 'ExtrinsicSuccess'
    dispatchInfo: DispatchInfo
}

/**
 * An account was reaped.
 */
export interface SystemEvent_KilledAccount {
    __kind: 'KilledAccount'
    account: AccountId32
}

/**
 * A new account was created.
 */
export interface SystemEvent_NewAccount {
    __kind: 'NewAccount'
    account: AccountId32
}

/**
 * On on-chain remark happened.
 */
export interface SystemEvent_Remarked {
    __kind: 'Remarked'
    sender: AccountId32
    hash: H256
}

/**
 * An upgrade was authorized.
 */
export interface SystemEvent_UpgradeAuthorized {
    __kind: 'UpgradeAuthorized'
    codeHash: H256
    checkVersion: boolean
}

export interface DispatchInfo {
    weight: Weight
    class: DispatchClass
    paysFee: Pays
}

export type Pays = Pays_No | Pays_Yes

export interface Pays_No {
    __kind: 'No'
}

export interface Pays_Yes {
    __kind: 'Yes'
}

export type DispatchClass = DispatchClass_Mandatory | DispatchClass_Normal | DispatchClass_Operational

export interface DispatchClass_Mandatory {
    __kind: 'Mandatory'
}

export interface DispatchClass_Normal {
    __kind: 'Normal'
}

export interface DispatchClass_Operational {
    __kind: 'Operational'
}

/**
 * The `Event` enum of this pallet
 */
export type SudoEvent = SudoEvent_KeyChanged | SudoEvent_KeyRemoved | SudoEvent_Sudid | SudoEvent_SudoAsDone

/**
 * The sudo key has been updated.
 */
export interface SudoEvent_KeyChanged {
    __kind: 'KeyChanged'
    /**
     * The old sudo key (if one was previously set).
     */
    old?: (AccountId32 | undefined)
    /**
     * The new sudo key (if one was set).
     */
    new: AccountId32
}

/**
 * The key was permanently removed.
 */
export interface SudoEvent_KeyRemoved {
    __kind: 'KeyRemoved'
}

/**
 * A sudo call just took place.
 */
export interface SudoEvent_Sudid {
    __kind: 'Sudid'
    /**
     * The result of the call made by the sudo user.
     */
    sudoResult: Result<null, DispatchError>
}

/**
 * A [sudo_as](Pallet::sudo_as) call just took place.
 */
export interface SudoEvent_SudoAsDone {
    __kind: 'SudoAsDone'
    /**
     * The result of the call made by the sudo user.
     */
    sudoResult: Result<null, DispatchError>
}

/**
 * The `Event` enum of this pallet
 */
export type SessionEvent = SessionEvent_NewSession

/**
 * New session has happened. Note that the argument is the session index, not the
 * block number as the type might suggest.
 */
export interface SessionEvent_NewSession {
    __kind: 'NewSession'
    sessionIndex: number
}

/**
 * Events type.
 */
export type SchedulerEvent = SchedulerEvent_CallUnavailable | SchedulerEvent_Canceled | SchedulerEvent_Dispatched | SchedulerEvent_PeriodicFailed | SchedulerEvent_PermanentlyOverweight | SchedulerEvent_RetryCancelled | SchedulerEvent_RetryFailed | SchedulerEvent_RetrySet | SchedulerEvent_Scheduled

/**
 * The call for the provided hash was not found so the task has been aborted.
 */
export interface SchedulerEvent_CallUnavailable {
    __kind: 'CallUnavailable'
    task: [number, number]
    id?: (Bytes | undefined)
}

/**
 * Canceled some task.
 */
export interface SchedulerEvent_Canceled {
    __kind: 'Canceled'
    when: number
    index: number
}

/**
 * Dispatched some task.
 */
export interface SchedulerEvent_Dispatched {
    __kind: 'Dispatched'
    task: [number, number]
    id?: (Bytes | undefined)
    result: Result<null, DispatchError>
}

/**
 * The given task was unable to be renewed since the agenda is full at that block.
 */
export interface SchedulerEvent_PeriodicFailed {
    __kind: 'PeriodicFailed'
    task: [number, number]
    id?: (Bytes | undefined)
}

/**
 * The given task can never be executed since it is overweight.
 */
export interface SchedulerEvent_PermanentlyOverweight {
    __kind: 'PermanentlyOverweight'
    task: [number, number]
    id?: (Bytes | undefined)
}

/**
 * Cancel a retry configuration for some task.
 */
export interface SchedulerEvent_RetryCancelled {
    __kind: 'RetryCancelled'
    task: [number, number]
    id?: (Bytes | undefined)
}

/**
 * The given task was unable to be retried since the agenda is full at that block or there
 * was not enough weight to reschedule it.
 */
export interface SchedulerEvent_RetryFailed {
    __kind: 'RetryFailed'
    task: [number, number]
    id?: (Bytes | undefined)
}

/**
 * Set a retry configuration for some task.
 */
export interface SchedulerEvent_RetrySet {
    __kind: 'RetrySet'
    task: [number, number]
    id?: (Bytes | undefined)
    period: number
    retries: number
}

/**
 * Scheduled some task.
 */
export interface SchedulerEvent_Scheduled {
    __kind: 'Scheduled'
    when: number
    index: number
}

/**
 * The `Event` enum of this pallet
 */
export type SafeModeEvent = SafeModeEvent_CannotDeposit | SafeModeEvent_CannotRelease | SafeModeEvent_DepositPlaced | SafeModeEvent_DepositReleased | SafeModeEvent_DepositSlashed | SafeModeEvent_Entered | SafeModeEvent_Exited | SafeModeEvent_Extended

/**
 * Could not hold funds for entering or extending the safe-mode.
 * 
 * This error comes from the underlying `Currency`.
 */
export interface SafeModeEvent_CannotDeposit {
    __kind: 'CannotDeposit'
}

/**
 * Could not release funds for entering or extending the safe-mode.
 * 
 * This error comes from the underlying `Currency`.
 */
export interface SafeModeEvent_CannotRelease {
    __kind: 'CannotRelease'
}

/**
 * An account reserved funds for either entering or extending the safe-mode.
 */
export interface SafeModeEvent_DepositPlaced {
    __kind: 'DepositPlaced'
    account: AccountId32
    amount: bigint
}

/**
 * An account had a reserve released that was reserved.
 */
export interface SafeModeEvent_DepositReleased {
    __kind: 'DepositReleased'
    account: AccountId32
    amount: bigint
}

/**
 * An account had reserve slashed that was reserved.
 */
export interface SafeModeEvent_DepositSlashed {
    __kind: 'DepositSlashed'
    account: AccountId32
    amount: bigint
}

/**
 * The safe-mode was entered until inclusively this block.
 */
export interface SafeModeEvent_Entered {
    __kind: 'Entered'
    until: number
}

/**
 * Exited the safe-mode for a specific reason.
 */
export interface SafeModeEvent_Exited {
    __kind: 'Exited'
    reason: ExitReason
}

/**
 * The safe-mode was extended until inclusively this block.
 */
export interface SafeModeEvent_Extended {
    __kind: 'Extended'
    until: number
}

export type ExitReason = ExitReason_Force | ExitReason_Timeout

export interface ExitReason_Force {
    __kind: 'Force'
}

export interface ExitReason_Timeout {
    __kind: 'Timeout'
}

/**
 * The `Event` enum of this pallet
 */
export type ProxyEvent = ProxyEvent_Announced | ProxyEvent_ProxyAdded | ProxyEvent_ProxyExecuted | ProxyEvent_ProxyRemoved | ProxyEvent_PureCreated

/**
 * An announcement was placed to make a call in the future.
 */
export interface ProxyEvent_Announced {
    __kind: 'Announced'
    real: AccountId32
    proxy: AccountId32
    callHash: H256
}

/**
 * A proxy was added.
 */
export interface ProxyEvent_ProxyAdded {
    __kind: 'ProxyAdded'
    delegator: AccountId32
    delegatee: AccountId32
    proxyType: ProxyType
    delay: number
}

/**
 * A proxy was executed correctly, with the given.
 */
export interface ProxyEvent_ProxyExecuted {
    __kind: 'ProxyExecuted'
    result: Result<null, DispatchError>
}

/**
 * A proxy was removed.
 */
export interface ProxyEvent_ProxyRemoved {
    __kind: 'ProxyRemoved'
    delegator: AccountId32
    delegatee: AccountId32
    proxyType: ProxyType
    delay: number
}

/**
 * A pure account has been created by new proxy with given
 * disambiguation index and proxy type.
 */
export interface ProxyEvent_PureCreated {
    __kind: 'PureCreated'
    pure: AccountId32
    who: AccountId32
    proxyType: ProxyType
    disambiguationIndex: number
}

/**
 * The `Event` enum of this pallet
 */
export type PreimageEvent = PreimageEvent_Cleared | PreimageEvent_Noted | PreimageEvent_Requested

/**
 * A preimage has ben cleared.
 */
export interface PreimageEvent_Cleared {
    __kind: 'Cleared'
    hash: H256
}

/**
 * A preimage has been noted.
 */
export interface PreimageEvent_Noted {
    __kind: 'Noted'
    hash: H256
}

/**
 * A preimage has been requested.
 */
export interface PreimageEvent_Requested {
    __kind: 'Requested'
    hash: H256
}

/**
 * The pallet's event type
 */
export type PoolsEvent = PoolsEvent_PoolsMutated

/**
 * Pools storage was modified by [`PoolsMutation`]
 */
export interface PoolsEvent_PoolsMutated {
    __kind: 'PoolsMutated'
    value: PoolsMutation
}

/**
 * The `Event` enum of this pallet
 */
export type PolkadotXcmEvent = PolkadotXcmEvent_AssetsClaimed | PolkadotXcmEvent_AssetsTrapped | PolkadotXcmEvent_Attempted | PolkadotXcmEvent_FeesPaid | PolkadotXcmEvent_InvalidQuerier | PolkadotXcmEvent_InvalidQuerierVersion | PolkadotXcmEvent_InvalidResponder | PolkadotXcmEvent_InvalidResponderVersion | PolkadotXcmEvent_Notified | PolkadotXcmEvent_NotifyDecodeFailed | PolkadotXcmEvent_NotifyDispatchError | PolkadotXcmEvent_NotifyOverweight | PolkadotXcmEvent_NotifyTargetMigrationFail | PolkadotXcmEvent_NotifyTargetSendFail | PolkadotXcmEvent_ResponseReady | PolkadotXcmEvent_ResponseTaken | PolkadotXcmEvent_Sent | PolkadotXcmEvent_SupportedVersionChanged | PolkadotXcmEvent_UnexpectedResponse | PolkadotXcmEvent_VersionChangeNotified | PolkadotXcmEvent_VersionMigrationFinished | PolkadotXcmEvent_VersionNotifyRequested | PolkadotXcmEvent_VersionNotifyStarted | PolkadotXcmEvent_VersionNotifyUnrequested

/**
 * Some assets have been claimed from an asset trap
 */
export interface PolkadotXcmEvent_AssetsClaimed {
    __kind: 'AssetsClaimed'
    hash: H256
    origin: V4Location
    assets: VersionedAssets
}

/**
 * Some assets have been placed in an asset trap.
 */
export interface PolkadotXcmEvent_AssetsTrapped {
    __kind: 'AssetsTrapped'
    hash: H256
    origin: V4Location
    assets: VersionedAssets
}

/**
 * Execution of an XCM message was attempted.
 */
export interface PolkadotXcmEvent_Attempted {
    __kind: 'Attempted'
    outcome: V4Outcome
}

/**
 * Fees were paid from a location for an operation (often for using `SendXcm`).
 */
export interface PolkadotXcmEvent_FeesPaid {
    __kind: 'FeesPaid'
    paying: V4Location
    fees: V4Asset[]
}

/**
 * Expected query response has been received but the querier location of the response does
 * not match the expected. The query remains registered for a later, valid, response to
 * be received and acted upon.
 */
export interface PolkadotXcmEvent_InvalidQuerier {
    __kind: 'InvalidQuerier'
    origin: V4Location
    queryId: bigint
    expectedQuerier: V4Location
    maybeActualQuerier?: (V4Location | undefined)
}

/**
 * Expected query response has been received but the expected querier location placed in
 * storage by this runtime previously cannot be decoded. The query remains registered.
 * 
 * This is unexpected (since a location placed in storage in a previously executing
 * runtime should be readable prior to query timeout) and dangerous since the possibly
 * valid response will be dropped. Manual governance intervention is probably going to be
 * needed.
 */
export interface PolkadotXcmEvent_InvalidQuerierVersion {
    __kind: 'InvalidQuerierVersion'
    origin: V4Location
    queryId: bigint
}

/**
 * Expected query response has been received but the origin location of the response does
 * not match that expected. The query remains registered for a later, valid, response to
 * be received and acted upon.
 */
export interface PolkadotXcmEvent_InvalidResponder {
    __kind: 'InvalidResponder'
    origin: V4Location
    queryId: bigint
    expectedLocation?: (V4Location | undefined)
}

/**
 * Expected query response has been received but the expected origin location placed in
 * storage by this runtime previously cannot be decoded. The query remains registered.
 * 
 * This is unexpected (since a location placed in storage in a previously executing
 * runtime should be readable prior to query timeout) and dangerous since the possibly
 * valid response will be dropped. Manual governance intervention is probably going to be
 * needed.
 */
export interface PolkadotXcmEvent_InvalidResponderVersion {
    __kind: 'InvalidResponderVersion'
    origin: V4Location
    queryId: bigint
}

/**
 * Query response has been received and query is removed. The registered notification has
 * been dispatched and executed successfully.
 */
export interface PolkadotXcmEvent_Notified {
    __kind: 'Notified'
    queryId: bigint
    palletIndex: number
    callIndex: number
}

/**
 * Query response has been received and query is removed. The dispatch was unable to be
 * decoded into a `Call`; this might be due to dispatch function having a signature which
 * is not `(origin, QueryId, Response)`.
 */
export interface PolkadotXcmEvent_NotifyDecodeFailed {
    __kind: 'NotifyDecodeFailed'
    queryId: bigint
    palletIndex: number
    callIndex: number
}

/**
 * Query response has been received and query is removed. There was a general error with
 * dispatching the notification call.
 */
export interface PolkadotXcmEvent_NotifyDispatchError {
    __kind: 'NotifyDispatchError'
    queryId: bigint
    palletIndex: number
    callIndex: number
}

/**
 * Query response has been received and query is removed. The registered notification
 * could not be dispatched because the dispatch weight is greater than the maximum weight
 * originally budgeted by this runtime for the query result.
 */
export interface PolkadotXcmEvent_NotifyOverweight {
    __kind: 'NotifyOverweight'
    queryId: bigint
    palletIndex: number
    callIndex: number
    actualWeight: Weight
    maxBudgetedWeight: Weight
}

/**
 * A given location which had a version change subscription was dropped owing to an error
 * migrating the location to our new XCM format.
 */
export interface PolkadotXcmEvent_NotifyTargetMigrationFail {
    __kind: 'NotifyTargetMigrationFail'
    location: VersionedLocation
    queryId: bigint
}

/**
 * A given location which had a version change subscription was dropped owing to an error
 * sending the notification to it.
 */
export interface PolkadotXcmEvent_NotifyTargetSendFail {
    __kind: 'NotifyTargetSendFail'
    location: V4Location
    queryId: bigint
    error: V3Error
}

/**
 * Query response has been received and is ready for taking with `take_response`. There is
 * no registered notification call.
 */
export interface PolkadotXcmEvent_ResponseReady {
    __kind: 'ResponseReady'
    queryId: bigint
    response: V4Response
}

/**
 * Received query response has been read and removed.
 */
export interface PolkadotXcmEvent_ResponseTaken {
    __kind: 'ResponseTaken'
    queryId: bigint
}

/**
 * A XCM message was sent.
 */
export interface PolkadotXcmEvent_Sent {
    __kind: 'Sent'
    origin: V4Location
    destination: V4Location
    message: V4Instruction[]
    messageId: Bytes
}

/**
 * The supported version of a location has been changed. This might be through an
 * automatic notification or a manual intervention.
 */
export interface PolkadotXcmEvent_SupportedVersionChanged {
    __kind: 'SupportedVersionChanged'
    location: V4Location
    version: number
}

/**
 * Query response received which does not match a registered query. This may be because a
 * matching query was never registered, it may be because it is a duplicate response, or
 * because the query timed out.
 */
export interface PolkadotXcmEvent_UnexpectedResponse {
    __kind: 'UnexpectedResponse'
    origin: V4Location
    queryId: bigint
}

/**
 * An XCM version change notification message has been attempted to be sent.
 * 
 * The cost of sending it (borne by the chain) is included.
 */
export interface PolkadotXcmEvent_VersionChangeNotified {
    __kind: 'VersionChangeNotified'
    destination: V4Location
    result: number
    cost: V4Asset[]
    messageId: Bytes
}

/**
 * A XCM version migration finished.
 */
export interface PolkadotXcmEvent_VersionMigrationFinished {
    __kind: 'VersionMigrationFinished'
    version: number
}

/**
 * We have requested that a remote chain send us XCM version change notifications.
 */
export interface PolkadotXcmEvent_VersionNotifyRequested {
    __kind: 'VersionNotifyRequested'
    destination: V4Location
    cost: V4Asset[]
    messageId: Bytes
}

/**
 * A remote has requested XCM version change notification from us and we have honored it.
 * A version information message is sent to them and its cost is included.
 */
export interface PolkadotXcmEvent_VersionNotifyStarted {
    __kind: 'VersionNotifyStarted'
    destination: V4Location
    cost: V4Asset[]
    messageId: Bytes
}

/**
 * We have requested that a remote chain stops sending us XCM version change
 * notifications.
 */
export interface PolkadotXcmEvent_VersionNotifyUnrequested {
    __kind: 'VersionNotifyUnrequested'
    destination: V4Location
    cost: V4Asset[]
    messageId: Bytes
}

export type V4Outcome = V4Outcome_Complete | V4Outcome_Error | V4Outcome_Incomplete

export interface V4Outcome_Complete {
    __kind: 'Complete'
    used: Weight
}

export interface V4Outcome_Error {
    __kind: 'Error'
    error: V3Error
}

export interface V4Outcome_Incomplete {
    __kind: 'Incomplete'
    used: Weight
    error: V3Error
}

/**
 * The `Event` enum of this pallet
 */
export type ParachainSystemEvent = ParachainSystemEvent_DownwardMessagesProcessed | ParachainSystemEvent_DownwardMessagesReceived | ParachainSystemEvent_UpwardMessageSent | ParachainSystemEvent_ValidationFunctionApplied | ParachainSystemEvent_ValidationFunctionDiscarded | ParachainSystemEvent_ValidationFunctionStored

/**
 * Downward messages were processed using the given weight.
 */
export interface ParachainSystemEvent_DownwardMessagesProcessed {
    __kind: 'DownwardMessagesProcessed'
    weightUsed: Weight
    dmqHead: H256
}

/**
 * Some downward messages have been received and will be processed.
 */
export interface ParachainSystemEvent_DownwardMessagesReceived {
    __kind: 'DownwardMessagesReceived'
    count: number
}

/**
 * An upward message was sent to the relay chain.
 */
export interface ParachainSystemEvent_UpwardMessageSent {
    __kind: 'UpwardMessageSent'
    messageHash?: (Bytes | undefined)
}

/**
 * The validation function was applied as of the contained relay chain block number.
 */
export interface ParachainSystemEvent_ValidationFunctionApplied {
    __kind: 'ValidationFunctionApplied'
    relayChainBlockNum: number
}

/**
 * The relay-chain aborted the upgrade process.
 */
export interface ParachainSystemEvent_ValidationFunctionDiscarded {
    __kind: 'ValidationFunctionDiscarded'
}

/**
 * The validation function has been scheduled to apply.
 */
export interface ParachainSystemEvent_ValidationFunctionStored {
    __kind: 'ValidationFunctionStored'
}

/**
 * The `Event` enum of this pallet
 */
export type OrmlXcmEvent = OrmlXcmEvent_Sent

/**
 * XCM message sent. \[to, message\]
 */
export interface OrmlXcmEvent_Sent {
    __kind: 'Sent'
    to: V4Location
    message: V4Instruction[]
}

/**
 * The `Event` enum of this pallet
 */
export type MultisigEvent = MultisigEvent_MultisigApproval | MultisigEvent_MultisigCancelled | MultisigEvent_MultisigExecuted | MultisigEvent_NewMultisig

/**
 * A multisig operation has been approved by someone.
 */
export interface MultisigEvent_MultisigApproval {
    __kind: 'MultisigApproval'
    approving: AccountId32
    timepoint: Timepoint
    multisig: AccountId32
    callHash: Bytes
}

/**
 * A multisig operation has been cancelled.
 */
export interface MultisigEvent_MultisigCancelled {
    __kind: 'MultisigCancelled'
    cancelling: AccountId32
    timepoint: Timepoint
    multisig: AccountId32
    callHash: Bytes
}

/**
 * A multisig operation has been executed.
 */
export interface MultisigEvent_MultisigExecuted {
    __kind: 'MultisigExecuted'
    approving: AccountId32
    timepoint: Timepoint
    multisig: AccountId32
    callHash: Bytes
    result: Result<null, DispatchError>
}

/**
 * A new multisig operation has begun.
 */
export interface MultisigEvent_NewMultisig {
    __kind: 'NewMultisig'
    approving: AccountId32
    multisig: AccountId32
    callHash: Bytes
}

/**
 * The `Event` enum of this pallet
 */
export type MultiTokensEvent = MultiTokensEvent_Approved | MultiTokensEvent_AttributeRemoved | MultiTokensEvent_AttributeSet | MultiTokensEvent_BalanceSet | MultiTokensEvent_Burned | MultiTokensEvent_ClaimTokensCompleted | MultiTokensEvent_ClaimTokensInitiated | MultiTokensEvent_ClaimedCollections | MultiTokensEvent_ClaimedTokens | MultiTokensEvent_CollectionAccountCreated | MultiTokensEvent_CollectionAccountDestroyed | MultiTokensEvent_CollectionAccountUpdated | MultiTokensEvent_CollectionCreated | MultiTokensEvent_CollectionDestroyed | MultiTokensEvent_CollectionMutated | MultiTokensEvent_CollectionTransferCancelled | MultiTokensEvent_CollectionTransferred | MultiTokensEvent_CollectionUpdated | MultiTokensEvent_Deposit | MultiTokensEvent_Frozen | MultiTokensEvent_Infused | MultiTokensEvent_MigrationStep | MultiTokensEvent_Minted | MultiTokensEvent_MovedReserves | MultiTokensEvent_NextCollectionIdUpdated | MultiTokensEvent_ReserveRepatriated | MultiTokensEvent_Reserved | MultiTokensEvent_Slashed | MultiTokensEvent_Thawed | MultiTokensEvent_TokenAccountCreated | MultiTokensEvent_TokenAccountDepositUpdated | MultiTokensEvent_TokenAccountDestroyed | MultiTokensEvent_TokenAccountUpdated | MultiTokensEvent_TokenCreated | MultiTokensEvent_TokenDestroyed | MultiTokensEvent_TokenMutated | MultiTokensEvent_TokenUpdated | MultiTokensEvent_Transferred | MultiTokensEvent_Unapproved | MultiTokensEvent_Unreserved | MultiTokensEvent_Withdraw

/**
 * An approval took place. If `token_id` is `None`, it applies to the whole collection.
 */
export interface MultiTokensEvent_Approved {
    __kind: 'Approved'
    /**
     * The collection that was approved
     */
    collectionId: bigint
    /**
     * The token that was approved
     */
    tokenId?: (bigint | undefined)
    /**
     * The account that made the approval
     */
    owner: AccountId32
    /**
     * The account that was approved to operate
     */
    operator: AccountId32
    /**
     * The amount approved for
     */
    amount?: (bigint | undefined)
    /**
     * The expiration of the approval
     */
    expiration?: (number | undefined)
}

/**
 * An attribute has been removed
 */
export interface MultiTokensEvent_AttributeRemoved {
    __kind: 'AttributeRemoved'
    /**
     * collectionId of collection modified
     */
    collectionId: bigint
    /**
     * tokenid of token modified
     */
    tokenId?: (bigint | undefined)
    /**
     * key of attribute cleared
     */
    key: Bytes
}

/**
 * New attribute has been set
 */
export interface MultiTokensEvent_AttributeSet {
    __kind: 'AttributeSet'
    /**
     * collectionId of collection modified
     */
    collectionId: bigint
    /**
     * [`TokenId`](Config::TokenId) of [`Token`](ep_multi_tokens::Token) modified
     */
    tokenId?: (bigint | undefined)
    /**
     * key of attribute set
     */
    key: Bytes
    /**
     * value of attribute set
     */
    value: Bytes
}

/**
 * The balance of an account was set
 */
export interface MultiTokensEvent_BalanceSet {
    __kind: 'BalanceSet'
    /**
     * The [`CollectionId`](Config::CollectionId) for which balance was set
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) for which balance was set
     */
    tokenId: bigint
    /**
     * The [`AccountId`](frame_system::Config::AccountId) that balance was set for
     */
    accountId: AccountId32
    /**
     * The balance of the account
     */
    balance: bigint
    /**
     * The reserved balance of the account
     */
    reservedBalance: bigint
}

/**
 * Units of a token were burned
 */
export interface MultiTokensEvent_Burned {
    __kind: 'Burned'
    /**
     * collection id of tokens burned
     */
    collectionId: bigint
    /**
     * the token id that was burned
     */
    tokenId: bigint
    /**
     * the account the tokens were burned from
     */
    accountId: AccountId32
    /**
     * The amount that was burned for each token_id
     */
    amount: bigint
}

/**
 * Finished claiming the tokens
 */
export interface MultiTokensEvent_ClaimTokensCompleted {
    __kind: 'ClaimTokensCompleted'
    /**
     * The account that received the tokens
     */
    destination: AccountId32
    /**
     * The ethereum address that initiated the claim
     */
    ethereumAddress: H160
}

/**
 * Claims tokens initiated
 */
export interface MultiTokensEvent_ClaimTokensInitiated {
    __kind: 'ClaimTokensInitiated'
    /**
     * The account that will receive the tokens
     */
    accountId: AccountId32
    /**
     * The ethereum address
     */
    ethereumAddress: H160
}

/**
 * Collections were claimed
 */
export interface MultiTokensEvent_ClaimedCollections {
    __kind: 'ClaimedCollections'
    /**
     * The account that received the claim
     */
    accountId: AccountId32
    /**
     * The ethereum address
     */
    ethereumAddress: H160
    /**
     * The collection ids that were claimed
     */
    collectionIds: bigint[]
}

/**
 * Tokens were claimed
 */
export interface MultiTokensEvent_ClaimedTokens {
    __kind: 'ClaimedTokens'
    /**
     * The account that received the tokens
     */
    accountId: AccountId32
    /**
     * The ethereum address
     */
    ethereumAddress: H160
    /**
     * The asset ids that were claimed
     */
    assetIds: AssetIdWithEth[]
    /**
     * This is true if there are still more tokens to claim
     */
    moreTokensRemain: boolean
}

/**
 * A new collection account was created
 */
export interface MultiTokensEvent_CollectionAccountCreated {
    __kind: 'CollectionAccountCreated'
    /**
     * The [`CollectionId`](Config::CollectionId) for which the account is created
     */
    collectionId: bigint
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the account
     */
    accountId: AccountId32
}

/**
 * A collection account was destroyed
 */
export interface MultiTokensEvent_CollectionAccountDestroyed {
    __kind: 'CollectionAccountDestroyed'
    /**
     * The [`CollectionId`](Config::CollectionId) of the destroyed account
     */
    collectionId: bigint
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the destroyed account
     */
    accountId: AccountId32
}

/**
 * TokenAccount storage was set to `value`
 */
export interface MultiTokensEvent_CollectionAccountUpdated {
    __kind: 'CollectionAccountUpdated'
    /**
     * The [`CollectionId`](Config::CollectionId) for which the value is set
     */
    collectionId: bigint
    /**
     * The [`AccountId`](frame_system::Config::AccountId) that owned the token account
     */
    accountId: AccountId32
    /**
     * new value of TokenAccount storage
     */
    value?: (CollectionAccount | undefined)
}

/**
 * A new collection was created
 */
export interface MultiTokensEvent_CollectionCreated {
    __kind: 'CollectionCreated'
    /**
     * The id of the [`Collection`](ep_multi_tokens::Collection)
     */
    collectionId: bigint
    /**
     * The owner of the [`Collection`](ep_multi_tokens::Collection)
     */
    owner: AccountId32
}

/**
 * A collection was destroyed.
 */
export interface MultiTokensEvent_CollectionDestroyed {
    __kind: 'CollectionDestroyed'
    /**
     * id of collection destroyed
     */
    collectionId: bigint
    /**
     * The [`AccountId`](frame_system::Config::AccountId) that destroyed the collection
     */
    caller: AccountId32
}

/**
 * A collection was mutated
 */
export interface MultiTokensEvent_CollectionMutated {
    __kind: 'CollectionMutated'
    /**
     * [`CollectionId`](Config::CollectionId) of the
     * [`Collection`](ep_multi_tokens::Collection)
     */
    collectionId: bigint
    /**
     * The mutation that was applied to the collection
     */
    mutation: DefaultCollectionMutation
}

/**
 * A pending collection transfer was cancelled
 */
export interface MultiTokensEvent_CollectionTransferCancelled {
    __kind: 'CollectionTransferCancelled'
    /**
     * The collection id of the cancelled transfer
     */
    collectionId: bigint
}

/**
 * Collection ownership was transferred
 */
export interface MultiTokensEvent_CollectionTransferred {
    __kind: 'CollectionTransferred'
    /**
     * The collection that was transferred
     */
    collectionId: bigint
    /**
     * The new owner of the collection
     */
    newOwner: AccountId32
}

/**
 * Collection storage was set to `value`
 */
export interface MultiTokensEvent_CollectionUpdated {
    __kind: 'CollectionUpdated'
    /**
     * The [`CollectionId`](Config::CollectionId) for which the value is set
     */
    collectionId: bigint
    /**
     * new value of Collection storage
     */
    value?: (Collection | undefined)
}

/**
 * Token units were deposited
 */
export interface MultiTokensEvent_Deposit {
    __kind: 'Deposit'
    /**
     * The [`CollectionId`](Config::CollectionId) of the tokens deposited
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) of the tokens deposited
     */
    tokenId: bigint
    /**
     * The [`AccountId`](frame_system::Config::AccountId) deposited to
     */
    accountId: AccountId32
    /**
     * The amount of tokens deposited
     */
    amount: bigint
}

/**
 * Collection, token or account was frozen
 */
export interface MultiTokensEvent_Frozen {
    __kind: 'Frozen'
    value: Freeze
}

/**
 * The token was infused with ENJ
 */
export interface MultiTokensEvent_Infused {
    __kind: 'Infused'
    /**
     * The collection that was infused
     */
    collectionId: bigint
    /**
     * The token that was infused
     */
    tokenId: bigint
    /**
     * The account that infused the token
     */
    accountId: AccountId32
    /**
     * The amount that was infused
     */
    amount: bigint
}

/**
 * The migration step has completed
 */
export interface MultiTokensEvent_MigrationStep {
    __kind: 'MigrationStep'
    /**
     * The number of items processed within this step
     */
    itemsProcessed: number
    /**
     * The migration phase
     */
    phase: number
}

/**
 * Units of a token were minted
 */
export interface MultiTokensEvent_Minted {
    __kind: 'Minted'
    /**
     * [`CollectionId`](Config::CollectionId) of minted token
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) minted
     */
    tokenId: bigint
    /**
     * issuer of minted token
     */
    issuer: RootOrSigned
    /**
     * The receiver of the token
     */
    recipient: AccountId32
    /**
     * the amount of units minted
     */
    amount: bigint
}

/**
 * Reserved token units were moved
 */
export interface MultiTokensEvent_MovedReserves {
    __kind: 'MovedReserves'
    /**
     * The [`CollectionId`](Config::CollectionId) in which token was moved
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) that was moved
     */
    tokenId: bigint
    /**
     * The account that reserves were moved from
     */
    source: AccountId32
    /**
     * The account that received the moved reserves
     */
    destination: AccountId32
    /**
     * The amount that was moved
     */
    amount: bigint
    /**
     * The identifier of the moved reserves
     */
    reserveId?: (Bytes | undefined)
}

/**
 * NextCollectionId storage was set to `collection_id`
 */
export interface MultiTokensEvent_NextCollectionIdUpdated {
    __kind: 'NextCollectionIdUpdated'
    collectionId: bigint
}

/**
 * Reserved token units were transferred
 */
export interface MultiTokensEvent_ReserveRepatriated {
    __kind: 'ReserveRepatriated'
    /**
     * The [`CollectionId`](Config::CollectionId) in which token was moved
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) that was moved
     */
    tokenId: bigint
    /**
     * The account that reserves were moved from
     */
    source: AccountId32
    /**
     * The account that received the moved reserves
     */
    destination: AccountId32
    /**
     * The amount that was moved
     */
    amount: bigint
    /**
     * The identifier of the moved reserves
     */
    reserveId?: (Bytes | undefined)
}

/**
 * Token units were reserved
 */
export interface MultiTokensEvent_Reserved {
    __kind: 'Reserved'
    /**
     * The collection in which token was reserved
     */
    collectionId: bigint
    /**
     * The token that was reserved
     */
    tokenId: bigint
    /**
     * The account that reserved the tokens
     */
    accountId: AccountId32
    /**
     * The amount that was reserved
     */
    amount: bigint
    /**
     * The identifier of the reserves
     */
    reserveId?: (Bytes | undefined)
}

/**
 * An amount of tokens were slashed from account
 */
export interface MultiTokensEvent_Slashed {
    __kind: 'Slashed'
    /**
     * The [`CollectionId`](Config::CollectionId) of the tokens slashed
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) of the tokens slashed
     */
    tokenId: bigint
    /**
     * The [`AccountId`](frame_system::Config::AccountId) slashed
     */
    accountId: AccountId32
    /**
     * The amount of tokens slashed
     */
    amount: bigint
}

/**
 * Collection, token or account was unfrozen
 */
export interface MultiTokensEvent_Thawed {
    __kind: 'Thawed'
    value: Freeze
}

/**
 * A new token account was created
 */
export interface MultiTokensEvent_TokenAccountCreated {
    __kind: 'TokenAccountCreated'
    /**
     * The [`CollectionId`](Config::CollectionId) for which the account is created
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) for which the account is created
     */
    tokenId: bigint
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the account
     */
    accountId: AccountId32
    /**
     * The balance that this account holds
     */
    balance: bigint
}

/**
 * The deposit for number of accounts supported by a token changed
 */
export interface MultiTokensEvent_TokenAccountDepositUpdated {
    __kind: 'TokenAccountDepositUpdated'
    /**
     * The [`CollectionId`](Config::CollectionId) for which the account is created
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) fof the destroyed account
     */
    tokenId: bigint
    /**
     * The account that deposited or removed deposit
     */
    depositor: AccountId32
    /**
     * The change in the number of accounts
     */
    deltaAccountCount: number
}

/**
 * A token account was destroyed
 */
export interface MultiTokensEvent_TokenAccountDestroyed {
    __kind: 'TokenAccountDestroyed'
    /**
     * The [`CollectionId`](Config::CollectionId) for which the account is created
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) fof the destroyed account
     */
    tokenId: bigint
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the destroyed account
     */
    accountId: AccountId32
}

/**
 * TokenAccount storage was set to `value`
 */
export interface MultiTokensEvent_TokenAccountUpdated {
    __kind: 'TokenAccountUpdated'
    /**
     * The [`CollectionId`](Config::CollectionId) for which the value is set
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) of the destroyed account
     */
    tokenId: bigint
    /**
     * The [`AccountId`](frame_system::Config::AccountId) that owned the token account
     */
    accountId: AccountId32
    /**
     * new value of TokenAccount storage
     */
    value?: (TokenAccount | undefined)
}

/**
 * A token was created
 */
export interface MultiTokensEvent_TokenCreated {
    __kind: 'TokenCreated'
    /**
     * The [`CollectionId`](Config::CollectionId) minted
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) minted
     */
    tokenId: bigint
    /**
     * issuer of minted [`Token`](ep_multi_tokens::Token)
     */
    issuer: RootOrSigned
    /**
     * the initial supply of the [`Token`](ep_multi_tokens::Token)
     */
    initialSupply: bigint
}

/**
 * A token was destroyed
 */
export interface MultiTokensEvent_TokenDestroyed {
    __kind: 'TokenDestroyed'
    /**
     * The [`CollectionId`](Config::CollectionId) destroyed
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) destroyed
     */
    tokenId: bigint
    /**
     * the [`AccountId`](frame_system::Config::AccountId) that destroyed the
     * [`Token`](ep_multi_tokens::Token)
     */
    caller: AccountId32
}

/**
 * A token was mutated
 */
export interface MultiTokensEvent_TokenMutated {
    __kind: 'TokenMutated'
    /**
     * The [`CollectionId`](Config::CollectionId) [`Token`](ep_multi_tokens::Token)
     * belongs to
     */
    collectionId: bigint
    /**
     * Id of the [`Token`](ep_multi_tokens::Token) mutated
     */
    tokenId: bigint
    /**
     * mutation that was applied to the [`Token`](ep_multi_tokens::Token)
     */
    mutation: DefaultTokenMutation
}

/**
 * Token storage was set to `value`
 */
export interface MultiTokensEvent_TokenUpdated {
    __kind: 'TokenUpdated'
    /**
     * The [`CollectionId`](Config::CollectionId) for which the value is set
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) for which the value is set
     */
    tokenId: bigint
    /**
     * new value of Token storage
     */
    value?: (Token | undefined)
}

/**
 * Units of a token were transferred
 */
export interface MultiTokensEvent_Transferred {
    __kind: 'Transferred'
    /**
     * collection_id of transferred collection
     */
    collectionId: bigint
    /**
     * [`TokenId`](Config::TokenId) transferred
     */
    tokenId: bigint
    /**
     * The [`AccountId`](frame_system::Config::AccountId) that performed the transfer
     */
    operator: AccountId32
    /**
     * transaction sender
     */
    from: AccountId32
    /**
     * transaction recipient
     */
    to: AccountId32
    /**
     * number of units transferred
     */
    amount: bigint
}

/**
 * An unapproval took place. If `token_id` is `None`, it applies to the collection.
 */
export interface MultiTokensEvent_Unapproved {
    __kind: 'Unapproved'
    /**
     * The collection that was unapproved
     */
    collectionId: bigint
    /**
     * The token that was unapproved
     */
    tokenId?: (bigint | undefined)
    /**
     * The account that `operator` was unapproved for
     */
    owner: AccountId32
    /**
     * The account that was unapproved to operate
     */
    operator: AccountId32
}

/**
 * Token units were unreserved
 */
export interface MultiTokensEvent_Unreserved {
    __kind: 'Unreserved'
    /**
     * The [`CollectionId`](Config::CollectionId) in which token was unreserved
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) that was unreserved
     */
    tokenId: bigint
    /**
     * The account that unreserved the tokens
     */
    accountId: AccountId32
    /**
     * The amount that was unreserved
     */
    amount: bigint
    /**
     * The identifier of the unreserved tokens
     */
    reserveId?: (Bytes | undefined)
}

/**
 * Token units were withdrawn
 */
export interface MultiTokensEvent_Withdraw {
    __kind: 'Withdraw'
    /**
     * The [`CollectionId`](Config::CollectionId) of the tokens withdrawn
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) of the tokens withdrawn
     */
    tokenId: bigint
    /**
     * The [`AccountId`](frame_system::Config::AccountId) withdrawn from
     */
    accountId: AccountId32
    /**
     * The amount of tokens withdrawn
     */
    amount: bigint
}

export type RootOrSigned = RootOrSigned_Root | RootOrSigned_Signed

export interface RootOrSigned_Root {
    __kind: 'Root'
}

export interface RootOrSigned_Signed {
    __kind: 'Signed'
    value: AccountId32
}

export interface AssetIdWithEth {
    ethereumCollectionId: bigint
    collectionId: bigint
    tokenId: bigint
}

/**
 * The `Event` enum of this pallet
 */
export type MigrationsEvent = MigrationsEvent_HistoricCleared | MigrationsEvent_MigrationAdvanced | MigrationsEvent_MigrationCompleted | MigrationsEvent_MigrationFailed | MigrationsEvent_MigrationSkipped | MigrationsEvent_UpgradeCompleted | MigrationsEvent_UpgradeFailed | MigrationsEvent_UpgradeStarted

/**
 * The set of historical migrations has been cleared.
 */
export interface MigrationsEvent_HistoricCleared {
    __kind: 'HistoricCleared'
    /**
     * Should be passed to `clear_historic` in a successive call.
     */
    nextCursor?: (Bytes | undefined)
}

/**
 * A migration progressed.
 */
export interface MigrationsEvent_MigrationAdvanced {
    __kind: 'MigrationAdvanced'
    /**
     * The index of the migration within the [`Config::Migrations`] list.
     */
    index: number
    /**
     * The number of blocks that this migration took so far.
     */
    took: number
}

/**
 * A Migration completed.
 */
export interface MigrationsEvent_MigrationCompleted {
    __kind: 'MigrationCompleted'
    /**
     * The index of the migration within the [`Config::Migrations`] list.
     */
    index: number
    /**
     * The number of blocks that this migration took so far.
     */
    took: number
}

/**
 * A Migration failed.
 * 
 * This implies that the whole upgrade failed and governance intervention is required.
 */
export interface MigrationsEvent_MigrationFailed {
    __kind: 'MigrationFailed'
    /**
     * The index of the migration within the [`Config::Migrations`] list.
     */
    index: number
    /**
     * The number of blocks that this migration took so far.
     */
    took: number
}

/**
 * A migration was skipped since it was already executed in the past.
 */
export interface MigrationsEvent_MigrationSkipped {
    __kind: 'MigrationSkipped'
    /**
     * The index of the skipped migration within the [`Config::Migrations`] list.
     */
    index: number
}

/**
 * The current runtime upgrade completed.
 * 
 * This implies that all of its migrations completed successfully as well.
 */
export interface MigrationsEvent_UpgradeCompleted {
    __kind: 'UpgradeCompleted'
}

/**
 * Runtime upgrade failed.
 * 
 * This is very bad and will require governance intervention.
 */
export interface MigrationsEvent_UpgradeFailed {
    __kind: 'UpgradeFailed'
}

/**
 * A Runtime upgrade started.
 * 
 * Its end is indicated by `UpgradeCompleted` or `UpgradeFailed`.
 */
export interface MigrationsEvent_UpgradeStarted {
    __kind: 'UpgradeStarted'
    /**
     * The number of migrations that this upgrade contains.
     * 
     * This can be used to design a progress indicator in combination with counting the
     * `MigrationCompleted` and `MigrationSkipped` events.
     */
    migrations: number
}

/**
 * The `Event` enum of this pallet
 */
export type MessageQueueEvent = MessageQueueEvent_OverweightEnqueued | MessageQueueEvent_PageReaped | MessageQueueEvent_Processed | MessageQueueEvent_ProcessingFailed

/**
 * Message placed in overweight queue.
 */
export interface MessageQueueEvent_OverweightEnqueued {
    __kind: 'OverweightEnqueued'
    /**
     * The `blake2_256` hash of the message.
     */
    id: Bytes
    /**
     * The queue of the message.
     */
    origin: AggregateMessageOrigin
    /**
     * The page of the message.
     */
    pageIndex: number
    /**
     * The index of the message within the page.
     */
    messageIndex: number
}

/**
 * This page was reaped.
 */
export interface MessageQueueEvent_PageReaped {
    __kind: 'PageReaped'
    /**
     * The queue of the page.
     */
    origin: AggregateMessageOrigin
    /**
     * The index of the page.
     */
    index: number
}

/**
 * Message is processed.
 */
export interface MessageQueueEvent_Processed {
    __kind: 'Processed'
    /**
     * The `blake2_256` hash of the message.
     */
    id: H256
    /**
     * The queue of the message.
     */
    origin: AggregateMessageOrigin
    /**
     * How much weight was used to process the message.
     */
    weightUsed: Weight
    /**
     * Whether the message was processed.
     * 
     * Note that this does not mean that the underlying `MessageProcessor` was internally
     * successful. It *solely* means that the MQ pallet will treat this as a success
     * condition and discard the message. Any internal error needs to be emitted as events
     * by the `MessageProcessor`.
     */
    success: boolean
}

/**
 * Message discarded due to an error in the `MessageProcessor` (usually a format error).
 */
export interface MessageQueueEvent_ProcessingFailed {
    __kind: 'ProcessingFailed'
    /**
     * The `blake2_256` hash of the message.
     */
    id: H256
    /**
     * The queue of the message.
     */
    origin: AggregateMessageOrigin
    /**
     * The error that occurred.
     * 
     * This error is pretty opaque. More fine-grained errors need to be emitted as events
     * by the `MessageProcessor`.
     */
    error: ProcessMessageError
}

export type ProcessMessageError = ProcessMessageError_BadFormat | ProcessMessageError_Corrupt | ProcessMessageError_Overweight | ProcessMessageError_Unsupported | ProcessMessageError_Yield

export interface ProcessMessageError_BadFormat {
    __kind: 'BadFormat'
}

export interface ProcessMessageError_Corrupt {
    __kind: 'Corrupt'
}

export interface ProcessMessageError_Overweight {
    __kind: 'Overweight'
    value: Weight
}

export interface ProcessMessageError_Unsupported {
    __kind: 'Unsupported'
}

export interface ProcessMessageError_Yield {
    __kind: 'Yield'
}

/**
 * The `Event` enum of this pallet
 */
export type MatrixXcmEvent = MatrixXcmEvent_MinimumWeightUpdated | MatrixXcmEvent_XcmTransferFailed

/**
 * Xcm fee and weight updated
 */
export interface MatrixXcmEvent_MinimumWeightUpdated {
    __kind: 'MinimumWeightUpdated'
    value: MinimumWeightFeePair
}

/**
 * XCM transfer failed
 */
export interface MatrixXcmEvent_XcmTransferFailed {
    __kind: 'XcmTransferFailed'
    value: DispatchError
}

/**
 * The `Event` enum of this pallet
 */
export type MatrixUtilityEvent = MatrixUtilityEvent_BatchDispatched | MatrixUtilityEvent_BatchFailed | MatrixUtilityEvent_BatchPartiallyDispatched

/**
 * Batch of calls dispatched without errors.
 */
export interface MatrixUtilityEvent_BatchDispatched {
    __kind: 'BatchDispatched'
}

/**
 * Batch of calls did not disptach completely.
 * Index and error of the failing dispatch call is provided.
 */
export interface MatrixUtilityEvent_BatchFailed {
    __kind: 'BatchFailed'
    index: number
    error: DispatchError
}

/**
 * Batch of calls dispatched, but some calls resulted in error.
 * Indexes and errors of failing dispatch calls are provided.
 */
export interface MatrixUtilityEvent_BatchPartiallyDispatched {
    __kind: 'BatchPartiallyDispatched'
    value: [number, DispatchError][]
}

/**
 * The Event for this pallet
 */
export type MarketplaceEvent = MarketplaceEvent_AuctionFinalized | MarketplaceEvent_BidPlaced | MarketplaceEvent_CounterOfferAnswered | MarketplaceEvent_CounterOfferPlaced | MarketplaceEvent_CounterOfferRemoved | MarketplaceEvent_ExpiredListingRemoved | MarketplaceEvent_ListingCancelled | MarketplaceEvent_ListingCreated | MarketplaceEvent_ListingFilled | MarketplaceEvent_MigrationStep | MarketplaceEvent_ProtocolFeeSet

/**
 * An auction was finalized
 */
export interface MarketplaceEvent_AuctionFinalized {
    __kind: 'AuctionFinalized'
    /**
     * The listing id
     */
    listingId: H256
    /**
     * The bid that won
     */
    winningBid?: (Bid | undefined)
    /**
     * Amount paid as protocol fee
     */
    protocolFee: bigint
    /**
     * Amount that went to royalties
     */
    royalty: bigint
}

/**
 * A bid was placed
 */
export interface MarketplaceEvent_BidPlaced {
    __kind: 'BidPlaced'
    /**
     * ID of the listing
     */
    listingId: H256
    /**
     * The bid that was placed
     */
    bid: Bid
}

/**
 * A response was issued for a counter offer
 */
export interface MarketplaceEvent_CounterOfferAnswered {
    __kind: 'CounterOfferAnswered'
    /**
     * Id of the listing
     */
    listingId: H256
    /**
     * The account that created the counter offer
     */
    creator: AccountId32
    /**
     * The response to the counter offer
     */
    response: CounterOfferResponse
}

/**
 * A counter offer was placed on a listing
 */
export interface MarketplaceEvent_CounterOfferPlaced {
    __kind: 'CounterOfferPlaced'
    /**
     * Id of the listing
     */
    listingId: H256
    /**
     * The counter offer
     */
    counterOffer: CounterOffer
}

/**
 * A counter offer was removed
 */
export interface MarketplaceEvent_CounterOfferRemoved {
    __kind: 'CounterOfferRemoved'
    /**
     * Id of the listing
     */
    listingId: H256
    /**
     * The account that created the counter offer
     */
    creator: AccountId32
}

/**
 * An expired listing was removed
 */
export interface MarketplaceEvent_ExpiredListingRemoved {
    __kind: 'ExpiredListingRemoved'
    /**
     * Id for the listing
     */
    listingId: H256
}

/**
 * A listing was cancelled
 */
export interface MarketplaceEvent_ListingCancelled {
    __kind: 'ListingCancelled'
    /**
     * Id for the listing
     */
    listingId: H256
}

/**
 * A listing was created
 */
export interface MarketplaceEvent_ListingCreated {
    __kind: 'ListingCreated'
    /**
     * Id for the listing
     */
    listingId: H256
    /**
     * The listing
     */
    listing: Listing
}

/**
 * A listing was filled or partially filled
 */
export interface MarketplaceEvent_ListingFilled {
    __kind: 'ListingFilled'
    /**
     * ID of the listing
     */
    listingId: H256
    /**
     * account that filled the listing
     */
    buyer: AccountId32
    /**
     * The price it was filled with
     */
    price: bigint
    /**
     * The amount that was filled
     */
    amountFilled: bigint
    /**
     * Amount remaining to be filled
     */
    amountRemaining: bigint
    /**
     * Amount paid as protocol fee
     */
    protocolFee: bigint
    /**
     * Amount that went to royalties
     */
    royalty: bigint
}

/**
 * The migration step has completed
 */
export interface MarketplaceEvent_MigrationStep {
    __kind: 'MigrationStep'
    /**
     * The number of items processed within this step
     */
    itemsProcessed: number
    /**
     * The migration phase
     */
    phase: number
}

/**
 * Protocol fee was set
 */
export interface MarketplaceEvent_ProtocolFeeSet {
    __kind: 'ProtocolFeeSet'
    /**
     * The new protocol fee
     */
    protocolFee: Perbill
}

export interface Listing {
    creator: AccountId32
    makeAssetId: AssetId
    takeAssetId: AssetId
    amount: bigint
    price: bigint
    minReceived: bigint
    feeSide: FeeSide
    creationBlock: number
    deposit: Deposit
    salt: Bytes
    data: ListingData
    state: ListingState
}

export type ListingState = ListingState_Auction | ListingState_FixedPrice | ListingState_Offer

export interface ListingState_Auction {
    __kind: 'Auction'
    value: AuctionState
}

export interface ListingState_FixedPrice {
    __kind: 'FixedPrice'
    amountFilled: bigint
}

export interface ListingState_Offer {
    __kind: 'Offer'
    value: OfferState
}

export interface OfferState {
    counterOfferCount: number
}

export interface AuctionState {
    highBid?: (Bid | undefined)
}

export type FeeSide = FeeSide_Make | FeeSide_NoFee | FeeSide_Take

export interface FeeSide_Make {
    __kind: 'Make'
}

export interface FeeSide_NoFee {
    __kind: 'NoFee'
}

export interface FeeSide_Take {
    __kind: 'Take'
}

export interface CounterOffer {
    sellerPrice: bigint
    buyerPrice?: (bigint | undefined)
    deposit: Deposit
}

export interface Bid {
    bidder: AccountId32
    price: bigint
}

/**
 * The `Event` enum of this pallet
 */
export type IdentityEvent = IdentityEvent_AuthorityAdded | IdentityEvent_AuthorityRemoved | IdentityEvent_DanglingUsernameRemoved | IdentityEvent_IdentityCleared | IdentityEvent_IdentityKilled | IdentityEvent_IdentitySet | IdentityEvent_JudgementGiven | IdentityEvent_JudgementRequested | IdentityEvent_JudgementUnrequested | IdentityEvent_PreapprovalExpired | IdentityEvent_PrimaryUsernameSet | IdentityEvent_RegistrarAdded | IdentityEvent_SubIdentityAdded | IdentityEvent_SubIdentityRemoved | IdentityEvent_SubIdentityRevoked | IdentityEvent_UsernameQueued | IdentityEvent_UsernameSet

/**
 * A username authority was added.
 */
export interface IdentityEvent_AuthorityAdded {
    __kind: 'AuthorityAdded'
    authority: AccountId32
}

/**
 * A username authority was removed.
 */
export interface IdentityEvent_AuthorityRemoved {
    __kind: 'AuthorityRemoved'
    authority: AccountId32
}

/**
 * A dangling username (as in, a username corresponding to an account that has removed its
 * identity) has been removed.
 */
export interface IdentityEvent_DanglingUsernameRemoved {
    __kind: 'DanglingUsernameRemoved'
    who: AccountId32
    username: Bytes
}

/**
 * A name was cleared, and the given balance returned.
 */
export interface IdentityEvent_IdentityCleared {
    __kind: 'IdentityCleared'
    who: AccountId32
    deposit: bigint
}

/**
 * A name was removed and the given balance slashed.
 */
export interface IdentityEvent_IdentityKilled {
    __kind: 'IdentityKilled'
    who: AccountId32
    deposit: bigint
}

/**
 * A name was set or reset (which will remove all judgements).
 */
export interface IdentityEvent_IdentitySet {
    __kind: 'IdentitySet'
    who: AccountId32
}

/**
 * A judgement was given by a registrar.
 */
export interface IdentityEvent_JudgementGiven {
    __kind: 'JudgementGiven'
    target: AccountId32
    registrarIndex: number
}

/**
 * A judgement was asked from a registrar.
 */
export interface IdentityEvent_JudgementRequested {
    __kind: 'JudgementRequested'
    who: AccountId32
    registrarIndex: number
}

/**
 * A judgement request was retracted.
 */
export interface IdentityEvent_JudgementUnrequested {
    __kind: 'JudgementUnrequested'
    who: AccountId32
    registrarIndex: number
}

/**
 * A queued username passed its expiration without being claimed and was removed.
 */
export interface IdentityEvent_PreapprovalExpired {
    __kind: 'PreapprovalExpired'
    whose: AccountId32
}

/**
 * A username was set as a primary and can be looked up from `who`.
 */
export interface IdentityEvent_PrimaryUsernameSet {
    __kind: 'PrimaryUsernameSet'
    who: AccountId32
    username: Bytes
}

/**
 * A registrar was added.
 */
export interface IdentityEvent_RegistrarAdded {
    __kind: 'RegistrarAdded'
    registrarIndex: number
}

/**
 * A sub-identity was added to an identity and the deposit paid.
 */
export interface IdentityEvent_SubIdentityAdded {
    __kind: 'SubIdentityAdded'
    sub: AccountId32
    main: AccountId32
    deposit: bigint
}

/**
 * A sub-identity was removed from an identity and the deposit freed.
 */
export interface IdentityEvent_SubIdentityRemoved {
    __kind: 'SubIdentityRemoved'
    sub: AccountId32
    main: AccountId32
    deposit: bigint
}

/**
 * A sub-identity was cleared, and the given deposit repatriated from the
 * main identity account to the sub-identity account.
 */
export interface IdentityEvent_SubIdentityRevoked {
    __kind: 'SubIdentityRevoked'
    sub: AccountId32
    main: AccountId32
    deposit: bigint
}

/**
 * A username was queued, but `who` must accept it prior to `expiration`.
 */
export interface IdentityEvent_UsernameQueued {
    __kind: 'UsernameQueued'
    who: AccountId32
    username: Bytes
    expiration: number
}

/**
 * A username was set for `who`.
 */
export interface IdentityEvent_UsernameSet {
    __kind: 'UsernameSet'
    who: AccountId32
    username: Bytes
}

/**
 * The `Event` enum of this pallet
 */
export type FuelTanksEvent = FuelTanksEvent_AccountAdded | FuelTanksEvent_AccountRemoved | FuelTanksEvent_AccountRuleDataRemoved | FuelTanksEvent_CallDispatched | FuelTanksEvent_ConsumptionSet | FuelTanksEvent_DispatchFailed | FuelTanksEvent_FreezeStateMutated | FuelTanksEvent_FuelTankCreated | FuelTanksEvent_FuelTankDestroyed | FuelTanksEvent_FuelTankMutated | FuelTanksEvent_MigrationStep | FuelTanksEvent_RuleSetInserted | FuelTanksEvent_RuleSetRemoved

/**
 * An account was added to a [`FuelTank`]
 */
export interface FuelTanksEvent_AccountAdded {
    __kind: 'AccountAdded'
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
     */
    tankId: AccountId32
    /**
     * The [`AccountId`](frame_system::Config::AccountId) that was added
     */
    userId: AccountId32
    /**
     * The deposit reserved by the [`FuelTank`] for this account
     */
    tankDeposit: bigint
    /**
     * The deposit reserved by the user for this account
     */
    userDeposit: bigint
    /**
     * The amount the fuel tank has transferred to this account
     */
    totalReceived: bigint
}

/**
 * An account was removed from a [`FuelTank`]
 */
export interface FuelTanksEvent_AccountRemoved {
    __kind: 'AccountRemoved'
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
     */
    tankId: AccountId32
    /**
     * The [`AccountId`](frame_system::Config::AccountId) that was removed
     */
    userId: AccountId32
}

/**
 * Account data of [`AccountId`](frame_system::Config::AccountId) was removed from
 * [`RuleSetId`](Config::RuleSetId)
 */
export interface FuelTanksEvent_AccountRuleDataRemoved {
    __kind: 'AccountRuleDataRemoved'
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
     */
    tankId: AccountId32
    /**
     * The [`AccountId`](frame_system::Config::AccountId) that was removed
     */
    userId: AccountId32
    /**
     * The id of the rule set that was removed
     */
    ruleSetId: number
    /**
     * The [`DispatchRuleKind`] that was removed
     */
    ruleKind: DispatchRuleKind
}

/**
 * A call was dispatched through a [`FuelTank`].
 */
export interface FuelTanksEvent_CallDispatched {
    __kind: 'CallDispatched'
    /**
     * The [`AccountId`](frame_system::Config::AccountId) that dispatched the call
     */
    caller: AccountId32
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
     */
    tankId: AccountId32
}

/**
 * The consumption for an account was set for a rule set on a [`FuelTank`]
 */
export interface FuelTanksEvent_ConsumptionSet {
    __kind: 'ConsumptionSet'
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
     */
    tankId: AccountId32
    /**
     * The possible user [`AccountId`](frame_system::Config::AccountId) whose consumption
     * was set
     */
    userId?: (AccountId32 | undefined)
    /**
     * The [`RuleSetId`](Config::RuleSetId)
     */
    ruleSetId: number
    /**
     * The new [`Consumption`](crate::Consumption)
     */
    consumption: Consumption
}

/**
 * The dispatch of a call has failed
 */
export interface FuelTanksEvent_DispatchFailed {
    __kind: 'DispatchFailed'
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
     */
    tankId: AccountId32
    /**
     * The [`AccountId`](frame_system::Config::AccountId) that dispatched the call
     */
    caller: AccountId32
    /**
     * The error
     */
    error: DispatchError
}

/**
 * The freeze state change for fuel tank or its rule set was executed in `on_finalize`
 */
export interface FuelTanksEvent_FreezeStateMutated {
    __kind: 'FreezeStateMutated'
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
     */
    tankId: AccountId32
    /**
     * The possible [`RuleSetId`](Config::RuleSetId)
     */
    ruleSetId?: (number | undefined)
    /**
     * The new `is_frozen` state
     */
    isFrozen: boolean
}

/**
 * A new [`FuelTank`] was created.
 */
export interface FuelTanksEvent_FuelTankCreated {
    __kind: 'FuelTankCreated'
    /**
     * The [`AccountId`](frame_system::Config::AccountId) that owns the [`FuelTank`]
     */
    owner: AccountId32
    /**
     * The name of the [`FuelTank`]
     */
    name: Bytes
    /**
     * The account id of the [`FuelTank`]
     */
    tankId: AccountId32
}

/**
 * A [`FuelTank`] was destroyed
 */
export interface FuelTanksEvent_FuelTankDestroyed {
    __kind: 'FuelTankDestroyed'
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
     */
    tankId: AccountId32
}

/**
 * A [`FuelTank`] was mutated
 */
export interface FuelTanksEvent_FuelTankMutated {
    __kind: 'FuelTankMutated'
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
     */
    tankId: AccountId32
    /**
     * The mutation that was applied
     */
    mutation: DefaultTankMutation
}

/**
 * The migration step has completed
 */
export interface FuelTanksEvent_MigrationStep {
    __kind: 'MigrationStep'
    /**
     * The number of items processed within this step
     */
    itemsProcessed: number
    /**
     * The migration phase
     */
    phase: number
}

/**
 * A new rule set was added to [`FuelTank`]
 */
export interface FuelTanksEvent_RuleSetInserted {
    __kind: 'RuleSetInserted'
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
     */
    tankId: AccountId32
    /**
     * The id of the rule set that was added
     */
    ruleSetId: number
}

/**
 * A rule set was removed from [`FuelTank`]
 */
export interface FuelTanksEvent_RuleSetRemoved {
    __kind: 'RuleSetRemoved'
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
     */
    tankId: AccountId32
    /**
     * The id of the rule set that was removed
     */
    ruleSetId: number
}

/**
 * The pallet's event type.
 */
export type ExtrinsicPauseEvent = ExtrinsicPauseEvent_ExtrinsicPaused | ExtrinsicPauseEvent_ExtrinsicResumed | ExtrinsicPauseEvent_PalletPaused | ExtrinsicPauseEvent_PalletResumed

/**
 * Extrinsic is paused.
 */
export interface ExtrinsicPauseEvent_ExtrinsicPaused {
    __kind: 'ExtrinsicPaused'
    palletName: Bytes
    extrinsicName: Bytes
}

/**
 * Extrinsic is resumed
 */
export interface ExtrinsicPauseEvent_ExtrinsicResumed {
    __kind: 'ExtrinsicResumed'
    palletName: Bytes
    extrinsicName: Bytes
}

/**
 * All pallet extrinsics are paused.
 */
export interface ExtrinsicPauseEvent_PalletPaused {
    __kind: 'PalletPaused'
    palletName: Bytes
}

/**
 * All pallet extrinsics are resumed.
 */
export interface ExtrinsicPauseEvent_PalletResumed {
    __kind: 'PalletResumed'
    palletName: Bytes
}

/**
 * The `Event` enum of this pallet
 */
export type DmpQueueEvent = DmpQueueEvent_CleanedSome | DmpQueueEvent_Completed | DmpQueueEvent_CompletedExport | DmpQueueEvent_CompletedOverweightExport | DmpQueueEvent_ExportFailed | DmpQueueEvent_ExportOverweightFailed | DmpQueueEvent_Exported | DmpQueueEvent_ExportedOverweight | DmpQueueEvent_StartedCleanup | DmpQueueEvent_StartedExport | DmpQueueEvent_StartedOverweightExport

/**
 * Some debris was cleaned up.
 */
export interface DmpQueueEvent_CleanedSome {
    __kind: 'CleanedSome'
    keysRemoved: number
}

/**
 * The cleanup of remaining pallet storage completed.
 */
export interface DmpQueueEvent_Completed {
    __kind: 'Completed'
    error: boolean
}

/**
 * The export of pages completed.
 */
export interface DmpQueueEvent_CompletedExport {
    __kind: 'CompletedExport'
}

/**
 * The export of overweight messages completed.
 */
export interface DmpQueueEvent_CompletedOverweightExport {
    __kind: 'CompletedOverweightExport'
}

/**
 * The export of a page failed.
 * 
 * This should never be emitted.
 */
export interface DmpQueueEvent_ExportFailed {
    __kind: 'ExportFailed'
    page: number
}

/**
 * The export of an overweight message failed.
 * 
 * This should never be emitted.
 */
export interface DmpQueueEvent_ExportOverweightFailed {
    __kind: 'ExportOverweightFailed'
    index: bigint
}

/**
 * The export of a page completed.
 */
export interface DmpQueueEvent_Exported {
    __kind: 'Exported'
    page: number
}

/**
 * The export of an overweight message completed.
 */
export interface DmpQueueEvent_ExportedOverweight {
    __kind: 'ExportedOverweight'
    index: bigint
}

/**
 * The cleanup of remaining pallet storage started.
 */
export interface DmpQueueEvent_StartedCleanup {
    __kind: 'StartedCleanup'
}

/**
 * The export of pages started.
 */
export interface DmpQueueEvent_StartedExport {
    __kind: 'StartedExport'
}

/**
 * The export of overweight messages started.
 */
export interface DmpQueueEvent_StartedOverweightExport {
    __kind: 'StartedOverweightExport'
}

/**
 * The `Event` enum of this pallet
 */
export type DemocracyEvent = DemocracyEvent_Blacklisted | DemocracyEvent_Cancelled | DemocracyEvent_Delegated | DemocracyEvent_ExternalTabled | DemocracyEvent_MetadataCleared | DemocracyEvent_MetadataSet | DemocracyEvent_MetadataTransferred | DemocracyEvent_NotPassed | DemocracyEvent_Passed | DemocracyEvent_ProposalCanceled | DemocracyEvent_Proposed | DemocracyEvent_Seconded | DemocracyEvent_Started | DemocracyEvent_Tabled | DemocracyEvent_Undelegated | DemocracyEvent_Vetoed | DemocracyEvent_Voted

/**
 * A proposal_hash has been blacklisted permanently.
 */
export interface DemocracyEvent_Blacklisted {
    __kind: 'Blacklisted'
    proposalHash: H256
}

/**
 * A referendum has been cancelled.
 */
export interface DemocracyEvent_Cancelled {
    __kind: 'Cancelled'
    refIndex: number
}

/**
 * An account has delegated their vote to another account.
 */
export interface DemocracyEvent_Delegated {
    __kind: 'Delegated'
    who: AccountId32
    target: AccountId32
}

/**
 * An external proposal has been tabled.
 */
export interface DemocracyEvent_ExternalTabled {
    __kind: 'ExternalTabled'
}

/**
 * Metadata for a proposal or a referendum has been cleared.
 */
export interface DemocracyEvent_MetadataCleared {
    __kind: 'MetadataCleared'
    /**
     * Metadata owner.
     */
    owner: MetadataOwner
    /**
     * Preimage hash.
     */
    hash: H256
}

/**
 * Metadata for a proposal or a referendum has been set.
 */
export interface DemocracyEvent_MetadataSet {
    __kind: 'MetadataSet'
    /**
     * Metadata owner.
     */
    owner: MetadataOwner
    /**
     * Preimage hash.
     */
    hash: H256
}

/**
 * Metadata has been transferred to new owner.
 */
export interface DemocracyEvent_MetadataTransferred {
    __kind: 'MetadataTransferred'
    /**
     * Previous metadata owner.
     */
    prevOwner: MetadataOwner
    /**
     * New metadata owner.
     */
    owner: MetadataOwner
    /**
     * Preimage hash.
     */
    hash: H256
}

/**
 * A proposal has been rejected by referendum.
 */
export interface DemocracyEvent_NotPassed {
    __kind: 'NotPassed'
    refIndex: number
}

/**
 * A proposal has been approved by referendum.
 */
export interface DemocracyEvent_Passed {
    __kind: 'Passed'
    refIndex: number
}

/**
 * A proposal got canceled.
 */
export interface DemocracyEvent_ProposalCanceled {
    __kind: 'ProposalCanceled'
    propIndex: number
}

/**
 * A motion has been proposed by a public account.
 */
export interface DemocracyEvent_Proposed {
    __kind: 'Proposed'
    proposalIndex: number
    deposit: bigint
}

/**
 * An account has secconded a proposal
 */
export interface DemocracyEvent_Seconded {
    __kind: 'Seconded'
    seconder: AccountId32
    propIndex: number
}

/**
 * A referendum has begun.
 */
export interface DemocracyEvent_Started {
    __kind: 'Started'
    refIndex: number
    threshold: VoteThreshold
}

/**
 * A public proposal has been tabled for referendum vote.
 */
export interface DemocracyEvent_Tabled {
    __kind: 'Tabled'
    proposalIndex: number
    deposit: bigint
}

/**
 * An account has cancelled a previous delegation operation.
 */
export interface DemocracyEvent_Undelegated {
    __kind: 'Undelegated'
    account: AccountId32
}

/**
 * An external proposal has been vetoed.
 */
export interface DemocracyEvent_Vetoed {
    __kind: 'Vetoed'
    who: AccountId32
    proposalHash: H256
    until: number
}

/**
 * An account has voted in a referendum
 */
export interface DemocracyEvent_Voted {
    __kind: 'Voted'
    voter: AccountId32
    refIndex: number
    vote: AccountVote
}

export type VoteThreshold = VoteThreshold_SimpleMajority | VoteThreshold_SuperMajorityAgainst | VoteThreshold_SuperMajorityApprove

export interface VoteThreshold_SimpleMajority {
    __kind: 'SimpleMajority'
}

export interface VoteThreshold_SuperMajorityAgainst {
    __kind: 'SuperMajorityAgainst'
}

export interface VoteThreshold_SuperMajorityApprove {
    __kind: 'SuperMajorityApprove'
}

/**
 * The `Event` enum of this pallet
 */
export type CumulusXcmEvent = CumulusXcmEvent_ExecutedDownward | CumulusXcmEvent_InvalidFormat | CumulusXcmEvent_UnsupportedVersion

/**
 * Downward message executed with the given outcome.
 * \[ id, outcome \]
 */
export interface CumulusXcmEvent_ExecutedDownward {
    __kind: 'ExecutedDownward'
    value: [Bytes, V4Outcome]
}

/**
 * Downward message is invalid XCM.
 * \[ id \]
 */
export interface CumulusXcmEvent_InvalidFormat {
    __kind: 'InvalidFormat'
    value: Bytes
}

/**
 * Downward message is unsupported version of XCM.
 * \[ id \]
 */
export interface CumulusXcmEvent_UnsupportedVersion {
    __kind: 'UnsupportedVersion'
    value: Bytes
}

/**
 * The `Event` enum of this pallet
 */
export type CouncilEvent = CouncilEvent_Approved | CouncilEvent_Closed | CouncilEvent_Disapproved | CouncilEvent_Executed | CouncilEvent_MemberExecuted | CouncilEvent_Proposed | CouncilEvent_Voted

/**
 * A motion was approved by the required threshold.
 */
export interface CouncilEvent_Approved {
    __kind: 'Approved'
    proposalHash: H256
}

/**
 * A proposal was closed because its threshold was reached or after its duration was up.
 */
export interface CouncilEvent_Closed {
    __kind: 'Closed'
    proposalHash: H256
    yes: number
    no: number
}

/**
 * A motion was not approved by the required threshold.
 */
export interface CouncilEvent_Disapproved {
    __kind: 'Disapproved'
    proposalHash: H256
}

/**
 * A motion was executed; result will be `Ok` if it returned without error.
 */
export interface CouncilEvent_Executed {
    __kind: 'Executed'
    proposalHash: H256
    result: Result<null, DispatchError>
}

/**
 * A single member did some action; result will be `Ok` if it returned without error.
 */
export interface CouncilEvent_MemberExecuted {
    __kind: 'MemberExecuted'
    proposalHash: H256
    result: Result<null, DispatchError>
}

/**
 * A motion (given hash) has been proposed (by given account) with a threshold (given
 * `MemberCount`).
 */
export interface CouncilEvent_Proposed {
    __kind: 'Proposed'
    account: AccountId32
    proposalIndex: number
    proposalHash: H256
    threshold: number
}

/**
 * A motion (given hash) has been voted on by given account, leaving
 * a tally (yes votes and no votes given respectively as `MemberCount`).
 */
export interface CouncilEvent_Voted {
    __kind: 'Voted'
    account: AccountId32
    proposalHash: H256
    voted: boolean
    yes: number
    no: number
}

/**
 * The `Event` enum of this pallet
 */
export type CommunityPoolEvent = CommunityPoolEvent_AssetSpendApproved | CommunityPoolEvent_AssetSpendVoided | CommunityPoolEvent_Awarded | CommunityPoolEvent_Burnt | CommunityPoolEvent_Deposit | CommunityPoolEvent_Paid | CommunityPoolEvent_PaymentFailed | CommunityPoolEvent_Proposed | CommunityPoolEvent_Rejected | CommunityPoolEvent_Rollover | CommunityPoolEvent_SpendApproved | CommunityPoolEvent_SpendProcessed | CommunityPoolEvent_Spending | CommunityPoolEvent_UpdatedInactive

/**
 * A new asset spend proposal has been approved.
 */
export interface CommunityPoolEvent_AssetSpendApproved {
    __kind: 'AssetSpendApproved'
    index: number
    amount: bigint
    beneficiary: AccountId32
    validFrom: number
    expireAt: number
}

/**
 * An approved spend was voided.
 */
export interface CommunityPoolEvent_AssetSpendVoided {
    __kind: 'AssetSpendVoided'
    index: number
}

/**
 * Some funds have been allocated.
 */
export interface CommunityPoolEvent_Awarded {
    __kind: 'Awarded'
    proposalIndex: number
    award: bigint
    account: AccountId32
}

/**
 * Some of our funds have been burnt.
 */
export interface CommunityPoolEvent_Burnt {
    __kind: 'Burnt'
    burntFunds: bigint
}

/**
 * Some funds have been deposited.
 */
export interface CommunityPoolEvent_Deposit {
    __kind: 'Deposit'
    value: bigint
}

/**
 * A payment happened.
 */
export interface CommunityPoolEvent_Paid {
    __kind: 'Paid'
    index: number
}

/**
 * A payment failed and can be retried.
 */
export interface CommunityPoolEvent_PaymentFailed {
    __kind: 'PaymentFailed'
    index: number
}

/**
 * New proposal.
 */
export interface CommunityPoolEvent_Proposed {
    __kind: 'Proposed'
    proposalIndex: number
}

/**
 * A proposal was rejected; funds were slashed.
 */
export interface CommunityPoolEvent_Rejected {
    __kind: 'Rejected'
    proposalIndex: number
    slashed: bigint
}

/**
 * Spending has finished; this is the amount that rolls over until next spend.
 */
export interface CommunityPoolEvent_Rollover {
    __kind: 'Rollover'
    rolloverBalance: bigint
}

/**
 * A new spend proposal has been approved.
 */
export interface CommunityPoolEvent_SpendApproved {
    __kind: 'SpendApproved'
    proposalIndex: number
    amount: bigint
    beneficiary: AccountId32
}

/**
 * A spend was processed and removed from the storage. It might have been successfully
 * paid or it may have expired.
 */
export interface CommunityPoolEvent_SpendProcessed {
    __kind: 'SpendProcessed'
    index: number
}

/**
 * We have ended a spend period and will now allocate funds.
 */
export interface CommunityPoolEvent_Spending {
    __kind: 'Spending'
    budgetRemaining: bigint
}

/**
 * The inactive funds of the pallet have been updated.
 */
export interface CommunityPoolEvent_UpdatedInactive {
    __kind: 'UpdatedInactive'
    reactivated: bigint
    deactivated: bigint
}

/**
 * The `Event` enum of this pallet
 */
export type CollatorStakingEvent = CollatorStakingEvent_CandidateJoined | CollatorStakingEvent_CandidateRemoved | CollatorStakingEvent_CollatorSelected | CollatorStakingEvent_NewInvulnerables | CollatorStakingEvent_Nominated | CollatorStakingEvent_NominationRemoved | CollatorStakingEvent_RoundFinalized

/**
 * A new candidate joined the list of candidates.
 */
export interface CollatorStakingEvent_CandidateJoined {
    __kind: 'CandidateJoined'
    /**
     * accountId of the new candidate
     */
    accountId: AccountId32
    /**
     * amount staked
     */
    amount: bigint
    /**
     * The percentage cut on the rewards that goes to the nominators
     */
    rewardsCut: Perbill
}

/**
 * Candidate was removed.
 */
export interface CollatorStakingEvent_CandidateRemoved {
    __kind: 'CandidateRemoved'
    /**
     * [`AccountId`](frame_system::Config::AccountId) of candidate
     */
    accountId: AccountId32
}

/**
 * A candidate has been selected to become a collator for the current round.
 */
export interface CollatorStakingEvent_CollatorSelected {
    __kind: 'CollatorSelected'
    /**
     * [`AccountId`](frame_system::Config::AccountId) of collator
     */
    accountId: AccountId32
}

/**
 * A new list of invulnerables has been set by root.
 */
export interface CollatorStakingEvent_NewInvulnerables {
    __kind: 'NewInvulnerables'
    /**
     * list of [`AccountId`](frame_system::Config::AccountId) of invulnerables
     */
    new: AccountId32[]
}

/**
 * A new nomination was registered for a specific candidate.
 */
export interface CollatorStakingEvent_Nominated {
    __kind: 'Nominated'
    /**
     * the account that was nominated
     */
    accountId: AccountId32
    /**
     * the collator connected to the account
     */
    collatorId: AccountId32
    /**
     * amount staked from collator
     */
    amount: bigint
}

/**
 * Nomination was removed.
 */
export interface CollatorStakingEvent_NominationRemoved {
    __kind: 'NominationRemoved'
    /**
     * the account removed from nominated list
     */
    accountId: AccountId32
    /**
     * collator connected to the account
     */
    collatorId: AccountId32
    /**
     * amount unstaked from collator
     */
    amount: bigint
}

/**
 * A new round was finalized
 */
export interface CollatorStakingEvent_RoundFinalized {
    __kind: 'RoundFinalized'
    /**
     * round number that was finalized
     */
    number: number
}

/**
 * The `Event` enum of this pallet
 */
export type ClaimsEvent = ClaimsEvent_ClaimMinted | ClaimsEvent_ClaimMoved | ClaimsEvent_ClaimRejected | ClaimsEvent_ClaimRequested | ClaimsEvent_Claimed | ClaimsEvent_DelayTimeForClaimSet | ClaimsEvent_EthereumBlocksProcessed | ClaimsEvent_ExchangeRateSet

/**
 * Claim has been minted for someone by the root. `[who, amount]`
 */
export interface ClaimsEvent_ClaimMinted {
    __kind: 'ClaimMinted'
    /**
     * the address allowed to collect this claim
     */
    who: H160
    /**
     * the number of ENJ2 tokens that will be claimed
     */
    amount: bigint
}

/**
 * Someone's claim has been moved to another address. `[old, new]`
 */
export interface ClaimsEvent_ClaimMoved {
    __kind: 'ClaimMoved'
    /**
     * old account address that has the claim
     */
    old: H160
    /**
     * new account address
     */
    new: H160
}

/**
 * Someone's claim has been rejected. `[account, transaction_hash]`
 */
export interface ClaimsEvent_ClaimRejected {
    __kind: 'ClaimRejected'
    /**
     * account address for which the claim was requested by the relayer
     */
    account: H160
    /**
     * Hash of the transaction for which the claim was requested by the relayer
     */
    transactionHash: H256
}

/**
 * Claim has been requested by an account through the Relayer. `[who, amount,
 * transaction_hash, is_efi_token]`
 */
export interface ClaimsEvent_ClaimRequested {
    __kind: 'ClaimRequested'
    /**
     * The account which requests the claim through the Relayer
     */
    who: H160
    /**
     * The amount of burned tokens
     */
    amountBurned: bigint
    /**
     * Hash of the transaction in which the tokens were burnt
     */
    transactionHash: H256
    /**
     * If the burnt token is EFI or not
     */
    isEfiToken: boolean
    /**
     * ENJ amount claimable
     */
    amountClaimable: bigint
}

/**
 * Someone claimed some ENJ2 from EFI. `[who, ethereum_address, amount]`
 */
export interface ClaimsEvent_Claimed {
    __kind: 'Claimed'
    /**
     * The account that received the claim
     */
    who: AccountId32
    /**
     * The ethereum address, if the claim was made from Ethereum
     */
    ethereumAddress?: (H160 | undefined)
    /**
     * The amount that was claimed
     */
    amount: bigint
}

/**
 * Delay time for claim is set. `[delay_time]`
 */
export interface ClaimsEvent_DelayTimeForClaimSet {
    __kind: 'DelayTimeForClaimSet'
    /**
     * the number of blocks the user has to wait to claim his ENJ2 once the claim for
     * which is requested
     */
    delayTime: number
}

/**
 * Claims have been processed for the Ethereum block by the Relayer.
 */
export interface ClaimsEvent_EthereumBlocksProcessed {
    __kind: 'EthereumBlocksProcessed'
    /**
     * Ethereum block number that contains the last burn transaction relayed by the
     * Relayer.
     */
    blockNumber: number
}

/**
 * Exchange rate is set. `[exchange_rate]`
 */
export interface ClaimsEvent_ExchangeRateSet {
    __kind: 'ExchangeRateSet'
    /**
     * the amount of ENJ equivalent to 1 EFI
     */
    exchangeRate: Perbill
}

/**
 * The `Event` enum of this pallet
 */
export type BountiesEvent = BountiesEvent_BountyApproved | BountiesEvent_BountyAwarded | BountiesEvent_BountyBecameActive | BountiesEvent_BountyCanceled | BountiesEvent_BountyClaimed | BountiesEvent_BountyExtended | BountiesEvent_BountyProposed | BountiesEvent_BountyRejected | BountiesEvent_CuratorAccepted | BountiesEvent_CuratorProposed | BountiesEvent_CuratorUnassigned

/**
 * A bounty is approved.
 */
export interface BountiesEvent_BountyApproved {
    __kind: 'BountyApproved'
    index: number
}

/**
 * A bounty is awarded to a beneficiary.
 */
export interface BountiesEvent_BountyAwarded {
    __kind: 'BountyAwarded'
    index: number
    beneficiary: AccountId32
}

/**
 * A bounty proposal is funded and became active.
 */
export interface BountiesEvent_BountyBecameActive {
    __kind: 'BountyBecameActive'
    index: number
}

/**
 * A bounty is cancelled.
 */
export interface BountiesEvent_BountyCanceled {
    __kind: 'BountyCanceled'
    index: number
}

/**
 * A bounty is claimed by beneficiary.
 */
export interface BountiesEvent_BountyClaimed {
    __kind: 'BountyClaimed'
    index: number
    payout: bigint
    beneficiary: AccountId32
}

/**
 * A bounty expiry is extended.
 */
export interface BountiesEvent_BountyExtended {
    __kind: 'BountyExtended'
    index: number
}

/**
 * New bounty proposal.
 */
export interface BountiesEvent_BountyProposed {
    __kind: 'BountyProposed'
    index: number
}

/**
 * A bounty proposal was rejected; funds were slashed.
 */
export interface BountiesEvent_BountyRejected {
    __kind: 'BountyRejected'
    index: number
    bond: bigint
}

/**
 * A bounty curator is accepted.
 */
export interface BountiesEvent_CuratorAccepted {
    __kind: 'CuratorAccepted'
    bountyId: number
    curator: AccountId32
}

/**
 * A bounty curator is proposed.
 */
export interface BountiesEvent_CuratorProposed {
    __kind: 'CuratorProposed'
    bountyId: number
    curator: AccountId32
}

/**
 * A bounty curator is unassigned.
 */
export interface BountiesEvent_CuratorUnassigned {
    __kind: 'CuratorUnassigned'
    bountyId: number
}

/**
 * The `Event` enum of this pallet
 */
export type BalancesEvent = BalancesEvent_BalanceSet | BalancesEvent_Burned | BalancesEvent_Deposit | BalancesEvent_DustLost | BalancesEvent_Endowed | BalancesEvent_Frozen | BalancesEvent_Issued | BalancesEvent_Locked | BalancesEvent_Minted | BalancesEvent_Rescinded | BalancesEvent_ReserveRepatriated | BalancesEvent_Reserved | BalancesEvent_Restored | BalancesEvent_Slashed | BalancesEvent_Suspended | BalancesEvent_Thawed | BalancesEvent_TotalIssuanceForced | BalancesEvent_Transfer | BalancesEvent_Unlocked | BalancesEvent_Unreserved | BalancesEvent_Upgraded | BalancesEvent_Withdraw

/**
 * A balance was set by root.
 */
export interface BalancesEvent_BalanceSet {
    __kind: 'BalanceSet'
    who: AccountId32
    free: bigint
}

/**
 * Some amount was burned from an account.
 */
export interface BalancesEvent_Burned {
    __kind: 'Burned'
    who: AccountId32
    amount: bigint
}

/**
 * Some amount was deposited (e.g. for transaction fees).
 */
export interface BalancesEvent_Deposit {
    __kind: 'Deposit'
    who: AccountId32
    amount: bigint
}

/**
 * An account was removed whose balance was non-zero but below ExistentialDeposit,
 * resulting in an outright loss.
 */
export interface BalancesEvent_DustLost {
    __kind: 'DustLost'
    account: AccountId32
    amount: bigint
}

/**
 * An account was created with some free balance.
 */
export interface BalancesEvent_Endowed {
    __kind: 'Endowed'
    account: AccountId32
    freeBalance: bigint
}

/**
 * Some balance was frozen.
 */
export interface BalancesEvent_Frozen {
    __kind: 'Frozen'
    who: AccountId32
    amount: bigint
}

/**
 * Total issuance was increased by `amount`, creating a credit to be balanced.
 */
export interface BalancesEvent_Issued {
    __kind: 'Issued'
    amount: bigint
}

/**
 * Some balance was locked.
 */
export interface BalancesEvent_Locked {
    __kind: 'Locked'
    who: AccountId32
    amount: bigint
}

/**
 * Some amount was minted into an account.
 */
export interface BalancesEvent_Minted {
    __kind: 'Minted'
    who: AccountId32
    amount: bigint
}

/**
 * Total issuance was decreased by `amount`, creating a debt to be balanced.
 */
export interface BalancesEvent_Rescinded {
    __kind: 'Rescinded'
    amount: bigint
}

/**
 * Some balance was moved from the reserve of the first account to the second account.
 * Final argument indicates the destination balance type.
 */
export interface BalancesEvent_ReserveRepatriated {
    __kind: 'ReserveRepatriated'
    from: AccountId32
    to: AccountId32
    amount: bigint
    destinationStatus: BalanceStatus
}

/**
 * Some balance was reserved (moved from free to reserved).
 */
export interface BalancesEvent_Reserved {
    __kind: 'Reserved'
    who: AccountId32
    amount: bigint
}

/**
 * Some amount was restored into an account.
 */
export interface BalancesEvent_Restored {
    __kind: 'Restored'
    who: AccountId32
    amount: bigint
}

/**
 * Some amount was removed from the account (e.g. for misbehavior).
 */
export interface BalancesEvent_Slashed {
    __kind: 'Slashed'
    who: AccountId32
    amount: bigint
}

/**
 * Some amount was suspended from an account (it can be restored later).
 */
export interface BalancesEvent_Suspended {
    __kind: 'Suspended'
    who: AccountId32
    amount: bigint
}

/**
 * Some balance was thawed.
 */
export interface BalancesEvent_Thawed {
    __kind: 'Thawed'
    who: AccountId32
    amount: bigint
}

/**
 * The `TotalIssuance` was forcefully changed.
 */
export interface BalancesEvent_TotalIssuanceForced {
    __kind: 'TotalIssuanceForced'
    old: bigint
    new: bigint
}

/**
 * Transfer succeeded.
 */
export interface BalancesEvent_Transfer {
    __kind: 'Transfer'
    from: AccountId32
    to: AccountId32
    amount: bigint
}

/**
 * Some balance was unlocked.
 */
export interface BalancesEvent_Unlocked {
    __kind: 'Unlocked'
    who: AccountId32
    amount: bigint
}

/**
 * Some balance was unreserved (moved from reserved to free).
 */
export interface BalancesEvent_Unreserved {
    __kind: 'Unreserved'
    who: AccountId32
    amount: bigint
}

/**
 * An account was upgraded.
 */
export interface BalancesEvent_Upgraded {
    __kind: 'Upgraded'
    who: AccountId32
}

/**
 * Some amount was withdrawn from the account (e.g. for transaction fees).
 */
export interface BalancesEvent_Withdraw {
    __kind: 'Withdraw'
    who: AccountId32
    amount: bigint
}

export type BalanceStatus = BalanceStatus_Free | BalanceStatus_Reserved

export interface BalanceStatus_Free {
    __kind: 'Free'
}

export interface BalanceStatus_Reserved {
    __kind: 'Reserved'
}

export type Phase = Phase_ApplyExtrinsic | Phase_Finalization | Phase_Initialization

export interface Phase_ApplyExtrinsic {
    __kind: 'ApplyExtrinsic'
    value: number
}

export interface Phase_Finalization {
    __kind: 'Finalization'
}

export interface Phase_Initialization {
    __kind: 'Initialization'
}

export const EventRecord: sts.Type<EventRecord> = sts.struct(() => {
    return  {
        phase: Phase,
        event: Event,
        topics: sts.array(() => H256),
    }
})

export const Event: sts.Type<Event> = sts.closedEnum(() => {
    return  {
        Balances: BalancesEvent,
        Bounties: BountiesEvent,
        Claims: ClaimsEvent,
        CollatorStaking: CollatorStakingEvent,
        CommunityPool: CommunityPoolEvent,
        Council: CouncilEvent,
        CumulusXcm: CumulusXcmEvent,
        Democracy: DemocracyEvent,
        DmpQueue: DmpQueueEvent,
        ExtrinsicPause: ExtrinsicPauseEvent,
        FuelTanks: FuelTanksEvent,
        Identity: IdentityEvent,
        Marketplace: MarketplaceEvent,
        MatrixUtility: MatrixUtilityEvent,
        MatrixXcm: MatrixXcmEvent,
        MessageQueue: MessageQueueEvent,
        Migrations: MigrationsEvent,
        MultiTokens: MultiTokensEvent,
        Multisig: MultisigEvent,
        OrmlXcm: OrmlXcmEvent,
        ParachainSystem: ParachainSystemEvent,
        PolkadotXcm: PolkadotXcmEvent,
        Pools: PoolsEvent,
        Preimage: PreimageEvent,
        Proxy: ProxyEvent,
        SafeMode: SafeModeEvent,
        Scheduler: SchedulerEvent,
        Session: SessionEvent,
        Sudo: SudoEvent,
        System: SystemEvent,
        TechnicalCommittee: TechnicalCommitteeEvent,
        TechnicalMembership: TechnicalMembershipEvent,
        TransactionPayment: TransactionPaymentEvent,
        UnknownTokens: UnknownTokensEvent,
        Utility: UtilityEvent,
        XTokens: XTokensEvent,
        XcmpQueue: XcmpQueueEvent,
    }
})

/**
 * The `Event` enum of this pallet
 */
export const XcmpQueueEvent: sts.Type<XcmpQueueEvent> = sts.closedEnum(() => {
    return  {
        XcmpMessageSent: sts.enumStruct({
            messageHash: sts.bytes(),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const XTokensEvent: sts.Type<XTokensEvent> = sts.closedEnum(() => {
    return  {
        TransferredAssets: sts.enumStruct({
            sender: AccountId32,
            assets: sts.array(() => V4Asset),
            fee: V4Asset,
            dest: V4Location,
        }),
    }
})

export const V4Location: sts.Type<V4Location> = sts.struct(() => {
    return  {
        parents: sts.number(),
        interior: V4Junctions,
    }
})

export const V4Junctions: sts.Type<V4Junctions> = sts.closedEnum(() => {
    return  {
        Here: sts.unit(),
        X1: sts.array(() => V4Junction),
        X2: sts.array(() => V4Junction),
        X3: sts.array(() => V4Junction),
        X4: sts.array(() => V4Junction),
        X5: sts.array(() => V4Junction),
        X6: sts.array(() => V4Junction),
        X7: sts.array(() => V4Junction),
        X8: sts.array(() => V4Junction),
    }
})

export const V4Junction: sts.Type<V4Junction> = sts.closedEnum(() => {
    return  {
        AccountId32: sts.enumStruct({
            network: sts.option(() => V4NetworkId),
            id: sts.bytes(),
        }),
        AccountIndex64: sts.enumStruct({
            network: sts.option(() => V4NetworkId),
            index: sts.bigint(),
        }),
        AccountKey20: sts.enumStruct({
            network: sts.option(() => V4NetworkId),
            key: sts.bytes(),
        }),
        GeneralIndex: sts.bigint(),
        GeneralKey: sts.enumStruct({
            length: sts.number(),
            data: sts.bytes(),
        }),
        GlobalConsensus: V4NetworkId,
        OnlyChild: sts.unit(),
        PalletInstance: sts.number(),
        Parachain: sts.number(),
        Plurality: sts.enumStruct({
            id: V3BodyId,
            part: V3BodyPart,
        }),
    }
})

export const V3BodyPart: sts.Type<V3BodyPart> = sts.closedEnum(() => {
    return  {
        AtLeastProportion: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Fraction: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Members: sts.enumStruct({
            count: sts.number(),
        }),
        MoreThanProportion: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Voice: sts.unit(),
    }
})

export const V3BodyId: sts.Type<V3BodyId> = sts.closedEnum(() => {
    return  {
        Administration: sts.unit(),
        Defense: sts.unit(),
        Executive: sts.unit(),
        Index: sts.number(),
        Judicial: sts.unit(),
        Legislative: sts.unit(),
        Moniker: sts.bytes(),
        Technical: sts.unit(),
        Treasury: sts.unit(),
        Unit: sts.unit(),
    }
})

export const V4NetworkId: sts.Type<V4NetworkId> = sts.closedEnum(() => {
    return  {
        BitcoinCash: sts.unit(),
        BitcoinCore: sts.unit(),
        ByFork: sts.enumStruct({
            blockNumber: sts.bigint(),
            blockHash: sts.bytes(),
        }),
        ByGenesis: sts.bytes(),
        Ethereum: sts.enumStruct({
            chainId: sts.bigint(),
        }),
        Kusama: sts.unit(),
        Polkadot: sts.unit(),
        PolkadotBulletin: sts.unit(),
        Rococo: sts.unit(),
        Westend: sts.unit(),
        Wococo: sts.unit(),
    }
})

export const V4Asset: sts.Type<V4Asset> = sts.struct(() => {
    return  {
        id: V4AssetId,
        fun: V4Fungibility,
    }
})

export const V4Fungibility: sts.Type<V4Fungibility> = sts.closedEnum(() => {
    return  {
        Fungible: sts.bigint(),
        NonFungible: V4AssetInstance,
    }
})

export const V4AssetInstance: sts.Type<V4AssetInstance> = sts.closedEnum(() => {
    return  {
        Array16: sts.bytes(),
        Array32: sts.bytes(),
        Array4: sts.bytes(),
        Array8: sts.bytes(),
        Index: sts.bigint(),
        Undefined: sts.unit(),
    }
})

export const V4AssetId: sts.Type<V4AssetId> = sts.struct(() => {
    return  {
        parents: sts.number(),
        interior: V4Junctions,
    }
})

/**
 * The `Event` enum of this pallet
 */
export const UtilityEvent: sts.Type<UtilityEvent> = sts.closedEnum(() => {
    return  {
        BatchCompleted: sts.unit(),
        BatchCompletedWithErrors: sts.unit(),
        BatchInterrupted: sts.enumStruct({
            index: sts.number(),
            error: DispatchError,
        }),
        DispatchedAs: sts.enumStruct({
            result: sts.result(() => sts.unit(), () => DispatchError),
        }),
        ItemCompleted: sts.unit(),
        ItemFailed: sts.enumStruct({
            error: DispatchError,
        }),
    }
})

export const DispatchError: sts.Type<DispatchError> = sts.closedEnum(() => {
    return  {
        Arithmetic: ArithmeticError,
        BadOrigin: sts.unit(),
        CannotLookup: sts.unit(),
        ConsumerRemaining: sts.unit(),
        Corruption: sts.unit(),
        Exhausted: sts.unit(),
        Module: ModuleError,
        NoProviders: sts.unit(),
        Other: sts.unit(),
        RootNotAllowed: sts.unit(),
        Token: TokenError,
        TooManyConsumers: sts.unit(),
        Transactional: TransactionalError,
        Unavailable: sts.unit(),
    }
})

export const TransactionalError: sts.Type<TransactionalError> = sts.closedEnum(() => {
    return  {
        LimitReached: sts.unit(),
        NoLayer: sts.unit(),
    }
})

export const TokenError: sts.Type<TokenError> = sts.closedEnum(() => {
    return  {
        BelowMinimum: sts.unit(),
        Blocked: sts.unit(),
        CannotCreate: sts.unit(),
        CannotCreateHold: sts.unit(),
        Frozen: sts.unit(),
        FundsUnavailable: sts.unit(),
        NotExpendable: sts.unit(),
        OnlyProvider: sts.unit(),
        UnknownAsset: sts.unit(),
        Unsupported: sts.unit(),
    }
})

export const ModuleError: sts.Type<ModuleError> = sts.struct(() => {
    return  {
        index: sts.number(),
        error: sts.bytes(),
    }
})

export const ArithmeticError: sts.Type<ArithmeticError> = sts.closedEnum(() => {
    return  {
        DivisionByZero: sts.unit(),
        Overflow: sts.unit(),
        Underflow: sts.unit(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const UnknownTokensEvent: sts.Type<UnknownTokensEvent> = sts.closedEnum(() => {
    return  {
        Deposited: sts.enumStruct({
            asset: V4Asset,
            who: V4Location,
        }),
        Withdrawn: sts.enumStruct({
            asset: V4Asset,
            who: V4Location,
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const TransactionPaymentEvent: sts.Type<TransactionPaymentEvent> = sts.closedEnum(() => {
    return  {
        TransactionFeePaid: sts.enumStruct({
            who: AccountId32,
            actualFee: sts.bigint(),
            tip: sts.bigint(),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const TechnicalMembershipEvent: sts.Type<TechnicalMembershipEvent> = sts.closedEnum(() => {
    return  {
        Dummy: sts.unit(),
        KeyChanged: sts.unit(),
        MemberAdded: sts.unit(),
        MemberRemoved: sts.unit(),
        MembersReset: sts.unit(),
        MembersSwapped: sts.unit(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const TechnicalCommitteeEvent: sts.Type<TechnicalCommitteeEvent> = sts.closedEnum(() => {
    return  {
        Approved: sts.enumStruct({
            proposalHash: H256,
        }),
        Closed: sts.enumStruct({
            proposalHash: H256,
            yes: sts.number(),
            no: sts.number(),
        }),
        Disapproved: sts.enumStruct({
            proposalHash: H256,
        }),
        Executed: sts.enumStruct({
            proposalHash: H256,
            result: sts.result(() => sts.unit(), () => DispatchError),
        }),
        MemberExecuted: sts.enumStruct({
            proposalHash: H256,
            result: sts.result(() => sts.unit(), () => DispatchError),
        }),
        Proposed: sts.enumStruct({
            account: AccountId32,
            proposalIndex: sts.number(),
            proposalHash: H256,
            threshold: sts.number(),
        }),
        Voted: sts.enumStruct({
            account: AccountId32,
            proposalHash: H256,
            voted: sts.boolean(),
            yes: sts.number(),
            no: sts.number(),
        }),
    }
})

/**
 * Event for the System pallet.
 */
export const SystemEvent: sts.Type<SystemEvent> = sts.closedEnum(() => {
    return  {
        CodeUpdated: sts.unit(),
        ExtrinsicFailed: sts.enumStruct({
            dispatchError: DispatchError,
            dispatchInfo: DispatchInfo,
        }),
        ExtrinsicSuccess: sts.enumStruct({
            dispatchInfo: DispatchInfo,
        }),
        KilledAccount: sts.enumStruct({
            account: AccountId32,
        }),
        NewAccount: sts.enumStruct({
            account: AccountId32,
        }),
        Remarked: sts.enumStruct({
            sender: AccountId32,
            hash: H256,
        }),
        UpgradeAuthorized: sts.enumStruct({
            codeHash: H256,
            checkVersion: sts.boolean(),
        }),
    }
})

export const DispatchInfo: sts.Type<DispatchInfo> = sts.struct(() => {
    return  {
        weight: Weight,
        class: DispatchClass,
        paysFee: Pays,
    }
})

export const Pays: sts.Type<Pays> = sts.closedEnum(() => {
    return  {
        No: sts.unit(),
        Yes: sts.unit(),
    }
})

export const DispatchClass: sts.Type<DispatchClass> = sts.closedEnum(() => {
    return  {
        Mandatory: sts.unit(),
        Normal: sts.unit(),
        Operational: sts.unit(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const SudoEvent: sts.Type<SudoEvent> = sts.closedEnum(() => {
    return  {
        KeyChanged: sts.enumStruct({
            old: sts.option(() => AccountId32),
            new: AccountId32,
        }),
        KeyRemoved: sts.unit(),
        Sudid: sts.enumStruct({
            sudoResult: sts.result(() => sts.unit(), () => DispatchError),
        }),
        SudoAsDone: sts.enumStruct({
            sudoResult: sts.result(() => sts.unit(), () => DispatchError),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const SessionEvent: sts.Type<SessionEvent> = sts.closedEnum(() => {
    return  {
        NewSession: sts.enumStruct({
            sessionIndex: sts.number(),
        }),
    }
})

/**
 * Events type.
 */
export const SchedulerEvent: sts.Type<SchedulerEvent> = sts.closedEnum(() => {
    return  {
        CallUnavailable: sts.enumStruct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
        }),
        Canceled: sts.enumStruct({
            when: sts.number(),
            index: sts.number(),
        }),
        Dispatched: sts.enumStruct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => DispatchError),
        }),
        PeriodicFailed: sts.enumStruct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
        }),
        PermanentlyOverweight: sts.enumStruct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
        }),
        RetryCancelled: sts.enumStruct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
        }),
        RetryFailed: sts.enumStruct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
        }),
        RetrySet: sts.enumStruct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            period: sts.number(),
            retries: sts.number(),
        }),
        Scheduled: sts.enumStruct({
            when: sts.number(),
            index: sts.number(),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const SafeModeEvent: sts.Type<SafeModeEvent> = sts.closedEnum(() => {
    return  {
        CannotDeposit: sts.unit(),
        CannotRelease: sts.unit(),
        DepositPlaced: sts.enumStruct({
            account: AccountId32,
            amount: sts.bigint(),
        }),
        DepositReleased: sts.enumStruct({
            account: AccountId32,
            amount: sts.bigint(),
        }),
        DepositSlashed: sts.enumStruct({
            account: AccountId32,
            amount: sts.bigint(),
        }),
        Entered: sts.enumStruct({
            until: sts.number(),
        }),
        Exited: sts.enumStruct({
            reason: ExitReason,
        }),
        Extended: sts.enumStruct({
            until: sts.number(),
        }),
    }
})

export const ExitReason: sts.Type<ExitReason> = sts.closedEnum(() => {
    return  {
        Force: sts.unit(),
        Timeout: sts.unit(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const ProxyEvent: sts.Type<ProxyEvent> = sts.closedEnum(() => {
    return  {
        Announced: sts.enumStruct({
            real: AccountId32,
            proxy: AccountId32,
            callHash: H256,
        }),
        ProxyAdded: sts.enumStruct({
            delegator: AccountId32,
            delegatee: AccountId32,
            proxyType: ProxyType,
            delay: sts.number(),
        }),
        ProxyExecuted: sts.enumStruct({
            result: sts.result(() => sts.unit(), () => DispatchError),
        }),
        ProxyRemoved: sts.enumStruct({
            delegator: AccountId32,
            delegatee: AccountId32,
            proxyType: ProxyType,
            delay: sts.number(),
        }),
        PureCreated: sts.enumStruct({
            pure: AccountId32,
            who: AccountId32,
            proxyType: ProxyType,
            disambiguationIndex: sts.number(),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const PreimageEvent: sts.Type<PreimageEvent> = sts.closedEnum(() => {
    return  {
        Cleared: sts.enumStruct({
            hash: H256,
        }),
        Noted: sts.enumStruct({
            hash: H256,
        }),
        Requested: sts.enumStruct({
            hash: H256,
        }),
    }
})

/**
 * The pallet's event type
 */
export const PoolsEvent: sts.Type<PoolsEvent> = sts.closedEnum(() => {
    return  {
        PoolsMutated: PoolsMutation,
    }
})

export const PoolsMutation: sts.Type<PoolsMutation> = sts.struct(() => {
    return  {
        community: Pool,
        collator: Pool,
        fuelTanks: Pool,
        priceDiscovery: Pool,
    }
})

export const Pool: sts.Type<Pool> = sts.struct(() => {
    return  {
        feeShare: Perbill,
    }
})

export const Perbill = sts.number()

/**
 * The `Event` enum of this pallet
 */
export const PolkadotXcmEvent: sts.Type<PolkadotXcmEvent> = sts.closedEnum(() => {
    return  {
        AssetsClaimed: sts.enumStruct({
            hash: H256,
            origin: V4Location,
            assets: VersionedAssets,
        }),
        AssetsTrapped: sts.enumStruct({
            hash: H256,
            origin: V4Location,
            assets: VersionedAssets,
        }),
        Attempted: sts.enumStruct({
            outcome: V4Outcome,
        }),
        FeesPaid: sts.enumStruct({
            paying: V4Location,
            fees: sts.array(() => V4Asset),
        }),
        InvalidQuerier: sts.enumStruct({
            origin: V4Location,
            queryId: sts.bigint(),
            expectedQuerier: V4Location,
            maybeActualQuerier: sts.option(() => V4Location),
        }),
        InvalidQuerierVersion: sts.enumStruct({
            origin: V4Location,
            queryId: sts.bigint(),
        }),
        InvalidResponder: sts.enumStruct({
            origin: V4Location,
            queryId: sts.bigint(),
            expectedLocation: sts.option(() => V4Location),
        }),
        InvalidResponderVersion: sts.enumStruct({
            origin: V4Location,
            queryId: sts.bigint(),
        }),
        Notified: sts.enumStruct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
        }),
        NotifyDecodeFailed: sts.enumStruct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
        }),
        NotifyDispatchError: sts.enumStruct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
        }),
        NotifyOverweight: sts.enumStruct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
            actualWeight: Weight,
            maxBudgetedWeight: Weight,
        }),
        NotifyTargetMigrationFail: sts.enumStruct({
            location: VersionedLocation,
            queryId: sts.bigint(),
        }),
        NotifyTargetSendFail: sts.enumStruct({
            location: V4Location,
            queryId: sts.bigint(),
            error: V3Error,
        }),
        ResponseReady: sts.enumStruct({
            queryId: sts.bigint(),
            response: V4Response,
        }),
        ResponseTaken: sts.enumStruct({
            queryId: sts.bigint(),
        }),
        Sent: sts.enumStruct({
            origin: V4Location,
            destination: V4Location,
            message: sts.array(() => V4Instruction),
            messageId: sts.bytes(),
        }),
        SupportedVersionChanged: sts.enumStruct({
            location: V4Location,
            version: sts.number(),
        }),
        UnexpectedResponse: sts.enumStruct({
            origin: V4Location,
            queryId: sts.bigint(),
        }),
        VersionChangeNotified: sts.enumStruct({
            destination: V4Location,
            result: sts.number(),
            cost: sts.array(() => V4Asset),
            messageId: sts.bytes(),
        }),
        VersionMigrationFinished: sts.enumStruct({
            version: sts.number(),
        }),
        VersionNotifyRequested: sts.enumStruct({
            destination: V4Location,
            cost: sts.array(() => V4Asset),
            messageId: sts.bytes(),
        }),
        VersionNotifyStarted: sts.enumStruct({
            destination: V4Location,
            cost: sts.array(() => V4Asset),
            messageId: sts.bytes(),
        }),
        VersionNotifyUnrequested: sts.enumStruct({
            destination: V4Location,
            cost: sts.array(() => V4Asset),
            messageId: sts.bytes(),
        }),
    }
})

export const V4Instruction: sts.Type<V4Instruction> = sts.closedEnum(() => {
    return  {
        AliasOrigin: V4Location,
        BurnAsset: sts.array(() => V4Asset),
        BuyExecution: sts.enumStruct({
            fees: V4Asset,
            weightLimit: V3WeightLimit,
        }),
        ClaimAsset: sts.enumStruct({
            assets: sts.array(() => V4Asset),
            ticket: V4Location,
        }),
        ClearError: sts.unit(),
        ClearOrigin: sts.unit(),
        ClearTopic: sts.unit(),
        ClearTransactStatus: sts.unit(),
        DepositAsset: sts.enumStruct({
            assets: V4AssetFilter,
            beneficiary: V4Location,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: V4AssetFilter,
            dest: V4Location,
            xcm: sts.array(() => V4Instruction),
        }),
        DescendOrigin: V4Junctions,
        ExchangeAsset: sts.enumStruct({
            give: V4AssetFilter,
            want: sts.array(() => V4Asset),
            maximal: sts.boolean(),
        }),
        ExpectAsset: sts.array(() => V4Asset),
        ExpectError: sts.option(() => sts.tuple(() => [sts.number(), V3Error])),
        ExpectOrigin: sts.option(() => V4Location),
        ExpectPallet: sts.enumStruct({
            index: sts.number(),
            name: sts.bytes(),
            moduleName: sts.bytes(),
            crateMajor: sts.number(),
            minCrateMinor: sts.number(),
        }),
        ExpectTransactStatus: V3MaybeErrorCode,
        ExportMessage: sts.enumStruct({
            network: V4NetworkId,
            destination: V4Junctions,
            xcm: sts.array(() => V4Instruction),
        }),
        HrmpChannelAccepted: sts.enumStruct({
            recipient: sts.number(),
        }),
        HrmpChannelClosing: sts.enumStruct({
            initiator: sts.number(),
            sender: sts.number(),
            recipient: sts.number(),
        }),
        HrmpNewChannelOpenRequest: sts.enumStruct({
            sender: sts.number(),
            maxMessageSize: sts.number(),
            maxCapacity: sts.number(),
        }),
        InitiateReserveWithdraw: sts.enumStruct({
            assets: V4AssetFilter,
            reserve: V4Location,
            xcm: sts.array(() => V4Instruction),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: V4AssetFilter,
            dest: V4Location,
            xcm: sts.array(() => V4Instruction),
        }),
        LockAsset: sts.enumStruct({
            asset: V4Asset,
            unlocker: V4Location,
        }),
        NoteUnlockable: sts.enumStruct({
            asset: V4Asset,
            owner: V4Location,
        }),
        QueryPallet: sts.enumStruct({
            moduleName: sts.bytes(),
            responseInfo: V4QueryResponseInfo,
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V4Response,
            maxWeight: Weight,
            querier: sts.option(() => V4Location),
        }),
        ReceiveTeleportedAsset: sts.array(() => V4Asset),
        RefundSurplus: sts.unit(),
        ReportError: V4QueryResponseInfo,
        ReportHolding: sts.enumStruct({
            responseInfo: V4QueryResponseInfo,
            assets: V4AssetFilter,
        }),
        ReportTransactStatus: V4QueryResponseInfo,
        RequestUnlock: sts.enumStruct({
            asset: V4Asset,
            locker: V4Location,
        }),
        ReserveAssetDeposited: sts.array(() => V4Asset),
        SetAppendix: sts.array(() => V4Instruction),
        SetErrorHandler: sts.array(() => V4Instruction),
        SetFeesMode: sts.enumStruct({
            jitWithdraw: sts.boolean(),
        }),
        SetTopic: sts.bytes(),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: Weight,
        }),
        Transact: sts.enumStruct({
            originKind: V2OriginKind,
            requireWeightAtMost: Weight,
            call: DoubleEncoded,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V4Asset),
            beneficiary: V4Location,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V4Asset),
            dest: V4Location,
            xcm: sts.array(() => V4Instruction),
        }),
        Trap: sts.bigint(),
        UniversalOrigin: V4Junction,
        UnlockAsset: sts.enumStruct({
            asset: V4Asset,
            target: V4Location,
        }),
        UnpaidExecution: sts.enumStruct({
            weightLimit: V3WeightLimit,
            checkOrigin: sts.option(() => V4Location),
        }),
        UnsubscribeVersion: sts.unit(),
        WithdrawAsset: sts.array(() => V4Asset),
    }
})

export const DoubleEncoded: sts.Type<DoubleEncoded> = sts.struct(() => {
    return  {
        encoded: sts.bytes(),
    }
})

export const V2OriginKind: sts.Type<V2OriginKind> = sts.closedEnum(() => {
    return  {
        Native: sts.unit(),
        SovereignAccount: sts.unit(),
        Superuser: sts.unit(),
        Xcm: sts.unit(),
    }
})

export const V4QueryResponseInfo: sts.Type<V4QueryResponseInfo> = sts.struct(() => {
    return  {
        destination: V4Location,
        queryId: sts.bigint(),
        maxWeight: Weight,
    }
})

export const V3MaybeErrorCode: sts.Type<V3MaybeErrorCode> = sts.closedEnum(() => {
    return  {
        Error: sts.bytes(),
        Success: sts.unit(),
        TruncatedError: sts.bytes(),
    }
})

export const V4AssetFilter: sts.Type<V4AssetFilter> = sts.closedEnum(() => {
    return  {
        Definite: sts.array(() => V4Asset),
        Wild: V4WildAsset,
    }
})

export const V4WildAsset: sts.Type<V4WildAsset> = sts.closedEnum(() => {
    return  {
        All: sts.unit(),
        AllCounted: sts.number(),
        AllOf: sts.enumStruct({
            id: V4AssetId,
            fun: V4WildFungibility,
        }),
        AllOfCounted: sts.enumStruct({
            id: V4AssetId,
            fun: V4WildFungibility,
            count: sts.number(),
        }),
    }
})

export const V4WildFungibility: sts.Type<V4WildFungibility> = sts.closedEnum(() => {
    return  {
        Fungible: sts.unit(),
        NonFungible: sts.unit(),
    }
})

export const V3WeightLimit: sts.Type<V3WeightLimit> = sts.closedEnum(() => {
    return  {
        Limited: Weight,
        Unlimited: sts.unit(),
    }
})

export const V4Response: sts.Type<V4Response> = sts.closedEnum(() => {
    return  {
        Assets: sts.array(() => V4Asset),
        DispatchResult: V3MaybeErrorCode,
        ExecutionResult: sts.option(() => sts.tuple(() => [sts.number(), V3Error])),
        Null: sts.unit(),
        PalletsInfo: sts.array(() => V4PalletInfo),
        Version: sts.number(),
    }
})

export const V4PalletInfo: sts.Type<V4PalletInfo> = sts.struct(() => {
    return  {
        index: sts.number(),
        name: BoundedVec,
        moduleName: BoundedVec,
        major: sts.number(),
        minor: sts.number(),
        patch: sts.number(),
    }
})

export const BoundedVec = sts.bytes()

export const V3Error: sts.Type<V3Error> = sts.closedEnum(() => {
    return  {
        AssetNotFound: sts.unit(),
        BadOrigin: sts.unit(),
        Barrier: sts.unit(),
        DestinationUnsupported: sts.unit(),
        ExceedsMaxMessageSize: sts.unit(),
        ExceedsStackLimit: sts.unit(),
        ExpectationFalse: sts.unit(),
        ExportError: sts.unit(),
        FailedToDecode: sts.unit(),
        FailedToTransactAsset: sts.unit(),
        FeesNotMet: sts.unit(),
        HoldingWouldOverflow: sts.unit(),
        InvalidLocation: sts.unit(),
        LocationCannotHold: sts.unit(),
        LocationFull: sts.unit(),
        LocationNotInvertible: sts.unit(),
        LockError: sts.unit(),
        MaxWeightInvalid: sts.unit(),
        NameMismatch: sts.unit(),
        NoDeal: sts.unit(),
        NoPermission: sts.unit(),
        NotDepositable: sts.unit(),
        NotHoldingFees: sts.unit(),
        NotWithdrawable: sts.unit(),
        Overflow: sts.unit(),
        PalletNotFound: sts.unit(),
        ReanchorFailed: sts.unit(),
        TooExpensive: sts.unit(),
        Transport: sts.unit(),
        Trap: sts.bigint(),
        Unanchored: sts.unit(),
        UnhandledXcmVersion: sts.unit(),
        Unimplemented: sts.unit(),
        UnknownClaim: sts.unit(),
        Unroutable: sts.unit(),
        UntrustedReserveLocation: sts.unit(),
        UntrustedTeleportLocation: sts.unit(),
        VersionIncompatible: sts.unit(),
        WeightLimitReached: Weight,
        WeightNotComputable: sts.unit(),
    }
})

export const VersionedLocation: sts.Type<VersionedLocation> = sts.closedEnum(() => {
    return  {
        V2: V2MultiLocation,
        V3: V3MultiLocation,
        V4: V4Location,
    }
})

export const V3MultiLocation: sts.Type<V3MultiLocation> = sts.struct(() => {
    return  {
        parents: sts.number(),
        interior: V3Junctions,
    }
})

export const V3Junctions: sts.Type<V3Junctions> = sts.closedEnum(() => {
    return  {
        Here: sts.unit(),
        X1: V3Junction,
        X2: sts.tuple(() => [V3Junction, V3Junction]),
        X3: sts.tuple(() => [V3Junction, V3Junction, V3Junction]),
        X4: sts.tuple(() => [V3Junction, V3Junction, V3Junction, V3Junction]),
        X5: sts.tuple(() => [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]),
        X6: sts.tuple(() => [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]),
        X7: sts.tuple(() => [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]),
        X8: sts.tuple(() => [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]),
    }
})

export const V3Junction: sts.Type<V3Junction> = sts.closedEnum(() => {
    return  {
        AccountId32: sts.enumStruct({
            network: sts.option(() => V3NetworkId),
            id: sts.bytes(),
        }),
        AccountIndex64: sts.enumStruct({
            network: sts.option(() => V3NetworkId),
            index: sts.bigint(),
        }),
        AccountKey20: sts.enumStruct({
            network: sts.option(() => V3NetworkId),
            key: sts.bytes(),
        }),
        GeneralIndex: sts.bigint(),
        GeneralKey: sts.enumStruct({
            length: sts.number(),
            data: sts.bytes(),
        }),
        GlobalConsensus: V3NetworkId,
        OnlyChild: sts.unit(),
        PalletInstance: sts.number(),
        Parachain: sts.number(),
        Plurality: sts.enumStruct({
            id: V3BodyId,
            part: V3BodyPart,
        }),
    }
})

export const V3NetworkId: sts.Type<V3NetworkId> = sts.closedEnum(() => {
    return  {
        BitcoinCash: sts.unit(),
        BitcoinCore: sts.unit(),
        ByFork: sts.enumStruct({
            blockNumber: sts.bigint(),
            blockHash: sts.bytes(),
        }),
        ByGenesis: sts.bytes(),
        Ethereum: sts.enumStruct({
            chainId: sts.bigint(),
        }),
        Kusama: sts.unit(),
        Polkadot: sts.unit(),
        PolkadotBulletin: sts.unit(),
        Rococo: sts.unit(),
        Westend: sts.unit(),
        Wococo: sts.unit(),
    }
})

export const V2MultiLocation: sts.Type<V2MultiLocation> = sts.struct(() => {
    return  {
        parents: sts.number(),
        interior: V2Junctions,
    }
})

export const V2Junctions: sts.Type<V2Junctions> = sts.closedEnum(() => {
    return  {
        Here: sts.unit(),
        X1: V2Junction,
        X2: sts.tuple(() => [V2Junction, V2Junction]),
        X3: sts.tuple(() => [V2Junction, V2Junction, V2Junction]),
        X4: sts.tuple(() => [V2Junction, V2Junction, V2Junction, V2Junction]),
        X5: sts.tuple(() => [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]),
        X6: sts.tuple(() => [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]),
        X7: sts.tuple(() => [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]),
        X8: sts.tuple(() => [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]),
    }
})

export const V2Junction: sts.Type<V2Junction> = sts.closedEnum(() => {
    return  {
        AccountId32: sts.enumStruct({
            network: V2NetworkId,
            id: sts.bytes(),
        }),
        AccountIndex64: sts.enumStruct({
            network: V2NetworkId,
            index: sts.bigint(),
        }),
        AccountKey20: sts.enumStruct({
            network: V2NetworkId,
            key: sts.bytes(),
        }),
        GeneralIndex: sts.bigint(),
        GeneralKey: WeakBoundedVec,
        OnlyChild: sts.unit(),
        PalletInstance: sts.number(),
        Parachain: sts.number(),
        Plurality: sts.enumStruct({
            id: V2BodyId,
            part: V2BodyPart,
        }),
    }
})

export const V2BodyPart: sts.Type<V2BodyPart> = sts.closedEnum(() => {
    return  {
        AtLeastProportion: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Fraction: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Members: sts.enumStruct({
            count: sts.number(),
        }),
        MoreThanProportion: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Voice: sts.unit(),
    }
})

export const V2BodyId: sts.Type<V2BodyId> = sts.closedEnum(() => {
    return  {
        Administration: sts.unit(),
        Defense: sts.unit(),
        Executive: sts.unit(),
        Index: sts.number(),
        Judicial: sts.unit(),
        Legislative: sts.unit(),
        Named: WeakBoundedVec,
        Technical: sts.unit(),
        Treasury: sts.unit(),
        Unit: sts.unit(),
    }
})

export const WeakBoundedVec = sts.bytes()

export const V2NetworkId: sts.Type<V2NetworkId> = sts.closedEnum(() => {
    return  {
        Any: sts.unit(),
        Kusama: sts.unit(),
        Named: WeakBoundedVec,
        Polkadot: sts.unit(),
    }
})

export const V4Outcome: sts.Type<V4Outcome> = sts.closedEnum(() => {
    return  {
        Complete: sts.enumStruct({
            used: Weight,
        }),
        Error: sts.enumStruct({
            error: V3Error,
        }),
        Incomplete: sts.enumStruct({
            used: Weight,
            error: V3Error,
        }),
    }
})

export const VersionedAssets: sts.Type<VersionedAssets> = sts.closedEnum(() => {
    return  {
        V2: sts.array(() => V2MultiAsset),
        V3: sts.array(() => V3MultiAsset),
        V4: sts.array(() => V4Asset),
    }
})

export const V3MultiAsset: sts.Type<V3MultiAsset> = sts.struct(() => {
    return  {
        id: V3AssetId,
        fun: V3Fungibility,
    }
})

export const V3Fungibility: sts.Type<V3Fungibility> = sts.closedEnum(() => {
    return  {
        Fungible: sts.bigint(),
        NonFungible: V3AssetInstance,
    }
})

export const V3AssetInstance: sts.Type<V3AssetInstance> = sts.closedEnum(() => {
    return  {
        Array16: sts.bytes(),
        Array32: sts.bytes(),
        Array4: sts.bytes(),
        Array8: sts.bytes(),
        Index: sts.bigint(),
        Undefined: sts.unit(),
    }
})

export const V3AssetId: sts.Type<V3AssetId> = sts.closedEnum(() => {
    return  {
        Abstract: sts.bytes(),
        Concrete: V3MultiLocation,
    }
})

export const V2MultiAsset: sts.Type<V2MultiAsset> = sts.struct(() => {
    return  {
        id: V2AssetId,
        fun: V2Fungibility,
    }
})

export const V2Fungibility: sts.Type<V2Fungibility> = sts.closedEnum(() => {
    return  {
        Fungible: sts.bigint(),
        NonFungible: V2AssetInstance,
    }
})

export const V2AssetInstance: sts.Type<V2AssetInstance> = sts.closedEnum(() => {
    return  {
        Array16: sts.bytes(),
        Array32: sts.bytes(),
        Array4: sts.bytes(),
        Array8: sts.bytes(),
        Blob: sts.bytes(),
        Index: sts.bigint(),
        Undefined: sts.unit(),
    }
})

export const V2AssetId: sts.Type<V2AssetId> = sts.closedEnum(() => {
    return  {
        Abstract: sts.bytes(),
        Concrete: V2MultiLocation,
    }
})

/**
 * The `Event` enum of this pallet
 */
export const ParachainSystemEvent: sts.Type<ParachainSystemEvent> = sts.closedEnum(() => {
    return  {
        DownwardMessagesProcessed: sts.enumStruct({
            weightUsed: Weight,
            dmqHead: H256,
        }),
        DownwardMessagesReceived: sts.enumStruct({
            count: sts.number(),
        }),
        UpwardMessageSent: sts.enumStruct({
            messageHash: sts.option(() => sts.bytes()),
        }),
        ValidationFunctionApplied: sts.enumStruct({
            relayChainBlockNum: sts.number(),
        }),
        ValidationFunctionDiscarded: sts.unit(),
        ValidationFunctionStored: sts.unit(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const OrmlXcmEvent: sts.Type<OrmlXcmEvent> = sts.closedEnum(() => {
    return  {
        Sent: sts.enumStruct({
            to: V4Location,
            message: sts.array(() => V4Instruction),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const MultisigEvent: sts.Type<MultisigEvent> = sts.closedEnum(() => {
    return  {
        MultisigApproval: sts.enumStruct({
            approving: AccountId32,
            timepoint: Timepoint,
            multisig: AccountId32,
            callHash: sts.bytes(),
        }),
        MultisigCancelled: sts.enumStruct({
            cancelling: AccountId32,
            timepoint: Timepoint,
            multisig: AccountId32,
            callHash: sts.bytes(),
        }),
        MultisigExecuted: sts.enumStruct({
            approving: AccountId32,
            timepoint: Timepoint,
            multisig: AccountId32,
            callHash: sts.bytes(),
            result: sts.result(() => sts.unit(), () => DispatchError),
        }),
        NewMultisig: sts.enumStruct({
            approving: AccountId32,
            multisig: AccountId32,
            callHash: sts.bytes(),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const MultiTokensEvent: sts.Type<MultiTokensEvent> = sts.closedEnum(() => {
    return  {
        Approved: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.option(() => sts.bigint()),
            owner: AccountId32,
            operator: AccountId32,
            amount: sts.option(() => sts.bigint()),
            expiration: sts.option(() => sts.number()),
        }),
        AttributeRemoved: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.option(() => sts.bigint()),
            key: sts.bytes(),
        }),
        AttributeSet: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.option(() => sts.bigint()),
            key: sts.bytes(),
            value: sts.bytes(),
        }),
        BalanceSet: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            accountId: AccountId32,
            balance: sts.bigint(),
            reservedBalance: sts.bigint(),
        }),
        Burned: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            accountId: AccountId32,
            amount: sts.bigint(),
        }),
        ClaimTokensCompleted: sts.enumStruct({
            destination: AccountId32,
            ethereumAddress: H160,
        }),
        ClaimTokensInitiated: sts.enumStruct({
            accountId: AccountId32,
            ethereumAddress: H160,
        }),
        ClaimedCollections: sts.enumStruct({
            accountId: AccountId32,
            ethereumAddress: H160,
            collectionIds: sts.array(() => sts.bigint()),
        }),
        ClaimedTokens: sts.enumStruct({
            accountId: AccountId32,
            ethereumAddress: H160,
            assetIds: sts.array(() => AssetIdWithEth),
            moreTokensRemain: sts.boolean(),
        }),
        CollectionAccountCreated: sts.enumStruct({
            collectionId: sts.bigint(),
            accountId: AccountId32,
        }),
        CollectionAccountDestroyed: sts.enumStruct({
            collectionId: sts.bigint(),
            accountId: AccountId32,
        }),
        CollectionAccountUpdated: sts.enumStruct({
            collectionId: sts.bigint(),
            accountId: AccountId32,
            value: sts.option(() => CollectionAccount),
        }),
        CollectionCreated: sts.enumStruct({
            collectionId: sts.bigint(),
            owner: AccountId32,
        }),
        CollectionDestroyed: sts.enumStruct({
            collectionId: sts.bigint(),
            caller: AccountId32,
        }),
        CollectionMutated: sts.enumStruct({
            collectionId: sts.bigint(),
            mutation: DefaultCollectionMutation,
        }),
        CollectionTransferCancelled: sts.enumStruct({
            collectionId: sts.bigint(),
        }),
        CollectionTransferred: sts.enumStruct({
            collectionId: sts.bigint(),
            newOwner: AccountId32,
        }),
        CollectionUpdated: sts.enumStruct({
            collectionId: sts.bigint(),
            value: sts.option(() => Collection),
        }),
        Deposit: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            accountId: AccountId32,
            amount: sts.bigint(),
        }),
        Frozen: Freeze,
        Infused: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            accountId: AccountId32,
            amount: sts.bigint(),
        }),
        MigrationStep: sts.enumStruct({
            itemsProcessed: sts.number(),
            phase: sts.number(),
        }),
        Minted: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            issuer: RootOrSigned,
            recipient: AccountId32,
            amount: sts.bigint(),
        }),
        MovedReserves: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            source: AccountId32,
            destination: AccountId32,
            amount: sts.bigint(),
            reserveId: sts.option(() => sts.bytes()),
        }),
        NextCollectionIdUpdated: sts.enumStruct({
            collectionId: sts.bigint(),
        }),
        ReserveRepatriated: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            source: AccountId32,
            destination: AccountId32,
            amount: sts.bigint(),
            reserveId: sts.option(() => sts.bytes()),
        }),
        Reserved: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            accountId: AccountId32,
            amount: sts.bigint(),
            reserveId: sts.option(() => sts.bytes()),
        }),
        Slashed: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            accountId: AccountId32,
            amount: sts.bigint(),
        }),
        Thawed: Freeze,
        TokenAccountCreated: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            accountId: AccountId32,
            balance: sts.bigint(),
        }),
        TokenAccountDepositUpdated: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            depositor: AccountId32,
            deltaAccountCount: sts.number(),
        }),
        TokenAccountDestroyed: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            accountId: AccountId32,
        }),
        TokenAccountUpdated: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            accountId: AccountId32,
            value: sts.option(() => TokenAccount),
        }),
        TokenCreated: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            issuer: RootOrSigned,
            initialSupply: sts.bigint(),
        }),
        TokenDestroyed: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            caller: AccountId32,
        }),
        TokenMutated: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            mutation: DefaultTokenMutation,
        }),
        TokenUpdated: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            value: sts.option(() => Token),
        }),
        Transferred: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            operator: AccountId32,
            from: AccountId32,
            to: AccountId32,
            amount: sts.bigint(),
        }),
        Unapproved: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.option(() => sts.bigint()),
            owner: AccountId32,
            operator: AccountId32,
        }),
        Unreserved: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            accountId: AccountId32,
            amount: sts.bigint(),
            reserveId: sts.option(() => sts.bytes()),
        }),
        Withdraw: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            accountId: AccountId32,
            amount: sts.bigint(),
        }),
    }
})

export const Token: sts.Type<Token> = sts.struct(() => {
    return  {
        supply: sts.bigint(),
        cap: sts.option(() => TokenCap),
        freezeState: sts.option(() => FreezeState),
        requiresDeposit: sts.boolean(),
        creationDeposit: AmbiguousDeposit,
        ownerDeposit: sts.bigint(),
        totalTokenAccountDeposit: sts.bigint(),
        attributeCount: sts.number(),
        accountCount: sts.number(),
        marketBehavior: sts.option(() => TokenMarketBehavior),
        listingForbidden: sts.boolean(),
        metadata: DefaultTokenMetadata,
        infusion: sts.bigint(),
        anyoneCanInfuse: sts.boolean(),
        groups: sts.array(() => sts.bigint()),
    }
})

export const DefaultTokenMetadata: sts.Type<DefaultTokenMetadata> = sts.struct(() => {
    return  {
        decimalCount: sts.number(),
        name: BoundedString,
        symbol: sts.bytes(),
        foreign: sts.option(() => DefaultForeignTokenMetadata),
    }
})

export const DefaultForeignTokenMetadata: sts.Type<DefaultForeignTokenMetadata> = sts.struct(() => {
    return  {
        location: sts.option(() => V4Location),
        unitsPerSecond: sts.option(() => sts.bigint()),
    }
})

export const BoundedString = sts.bytes()

export const TokenMarketBehavior: sts.Type<TokenMarketBehavior> = sts.closedEnum(() => {
    return  {
        HasRoyalty: DefaultRoyalty,
        IsCurrency: sts.unit(),
    }
})

export const DefaultRoyalty: sts.Type<DefaultRoyalty> = sts.struct(() => {
    return  {
        beneficiary: AccountId32,
        percentage: sts.number(),
    }
})

export const AmbiguousDeposit: sts.Type<AmbiguousDeposit> = sts.struct(() => {
    return  {
        depositor: sts.option(() => AccountId32),
        amount: sts.bigint(),
    }
})

export const FreezeState: sts.Type<FreezeState> = sts.closedEnum(() => {
    return  {
        Never: sts.unit(),
        Permanent: sts.unit(),
        Temporary: sts.unit(),
    }
})

export const TokenCap: sts.Type<TokenCap> = sts.closedEnum(() => {
    return  {
        CollapsingSupply: sts.bigint(),
        Supply: sts.bigint(),
    }
})

export const DefaultTokenMutation: sts.Type<DefaultTokenMutation> = sts.struct(() => {
    return  {
        behavior: Type_164,
        listingForbidden: Type_167,
        anyoneCanInfuse: Type_167,
        name: Type_168,
    }
})

export const Type_168: sts.Type<Type_168> = sts.closedEnum(() => {
    return  {
        NoMutation: sts.unit(),
        SomeMutation: BoundedString,
    }
})

export const Type_167: sts.Type<Type_167> = sts.closedEnum(() => {
    return  {
        NoMutation: sts.unit(),
        SomeMutation: sts.boolean(),
    }
})

export const Type_164: sts.Type<Type_164> = sts.closedEnum(() => {
    return  {
        NoMutation: sts.unit(),
        SomeMutation: sts.option(() => TokenMarketBehavior),
    }
})

export const TokenAccount: sts.Type<TokenAccount> = sts.struct(() => {
    return  {
        balance: sts.bigint(),
        reservedBalance: sts.bigint(),
        lockedBalance: sts.bigint(),
        namedReserves: sts.array(() => sts.tuple(() => [sts.bytes(), sts.bigint()])),
        locks: sts.array(() => sts.tuple(() => [sts.bytes(), sts.bigint()])),
        approvals: sts.array(() => sts.tuple(() => [AccountId32, Approval])),
        isFrozen: sts.boolean(),
        deposit: sts.option(() => Deposit),
    }
})

export const Deposit: sts.Type<Deposit> = sts.struct(() => {
    return  {
        depositor: AccountId32,
        amount: sts.bigint(),
    }
})

export const Approval: sts.Type<Approval> = sts.struct(() => {
    return  {
        amount: sts.bigint(),
        expiration: sts.option(() => sts.number()),
    }
})

export const RootOrSigned: sts.Type<RootOrSigned> = sts.closedEnum(() => {
    return  {
        Root: sts.unit(),
        Signed: AccountId32,
    }
})

export const Freeze: sts.Type<Freeze> = sts.struct(() => {
    return  {
        collectionId: sts.bigint(),
        freezeType: FreezeType,
    }
})

export const FreezeType: sts.Type<FreezeType> = sts.closedEnum(() => {
    return  {
        Collection: sts.unit(),
        CollectionAccount: AccountId32,
        Token: sts.enumStruct({
            tokenId: sts.bigint(),
            freezeState: sts.option(() => FreezeState),
        }),
        TokenAccount: sts.enumStruct({
            tokenId: sts.bigint(),
            accountId: AccountId32,
        }),
    }
})

export const Collection: sts.Type<Collection> = sts.struct(() => {
    return  {
        owner: AccountId32,
        policy: DefaultCollectionPolicy,
        tokenCount: sts.bigint(),
        attributeCount: sts.number(),
        creationDeposit: Deposit,
        totalDeposit: sts.bigint(),
        explicitRoyaltyCurrencies: sts.array(() => sts.tuple(() => [AssetId, sts.unit()])),
        totalInfusion: sts.bigint(),
    }
})

export const AssetId: sts.Type<AssetId> = sts.struct(() => {
    return  {
        collectionId: sts.bigint(),
        tokenId: sts.bigint(),
    }
})

export const DefaultCollectionPolicy: sts.Type<DefaultCollectionPolicy> = sts.struct(() => {
    return  {
        mint: DefaultMintPolicy,
        transfer: DefaultTransferPolicy,
        market: DefaultMarketPolicy,
    }
})

export const DefaultMarketPolicy: sts.Type<DefaultMarketPolicy> = sts.struct(() => {
    return  {
        royalty: sts.option(() => DefaultRoyalty),
    }
})

export const DefaultTransferPolicy: sts.Type<DefaultTransferPolicy> = sts.struct(() => {
    return  {
        isFrozen: sts.boolean(),
    }
})

export const DefaultMintPolicy: sts.Type<DefaultMintPolicy> = sts.struct(() => {
    return  {
        maxTokenCount: sts.option(() => sts.bigint()),
        maxTokenSupply: sts.option(() => sts.bigint()),
        forceCollapsingSupply: sts.boolean(),
    }
})

export const DefaultCollectionMutation: sts.Type<DefaultCollectionMutation> = sts.struct(() => {
    return  {
        owner: sts.option(() => AccountId32),
        royalty: ShouldMutate,
        explicitRoyaltyCurrencies: sts.option(() => sts.array(() => AssetId)),
    }
})

export const ShouldMutate: sts.Type<ShouldMutate> = sts.closedEnum(() => {
    return  {
        NoMutation: sts.unit(),
        SomeMutation: sts.option(() => DefaultRoyalty),
    }
})

export const CollectionAccount: sts.Type<CollectionAccount> = sts.struct(() => {
    return  {
        isFrozen: sts.boolean(),
        approvals: sts.array(() => sts.tuple(() => [AccountId32, sts.option(() => sts.number())])),
        accountCount: sts.number(),
    }
})

export const AssetIdWithEth: sts.Type<AssetIdWithEth> = sts.struct(() => {
    return  {
        ethereumCollectionId: sts.bigint(),
        collectionId: sts.bigint(),
        tokenId: sts.bigint(),
    }
})

export const H160 = sts.bytes()

/**
 * The `Event` enum of this pallet
 */
export const MigrationsEvent: sts.Type<MigrationsEvent> = sts.closedEnum(() => {
    return  {
        HistoricCleared: sts.enumStruct({
            nextCursor: sts.option(() => sts.bytes()),
        }),
        MigrationAdvanced: sts.enumStruct({
            index: sts.number(),
            took: sts.number(),
        }),
        MigrationCompleted: sts.enumStruct({
            index: sts.number(),
            took: sts.number(),
        }),
        MigrationFailed: sts.enumStruct({
            index: sts.number(),
            took: sts.number(),
        }),
        MigrationSkipped: sts.enumStruct({
            index: sts.number(),
        }),
        UpgradeCompleted: sts.unit(),
        UpgradeFailed: sts.unit(),
        UpgradeStarted: sts.enumStruct({
            migrations: sts.number(),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const MessageQueueEvent: sts.Type<MessageQueueEvent> = sts.closedEnum(() => {
    return  {
        OverweightEnqueued: sts.enumStruct({
            id: sts.bytes(),
            origin: AggregateMessageOrigin,
            pageIndex: sts.number(),
            messageIndex: sts.number(),
        }),
        PageReaped: sts.enumStruct({
            origin: AggregateMessageOrigin,
            index: sts.number(),
        }),
        Processed: sts.enumStruct({
            id: H256,
            origin: AggregateMessageOrigin,
            weightUsed: Weight,
            success: sts.boolean(),
        }),
        ProcessingFailed: sts.enumStruct({
            id: H256,
            origin: AggregateMessageOrigin,
            error: ProcessMessageError,
        }),
    }
})

export const ProcessMessageError: sts.Type<ProcessMessageError> = sts.closedEnum(() => {
    return  {
        BadFormat: sts.unit(),
        Corrupt: sts.unit(),
        Overweight: Weight,
        Unsupported: sts.unit(),
        Yield: sts.unit(),
    }
})

export const AggregateMessageOrigin: sts.Type<AggregateMessageOrigin> = sts.closedEnum(() => {
    return  {
        Here: sts.unit(),
        Parent: sts.unit(),
        Sibling: Id,
    }
})

export const Id = sts.number()

/**
 * The `Event` enum of this pallet
 */
export const MatrixXcmEvent: sts.Type<MatrixXcmEvent> = sts.closedEnum(() => {
    return  {
        MinimumWeightUpdated: MinimumWeightFeePair,
        XcmTransferFailed: DispatchError,
    }
})

export const MinimumWeightFeePair: sts.Type<MinimumWeightFeePair> = sts.struct(() => {
    return  {
        minimumWeight: Weight,
        fee: sts.bigint(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const MatrixUtilityEvent: sts.Type<MatrixUtilityEvent> = sts.closedEnum(() => {
    return  {
        BatchDispatched: sts.unit(),
        BatchFailed: sts.enumStruct({
            index: sts.number(),
            error: DispatchError,
        }),
        BatchPartiallyDispatched: sts.array(() => sts.tuple(() => [sts.number(), DispatchError])),
    }
})

/**
 * The Event for this pallet
 */
export const MarketplaceEvent: sts.Type<MarketplaceEvent> = sts.closedEnum(() => {
    return  {
        AuctionFinalized: sts.enumStruct({
            listingId: H256,
            winningBid: sts.option(() => Bid),
            protocolFee: sts.bigint(),
            royalty: sts.bigint(),
        }),
        BidPlaced: sts.enumStruct({
            listingId: H256,
            bid: Bid,
        }),
        CounterOfferAnswered: sts.enumStruct({
            listingId: H256,
            creator: AccountId32,
            response: CounterOfferResponse,
        }),
        CounterOfferPlaced: sts.enumStruct({
            listingId: H256,
            counterOffer: CounterOffer,
        }),
        CounterOfferRemoved: sts.enumStruct({
            listingId: H256,
            creator: AccountId32,
        }),
        ExpiredListingRemoved: sts.enumStruct({
            listingId: H256,
        }),
        ListingCancelled: sts.enumStruct({
            listingId: H256,
        }),
        ListingCreated: sts.enumStruct({
            listingId: H256,
            listing: Listing,
        }),
        ListingFilled: sts.enumStruct({
            listingId: H256,
            buyer: AccountId32,
            price: sts.bigint(),
            amountFilled: sts.bigint(),
            amountRemaining: sts.bigint(),
            protocolFee: sts.bigint(),
            royalty: sts.bigint(),
        }),
        MigrationStep: sts.enumStruct({
            itemsProcessed: sts.number(),
            phase: sts.number(),
        }),
        ProtocolFeeSet: sts.enumStruct({
            protocolFee: Perbill,
        }),
    }
})

export const Listing: sts.Type<Listing> = sts.struct(() => {
    return  {
        creator: AccountId32,
        makeAssetId: AssetId,
        takeAssetId: AssetId,
        amount: sts.bigint(),
        price: sts.bigint(),
        minReceived: sts.bigint(),
        feeSide: FeeSide,
        creationBlock: sts.number(),
        deposit: Deposit,
        salt: sts.bytes(),
        data: ListingData,
        state: ListingState,
    }
})

export const ListingState: sts.Type<ListingState> = sts.closedEnum(() => {
    return  {
        Auction: AuctionState,
        FixedPrice: sts.enumStruct({
            amountFilled: sts.bigint(),
        }),
        Offer: OfferState,
    }
})

export const OfferState: sts.Type<OfferState> = sts.struct(() => {
    return  {
        counterOfferCount: sts.number(),
    }
})

export const AuctionState: sts.Type<AuctionState> = sts.struct(() => {
    return  {
        highBid: sts.option(() => Bid),
    }
})

export const ListingData: sts.Type<ListingData> = sts.closedEnum(() => {
    return  {
        Auction: AuctionData,
        FixedPrice: sts.unit(),
        Offer: OfferData,
    }
})

export const OfferData: sts.Type<OfferData> = sts.struct(() => {
    return  {
        expiration: sts.option(() => sts.number()),
    }
})

export const AuctionData: sts.Type<AuctionData> = sts.struct(() => {
    return  {
        startBlock: sts.number(),
        endBlock: sts.number(),
    }
})

export const FeeSide: sts.Type<FeeSide> = sts.closedEnum(() => {
    return  {
        Make: sts.unit(),
        NoFee: sts.unit(),
        Take: sts.unit(),
    }
})

export const CounterOffer: sts.Type<CounterOffer> = sts.struct(() => {
    return  {
        sellerPrice: sts.bigint(),
        buyerPrice: sts.option(() => sts.bigint()),
        deposit: Deposit,
    }
})

export const CounterOfferResponse: sts.Type<CounterOfferResponse> = sts.closedEnum(() => {
    return  {
        Accept: sts.unit(),
        Counter: sts.bigint(),
        Reject: sts.unit(),
    }
})

export const Bid: sts.Type<Bid> = sts.struct(() => {
    return  {
        bidder: AccountId32,
        price: sts.bigint(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const IdentityEvent: sts.Type<IdentityEvent> = sts.closedEnum(() => {
    return  {
        AuthorityAdded: sts.enumStruct({
            authority: AccountId32,
        }),
        AuthorityRemoved: sts.enumStruct({
            authority: AccountId32,
        }),
        DanglingUsernameRemoved: sts.enumStruct({
            who: AccountId32,
            username: sts.bytes(),
        }),
        IdentityCleared: sts.enumStruct({
            who: AccountId32,
            deposit: sts.bigint(),
        }),
        IdentityKilled: sts.enumStruct({
            who: AccountId32,
            deposit: sts.bigint(),
        }),
        IdentitySet: sts.enumStruct({
            who: AccountId32,
        }),
        JudgementGiven: sts.enumStruct({
            target: AccountId32,
            registrarIndex: sts.number(),
        }),
        JudgementRequested: sts.enumStruct({
            who: AccountId32,
            registrarIndex: sts.number(),
        }),
        JudgementUnrequested: sts.enumStruct({
            who: AccountId32,
            registrarIndex: sts.number(),
        }),
        PreapprovalExpired: sts.enumStruct({
            whose: AccountId32,
        }),
        PrimaryUsernameSet: sts.enumStruct({
            who: AccountId32,
            username: sts.bytes(),
        }),
        RegistrarAdded: sts.enumStruct({
            registrarIndex: sts.number(),
        }),
        SubIdentityAdded: sts.enumStruct({
            sub: AccountId32,
            main: AccountId32,
            deposit: sts.bigint(),
        }),
        SubIdentityRemoved: sts.enumStruct({
            sub: AccountId32,
            main: AccountId32,
            deposit: sts.bigint(),
        }),
        SubIdentityRevoked: sts.enumStruct({
            sub: AccountId32,
            main: AccountId32,
            deposit: sts.bigint(),
        }),
        UsernameQueued: sts.enumStruct({
            who: AccountId32,
            username: sts.bytes(),
            expiration: sts.number(),
        }),
        UsernameSet: sts.enumStruct({
            who: AccountId32,
            username: sts.bytes(),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const FuelTanksEvent: sts.Type<FuelTanksEvent> = sts.closedEnum(() => {
    return  {
        AccountAdded: sts.enumStruct({
            tankId: AccountId32,
            userId: AccountId32,
            tankDeposit: sts.bigint(),
            userDeposit: sts.bigint(),
            totalReceived: sts.bigint(),
        }),
        AccountRemoved: sts.enumStruct({
            tankId: AccountId32,
            userId: AccountId32,
        }),
        AccountRuleDataRemoved: sts.enumStruct({
            tankId: AccountId32,
            userId: AccountId32,
            ruleSetId: sts.number(),
            ruleKind: DispatchRuleKind,
        }),
        CallDispatched: sts.enumStruct({
            caller: AccountId32,
            tankId: AccountId32,
        }),
        ConsumptionSet: sts.enumStruct({
            tankId: AccountId32,
            userId: sts.option(() => AccountId32),
            ruleSetId: sts.number(),
            consumption: Consumption,
        }),
        DispatchFailed: sts.enumStruct({
            tankId: AccountId32,
            caller: AccountId32,
            error: DispatchError,
        }),
        FreezeStateMutated: sts.enumStruct({
            tankId: AccountId32,
            ruleSetId: sts.option(() => sts.number()),
            isFrozen: sts.boolean(),
        }),
        FuelTankCreated: sts.enumStruct({
            owner: AccountId32,
            name: sts.bytes(),
            tankId: AccountId32,
        }),
        FuelTankDestroyed: sts.enumStruct({
            tankId: AccountId32,
        }),
        FuelTankMutated: sts.enumStruct({
            tankId: AccountId32,
            mutation: DefaultTankMutation,
        }),
        MigrationStep: sts.enumStruct({
            itemsProcessed: sts.number(),
            phase: sts.number(),
        }),
        RuleSetInserted: sts.enumStruct({
            tankId: AccountId32,
            ruleSetId: sts.number(),
        }),
        RuleSetRemoved: sts.enumStruct({
            tankId: AccountId32,
            ruleSetId: sts.number(),
        }),
    }
})

export const DefaultTankMutation: sts.Type<DefaultTankMutation> = sts.struct(() => {
    return  {
        userAccountManagement: Type_241,
        coveragePolicy: sts.option(() => CoveragePolicy),
        accountRules: sts.option(() => sts.array(() => AccountRuleDescriptor)),
    }
})

export const AccountRuleDescriptor: sts.Type<AccountRuleDescriptor> = sts.closedEnum(() => {
    return  {
        RequireToken: RequireTokenRule,
        WhitelistedCallers: sts.array(() => AccountId32),
    }
})

export const Type_241: sts.Type<Type_241> = sts.closedEnum(() => {
    return  {
        NoMutation: sts.unit(),
        SomeMutation: sts.option(() => UserAccountManagement),
    }
})

/**
 * The pallet's event type.
 */
export const ExtrinsicPauseEvent: sts.Type<ExtrinsicPauseEvent> = sts.closedEnum(() => {
    return  {
        ExtrinsicPaused: sts.enumStruct({
            palletName: sts.bytes(),
            extrinsicName: sts.bytes(),
        }),
        ExtrinsicResumed: sts.enumStruct({
            palletName: sts.bytes(),
            extrinsicName: sts.bytes(),
        }),
        PalletPaused: sts.enumStruct({
            palletName: sts.bytes(),
        }),
        PalletResumed: sts.enumStruct({
            palletName: sts.bytes(),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const DmpQueueEvent: sts.Type<DmpQueueEvent> = sts.closedEnum(() => {
    return  {
        CleanedSome: sts.enumStruct({
            keysRemoved: sts.number(),
        }),
        Completed: sts.enumStruct({
            error: sts.boolean(),
        }),
        CompletedExport: sts.unit(),
        CompletedOverweightExport: sts.unit(),
        ExportFailed: sts.enumStruct({
            page: sts.number(),
        }),
        ExportOverweightFailed: sts.enumStruct({
            index: sts.bigint(),
        }),
        Exported: sts.enumStruct({
            page: sts.number(),
        }),
        ExportedOverweight: sts.enumStruct({
            index: sts.bigint(),
        }),
        StartedCleanup: sts.unit(),
        StartedExport: sts.unit(),
        StartedOverweightExport: sts.unit(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const DemocracyEvent: sts.Type<DemocracyEvent> = sts.closedEnum(() => {
    return  {
        Blacklisted: sts.enumStruct({
            proposalHash: H256,
        }),
        Cancelled: sts.enumStruct({
            refIndex: sts.number(),
        }),
        Delegated: sts.enumStruct({
            who: AccountId32,
            target: AccountId32,
        }),
        ExternalTabled: sts.unit(),
        MetadataCleared: sts.enumStruct({
            owner: MetadataOwner,
            hash: H256,
        }),
        MetadataSet: sts.enumStruct({
            owner: MetadataOwner,
            hash: H256,
        }),
        MetadataTransferred: sts.enumStruct({
            prevOwner: MetadataOwner,
            owner: MetadataOwner,
            hash: H256,
        }),
        NotPassed: sts.enumStruct({
            refIndex: sts.number(),
        }),
        Passed: sts.enumStruct({
            refIndex: sts.number(),
        }),
        ProposalCanceled: sts.enumStruct({
            propIndex: sts.number(),
        }),
        Proposed: sts.enumStruct({
            proposalIndex: sts.number(),
            deposit: sts.bigint(),
        }),
        Seconded: sts.enumStruct({
            seconder: AccountId32,
            propIndex: sts.number(),
        }),
        Started: sts.enumStruct({
            refIndex: sts.number(),
            threshold: VoteThreshold,
        }),
        Tabled: sts.enumStruct({
            proposalIndex: sts.number(),
            deposit: sts.bigint(),
        }),
        Undelegated: sts.enumStruct({
            account: AccountId32,
        }),
        Vetoed: sts.enumStruct({
            who: AccountId32,
            proposalHash: H256,
            until: sts.number(),
        }),
        Voted: sts.enumStruct({
            voter: AccountId32,
            refIndex: sts.number(),
            vote: AccountVote,
        }),
    }
})

export const AccountVote: sts.Type<AccountVote> = sts.closedEnum(() => {
    return  {
        Split: sts.enumStruct({
            aye: sts.bigint(),
            nay: sts.bigint(),
        }),
        Standard: sts.enumStruct({
            vote: Vote,
            balance: sts.bigint(),
        }),
    }
})

export const Vote = sts.number()

export const VoteThreshold: sts.Type<VoteThreshold> = sts.closedEnum(() => {
    return  {
        SimpleMajority: sts.unit(),
        SuperMajorityAgainst: sts.unit(),
        SuperMajorityApprove: sts.unit(),
    }
})

export const MetadataOwner: sts.Type<MetadataOwner> = sts.closedEnum(() => {
    return  {
        External: sts.unit(),
        Proposal: sts.number(),
        Referendum: sts.number(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const CumulusXcmEvent: sts.Type<CumulusXcmEvent> = sts.closedEnum(() => {
    return  {
        ExecutedDownward: sts.tuple(() => [sts.bytes(), V4Outcome]),
        InvalidFormat: sts.bytes(),
        UnsupportedVersion: sts.bytes(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const CouncilEvent: sts.Type<CouncilEvent> = sts.closedEnum(() => {
    return  {
        Approved: sts.enumStruct({
            proposalHash: H256,
        }),
        Closed: sts.enumStruct({
            proposalHash: H256,
            yes: sts.number(),
            no: sts.number(),
        }),
        Disapproved: sts.enumStruct({
            proposalHash: H256,
        }),
        Executed: sts.enumStruct({
            proposalHash: H256,
            result: sts.result(() => sts.unit(), () => DispatchError),
        }),
        MemberExecuted: sts.enumStruct({
            proposalHash: H256,
            result: sts.result(() => sts.unit(), () => DispatchError),
        }),
        Proposed: sts.enumStruct({
            account: AccountId32,
            proposalIndex: sts.number(),
            proposalHash: H256,
            threshold: sts.number(),
        }),
        Voted: sts.enumStruct({
            account: AccountId32,
            proposalHash: H256,
            voted: sts.boolean(),
            yes: sts.number(),
            no: sts.number(),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const CommunityPoolEvent: sts.Type<CommunityPoolEvent> = sts.closedEnum(() => {
    return  {
        AssetSpendApproved: sts.enumStruct({
            index: sts.number(),
            amount: sts.bigint(),
            beneficiary: AccountId32,
            validFrom: sts.number(),
            expireAt: sts.number(),
        }),
        AssetSpendVoided: sts.enumStruct({
            index: sts.number(),
        }),
        Awarded: sts.enumStruct({
            proposalIndex: sts.number(),
            award: sts.bigint(),
            account: AccountId32,
        }),
        Burnt: sts.enumStruct({
            burntFunds: sts.bigint(),
        }),
        Deposit: sts.enumStruct({
            value: sts.bigint(),
        }),
        Paid: sts.enumStruct({
            index: sts.number(),
        }),
        PaymentFailed: sts.enumStruct({
            index: sts.number(),
        }),
        Proposed: sts.enumStruct({
            proposalIndex: sts.number(),
        }),
        Rejected: sts.enumStruct({
            proposalIndex: sts.number(),
            slashed: sts.bigint(),
        }),
        Rollover: sts.enumStruct({
            rolloverBalance: sts.bigint(),
        }),
        SpendApproved: sts.enumStruct({
            proposalIndex: sts.number(),
            amount: sts.bigint(),
            beneficiary: AccountId32,
        }),
        SpendProcessed: sts.enumStruct({
            index: sts.number(),
        }),
        Spending: sts.enumStruct({
            budgetRemaining: sts.bigint(),
        }),
        UpdatedInactive: sts.enumStruct({
            reactivated: sts.bigint(),
            deactivated: sts.bigint(),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const CollatorStakingEvent: sts.Type<CollatorStakingEvent> = sts.closedEnum(() => {
    return  {
        CandidateJoined: sts.enumStruct({
            accountId: AccountId32,
            amount: sts.bigint(),
            rewardsCut: Perbill,
        }),
        CandidateRemoved: sts.enumStruct({
            accountId: AccountId32,
        }),
        CollatorSelected: sts.enumStruct({
            accountId: AccountId32,
        }),
        NewInvulnerables: sts.enumStruct({
            new: sts.array(() => AccountId32),
        }),
        Nominated: sts.enumStruct({
            accountId: AccountId32,
            collatorId: AccountId32,
            amount: sts.bigint(),
        }),
        NominationRemoved: sts.enumStruct({
            accountId: AccountId32,
            collatorId: AccountId32,
            amount: sts.bigint(),
        }),
        RoundFinalized: sts.enumStruct({
            number: sts.number(),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const ClaimsEvent: sts.Type<ClaimsEvent> = sts.closedEnum(() => {
    return  {
        ClaimMinted: sts.enumStruct({
            who: H160,
            amount: sts.bigint(),
        }),
        ClaimMoved: sts.enumStruct({
            old: H160,
            new: H160,
        }),
        ClaimRejected: sts.enumStruct({
            account: H160,
            transactionHash: H256,
        }),
        ClaimRequested: sts.enumStruct({
            who: H160,
            amountBurned: sts.bigint(),
            transactionHash: H256,
            isEfiToken: sts.boolean(),
            amountClaimable: sts.bigint(),
        }),
        Claimed: sts.enumStruct({
            who: AccountId32,
            ethereumAddress: sts.option(() => H160),
            amount: sts.bigint(),
        }),
        DelayTimeForClaimSet: sts.enumStruct({
            delayTime: sts.number(),
        }),
        EthereumBlocksProcessed: sts.enumStruct({
            blockNumber: sts.number(),
        }),
        ExchangeRateSet: sts.enumStruct({
            exchangeRate: Perbill,
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const BountiesEvent: sts.Type<BountiesEvent> = sts.closedEnum(() => {
    return  {
        BountyApproved: sts.enumStruct({
            index: sts.number(),
        }),
        BountyAwarded: sts.enumStruct({
            index: sts.number(),
            beneficiary: AccountId32,
        }),
        BountyBecameActive: sts.enumStruct({
            index: sts.number(),
        }),
        BountyCanceled: sts.enumStruct({
            index: sts.number(),
        }),
        BountyClaimed: sts.enumStruct({
            index: sts.number(),
            payout: sts.bigint(),
            beneficiary: AccountId32,
        }),
        BountyExtended: sts.enumStruct({
            index: sts.number(),
        }),
        BountyProposed: sts.enumStruct({
            index: sts.number(),
        }),
        BountyRejected: sts.enumStruct({
            index: sts.number(),
            bond: sts.bigint(),
        }),
        CuratorAccepted: sts.enumStruct({
            bountyId: sts.number(),
            curator: AccountId32,
        }),
        CuratorProposed: sts.enumStruct({
            bountyId: sts.number(),
            curator: AccountId32,
        }),
        CuratorUnassigned: sts.enumStruct({
            bountyId: sts.number(),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const BalancesEvent: sts.Type<BalancesEvent> = sts.closedEnum(() => {
    return  {
        BalanceSet: sts.enumStruct({
            who: AccountId32,
            free: sts.bigint(),
        }),
        Burned: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Deposit: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        DustLost: sts.enumStruct({
            account: AccountId32,
            amount: sts.bigint(),
        }),
        Endowed: sts.enumStruct({
            account: AccountId32,
            freeBalance: sts.bigint(),
        }),
        Frozen: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Issued: sts.enumStruct({
            amount: sts.bigint(),
        }),
        Locked: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Minted: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Rescinded: sts.enumStruct({
            amount: sts.bigint(),
        }),
        ReserveRepatriated: sts.enumStruct({
            from: AccountId32,
            to: AccountId32,
            amount: sts.bigint(),
            destinationStatus: BalanceStatus,
        }),
        Reserved: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Restored: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Slashed: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Suspended: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Thawed: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        TotalIssuanceForced: sts.enumStruct({
            old: sts.bigint(),
            new: sts.bigint(),
        }),
        Transfer: sts.enumStruct({
            from: AccountId32,
            to: AccountId32,
            amount: sts.bigint(),
        }),
        Unlocked: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Unreserved: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Upgraded: sts.enumStruct({
            who: AccountId32,
        }),
        Withdraw: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
    }
})

export const BalanceStatus: sts.Type<BalanceStatus> = sts.closedEnum(() => {
    return  {
        Free: sts.unit(),
        Reserved: sts.unit(),
    }
})

export const Phase: sts.Type<Phase> = sts.closedEnum(() => {
    return  {
        ApplyExtrinsic: sts.number(),
        Finalization: sts.unit(),
        Initialization: sts.unit(),
    }
})

export const ProxyType: sts.Type<ProxyType> = sts.closedEnum(() => {
    return  {
        Any: sts.unit(),
        Governance: sts.unit(),
        Tokens: sts.unit(),
    }
})

export const RuleSetDescriptor: sts.Type<RuleSetDescriptor> = sts.struct(() => {
    return  {
        rules: sts.array(() => DispatchRuleDescriptor),
        requireAccount: sts.boolean(),
    }
})

export const DispatchRuleDescriptor: sts.Type<DispatchRuleDescriptor> = sts.closedEnum(() => {
    return  {
        MaxFuelBurnPerTransaction: MaxFuelBurnPerTransactionRule,
        MinimumInfusion: MinimumInfusionRule,
        PermittedCalls: sts.array(() => sts.bytes()),
        PermittedExtrinsics: sts.array(() => Call),
        RequireSignature: RequireSignatureRule,
        RequireToken: RequireTokenRule,
        TankFuelBudget: TankFuelBudgetRuleDescriptor,
        UserFuelBudget: UserFuelBudgetRuleDescriptor,
        WhitelistedCallers: sts.array(() => AccountId32),
        WhitelistedCollections: sts.array(() => sts.bigint()),
        WhitelistedPallets: sts.array(() => Call),
    }
})

export const UserFuelBudgetRuleDescriptor: sts.Type<UserFuelBudgetRuleDescriptor> = sts.struct(() => {
    return  {
        amount: sts.bigint(),
        resetPeriod: sts.number(),
    }
})

export const TankFuelBudgetRuleDescriptor: sts.Type<TankFuelBudgetRuleDescriptor> = sts.struct(() => {
    return  {
        amount: sts.bigint(),
        resetPeriod: sts.number(),
    }
})

export const DispatchSettings: sts.Type<DispatchSettings> = sts.struct(() => {
    return  {
        useNoneOrigin: sts.boolean(),
        paysRemainingFee: sts.boolean(),
        signature: sts.option(() => ExpirableSignature),
    }
})

export const ExpirableSignature: sts.Type<ExpirableSignature> = sts.struct(() => {
    return  {
        signature: sts.bytes(),
        expiryBlock: sts.number(),
    }
})

export const MultiAddress: sts.Type<MultiAddress> = sts.closedEnum(() => {
    return  {
        Address20: sts.bytes(),
        Address32: sts.bytes(),
        Id: AccountId32,
        Index: sts.unit(),
        Raw: sts.bytes(),
    }
})

export const FuelTankDescriptor: sts.Type<FuelTankDescriptor> = sts.struct(() => {
    return  {
        name: sts.bytes(),
        userAccountManagement: sts.option(() => UserAccountManagement),
        ruleSets: sts.array(() => sts.tuple(() => [sts.number(), RuleSetDescriptor])),
        coveragePolicy: CoveragePolicy,
        accountRules: sts.array(() => AccountRuleDescriptor),
    }
})

export const Timepoint: sts.Type<Timepoint> = sts.struct(() => {
    return  {
        height: sts.number(),
        index: sts.number(),
    }
})

export const Weight: sts.Type<Weight> = sts.struct(() => {
    return  {
        refTime: sts.bigint(),
        proofSize: sts.bigint(),
    }
})

export const OriginCaller: sts.Type<OriginCaller> = sts.closedEnum(() => {
    return  {
        Council: Type_361,
        CumulusXcm: Type_364,
        PolkadotXcm: Origin,
        TechnicalCommittee: Type_362,
        Void: Void,
        system: RawOrigin,
    }
})

export const RawOrigin: sts.Type<RawOrigin> = sts.closedEnum(() => {
    return  {
        None: sts.unit(),
        Root: sts.unit(),
        Signed: AccountId32,
    }
})

export const Void: sts.Type<Void> = sts.closedEnum(() => {
    return  {
    }
})

export const Type_362: sts.Type<Type_362> = sts.closedEnum(() => {
    return  {
        Member: AccountId32,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

export const Origin: sts.Type<Origin> = sts.closedEnum(() => {
    return  {
        Response: V4Location,
        Xcm: V4Location,
    }
})

export const Type_364: sts.Type<Type_364> = sts.closedEnum(() => {
    return  {
        Relay: sts.unit(),
        SiblingParachain: Id,
    }
})

export const Type_361: sts.Type<Type_361> = sts.closedEnum(() => {
    return  {
        Member: AccountId32,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

export const Call: sts.Type<Call> = sts.closedEnum(() => {
    return  {
        Balances: BalancesCall,
        Bounties: BountiesCall,
        Claims: ClaimsCall,
        CollatorStaking: CollatorStakingCall,
        CommunityPool: CommunityPoolCall,
        Council: CouncilCall,
        CumulusXcm: CumulusXcmCall,
        Democracy: DemocracyCall,
        DmpQueue: DmpQueueCall,
        ExtrinsicPause: ExtrinsicPauseCall,
        FuelTanks: FuelTanksCall,
        Identity: IdentityCall,
        Marketplace: MarketplaceCall,
        MatrixUtility: MatrixUtilityCall,
        MatrixXcm: MatrixXcmCall,
        MessageQueue: MessageQueueCall,
        Migrations: MigrationsCall,
        MultiTokens: MultiTokensCall,
        Multisig: MultisigCall,
        OrmlXcm: OrmlXcmCall,
        ParachainInfo: ParachainInfoCall,
        ParachainSystem: ParachainSystemCall,
        PolkadotXcm: PolkadotXcmCall,
        Pools: PoolsCall,
        Preimage: PreimageCall,
        Proxy: ProxyCall,
        SafeMode: SafeModeCall,
        Scheduler: SchedulerCall,
        Session: SessionCall,
        Sudo: SudoCall,
        System: SystemCall,
        TechnicalCommittee: TechnicalCommitteeCall,
        TechnicalMembership: TechnicalMembershipCall,
        Timestamp: TimestampCall,
        Utility: UtilityCall,
        XTokens: XTokensCall,
        XcmpQueue: XcmpQueueCall,
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const XcmpQueueCall: sts.Type<XcmpQueueCall> = sts.closedEnum(() => {
    return  {
        resume_xcm_execution: sts.unit(),
        suspend_xcm_execution: sts.unit(),
        update_drop_threshold: sts.enumStruct({
            new: sts.number(),
        }),
        update_resume_threshold: sts.enumStruct({
            new: sts.number(),
        }),
        update_suspend_threshold: sts.enumStruct({
            new: sts.number(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const XTokensCall: sts.Type<XTokensCall> = sts.closedEnum(() => {
    return  {
        transfer: sts.enumStruct({
            currencyId: AssetId,
            amount: sts.bigint(),
            dest: VersionedLocation,
            destWeightLimit: V3WeightLimit,
        }),
        transfer_multiasset: sts.enumStruct({
            asset: VersionedAsset,
            dest: VersionedLocation,
            destWeightLimit: V3WeightLimit,
        }),
        transfer_multiasset_with_fee: sts.enumStruct({
            asset: VersionedAsset,
            fee: VersionedAsset,
            dest: VersionedLocation,
            destWeightLimit: V3WeightLimit,
        }),
        transfer_multiassets: sts.enumStruct({
            assets: VersionedAssets,
            feeItem: sts.number(),
            dest: VersionedLocation,
            destWeightLimit: V3WeightLimit,
        }),
        transfer_multicurrencies: sts.enumStruct({
            currencies: sts.array(() => sts.tuple(() => [AssetId, sts.bigint()])),
            feeItem: sts.number(),
            dest: VersionedLocation,
            destWeightLimit: V3WeightLimit,
        }),
        transfer_with_fee: sts.enumStruct({
            currencyId: AssetId,
            amount: sts.bigint(),
            fee: sts.bigint(),
            dest: VersionedLocation,
            destWeightLimit: V3WeightLimit,
        }),
    }
})

export const VersionedAsset: sts.Type<VersionedAsset> = sts.closedEnum(() => {
    return  {
        V2: V2MultiAsset,
        V3: V3MultiAsset,
        V4: V4Asset,
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const UtilityCall: sts.Type<UtilityCall> = sts.closedEnum(() => {
    return  {
        as_derivative: sts.enumStruct({
            index: sts.number(),
            call: Call,
        }),
        batch: sts.enumStruct({
            calls: sts.array(() => Call),
        }),
        batch_all: sts.enumStruct({
            calls: sts.array(() => Call),
        }),
        dispatch_as: sts.enumStruct({
            asOrigin: OriginCaller,
            call: Call,
        }),
        force_batch: sts.enumStruct({
            calls: sts.array(() => Call),
        }),
        with_weight: sts.enumStruct({
            call: Call,
            weight: Weight,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const TimestampCall: sts.Type<TimestampCall> = sts.closedEnum(() => {
    return  {
        set: sts.enumStruct({
            now: sts.bigint(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const TechnicalMembershipCall: sts.Type<TechnicalMembershipCall> = sts.closedEnum(() => {
    return  {
        add_member: sts.enumStruct({
            who: MultiAddress,
        }),
        change_key: sts.enumStruct({
            new: MultiAddress,
        }),
        clear_prime: sts.unit(),
        remove_member: sts.enumStruct({
            who: MultiAddress,
        }),
        reset_members: sts.enumStruct({
            members: sts.array(() => AccountId32),
        }),
        set_prime: sts.enumStruct({
            who: MultiAddress,
        }),
        swap_member: sts.enumStruct({
            remove: MultiAddress,
            add: MultiAddress,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const TechnicalCommitteeCall: sts.Type<TechnicalCommitteeCall> = sts.closedEnum(() => {
    return  {
        close: sts.enumStruct({
            proposalHash: H256,
            index: sts.number(),
            proposalWeightBound: Weight,
            lengthBound: sts.number(),
        }),
        disapprove_proposal: sts.enumStruct({
            proposalHash: H256,
        }),
        execute: sts.enumStruct({
            proposal: Call,
            lengthBound: sts.number(),
        }),
        propose: sts.enumStruct({
            threshold: sts.number(),
            proposal: Call,
            lengthBound: sts.number(),
        }),
        set_members: sts.enumStruct({
            newMembers: sts.array(() => AccountId32),
            prime: sts.option(() => AccountId32),
            oldCount: sts.number(),
        }),
        vote: sts.enumStruct({
            proposal: H256,
            index: sts.number(),
            approve: sts.boolean(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const SystemCall: sts.Type<SystemCall> = sts.closedEnum(() => {
    return  {
        apply_authorized_upgrade: sts.enumStruct({
            code: sts.bytes(),
        }),
        authorize_upgrade: sts.enumStruct({
            codeHash: H256,
        }),
        authorize_upgrade_without_checks: sts.enumStruct({
            codeHash: H256,
        }),
        kill_prefix: sts.enumStruct({
            prefix: sts.bytes(),
            subkeys: sts.number(),
        }),
        kill_storage: sts.enumStruct({
            keys: sts.array(() => sts.bytes()),
        }),
        remark: sts.enumStruct({
            remark: sts.bytes(),
        }),
        remark_with_event: sts.enumStruct({
            remark: sts.bytes(),
        }),
        set_code: sts.enumStruct({
            code: sts.bytes(),
        }),
        set_code_without_checks: sts.enumStruct({
            code: sts.bytes(),
        }),
        set_heap_pages: sts.enumStruct({
            pages: sts.bigint(),
        }),
        set_storage: sts.enumStruct({
            items: sts.array(() => sts.tuple(() => [sts.bytes(), sts.bytes()])),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const SudoCall: sts.Type<SudoCall> = sts.closedEnum(() => {
    return  {
        remove_key: sts.unit(),
        set_key: sts.enumStruct({
            new: MultiAddress,
        }),
        sudo: sts.enumStruct({
            call: Call,
        }),
        sudo_as: sts.enumStruct({
            who: MultiAddress,
            call: Call,
        }),
        sudo_unchecked_weight: sts.enumStruct({
            call: Call,
            weight: Weight,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const SessionCall: sts.Type<SessionCall> = sts.closedEnum(() => {
    return  {
        purge_keys: sts.unit(),
        set_keys: sts.enumStruct({
            keys: SessionKeys,
            proof: sts.bytes(),
        }),
    }
})

export const SessionKeys: sts.Type<SessionKeys> = sts.struct(() => {
    return  {
        aura: Public,
        pools: Public,
    }
})

export const Public = sts.bytes()

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const SchedulerCall: sts.Type<SchedulerCall> = sts.closedEnum(() => {
    return  {
        cancel: sts.enumStruct({
            when: sts.number(),
            index: sts.number(),
        }),
        cancel_named: sts.enumStruct({
            id: sts.bytes(),
        }),
        cancel_retry: sts.enumStruct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
        }),
        cancel_retry_named: sts.enumStruct({
            id: sts.bytes(),
        }),
        schedule: sts.enumStruct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: Call,
        }),
        schedule_after: sts.enumStruct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: Call,
        }),
        schedule_named: sts.enumStruct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: Call,
        }),
        schedule_named_after: sts.enumStruct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: Call,
        }),
        set_retry: sts.enumStruct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            retries: sts.number(),
            period: sts.number(),
        }),
        set_retry_named: sts.enumStruct({
            id: sts.bytes(),
            retries: sts.number(),
            period: sts.number(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const SafeModeCall: sts.Type<SafeModeCall> = sts.closedEnum(() => {
    return  {
        enter: sts.unit(),
        extend: sts.unit(),
        force_enter: sts.unit(),
        force_exit: sts.unit(),
        force_extend: sts.unit(),
        force_release_deposit: sts.enumStruct({
            account: AccountId32,
            block: sts.number(),
        }),
        force_slash_deposit: sts.enumStruct({
            account: AccountId32,
            block: sts.number(),
        }),
        release_deposit: sts.enumStruct({
            account: AccountId32,
            block: sts.number(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ProxyCall: sts.Type<ProxyCall> = sts.closedEnum(() => {
    return  {
        add_proxy: sts.enumStruct({
            delegate: MultiAddress,
            proxyType: ProxyType,
            delay: sts.number(),
        }),
        announce: sts.enumStruct({
            real: MultiAddress,
            callHash: H256,
        }),
        create_pure: sts.enumStruct({
            proxyType: ProxyType,
            delay: sts.number(),
            index: sts.number(),
        }),
        kill_pure: sts.enumStruct({
            spawner: MultiAddress,
            proxyType: ProxyType,
            index: sts.number(),
            height: sts.number(),
            extIndex: sts.number(),
        }),
        proxy: sts.enumStruct({
            real: MultiAddress,
            forceProxyType: sts.option(() => ProxyType),
            call: Call,
        }),
        proxy_announced: sts.enumStruct({
            delegate: MultiAddress,
            real: MultiAddress,
            forceProxyType: sts.option(() => ProxyType),
            call: Call,
        }),
        reject_announcement: sts.enumStruct({
            delegate: MultiAddress,
            callHash: H256,
        }),
        remove_announcement: sts.enumStruct({
            real: MultiAddress,
            callHash: H256,
        }),
        remove_proxies: sts.unit(),
        remove_proxy: sts.enumStruct({
            delegate: MultiAddress,
            proxyType: ProxyType,
            delay: sts.number(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const PreimageCall: sts.Type<PreimageCall> = sts.closedEnum(() => {
    return  {
        ensure_updated: sts.enumStruct({
            hashes: sts.array(() => H256),
        }),
        note_preimage: sts.enumStruct({
            bytes: sts.bytes(),
        }),
        request_preimage: sts.enumStruct({
            hash: H256,
        }),
        unnote_preimage: sts.enumStruct({
            hash: H256,
        }),
        unrequest_preimage: sts.enumStruct({
            hash: H256,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const PoolsCall: sts.Type<PoolsCall> = sts.closedEnum(() => {
    return  {
        mutate_pools: sts.enumStruct({
            mutation: PoolsMutation,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const PolkadotXcmCall: sts.Type<PolkadotXcmCall> = sts.closedEnum(() => {
    return  {
        claim_assets: sts.enumStruct({
            assets: VersionedAssets,
            beneficiary: VersionedLocation,
        }),
        execute: sts.enumStruct({
            message: Type_414,
            maxWeight: Weight,
        }),
        force_default_xcm_version: sts.enumStruct({
            maybeXcmVersion: sts.option(() => sts.number()),
        }),
        force_subscribe_version_notify: sts.enumStruct({
            location: VersionedLocation,
        }),
        force_suspension: sts.enumStruct({
            suspended: sts.boolean(),
        }),
        force_unsubscribe_version_notify: sts.enumStruct({
            location: VersionedLocation,
        }),
        force_xcm_version: sts.enumStruct({
            location: V4Location,
            version: sts.number(),
        }),
        limited_reserve_transfer_assets: sts.enumStruct({
            dest: VersionedLocation,
            beneficiary: VersionedLocation,
            assets: VersionedAssets,
            feeAssetItem: sts.number(),
            weightLimit: V3WeightLimit,
        }),
        limited_teleport_assets: sts.enumStruct({
            dest: VersionedLocation,
            beneficiary: VersionedLocation,
            assets: VersionedAssets,
            feeAssetItem: sts.number(),
            weightLimit: V3WeightLimit,
        }),
        reserve_transfer_assets: sts.enumStruct({
            dest: VersionedLocation,
            beneficiary: VersionedLocation,
            assets: VersionedAssets,
            feeAssetItem: sts.number(),
        }),
        send: sts.enumStruct({
            dest: VersionedLocation,
            message: VersionedXcm,
        }),
        teleport_assets: sts.enumStruct({
            dest: VersionedLocation,
            beneficiary: VersionedLocation,
            assets: VersionedAssets,
            feeAssetItem: sts.number(),
        }),
        transfer_assets: sts.enumStruct({
            dest: VersionedLocation,
            beneficiary: VersionedLocation,
            assets: VersionedAssets,
            feeAssetItem: sts.number(),
            weightLimit: V3WeightLimit,
        }),
    }
})

export const VersionedXcm: sts.Type<VersionedXcm> = sts.closedEnum(() => {
    return  {
        V2: sts.array(() => V2Instruction),
        V3: sts.array(() => V3Instruction),
        V4: sts.array(() => V4Instruction),
    }
})

export const V3Instruction: sts.Type<V3Instruction> = sts.closedEnum(() => {
    return  {
        AliasOrigin: V3MultiLocation,
        BurnAsset: sts.array(() => V3MultiAsset),
        BuyExecution: sts.enumStruct({
            fees: V3MultiAsset,
            weightLimit: V3WeightLimit,
        }),
        ClaimAsset: sts.enumStruct({
            assets: sts.array(() => V3MultiAsset),
            ticket: V3MultiLocation,
        }),
        ClearError: sts.unit(),
        ClearOrigin: sts.unit(),
        ClearTopic: sts.unit(),
        ClearTransactStatus: sts.unit(),
        DepositAsset: sts.enumStruct({
            assets: V3MultiAssetFilter,
            beneficiary: V3MultiLocation,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: V3MultiAssetFilter,
            dest: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        DescendOrigin: V3Junctions,
        ExchangeAsset: sts.enumStruct({
            give: V3MultiAssetFilter,
            want: sts.array(() => V3MultiAsset),
            maximal: sts.boolean(),
        }),
        ExpectAsset: sts.array(() => V3MultiAsset),
        ExpectError: sts.option(() => sts.tuple(() => [sts.number(), V3Error])),
        ExpectOrigin: sts.option(() => V3MultiLocation),
        ExpectPallet: sts.enumStruct({
            index: sts.number(),
            name: sts.bytes(),
            moduleName: sts.bytes(),
            crateMajor: sts.number(),
            minCrateMinor: sts.number(),
        }),
        ExpectTransactStatus: V3MaybeErrorCode,
        ExportMessage: sts.enumStruct({
            network: V3NetworkId,
            destination: V3Junctions,
            xcm: sts.array(() => V3Instruction),
        }),
        HrmpChannelAccepted: sts.enumStruct({
            recipient: sts.number(),
        }),
        HrmpChannelClosing: sts.enumStruct({
            initiator: sts.number(),
            sender: sts.number(),
            recipient: sts.number(),
        }),
        HrmpNewChannelOpenRequest: sts.enumStruct({
            sender: sts.number(),
            maxMessageSize: sts.number(),
            maxCapacity: sts.number(),
        }),
        InitiateReserveWithdraw: sts.enumStruct({
            assets: V3MultiAssetFilter,
            reserve: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: V3MultiAssetFilter,
            dest: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        LockAsset: sts.enumStruct({
            asset: V3MultiAsset,
            unlocker: V3MultiLocation,
        }),
        NoteUnlockable: sts.enumStruct({
            asset: V3MultiAsset,
            owner: V3MultiLocation,
        }),
        QueryPallet: sts.enumStruct({
            moduleName: sts.bytes(),
            responseInfo: V3QueryResponseInfo,
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V3Response,
            maxWeight: Weight,
            querier: sts.option(() => V3MultiLocation),
        }),
        ReceiveTeleportedAsset: sts.array(() => V3MultiAsset),
        RefundSurplus: sts.unit(),
        ReportError: V3QueryResponseInfo,
        ReportHolding: sts.enumStruct({
            responseInfo: V3QueryResponseInfo,
            assets: V3MultiAssetFilter,
        }),
        ReportTransactStatus: V3QueryResponseInfo,
        RequestUnlock: sts.enumStruct({
            asset: V3MultiAsset,
            locker: V3MultiLocation,
        }),
        ReserveAssetDeposited: sts.array(() => V3MultiAsset),
        SetAppendix: sts.array(() => V3Instruction),
        SetErrorHandler: sts.array(() => V3Instruction),
        SetFeesMode: sts.enumStruct({
            jitWithdraw: sts.boolean(),
        }),
        SetTopic: sts.bytes(),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: Weight,
        }),
        Transact: sts.enumStruct({
            originKind: V2OriginKind,
            requireWeightAtMost: Weight,
            call: DoubleEncoded,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V3MultiAsset),
            beneficiary: V3MultiLocation,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V3MultiAsset),
            dest: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        Trap: sts.bigint(),
        UniversalOrigin: V3Junction,
        UnlockAsset: sts.enumStruct({
            asset: V3MultiAsset,
            target: V3MultiLocation,
        }),
        UnpaidExecution: sts.enumStruct({
            weightLimit: V3WeightLimit,
            checkOrigin: sts.option(() => V3MultiLocation),
        }),
        UnsubscribeVersion: sts.unit(),
        WithdrawAsset: sts.array(() => V3MultiAsset),
    }
})

export const V3Response: sts.Type<V3Response> = sts.closedEnum(() => {
    return  {
        Assets: sts.array(() => V3MultiAsset),
        DispatchResult: V3MaybeErrorCode,
        ExecutionResult: sts.option(() => sts.tuple(() => [sts.number(), V3Error])),
        Null: sts.unit(),
        PalletsInfo: sts.array(() => V3PalletInfo),
        Version: sts.number(),
    }
})

export const V3PalletInfo: sts.Type<V3PalletInfo> = sts.struct(() => {
    return  {
        index: sts.number(),
        name: sts.bytes(),
        moduleName: sts.bytes(),
        major: sts.number(),
        minor: sts.number(),
        patch: sts.number(),
    }
})

export const V3QueryResponseInfo: sts.Type<V3QueryResponseInfo> = sts.struct(() => {
    return  {
        destination: V3MultiLocation,
        queryId: sts.bigint(),
        maxWeight: Weight,
    }
})

export const V3MultiAssetFilter: sts.Type<V3MultiAssetFilter> = sts.closedEnum(() => {
    return  {
        Definite: sts.array(() => V3MultiAsset),
        Wild: V3WildMultiAsset,
    }
})

export const V3WildMultiAsset: sts.Type<V3WildMultiAsset> = sts.closedEnum(() => {
    return  {
        All: sts.unit(),
        AllCounted: sts.number(),
        AllOf: sts.enumStruct({
            id: V3AssetId,
            fun: V3WildFungibility,
        }),
        AllOfCounted: sts.enumStruct({
            id: V3AssetId,
            fun: V3WildFungibility,
            count: sts.number(),
        }),
    }
})

export const V3WildFungibility: sts.Type<V3WildFungibility> = sts.closedEnum(() => {
    return  {
        Fungible: sts.unit(),
        NonFungible: sts.unit(),
    }
})

export const V2Instruction: sts.Type<V2Instruction> = sts.closedEnum(() => {
    return  {
        BuyExecution: sts.enumStruct({
            fees: V2MultiAsset,
            weightLimit: V2WeightLimit,
        }),
        ClaimAsset: sts.enumStruct({
            assets: sts.array(() => V2MultiAsset),
            ticket: V2MultiLocation,
        }),
        ClearError: sts.unit(),
        ClearOrigin: sts.unit(),
        DepositAsset: sts.enumStruct({
            assets: V2MultiAssetFilter,
            maxAssets: sts.number(),
            beneficiary: V2MultiLocation,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: V2MultiAssetFilter,
            maxAssets: sts.number(),
            dest: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        DescendOrigin: V2Junctions,
        ExchangeAsset: sts.enumStruct({
            give: V2MultiAssetFilter,
            receive: sts.array(() => V2MultiAsset),
        }),
        HrmpChannelAccepted: sts.enumStruct({
            recipient: sts.number(),
        }),
        HrmpChannelClosing: sts.enumStruct({
            initiator: sts.number(),
            sender: sts.number(),
            recipient: sts.number(),
        }),
        HrmpNewChannelOpenRequest: sts.enumStruct({
            sender: sts.number(),
            maxMessageSize: sts.number(),
            maxCapacity: sts.number(),
        }),
        InitiateReserveWithdraw: sts.enumStruct({
            assets: V2MultiAssetFilter,
            reserve: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: V2MultiAssetFilter,
            dest: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        QueryHolding: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V2MultiLocation,
            assets: V2MultiAssetFilter,
            maxResponseWeight: sts.bigint(),
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V2Response,
            maxWeight: sts.bigint(),
        }),
        ReceiveTeleportedAsset: sts.array(() => V2MultiAsset),
        RefundSurplus: sts.unit(),
        ReportError: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V2MultiLocation,
            maxResponseWeight: sts.bigint(),
        }),
        ReserveAssetDeposited: sts.array(() => V2MultiAsset),
        SetAppendix: sts.array(() => V2Instruction),
        SetErrorHandler: sts.array(() => V2Instruction),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: sts.bigint(),
        }),
        Transact: sts.enumStruct({
            originType: V2OriginKind,
            requireWeightAtMost: sts.bigint(),
            call: DoubleEncoded,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V2MultiAsset),
            beneficiary: V2MultiLocation,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V2MultiAsset),
            dest: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        Trap: sts.bigint(),
        UnsubscribeVersion: sts.unit(),
        WithdrawAsset: sts.array(() => V2MultiAsset),
    }
})

export const V2Response: sts.Type<V2Response> = sts.closedEnum(() => {
    return  {
        Assets: sts.array(() => V2MultiAsset),
        ExecutionResult: sts.option(() => sts.tuple(() => [sts.number(), V2Error])),
        Null: sts.unit(),
        Version: sts.number(),
    }
})

export const V2Error: sts.Type<V2Error> = sts.closedEnum(() => {
    return  {
        AssetNotFound: sts.unit(),
        BadOrigin: sts.unit(),
        Barrier: sts.unit(),
        DestinationUnsupported: sts.unit(),
        ExceedsMaxMessageSize: sts.unit(),
        FailedToDecode: sts.unit(),
        FailedToTransactAsset: sts.unit(),
        InvalidLocation: sts.unit(),
        LocationCannotHold: sts.unit(),
        MaxWeightInvalid: sts.unit(),
        MultiLocationFull: sts.unit(),
        MultiLocationNotInvertible: sts.unit(),
        NotHoldingFees: sts.unit(),
        NotWithdrawable: sts.unit(),
        Overflow: sts.unit(),
        TooExpensive: sts.unit(),
        Transport: sts.unit(),
        Trap: sts.bigint(),
        UnhandledXcmVersion: sts.unit(),
        Unimplemented: sts.unit(),
        UnknownClaim: sts.unit(),
        Unroutable: sts.unit(),
        UntrustedReserveLocation: sts.unit(),
        UntrustedTeleportLocation: sts.unit(),
        WeightLimitReached: sts.bigint(),
        WeightNotComputable: sts.unit(),
    }
})

export const V2MultiAssetFilter: sts.Type<V2MultiAssetFilter> = sts.closedEnum(() => {
    return  {
        Definite: sts.array(() => V2MultiAsset),
        Wild: V2WildMultiAsset,
    }
})

export const V2WildMultiAsset: sts.Type<V2WildMultiAsset> = sts.closedEnum(() => {
    return  {
        All: sts.unit(),
        AllOf: sts.enumStruct({
            id: V2AssetId,
            fun: V2WildFungibility,
        }),
    }
})

export const V2WildFungibility: sts.Type<V2WildFungibility> = sts.closedEnum(() => {
    return  {
        Fungible: sts.unit(),
        NonFungible: sts.unit(),
    }
})

export const V2WeightLimit: sts.Type<V2WeightLimit> = sts.closedEnum(() => {
    return  {
        Limited: sts.bigint(),
        Unlimited: sts.unit(),
    }
})

export const Type_414: sts.Type<Type_414> = sts.closedEnum(() => {
    return  {
        V2: sts.array(() => Type_417),
        V3: sts.array(() => Type_421),
        V4: sts.array(() => Type_424),
    }
})

export const Type_424: sts.Type<Type_424> = sts.closedEnum(() => {
    return  {
        AliasOrigin: V4Location,
        BurnAsset: sts.array(() => V4Asset),
        BuyExecution: sts.enumStruct({
            fees: V4Asset,
            weightLimit: V3WeightLimit,
        }),
        ClaimAsset: sts.enumStruct({
            assets: sts.array(() => V4Asset),
            ticket: V4Location,
        }),
        ClearError: sts.unit(),
        ClearOrigin: sts.unit(),
        ClearTopic: sts.unit(),
        ClearTransactStatus: sts.unit(),
        DepositAsset: sts.enumStruct({
            assets: V4AssetFilter,
            beneficiary: V4Location,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: V4AssetFilter,
            dest: V4Location,
            xcm: sts.array(() => V4Instruction),
        }),
        DescendOrigin: V4Junctions,
        ExchangeAsset: sts.enumStruct({
            give: V4AssetFilter,
            want: sts.array(() => V4Asset),
            maximal: sts.boolean(),
        }),
        ExpectAsset: sts.array(() => V4Asset),
        ExpectError: sts.option(() => sts.tuple(() => [sts.number(), V3Error])),
        ExpectOrigin: sts.option(() => V4Location),
        ExpectPallet: sts.enumStruct({
            index: sts.number(),
            name: sts.bytes(),
            moduleName: sts.bytes(),
            crateMajor: sts.number(),
            minCrateMinor: sts.number(),
        }),
        ExpectTransactStatus: V3MaybeErrorCode,
        ExportMessage: sts.enumStruct({
            network: V4NetworkId,
            destination: V4Junctions,
            xcm: sts.array(() => V4Instruction),
        }),
        HrmpChannelAccepted: sts.enumStruct({
            recipient: sts.number(),
        }),
        HrmpChannelClosing: sts.enumStruct({
            initiator: sts.number(),
            sender: sts.number(),
            recipient: sts.number(),
        }),
        HrmpNewChannelOpenRequest: sts.enumStruct({
            sender: sts.number(),
            maxMessageSize: sts.number(),
            maxCapacity: sts.number(),
        }),
        InitiateReserveWithdraw: sts.enumStruct({
            assets: V4AssetFilter,
            reserve: V4Location,
            xcm: sts.array(() => V4Instruction),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: V4AssetFilter,
            dest: V4Location,
            xcm: sts.array(() => V4Instruction),
        }),
        LockAsset: sts.enumStruct({
            asset: V4Asset,
            unlocker: V4Location,
        }),
        NoteUnlockable: sts.enumStruct({
            asset: V4Asset,
            owner: V4Location,
        }),
        QueryPallet: sts.enumStruct({
            moduleName: sts.bytes(),
            responseInfo: V4QueryResponseInfo,
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V4Response,
            maxWeight: Weight,
            querier: sts.option(() => V4Location),
        }),
        ReceiveTeleportedAsset: sts.array(() => V4Asset),
        RefundSurplus: sts.unit(),
        ReportError: V4QueryResponseInfo,
        ReportHolding: sts.enumStruct({
            responseInfo: V4QueryResponseInfo,
            assets: V4AssetFilter,
        }),
        ReportTransactStatus: V4QueryResponseInfo,
        RequestUnlock: sts.enumStruct({
            asset: V4Asset,
            locker: V4Location,
        }),
        ReserveAssetDeposited: sts.array(() => V4Asset),
        SetAppendix: sts.array(() => Type_424),
        SetErrorHandler: sts.array(() => Type_424),
        SetFeesMode: sts.enumStruct({
            jitWithdraw: sts.boolean(),
        }),
        SetTopic: sts.bytes(),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: Weight,
        }),
        Transact: sts.enumStruct({
            originKind: V2OriginKind,
            requireWeightAtMost: Weight,
            call: Type_418,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V4Asset),
            beneficiary: V4Location,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V4Asset),
            dest: V4Location,
            xcm: sts.array(() => V4Instruction),
        }),
        Trap: sts.bigint(),
        UniversalOrigin: V4Junction,
        UnlockAsset: sts.enumStruct({
            asset: V4Asset,
            target: V4Location,
        }),
        UnpaidExecution: sts.enumStruct({
            weightLimit: V3WeightLimit,
            checkOrigin: sts.option(() => V4Location),
        }),
        UnsubscribeVersion: sts.unit(),
        WithdrawAsset: sts.array(() => V4Asset),
    }
})

export const Type_418: sts.Type<Type_418> = sts.struct(() => {
    return  {
        encoded: sts.bytes(),
    }
})

export const Type_421: sts.Type<Type_421> = sts.closedEnum(() => {
    return  {
        AliasOrigin: V3MultiLocation,
        BurnAsset: sts.array(() => V3MultiAsset),
        BuyExecution: sts.enumStruct({
            fees: V3MultiAsset,
            weightLimit: V3WeightLimit,
        }),
        ClaimAsset: sts.enumStruct({
            assets: sts.array(() => V3MultiAsset),
            ticket: V3MultiLocation,
        }),
        ClearError: sts.unit(),
        ClearOrigin: sts.unit(),
        ClearTopic: sts.unit(),
        ClearTransactStatus: sts.unit(),
        DepositAsset: sts.enumStruct({
            assets: V3MultiAssetFilter,
            beneficiary: V3MultiLocation,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: V3MultiAssetFilter,
            dest: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        DescendOrigin: V3Junctions,
        ExchangeAsset: sts.enumStruct({
            give: V3MultiAssetFilter,
            want: sts.array(() => V3MultiAsset),
            maximal: sts.boolean(),
        }),
        ExpectAsset: sts.array(() => V3MultiAsset),
        ExpectError: sts.option(() => sts.tuple(() => [sts.number(), V3Error])),
        ExpectOrigin: sts.option(() => V3MultiLocation),
        ExpectPallet: sts.enumStruct({
            index: sts.number(),
            name: sts.bytes(),
            moduleName: sts.bytes(),
            crateMajor: sts.number(),
            minCrateMinor: sts.number(),
        }),
        ExpectTransactStatus: V3MaybeErrorCode,
        ExportMessage: sts.enumStruct({
            network: V3NetworkId,
            destination: V3Junctions,
            xcm: sts.array(() => V3Instruction),
        }),
        HrmpChannelAccepted: sts.enumStruct({
            recipient: sts.number(),
        }),
        HrmpChannelClosing: sts.enumStruct({
            initiator: sts.number(),
            sender: sts.number(),
            recipient: sts.number(),
        }),
        HrmpNewChannelOpenRequest: sts.enumStruct({
            sender: sts.number(),
            maxMessageSize: sts.number(),
            maxCapacity: sts.number(),
        }),
        InitiateReserveWithdraw: sts.enumStruct({
            assets: V3MultiAssetFilter,
            reserve: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: V3MultiAssetFilter,
            dest: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        LockAsset: sts.enumStruct({
            asset: V3MultiAsset,
            unlocker: V3MultiLocation,
        }),
        NoteUnlockable: sts.enumStruct({
            asset: V3MultiAsset,
            owner: V3MultiLocation,
        }),
        QueryPallet: sts.enumStruct({
            moduleName: sts.bytes(),
            responseInfo: V3QueryResponseInfo,
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V3Response,
            maxWeight: Weight,
            querier: sts.option(() => V3MultiLocation),
        }),
        ReceiveTeleportedAsset: sts.array(() => V3MultiAsset),
        RefundSurplus: sts.unit(),
        ReportError: V3QueryResponseInfo,
        ReportHolding: sts.enumStruct({
            responseInfo: V3QueryResponseInfo,
            assets: V3MultiAssetFilter,
        }),
        ReportTransactStatus: V3QueryResponseInfo,
        RequestUnlock: sts.enumStruct({
            asset: V3MultiAsset,
            locker: V3MultiLocation,
        }),
        ReserveAssetDeposited: sts.array(() => V3MultiAsset),
        SetAppendix: sts.array(() => Type_421),
        SetErrorHandler: sts.array(() => Type_421),
        SetFeesMode: sts.enumStruct({
            jitWithdraw: sts.boolean(),
        }),
        SetTopic: sts.bytes(),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: Weight,
        }),
        Transact: sts.enumStruct({
            originKind: V2OriginKind,
            requireWeightAtMost: Weight,
            call: Type_418,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V3MultiAsset),
            beneficiary: V3MultiLocation,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V3MultiAsset),
            dest: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        Trap: sts.bigint(),
        UniversalOrigin: V3Junction,
        UnlockAsset: sts.enumStruct({
            asset: V3MultiAsset,
            target: V3MultiLocation,
        }),
        UnpaidExecution: sts.enumStruct({
            weightLimit: V3WeightLimit,
            checkOrigin: sts.option(() => V3MultiLocation),
        }),
        UnsubscribeVersion: sts.unit(),
        WithdrawAsset: sts.array(() => V3MultiAsset),
    }
})

export const Type_417: sts.Type<Type_417> = sts.closedEnum(() => {
    return  {
        BuyExecution: sts.enumStruct({
            fees: V2MultiAsset,
            weightLimit: V2WeightLimit,
        }),
        ClaimAsset: sts.enumStruct({
            assets: sts.array(() => V2MultiAsset),
            ticket: V2MultiLocation,
        }),
        ClearError: sts.unit(),
        ClearOrigin: sts.unit(),
        DepositAsset: sts.enumStruct({
            assets: V2MultiAssetFilter,
            maxAssets: sts.number(),
            beneficiary: V2MultiLocation,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: V2MultiAssetFilter,
            maxAssets: sts.number(),
            dest: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        DescendOrigin: V2Junctions,
        ExchangeAsset: sts.enumStruct({
            give: V2MultiAssetFilter,
            receive: sts.array(() => V2MultiAsset),
        }),
        HrmpChannelAccepted: sts.enumStruct({
            recipient: sts.number(),
        }),
        HrmpChannelClosing: sts.enumStruct({
            initiator: sts.number(),
            sender: sts.number(),
            recipient: sts.number(),
        }),
        HrmpNewChannelOpenRequest: sts.enumStruct({
            sender: sts.number(),
            maxMessageSize: sts.number(),
            maxCapacity: sts.number(),
        }),
        InitiateReserveWithdraw: sts.enumStruct({
            assets: V2MultiAssetFilter,
            reserve: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: V2MultiAssetFilter,
            dest: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        QueryHolding: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V2MultiLocation,
            assets: V2MultiAssetFilter,
            maxResponseWeight: sts.bigint(),
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V2Response,
            maxWeight: sts.bigint(),
        }),
        ReceiveTeleportedAsset: sts.array(() => V2MultiAsset),
        RefundSurplus: sts.unit(),
        ReportError: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V2MultiLocation,
            maxResponseWeight: sts.bigint(),
        }),
        ReserveAssetDeposited: sts.array(() => V2MultiAsset),
        SetAppendix: sts.array(() => Type_417),
        SetErrorHandler: sts.array(() => Type_417),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: sts.bigint(),
        }),
        Transact: sts.enumStruct({
            originType: V2OriginKind,
            requireWeightAtMost: sts.bigint(),
            call: Type_418,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V2MultiAsset),
            beneficiary: V2MultiLocation,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V2MultiAsset),
            dest: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        Trap: sts.bigint(),
        UnsubscribeVersion: sts.unit(),
        WithdrawAsset: sts.array(() => V2MultiAsset),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ParachainSystemCall: sts.Type<ParachainSystemCall> = sts.closedEnum(() => {
    return  {
        authorize_upgrade: sts.enumStruct({
            codeHash: H256,
            checkVersion: sts.boolean(),
        }),
        enact_authorized_upgrade: sts.enumStruct({
            code: sts.bytes(),
        }),
        set_validation_data: sts.enumStruct({
            data: ParachainInherentData,
        }),
        sudo_send_upward_message: sts.enumStruct({
            message: sts.bytes(),
        }),
    }
})

export const ParachainInherentData: sts.Type<ParachainInherentData> = sts.struct(() => {
    return  {
        validationData: V6PersistedValidationData,
        relayChainState: StorageProof,
        downwardMessages: sts.array(() => InboundDownwardMessage),
        horizontalMessages: sts.array(() => sts.tuple(() => [Id, sts.array(() => InboundHrmpMessage)])),
    }
})

export const InboundHrmpMessage: sts.Type<InboundHrmpMessage> = sts.struct(() => {
    return  {
        sentAt: sts.number(),
        data: sts.bytes(),
    }
})

export const InboundDownwardMessage: sts.Type<InboundDownwardMessage> = sts.struct(() => {
    return  {
        sentAt: sts.number(),
        msg: sts.bytes(),
    }
})

export const StorageProof: sts.Type<StorageProof> = sts.struct(() => {
    return  {
        trieNodes: sts.array(() => sts.bytes()),
    }
})

export const V6PersistedValidationData: sts.Type<V6PersistedValidationData> = sts.struct(() => {
    return  {
        parentHead: HeadData,
        relayParentNumber: sts.number(),
        relayParentStorageRoot: H256,
        maxPovSize: sts.number(),
    }
})

export const HeadData = sts.bytes()

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ParachainInfoCall: sts.Type<ParachainInfoCall> = sts.closedEnum(() => {
    return  {
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const OrmlXcmCall: sts.Type<OrmlXcmCall> = sts.closedEnum(() => {
    return  {
        send_as_sovereign: sts.enumStruct({
            dest: VersionedLocation,
            message: VersionedXcm,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const MultisigCall: sts.Type<MultisigCall> = sts.closedEnum(() => {
    return  {
        approve_as_multi: sts.enumStruct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => AccountId32),
            maybeTimepoint: sts.option(() => Timepoint),
            callHash: sts.bytes(),
            maxWeight: Weight,
        }),
        as_multi: sts.enumStruct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => AccountId32),
            maybeTimepoint: sts.option(() => Timepoint),
            call: Call,
            maxWeight: Weight,
        }),
        as_multi_threshold_1: sts.enumStruct({
            otherSignatories: sts.array(() => AccountId32),
            call: Call,
        }),
        cancel_as_multi: sts.enumStruct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => AccountId32),
            timepoint: Timepoint,
            callHash: sts.bytes(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const MultiTokensCall: sts.Type<MultiTokensCall> = sts.closedEnum(() => {
    return  {
        accept_collection_transfer: sts.enumStruct({
            collectionId: sts.bigint(),
        }),
        approve_collection: sts.enumStruct({
            collectionId: sts.bigint(),
            operator: AccountId32,
            expiration: sts.option(() => sts.number()),
        }),
        approve_token: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            operator: AccountId32,
            amount: sts.bigint(),
            expiration: sts.option(() => sts.number()),
            currentAmount: sts.bigint(),
        }),
        batch_mint: sts.enumStruct({
            collectionId: sts.bigint(),
            recipients: sts.array(() => Type_463),
        }),
        batch_set_attribute: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.option(() => sts.bigint()),
            attributes: sts.array(() => AttributeKeyValuePair),
            depositor: sts.option(() => MultiAddress),
        }),
        batch_transfer: sts.enumStruct({
            collectionId: sts.bigint(),
            recipients: sts.array(() => Recipient),
        }),
        burn: sts.enumStruct({
            collectionId: sts.bigint(),
            params: DefaultBurnParams,
        }),
        cancel_collection_transfer: sts.enumStruct({
            collectionId: sts.bigint(),
        }),
        claim_collections: sts.enumStruct({
            destination: AccountId32,
            ethereumSignature: Signature,
            ethereumAddress: H160,
            collectionCount: sts.number(),
        }),
        claim_tokens: sts.enumStruct({
            destination: AccountId32,
            ethereumSignature: Signature,
            ethereumAddress: H160,
        }),
        create_collection: sts.enumStruct({
            descriptor: DefaultCollectionDescriptor,
        }),
        destroy_collection: sts.enumStruct({
            collectionId: sts.bigint(),
        }),
        finish_claim_tokens: sts.enumStruct({
            destination: AccountId32,
            ethereumAddress: H160,
        }),
        force_approve_collection: sts.enumStruct({
            caller: MultiAddress,
            collectionId: sts.bigint(),
            operator: AccountId32,
            expiration: sts.option(() => sts.number()),
        }),
        force_burn: sts.enumStruct({
            caller: MultiAddress,
            collectionId: sts.bigint(),
            params: DefaultBurnParams,
        }),
        force_create_collection: sts.enumStruct({
            owner: AccountId32,
            collectionId: sts.bigint(),
            descriptor: DefaultCollectionDescriptor,
        }),
        force_create_ethereum_collection: sts.enumStruct({
            owner: AccountId32,
            claimer: H160,
            ethereumCollectionId: sts.bigint(),
            descriptor: DefaultCollectionDescriptor,
        }),
        force_freeze: sts.enumStruct({
            info: Freeze,
        }),
        force_mint: sts.enumStruct({
            caller: sts.option(() => MultiAddress),
            recipient: MultiAddress,
            collectionId: sts.bigint(),
            params: FlexibleMintParams,
            depositor: sts.option(() => MultiAddress),
        }),
        force_mutate_collection: sts.enumStruct({
            collectionId: sts.bigint(),
            mutation: DefaultCollectionMutation,
        }),
        force_set_attribute: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.option(() => sts.bigint()),
            key: sts.bytes(),
            value: sts.option(() => Attribute),
        }),
        force_set_collection: sts.enumStruct({
            collectionId: sts.bigint(),
            value: sts.option(() => Collection),
        }),
        force_set_collection_account: sts.enumStruct({
            collectionId: sts.bigint(),
            accountId: MultiAddress,
            value: sts.option(() => CollectionAccount),
        }),
        force_set_ethereum_account: sts.enumStruct({
            address: H160,
            value: sts.option(() => sts.array(() => sts.bigint())),
        }),
        force_set_ethereum_collection_id: sts.enumStruct({
            ethereumCollectionId: sts.bigint(),
            nativeCollectionId: sts.option(() => sts.bigint()),
        }),
        force_set_ethereum_unmintable_token_ids: sts.enumStruct({
            ethereumCollectionId: sts.bigint(),
            baseTokenId: sts.bigint(),
            tokenIndex: sts.bigint(),
        }),
        force_set_next_collection_id: sts.enumStruct({
            value: sts.bigint(),
        }),
        force_set_token: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            value: sts.option(() => Token),
        }),
        force_set_token_account: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            accountId: MultiAddress,
            value: sts.option(() => TokenAccount),
        }),
        force_set_unmintable_token_ids: sts.enumStruct({
            collectionId: sts.bigint(),
            baseTokenId: sts.bigint(),
            tokenIndex: sts.bigint(),
        }),
        force_transfer: sts.enumStruct({
            source: MultiAddress,
            destination: MultiAddress,
            collectionId: sts.bigint(),
            params: DefaultTransferParams,
        }),
        freeze: sts.enumStruct({
            info: Freeze,
        }),
        infuse: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            amount: sts.bigint(),
        }),
        mint: sts.enumStruct({
            recipient: MultiAddress,
            collectionId: sts.bigint(),
            params: DefaultMintParams,
        }),
        mutate_collection: sts.enumStruct({
            collectionId: sts.bigint(),
            mutation: DefaultCollectionMutation,
        }),
        mutate_token: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            mutation: DefaultTokenMutation,
        }),
        remove_all_attributes: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.option(() => sts.bigint()),
            attributeCount: sts.number(),
        }),
        remove_attribute: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.option(() => sts.bigint()),
            key: sts.bytes(),
        }),
        set_attribute: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.option(() => sts.bigint()),
            key: sts.bytes(),
            value: sts.bytes(),
            depositor: sts.option(() => MultiAddress),
        }),
        thaw: sts.enumStruct({
            info: Freeze,
        }),
        transfer: sts.enumStruct({
            recipient: MultiAddress,
            collectionId: sts.bigint(),
            params: DefaultTransferParams,
        }),
        unapprove_collection: sts.enumStruct({
            collectionId: sts.bigint(),
            operator: AccountId32,
        }),
        unapprove_token: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            operator: AccountId32,
        }),
        update_account_deposit: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            deltaAccountCount: sts.number(),
        }),
    }
})

export const DefaultMintParams: sts.Type<DefaultMintParams> = sts.closedEnum(() => {
    return  {
        CreateToken: sts.enumStruct({
            tokenId: sts.bigint(),
            initialSupply: sts.bigint(),
            accountDepositCount: sts.number(),
            cap: sts.option(() => TokenCap),
            behavior: sts.option(() => TokenMarketBehavior),
            listingForbidden: sts.boolean(),
            freezeState: sts.option(() => FreezeState),
            attributes: sts.array(() => AttributeKeyValuePair),
            infusion: sts.bigint(),
            anyoneCanInfuse: sts.boolean(),
            metadata: CreateTokenMetadata,
            privilegedParams: sts.option(() => PrivilegedCreateTokenParams),
        }),
        Mint: sts.enumStruct({
            tokenId: sts.bigint(),
            amount: sts.bigint(),
            depositor: sts.option(() => AccountId32),
        }),
    }
})

export const PrivilegedCreateTokenParams: sts.Type<PrivilegedCreateTokenParams> = sts.struct(() => {
    return  {
        requiresDeposit: sts.boolean(),
        foreignParams: sts.option(() => ForeignTokenCreationParams),
        depositor: sts.option(() => AccountId32),
    }
})

export const ForeignTokenCreationParams: sts.Type<ForeignTokenCreationParams> = sts.struct(() => {
    return  {
        location: sts.option(() => V4Location),
        unitsPerSecond: sts.option(() => sts.bigint()),
    }
})

export const CreateTokenMetadata: sts.Type<CreateTokenMetadata> = sts.struct(() => {
    return  {
        name: BoundedString,
        symbol: sts.bytes(),
        decimalCount: sts.number(),
    }
})

export const DefaultTransferParams: sts.Type<DefaultTransferParams> = sts.closedEnum(() => {
    return  {
        Operator: sts.enumStruct({
            tokenId: sts.bigint(),
            source: AccountId32,
            amount: sts.bigint(),
            depositor: sts.option(() => AccountId32),
        }),
        Simple: sts.enumStruct({
            tokenId: sts.bigint(),
            amount: sts.bigint(),
            depositor: sts.option(() => AccountId32),
        }),
    }
})

export const Attribute: sts.Type<Attribute> = sts.struct(() => {
    return  {
        value: sts.bytes(),
        deposit: sts.bigint(),
        depositor: sts.option(() => AccountId32),
    }
})

export const FlexibleMintParams: sts.Type<FlexibleMintParams> = sts.closedEnum(() => {
    return  {
        CreateOrMint: CreateTokenParams,
        Mint: sts.enumStruct({
            tokenId: sts.bigint(),
            amount: sts.bigint(),
            depositor: sts.option(() => AccountId32),
        }),
    }
})

export const CreateTokenParams: sts.Type<CreateTokenParams> = sts.struct(() => {
    return  {
        tokenId: sts.bigint(),
        amount: sts.bigint(),
        accountDepositCount: sts.number(),
        cap: sts.option(() => TokenCap),
        behavior: sts.option(() => TokenMarketBehavior),
        listingForbidden: sts.boolean(),
        freezeState: sts.option(() => FreezeState),
        attributes: sts.array(() => AttributeKeyValuePair),
        infusion: sts.bigint(),
        anyoneCanInfuse: sts.boolean(),
        metadata: CreateTokenMetadata,
        privilegedParams: sts.option(() => PrivilegedCreateTokenParams),
    }
})

export const DefaultCollectionDescriptor: sts.Type<DefaultCollectionDescriptor> = sts.struct(() => {
    return  {
        policy: DefaultCollectionPolicyDescriptor,
        depositor: sts.option(() => AccountId32),
        explicitRoyaltyCurrencies: sts.array(() => AssetId),
        attributes: sts.array(() => AttributeKeyValuePair),
    }
})

export const DefaultCollectionPolicyDescriptor: sts.Type<DefaultCollectionPolicyDescriptor> = sts.struct(() => {
    return  {
        mint: DefaultMintPolicyDescriptor,
        market: DefaultMarketPolicyDescriptor,
    }
})

export const DefaultMarketPolicyDescriptor: sts.Type<DefaultMarketPolicyDescriptor> = sts.struct(() => {
    return  {
        royalty: sts.option(() => DefaultRoyalty),
    }
})

export const DefaultMintPolicyDescriptor: sts.Type<DefaultMintPolicyDescriptor> = sts.struct(() => {
    return  {
        maxTokenCount: sts.option(() => sts.bigint()),
        maxTokenSupply: sts.option(() => sts.bigint()),
        forceCollapsingSupply: sts.boolean(),
    }
})

export const Signature = sts.bytes()

export const DefaultBurnParams: sts.Type<DefaultBurnParams> = sts.struct(() => {
    return  {
        tokenId: sts.bigint(),
        amount: sts.bigint(),
        removeTokenStorage: sts.boolean(),
    }
})

export const Recipient: sts.Type<Recipient> = sts.struct(() => {
    return  {
        accountId: AccountId32,
        params: DefaultTransferParams,
    }
})

export const AttributeKeyValuePair: sts.Type<AttributeKeyValuePair> = sts.struct(() => {
    return  {
        key: sts.bytes(),
        value: sts.bytes(),
    }
})

export const Type_463: sts.Type<Type_463> = sts.struct(() => {
    return  {
        accountId: AccountId32,
        params: DefaultMintParams,
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const MigrationsCall: sts.Type<MigrationsCall> = sts.closedEnum(() => {
    return  {
        clear_historic: sts.enumStruct({
            selector: HistoricCleanupSelector,
        }),
        force_onboard_mbms: sts.unit(),
        force_set_active_cursor: sts.enumStruct({
            index: sts.number(),
            innerCursor: sts.option(() => sts.bytes()),
            startedAt: sts.option(() => sts.number()),
        }),
        force_set_cursor: sts.enumStruct({
            cursor: sts.option(() => MigrationCursor),
        }),
    }
})

export const MigrationCursor: sts.Type<MigrationCursor> = sts.closedEnum(() => {
    return  {
        Active: ActiveCursor,
        Stuck: sts.unit(),
    }
})

export const ActiveCursor: sts.Type<ActiveCursor> = sts.struct(() => {
    return  {
        index: sts.number(),
        innerCursor: sts.option(() => sts.bytes()),
        startedAt: sts.number(),
    }
})

export const HistoricCleanupSelector: sts.Type<HistoricCleanupSelector> = sts.closedEnum(() => {
    return  {
        Specific: sts.array(() => sts.bytes()),
        Wildcard: sts.enumStruct({
            limit: sts.option(() => sts.number()),
            previousCursor: sts.option(() => sts.bytes()),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const MessageQueueCall: sts.Type<MessageQueueCall> = sts.closedEnum(() => {
    return  {
        execute_overweight: sts.enumStruct({
            messageOrigin: AggregateMessageOrigin,
            page: sts.number(),
            index: sts.number(),
            weightLimit: Weight,
        }),
        reap_page: sts.enumStruct({
            messageOrigin: AggregateMessageOrigin,
            pageIndex: sts.number(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const MatrixXcmCall: sts.Type<MatrixXcmCall> = sts.closedEnum(() => {
    return  {
        force_set_minimum_weight: sts.enumStruct({
            xcmCall: XcmOperation,
            xcmWeightFeeMisc: MinimumWeightFeePair,
        }),
        transfer_asset_to_parachain: sts.enumStruct({
            paraId: ParachainId,
            beneficiary: Account,
            currencyId: AssetId,
            amount: sts.bigint(),
            destWeight: sts.option(() => sts.bigint()),
        }),
        transfer_asset_with_fee: sts.enumStruct({
            assetPair: CurrencyIdAmountPair,
            feePair: CurrencyIdAmountPair,
            paraId: ParachainId,
            beneficiary: Account,
            destWeight: sts.option(() => sts.bigint()),
        }),
        transfer_to_parachain: sts.enumStruct({
            paraId: ParachainId,
            beneficiary: Account,
            amount: sts.bigint(),
            destWeight: sts.option(() => sts.bigint()),
        }),
    }
})

export const CurrencyIdAmountPair: sts.Type<CurrencyIdAmountPair> = sts.struct(() => {
    return  {
        currencyId: AssetId,
        amount: sts.bigint(),
    }
})

export const Account: sts.Type<Account> = sts.closedEnum(() => {
    return  {
        EVM: H160,
        Substrate: AccountId32,
    }
})

export const ParachainId: sts.Type<ParachainId> = sts.closedEnum(() => {
    return  {
        Acala: sts.unit(),
        Moonbeam: sts.unit(),
        Statemint: sts.unit(),
    }
})

export const XcmOperation: sts.Type<XcmOperation> = sts.closedEnum(() => {
    return  {
        ParachainFee: V4Location,
        XTokensTransfer: sts.unit(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const MatrixUtilityCall: sts.Type<MatrixUtilityCall> = sts.closedEnum(() => {
    return  {
        batch: sts.enumStruct({
            calls: sts.array(() => Call),
            continueOnFailure: sts.boolean(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const MarketplaceCall: sts.Type<MarketplaceCall> = sts.closedEnum(() => {
    return  {
        answer_counter_offer: sts.enumStruct({
            listingId: H256,
            creator: AccountId32,
            response: CounterOfferResponse,
            currentPrice: sts.bigint(),
        }),
        cancel_listing: sts.enumStruct({
            listingId: H256,
        }),
        create_listing: sts.enumStruct({
            makeAssetId: AssetId,
            takeAssetId: AssetId,
            amount: sts.bigint(),
            price: sts.bigint(),
            salt: sts.bytes(),
            listingData: ListingData,
            depositor: sts.option(() => MultiAddress),
        }),
        fill_listing: sts.enumStruct({
            listingId: H256,
            amount: sts.bigint(),
        }),
        finalize_auction: sts.enumStruct({
            listingId: H256,
        }),
        force_cancel_listing: sts.enumStruct({
            listingId: H256,
        }),
        force_create_listing: sts.enumStruct({
            seller: MultiAddress,
            makeAssetId: AssetId,
            takeAssetId: AssetId,
            amount: sts.bigint(),
            price: sts.bigint(),
            salt: sts.bytes(),
            listingData: ListingData,
            depositBacker: sts.option(() => MultiAddress),
        }),
        force_place_bid: sts.enumStruct({
            bidder: MultiAddress,
            listingId: H256,
            price: sts.bigint(),
            fundsBacker: sts.option(() => MultiAddress),
        }),
        place_bid: sts.enumStruct({
            listingId: H256,
            price: sts.bigint(),
        }),
        place_counter_offer: sts.enumStruct({
            listingId: H256,
            price: sts.bigint(),
            depositor: sts.option(() => MultiAddress),
        }),
        remove_expired_listing: sts.enumStruct({
            listingId: H256,
        }),
        set_protocol_fee: sts.enumStruct({
            protocolFee: Perbill,
        }),
    }
})

/**
 * Identity pallet declaration.
 */
export const IdentityCall: sts.Type<IdentityCall> = sts.closedEnum(() => {
    return  {
        accept_username: sts.enumStruct({
            username: sts.bytes(),
        }),
        add_registrar: sts.enumStruct({
            account: MultiAddress,
        }),
        add_sub: sts.enumStruct({
            sub: MultiAddress,
            data: Data,
        }),
        add_username_authority: sts.enumStruct({
            authority: MultiAddress,
            suffix: sts.bytes(),
            allocation: sts.number(),
        }),
        cancel_request: sts.enumStruct({
            regIndex: sts.number(),
        }),
        clear_identity: sts.unit(),
        kill_identity: sts.enumStruct({
            target: MultiAddress,
        }),
        provide_judgement: sts.enumStruct({
            regIndex: sts.number(),
            target: MultiAddress,
            judgement: Judgement,
            identity: H256,
        }),
        quit_sub: sts.unit(),
        remove_dangling_username: sts.enumStruct({
            username: sts.bytes(),
        }),
        remove_expired_approval: sts.enumStruct({
            username: sts.bytes(),
        }),
        remove_sub: sts.enumStruct({
            sub: MultiAddress,
        }),
        remove_username_authority: sts.enumStruct({
            authority: MultiAddress,
        }),
        rename_sub: sts.enumStruct({
            sub: MultiAddress,
            data: Data,
        }),
        request_judgement: sts.enumStruct({
            regIndex: sts.number(),
            maxFee: sts.bigint(),
        }),
        set_account_id: sts.enumStruct({
            index: sts.number(),
            new: MultiAddress,
        }),
        set_fee: sts.enumStruct({
            index: sts.number(),
            fee: sts.bigint(),
        }),
        set_fields: sts.enumStruct({
            index: sts.number(),
            fields: sts.bigint(),
        }),
        set_identity: sts.enumStruct({
            info: IdentityInfo,
        }),
        set_primary_username: sts.enumStruct({
            username: sts.bytes(),
        }),
        set_subs: sts.enumStruct({
            subs: sts.array(() => sts.tuple(() => [AccountId32, Data])),
        }),
        set_username_for: sts.enumStruct({
            who: MultiAddress,
            username: sts.bytes(),
            signature: sts.option(() => MultiSignature),
        }),
    }
})

export const MultiSignature: sts.Type<MultiSignature> = sts.closedEnum(() => {
    return  {
        Ecdsa: Signature,
        Ed25519: sts.bytes(),
        Sr25519: sts.bytes(),
    }
})

export const IdentityInfo: sts.Type<IdentityInfo> = sts.struct(() => {
    return  {
        additional: sts.array(() => sts.tuple(() => [Data, Data])),
        display: Data,
        legal: Data,
        web: Data,
        riot: Data,
        email: Data,
        pgpFingerprint: sts.option(() => sts.bytes()),
        image: Data,
        twitter: Data,
    }
})

export const Judgement: sts.Type<Judgement> = sts.closedEnum(() => {
    return  {
        Erroneous: sts.unit(),
        FeePaid: sts.bigint(),
        KnownGood: sts.unit(),
        LowQuality: sts.unit(),
        OutOfDate: sts.unit(),
        Reasonable: sts.unit(),
        Unknown: sts.unit(),
    }
})

export const Data: sts.Type<Data> = sts.closedEnum(() => {
    return  {
        BlakeTwo256: sts.bytes(),
        Keccak256: sts.bytes(),
        None: sts.unit(),
        Raw0: sts.bytes(),
        Raw1: sts.bytes(),
        Raw10: sts.bytes(),
        Raw11: sts.bytes(),
        Raw12: sts.bytes(),
        Raw13: sts.bytes(),
        Raw14: sts.bytes(),
        Raw15: sts.bytes(),
        Raw16: sts.bytes(),
        Raw17: sts.bytes(),
        Raw18: sts.bytes(),
        Raw19: sts.bytes(),
        Raw2: sts.bytes(),
        Raw20: sts.bytes(),
        Raw21: sts.bytes(),
        Raw22: sts.bytes(),
        Raw23: sts.bytes(),
        Raw24: sts.bytes(),
        Raw25: sts.bytes(),
        Raw26: sts.bytes(),
        Raw27: sts.bytes(),
        Raw28: sts.bytes(),
        Raw29: sts.bytes(),
        Raw3: sts.bytes(),
        Raw30: sts.bytes(),
        Raw31: sts.bytes(),
        Raw32: sts.bytes(),
        Raw4: sts.bytes(),
        Raw5: sts.bytes(),
        Raw6: sts.bytes(),
        Raw7: sts.bytes(),
        Raw8: sts.bytes(),
        Raw9: sts.bytes(),
        Sha256: sts.bytes(),
        ShaThree256: sts.bytes(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const FuelTanksCall: sts.Type<FuelTanksCall> = sts.closedEnum(() => {
    return  {
        add_account: sts.enumStruct({
            tankId: MultiAddress,
            userId: MultiAddress,
        }),
        batch_add_account: sts.enumStruct({
            tankId: MultiAddress,
            userIds: sts.array(() => MultiAddress),
        }),
        batch_remove_account: sts.enumStruct({
            tankId: MultiAddress,
            userIds: sts.array(() => MultiAddress),
        }),
        create_fuel_tank: sts.enumStruct({
            descriptor: FuelTankDescriptor,
        }),
        destroy_fuel_tank: sts.enumStruct({
            tankId: MultiAddress,
        }),
        dispatch: sts.enumStruct({
            tankId: MultiAddress,
            ruleSetId: sts.number(),
            call: Call,
            settings: sts.option(() => DispatchSettings),
        }),
        dispatch_and_touch: sts.enumStruct({
            tankId: MultiAddress,
            ruleSetId: sts.number(),
            call: Call,
            settings: sts.option(() => DispatchSettings),
        }),
        force_batch_add_account: sts.enumStruct({
            owner: MultiAddress,
            tankId: MultiAddress,
            userIds: sts.array(() => MultiAddress),
        }),
        force_create_fuel_tank: sts.enumStruct({
            owner: MultiAddress,
            descriptor: FuelTankDescriptor,
        }),
        force_set_consumption: sts.enumStruct({
            tankId: MultiAddress,
            userId: sts.option(() => MultiAddress),
            ruleSetId: sts.number(),
            consumption: Consumption,
        }),
        insert_rule_set: sts.enumStruct({
            tankId: MultiAddress,
            ruleSetId: sts.number(),
            ruleSet: RuleSetDescriptor,
        }),
        mutate_freeze_state: sts.enumStruct({
            tankId: MultiAddress,
            ruleSetId: sts.option(() => sts.number()),
            isFrozen: sts.boolean(),
        }),
        mutate_fuel_tank: sts.enumStruct({
            tankId: MultiAddress,
            mutation: DefaultTankMutation,
        }),
        remove_account: sts.enumStruct({
            tankId: MultiAddress,
            userId: MultiAddress,
        }),
        remove_account_rule_data: sts.enumStruct({
            tankId: MultiAddress,
            userId: MultiAddress,
            ruleSetId: sts.number(),
            ruleKind: DispatchRuleKind,
        }),
        remove_rule_set: sts.enumStruct({
            tankId: MultiAddress,
            ruleSetId: sts.number(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ExtrinsicPauseCall: sts.Type<ExtrinsicPauseCall> = sts.closedEnum(() => {
    return  {
        pause_extrinsic: sts.enumStruct({
            call: Call,
            pauseOnlyExtrinsic: sts.boolean(),
        }),
        resume_extrinsic: sts.enumStruct({
            call: Call,
            resumeOnlyExtrinsic: sts.boolean(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const DmpQueueCall: sts.Type<DmpQueueCall> = sts.closedEnum(() => {
    return  {
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const DemocracyCall: sts.Type<DemocracyCall> = sts.closedEnum(() => {
    return  {
        blacklist: sts.enumStruct({
            proposalHash: H256,
            maybeRefIndex: sts.option(() => sts.number()),
        }),
        cancel_proposal: sts.enumStruct({
            propIndex: sts.number(),
        }),
        cancel_referendum: sts.enumStruct({
            refIndex: sts.number(),
        }),
        clear_public_proposals: sts.unit(),
        delegate: sts.enumStruct({
            to: MultiAddress,
            conviction: Conviction,
            balance: sts.bigint(),
        }),
        emergency_cancel: sts.enumStruct({
            refIndex: sts.number(),
        }),
        external_propose: sts.enumStruct({
            proposal: Bounded,
        }),
        external_propose_default: sts.enumStruct({
            proposal: Bounded,
        }),
        external_propose_majority: sts.enumStruct({
            proposal: Bounded,
        }),
        fast_track: sts.enumStruct({
            proposalHash: H256,
            votingPeriod: sts.number(),
            delay: sts.number(),
        }),
        propose: sts.enumStruct({
            proposal: Bounded,
            value: sts.bigint(),
        }),
        remove_other_vote: sts.enumStruct({
            target: MultiAddress,
            index: sts.number(),
        }),
        remove_vote: sts.enumStruct({
            index: sts.number(),
        }),
        second: sts.enumStruct({
            proposal: sts.number(),
        }),
        set_metadata: sts.enumStruct({
            owner: MetadataOwner,
            maybeHash: sts.option(() => H256),
        }),
        undelegate: sts.unit(),
        unlock: sts.enumStruct({
            target: MultiAddress,
        }),
        veto_external: sts.enumStruct({
            proposalHash: H256,
        }),
        vote: sts.enumStruct({
            refIndex: sts.number(),
            vote: AccountVote,
        }),
    }
})

export const Bounded: sts.Type<Bounded> = sts.closedEnum(() => {
    return  {
        Inline: sts.bytes(),
        Legacy: sts.enumStruct({
            hash: H256,
        }),
        Lookup: sts.enumStruct({
            hash: H256,
            len: sts.number(),
        }),
    }
})

export const Conviction: sts.Type<Conviction> = sts.closedEnum(() => {
    return  {
        Locked1x: sts.unit(),
        Locked2x: sts.unit(),
        Locked3x: sts.unit(),
        Locked4x: sts.unit(),
        Locked5x: sts.unit(),
        Locked6x: sts.unit(),
        None: sts.unit(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const CumulusXcmCall: sts.Type<CumulusXcmCall> = sts.closedEnum(() => {
    return  {
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const CouncilCall: sts.Type<CouncilCall> = sts.closedEnum(() => {
    return  {
        close: sts.enumStruct({
            proposalHash: H256,
            index: sts.number(),
            proposalWeightBound: Weight,
            lengthBound: sts.number(),
        }),
        disapprove_proposal: sts.enumStruct({
            proposalHash: H256,
        }),
        execute: sts.enumStruct({
            proposal: Call,
            lengthBound: sts.number(),
        }),
        propose: sts.enumStruct({
            threshold: sts.number(),
            proposal: Call,
            lengthBound: sts.number(),
        }),
        set_members: sts.enumStruct({
            newMembers: sts.array(() => AccountId32),
            prime: sts.option(() => AccountId32),
            oldCount: sts.number(),
        }),
        vote: sts.enumStruct({
            proposal: H256,
            index: sts.number(),
            approve: sts.boolean(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const CommunityPoolCall: sts.Type<CommunityPoolCall> = sts.closedEnum(() => {
    return  {
        approve_proposal: sts.enumStruct({
            proposalId: sts.number(),
        }),
        check_status: sts.enumStruct({
            index: sts.number(),
        }),
        payout: sts.enumStruct({
            index: sts.number(),
        }),
        propose_spend: sts.enumStruct({
            value: sts.bigint(),
            beneficiary: MultiAddress,
        }),
        reject_proposal: sts.enumStruct({
            proposalId: sts.number(),
        }),
        remove_approval: sts.enumStruct({
            proposalId: sts.number(),
        }),
        spend: sts.enumStruct({
            amount: sts.bigint(),
            beneficiary: AccountId32,
            validFrom: sts.option(() => sts.number()),
        }),
        spend_local: sts.enumStruct({
            amount: sts.bigint(),
            beneficiary: MultiAddress,
        }),
        void_spend: sts.enumStruct({
            index: sts.number(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const CollatorStakingCall: sts.Type<CollatorStakingCall> = sts.closedEnum(() => {
    return  {
        force_set_current_max_candidates: sts.enumStruct({
            maxCandidates: sts.number(),
        }),
        force_set_min_collator_stake: sts.enumStruct({
            minCollatorStake: sts.bigint(),
        }),
        join_candidates: sts.enumStruct({
            amount: sts.bigint(),
            rewardsCut: Perbill,
        }),
        nominate: sts.enumStruct({
            collatorId: AccountId32,
            amount: sts.bigint(),
        }),
        remove_nomination: sts.enumStruct({
            collatorId: AccountId32,
        }),
        set_invulnerables: sts.enumStruct({
            accounts: sts.array(() => AccountId32),
        }),
        unbond: sts.unit(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ClaimsCall: sts.Type<ClaimsCall> = sts.closedEnum(() => {
    return  {
        claim: sts.enumStruct({
            dest: AccountId32,
            ethereumSignature: Signature,
            ethereumAddress: H160,
        }),
        mint_claim: sts.enumStruct({
            who: H160,
            value: sts.bigint(),
        }),
        move_claim: sts.enumStruct({
            old: H160,
            new: H160,
        }),
        reject_claims: sts.enumStruct({
            batchData: sts.array(() => RejectData),
        }),
        request_claims: sts.enumStruct({
            blockNumber: sts.number(),
            batchData: sts.array(() => Claim),
        }),
        set_delay_time: sts.enumStruct({
            delayTime: sts.number(),
        }),
        set_exchange_rate: sts.enumStruct({
            numerator: sts.bigint(),
            denominator: sts.bigint(),
        }),
    }
})

export const Claim: sts.Type<Claim> = sts.struct(() => {
    return  {
        hash: H256,
        claim: TransactionData,
        isEfiToken: sts.boolean(),
    }
})

export const TransactionData: sts.Type<TransactionData> = sts.struct(() => {
    return  {
        account: H160,
        amount: sts.bigint(),
    }
})

export const RejectData: sts.Type<RejectData> = sts.struct(() => {
    return  {
        account: H160,
        hash: H256,
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const BountiesCall: sts.Type<BountiesCall> = sts.closedEnum(() => {
    return  {
        accept_curator: sts.enumStruct({
            bountyId: sts.number(),
        }),
        approve_bounty: sts.enumStruct({
            bountyId: sts.number(),
        }),
        award_bounty: sts.enumStruct({
            bountyId: sts.number(),
            beneficiary: MultiAddress,
        }),
        claim_bounty: sts.enumStruct({
            bountyId: sts.number(),
        }),
        close_bounty: sts.enumStruct({
            bountyId: sts.number(),
        }),
        extend_bounty_expiry: sts.enumStruct({
            bountyId: sts.number(),
            remark: sts.bytes(),
        }),
        propose_bounty: sts.enumStruct({
            value: sts.bigint(),
            description: sts.bytes(),
        }),
        propose_curator: sts.enumStruct({
            bountyId: sts.number(),
            curator: MultiAddress,
            fee: sts.bigint(),
        }),
        unassign_curator: sts.enumStruct({
            bountyId: sts.number(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const BalancesCall: sts.Type<BalancesCall> = sts.closedEnum(() => {
    return  {
        force_adjust_total_issuance: sts.enumStruct({
            direction: AdjustmentDirection,
            delta: sts.bigint(),
        }),
        force_set_balance: sts.enumStruct({
            who: MultiAddress,
            newFree: sts.bigint(),
        }),
        force_transfer: sts.enumStruct({
            source: MultiAddress,
            dest: MultiAddress,
            value: sts.bigint(),
        }),
        force_unreserve: sts.enumStruct({
            who: MultiAddress,
            amount: sts.bigint(),
        }),
        transfer_all: sts.enumStruct({
            dest: MultiAddress,
            keepAlive: sts.boolean(),
        }),
        transfer_allow_death: sts.enumStruct({
            dest: MultiAddress,
            value: sts.bigint(),
        }),
        transfer_keep_alive: sts.enumStruct({
            dest: MultiAddress,
            value: sts.bigint(),
        }),
        upgrade_accounts: sts.enumStruct({
            who: sts.array(() => AccountId32),
        }),
    }
})

export const AdjustmentDirection: sts.Type<AdjustmentDirection> = sts.closedEnum(() => {
    return  {
        Decrease: sts.unit(),
        Increase: sts.unit(),
    }
})

export const DispatchRuleKind: sts.Type<DispatchRuleKind> = sts.closedEnum(() => {
    return  {
        MaxFuelBurnPerTransaction: sts.unit(),
        MinimumInfusion: sts.unit(),
        PermittedCalls: sts.unit(),
        PermittedExtrinsics: sts.unit(),
        RequireSignature: sts.unit(),
        RequireToken: sts.unit(),
        TankFuelBudget: sts.unit(),
        UserFuelBudget: sts.unit(),
        WhitelistedCallers: sts.unit(),
        WhitelistedCollections: sts.unit(),
        WhitelistedPallets: sts.unit(),
    }
})

export const AccountId32 = sts.bytes()
