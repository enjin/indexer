import { sts, Result, Option, Bytes, BitSequence } from './support'

export type H256 = Bytes

export type Call =
    | Call_Balances
    | Call_Bounties
    | Call_Claims
    | Call_CollatorStaking
    | Call_CommunityPool
    | Call_Council
    | Call_CumulusXcm
    | Call_Democracy
    | Call_DmpQueue
    | Call_ExtrinsicPause
    | Call_FuelTanks
    | Call_Identity
    | Call_Marketplace
    | Call_MatrixUtility
    | Call_MatrixXcm
    | Call_MultiTokens
    | Call_Multisig
    | Call_OrmlXcm
    | Call_ParachainSystem
    | Call_PolkadotXcm
    | Call_Pools
    | Call_Preimage
    | Call_Scheduler
    | Call_Session
    | Call_Sudo
    | Call_System
    | Call_TechnicalCommittee
    | Call_TechnicalMembership
    | Call_Timestamp
    | Call_Utility
    | Call_XTokens
    | Call_XcmpQueue

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
export type XcmpQueueCall =
    | XcmpQueueCall_resume_xcm_execution
    | XcmpQueueCall_service_overweight
    | XcmpQueueCall_suspend_xcm_execution
    | XcmpQueueCall_update_drop_threshold
    | XcmpQueueCall_update_resume_threshold
    | XcmpQueueCall_update_suspend_threshold
    | XcmpQueueCall_update_threshold_weight
    | XcmpQueueCall_update_weight_restrict_decay
    | XcmpQueueCall_update_xcmp_max_individual_weight

/**
 * See [`Pallet::resume_xcm_execution`].
 */
export interface XcmpQueueCall_resume_xcm_execution {
    __kind: 'resume_xcm_execution'
}

/**
 * See [`Pallet::service_overweight`].
 */
export interface XcmpQueueCall_service_overweight {
    __kind: 'service_overweight'
    index: bigint
    weightLimit: Weight
}

/**
 * See [`Pallet::suspend_xcm_execution`].
 */
export interface XcmpQueueCall_suspend_xcm_execution {
    __kind: 'suspend_xcm_execution'
}

/**
 * See [`Pallet::update_drop_threshold`].
 */
export interface XcmpQueueCall_update_drop_threshold {
    __kind: 'update_drop_threshold'
    new: number
}

/**
 * See [`Pallet::update_resume_threshold`].
 */
export interface XcmpQueueCall_update_resume_threshold {
    __kind: 'update_resume_threshold'
    new: number
}

/**
 * See [`Pallet::update_suspend_threshold`].
 */
export interface XcmpQueueCall_update_suspend_threshold {
    __kind: 'update_suspend_threshold'
    new: number
}

/**
 * See [`Pallet::update_threshold_weight`].
 */
export interface XcmpQueueCall_update_threshold_weight {
    __kind: 'update_threshold_weight'
    new: Weight
}

/**
 * See [`Pallet::update_weight_restrict_decay`].
 */
export interface XcmpQueueCall_update_weight_restrict_decay {
    __kind: 'update_weight_restrict_decay'
    new: Weight
}

/**
 * See [`Pallet::update_xcmp_max_individual_weight`].
 */
export interface XcmpQueueCall_update_xcmp_max_individual_weight {
    __kind: 'update_xcmp_max_individual_weight'
    new: Weight
}

export interface Weight {
    refTime: bigint
    proofSize: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type XTokensCall =
    | XTokensCall_transfer
    | XTokensCall_transfer_multiasset
    | XTokensCall_transfer_multiasset_with_fee
    | XTokensCall_transfer_multiassets
    | XTokensCall_transfer_multicurrencies
    | XTokensCall_transfer_with_fee

/**
 * See [`Pallet::transfer`].
 */
export interface XTokensCall_transfer {
    __kind: 'transfer'
    currencyId: AssetId
    amount: bigint
    dest: VersionedMultiLocation
    destWeightLimit: V3WeightLimit
}

/**
 * See [`Pallet::transfer_multiasset`].
 */
export interface XTokensCall_transfer_multiasset {
    __kind: 'transfer_multiasset'
    asset: VersionedMultiAsset
    dest: VersionedMultiLocation
    destWeightLimit: V3WeightLimit
}

/**
 * See [`Pallet::transfer_multiasset_with_fee`].
 */
export interface XTokensCall_transfer_multiasset_with_fee {
    __kind: 'transfer_multiasset_with_fee'
    asset: VersionedMultiAsset
    fee: VersionedMultiAsset
    dest: VersionedMultiLocation
    destWeightLimit: V3WeightLimit
}

/**
 * See [`Pallet::transfer_multiassets`].
 */
export interface XTokensCall_transfer_multiassets {
    __kind: 'transfer_multiassets'
    assets: VersionedMultiAssets
    feeItem: number
    dest: VersionedMultiLocation
    destWeightLimit: V3WeightLimit
}

/**
 * See [`Pallet::transfer_multicurrencies`].
 */
export interface XTokensCall_transfer_multicurrencies {
    __kind: 'transfer_multicurrencies'
    currencies: [AssetId, bigint][]
    feeItem: number
    dest: VersionedMultiLocation
    destWeightLimit: V3WeightLimit
}

/**
 * See [`Pallet::transfer_with_fee`].
 */
export interface XTokensCall_transfer_with_fee {
    __kind: 'transfer_with_fee'
    currencyId: AssetId
    amount: bigint
    fee: bigint
    dest: VersionedMultiLocation
    destWeightLimit: V3WeightLimit
}

export type VersionedMultiAssets = VersionedMultiAssets_V2 | VersionedMultiAssets_V3

export interface VersionedMultiAssets_V2 {
    __kind: 'V2'
    value: V2MultiAsset[]
}

export interface VersionedMultiAssets_V3 {
    __kind: 'V3'
    value: V3MultiAsset[]
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

export type V3AssetInstance =
    | V3AssetInstance_Array16
    | V3AssetInstance_Array32
    | V3AssetInstance_Array4
    | V3AssetInstance_Array8
    | V3AssetInstance_Index
    | V3AssetInstance_Undefined

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

export type V3Junctions =
    | V3Junctions_Here
    | V3Junctions_X1
    | V3Junctions_X2
    | V3Junctions_X3
    | V3Junctions_X4
    | V3Junctions_X5
    | V3Junctions_X6
    | V3Junctions_X7
    | V3Junctions_X8

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

export type V3Junction =
    | V3Junction_AccountId32
    | V3Junction_AccountIndex64
    | V3Junction_AccountKey20
    | V3Junction_GeneralIndex
    | V3Junction_GeneralKey
    | V3Junction_GlobalConsensus
    | V3Junction_OnlyChild
    | V3Junction_PalletInstance
    | V3Junction_Parachain
    | V3Junction_Plurality

export interface V3Junction_AccountId32 {
    __kind: 'AccountId32'
    network?: V3NetworkId | undefined
    id: Bytes
}

export interface V3Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network?: V3NetworkId | undefined
    index: bigint
}

export interface V3Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network?: V3NetworkId | undefined
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

export type V3BodyPart =
    | V3BodyPart_AtLeastProportion
    | V3BodyPart_Fraction
    | V3BodyPart_Members
    | V3BodyPart_MoreThanProportion
    | V3BodyPart_Voice

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

export type V3BodyId =
    | V3BodyId_Administration
    | V3BodyId_Defense
    | V3BodyId_Executive
    | V3BodyId_Index
    | V3BodyId_Judicial
    | V3BodyId_Legislative
    | V3BodyId_Moniker
    | V3BodyId_Technical
    | V3BodyId_Treasury
    | V3BodyId_Unit

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

export type V3NetworkId =
    | V3NetworkId_BitcoinCash
    | V3NetworkId_BitcoinCore
    | V3NetworkId_ByFork
    | V3NetworkId_ByGenesis
    | V3NetworkId_Ethereum
    | V3NetworkId_Kusama
    | V3NetworkId_Polkadot
    | V3NetworkId_Rococo
    | V3NetworkId_Westend
    | V3NetworkId_Wococo

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

export type V2AssetInstance =
    | V2AssetInstance_Array16
    | V2AssetInstance_Array32
    | V2AssetInstance_Array4
    | V2AssetInstance_Array8
    | V2AssetInstance_Blob
    | V2AssetInstance_Index
    | V2AssetInstance_Undefined

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

export type V2Junctions =
    | V2Junctions_Here
    | V2Junctions_X1
    | V2Junctions_X2
    | V2Junctions_X3
    | V2Junctions_X4
    | V2Junctions_X5
    | V2Junctions_X6
    | V2Junctions_X7
    | V2Junctions_X8

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

export type V2Junction =
    | V2Junction_AccountId32
    | V2Junction_AccountIndex64
    | V2Junction_AccountKey20
    | V2Junction_GeneralIndex
    | V2Junction_GeneralKey
    | V2Junction_OnlyChild
    | V2Junction_PalletInstance
    | V2Junction_Parachain
    | V2Junction_Plurality

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

export type V2BodyPart =
    | V2BodyPart_AtLeastProportion
    | V2BodyPart_Fraction
    | V2BodyPart_Members
    | V2BodyPart_MoreThanProportion
    | V2BodyPart_Voice

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

export type V2BodyId =
    | V2BodyId_Administration
    | V2BodyId_Defense
    | V2BodyId_Executive
    | V2BodyId_Index
    | V2BodyId_Judicial
    | V2BodyId_Legislative
    | V2BodyId_Named
    | V2BodyId_Technical
    | V2BodyId_Treasury
    | V2BodyId_Unit

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

export type VersionedMultiAsset = VersionedMultiAsset_V2 | VersionedMultiAsset_V3

export interface VersionedMultiAsset_V2 {
    __kind: 'V2'
    value: V2MultiAsset
}

export interface VersionedMultiAsset_V3 {
    __kind: 'V3'
    value: V3MultiAsset
}

export type V3WeightLimit = V3WeightLimit_Limited | V3WeightLimit_Unlimited

export interface V3WeightLimit_Limited {
    __kind: 'Limited'
    value: Weight
}

export interface V3WeightLimit_Unlimited {
    __kind: 'Unlimited'
}

export type VersionedMultiLocation = VersionedMultiLocation_V2 | VersionedMultiLocation_V3

export interface VersionedMultiLocation_V2 {
    __kind: 'V2'
    value: V2MultiLocation
}

export interface VersionedMultiLocation_V3 {
    __kind: 'V3'
    value: V3MultiLocation
}

export interface AssetId {
    collectionId: bigint
    tokenId: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type UtilityCall =
    | UtilityCall_as_derivative
    | UtilityCall_batch
    | UtilityCall_batch_all
    | UtilityCall_dispatch_as
    | UtilityCall_force_batch
    | UtilityCall_with_weight

/**
 * See [`Pallet::as_derivative`].
 */
export interface UtilityCall_as_derivative {
    __kind: 'as_derivative'
    index: number
    call: Call
}

/**
 * See [`Pallet::batch`].
 */
export interface UtilityCall_batch {
    __kind: 'batch'
    calls: Call[]
}

/**
 * See [`Pallet::batch_all`].
 */
export interface UtilityCall_batch_all {
    __kind: 'batch_all'
    calls: Call[]
}

/**
 * See [`Pallet::dispatch_as`].
 */
export interface UtilityCall_dispatch_as {
    __kind: 'dispatch_as'
    asOrigin: OriginCaller
    call: Call
}

/**
 * See [`Pallet::force_batch`].
 */
export interface UtilityCall_force_batch {
    __kind: 'force_batch'
    calls: Call[]
}

/**
 * See [`Pallet::with_weight`].
 */
export interface UtilityCall_with_weight {
    __kind: 'with_weight'
    call: Call
    weight: Weight
}

export type OriginCaller =
    | OriginCaller_Council
    | OriginCaller_CumulusXcm
    | OriginCaller_PolkadotXcm
    | OriginCaller_TechnicalCommittee
    | OriginCaller_Void
    | OriginCaller_system

export interface OriginCaller_Council {
    __kind: 'Council'
    value: Type_309
}

export interface OriginCaller_CumulusXcm {
    __kind: 'CumulusXcm'
    value: Type_312
}

export interface OriginCaller_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: Origin
}

export interface OriginCaller_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: Type_310
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

export type AccountId32 = Bytes

export type Void = never

export type Type_310 = Type_310_Member | Type_310_Members | Type_310__Phantom

export interface Type_310_Member {
    __kind: 'Member'
    value: AccountId32
}

export interface Type_310_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_310__Phantom {
    __kind: '_Phantom'
}

export type Origin = Origin_Response | Origin_Xcm

export interface Origin_Response {
    __kind: 'Response'
    value: V3MultiLocation
}

export interface Origin_Xcm {
    __kind: 'Xcm'
    value: V3MultiLocation
}

export type Type_312 = Type_312_Relay | Type_312_SiblingParachain

export interface Type_312_Relay {
    __kind: 'Relay'
}

export interface Type_312_SiblingParachain {
    __kind: 'SiblingParachain'
    value: Id
}

export type Id = number

export type Type_309 = Type_309_Member | Type_309_Members | Type_309__Phantom

export interface Type_309_Member {
    __kind: 'Member'
    value: AccountId32
}

export interface Type_309_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_309__Phantom {
    __kind: '_Phantom'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TimestampCall = TimestampCall_set

/**
 * See [`Pallet::set`].
 */
export interface TimestampCall_set {
    __kind: 'set'
    now: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TechnicalMembershipCall =
    | TechnicalMembershipCall_add_member
    | TechnicalMembershipCall_change_key
    | TechnicalMembershipCall_clear_prime
    | TechnicalMembershipCall_remove_member
    | TechnicalMembershipCall_reset_members
    | TechnicalMembershipCall_set_prime
    | TechnicalMembershipCall_swap_member

/**
 * See [`Pallet::add_member`].
 */
export interface TechnicalMembershipCall_add_member {
    __kind: 'add_member'
    who: MultiAddress
}

/**
 * See [`Pallet::change_key`].
 */
export interface TechnicalMembershipCall_change_key {
    __kind: 'change_key'
    new: MultiAddress
}

/**
 * See [`Pallet::clear_prime`].
 */
export interface TechnicalMembershipCall_clear_prime {
    __kind: 'clear_prime'
}

/**
 * See [`Pallet::remove_member`].
 */
export interface TechnicalMembershipCall_remove_member {
    __kind: 'remove_member'
    who: MultiAddress
}

/**
 * See [`Pallet::reset_members`].
 */
export interface TechnicalMembershipCall_reset_members {
    __kind: 'reset_members'
    members: AccountId32[]
}

/**
 * See [`Pallet::set_prime`].
 */
export interface TechnicalMembershipCall_set_prime {
    __kind: 'set_prime'
    who: MultiAddress
}

/**
 * See [`Pallet::swap_member`].
 */
export interface TechnicalMembershipCall_swap_member {
    __kind: 'swap_member'
    remove: MultiAddress
    add: MultiAddress
}

export type MultiAddress =
    | MultiAddress_Address20
    | MultiAddress_Address32
    | MultiAddress_Id
    | MultiAddress_Index
    | MultiAddress_Raw

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
export type TechnicalCommitteeCall =
    | TechnicalCommitteeCall_close
    | TechnicalCommitteeCall_disapprove_proposal
    | TechnicalCommitteeCall_execute
    | TechnicalCommitteeCall_propose
    | TechnicalCommitteeCall_set_members
    | TechnicalCommitteeCall_vote

/**
 * See [`Pallet::close`].
 */
export interface TechnicalCommitteeCall_close {
    __kind: 'close'
    proposalHash: H256
    index: number
    proposalWeightBound: Weight
    lengthBound: number
}

/**
 * See [`Pallet::disapprove_proposal`].
 */
export interface TechnicalCommitteeCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: H256
}

/**
 * See [`Pallet::execute`].
 */
export interface TechnicalCommitteeCall_execute {
    __kind: 'execute'
    proposal: Call
    lengthBound: number
}

/**
 * See [`Pallet::propose`].
 */
export interface TechnicalCommitteeCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Call
    lengthBound: number
}

/**
 * See [`Pallet::set_members`].
 */
export interface TechnicalCommitteeCall_set_members {
    __kind: 'set_members'
    newMembers: AccountId32[]
    prime?: AccountId32 | undefined
    oldCount: number
}

/**
 * See [`Pallet::vote`].
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
export type SystemCall =
    | SystemCall_kill_prefix
    | SystemCall_kill_storage
    | SystemCall_remark
    | SystemCall_remark_with_event
    | SystemCall_set_code
    | SystemCall_set_code_without_checks
    | SystemCall_set_heap_pages
    | SystemCall_set_storage

/**
 * See [`Pallet::kill_prefix`].
 */
export interface SystemCall_kill_prefix {
    __kind: 'kill_prefix'
    prefix: Bytes
    subkeys: number
}

/**
 * See [`Pallet::kill_storage`].
 */
export interface SystemCall_kill_storage {
    __kind: 'kill_storage'
    keys: Bytes[]
}

/**
 * See [`Pallet::remark`].
 */
export interface SystemCall_remark {
    __kind: 'remark'
    remark: Bytes
}

/**
 * See [`Pallet::remark_with_event`].
 */
export interface SystemCall_remark_with_event {
    __kind: 'remark_with_event'
    remark: Bytes
}

/**
 * See [`Pallet::set_code`].
 */
export interface SystemCall_set_code {
    __kind: 'set_code'
    code: Bytes
}

/**
 * See [`Pallet::set_code_without_checks`].
 */
export interface SystemCall_set_code_without_checks {
    __kind: 'set_code_without_checks'
    code: Bytes
}

/**
 * See [`Pallet::set_heap_pages`].
 */
export interface SystemCall_set_heap_pages {
    __kind: 'set_heap_pages'
    pages: bigint
}

/**
 * See [`Pallet::set_storage`].
 */
export interface SystemCall_set_storage {
    __kind: 'set_storage'
    items: [Bytes, Bytes][]
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SudoCall = SudoCall_set_key | SudoCall_sudo | SudoCall_sudo_as | SudoCall_sudo_unchecked_weight

/**
 * See [`Pallet::set_key`].
 */
export interface SudoCall_set_key {
    __kind: 'set_key'
    new: MultiAddress
}

/**
 * See [`Pallet::sudo`].
 */
export interface SudoCall_sudo {
    __kind: 'sudo'
    call: Call
}

/**
 * See [`Pallet::sudo_as`].
 */
export interface SudoCall_sudo_as {
    __kind: 'sudo_as'
    who: MultiAddress
    call: Call
}

/**
 * See [`Pallet::sudo_unchecked_weight`].
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
 * See [`Pallet::purge_keys`].
 */
export interface SessionCall_purge_keys {
    __kind: 'purge_keys'
}

/**
 * See [`Pallet::set_keys`].
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
export type SchedulerCall =
    | SchedulerCall_cancel
    | SchedulerCall_cancel_named
    | SchedulerCall_schedule
    | SchedulerCall_schedule_after
    | SchedulerCall_schedule_named
    | SchedulerCall_schedule_named_after

/**
 * See [`Pallet::cancel`].
 */
export interface SchedulerCall_cancel {
    __kind: 'cancel'
    when: number
    index: number
}

/**
 * See [`Pallet::cancel_named`].
 */
export interface SchedulerCall_cancel_named {
    __kind: 'cancel_named'
    id: Bytes
}

/**
 * See [`Pallet::schedule`].
 */
export interface SchedulerCall_schedule {
    __kind: 'schedule'
    when: number
    maybePeriodic?: [number, number] | undefined
    priority: number
    call: Call
}

/**
 * See [`Pallet::schedule_after`].
 */
export interface SchedulerCall_schedule_after {
    __kind: 'schedule_after'
    after: number
    maybePeriodic?: [number, number] | undefined
    priority: number
    call: Call
}

/**
 * See [`Pallet::schedule_named`].
 */
export interface SchedulerCall_schedule_named {
    __kind: 'schedule_named'
    id: Bytes
    when: number
    maybePeriodic?: [number, number] | undefined
    priority: number
    call: Call
}

/**
 * See [`Pallet::schedule_named_after`].
 */
export interface SchedulerCall_schedule_named_after {
    __kind: 'schedule_named_after'
    id: Bytes
    after: number
    maybePeriodic?: [number, number] | undefined
    priority: number
    call: Call
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type PreimageCall =
    | PreimageCall_note_preimage
    | PreimageCall_request_preimage
    | PreimageCall_unnote_preimage
    | PreimageCall_unrequest_preimage

/**
 * See [`Pallet::note_preimage`].
 */
export interface PreimageCall_note_preimage {
    __kind: 'note_preimage'
    bytes: Bytes
}

/**
 * See [`Pallet::request_preimage`].
 */
export interface PreimageCall_request_preimage {
    __kind: 'request_preimage'
    hash: H256
}

/**
 * See [`Pallet::unnote_preimage`].
 */
export interface PreimageCall_unnote_preimage {
    __kind: 'unnote_preimage'
    hash: H256
}

/**
 * See [`Pallet::unrequest_preimage`].
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
 * See [`Pallet::mutate_pools`].
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
export type PolkadotXcmCall =
    | PolkadotXcmCall_execute
    | PolkadotXcmCall_force_default_xcm_version
    | PolkadotXcmCall_force_subscribe_version_notify
    | PolkadotXcmCall_force_suspension
    | PolkadotXcmCall_force_unsubscribe_version_notify
    | PolkadotXcmCall_force_xcm_version
    | PolkadotXcmCall_limited_reserve_transfer_assets
    | PolkadotXcmCall_limited_teleport_assets
    | PolkadotXcmCall_reserve_transfer_assets
    | PolkadotXcmCall_send
    | PolkadotXcmCall_teleport_assets

/**
 * See [`Pallet::execute`].
 */
export interface PolkadotXcmCall_execute {
    __kind: 'execute'
    message: Type_346
    maxWeight: Weight
}

/**
 * See [`Pallet::force_default_xcm_version`].
 */
export interface PolkadotXcmCall_force_default_xcm_version {
    __kind: 'force_default_xcm_version'
    maybeXcmVersion?: number | undefined
}

/**
 * See [`Pallet::force_subscribe_version_notify`].
 */
export interface PolkadotXcmCall_force_subscribe_version_notify {
    __kind: 'force_subscribe_version_notify'
    location: VersionedMultiLocation
}

/**
 * See [`Pallet::force_suspension`].
 */
export interface PolkadotXcmCall_force_suspension {
    __kind: 'force_suspension'
    suspended: boolean
}

/**
 * See [`Pallet::force_unsubscribe_version_notify`].
 */
export interface PolkadotXcmCall_force_unsubscribe_version_notify {
    __kind: 'force_unsubscribe_version_notify'
    location: VersionedMultiLocation
}

/**
 * See [`Pallet::force_xcm_version`].
 */
export interface PolkadotXcmCall_force_xcm_version {
    __kind: 'force_xcm_version'
    location: V3MultiLocation
    version: number
}

/**
 * See [`Pallet::limited_reserve_transfer_assets`].
 */
export interface PolkadotXcmCall_limited_reserve_transfer_assets {
    __kind: 'limited_reserve_transfer_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
    weightLimit: V3WeightLimit
}

/**
 * See [`Pallet::limited_teleport_assets`].
 */
export interface PolkadotXcmCall_limited_teleport_assets {
    __kind: 'limited_teleport_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
    weightLimit: V3WeightLimit
}

/**
 * See [`Pallet::reserve_transfer_assets`].
 */
export interface PolkadotXcmCall_reserve_transfer_assets {
    __kind: 'reserve_transfer_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
}

/**
 * See [`Pallet::send`].
 */
export interface PolkadotXcmCall_send {
    __kind: 'send'
    dest: VersionedMultiLocation
    message: VersionedXcm
}

/**
 * See [`Pallet::teleport_assets`].
 */
export interface PolkadotXcmCall_teleport_assets {
    __kind: 'teleport_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
}

export type VersionedXcm = VersionedXcm_V2 | VersionedXcm_V3

export interface VersionedXcm_V2 {
    __kind: 'V2'
    value: V2Instruction[]
}

export interface VersionedXcm_V3 {
    __kind: 'V3'
    value: V3Instruction[]
}

export type V3Instruction =
    | V3Instruction_AliasOrigin
    | V3Instruction_BurnAsset
    | V3Instruction_BuyExecution
    | V3Instruction_ClaimAsset
    | V3Instruction_ClearError
    | V3Instruction_ClearOrigin
    | V3Instruction_ClearTopic
    | V3Instruction_ClearTransactStatus
    | V3Instruction_DepositAsset
    | V3Instruction_DepositReserveAsset
    | V3Instruction_DescendOrigin
    | V3Instruction_ExchangeAsset
    | V3Instruction_ExpectAsset
    | V3Instruction_ExpectError
    | V3Instruction_ExpectOrigin
    | V3Instruction_ExpectPallet
    | V3Instruction_ExpectTransactStatus
    | V3Instruction_ExportMessage
    | V3Instruction_HrmpChannelAccepted
    | V3Instruction_HrmpChannelClosing
    | V3Instruction_HrmpNewChannelOpenRequest
    | V3Instruction_InitiateReserveWithdraw
    | V3Instruction_InitiateTeleport
    | V3Instruction_LockAsset
    | V3Instruction_NoteUnlockable
    | V3Instruction_QueryPallet
    | V3Instruction_QueryResponse
    | V3Instruction_ReceiveTeleportedAsset
    | V3Instruction_RefundSurplus
    | V3Instruction_ReportError
    | V3Instruction_ReportHolding
    | V3Instruction_ReportTransactStatus
    | V3Instruction_RequestUnlock
    | V3Instruction_ReserveAssetDeposited
    | V3Instruction_SetAppendix
    | V3Instruction_SetErrorHandler
    | V3Instruction_SetFeesMode
    | V3Instruction_SetTopic
    | V3Instruction_SubscribeVersion
    | V3Instruction_Transact
    | V3Instruction_TransferAsset
    | V3Instruction_TransferReserveAsset
    | V3Instruction_Trap
    | V3Instruction_UniversalOrigin
    | V3Instruction_UnlockAsset
    | V3Instruction_UnpaidExecution
    | V3Instruction_UnsubscribeVersion
    | V3Instruction_WithdrawAsset

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
    value?: [number, V3Error] | undefined
}

export interface V3Instruction_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value?: V3MultiLocation | undefined
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
    querier?: V3MultiLocation | undefined
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
    checkOrigin?: V3MultiLocation | undefined
}

export interface V3Instruction_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface V3Instruction_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V3MultiAsset[]
}

export interface DoubleEncoded {
    encoded: Bytes
}

export type V2OriginKind =
    | V2OriginKind_Native
    | V2OriginKind_SovereignAccount
    | V2OriginKind_Superuser
    | V2OriginKind_Xcm

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

export type V3Response =
    | V3Response_Assets
    | V3Response_DispatchResult
    | V3Response_ExecutionResult
    | V3Response_Null
    | V3Response_PalletsInfo
    | V3Response_Version

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
    value?: [number, V3Error] | undefined
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
    name: BoundedVec
    moduleName: BoundedVec
    major: number
    minor: number
    patch: number
}

export type BoundedVec = Bytes

export interface V3QueryResponseInfo {
    destination: V3MultiLocation
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

export type V3Error =
    | V3Error_AssetNotFound
    | V3Error_BadOrigin
    | V3Error_Barrier
    | V3Error_DestinationUnsupported
    | V3Error_ExceedsMaxMessageSize
    | V3Error_ExceedsStackLimit
    | V3Error_ExpectationFalse
    | V3Error_ExportError
    | V3Error_FailedToDecode
    | V3Error_FailedToTransactAsset
    | V3Error_FeesNotMet
    | V3Error_HoldingWouldOverflow
    | V3Error_InvalidLocation
    | V3Error_LocationCannotHold
    | V3Error_LocationFull
    | V3Error_LocationNotInvertible
    | V3Error_LockError
    | V3Error_MaxWeightInvalid
    | V3Error_NameMismatch
    | V3Error_NoDeal
    | V3Error_NoPermission
    | V3Error_NotDepositable
    | V3Error_NotHoldingFees
    | V3Error_NotWithdrawable
    | V3Error_Overflow
    | V3Error_PalletNotFound
    | V3Error_ReanchorFailed
    | V3Error_TooExpensive
    | V3Error_Transport
    | V3Error_Trap
    | V3Error_Unanchored
    | V3Error_UnhandledXcmVersion
    | V3Error_Unimplemented
    | V3Error_UnknownClaim
    | V3Error_Unroutable
    | V3Error_UntrustedReserveLocation
    | V3Error_UntrustedTeleportLocation
    | V3Error_VersionIncompatible
    | V3Error_WeightLimitReached
    | V3Error_WeightNotComputable

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

export type V3MultiAssetFilter = V3MultiAssetFilter_Definite | V3MultiAssetFilter_Wild

export interface V3MultiAssetFilter_Definite {
    __kind: 'Definite'
    value: V3MultiAsset[]
}

export interface V3MultiAssetFilter_Wild {
    __kind: 'Wild'
    value: V3WildMultiAsset
}

export type V3WildMultiAsset =
    | V3WildMultiAsset_All
    | V3WildMultiAsset_AllCounted
    | V3WildMultiAsset_AllOf
    | V3WildMultiAsset_AllOfCounted

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

export type V2Instruction =
    | V2Instruction_BuyExecution
    | V2Instruction_ClaimAsset
    | V2Instruction_ClearError
    | V2Instruction_ClearOrigin
    | V2Instruction_DepositAsset
    | V2Instruction_DepositReserveAsset
    | V2Instruction_DescendOrigin
    | V2Instruction_ExchangeAsset
    | V2Instruction_HrmpChannelAccepted
    | V2Instruction_HrmpChannelClosing
    | V2Instruction_HrmpNewChannelOpenRequest
    | V2Instruction_InitiateReserveWithdraw
    | V2Instruction_InitiateTeleport
    | V2Instruction_QueryHolding
    | V2Instruction_QueryResponse
    | V2Instruction_ReceiveTeleportedAsset
    | V2Instruction_RefundSurplus
    | V2Instruction_ReportError
    | V2Instruction_ReserveAssetDeposited
    | V2Instruction_SetAppendix
    | V2Instruction_SetErrorHandler
    | V2Instruction_SubscribeVersion
    | V2Instruction_Transact
    | V2Instruction_TransferAsset
    | V2Instruction_TransferReserveAsset
    | V2Instruction_Trap
    | V2Instruction_UnsubscribeVersion
    | V2Instruction_WithdrawAsset

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
    value?: [number, V2Error] | undefined
}

export interface V2Response_Null {
    __kind: 'Null'
}

export interface V2Response_Version {
    __kind: 'Version'
    value: number
}

export type V2Error =
    | V2Error_AssetNotFound
    | V2Error_BadOrigin
    | V2Error_Barrier
    | V2Error_DestinationUnsupported
    | V2Error_ExceedsMaxMessageSize
    | V2Error_FailedToDecode
    | V2Error_FailedToTransactAsset
    | V2Error_InvalidLocation
    | V2Error_LocationCannotHold
    | V2Error_MaxWeightInvalid
    | V2Error_MultiLocationFull
    | V2Error_MultiLocationNotInvertible
    | V2Error_NotHoldingFees
    | V2Error_NotWithdrawable
    | V2Error_Overflow
    | V2Error_TooExpensive
    | V2Error_Transport
    | V2Error_Trap
    | V2Error_UnhandledXcmVersion
    | V2Error_Unimplemented
    | V2Error_UnknownClaim
    | V2Error_Unroutable
    | V2Error_UntrustedReserveLocation
    | V2Error_UntrustedTeleportLocation
    | V2Error_WeightLimitReached
    | V2Error_WeightNotComputable

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

export type Type_346 = Type_346_V2 | Type_346_V3

export interface Type_346_V2 {
    __kind: 'V2'
    value: Type_349[]
}

export interface Type_346_V3 {
    __kind: 'V3'
    value: Type_353[]
}

export type Type_353 =
    | Type_353_AliasOrigin
    | Type_353_BurnAsset
    | Type_353_BuyExecution
    | Type_353_ClaimAsset
    | Type_353_ClearError
    | Type_353_ClearOrigin
    | Type_353_ClearTopic
    | Type_353_ClearTransactStatus
    | Type_353_DepositAsset
    | Type_353_DepositReserveAsset
    | Type_353_DescendOrigin
    | Type_353_ExchangeAsset
    | Type_353_ExpectAsset
    | Type_353_ExpectError
    | Type_353_ExpectOrigin
    | Type_353_ExpectPallet
    | Type_353_ExpectTransactStatus
    | Type_353_ExportMessage
    | Type_353_HrmpChannelAccepted
    | Type_353_HrmpChannelClosing
    | Type_353_HrmpNewChannelOpenRequest
    | Type_353_InitiateReserveWithdraw
    | Type_353_InitiateTeleport
    | Type_353_LockAsset
    | Type_353_NoteUnlockable
    | Type_353_QueryPallet
    | Type_353_QueryResponse
    | Type_353_ReceiveTeleportedAsset
    | Type_353_RefundSurplus
    | Type_353_ReportError
    | Type_353_ReportHolding
    | Type_353_ReportTransactStatus
    | Type_353_RequestUnlock
    | Type_353_ReserveAssetDeposited
    | Type_353_SetAppendix
    | Type_353_SetErrorHandler
    | Type_353_SetFeesMode
    | Type_353_SetTopic
    | Type_353_SubscribeVersion
    | Type_353_Transact
    | Type_353_TransferAsset
    | Type_353_TransferReserveAsset
    | Type_353_Trap
    | Type_353_UniversalOrigin
    | Type_353_UnlockAsset
    | Type_353_UnpaidExecution
    | Type_353_UnsubscribeVersion
    | Type_353_WithdrawAsset

export interface Type_353_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V3MultiLocation
}

export interface Type_353_BurnAsset {
    __kind: 'BurnAsset'
    value: V3MultiAsset[]
}

export interface Type_353_BuyExecution {
    __kind: 'BuyExecution'
    fees: V3MultiAsset
    weightLimit: V3WeightLimit
}

export interface Type_353_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V3MultiAsset[]
    ticket: V3MultiLocation
}

export interface Type_353_ClearError {
    __kind: 'ClearError'
}

export interface Type_353_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_353_ClearTopic {
    __kind: 'ClearTopic'
}

export interface Type_353_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface Type_353_DepositAsset {
    __kind: 'DepositAsset'
    assets: V3MultiAssetFilter
    beneficiary: V3MultiLocation
}

export interface Type_353_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_353_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V3Junctions
}

export interface Type_353_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V3MultiAssetFilter
    want: V3MultiAsset[]
    maximal: boolean
}

export interface Type_353_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V3MultiAsset[]
}

export interface Type_353_ExpectError {
    __kind: 'ExpectError'
    value?: [number, V3Error] | undefined
}

export interface Type_353_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value?: V3MultiLocation | undefined
}

export interface Type_353_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Bytes
    moduleName: Bytes
    crateMajor: number
    minCrateMinor: number
}

export interface Type_353_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface Type_353_ExportMessage {
    __kind: 'ExportMessage'
    network: V3NetworkId
    destination: V3Junctions
    xcm: V3Instruction[]
}

export interface Type_353_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_353_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_353_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_353_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V3MultiAssetFilter
    reserve: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_353_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_353_LockAsset {
    __kind: 'LockAsset'
    asset: V3MultiAsset
    unlocker: V3MultiLocation
}

export interface Type_353_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V3MultiAsset
    owner: V3MultiLocation
}

export interface Type_353_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Bytes
    responseInfo: V3QueryResponseInfo
}

export interface Type_353_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V3Response
    maxWeight: Weight
    querier?: V3MultiLocation | undefined
}

export interface Type_353_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V3MultiAsset[]
}

export interface Type_353_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_353_ReportError {
    __kind: 'ReportError'
    value: V3QueryResponseInfo
}

export interface Type_353_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V3QueryResponseInfo
    assets: V3MultiAssetFilter
}

export interface Type_353_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V3QueryResponseInfo
}

export interface Type_353_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V3MultiAsset
    locker: V3MultiLocation
}

export interface Type_353_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V3MultiAsset[]
}

export interface Type_353_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_353[]
}

export interface Type_353_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_353[]
}

export interface Type_353_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface Type_353_SetTopic {
    __kind: 'SetTopic'
    value: Bytes
}

export interface Type_353_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface Type_353_Transact {
    __kind: 'Transact'
    originKind: V2OriginKind
    requireWeightAtMost: Weight
    call: Type_350
}

export interface Type_353_TransferAsset {
    __kind: 'TransferAsset'
    assets: V3MultiAsset[]
    beneficiary: V3MultiLocation
}

export interface Type_353_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V3MultiAsset[]
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_353_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_353_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V3Junction
}

export interface Type_353_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V3MultiAsset
    target: V3MultiLocation
}

export interface Type_353_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin?: V3MultiLocation | undefined
}

export interface Type_353_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_353_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V3MultiAsset[]
}

export interface Type_350 {
    encoded: Bytes
}

export type Type_349 =
    | Type_349_BuyExecution
    | Type_349_ClaimAsset
    | Type_349_ClearError
    | Type_349_ClearOrigin
    | Type_349_DepositAsset
    | Type_349_DepositReserveAsset
    | Type_349_DescendOrigin
    | Type_349_ExchangeAsset
    | Type_349_HrmpChannelAccepted
    | Type_349_HrmpChannelClosing
    | Type_349_HrmpNewChannelOpenRequest
    | Type_349_InitiateReserveWithdraw
    | Type_349_InitiateTeleport
    | Type_349_QueryHolding
    | Type_349_QueryResponse
    | Type_349_ReceiveTeleportedAsset
    | Type_349_RefundSurplus
    | Type_349_ReportError
    | Type_349_ReserveAssetDeposited
    | Type_349_SetAppendix
    | Type_349_SetErrorHandler
    | Type_349_SubscribeVersion
    | Type_349_Transact
    | Type_349_TransferAsset
    | Type_349_TransferReserveAsset
    | Type_349_Trap
    | Type_349_UnsubscribeVersion
    | Type_349_WithdrawAsset

export interface Type_349_BuyExecution {
    __kind: 'BuyExecution'
    fees: V2MultiAsset
    weightLimit: V2WeightLimit
}

export interface Type_349_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V2MultiAsset[]
    ticket: V2MultiLocation
}

export interface Type_349_ClearError {
    __kind: 'ClearError'
}

export interface Type_349_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_349_DepositAsset {
    __kind: 'DepositAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    beneficiary: V2MultiLocation
}

export interface Type_349_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_349_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V2Junctions
}

export interface Type_349_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V2MultiAssetFilter
    receive: V2MultiAsset[]
}

export interface Type_349_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_349_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_349_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_349_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V2MultiAssetFilter
    reserve: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_349_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V2MultiAssetFilter
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_349_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V2MultiLocation
    assets: V2MultiAssetFilter
    maxResponseWeight: bigint
}

export interface Type_349_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface Type_349_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V2MultiAsset[]
}

export interface Type_349_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_349_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V2MultiLocation
    maxResponseWeight: bigint
}

export interface Type_349_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V2MultiAsset[]
}

export interface Type_349_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_349[]
}

export interface Type_349_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_349[]
}

export interface Type_349_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface Type_349_Transact {
    __kind: 'Transact'
    originType: V2OriginKind
    requireWeightAtMost: bigint
    call: Type_350
}

export interface Type_349_TransferAsset {
    __kind: 'TransferAsset'
    assets: V2MultiAsset[]
    beneficiary: V2MultiLocation
}

export interface Type_349_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V2MultiAsset[]
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_349_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_349_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_349_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V2MultiAsset[]
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParachainSystemCall =
    | ParachainSystemCall_authorize_upgrade
    | ParachainSystemCall_enact_authorized_upgrade
    | ParachainSystemCall_set_validation_data
    | ParachainSystemCall_sudo_send_upward_message

/**
 * See [`Pallet::authorize_upgrade`].
 */
export interface ParachainSystemCall_authorize_upgrade {
    __kind: 'authorize_upgrade'
    codeHash: H256
    checkVersion: boolean
}

/**
 * See [`Pallet::enact_authorized_upgrade`].
 */
export interface ParachainSystemCall_enact_authorized_upgrade {
    __kind: 'enact_authorized_upgrade'
    code: Bytes
}

/**
 * See [`Pallet::set_validation_data`].
 */
export interface ParachainSystemCall_set_validation_data {
    __kind: 'set_validation_data'
    data: ParachainInherentData
}

/**
 * See [`Pallet::sudo_send_upward_message`].
 */
export interface ParachainSystemCall_sudo_send_upward_message {
    __kind: 'sudo_send_upward_message'
    message: Bytes
}

export interface ParachainInherentData {
    validationData: V5PersistedValidationData
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

export interface V5PersistedValidationData {
    parentHead: HeadData
    relayParentNumber: number
    relayParentStorageRoot: H256
    maxPovSize: number
}

export type HeadData = Bytes

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type OrmlXcmCall = OrmlXcmCall_send_as_sovereign

/**
 * See [`Pallet::send_as_sovereign`].
 */
export interface OrmlXcmCall_send_as_sovereign {
    __kind: 'send_as_sovereign'
    dest: VersionedMultiLocation
    message: VersionedXcm
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type MultisigCall =
    | MultisigCall_approve_as_multi
    | MultisigCall_as_multi
    | MultisigCall_as_multi_threshold_1
    | MultisigCall_cancel_as_multi

/**
 * See [`Pallet::approve_as_multi`].
 */
export interface MultisigCall_approve_as_multi {
    __kind: 'approve_as_multi'
    threshold: number
    otherSignatories: AccountId32[]
    maybeTimepoint?: Timepoint | undefined
    callHash: Bytes
    maxWeight: Weight
}

/**
 * See [`Pallet::as_multi`].
 */
export interface MultisigCall_as_multi {
    __kind: 'as_multi'
    threshold: number
    otherSignatories: AccountId32[]
    maybeTimepoint?: Timepoint | undefined
    call: Call
    maxWeight: Weight
}

/**
 * See [`Pallet::as_multi_threshold_1`].
 */
export interface MultisigCall_as_multi_threshold_1 {
    __kind: 'as_multi_threshold_1'
    otherSignatories: AccountId32[]
    call: Call
}

/**
 * See [`Pallet::cancel_as_multi`].
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
export type MultiTokensCall =
    | MultiTokensCall_accept_collection_transfer
    | MultiTokensCall_approve_collection
    | MultiTokensCall_approve_token
    | MultiTokensCall_batch_mint
    | MultiTokensCall_batch_set_attribute
    | MultiTokensCall_batch_transfer
    | MultiTokensCall_burn
    | MultiTokensCall_cancel_collection_transfer
    | MultiTokensCall_claim_collections
    | MultiTokensCall_claim_tokens
    | MultiTokensCall_create_collection
    | MultiTokensCall_destroy_collection
    | MultiTokensCall_finish_claim_tokens
    | MultiTokensCall_force_approve_collection
    | MultiTokensCall_force_burn
    | MultiTokensCall_force_create_collection
    | MultiTokensCall_force_create_ethereum_collection
    | MultiTokensCall_force_freeze
    | MultiTokensCall_force_mint
    | MultiTokensCall_force_mutate_collection
    | MultiTokensCall_force_set_attribute
    | MultiTokensCall_force_set_collection
    | MultiTokensCall_force_set_collection_account
    | MultiTokensCall_force_set_ethereum_account
    | MultiTokensCall_force_set_ethereum_collection_id
    | MultiTokensCall_force_set_ethereum_unmintable_token_ids
    | MultiTokensCall_force_set_next_collection_id
    | MultiTokensCall_force_set_token
    | MultiTokensCall_force_set_token_account
    | MultiTokensCall_force_set_unmintable_token_ids
    | MultiTokensCall_force_transfer
    | MultiTokensCall_freeze
    | MultiTokensCall_mint
    | MultiTokensCall_mutate_collection
    | MultiTokensCall_mutate_token
    | MultiTokensCall_remove_all_attributes
    | MultiTokensCall_remove_attribute
    | MultiTokensCall_set_attribute
    | MultiTokensCall_thaw
    | MultiTokensCall_transfer
    | MultiTokensCall_unapprove_collection
    | MultiTokensCall_unapprove_token

/**
 * See [`Pallet::accept_collection_transfer`].
 */
export interface MultiTokensCall_accept_collection_transfer {
    __kind: 'accept_collection_transfer'
    collectionId: bigint
}

/**
 * See [`Pallet::approve_collection`].
 */
export interface MultiTokensCall_approve_collection {
    __kind: 'approve_collection'
    collectionId: bigint
    operator: AccountId32
    expiration?: number | undefined
}

/**
 * See [`Pallet::approve_token`].
 */
export interface MultiTokensCall_approve_token {
    __kind: 'approve_token'
    collectionId: bigint
    tokenId: bigint
    operator: AccountId32
    amount: bigint
    expiration?: number | undefined
    currentAmount: bigint
}

/**
 * See [`Pallet::batch_mint`].
 */
export interface MultiTokensCall_batch_mint {
    __kind: 'batch_mint'
    collectionId: bigint
    recipients: Type_388[]
}

/**
 * See [`Pallet::batch_set_attribute`].
 */
export interface MultiTokensCall_batch_set_attribute {
    __kind: 'batch_set_attribute'
    collectionId: bigint
    tokenId?: bigint | undefined
    attributes: AttributeKeyValuePair[]
}

/**
 * See [`Pallet::batch_transfer`].
 */
export interface MultiTokensCall_batch_transfer {
    __kind: 'batch_transfer'
    collectionId: bigint
    recipients: Recipient[]
}

/**
 * See [`Pallet::burn`].
 */
export interface MultiTokensCall_burn {
    __kind: 'burn'
    collectionId: bigint
    params: DefaultBurnParams
}

/**
 * See [`Pallet::cancel_collection_transfer`].
 */
export interface MultiTokensCall_cancel_collection_transfer {
    __kind: 'cancel_collection_transfer'
    collectionId: bigint
}

/**
 * See [`Pallet::claim_collections`].
 */
export interface MultiTokensCall_claim_collections {
    __kind: 'claim_collections'
    destination: AccountId32
    ethereumSignature: Signature
    ethereumAddress: H160
    collectionCount: number
}

/**
 * See [`Pallet::claim_tokens`].
 */
export interface MultiTokensCall_claim_tokens {
    __kind: 'claim_tokens'
    destination: AccountId32
    ethereumSignature: Signature
    ethereumAddress: H160
}

/**
 * See [`Pallet::create_collection`].
 */
export interface MultiTokensCall_create_collection {
    __kind: 'create_collection'
    descriptor: DefaultCollectionDescriptor
}

/**
 * See [`Pallet::destroy_collection`].
 */
export interface MultiTokensCall_destroy_collection {
    __kind: 'destroy_collection'
    collectionId: bigint
}

/**
 * See [`Pallet::finish_claim_tokens`].
 */
export interface MultiTokensCall_finish_claim_tokens {
    __kind: 'finish_claim_tokens'
    destination: AccountId32
    ethereumAddress: H160
}

/**
 * See [`Pallet::force_approve_collection`].
 */
export interface MultiTokensCall_force_approve_collection {
    __kind: 'force_approve_collection'
    caller: MultiAddress
    collectionId: bigint
    operator: AccountId32
    expiration?: number | undefined
}

/**
 * See [`Pallet::force_burn`].
 */
export interface MultiTokensCall_force_burn {
    __kind: 'force_burn'
    caller: MultiAddress
    collectionId: bigint
    params: DefaultBurnParams
}

/**
 * See [`Pallet::force_create_collection`].
 */
export interface MultiTokensCall_force_create_collection {
    __kind: 'force_create_collection'
    owner: AccountId32
    collectionId: bigint
    descriptor: DefaultCollectionDescriptor
}

/**
 * See [`Pallet::force_create_ethereum_collection`].
 */
export interface MultiTokensCall_force_create_ethereum_collection {
    __kind: 'force_create_ethereum_collection'
    owner: AccountId32
    claimer: H160
    ethereumCollectionId: bigint
    descriptor: DefaultCollectionDescriptor
}

/**
 * See [`Pallet::force_freeze`].
 */
export interface MultiTokensCall_force_freeze {
    __kind: 'force_freeze'
    info: Freeze
}

/**
 * See [`Pallet::force_mint`].
 */
export interface MultiTokensCall_force_mint {
    __kind: 'force_mint'
    caller?: MultiAddress | undefined
    recipient: MultiAddress
    collectionId: bigint
    params: FlexibleMintParams
    depositor?: MultiAddress | undefined
}

/**
 * See [`Pallet::force_mutate_collection`].
 */
export interface MultiTokensCall_force_mutate_collection {
    __kind: 'force_mutate_collection'
    collectionId: bigint
    mutation: DefaultCollectionMutation
}

/**
 * See [`Pallet::force_set_attribute`].
 */
export interface MultiTokensCall_force_set_attribute {
    __kind: 'force_set_attribute'
    collectionId: bigint
    tokenId?: bigint | undefined
    key: Bytes
    value?: Attribute | undefined
}

/**
 * See [`Pallet::force_set_collection`].
 */
export interface MultiTokensCall_force_set_collection {
    __kind: 'force_set_collection'
    collectionId: bigint
    value?: Collection | undefined
}

/**
 * See [`Pallet::force_set_collection_account`].
 */
export interface MultiTokensCall_force_set_collection_account {
    __kind: 'force_set_collection_account'
    collectionId: bigint
    accountId: MultiAddress
    value?: CollectionAccount | undefined
}

/**
 * See [`Pallet::force_set_ethereum_account`].
 */
export interface MultiTokensCall_force_set_ethereum_account {
    __kind: 'force_set_ethereum_account'
    address: H160
    value?: bigint[] | undefined
}

/**
 * See [`Pallet::force_set_ethereum_collection_id`].
 */
export interface MultiTokensCall_force_set_ethereum_collection_id {
    __kind: 'force_set_ethereum_collection_id'
    ethereumCollectionId: bigint
    nativeCollectionId?: bigint | undefined
}

/**
 * See [`Pallet::force_set_ethereum_unmintable_token_ids`].
 */
export interface MultiTokensCall_force_set_ethereum_unmintable_token_ids {
    __kind: 'force_set_ethereum_unmintable_token_ids'
    ethereumCollectionId: bigint
    baseTokenId: bigint
    tokenIndex: bigint
}

/**
 * See [`Pallet::force_set_next_collection_id`].
 */
export interface MultiTokensCall_force_set_next_collection_id {
    __kind: 'force_set_next_collection_id'
    value: bigint
}

/**
 * See [`Pallet::force_set_token`].
 */
export interface MultiTokensCall_force_set_token {
    __kind: 'force_set_token'
    collectionId: bigint
    tokenId: bigint
    value?: Token | undefined
}

/**
 * See [`Pallet::force_set_token_account`].
 */
export interface MultiTokensCall_force_set_token_account {
    __kind: 'force_set_token_account'
    collectionId: bigint
    tokenId: bigint
    accountId: MultiAddress
    value?: TokenAccount | undefined
}

/**
 * See [`Pallet::force_set_unmintable_token_ids`].
 */
export interface MultiTokensCall_force_set_unmintable_token_ids {
    __kind: 'force_set_unmintable_token_ids'
    collectionId: bigint
    baseTokenId: bigint
    tokenIndex: bigint
}

/**
 * See [`Pallet::force_transfer`].
 */
export interface MultiTokensCall_force_transfer {
    __kind: 'force_transfer'
    source: MultiAddress
    destination: MultiAddress
    collectionId: bigint
    params: DefaultTransferParams
}

/**
 * See [`Pallet::freeze`].
 */
export interface MultiTokensCall_freeze {
    __kind: 'freeze'
    info: Freeze
}

/**
 * See [`Pallet::mint`].
 */
export interface MultiTokensCall_mint {
    __kind: 'mint'
    recipient: MultiAddress
    collectionId: bigint
    params: DefaultMintParams
}

/**
 * See [`Pallet::mutate_collection`].
 */
export interface MultiTokensCall_mutate_collection {
    __kind: 'mutate_collection'
    collectionId: bigint
    mutation: DefaultCollectionMutation
}

/**
 * See [`Pallet::mutate_token`].
 */
export interface MultiTokensCall_mutate_token {
    __kind: 'mutate_token'
    collectionId: bigint
    tokenId: bigint
    mutation: DefaultTokenMutation
}

/**
 * See [`Pallet::remove_all_attributes`].
 */
export interface MultiTokensCall_remove_all_attributes {
    __kind: 'remove_all_attributes'
    collectionId: bigint
    tokenId?: bigint | undefined
    attributeCount: number
}

/**
 * See [`Pallet::remove_attribute`].
 */
export interface MultiTokensCall_remove_attribute {
    __kind: 'remove_attribute'
    collectionId: bigint
    tokenId?: bigint | undefined
    key: Bytes
}

/**
 * See [`Pallet::set_attribute`].
 */
export interface MultiTokensCall_set_attribute {
    __kind: 'set_attribute'
    collectionId: bigint
    tokenId?: bigint | undefined
    key: Bytes
    value: Bytes
}

/**
 * See [`Pallet::thaw`].
 */
export interface MultiTokensCall_thaw {
    __kind: 'thaw'
    info: Freeze
}

/**
 * See [`Pallet::transfer`].
 */
export interface MultiTokensCall_transfer {
    __kind: 'transfer'
    recipient: MultiAddress
    collectionId: bigint
    params: DefaultTransferParams
}

/**
 * See [`Pallet::unapprove_collection`].
 */
export interface MultiTokensCall_unapprove_collection {
    __kind: 'unapprove_collection'
    collectionId: bigint
    operator: AccountId32
}

/**
 * See [`Pallet::unapprove_token`].
 */
export interface MultiTokensCall_unapprove_token {
    __kind: 'unapprove_token'
    collectionId: bigint
    tokenId: bigint
    operator: AccountId32
}

export interface DefaultTokenMutation {
    behavior: Type_146
    listingForbidden: Type_149
    metadata: Type_150
}

export type Type_150 = Type_150_NoMutation | Type_150_SomeMutation

export interface Type_150_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_150_SomeMutation {
    __kind: 'SomeMutation'
    value: DefaultTokenMetadata
}

export type DefaultTokenMetadata = DefaultTokenMetadata_Foreign | DefaultTokenMetadata_Native

export interface DefaultTokenMetadata_Foreign {
    __kind: 'Foreign'
    value: DefaultForeignTokenMetadata
}

export interface DefaultTokenMetadata_Native {
    __kind: 'Native'
}

export interface DefaultForeignTokenMetadata {
    decimalCount: number
    name: BoundedString
    symbol: Bytes
    location?: V3MultiLocation | undefined
    unitsPerSecond?: bigint | undefined
    premintedSupply: bigint
}

export type BoundedString = Bytes

export type Type_149 = Type_149_NoMutation | Type_149_SomeMutation

export interface Type_149_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_149_SomeMutation {
    __kind: 'SomeMutation'
    value: boolean
}

export type Type_146 = Type_146_NoMutation | Type_146_SomeMutation

export interface Type_146_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_146_SomeMutation {
    __kind: 'SomeMutation'
    value?: TokenMarketBehavior | undefined
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
    sufficiency: SufficiencyParam
    cap?: TokenCap | undefined
    behavior?: TokenMarketBehavior | undefined
    listingForbidden: boolean
    freezeState?: FreezeState | undefined
    attributes: AttributeKeyValuePair[]
    foreignParams?: ForeignTokenCreationParams | undefined
}

export interface DefaultMintParams_Mint {
    __kind: 'Mint'
    tokenId: bigint
    amount: bigint
    unitPrice?: bigint | undefined
}

export interface ForeignTokenCreationParams {
    decimalCount: number
    name: BoundedString
    symbol: Bytes
    location?: V3MultiLocation | undefined
    unitsPerSecond?: bigint | undefined
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

export type TokenCap = TokenCap_CollapsingSupply | TokenCap_SingleMint | TokenCap_Supply

export interface TokenCap_CollapsingSupply {
    __kind: 'CollapsingSupply'
    value: bigint
}

export interface TokenCap_SingleMint {
    __kind: 'SingleMint'
}

export interface TokenCap_Supply {
    __kind: 'Supply'
    value: bigint
}

export type SufficiencyParam = SufficiencyParam_Insufficient | SufficiencyParam_Sufficient

export interface SufficiencyParam_Insufficient {
    __kind: 'Insufficient'
    unitPrice?: bigint | undefined
}

export interface SufficiencyParam_Sufficient {
    __kind: 'Sufficient'
    minimumBalance: bigint
}

export type DefaultTransferParams = DefaultTransferParams_Operator | DefaultTransferParams_Simple

export interface DefaultTransferParams_Operator {
    __kind: 'Operator'
    tokenId: bigint
    source: AccountId32
    amount: bigint
    keepAlive: boolean
}

export interface DefaultTransferParams_Simple {
    __kind: 'Simple'
    tokenId: bigint
    amount: bigint
    keepAlive: boolean
}

export interface TokenAccount {
    balance: bigint
    reservedBalance: bigint
    lockedBalance: bigint
    namedReserves: [Bytes, bigint][]
    locks: [Bytes, bigint][]
    approvals: [AccountId32, Approval][]
    isFrozen: boolean
}

export interface Approval {
    amount: bigint
    expiration?: number | undefined
}

export interface Token {
    supply: bigint
    cap?: TokenCap | undefined
    freezeState?: FreezeState | undefined
    minimumBalance: bigint
    sufficiency: Sufficiency
    mintDeposit: bigint
    attributeCount: number
    marketBehavior?: TokenMarketBehavior | undefined
    listingForbidden: boolean
    metadata: DefaultTokenMetadata
}

export type Sufficiency = Sufficiency_Insufficient | Sufficiency_Sufficient

export interface Sufficiency_Insufficient {
    __kind: 'Insufficient'
    unitPrice: bigint
}

export interface Sufficiency_Sufficient {
    __kind: 'Sufficient'
}

export interface CollectionAccount {
    isFrozen: boolean
    approvals: [AccountId32, number | undefined][]
    accountCount: number
}

export interface Collection {
    owner: AccountId32
    policy: DefaultCollectionPolicy
    tokenCount: bigint
    attributeCount: number
    totalDeposit: bigint
    explicitRoyaltyCurrencies: [AssetId, null][]
}

export interface DefaultCollectionPolicy {
    mint: DefaultMintPolicy
    transfer: DefaultTransferPolicy
    market: DefaultMarketPolicy
}

export interface DefaultMarketPolicy {
    royalty?: DefaultRoyalty | undefined
}

export interface DefaultTransferPolicy {
    isFrozen: boolean
}

export interface DefaultMintPolicy {
    maxTokenCount?: bigint | undefined
    maxTokenSupply?: bigint | undefined
    forceSingleMint: boolean
}

export interface Attribute {
    value: Bytes
    deposit: bigint
}

export interface DefaultCollectionMutation {
    owner?: AccountId32 | undefined
    royalty: ShouldMutate
    explicitRoyaltyCurrencies?: AssetId[] | undefined
}

export type ShouldMutate = ShouldMutate_NoMutation | ShouldMutate_SomeMutation

export interface ShouldMutate_NoMutation {
    __kind: 'NoMutation'
}

export interface ShouldMutate_SomeMutation {
    __kind: 'SomeMutation'
    value?: DefaultRoyalty | undefined
}

export type FlexibleMintParams =
    | FlexibleMintParams_CreateOrMint
    | FlexibleMintParams_CreateToken
    | FlexibleMintParams_Mint

export interface FlexibleMintParams_CreateOrMint {
    __kind: 'CreateOrMint'
    tokenId: bigint
    amount: bigint
    sufficiency: SufficiencyParam
    cap?: TokenCap | undefined
    behavior?: TokenMarketBehavior | undefined
    listingForbidden: boolean
    freezeState?: FreezeState | undefined
    attributes: AttributeKeyValuePair[]
    foreignParams?: ForeignTokenCreationParams | undefined
}

export interface FlexibleMintParams_CreateToken {
    __kind: 'CreateToken'
    tokenId: bigint
    initialSupply: bigint
    sufficiency: SufficiencyParam
    cap?: TokenCap | undefined
    behavior?: TokenMarketBehavior | undefined
    listingForbidden: boolean
    freezeState?: FreezeState | undefined
    attributes: AttributeKeyValuePair[]
    foreignParams?: ForeignTokenCreationParams | undefined
}

export interface FlexibleMintParams_Mint {
    __kind: 'Mint'
    tokenId: bigint
    amount: bigint
    unitPrice?: bigint | undefined
}

export interface Freeze {
    collectionId: bigint
    freezeType: FreezeType
}

export type FreezeType =
    | FreezeType_Collection
    | FreezeType_CollectionAccount
    | FreezeType_Token
    | FreezeType_TokenAccount

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
    freezeState?: FreezeState | undefined
}

export interface FreezeType_TokenAccount {
    __kind: 'TokenAccount'
    tokenId: bigint
    accountId: AccountId32
}

export interface DefaultCollectionDescriptor {
    policy: DefaultCollectionPolicyDescriptor
    explicitRoyaltyCurrencies: AssetId[]
    attributes: AttributeKeyValuePair[]
}

export interface DefaultCollectionPolicyDescriptor {
    mint: DefaultMintPolicyDescriptor
    market: DefaultMarketPolicyDescriptor
}

export interface DefaultMarketPolicyDescriptor {
    royalty?: DefaultRoyalty | undefined
}

export interface DefaultMintPolicyDescriptor {
    maxTokenCount?: bigint | undefined
    maxTokenSupply?: bigint | undefined
    forceSingleMint: boolean
}

export type H160 = Bytes

export type Signature = Bytes

export interface DefaultBurnParams {
    tokenId: bigint
    amount: bigint
    keepAlive: boolean
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

export interface Type_388 {
    accountId: AccountId32
    params: DefaultMintParams
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type MatrixXcmCall =
    | MatrixXcmCall_force_set_minimum_weight
    | MatrixXcmCall_transfer_asset_to_parachain
    | MatrixXcmCall_transfer_asset_with_fee
    | MatrixXcmCall_transfer_to_parachain

/**
 * See [`Pallet::force_set_minimum_weight`].
 */
export interface MatrixXcmCall_force_set_minimum_weight {
    __kind: 'force_set_minimum_weight'
    xcmCall: XcmOperation
    xcmWeightFeeMisc: MinimumWeightFeePair
}

/**
 * See [`Pallet::transfer_asset_to_parachain`].
 */
export interface MatrixXcmCall_transfer_asset_to_parachain {
    __kind: 'transfer_asset_to_parachain'
    paraId: ParachainId
    beneficiary: Account
    currencyId: AssetId
    amount: bigint
    destWeight?: bigint | undefined
}

/**
 * See [`Pallet::transfer_asset_with_fee`].
 */
export interface MatrixXcmCall_transfer_asset_with_fee {
    __kind: 'transfer_asset_with_fee'
    assetPair: CurrencyIdAmountPair
    feePair: CurrencyIdAmountPair
    paraId: ParachainId
    beneficiary: Account
    destWeight?: bigint | undefined
}

/**
 * See [`Pallet::transfer_to_parachain`].
 */
export interface MatrixXcmCall_transfer_to_parachain {
    __kind: 'transfer_to_parachain'
    paraId: ParachainId
    beneficiary: Account
    amount: bigint
    destWeight?: bigint | undefined
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
    value: V3MultiLocation
}

export interface XcmOperation_XTokensTransfer {
    __kind: 'XTokensTransfer'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type MatrixUtilityCall = MatrixUtilityCall_batch

/**
 * See [`Pallet::batch`].
 */
export interface MatrixUtilityCall_batch {
    __kind: 'batch'
    calls: Call[]
    continueOnFailure: boolean
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type MarketplaceCall =
    | MarketplaceCall_cancel_listing
    | MarketplaceCall_convert_listings
    | MarketplaceCall_create_listing
    | MarketplaceCall_fill_listing
    | MarketplaceCall_finalize_auction
    | MarketplaceCall_force_create_listing
    | MarketplaceCall_force_place_bid
    | MarketplaceCall_place_bid
    | MarketplaceCall_set_protocol_fee

/**
 * See [`Pallet::cancel_listing`].
 */
export interface MarketplaceCall_cancel_listing {
    __kind: 'cancel_listing'
    listingId: H256
}

/**
 * See [`Pallet::convert_listings`].
 */
export interface MarketplaceCall_convert_listings {
    __kind: 'convert_listings'
    listingIds: H256[]
}

/**
 * See [`Pallet::create_listing`].
 */
export interface MarketplaceCall_create_listing {
    __kind: 'create_listing'
    makeAssetId: AssetId
    takeAssetId: AssetId
    amount: bigint
    price: bigint
    salt: Bytes
    auctionData?: AuctionData | undefined
}

/**
 * See [`Pallet::fill_listing`].
 */
export interface MarketplaceCall_fill_listing {
    __kind: 'fill_listing'
    listingId: H256
    amount: bigint
}

/**
 * See [`Pallet::finalize_auction`].
 */
export interface MarketplaceCall_finalize_auction {
    __kind: 'finalize_auction'
    listingId: H256
}

/**
 * See [`Pallet::force_create_listing`].
 */
export interface MarketplaceCall_force_create_listing {
    __kind: 'force_create_listing'
    seller: MultiAddress
    makeAssetId: AssetId
    takeAssetId: AssetId
    amount: bigint
    price: bigint
    salt: Bytes
    auctionData?: AuctionData | undefined
    depositBacker?: MultiAddress | undefined
}

/**
 * See [`Pallet::force_place_bid`].
 */
export interface MarketplaceCall_force_place_bid {
    __kind: 'force_place_bid'
    bidder: MultiAddress
    listingId: H256
    price: bigint
    fundsBacker?: MultiAddress | undefined
}

/**
 * See [`Pallet::place_bid`].
 */
export interface MarketplaceCall_place_bid {
    __kind: 'place_bid'
    listingId: H256
    price: bigint
}

/**
 * See [`Pallet::set_protocol_fee`].
 */
export interface MarketplaceCall_set_protocol_fee {
    __kind: 'set_protocol_fee'
    protocolFee: Perbill
}

export interface AuctionData {
    startBlock: number
    endBlock: number
}

/**
 * Identity pallet declaration.
 */
export type IdentityCall =
    | IdentityCall_add_registrar
    | IdentityCall_add_sub
    | IdentityCall_cancel_request
    | IdentityCall_clear_identity
    | IdentityCall_kill_identity
    | IdentityCall_provide_judgement
    | IdentityCall_quit_sub
    | IdentityCall_remove_sub
    | IdentityCall_rename_sub
    | IdentityCall_request_judgement
    | IdentityCall_set_account_id
    | IdentityCall_set_fee
    | IdentityCall_set_fields
    | IdentityCall_set_identity
    | IdentityCall_set_subs

/**
 * See [`Pallet::add_registrar`].
 */
export interface IdentityCall_add_registrar {
    __kind: 'add_registrar'
    account: MultiAddress
}

/**
 * See [`Pallet::add_sub`].
 */
export interface IdentityCall_add_sub {
    __kind: 'add_sub'
    sub: MultiAddress
    data: Data
}

/**
 * See [`Pallet::cancel_request`].
 */
export interface IdentityCall_cancel_request {
    __kind: 'cancel_request'
    regIndex: number
}

/**
 * See [`Pallet::clear_identity`].
 */
export interface IdentityCall_clear_identity {
    __kind: 'clear_identity'
}

/**
 * See [`Pallet::kill_identity`].
 */
export interface IdentityCall_kill_identity {
    __kind: 'kill_identity'
    target: MultiAddress
}

/**
 * See [`Pallet::provide_judgement`].
 */
export interface IdentityCall_provide_judgement {
    __kind: 'provide_judgement'
    regIndex: number
    target: MultiAddress
    judgement: Judgement
    identity: H256
}

/**
 * See [`Pallet::quit_sub`].
 */
export interface IdentityCall_quit_sub {
    __kind: 'quit_sub'
}

/**
 * See [`Pallet::remove_sub`].
 */
export interface IdentityCall_remove_sub {
    __kind: 'remove_sub'
    sub: MultiAddress
}

/**
 * See [`Pallet::rename_sub`].
 */
export interface IdentityCall_rename_sub {
    __kind: 'rename_sub'
    sub: MultiAddress
    data: Data
}

/**
 * See [`Pallet::request_judgement`].
 */
export interface IdentityCall_request_judgement {
    __kind: 'request_judgement'
    regIndex: number
    maxFee: bigint
}

/**
 * See [`Pallet::set_account_id`].
 */
export interface IdentityCall_set_account_id {
    __kind: 'set_account_id'
    index: number
    new: MultiAddress
}

/**
 * See [`Pallet::set_fee`].
 */
export interface IdentityCall_set_fee {
    __kind: 'set_fee'
    index: number
    fee: bigint
}

/**
 * See [`Pallet::set_fields`].
 */
export interface IdentityCall_set_fields {
    __kind: 'set_fields'
    index: number
    fields: BitFlags
}

/**
 * See [`Pallet::set_identity`].
 */
export interface IdentityCall_set_identity {
    __kind: 'set_identity'
    info: IdentityInfo
}

/**
 * See [`Pallet::set_subs`].
 */
export interface IdentityCall_set_subs {
    __kind: 'set_subs'
    subs: [AccountId32, Data][]
}

export interface IdentityInfo {
    additional: [Data, Data][]
    display: Data
    legal: Data
    web: Data
    riot: Data
    email: Data
    pgpFingerprint?: Bytes | undefined
    image: Data
    twitter: Data
}

export type BitFlags = bigint

export type Judgement =
    | Judgement_Erroneous
    | Judgement_FeePaid
    | Judgement_KnownGood
    | Judgement_LowQuality
    | Judgement_OutOfDate
    | Judgement_Reasonable
    | Judgement_Unknown

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

export type Data =
    | Data_BlakeTwo256
    | Data_Keccak256
    | Data_None
    | Data_Raw0
    | Data_Raw1
    | Data_Raw10
    | Data_Raw11
    | Data_Raw12
    | Data_Raw13
    | Data_Raw14
    | Data_Raw15
    | Data_Raw16
    | Data_Raw17
    | Data_Raw18
    | Data_Raw19
    | Data_Raw2
    | Data_Raw20
    | Data_Raw21
    | Data_Raw22
    | Data_Raw23
    | Data_Raw24
    | Data_Raw25
    | Data_Raw26
    | Data_Raw27
    | Data_Raw28
    | Data_Raw29
    | Data_Raw3
    | Data_Raw30
    | Data_Raw31
    | Data_Raw32
    | Data_Raw4
    | Data_Raw5
    | Data_Raw6
    | Data_Raw7
    | Data_Raw8
    | Data_Raw9
    | Data_Sha256
    | Data_ShaThree256

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
export type FuelTanksCall =
    | FuelTanksCall_add_account
    | FuelTanksCall_batch_add_account
    | FuelTanksCall_batch_remove_account
    | FuelTanksCall_create_fuel_tank
    | FuelTanksCall_destroy_fuel_tank
    | FuelTanksCall_dispatch
    | FuelTanksCall_dispatch_and_touch
    | FuelTanksCall_force_batch_add_account
    | FuelTanksCall_force_create_fuel_tank
    | FuelTanksCall_force_set_consumption
    | FuelTanksCall_insert_rule_set
    | FuelTanksCall_mutate_freeze_state
    | FuelTanksCall_mutate_fuel_tank
    | FuelTanksCall_remove_account
    | FuelTanksCall_remove_account_rule_data
    | FuelTanksCall_remove_rule_set

/**
 * See [`Pallet::add_account`].
 */
export interface FuelTanksCall_add_account {
    __kind: 'add_account'
    tankId: MultiAddress
    userId: MultiAddress
}

/**
 * See [`Pallet::batch_add_account`].
 */
export interface FuelTanksCall_batch_add_account {
    __kind: 'batch_add_account'
    tankId: MultiAddress
    userIds: MultiAddress[]
}

/**
 * See [`Pallet::batch_remove_account`].
 */
export interface FuelTanksCall_batch_remove_account {
    __kind: 'batch_remove_account'
    tankId: MultiAddress
    userIds: MultiAddress[]
}

/**
 * See [`Pallet::create_fuel_tank`].
 */
export interface FuelTanksCall_create_fuel_tank {
    __kind: 'create_fuel_tank'
    descriptor: FuelTankDescriptor
}

/**
 * See [`Pallet::destroy_fuel_tank`].
 */
export interface FuelTanksCall_destroy_fuel_tank {
    __kind: 'destroy_fuel_tank'
    tankId: MultiAddress
}

/**
 * See [`Pallet::dispatch`].
 */
export interface FuelTanksCall_dispatch {
    __kind: 'dispatch'
    tankId: MultiAddress
    ruleSetId: number
    call: Call
    settings?: DispatchSettings | undefined
}

/**
 * See [`Pallet::dispatch_and_touch`].
 */
export interface FuelTanksCall_dispatch_and_touch {
    __kind: 'dispatch_and_touch'
    tankId: MultiAddress
    ruleSetId: number
    call: Call
    settings?: DispatchSettings | undefined
}

/**
 * See [`Pallet::force_batch_add_account`].
 */
export interface FuelTanksCall_force_batch_add_account {
    __kind: 'force_batch_add_account'
    owner: MultiAddress
    tankId: MultiAddress
    userIds: MultiAddress[]
}

/**
 * See [`Pallet::force_create_fuel_tank`].
 */
export interface FuelTanksCall_force_create_fuel_tank {
    __kind: 'force_create_fuel_tank'
    owner: MultiAddress
    descriptor: FuelTankDescriptor
}

/**
 * See [`Pallet::force_set_consumption`].
 */
export interface FuelTanksCall_force_set_consumption {
    __kind: 'force_set_consumption'
    tankId: MultiAddress
    userId?: MultiAddress | undefined
    ruleSetId: number
    consumption: Consumption
}

/**
 * See [`Pallet::insert_rule_set`].
 */
export interface FuelTanksCall_insert_rule_set {
    __kind: 'insert_rule_set'
    tankId: MultiAddress
    ruleSetId: number
    rules: DispatchRuleDescriptor[]
}

/**
 * See [`Pallet::mutate_freeze_state`].
 */
export interface FuelTanksCall_mutate_freeze_state {
    __kind: 'mutate_freeze_state'
    tankId: MultiAddress
    ruleSetId?: number | undefined
    isFrozen: boolean
}

/**
 * See [`Pallet::mutate_fuel_tank`].
 */
export interface FuelTanksCall_mutate_fuel_tank {
    __kind: 'mutate_fuel_tank'
    tankId: MultiAddress
    mutation: DefaultTankMutation
}

/**
 * See [`Pallet::remove_account`].
 */
export interface FuelTanksCall_remove_account {
    __kind: 'remove_account'
    tankId: MultiAddress
    userId: MultiAddress
}

/**
 * See [`Pallet::remove_account_rule_data`].
 */
export interface FuelTanksCall_remove_account_rule_data {
    __kind: 'remove_account_rule_data'
    tankId: MultiAddress
    userId: MultiAddress
    ruleSetId: number
    ruleKind: DispatchRuleKind
}

/**
 * See [`Pallet::remove_rule_set`].
 */
export interface FuelTanksCall_remove_rule_set {
    __kind: 'remove_rule_set'
    tankId: MultiAddress
    ruleSetId: number
}

export type DispatchRuleKind =
    | DispatchRuleKind_MaxFuelBurnPerTransaction
    | DispatchRuleKind_PermittedCalls
    | DispatchRuleKind_PermittedExtrinsics
    | DispatchRuleKind_RequireToken
    | DispatchRuleKind_TankFuelBudget
    | DispatchRuleKind_UserFuelBudget
    | DispatchRuleKind_WhitelistedCallers
    | DispatchRuleKind_WhitelistedCollections
    | DispatchRuleKind_WhitelistedPallets

export interface DispatchRuleKind_MaxFuelBurnPerTransaction {
    __kind: 'MaxFuelBurnPerTransaction'
}

export interface DispatchRuleKind_PermittedCalls {
    __kind: 'PermittedCalls'
}

export interface DispatchRuleKind_PermittedExtrinsics {
    __kind: 'PermittedExtrinsics'
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

export interface DefaultTankMutation {
    userAccountManagement: Type_212
    providesDeposit?: boolean | undefined
    accountRules?: AccountRuleDescriptor[] | undefined
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

export interface RequireTokenRule {
    collectionId: bigint
    tokenId: bigint
}

export type Type_212 = Type_212_NoMutation | Type_212_SomeMutation

export interface Type_212_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_212_SomeMutation {
    __kind: 'SomeMutation'
    value?: UserAccountManagement | undefined
}

export interface UserAccountManagement {
    tankReservesExistentialDeposit: boolean
    tankReservesAccountCreationDeposit: boolean
}

export type DispatchRuleDescriptor =
    | DispatchRuleDescriptor_MaxFuelBurnPerTransaction
    | DispatchRuleDescriptor_PermittedCalls
    | DispatchRuleDescriptor_PermittedExtrinsics
    | DispatchRuleDescriptor_RequireToken
    | DispatchRuleDescriptor_TankFuelBudget
    | DispatchRuleDescriptor_UserFuelBudget
    | DispatchRuleDescriptor_WhitelistedCallers
    | DispatchRuleDescriptor_WhitelistedCollections
    | DispatchRuleDescriptor_WhitelistedPallets

export interface DispatchRuleDescriptor_MaxFuelBurnPerTransaction {
    __kind: 'MaxFuelBurnPerTransaction'
    value: MaxFuelBurnPerTransactionRule
}

export interface DispatchRuleDescriptor_PermittedCalls {
    __kind: 'PermittedCalls'
    value: Bytes[]
}

export interface DispatchRuleDescriptor_PermittedExtrinsics {
    __kind: 'PermittedExtrinsics'
    value: Call[]
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

export type MaxFuelBurnPerTransactionRule = bigint

export interface Consumption {
    totalConsumed: bigint
    lastResetBlock?: number | undefined
}

export interface DispatchSettings {
    useNoneOrigin: boolean
    paysRemainingFee: boolean
}

export interface FuelTankDescriptor {
    name: Bytes
    userAccountManagement?: UserAccountManagement | undefined
    ruleSets: [number, DispatchRuleDescriptor[]][]
    providesDeposit: boolean
    accountRules: AccountRuleDescriptor[]
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ExtrinsicPauseCall = ExtrinsicPauseCall_pause_extrinsic | ExtrinsicPauseCall_resume_extrinsic

/**
 * See [`Pallet::pause_extrinsic`].
 */
export interface ExtrinsicPauseCall_pause_extrinsic {
    __kind: 'pause_extrinsic'
    call: Call
    pauseOnlyExtrinsic: boolean
}

/**
 * See [`Pallet::resume_extrinsic`].
 */
export interface ExtrinsicPauseCall_resume_extrinsic {
    __kind: 'resume_extrinsic'
    call: Call
    resumeOnlyExtrinsic: boolean
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type DmpQueueCall = DmpQueueCall_service_overweight

/**
 * See [`Pallet::service_overweight`].
 */
export interface DmpQueueCall_service_overweight {
    __kind: 'service_overweight'
    index: bigint
    weightLimit: Weight
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type DemocracyCall =
    | DemocracyCall_blacklist
    | DemocracyCall_cancel_proposal
    | DemocracyCall_cancel_referendum
    | DemocracyCall_clear_public_proposals
    | DemocracyCall_delegate
    | DemocracyCall_emergency_cancel
    | DemocracyCall_external_propose
    | DemocracyCall_external_propose_default
    | DemocracyCall_external_propose_majority
    | DemocracyCall_fast_track
    | DemocracyCall_propose
    | DemocracyCall_remove_other_vote
    | DemocracyCall_remove_vote
    | DemocracyCall_second
    | DemocracyCall_set_metadata
    | DemocracyCall_undelegate
    | DemocracyCall_unlock
    | DemocracyCall_veto_external
    | DemocracyCall_vote

/**
 * See [`Pallet::blacklist`].
 */
export interface DemocracyCall_blacklist {
    __kind: 'blacklist'
    proposalHash: H256
    maybeRefIndex?: number | undefined
}

/**
 * See [`Pallet::cancel_proposal`].
 */
export interface DemocracyCall_cancel_proposal {
    __kind: 'cancel_proposal'
    propIndex: number
}

/**
 * See [`Pallet::cancel_referendum`].
 */
export interface DemocracyCall_cancel_referendum {
    __kind: 'cancel_referendum'
    refIndex: number
}

/**
 * See [`Pallet::clear_public_proposals`].
 */
export interface DemocracyCall_clear_public_proposals {
    __kind: 'clear_public_proposals'
}

/**
 * See [`Pallet::delegate`].
 */
export interface DemocracyCall_delegate {
    __kind: 'delegate'
    to: MultiAddress
    conviction: Conviction
    balance: bigint
}

/**
 * See [`Pallet::emergency_cancel`].
 */
export interface DemocracyCall_emergency_cancel {
    __kind: 'emergency_cancel'
    refIndex: number
}

/**
 * See [`Pallet::external_propose`].
 */
export interface DemocracyCall_external_propose {
    __kind: 'external_propose'
    proposal: Bounded
}

/**
 * See [`Pallet::external_propose_default`].
 */
export interface DemocracyCall_external_propose_default {
    __kind: 'external_propose_default'
    proposal: Bounded
}

/**
 * See [`Pallet::external_propose_majority`].
 */
export interface DemocracyCall_external_propose_majority {
    __kind: 'external_propose_majority'
    proposal: Bounded
}

/**
 * See [`Pallet::fast_track`].
 */
export interface DemocracyCall_fast_track {
    __kind: 'fast_track'
    proposalHash: H256
    votingPeriod: number
    delay: number
}

/**
 * See [`Pallet::propose`].
 */
export interface DemocracyCall_propose {
    __kind: 'propose'
    proposal: Bounded
    value: bigint
}

/**
 * See [`Pallet::remove_other_vote`].
 */
export interface DemocracyCall_remove_other_vote {
    __kind: 'remove_other_vote'
    target: MultiAddress
    index: number
}

/**
 * See [`Pallet::remove_vote`].
 */
export interface DemocracyCall_remove_vote {
    __kind: 'remove_vote'
    index: number
}

/**
 * See [`Pallet::second`].
 */
export interface DemocracyCall_second {
    __kind: 'second'
    proposal: number
}

/**
 * See [`Pallet::set_metadata`].
 */
export interface DemocracyCall_set_metadata {
    __kind: 'set_metadata'
    owner: MetadataOwner
    maybeHash?: H256 | undefined
}

/**
 * See [`Pallet::undelegate`].
 */
export interface DemocracyCall_undelegate {
    __kind: 'undelegate'
}

/**
 * See [`Pallet::unlock`].
 */
export interface DemocracyCall_unlock {
    __kind: 'unlock'
    target: MultiAddress
}

/**
 * See [`Pallet::veto_external`].
 */
export interface DemocracyCall_veto_external {
    __kind: 'veto_external'
    proposalHash: H256
}

/**
 * See [`Pallet::vote`].
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

export type Conviction =
    | Conviction_Locked1x
    | Conviction_Locked2x
    | Conviction_Locked3x
    | Conviction_Locked4x
    | Conviction_Locked5x
    | Conviction_Locked6x
    | Conviction_None

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
export type CouncilCall =
    | CouncilCall_close
    | CouncilCall_disapprove_proposal
    | CouncilCall_execute
    | CouncilCall_propose
    | CouncilCall_set_members
    | CouncilCall_vote

/**
 * See [`Pallet::close`].
 */
export interface CouncilCall_close {
    __kind: 'close'
    proposalHash: H256
    index: number
    proposalWeightBound: Weight
    lengthBound: number
}

/**
 * See [`Pallet::disapprove_proposal`].
 */
export interface CouncilCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: H256
}

/**
 * See [`Pallet::execute`].
 */
export interface CouncilCall_execute {
    __kind: 'execute'
    proposal: Call
    lengthBound: number
}

/**
 * See [`Pallet::propose`].
 */
export interface CouncilCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Call
    lengthBound: number
}

/**
 * See [`Pallet::set_members`].
 */
export interface CouncilCall_set_members {
    __kind: 'set_members'
    newMembers: AccountId32[]
    prime?: AccountId32 | undefined
    oldCount: number
}

/**
 * See [`Pallet::vote`].
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
export type CommunityPoolCall =
    | CommunityPoolCall_approve_proposal
    | CommunityPoolCall_propose_spend
    | CommunityPoolCall_reject_proposal
    | CommunityPoolCall_remove_approval
    | CommunityPoolCall_spend

/**
 * See [`Pallet::approve_proposal`].
 */
export interface CommunityPoolCall_approve_proposal {
    __kind: 'approve_proposal'
    proposalId: number
}

/**
 * See [`Pallet::propose_spend`].
 */
export interface CommunityPoolCall_propose_spend {
    __kind: 'propose_spend'
    value: bigint
    beneficiary: MultiAddress
}

/**
 * See [`Pallet::reject_proposal`].
 */
export interface CommunityPoolCall_reject_proposal {
    __kind: 'reject_proposal'
    proposalId: number
}

/**
 * See [`Pallet::remove_approval`].
 */
export interface CommunityPoolCall_remove_approval {
    __kind: 'remove_approval'
    proposalId: number
}

/**
 * See [`Pallet::spend`].
 */
export interface CommunityPoolCall_spend {
    __kind: 'spend'
    amount: bigint
    beneficiary: MultiAddress
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type CollatorStakingCall =
    | CollatorStakingCall_force_set_current_max_candidates
    | CollatorStakingCall_force_set_min_collator_stake
    | CollatorStakingCall_join_candidates
    | CollatorStakingCall_nominate
    | CollatorStakingCall_remove_nomination
    | CollatorStakingCall_set_invulnerables
    | CollatorStakingCall_unbond

/**
 * See [`Pallet::force_set_current_max_candidates`].
 */
export interface CollatorStakingCall_force_set_current_max_candidates {
    __kind: 'force_set_current_max_candidates'
    maxCandidates: number
}

/**
 * See [`Pallet::force_set_min_collator_stake`].
 */
export interface CollatorStakingCall_force_set_min_collator_stake {
    __kind: 'force_set_min_collator_stake'
    minCollatorStake: bigint
}

/**
 * See [`Pallet::join_candidates`].
 */
export interface CollatorStakingCall_join_candidates {
    __kind: 'join_candidates'
    amount: bigint
    rewardsCut: Perbill
}

/**
 * See [`Pallet::nominate`].
 */
export interface CollatorStakingCall_nominate {
    __kind: 'nominate'
    collatorId: AccountId32
    amount: bigint
}

/**
 * See [`Pallet::remove_nomination`].
 */
export interface CollatorStakingCall_remove_nomination {
    __kind: 'remove_nomination'
    collatorId: AccountId32
}

/**
 * See [`Pallet::set_invulnerables`].
 */
export interface CollatorStakingCall_set_invulnerables {
    __kind: 'set_invulnerables'
    accounts: AccountId32[]
}

/**
 * See [`Pallet::unbond`].
 */
export interface CollatorStakingCall_unbond {
    __kind: 'unbond'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ClaimsCall =
    | ClaimsCall_claim
    | ClaimsCall_mint_claim
    | ClaimsCall_move_claim
    | ClaimsCall_reject_claims
    | ClaimsCall_request_claims
    | ClaimsCall_set_delay_time
    | ClaimsCall_set_exchange_rate

/**
 * See [`Pallet::claim`].
 */
export interface ClaimsCall_claim {
    __kind: 'claim'
    dest: AccountId32
    ethereumSignature: Signature
    ethereumAddress: H160
}

/**
 * See [`Pallet::mint_claim`].
 */
export interface ClaimsCall_mint_claim {
    __kind: 'mint_claim'
    who: H160
    value: bigint
}

/**
 * See [`Pallet::move_claim`].
 */
export interface ClaimsCall_move_claim {
    __kind: 'move_claim'
    old: H160
    new: H160
}

/**
 * See [`Pallet::reject_claims`].
 */
export interface ClaimsCall_reject_claims {
    __kind: 'reject_claims'
    batchData: RejectData[]
}

/**
 * See [`Pallet::request_claims`].
 */
export interface ClaimsCall_request_claims {
    __kind: 'request_claims'
    blockNumber: number
    batchData: Claim[]
}

/**
 * See [`Pallet::set_delay_time`].
 */
export interface ClaimsCall_set_delay_time {
    __kind: 'set_delay_time'
    delayTime: number
}

/**
 * See [`Pallet::set_exchange_rate`].
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
export type BountiesCall =
    | BountiesCall_accept_curator
    | BountiesCall_approve_bounty
    | BountiesCall_award_bounty
    | BountiesCall_claim_bounty
    | BountiesCall_close_bounty
    | BountiesCall_extend_bounty_expiry
    | BountiesCall_propose_bounty
    | BountiesCall_propose_curator
    | BountiesCall_unassign_curator

/**
 * See [`Pallet::accept_curator`].
 */
export interface BountiesCall_accept_curator {
    __kind: 'accept_curator'
    bountyId: number
}

/**
 * See [`Pallet::approve_bounty`].
 */
export interface BountiesCall_approve_bounty {
    __kind: 'approve_bounty'
    bountyId: number
}

/**
 * See [`Pallet::award_bounty`].
 */
export interface BountiesCall_award_bounty {
    __kind: 'award_bounty'
    bountyId: number
    beneficiary: MultiAddress
}

/**
 * See [`Pallet::claim_bounty`].
 */
export interface BountiesCall_claim_bounty {
    __kind: 'claim_bounty'
    bountyId: number
}

/**
 * See [`Pallet::close_bounty`].
 */
export interface BountiesCall_close_bounty {
    __kind: 'close_bounty'
    bountyId: number
}

/**
 * See [`Pallet::extend_bounty_expiry`].
 */
export interface BountiesCall_extend_bounty_expiry {
    __kind: 'extend_bounty_expiry'
    bountyId: number
    remark: Bytes
}

/**
 * See [`Pallet::propose_bounty`].
 */
export interface BountiesCall_propose_bounty {
    __kind: 'propose_bounty'
    value: bigint
    description: Bytes
}

/**
 * See [`Pallet::propose_curator`].
 */
export interface BountiesCall_propose_curator {
    __kind: 'propose_curator'
    bountyId: number
    curator: MultiAddress
    fee: bigint
}

/**
 * See [`Pallet::unassign_curator`].
 */
export interface BountiesCall_unassign_curator {
    __kind: 'unassign_curator'
    bountyId: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type BalancesCall =
    | BalancesCall_force_set_balance
    | BalancesCall_force_transfer
    | BalancesCall_force_unreserve
    | BalancesCall_set_balance_deprecated
    | BalancesCall_transfer
    | BalancesCall_transfer_all
    | BalancesCall_transfer_allow_death
    | BalancesCall_transfer_keep_alive
    | BalancesCall_upgrade_accounts

/**
 * See [`Pallet::force_set_balance`].
 */
export interface BalancesCall_force_set_balance {
    __kind: 'force_set_balance'
    who: MultiAddress
    newFree: bigint
}

/**
 * See [`Pallet::force_transfer`].
 */
export interface BalancesCall_force_transfer {
    __kind: 'force_transfer'
    source: MultiAddress
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::force_unreserve`].
 */
export interface BalancesCall_force_unreserve {
    __kind: 'force_unreserve'
    who: MultiAddress
    amount: bigint
}

/**
 * See [`Pallet::set_balance_deprecated`].
 */
export interface BalancesCall_set_balance_deprecated {
    __kind: 'set_balance_deprecated'
    who: MultiAddress
    newFree: bigint
    oldReserved: bigint
}

/**
 * See [`Pallet::transfer`].
 */
export interface BalancesCall_transfer {
    __kind: 'transfer'
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::transfer_all`].
 */
export interface BalancesCall_transfer_all {
    __kind: 'transfer_all'
    dest: MultiAddress
    keepAlive: boolean
}

/**
 * See [`Pallet::transfer_allow_death`].
 */
export interface BalancesCall_transfer_allow_death {
    __kind: 'transfer_allow_death'
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::transfer_keep_alive`].
 */
export interface BalancesCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::upgrade_accounts`].
 */
export interface BalancesCall_upgrade_accounts {
    __kind: 'upgrade_accounts'
    who: AccountId32[]
}

export const H256 = sts.bytes()

export interface EventRecord {
    phase: Phase
    event: Event
    topics: H256[]
}

export type Event =
    | Event_Balances
    | Event_Bounties
    | Event_Claims
    | Event_CollatorStaking
    | Event_CommunityPool
    | Event_Council
    | Event_CumulusXcm
    | Event_Democracy
    | Event_DmpQueue
    | Event_ExtrinsicPause
    | Event_FuelTanks
    | Event_Identity
    | Event_Marketplace
    | Event_MatrixUtility
    | Event_MatrixXcm
    | Event_MultiTokens
    | Event_Multisig
    | Event_OrmlXcm
    | Event_ParachainSystem
    | Event_PolkadotXcm
    | Event_Pools
    | Event_Preimage
    | Event_Scheduler
    | Event_Session
    | Event_Sudo
    | Event_System
    | Event_TechnicalCommittee
    | Event_TechnicalMembership
    | Event_TransactionPayment
    | Event_UnknownTokens
    | Event_Utility
    | Event_XTokens
    | Event_XcmpQueue

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
export type XcmpQueueEvent =
    | XcmpQueueEvent_BadFormat
    | XcmpQueueEvent_BadVersion
    | XcmpQueueEvent_Fail
    | XcmpQueueEvent_OverweightEnqueued
    | XcmpQueueEvent_OverweightServiced
    | XcmpQueueEvent_Success
    | XcmpQueueEvent_XcmpMessageSent

/**
 * Bad XCM format used.
 */
export interface XcmpQueueEvent_BadFormat {
    __kind: 'BadFormat'
    messageHash: Bytes
}

/**
 * Bad XCM version used.
 */
export interface XcmpQueueEvent_BadVersion {
    __kind: 'BadVersion'
    messageHash: Bytes
}

/**
 * Some XCM failed.
 */
export interface XcmpQueueEvent_Fail {
    __kind: 'Fail'
    messageHash: Bytes
    messageId: Bytes
    error: V3Error
    weight: Weight
}

/**
 * An XCM exceeded the individual message weight budget.
 */
export interface XcmpQueueEvent_OverweightEnqueued {
    __kind: 'OverweightEnqueued'
    sender: Id
    sentAt: number
    index: bigint
    required: Weight
}

/**
 * An XCM from the overweight queue was executed with the given actual weight used.
 */
export interface XcmpQueueEvent_OverweightServiced {
    __kind: 'OverweightServiced'
    index: bigint
    used: Weight
}

/**
 * Some XCM was executed ok.
 */
export interface XcmpQueueEvent_Success {
    __kind: 'Success'
    messageHash: Bytes
    messageId: Bytes
    weight: Weight
}

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
export type XTokensEvent = XTokensEvent_TransferredMultiAssets

/**
 * Transferred `MultiAsset` with fee.
 */
export interface XTokensEvent_TransferredMultiAssets {
    __kind: 'TransferredMultiAssets'
    sender: AccountId32
    assets: V3MultiAsset[]
    fee: V3MultiAsset
    dest: V3MultiLocation
}

/**
 * The `Event` enum of this pallet
 */
export type UtilityEvent =
    | UtilityEvent_BatchCompleted
    | UtilityEvent_BatchCompletedWithErrors
    | UtilityEvent_BatchInterrupted
    | UtilityEvent_DispatchedAs
    | UtilityEvent_ItemCompleted
    | UtilityEvent_ItemFailed

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

export type DispatchError =
    | DispatchError_Arithmetic
    | DispatchError_BadOrigin
    | DispatchError_CannotLookup
    | DispatchError_ConsumerRemaining
    | DispatchError_Corruption
    | DispatchError_Exhausted
    | DispatchError_Module
    | DispatchError_NoProviders
    | DispatchError_Other
    | DispatchError_RootNotAllowed
    | DispatchError_Token
    | DispatchError_TooManyConsumers
    | DispatchError_Transactional
    | DispatchError_Unavailable

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

export type TokenError =
    | TokenError_BelowMinimum
    | TokenError_Blocked
    | TokenError_CannotCreate
    | TokenError_CannotCreateHold
    | TokenError_Frozen
    | TokenError_FundsUnavailable
    | TokenError_NotExpendable
    | TokenError_OnlyProvider
    | TokenError_UnknownAsset
    | TokenError_Unsupported

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
    asset: V3MultiAsset
    who: V3MultiLocation
}

/**
 * Withdraw success.
 */
export interface UnknownTokensEvent_Withdrawn {
    __kind: 'Withdrawn'
    asset: V3MultiAsset
    who: V3MultiLocation
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
export type TechnicalMembershipEvent =
    | TechnicalMembershipEvent_Dummy
    | TechnicalMembershipEvent_KeyChanged
    | TechnicalMembershipEvent_MemberAdded
    | TechnicalMembershipEvent_MemberRemoved
    | TechnicalMembershipEvent_MembersReset
    | TechnicalMembershipEvent_MembersSwapped

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
export type TechnicalCommitteeEvent =
    | TechnicalCommitteeEvent_Approved
    | TechnicalCommitteeEvent_Closed
    | TechnicalCommitteeEvent_Disapproved
    | TechnicalCommitteeEvent_Executed
    | TechnicalCommitteeEvent_MemberExecuted
    | TechnicalCommitteeEvent_Proposed
    | TechnicalCommitteeEvent_Voted

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
export type SystemEvent =
    | SystemEvent_CodeUpdated
    | SystemEvent_ExtrinsicFailed
    | SystemEvent_ExtrinsicSuccess
    | SystemEvent_KilledAccount
    | SystemEvent_NewAccount
    | SystemEvent_Remarked

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
export type SudoEvent = SudoEvent_KeyChanged | SudoEvent_Sudid | SudoEvent_SudoAsDone

/**
 * The \[sudoer\] just switched identity; the old key is supplied if one existed.
 */
export interface SudoEvent_KeyChanged {
    __kind: 'KeyChanged'
    oldSudoer?: AccountId32 | undefined
}

/**
 * A sudo just took place. \[result\]
 */
export interface SudoEvent_Sudid {
    __kind: 'Sudid'
    sudoResult: Result<null, DispatchError>
}

/**
 * A sudo just took place. \[result\]
 */
export interface SudoEvent_SudoAsDone {
    __kind: 'SudoAsDone'
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
export type SchedulerEvent =
    | SchedulerEvent_CallUnavailable
    | SchedulerEvent_Canceled
    | SchedulerEvent_Dispatched
    | SchedulerEvent_PeriodicFailed
    | SchedulerEvent_PermanentlyOverweight
    | SchedulerEvent_Scheduled

/**
 * The call for the provided hash was not found so the task has been aborted.
 */
export interface SchedulerEvent_CallUnavailable {
    __kind: 'CallUnavailable'
    task: [number, number]
    id?: Bytes | undefined
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
    id?: Bytes | undefined
    result: Result<null, DispatchError>
}

/**
 * The given task was unable to be renewed since the agenda is full at that block.
 */
export interface SchedulerEvent_PeriodicFailed {
    __kind: 'PeriodicFailed'
    task: [number, number]
    id?: Bytes | undefined
}

/**
 * The given task can never be executed since it is overweight.
 */
export interface SchedulerEvent_PermanentlyOverweight {
    __kind: 'PermanentlyOverweight'
    task: [number, number]
    id?: Bytes | undefined
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
export type PolkadotXcmEvent =
    | PolkadotXcmEvent_AssetsClaimed
    | PolkadotXcmEvent_AssetsTrapped
    | PolkadotXcmEvent_Attempted
    | PolkadotXcmEvent_FeesPaid
    | PolkadotXcmEvent_InvalidQuerier
    | PolkadotXcmEvent_InvalidQuerierVersion
    | PolkadotXcmEvent_InvalidResponder
    | PolkadotXcmEvent_InvalidResponderVersion
    | PolkadotXcmEvent_Notified
    | PolkadotXcmEvent_NotifyDecodeFailed
    | PolkadotXcmEvent_NotifyDispatchError
    | PolkadotXcmEvent_NotifyOverweight
    | PolkadotXcmEvent_NotifyTargetMigrationFail
    | PolkadotXcmEvent_NotifyTargetSendFail
    | PolkadotXcmEvent_ResponseReady
    | PolkadotXcmEvent_ResponseTaken
    | PolkadotXcmEvent_Sent
    | PolkadotXcmEvent_SupportedVersionChanged
    | PolkadotXcmEvent_UnexpectedResponse
    | PolkadotXcmEvent_VersionChangeNotified
    | PolkadotXcmEvent_VersionNotifyRequested
    | PolkadotXcmEvent_VersionNotifyStarted
    | PolkadotXcmEvent_VersionNotifyUnrequested

/**
 * Some assets have been claimed from an asset trap
 */
export interface PolkadotXcmEvent_AssetsClaimed {
    __kind: 'AssetsClaimed'
    hash: H256
    origin: V3MultiLocation
    assets: VersionedMultiAssets
}

/**
 * Some assets have been placed in an asset trap.
 */
export interface PolkadotXcmEvent_AssetsTrapped {
    __kind: 'AssetsTrapped'
    hash: H256
    origin: V3MultiLocation
    assets: VersionedMultiAssets
}

/**
 * Execution of an XCM message was attempted.
 */
export interface PolkadotXcmEvent_Attempted {
    __kind: 'Attempted'
    outcome: V3Outcome
}

/**
 * Fees were paid from a location for an operation (often for using `SendXcm`).
 */
export interface PolkadotXcmEvent_FeesPaid {
    __kind: 'FeesPaid'
    paying: V3MultiLocation
    fees: V3MultiAsset[]
}

/**
 * Expected query response has been received but the querier location of the response does
 * not match the expected. The query remains registered for a later, valid, response to
 * be received and acted upon.
 */
export interface PolkadotXcmEvent_InvalidQuerier {
    __kind: 'InvalidQuerier'
    origin: V3MultiLocation
    queryId: bigint
    expectedQuerier: V3MultiLocation
    maybeActualQuerier?: V3MultiLocation | undefined
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
    origin: V3MultiLocation
    queryId: bigint
}

/**
 * Expected query response has been received but the origin location of the response does
 * not match that expected. The query remains registered for a later, valid, response to
 * be received and acted upon.
 */
export interface PolkadotXcmEvent_InvalidResponder {
    __kind: 'InvalidResponder'
    origin: V3MultiLocation
    queryId: bigint
    expectedLocation?: V3MultiLocation | undefined
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
    origin: V3MultiLocation
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
 * Query response has been received and query is removed. The registered notification could
 * not be dispatched because the dispatch weight is greater than the maximum weight
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
    location: VersionedMultiLocation
    queryId: bigint
}

/**
 * A given location which had a version change subscription was dropped owing to an error
 * sending the notification to it.
 */
export interface PolkadotXcmEvent_NotifyTargetSendFail {
    __kind: 'NotifyTargetSendFail'
    location: V3MultiLocation
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
    response: V3Response
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
    origin: V3MultiLocation
    destination: V3MultiLocation
    message: V3Instruction[]
    messageId: Bytes
}

/**
 * The supported version of a location has been changed. This might be through an
 * automatic notification or a manual intervention.
 */
export interface PolkadotXcmEvent_SupportedVersionChanged {
    __kind: 'SupportedVersionChanged'
    location: V3MultiLocation
    version: number
}

/**
 * Query response received which does not match a registered query. This may be because a
 * matching query was never registered, it may be because it is a duplicate response, or
 * because the query timed out.
 */
export interface PolkadotXcmEvent_UnexpectedResponse {
    __kind: 'UnexpectedResponse'
    origin: V3MultiLocation
    queryId: bigint
}

/**
 * An XCM version change notification message has been attempted to be sent.
 *
 * The cost of sending it (borne by the chain) is included.
 */
export interface PolkadotXcmEvent_VersionChangeNotified {
    __kind: 'VersionChangeNotified'
    destination: V3MultiLocation
    result: number
    cost: V3MultiAsset[]
    messageId: Bytes
}

/**
 * We have requested that a remote chain send us XCM version change notifications.
 */
export interface PolkadotXcmEvent_VersionNotifyRequested {
    __kind: 'VersionNotifyRequested'
    destination: V3MultiLocation
    cost: V3MultiAsset[]
    messageId: Bytes
}

/**
 * A remote has requested XCM version change notification from us and we have honored it.
 * A version information message is sent to them and its cost is included.
 */
export interface PolkadotXcmEvent_VersionNotifyStarted {
    __kind: 'VersionNotifyStarted'
    destination: V3MultiLocation
    cost: V3MultiAsset[]
    messageId: Bytes
}

/**
 * We have requested that a remote chain stops sending us XCM version change notifications.
 */
export interface PolkadotXcmEvent_VersionNotifyUnrequested {
    __kind: 'VersionNotifyUnrequested'
    destination: V3MultiLocation
    cost: V3MultiAsset[]
    messageId: Bytes
}

export type V3Outcome = V3Outcome_Complete | V3Outcome_Error | V3Outcome_Incomplete

export interface V3Outcome_Complete {
    __kind: 'Complete'
    value: Weight
}

export interface V3Outcome_Error {
    __kind: 'Error'
    value: V3Error
}

export interface V3Outcome_Incomplete {
    __kind: 'Incomplete'
    value: [Weight, V3Error]
}

/**
 * The `Event` enum of this pallet
 */
export type ParachainSystemEvent =
    | ParachainSystemEvent_DownwardMessagesProcessed
    | ParachainSystemEvent_DownwardMessagesReceived
    | ParachainSystemEvent_UpgradeAuthorized
    | ParachainSystemEvent_UpwardMessageSent
    | ParachainSystemEvent_ValidationFunctionApplied
    | ParachainSystemEvent_ValidationFunctionDiscarded
    | ParachainSystemEvent_ValidationFunctionStored

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
 * An upgrade has been authorized.
 */
export interface ParachainSystemEvent_UpgradeAuthorized {
    __kind: 'UpgradeAuthorized'
    codeHash: H256
}

/**
 * An upward message was sent to the relay chain.
 */
export interface ParachainSystemEvent_UpwardMessageSent {
    __kind: 'UpwardMessageSent'
    messageHash?: Bytes | undefined
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
    to: V3MultiLocation
    message: V3Instruction[]
}

/**
 * The `Event` enum of this pallet
 */
export type MultisigEvent =
    | MultisigEvent_MultisigApproval
    | MultisigEvent_MultisigCancelled
    | MultisigEvent_MultisigExecuted
    | MultisigEvent_NewMultisig

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
export type MultiTokensEvent =
    | MultiTokensEvent_Approved
    | MultiTokensEvent_AttributeRemoved
    | MultiTokensEvent_AttributeSet
    | MultiTokensEvent_BalanceSet
    | MultiTokensEvent_Burned
    | MultiTokensEvent_ClaimTokensCompleted
    | MultiTokensEvent_ClaimTokensInitiated
    | MultiTokensEvent_ClaimedCollections
    | MultiTokensEvent_ClaimedTokens
    | MultiTokensEvent_CollectionAccountCreated
    | MultiTokensEvent_CollectionAccountDestroyed
    | MultiTokensEvent_CollectionAccountUpdated
    | MultiTokensEvent_CollectionCreated
    | MultiTokensEvent_CollectionDestroyed
    | MultiTokensEvent_CollectionMutated
    | MultiTokensEvent_CollectionTransferCancelled
    | MultiTokensEvent_CollectionTransferred
    | MultiTokensEvent_CollectionUpdated
    | MultiTokensEvent_Deposit
    | MultiTokensEvent_Frozen
    | MultiTokensEvent_MigrationStatusUpdated
    | MultiTokensEvent_Minted
    | MultiTokensEvent_MovedReserves
    | MultiTokensEvent_NextCollectionIdUpdated
    | MultiTokensEvent_ReserveRepatriated
    | MultiTokensEvent_Reserved
    | MultiTokensEvent_Slashed
    | MultiTokensEvent_Thawed
    | MultiTokensEvent_TokenAccountCreated
    | MultiTokensEvent_TokenAccountDestroyed
    | MultiTokensEvent_TokenAccountUpdated
    | MultiTokensEvent_TokenCreated
    | MultiTokensEvent_TokenDestroyed
    | MultiTokensEvent_TokenMutated
    | MultiTokensEvent_TokenUpdated
    | MultiTokensEvent_Transferred
    | MultiTokensEvent_Unapproved
    | MultiTokensEvent_Unreserved
    | MultiTokensEvent_Withdraw

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
    tokenId?: bigint | undefined
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
    amount?: bigint | undefined
    /**
     * The expiration of the approval
     */
    expiration?: number | undefined
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
    tokenId?: bigint | undefined
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
    tokenId?: bigint | undefined
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
    value?: CollectionAccount | undefined
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
    value?: Collection | undefined
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
 * Migration stage updated
 */
export interface MultiTokensEvent_MigrationStatusUpdated {
    __kind: 'MigrationStatusUpdated'
    stage: MigrationStage
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
    reserveId?: Bytes | undefined
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
    reserveId?: Bytes | undefined
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
    reserveId?: Bytes | undefined
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
    value?: TokenAccount | undefined
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
    value?: Token | undefined
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
    tokenId?: bigint | undefined
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
    reserveId?: Bytes | undefined
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

export type MigrationStage =
    | MigrationStage_Completed
    | MigrationStage_Failed
    | MigrationStage_InProgress
    | MigrationStage_NotStarted

export interface MigrationStage_Completed {
    __kind: 'Completed'
}

export interface MigrationStage_Failed {
    __kind: 'Failed'
}

export interface MigrationStage_InProgress {
    __kind: 'InProgress'
}

export interface MigrationStage_NotStarted {
    __kind: 'NotStarted'
}

export interface AssetIdWithEth {
    ethereumCollectionId: bigint
    collectionId: bigint
    tokenId: bigint
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
export type MatrixUtilityEvent =
    | MatrixUtilityEvent_BatchDispatched
    | MatrixUtilityEvent_BatchFailed
    | MatrixUtilityEvent_BatchPartiallyDispatched

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
export type MarketplaceEvent =
    | MarketplaceEvent_AuctionFinalized
    | MarketplaceEvent_BidPlaced
    | MarketplaceEvent_ListingCancelled
    | MarketplaceEvent_ListingConverted
    | MarketplaceEvent_ListingCreated
    | MarketplaceEvent_ListingFilled
    | MarketplaceEvent_ProtocolFeeSet

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
    winningBid?: Bid | undefined
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
 * A listing was converted to the correct format
 */
export interface MarketplaceEvent_ListingConverted {
    __kind: 'ListingConverted'
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
    seller: AccountId32
    makeAssetId: AssetId
    takeAssetId: AssetId
    amount: bigint
    price: bigint
    minTakeValue: bigint
    feeSide: FeeSide
    creationBlock: number
    deposit: bigint
    salt: Bytes
    data: ListingData
    state: ListingState
}

export type ListingState = ListingState_Auction | ListingState_FixedPrice

export interface ListingState_Auction {
    __kind: 'Auction'
    value: AuctionState
}

export interface ListingState_FixedPrice {
    __kind: 'FixedPrice'
    amountFilled: bigint
}

export interface AuctionState {
    highBid?: Bid | undefined
}

export type ListingData = ListingData_Auction | ListingData_FixedPrice

export interface ListingData_Auction {
    __kind: 'Auction'
    value: AuctionData
}

export interface ListingData_FixedPrice {
    __kind: 'FixedPrice'
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

export interface Bid {
    bidder: AccountId32
    price: bigint
}

/**
 * The `Event` enum of this pallet
 */
export type IdentityEvent =
    | IdentityEvent_IdentityCleared
    | IdentityEvent_IdentityKilled
    | IdentityEvent_IdentitySet
    | IdentityEvent_JudgementGiven
    | IdentityEvent_JudgementRequested
    | IdentityEvent_JudgementUnrequested
    | IdentityEvent_RegistrarAdded
    | IdentityEvent_SubIdentityAdded
    | IdentityEvent_SubIdentityRemoved
    | IdentityEvent_SubIdentityRevoked

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
 * The `Event` enum of this pallet
 */
export type FuelTanksEvent =
    | FuelTanksEvent_AccountAdded
    | FuelTanksEvent_AccountRemoved
    | FuelTanksEvent_AccountRuleDataRemoved
    | FuelTanksEvent_CallDispatched
    | FuelTanksEvent_ConsumptionSet
    | FuelTanksEvent_DispatchFailed
    | FuelTanksEvent_FreezeStateMutated
    | FuelTanksEvent_FuelTankCreated
    | FuelTanksEvent_FuelTankDestroyed
    | FuelTanksEvent_FuelTankMutated
    | FuelTanksEvent_RuleSetInserted
    | FuelTanksEvent_RuleSetRemoved

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
    userId?: AccountId32 | undefined
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
    ruleSetId?: number | undefined
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
export type ExtrinsicPauseEvent =
    | ExtrinsicPauseEvent_ExtrinsicPaused
    | ExtrinsicPauseEvent_ExtrinsicResumed
    | ExtrinsicPauseEvent_PalletPaused
    | ExtrinsicPauseEvent_PalletResumed

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
export type DmpQueueEvent =
    | DmpQueueEvent_ExecutedDownward
    | DmpQueueEvent_InvalidFormat
    | DmpQueueEvent_MaxMessagesExhausted
    | DmpQueueEvent_OverweightEnqueued
    | DmpQueueEvent_OverweightServiced
    | DmpQueueEvent_UnsupportedVersion
    | DmpQueueEvent_WeightExhausted

/**
 * Downward message executed with the given outcome.
 */
export interface DmpQueueEvent_ExecutedDownward {
    __kind: 'ExecutedDownward'
    messageHash: Bytes
    messageId: Bytes
    outcome: V3Outcome
}

/**
 * Downward message is invalid XCM.
 */
export interface DmpQueueEvent_InvalidFormat {
    __kind: 'InvalidFormat'
    messageHash: Bytes
}

/**
 * The maximum number of downward messages was reached.
 */
export interface DmpQueueEvent_MaxMessagesExhausted {
    __kind: 'MaxMessagesExhausted'
    messageHash: Bytes
}

/**
 * Downward message is overweight and was placed in the overweight queue.
 */
export interface DmpQueueEvent_OverweightEnqueued {
    __kind: 'OverweightEnqueued'
    messageHash: Bytes
    messageId: Bytes
    overweightIndex: bigint
    requiredWeight: Weight
}

/**
 * Downward message from the overweight queue was executed.
 */
export interface DmpQueueEvent_OverweightServiced {
    __kind: 'OverweightServiced'
    overweightIndex: bigint
    weightUsed: Weight
}

/**
 * Downward message is unsupported version of XCM.
 */
export interface DmpQueueEvent_UnsupportedVersion {
    __kind: 'UnsupportedVersion'
    messageHash: Bytes
}

/**
 * The weight limit for handling downward messages was reached.
 */
export interface DmpQueueEvent_WeightExhausted {
    __kind: 'WeightExhausted'
    messageHash: Bytes
    messageId: Bytes
    remainingWeight: Weight
    requiredWeight: Weight
}

/**
 * The `Event` enum of this pallet
 */
export type DemocracyEvent =
    | DemocracyEvent_Blacklisted
    | DemocracyEvent_Cancelled
    | DemocracyEvent_Delegated
    | DemocracyEvent_ExternalTabled
    | DemocracyEvent_MetadataCleared
    | DemocracyEvent_MetadataSet
    | DemocracyEvent_MetadataTransferred
    | DemocracyEvent_NotPassed
    | DemocracyEvent_Passed
    | DemocracyEvent_ProposalCanceled
    | DemocracyEvent_Proposed
    | DemocracyEvent_Seconded
    | DemocracyEvent_Started
    | DemocracyEvent_Tabled
    | DemocracyEvent_Undelegated
    | DemocracyEvent_Vetoed
    | DemocracyEvent_Voted

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

export type VoteThreshold =
    | VoteThreshold_SimpleMajority
    | VoteThreshold_SuperMajorityAgainst
    | VoteThreshold_SuperMajorityApprove

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
export type CumulusXcmEvent =
    | CumulusXcmEvent_ExecutedDownward
    | CumulusXcmEvent_InvalidFormat
    | CumulusXcmEvent_UnsupportedVersion

/**
 * Downward message executed with the given outcome.
 * \[ id, outcome \]
 */
export interface CumulusXcmEvent_ExecutedDownward {
    __kind: 'ExecutedDownward'
    value: [Bytes, V3Outcome]
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
export type CouncilEvent =
    | CouncilEvent_Approved
    | CouncilEvent_Closed
    | CouncilEvent_Disapproved
    | CouncilEvent_Executed
    | CouncilEvent_MemberExecuted
    | CouncilEvent_Proposed
    | CouncilEvent_Voted

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
export type CommunityPoolEvent =
    | CommunityPoolEvent_Awarded
    | CommunityPoolEvent_Burnt
    | CommunityPoolEvent_Deposit
    | CommunityPoolEvent_Proposed
    | CommunityPoolEvent_Rejected
    | CommunityPoolEvent_Rollover
    | CommunityPoolEvent_SpendApproved
    | CommunityPoolEvent_Spending
    | CommunityPoolEvent_UpdatedInactive

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
export type CollatorStakingEvent =
    | CollatorStakingEvent_CandidateJoined
    | CollatorStakingEvent_CandidateRemoved
    | CollatorStakingEvent_CollatorSelected
    | CollatorStakingEvent_NewInvulnerables
    | CollatorStakingEvent_Nominated
    | CollatorStakingEvent_NominationRemoved
    | CollatorStakingEvent_RoundFinalized

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
export type ClaimsEvent =
    | ClaimsEvent_ClaimMinted
    | ClaimsEvent_ClaimMoved
    | ClaimsEvent_ClaimRejected
    | ClaimsEvent_ClaimRequested
    | ClaimsEvent_Claimed
    | ClaimsEvent_DelayTimeForClaimSet
    | ClaimsEvent_EthereumBlocksProcessed
    | ClaimsEvent_ExchangeRateSet

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
    ethereumAddress?: H160 | undefined
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
export type BountiesEvent =
    | BountiesEvent_BountyAwarded
    | BountiesEvent_BountyBecameActive
    | BountiesEvent_BountyCanceled
    | BountiesEvent_BountyClaimed
    | BountiesEvent_BountyExtended
    | BountiesEvent_BountyProposed
    | BountiesEvent_BountyRejected

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
 * The `Event` enum of this pallet
 */
export type BalancesEvent =
    | BalancesEvent_BalanceSet
    | BalancesEvent_Burned
    | BalancesEvent_Deposit
    | BalancesEvent_DustLost
    | BalancesEvent_Endowed
    | BalancesEvent_Frozen
    | BalancesEvent_Issued
    | BalancesEvent_Locked
    | BalancesEvent_Minted
    | BalancesEvent_Rescinded
    | BalancesEvent_ReserveRepatriated
    | BalancesEvent_Reserved
    | BalancesEvent_Restored
    | BalancesEvent_Slashed
    | BalancesEvent_Suspended
    | BalancesEvent_Thawed
    | BalancesEvent_Transfer
    | BalancesEvent_Unlocked
    | BalancesEvent_Unreserved
    | BalancesEvent_Upgraded
    | BalancesEvent_Withdraw

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
    return {
        phase: Phase,
        event: Event,
        topics: sts.array(() => H256),
    }
})

export const Event: sts.Type<Event> = sts.closedEnum(() => {
    return {
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
        MultiTokens: MultiTokensEvent,
        Multisig: MultisigEvent,
        OrmlXcm: OrmlXcmEvent,
        ParachainSystem: ParachainSystemEvent,
        PolkadotXcm: PolkadotXcmEvent,
        Pools: PoolsEvent,
        Preimage: PreimageEvent,
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
    return {
        BadFormat: sts.enumStruct({
            messageHash: sts.bytes(),
        }),
        BadVersion: sts.enumStruct({
            messageHash: sts.bytes(),
        }),
        Fail: sts.enumStruct({
            messageHash: sts.bytes(),
            messageId: sts.bytes(),
            error: V3Error,
            weight: Weight,
        }),
        OverweightEnqueued: sts.enumStruct({
            sender: Id,
            sentAt: sts.number(),
            index: sts.bigint(),
            required: Weight,
        }),
        OverweightServiced: sts.enumStruct({
            index: sts.bigint(),
            used: Weight,
        }),
        Success: sts.enumStruct({
            messageHash: sts.bytes(),
            messageId: sts.bytes(),
            weight: Weight,
        }),
        XcmpMessageSent: sts.enumStruct({
            messageHash: sts.bytes(),
        }),
    }
})

export const Id = sts.number()

export const V3Error: sts.Type<V3Error> = sts.closedEnum(() => {
    return {
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

/**
 * The `Event` enum of this pallet
 */
export const XTokensEvent: sts.Type<XTokensEvent> = sts.closedEnum(() => {
    return {
        TransferredMultiAssets: sts.enumStruct({
            sender: AccountId32,
            assets: sts.array(() => V3MultiAsset),
            fee: V3MultiAsset,
            dest: V3MultiLocation,
        }),
    }
})

export const V3MultiLocation: sts.Type<V3MultiLocation> = sts.struct(() => {
    return {
        parents: sts.number(),
        interior: V3Junctions,
    }
})

export const V3Junctions: sts.Type<V3Junctions> = sts.closedEnum(() => {
    return {
        Here: sts.unit(),
        X1: V3Junction,
        X2: sts.tuple(() => [V3Junction, V3Junction]),
        X3: sts.tuple(() => [V3Junction, V3Junction, V3Junction]),
        X4: sts.tuple(() => [V3Junction, V3Junction, V3Junction, V3Junction]),
        X5: sts.tuple(() => [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]),
        X6: sts.tuple(() => [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]),
        X7: sts.tuple(() => [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]),
        X8: sts.tuple(() => [
            V3Junction,
            V3Junction,
            V3Junction,
            V3Junction,
            V3Junction,
            V3Junction,
            V3Junction,
            V3Junction,
        ]),
    }
})

export const V3Junction: sts.Type<V3Junction> = sts.closedEnum(() => {
    return {
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

export const V3BodyPart: sts.Type<V3BodyPart> = sts.closedEnum(() => {
    return {
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
    return {
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

export const V3NetworkId: sts.Type<V3NetworkId> = sts.closedEnum(() => {
    return {
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
        Rococo: sts.unit(),
        Westend: sts.unit(),
        Wococo: sts.unit(),
    }
})

export const V3MultiAsset: sts.Type<V3MultiAsset> = sts.struct(() => {
    return {
        id: V3AssetId,
        fun: V3Fungibility,
    }
})

export const V3Fungibility: sts.Type<V3Fungibility> = sts.closedEnum(() => {
    return {
        Fungible: sts.bigint(),
        NonFungible: V3AssetInstance,
    }
})

export const V3AssetInstance: sts.Type<V3AssetInstance> = sts.closedEnum(() => {
    return {
        Array16: sts.bytes(),
        Array32: sts.bytes(),
        Array4: sts.bytes(),
        Array8: sts.bytes(),
        Index: sts.bigint(),
        Undefined: sts.unit(),
    }
})

export const V3AssetId: sts.Type<V3AssetId> = sts.closedEnum(() => {
    return {
        Abstract: sts.bytes(),
        Concrete: V3MultiLocation,
    }
})

/**
 * The `Event` enum of this pallet
 */
export const UtilityEvent: sts.Type<UtilityEvent> = sts.closedEnum(() => {
    return {
        BatchCompleted: sts.unit(),
        BatchCompletedWithErrors: sts.unit(),
        BatchInterrupted: sts.enumStruct({
            index: sts.number(),
            error: DispatchError,
        }),
        DispatchedAs: sts.enumStruct({
            result: sts.result(
                () => sts.unit(),
                () => DispatchError
            ),
        }),
        ItemCompleted: sts.unit(),
        ItemFailed: sts.enumStruct({
            error: DispatchError,
        }),
    }
})

export const DispatchError: sts.Type<DispatchError> = sts.closedEnum(() => {
    return {
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
    return {
        LimitReached: sts.unit(),
        NoLayer: sts.unit(),
    }
})

export const TokenError: sts.Type<TokenError> = sts.closedEnum(() => {
    return {
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
    return {
        index: sts.number(),
        error: sts.bytes(),
    }
})

export const ArithmeticError: sts.Type<ArithmeticError> = sts.closedEnum(() => {
    return {
        DivisionByZero: sts.unit(),
        Overflow: sts.unit(),
        Underflow: sts.unit(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const UnknownTokensEvent: sts.Type<UnknownTokensEvent> = sts.closedEnum(() => {
    return {
        Deposited: sts.enumStruct({
            asset: V3MultiAsset,
            who: V3MultiLocation,
        }),
        Withdrawn: sts.enumStruct({
            asset: V3MultiAsset,
            who: V3MultiLocation,
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const TransactionPaymentEvent: sts.Type<TransactionPaymentEvent> = sts.closedEnum(() => {
    return {
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
    return {
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
    return {
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
            result: sts.result(
                () => sts.unit(),
                () => DispatchError
            ),
        }),
        MemberExecuted: sts.enumStruct({
            proposalHash: H256,
            result: sts.result(
                () => sts.unit(),
                () => DispatchError
            ),
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
    return {
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
    }
})

export const DispatchInfo: sts.Type<DispatchInfo> = sts.struct(() => {
    return {
        weight: Weight,
        class: DispatchClass,
        paysFee: Pays,
    }
})

export const Pays: sts.Type<Pays> = sts.closedEnum(() => {
    return {
        No: sts.unit(),
        Yes: sts.unit(),
    }
})

export const DispatchClass: sts.Type<DispatchClass> = sts.closedEnum(() => {
    return {
        Mandatory: sts.unit(),
        Normal: sts.unit(),
        Operational: sts.unit(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const SudoEvent: sts.Type<SudoEvent> = sts.closedEnum(() => {
    return {
        KeyChanged: sts.enumStruct({
            oldSudoer: sts.option(() => AccountId32),
        }),
        Sudid: sts.enumStruct({
            sudoResult: sts.result(
                () => sts.unit(),
                () => DispatchError
            ),
        }),
        SudoAsDone: sts.enumStruct({
            sudoResult: sts.result(
                () => sts.unit(),
                () => DispatchError
            ),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const SessionEvent: sts.Type<SessionEvent> = sts.closedEnum(() => {
    return {
        NewSession: sts.enumStruct({
            sessionIndex: sts.number(),
        }),
    }
})

/**
 * Events type.
 */
export const SchedulerEvent: sts.Type<SchedulerEvent> = sts.closedEnum(() => {
    return {
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
            result: sts.result(
                () => sts.unit(),
                () => DispatchError
            ),
        }),
        PeriodicFailed: sts.enumStruct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
        }),
        PermanentlyOverweight: sts.enumStruct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
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
export const PreimageEvent: sts.Type<PreimageEvent> = sts.closedEnum(() => {
    return {
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
    return {
        PoolsMutated: PoolsMutation,
    }
})

export const PoolsMutation: sts.Type<PoolsMutation> = sts.struct(() => {
    return {
        community: Pool,
        collator: Pool,
        fuelTanks: Pool,
        priceDiscovery: Pool,
    }
})

export const Pool: sts.Type<Pool> = sts.struct(() => {
    return {
        feeShare: Perbill,
    }
})

export const Perbill = sts.number()

/**
 * The `Event` enum of this pallet
 */
export const PolkadotXcmEvent: sts.Type<PolkadotXcmEvent> = sts.closedEnum(() => {
    return {
        AssetsClaimed: sts.enumStruct({
            hash: H256,
            origin: V3MultiLocation,
            assets: VersionedMultiAssets,
        }),
        AssetsTrapped: sts.enumStruct({
            hash: H256,
            origin: V3MultiLocation,
            assets: VersionedMultiAssets,
        }),
        Attempted: sts.enumStruct({
            outcome: V3Outcome,
        }),
        FeesPaid: sts.enumStruct({
            paying: V3MultiLocation,
            fees: sts.array(() => V3MultiAsset),
        }),
        InvalidQuerier: sts.enumStruct({
            origin: V3MultiLocation,
            queryId: sts.bigint(),
            expectedQuerier: V3MultiLocation,
            maybeActualQuerier: sts.option(() => V3MultiLocation),
        }),
        InvalidQuerierVersion: sts.enumStruct({
            origin: V3MultiLocation,
            queryId: sts.bigint(),
        }),
        InvalidResponder: sts.enumStruct({
            origin: V3MultiLocation,
            queryId: sts.bigint(),
            expectedLocation: sts.option(() => V3MultiLocation),
        }),
        InvalidResponderVersion: sts.enumStruct({
            origin: V3MultiLocation,
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
            location: VersionedMultiLocation,
            queryId: sts.bigint(),
        }),
        NotifyTargetSendFail: sts.enumStruct({
            location: V3MultiLocation,
            queryId: sts.bigint(),
            error: V3Error,
        }),
        ResponseReady: sts.enumStruct({
            queryId: sts.bigint(),
            response: V3Response,
        }),
        ResponseTaken: sts.enumStruct({
            queryId: sts.bigint(),
        }),
        Sent: sts.enumStruct({
            origin: V3MultiLocation,
            destination: V3MultiLocation,
            message: sts.array(() => V3Instruction),
            messageId: sts.bytes(),
        }),
        SupportedVersionChanged: sts.enumStruct({
            location: V3MultiLocation,
            version: sts.number(),
        }),
        UnexpectedResponse: sts.enumStruct({
            origin: V3MultiLocation,
            queryId: sts.bigint(),
        }),
        VersionChangeNotified: sts.enumStruct({
            destination: V3MultiLocation,
            result: sts.number(),
            cost: sts.array(() => V3MultiAsset),
            messageId: sts.bytes(),
        }),
        VersionNotifyRequested: sts.enumStruct({
            destination: V3MultiLocation,
            cost: sts.array(() => V3MultiAsset),
            messageId: sts.bytes(),
        }),
        VersionNotifyStarted: sts.enumStruct({
            destination: V3MultiLocation,
            cost: sts.array(() => V3MultiAsset),
            messageId: sts.bytes(),
        }),
        VersionNotifyUnrequested: sts.enumStruct({
            destination: V3MultiLocation,
            cost: sts.array(() => V3MultiAsset),
            messageId: sts.bytes(),
        }),
    }
})

export const V3Instruction: sts.Type<V3Instruction> = sts.closedEnum(() => {
    return {
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

export const DoubleEncoded: sts.Type<DoubleEncoded> = sts.struct(() => {
    return {
        encoded: sts.bytes(),
    }
})

export const V2OriginKind: sts.Type<V2OriginKind> = sts.closedEnum(() => {
    return {
        Native: sts.unit(),
        SovereignAccount: sts.unit(),
        Superuser: sts.unit(),
        Xcm: sts.unit(),
    }
})

export const V3QueryResponseInfo: sts.Type<V3QueryResponseInfo> = sts.struct(() => {
    return {
        destination: V3MultiLocation,
        queryId: sts.bigint(),
        maxWeight: Weight,
    }
})

export const V3MaybeErrorCode: sts.Type<V3MaybeErrorCode> = sts.closedEnum(() => {
    return {
        Error: sts.bytes(),
        Success: sts.unit(),
        TruncatedError: sts.bytes(),
    }
})

export const V3MultiAssetFilter: sts.Type<V3MultiAssetFilter> = sts.closedEnum(() => {
    return {
        Definite: sts.array(() => V3MultiAsset),
        Wild: V3WildMultiAsset,
    }
})

export const V3WildMultiAsset: sts.Type<V3WildMultiAsset> = sts.closedEnum(() => {
    return {
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
    return {
        Fungible: sts.unit(),
        NonFungible: sts.unit(),
    }
})

export const V3WeightLimit: sts.Type<V3WeightLimit> = sts.closedEnum(() => {
    return {
        Limited: Weight,
        Unlimited: sts.unit(),
    }
})

export const V3Response: sts.Type<V3Response> = sts.closedEnum(() => {
    return {
        Assets: sts.array(() => V3MultiAsset),
        DispatchResult: V3MaybeErrorCode,
        ExecutionResult: sts.option(() => sts.tuple(() => [sts.number(), V3Error])),
        Null: sts.unit(),
        PalletsInfo: sts.array(() => V3PalletInfo),
        Version: sts.number(),
    }
})

export const V3PalletInfo: sts.Type<V3PalletInfo> = sts.struct(() => {
    return {
        index: sts.number(),
        name: BoundedVec,
        moduleName: BoundedVec,
        major: sts.number(),
        minor: sts.number(),
        patch: sts.number(),
    }
})

export const BoundedVec = sts.bytes()

export const VersionedMultiLocation: sts.Type<VersionedMultiLocation> = sts.closedEnum(() => {
    return {
        V2: V2MultiLocation,
        V3: V3MultiLocation,
    }
})

export const V2MultiLocation: sts.Type<V2MultiLocation> = sts.struct(() => {
    return {
        parents: sts.number(),
        interior: V2Junctions,
    }
})

export const V2Junctions: sts.Type<V2Junctions> = sts.closedEnum(() => {
    return {
        Here: sts.unit(),
        X1: V2Junction,
        X2: sts.tuple(() => [V2Junction, V2Junction]),
        X3: sts.tuple(() => [V2Junction, V2Junction, V2Junction]),
        X4: sts.tuple(() => [V2Junction, V2Junction, V2Junction, V2Junction]),
        X5: sts.tuple(() => [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]),
        X6: sts.tuple(() => [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]),
        X7: sts.tuple(() => [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]),
        X8: sts.tuple(() => [
            V2Junction,
            V2Junction,
            V2Junction,
            V2Junction,
            V2Junction,
            V2Junction,
            V2Junction,
            V2Junction,
        ]),
    }
})

export const V2Junction: sts.Type<V2Junction> = sts.closedEnum(() => {
    return {
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
    return {
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
    return {
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
    return {
        Any: sts.unit(),
        Kusama: sts.unit(),
        Named: WeakBoundedVec,
        Polkadot: sts.unit(),
    }
})

export const V3Outcome: sts.Type<V3Outcome> = sts.closedEnum(() => {
    return {
        Complete: Weight,
        Error: V3Error,
        Incomplete: sts.tuple(() => [Weight, V3Error]),
    }
})

export const VersionedMultiAssets: sts.Type<VersionedMultiAssets> = sts.closedEnum(() => {
    return {
        V2: sts.array(() => V2MultiAsset),
        V3: sts.array(() => V3MultiAsset),
    }
})

export const V2MultiAsset: sts.Type<V2MultiAsset> = sts.struct(() => {
    return {
        id: V2AssetId,
        fun: V2Fungibility,
    }
})

export const V2Fungibility: sts.Type<V2Fungibility> = sts.closedEnum(() => {
    return {
        Fungible: sts.bigint(),
        NonFungible: V2AssetInstance,
    }
})

export const V2AssetInstance: sts.Type<V2AssetInstance> = sts.closedEnum(() => {
    return {
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
    return {
        Abstract: sts.bytes(),
        Concrete: V2MultiLocation,
    }
})

/**
 * The `Event` enum of this pallet
 */
export const ParachainSystemEvent: sts.Type<ParachainSystemEvent> = sts.closedEnum(() => {
    return {
        DownwardMessagesProcessed: sts.enumStruct({
            weightUsed: Weight,
            dmqHead: H256,
        }),
        DownwardMessagesReceived: sts.enumStruct({
            count: sts.number(),
        }),
        UpgradeAuthorized: sts.enumStruct({
            codeHash: H256,
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
    return {
        Sent: sts.enumStruct({
            to: V3MultiLocation,
            message: sts.array(() => V3Instruction),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const MultisigEvent: sts.Type<MultisigEvent> = sts.closedEnum(() => {
    return {
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
            result: sts.result(
                () => sts.unit(),
                () => DispatchError
            ),
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
    return {
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
        MigrationStatusUpdated: sts.enumStruct({
            stage: MigrationStage,
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
    return {
        supply: sts.bigint(),
        cap: sts.option(() => TokenCap),
        freezeState: sts.option(() => FreezeState),
        minimumBalance: sts.bigint(),
        sufficiency: Sufficiency,
        mintDeposit: sts.bigint(),
        attributeCount: sts.number(),
        marketBehavior: sts.option(() => TokenMarketBehavior),
        listingForbidden: sts.boolean(),
        metadata: DefaultTokenMetadata,
    }
})

export const DefaultTokenMetadata: sts.Type<DefaultTokenMetadata> = sts.closedEnum(() => {
    return {
        Foreign: DefaultForeignTokenMetadata,
        Native: sts.unit(),
    }
})

export const DefaultForeignTokenMetadata: sts.Type<DefaultForeignTokenMetadata> = sts.struct(() => {
    return {
        decimalCount: sts.number(),
        name: BoundedString,
        symbol: sts.bytes(),
        location: sts.option(() => V3MultiLocation),
        unitsPerSecond: sts.option(() => sts.bigint()),
        premintedSupply: sts.bigint(),
    }
})

export const BoundedString = sts.bytes()

export const TokenMarketBehavior: sts.Type<TokenMarketBehavior> = sts.closedEnum(() => {
    return {
        HasRoyalty: DefaultRoyalty,
        IsCurrency: sts.unit(),
    }
})

export const DefaultRoyalty: sts.Type<DefaultRoyalty> = sts.struct(() => {
    return {
        beneficiary: AccountId32,
        percentage: sts.number(),
    }
})

export const Sufficiency: sts.Type<Sufficiency> = sts.closedEnum(() => {
    return {
        Insufficient: sts.enumStruct({
            unitPrice: sts.bigint(),
        }),
        Sufficient: sts.unit(),
    }
})

export const FreezeState: sts.Type<FreezeState> = sts.closedEnum(() => {
    return {
        Never: sts.unit(),
        Permanent: sts.unit(),
        Temporary: sts.unit(),
    }
})

export const TokenCap: sts.Type<TokenCap> = sts.closedEnum(() => {
    return {
        CollapsingSupply: sts.bigint(),
        SingleMint: sts.unit(),
        Supply: sts.bigint(),
    }
})

export const DefaultTokenMutation: sts.Type<DefaultTokenMutation> = sts.struct(() => {
    return {
        behavior: Type_146,
        listingForbidden: Type_149,
        metadata: Type_150,
    }
})

export const Type_150: sts.Type<Type_150> = sts.closedEnum(() => {
    return {
        NoMutation: sts.unit(),
        SomeMutation: DefaultTokenMetadata,
    }
})

export const Type_149: sts.Type<Type_149> = sts.closedEnum(() => {
    return {
        NoMutation: sts.unit(),
        SomeMutation: sts.boolean(),
    }
})

export const Type_146: sts.Type<Type_146> = sts.closedEnum(() => {
    return {
        NoMutation: sts.unit(),
        SomeMutation: sts.option(() => TokenMarketBehavior),
    }
})

export const TokenAccount: sts.Type<TokenAccount> = sts.struct(() => {
    return {
        balance: sts.bigint(),
        reservedBalance: sts.bigint(),
        lockedBalance: sts.bigint(),
        namedReserves: sts.array(() => sts.tuple(() => [sts.bytes(), sts.bigint()])),
        locks: sts.array(() => sts.tuple(() => [sts.bytes(), sts.bigint()])),
        approvals: sts.array(() => sts.tuple(() => [AccountId32, Approval])),
        isFrozen: sts.boolean(),
    }
})

export const Approval: sts.Type<Approval> = sts.struct(() => {
    return {
        amount: sts.bigint(),
        expiration: sts.option(() => sts.number()),
    }
})

export const RootOrSigned: sts.Type<RootOrSigned> = sts.closedEnum(() => {
    return {
        Root: sts.unit(),
        Signed: AccountId32,
    }
})

export const MigrationStage: sts.Type<MigrationStage> = sts.closedEnum(() => {
    return {
        Completed: sts.unit(),
        Failed: sts.unit(),
        InProgress: sts.unit(),
        NotStarted: sts.unit(),
    }
})

export const Freeze: sts.Type<Freeze> = sts.struct(() => {
    return {
        collectionId: sts.bigint(),
        freezeType: FreezeType,
    }
})

export const FreezeType: sts.Type<FreezeType> = sts.closedEnum(() => {
    return {
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
    return {
        owner: AccountId32,
        policy: DefaultCollectionPolicy,
        tokenCount: sts.bigint(),
        attributeCount: sts.number(),
        totalDeposit: sts.bigint(),
        explicitRoyaltyCurrencies: sts.array(() => sts.tuple(() => [AssetId, sts.unit()])),
    }
})

export const AssetId: sts.Type<AssetId> = sts.struct(() => {
    return {
        collectionId: sts.bigint(),
        tokenId: sts.bigint(),
    }
})

export const DefaultCollectionPolicy: sts.Type<DefaultCollectionPolicy> = sts.struct(() => {
    return {
        mint: DefaultMintPolicy,
        transfer: DefaultTransferPolicy,
        market: DefaultMarketPolicy,
    }
})

export const DefaultMarketPolicy: sts.Type<DefaultMarketPolicy> = sts.struct(() => {
    return {
        royalty: sts.option(() => DefaultRoyalty),
    }
})

export const DefaultTransferPolicy: sts.Type<DefaultTransferPolicy> = sts.struct(() => {
    return {
        isFrozen: sts.boolean(),
    }
})

export const DefaultMintPolicy: sts.Type<DefaultMintPolicy> = sts.struct(() => {
    return {
        maxTokenCount: sts.option(() => sts.bigint()),
        maxTokenSupply: sts.option(() => sts.bigint()),
        forceSingleMint: sts.boolean(),
    }
})

export const DefaultCollectionMutation: sts.Type<DefaultCollectionMutation> = sts.struct(() => {
    return {
        owner: sts.option(() => AccountId32),
        royalty: ShouldMutate,
        explicitRoyaltyCurrencies: sts.option(() => sts.array(() => AssetId)),
    }
})

export const ShouldMutate: sts.Type<ShouldMutate> = sts.closedEnum(() => {
    return {
        NoMutation: sts.unit(),
        SomeMutation: sts.option(() => DefaultRoyalty),
    }
})

export const CollectionAccount: sts.Type<CollectionAccount> = sts.struct(() => {
    return {
        isFrozen: sts.boolean(),
        approvals: sts.array(() => sts.tuple(() => [AccountId32, sts.option(() => sts.number())])),
        accountCount: sts.number(),
    }
})

export const AssetIdWithEth: sts.Type<AssetIdWithEth> = sts.struct(() => {
    return {
        ethereumCollectionId: sts.bigint(),
        collectionId: sts.bigint(),
        tokenId: sts.bigint(),
    }
})

export const H160 = sts.bytes()

/**
 * The `Event` enum of this pallet
 */
export const MatrixXcmEvent: sts.Type<MatrixXcmEvent> = sts.closedEnum(() => {
    return {
        MinimumWeightUpdated: MinimumWeightFeePair,
        XcmTransferFailed: DispatchError,
    }
})

export const MinimumWeightFeePair: sts.Type<MinimumWeightFeePair> = sts.struct(() => {
    return {
        minimumWeight: Weight,
        fee: sts.bigint(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const MatrixUtilityEvent: sts.Type<MatrixUtilityEvent> = sts.closedEnum(() => {
    return {
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
    return {
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
        ListingCancelled: sts.enumStruct({
            listingId: H256,
        }),
        ListingConverted: sts.enumStruct({
            listingId: H256,
        }),
        ListingCreated: sts.enumStruct({
            listingId: H256,
            listing: Listing,
        }),
        ListingFilled: sts.enumStruct({
            listingId: H256,
            buyer: AccountId32,
            amountFilled: sts.bigint(),
            amountRemaining: sts.bigint(),
            protocolFee: sts.bigint(),
            royalty: sts.bigint(),
        }),
        ProtocolFeeSet: sts.enumStruct({
            protocolFee: Perbill,
        }),
    }
})

export const Listing: sts.Type<Listing> = sts.struct(() => {
    return {
        seller: AccountId32,
        makeAssetId: AssetId,
        takeAssetId: AssetId,
        amount: sts.bigint(),
        price: sts.bigint(),
        minTakeValue: sts.bigint(),
        feeSide: FeeSide,
        creationBlock: sts.number(),
        deposit: sts.bigint(),
        salt: sts.bytes(),
        data: ListingData,
        state: ListingState,
    }
})

export const ListingState: sts.Type<ListingState> = sts.closedEnum(() => {
    return {
        Auction: AuctionState,
        FixedPrice: sts.enumStruct({
            amountFilled: sts.bigint(),
        }),
    }
})

export const AuctionState: sts.Type<AuctionState> = sts.struct(() => {
    return {
        highBid: sts.option(() => Bid),
    }
})

export const ListingData: sts.Type<ListingData> = sts.closedEnum(() => {
    return {
        Auction: AuctionData,
        FixedPrice: sts.unit(),
    }
})

export const AuctionData: sts.Type<AuctionData> = sts.struct(() => {
    return {
        startBlock: sts.number(),
        endBlock: sts.number(),
    }
})

export const FeeSide: sts.Type<FeeSide> = sts.closedEnum(() => {
    return {
        Make: sts.unit(),
        NoFee: sts.unit(),
        Take: sts.unit(),
    }
})

export const Bid: sts.Type<Bid> = sts.struct(() => {
    return {
        bidder: AccountId32,
        price: sts.bigint(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const IdentityEvent: sts.Type<IdentityEvent> = sts.closedEnum(() => {
    return {
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
    }
})

/**
 * The `Event` enum of this pallet
 */
export const FuelTanksEvent: sts.Type<FuelTanksEvent> = sts.closedEnum(() => {
    return {
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
    return {
        userAccountManagement: Type_212,
        providesDeposit: sts.option(() => sts.boolean()),
        accountRules: sts.option(() => sts.array(() => AccountRuleDescriptor)),
    }
})

export const AccountRuleDescriptor: sts.Type<AccountRuleDescriptor> = sts.closedEnum(() => {
    return {
        RequireToken: RequireTokenRule,
        WhitelistedCallers: sts.array(() => AccountId32),
    }
})

export const RequireTokenRule: sts.Type<RequireTokenRule> = sts.struct(() => {
    return {
        collectionId: sts.bigint(),
        tokenId: sts.bigint(),
    }
})

export const Type_212: sts.Type<Type_212> = sts.closedEnum(() => {
    return {
        NoMutation: sts.unit(),
        SomeMutation: sts.option(() => UserAccountManagement),
    }
})

export const UserAccountManagement: sts.Type<UserAccountManagement> = sts.struct(() => {
    return {
        tankReservesExistentialDeposit: sts.boolean(),
        tankReservesAccountCreationDeposit: sts.boolean(),
    }
})

export const Consumption: sts.Type<Consumption> = sts.struct(() => {
    return {
        totalConsumed: sts.bigint(),
        lastResetBlock: sts.option(() => sts.number()),
    }
})

export const DispatchRuleKind: sts.Type<DispatchRuleKind> = sts.closedEnum(() => {
    return {
        MaxFuelBurnPerTransaction: sts.unit(),
        PermittedCalls: sts.unit(),
        PermittedExtrinsics: sts.unit(),
        RequireToken: sts.unit(),
        TankFuelBudget: sts.unit(),
        UserFuelBudget: sts.unit(),
        WhitelistedCallers: sts.unit(),
        WhitelistedCollections: sts.unit(),
        WhitelistedPallets: sts.unit(),
    }
})

/**
 * The pallet's event type.
 */
export const ExtrinsicPauseEvent: sts.Type<ExtrinsicPauseEvent> = sts.closedEnum(() => {
    return {
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
    return {
        ExecutedDownward: sts.enumStruct({
            messageHash: sts.bytes(),
            messageId: sts.bytes(),
            outcome: V3Outcome,
        }),
        InvalidFormat: sts.enumStruct({
            messageHash: sts.bytes(),
        }),
        MaxMessagesExhausted: sts.enumStruct({
            messageHash: sts.bytes(),
        }),
        OverweightEnqueued: sts.enumStruct({
            messageHash: sts.bytes(),
            messageId: sts.bytes(),
            overweightIndex: sts.bigint(),
            requiredWeight: Weight,
        }),
        OverweightServiced: sts.enumStruct({
            overweightIndex: sts.bigint(),
            weightUsed: Weight,
        }),
        UnsupportedVersion: sts.enumStruct({
            messageHash: sts.bytes(),
        }),
        WeightExhausted: sts.enumStruct({
            messageHash: sts.bytes(),
            messageId: sts.bytes(),
            remainingWeight: Weight,
            requiredWeight: Weight,
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const DemocracyEvent: sts.Type<DemocracyEvent> = sts.closedEnum(() => {
    return {
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
    return {
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
    return {
        SimpleMajority: sts.unit(),
        SuperMajorityAgainst: sts.unit(),
        SuperMajorityApprove: sts.unit(),
    }
})

export const MetadataOwner: sts.Type<MetadataOwner> = sts.closedEnum(() => {
    return {
        External: sts.unit(),
        Proposal: sts.number(),
        Referendum: sts.number(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const CumulusXcmEvent: sts.Type<CumulusXcmEvent> = sts.closedEnum(() => {
    return {
        ExecutedDownward: sts.tuple(() => [sts.bytes(), V3Outcome]),
        InvalidFormat: sts.bytes(),
        UnsupportedVersion: sts.bytes(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const CouncilEvent: sts.Type<CouncilEvent> = sts.closedEnum(() => {
    return {
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
            result: sts.result(
                () => sts.unit(),
                () => DispatchError
            ),
        }),
        MemberExecuted: sts.enumStruct({
            proposalHash: H256,
            result: sts.result(
                () => sts.unit(),
                () => DispatchError
            ),
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
    return {
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
    return {
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
    return {
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
    return {
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
    }
})

/**
 * The `Event` enum of this pallet
 */
export const BalancesEvent: sts.Type<BalancesEvent> = sts.closedEnum(() => {
    return {
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
    return {
        Free: sts.unit(),
        Reserved: sts.unit(),
    }
})

export const Phase: sts.Type<Phase> = sts.closedEnum(() => {
    return {
        ApplyExtrinsic: sts.number(),
        Finalization: sts.unit(),
        Initialization: sts.unit(),
    }
})

export const DispatchRuleDescriptor: sts.Type<DispatchRuleDescriptor> = sts.closedEnum(() => {
    return {
        MaxFuelBurnPerTransaction: MaxFuelBurnPerTransactionRule,
        PermittedCalls: sts.array(() => sts.bytes()),
        PermittedExtrinsics: sts.array(() => Call),
        RequireToken: RequireTokenRule,
        TankFuelBudget: TankFuelBudgetRuleDescriptor,
        UserFuelBudget: UserFuelBudgetRuleDescriptor,
        WhitelistedCallers: sts.array(() => AccountId32),
        WhitelistedCollections: sts.array(() => sts.bigint()),
        WhitelistedPallets: sts.array(() => Call),
    }
})

export const UserFuelBudgetRuleDescriptor: sts.Type<UserFuelBudgetRuleDescriptor> = sts.struct(() => {
    return {
        amount: sts.bigint(),
        resetPeriod: sts.number(),
    }
})

export const TankFuelBudgetRuleDescriptor: sts.Type<TankFuelBudgetRuleDescriptor> = sts.struct(() => {
    return {
        amount: sts.bigint(),
        resetPeriod: sts.number(),
    }
})

export const MaxFuelBurnPerTransactionRule = sts.bigint()

export const DispatchSettings: sts.Type<DispatchSettings> = sts.struct(() => {
    return {
        useNoneOrigin: sts.boolean(),
        paysRemainingFee: sts.boolean(),
    }
})

export const MultiAddress: sts.Type<MultiAddress> = sts.closedEnum(() => {
    return {
        Address20: sts.bytes(),
        Address32: sts.bytes(),
        Id: AccountId32,
        Index: sts.unit(),
        Raw: sts.bytes(),
    }
})

export const FuelTankDescriptor: sts.Type<FuelTankDescriptor> = sts.struct(() => {
    return {
        name: sts.bytes(),
        userAccountManagement: sts.option(() => UserAccountManagement),
        ruleSets: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => DispatchRuleDescriptor)])),
        providesDeposit: sts.boolean(),
        accountRules: sts.array(() => AccountRuleDescriptor),
    }
})

export const Timepoint: sts.Type<Timepoint> = sts.struct(() => {
    return {
        height: sts.number(),
        index: sts.number(),
    }
})

export const AccountId32 = sts.bytes()

export const Weight: sts.Type<Weight> = sts.struct(() => {
    return {
        refTime: sts.bigint(),
        proofSize: sts.bigint(),
    }
})

export const OriginCaller: sts.Type<OriginCaller> = sts.closedEnum(() => {
    return {
        Council: Type_309,
        CumulusXcm: Type_312,
        PolkadotXcm: Origin,
        TechnicalCommittee: Type_310,
        Void: Void,
        system: RawOrigin,
    }
})

export const RawOrigin: sts.Type<RawOrigin> = sts.closedEnum(() => {
    return {
        None: sts.unit(),
        Root: sts.unit(),
        Signed: AccountId32,
    }
})

export const Void: sts.Type<Void> = sts.closedEnum(() => {
    return {}
})

export const Type_310: sts.Type<Type_310> = sts.closedEnum(() => {
    return {
        Member: AccountId32,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

export const Origin: sts.Type<Origin> = sts.closedEnum(() => {
    return {
        Response: V3MultiLocation,
        Xcm: V3MultiLocation,
    }
})

export const Type_312: sts.Type<Type_312> = sts.closedEnum(() => {
    return {
        Relay: sts.unit(),
        SiblingParachain: Id,
    }
})

export const Type_309: sts.Type<Type_309> = sts.closedEnum(() => {
    return {
        Member: AccountId32,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

export const Call: sts.Type<Call> = sts.closedEnum(() => {
    return {
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
        MultiTokens: MultiTokensCall,
        Multisig: MultisigCall,
        OrmlXcm: OrmlXcmCall,
        ParachainSystem: ParachainSystemCall,
        PolkadotXcm: PolkadotXcmCall,
        Pools: PoolsCall,
        Preimage: PreimageCall,
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
    return {
        resume_xcm_execution: sts.unit(),
        service_overweight: sts.enumStruct({
            index: sts.bigint(),
            weightLimit: Weight,
        }),
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
        update_threshold_weight: sts.enumStruct({
            new: Weight,
        }),
        update_weight_restrict_decay: sts.enumStruct({
            new: Weight,
        }),
        update_xcmp_max_individual_weight: sts.enumStruct({
            new: Weight,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const XTokensCall: sts.Type<XTokensCall> = sts.closedEnum(() => {
    return {
        transfer: sts.enumStruct({
            currencyId: AssetId,
            amount: sts.bigint(),
            dest: VersionedMultiLocation,
            destWeightLimit: V3WeightLimit,
        }),
        transfer_multiasset: sts.enumStruct({
            asset: VersionedMultiAsset,
            dest: VersionedMultiLocation,
            destWeightLimit: V3WeightLimit,
        }),
        transfer_multiasset_with_fee: sts.enumStruct({
            asset: VersionedMultiAsset,
            fee: VersionedMultiAsset,
            dest: VersionedMultiLocation,
            destWeightLimit: V3WeightLimit,
        }),
        transfer_multiassets: sts.enumStruct({
            assets: VersionedMultiAssets,
            feeItem: sts.number(),
            dest: VersionedMultiLocation,
            destWeightLimit: V3WeightLimit,
        }),
        transfer_multicurrencies: sts.enumStruct({
            currencies: sts.array(() => sts.tuple(() => [AssetId, sts.bigint()])),
            feeItem: sts.number(),
            dest: VersionedMultiLocation,
            destWeightLimit: V3WeightLimit,
        }),
        transfer_with_fee: sts.enumStruct({
            currencyId: AssetId,
            amount: sts.bigint(),
            fee: sts.bigint(),
            dest: VersionedMultiLocation,
            destWeightLimit: V3WeightLimit,
        }),
    }
})

export const VersionedMultiAsset: sts.Type<VersionedMultiAsset> = sts.closedEnum(() => {
    return {
        V2: V2MultiAsset,
        V3: V3MultiAsset,
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const UtilityCall: sts.Type<UtilityCall> = sts.closedEnum(() => {
    return {
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
    return {
        set: sts.enumStruct({
            now: sts.bigint(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const TechnicalMembershipCall: sts.Type<TechnicalMembershipCall> = sts.closedEnum(() => {
    return {
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
    return {
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
    return {
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
    return {
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
    return {
        purge_keys: sts.unit(),
        set_keys: sts.enumStruct({
            keys: SessionKeys,
            proof: sts.bytes(),
        }),
    }
})

export const SessionKeys: sts.Type<SessionKeys> = sts.struct(() => {
    return {
        aura: Public,
        pools: Public,
    }
})

export const Public = sts.bytes()

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const SchedulerCall: sts.Type<SchedulerCall> = sts.closedEnum(() => {
    return {
        cancel: sts.enumStruct({
            when: sts.number(),
            index: sts.number(),
        }),
        cancel_named: sts.enumStruct({
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
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const PreimageCall: sts.Type<PreimageCall> = sts.closedEnum(() => {
    return {
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
    return {
        mutate_pools: sts.enumStruct({
            mutation: PoolsMutation,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const PolkadotXcmCall: sts.Type<PolkadotXcmCall> = sts.closedEnum(() => {
    return {
        execute: sts.enumStruct({
            message: Type_346,
            maxWeight: Weight,
        }),
        force_default_xcm_version: sts.enumStruct({
            maybeXcmVersion: sts.option(() => sts.number()),
        }),
        force_subscribe_version_notify: sts.enumStruct({
            location: VersionedMultiLocation,
        }),
        force_suspension: sts.enumStruct({
            suspended: sts.boolean(),
        }),
        force_unsubscribe_version_notify: sts.enumStruct({
            location: VersionedMultiLocation,
        }),
        force_xcm_version: sts.enumStruct({
            location: V3MultiLocation,
            version: sts.number(),
        }),
        limited_reserve_transfer_assets: sts.enumStruct({
            dest: VersionedMultiLocation,
            beneficiary: VersionedMultiLocation,
            assets: VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: V3WeightLimit,
        }),
        limited_teleport_assets: sts.enumStruct({
            dest: VersionedMultiLocation,
            beneficiary: VersionedMultiLocation,
            assets: VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: V3WeightLimit,
        }),
        reserve_transfer_assets: sts.enumStruct({
            dest: VersionedMultiLocation,
            beneficiary: VersionedMultiLocation,
            assets: VersionedMultiAssets,
            feeAssetItem: sts.number(),
        }),
        send: sts.enumStruct({
            dest: VersionedMultiLocation,
            message: VersionedXcm,
        }),
        teleport_assets: sts.enumStruct({
            dest: VersionedMultiLocation,
            beneficiary: VersionedMultiLocation,
            assets: VersionedMultiAssets,
            feeAssetItem: sts.number(),
        }),
    }
})

export const VersionedXcm: sts.Type<VersionedXcm> = sts.closedEnum(() => {
    return {
        V2: sts.array(() => V2Instruction),
        V3: sts.array(() => V3Instruction),
    }
})

export const V2Instruction: sts.Type<V2Instruction> = sts.closedEnum(() => {
    return {
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
    return {
        Assets: sts.array(() => V2MultiAsset),
        ExecutionResult: sts.option(() => sts.tuple(() => [sts.number(), V2Error])),
        Null: sts.unit(),
        Version: sts.number(),
    }
})

export const V2Error: sts.Type<V2Error> = sts.closedEnum(() => {
    return {
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
    return {
        Definite: sts.array(() => V2MultiAsset),
        Wild: V2WildMultiAsset,
    }
})

export const V2WildMultiAsset: sts.Type<V2WildMultiAsset> = sts.closedEnum(() => {
    return {
        All: sts.unit(),
        AllOf: sts.enumStruct({
            id: V2AssetId,
            fun: V2WildFungibility,
        }),
    }
})

export const V2WildFungibility: sts.Type<V2WildFungibility> = sts.closedEnum(() => {
    return {
        Fungible: sts.unit(),
        NonFungible: sts.unit(),
    }
})

export const V2WeightLimit: sts.Type<V2WeightLimit> = sts.closedEnum(() => {
    return {
        Limited: sts.bigint(),
        Unlimited: sts.unit(),
    }
})

export const Type_346: sts.Type<Type_346> = sts.closedEnum(() => {
    return {
        V2: sts.array(() => Type_349),
        V3: sts.array(() => Type_353),
    }
})

export const Type_353: sts.Type<Type_353> = sts.closedEnum(() => {
    return {
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
        SetAppendix: sts.array(() => Type_353),
        SetErrorHandler: sts.array(() => Type_353),
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
            call: Type_350,
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

export const Type_350: sts.Type<Type_350> = sts.struct(() => {
    return {
        encoded: sts.bytes(),
    }
})

export const Type_349: sts.Type<Type_349> = sts.closedEnum(() => {
    return {
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
        SetAppendix: sts.array(() => Type_349),
        SetErrorHandler: sts.array(() => Type_349),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: sts.bigint(),
        }),
        Transact: sts.enumStruct({
            originType: V2OriginKind,
            requireWeightAtMost: sts.bigint(),
            call: Type_350,
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
    return {
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
    return {
        validationData: V5PersistedValidationData,
        relayChainState: StorageProof,
        downwardMessages: sts.array(() => InboundDownwardMessage),
        horizontalMessages: sts.array(() => sts.tuple(() => [Id, sts.array(() => InboundHrmpMessage)])),
    }
})

export const InboundHrmpMessage: sts.Type<InboundHrmpMessage> = sts.struct(() => {
    return {
        sentAt: sts.number(),
        data: sts.bytes(),
    }
})

export const InboundDownwardMessage: sts.Type<InboundDownwardMessage> = sts.struct(() => {
    return {
        sentAt: sts.number(),
        msg: sts.bytes(),
    }
})

export const StorageProof: sts.Type<StorageProof> = sts.struct(() => {
    return {
        trieNodes: sts.array(() => sts.bytes()),
    }
})

export const V5PersistedValidationData: sts.Type<V5PersistedValidationData> = sts.struct(() => {
    return {
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
export const OrmlXcmCall: sts.Type<OrmlXcmCall> = sts.closedEnum(() => {
    return {
        send_as_sovereign: sts.enumStruct({
            dest: VersionedMultiLocation,
            message: VersionedXcm,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const MultisigCall: sts.Type<MultisigCall> = sts.closedEnum(() => {
    return {
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
    return {
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
            recipients: sts.array(() => Type_388),
        }),
        batch_set_attribute: sts.enumStruct({
            collectionId: sts.bigint(),
            tokenId: sts.option(() => sts.bigint()),
            attributes: sts.array(() => AttributeKeyValuePair),
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
    }
})

export const DefaultMintParams: sts.Type<DefaultMintParams> = sts.closedEnum(() => {
    return {
        CreateToken: sts.enumStruct({
            tokenId: sts.bigint(),
            initialSupply: sts.bigint(),
            sufficiency: SufficiencyParam,
            cap: sts.option(() => TokenCap),
            behavior: sts.option(() => TokenMarketBehavior),
            listingForbidden: sts.boolean(),
            freezeState: sts.option(() => FreezeState),
            attributes: sts.array(() => AttributeKeyValuePair),
            foreignParams: sts.option(() => ForeignTokenCreationParams),
        }),
        Mint: sts.enumStruct({
            tokenId: sts.bigint(),
            amount: sts.bigint(),
            unitPrice: sts.option(() => sts.bigint()),
        }),
    }
})

export const ForeignTokenCreationParams: sts.Type<ForeignTokenCreationParams> = sts.struct(() => {
    return {
        decimalCount: sts.number(),
        name: BoundedString,
        symbol: sts.bytes(),
        location: sts.option(() => V3MultiLocation),
        unitsPerSecond: sts.option(() => sts.bigint()),
    }
})

export const SufficiencyParam: sts.Type<SufficiencyParam> = sts.closedEnum(() => {
    return {
        Insufficient: sts.enumStruct({
            unitPrice: sts.option(() => sts.bigint()),
        }),
        Sufficient: sts.enumStruct({
            minimumBalance: sts.bigint(),
        }),
    }
})

export const DefaultTransferParams: sts.Type<DefaultTransferParams> = sts.closedEnum(() => {
    return {
        Operator: sts.enumStruct({
            tokenId: sts.bigint(),
            source: AccountId32,
            amount: sts.bigint(),
            keepAlive: sts.boolean(),
        }),
        Simple: sts.enumStruct({
            tokenId: sts.bigint(),
            amount: sts.bigint(),
            keepAlive: sts.boolean(),
        }),
    }
})

export const Attribute: sts.Type<Attribute> = sts.struct(() => {
    return {
        value: sts.bytes(),
        deposit: sts.bigint(),
    }
})

export const FlexibleMintParams: sts.Type<FlexibleMintParams> = sts.closedEnum(() => {
    return {
        CreateOrMint: sts.enumStruct({
            tokenId: sts.bigint(),
            amount: sts.bigint(),
            sufficiency: SufficiencyParam,
            cap: sts.option(() => TokenCap),
            behavior: sts.option(() => TokenMarketBehavior),
            listingForbidden: sts.boolean(),
            freezeState: sts.option(() => FreezeState),
            attributes: sts.array(() => AttributeKeyValuePair),
            foreignParams: sts.option(() => ForeignTokenCreationParams),
        }),
        CreateToken: sts.enumStruct({
            tokenId: sts.bigint(),
            initialSupply: sts.bigint(),
            sufficiency: SufficiencyParam,
            cap: sts.option(() => TokenCap),
            behavior: sts.option(() => TokenMarketBehavior),
            listingForbidden: sts.boolean(),
            freezeState: sts.option(() => FreezeState),
            attributes: sts.array(() => AttributeKeyValuePair),
            foreignParams: sts.option(() => ForeignTokenCreationParams),
        }),
        Mint: sts.enumStruct({
            tokenId: sts.bigint(),
            amount: sts.bigint(),
            unitPrice: sts.option(() => sts.bigint()),
        }),
    }
})

export const DefaultCollectionDescriptor: sts.Type<DefaultCollectionDescriptor> = sts.struct(() => {
    return {
        policy: DefaultCollectionPolicyDescriptor,
        explicitRoyaltyCurrencies: sts.array(() => AssetId),
        attributes: sts.array(() => AttributeKeyValuePair),
    }
})

export const DefaultCollectionPolicyDescriptor: sts.Type<DefaultCollectionPolicyDescriptor> = sts.struct(() => {
    return {
        mint: DefaultMintPolicyDescriptor,
        market: DefaultMarketPolicyDescriptor,
    }
})

export const DefaultMarketPolicyDescriptor: sts.Type<DefaultMarketPolicyDescriptor> = sts.struct(() => {
    return {
        royalty: sts.option(() => DefaultRoyalty),
    }
})

export const DefaultMintPolicyDescriptor: sts.Type<DefaultMintPolicyDescriptor> = sts.struct(() => {
    return {
        maxTokenCount: sts.option(() => sts.bigint()),
        maxTokenSupply: sts.option(() => sts.bigint()),
        forceSingleMint: sts.boolean(),
    }
})

export const Signature = sts.bytes()

export const DefaultBurnParams: sts.Type<DefaultBurnParams> = sts.struct(() => {
    return {
        tokenId: sts.bigint(),
        amount: sts.bigint(),
        keepAlive: sts.boolean(),
        removeTokenStorage: sts.boolean(),
    }
})

export const Recipient: sts.Type<Recipient> = sts.struct(() => {
    return {
        accountId: AccountId32,
        params: DefaultTransferParams,
    }
})

export const AttributeKeyValuePair: sts.Type<AttributeKeyValuePair> = sts.struct(() => {
    return {
        key: sts.bytes(),
        value: sts.bytes(),
    }
})

export const Type_388: sts.Type<Type_388> = sts.struct(() => {
    return {
        accountId: AccountId32,
        params: DefaultMintParams,
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const MatrixXcmCall: sts.Type<MatrixXcmCall> = sts.closedEnum(() => {
    return {
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
    return {
        currencyId: AssetId,
        amount: sts.bigint(),
    }
})

export const Account: sts.Type<Account> = sts.closedEnum(() => {
    return {
        EVM: H160,
        Substrate: AccountId32,
    }
})

export const ParachainId: sts.Type<ParachainId> = sts.closedEnum(() => {
    return {
        Acala: sts.unit(),
        Moonbeam: sts.unit(),
        Statemint: sts.unit(),
    }
})

export const XcmOperation: sts.Type<XcmOperation> = sts.closedEnum(() => {
    return {
        ParachainFee: V3MultiLocation,
        XTokensTransfer: sts.unit(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const MatrixUtilityCall: sts.Type<MatrixUtilityCall> = sts.closedEnum(() => {
    return {
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
    return {
        cancel_listing: sts.enumStruct({
            listingId: H256,
        }),
        convert_listings: sts.enumStruct({
            listingIds: sts.array(() => H256),
        }),
        create_listing: sts.enumStruct({
            makeAssetId: AssetId,
            takeAssetId: AssetId,
            amount: sts.bigint(),
            price: sts.bigint(),
            salt: sts.bytes(),
            auctionData: sts.option(() => AuctionData),
        }),
        fill_listing: sts.enumStruct({
            listingId: H256,
            amount: sts.bigint(),
        }),
        finalize_auction: sts.enumStruct({
            listingId: H256,
        }),
        force_create_listing: sts.enumStruct({
            seller: MultiAddress,
            makeAssetId: AssetId,
            takeAssetId: AssetId,
            amount: sts.bigint(),
            price: sts.bigint(),
            salt: sts.bytes(),
            auctionData: sts.option(() => AuctionData),
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
        set_protocol_fee: sts.enumStruct({
            protocolFee: Perbill,
        }),
    }
})

/**
 * Identity pallet declaration.
 */
export const IdentityCall: sts.Type<IdentityCall> = sts.closedEnum(() => {
    return {
        add_registrar: sts.enumStruct({
            account: MultiAddress,
        }),
        add_sub: sts.enumStruct({
            sub: MultiAddress,
            data: Data,
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
        remove_sub: sts.enumStruct({
            sub: MultiAddress,
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
            fields: BitFlags,
        }),
        set_identity: sts.enumStruct({
            info: IdentityInfo,
        }),
        set_subs: sts.enumStruct({
            subs: sts.array(() => sts.tuple(() => [AccountId32, Data])),
        }),
    }
})

export const IdentityInfo: sts.Type<IdentityInfo> = sts.struct(() => {
    return {
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

export const BitFlags = sts.bigint()

export const Judgement: sts.Type<Judgement> = sts.closedEnum(() => {
    return {
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
    return {
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
    return {
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
            rules: sts.array(() => DispatchRuleDescriptor),
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
    return {
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
    return {
        service_overweight: sts.enumStruct({
            index: sts.bigint(),
            weightLimit: Weight,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const DemocracyCall: sts.Type<DemocracyCall> = sts.closedEnum(() => {
    return {
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
    return {
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
    return {
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
    return {}
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const CouncilCall: sts.Type<CouncilCall> = sts.closedEnum(() => {
    return {
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
    return {
        approve_proposal: sts.enumStruct({
            proposalId: sts.number(),
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
            beneficiary: MultiAddress,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const CollatorStakingCall: sts.Type<CollatorStakingCall> = sts.closedEnum(() => {
    return {
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
    return {
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
    return {
        hash: H256,
        claim: TransactionData,
        isEfiToken: sts.boolean(),
    }
})

export const TransactionData: sts.Type<TransactionData> = sts.struct(() => {
    return {
        account: H160,
        amount: sts.bigint(),
    }
})

export const RejectData: sts.Type<RejectData> = sts.struct(() => {
    return {
        account: H160,
        hash: H256,
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const BountiesCall: sts.Type<BountiesCall> = sts.closedEnum(() => {
    return {
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
    return {
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
        set_balance_deprecated: sts.enumStruct({
            who: MultiAddress,
            newFree: sts.bigint(),
            oldReserved: sts.bigint(),
        }),
        transfer: sts.enumStruct({
            dest: MultiAddress,
            value: sts.bigint(),
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
