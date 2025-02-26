import { sts, Result, Option, Bytes, BitSequence } from './support'

export type Type_1095 =
    | Type_1095_Approved
    | Type_1095_Cancelled
    | Type_1095_Killed
    | Type_1095_Ongoing
    | Type_1095_Rejected
    | Type_1095_TimedOut

export interface Type_1095_Approved {
    __kind: 'Approved'
    value: [number, Type_1075 | undefined, Type_1075 | undefined]
}

export interface Type_1095_Cancelled {
    __kind: 'Cancelled'
    value: [number, Type_1075 | undefined, Type_1075 | undefined]
}

export interface Type_1095_Killed {
    __kind: 'Killed'
    value: number
}

export interface Type_1095_Ongoing {
    __kind: 'Ongoing'
    value: Type_1096
}

export interface Type_1095_Rejected {
    __kind: 'Rejected'
    value: [number, Type_1075 | undefined, Type_1075 | undefined]
}

export interface Type_1095_TimedOut {
    __kind: 'TimedOut'
    value: [number, Type_1075 | undefined, Type_1075 | undefined]
}

export interface Type_1096 {
    track: number
    origin: OriginCaller
    proposal: Bounded
    enactment: DispatchTime
    submitted: number
    submissionDeposit: Type_1075
    decisionDeposit?: Type_1075 | undefined
    deciding?: DecidingStatus | undefined
    tally: Type_718
    inQueue: boolean
    alarm?: [number, [number, number]] | undefined
}

export interface Type_718 {
    bareAyes: number
    ayes: number
    nays: number
}

export interface DecidingStatus {
    since: number
    confirming?: number | undefined
}

export type DispatchTime = DispatchTime_After | DispatchTime_At

export interface DispatchTime_After {
    __kind: 'After'
    value: number
}

export interface DispatchTime_At {
    __kind: 'At'
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

export type OriginCaller =
    | OriginCaller_Origins
    | OriginCaller_ParachainsOrigin
    | OriginCaller_Void
    | OriginCaller_XcmPallet
    | OriginCaller_system

export interface OriginCaller_Origins {
    __kind: 'Origins'
    value: Type_452
}

export interface OriginCaller_ParachainsOrigin {
    __kind: 'ParachainsOrigin'
    value: Origin
}

export interface OriginCaller_Void {
    __kind: 'Void'
    value: Void
}

export interface OriginCaller_XcmPallet {
    __kind: 'XcmPallet'
    value: Type_451
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

export type Type_451 = Type_451_Response | Type_451_Xcm

export interface Type_451_Response {
    __kind: 'Response'
    value: V4Location
}

export interface Type_451_Xcm {
    __kind: 'Xcm'
    value: V4Location
}

export type Void = never

export type Origin = Origin_Parachain

export interface Origin_Parachain {
    __kind: 'Parachain'
    value: Id
}

export type Type_452 =
    | Type_452_AuctionAdmin
    | Type_452_BigSpender
    | Type_452_BigTipper
    | Type_452_Fellows
    | Type_452_Fellowship1Dan
    | Type_452_Fellowship2Dan
    | Type_452_Fellowship3Dan
    | Type_452_Fellowship4Dan
    | Type_452_Fellowship5Dan
    | Type_452_Fellowship6Dan
    | Type_452_Fellowship7Dan
    | Type_452_Fellowship8Dan
    | Type_452_Fellowship9Dan
    | Type_452_FellowshipAdmin
    | Type_452_FellowshipExperts
    | Type_452_FellowshipInitiates
    | Type_452_FellowshipMasters
    | Type_452_FuelTanksAdmin
    | Type_452_GeneralAdmin
    | Type_452_LeaseAdmin
    | Type_452_MediumSpender
    | Type_452_MultiTokensAdmin
    | Type_452_ParachainsAdmin
    | Type_452_ReferendumCanceller
    | Type_452_ReferendumKiller
    | Type_452_SmallSpender
    | Type_452_SmallTipper
    | Type_452_StakingAdmin
    | Type_452_TreasuryAdmin
    | Type_452_WhitelistAdmin
    | Type_452_WhitelistedCaller

export interface Type_452_AuctionAdmin {
    __kind: 'AuctionAdmin'
}

export interface Type_452_BigSpender {
    __kind: 'BigSpender'
}

export interface Type_452_BigTipper {
    __kind: 'BigTipper'
}

export interface Type_452_Fellows {
    __kind: 'Fellows'
}

export interface Type_452_Fellowship1Dan {
    __kind: 'Fellowship1Dan'
}

export interface Type_452_Fellowship2Dan {
    __kind: 'Fellowship2Dan'
}

export interface Type_452_Fellowship3Dan {
    __kind: 'Fellowship3Dan'
}

export interface Type_452_Fellowship4Dan {
    __kind: 'Fellowship4Dan'
}

export interface Type_452_Fellowship5Dan {
    __kind: 'Fellowship5Dan'
}

export interface Type_452_Fellowship6Dan {
    __kind: 'Fellowship6Dan'
}

export interface Type_452_Fellowship7Dan {
    __kind: 'Fellowship7Dan'
}

export interface Type_452_Fellowship8Dan {
    __kind: 'Fellowship8Dan'
}

export interface Type_452_Fellowship9Dan {
    __kind: 'Fellowship9Dan'
}

export interface Type_452_FellowshipAdmin {
    __kind: 'FellowshipAdmin'
}

export interface Type_452_FellowshipExperts {
    __kind: 'FellowshipExperts'
}

export interface Type_452_FellowshipInitiates {
    __kind: 'FellowshipInitiates'
}

export interface Type_452_FellowshipMasters {
    __kind: 'FellowshipMasters'
}

export interface Type_452_FuelTanksAdmin {
    __kind: 'FuelTanksAdmin'
}

export interface Type_452_GeneralAdmin {
    __kind: 'GeneralAdmin'
}

export interface Type_452_LeaseAdmin {
    __kind: 'LeaseAdmin'
}

export interface Type_452_MediumSpender {
    __kind: 'MediumSpender'
}

export interface Type_452_MultiTokensAdmin {
    __kind: 'MultiTokensAdmin'
}

export interface Type_452_ParachainsAdmin {
    __kind: 'ParachainsAdmin'
}

export interface Type_452_ReferendumCanceller {
    __kind: 'ReferendumCanceller'
}

export interface Type_452_ReferendumKiller {
    __kind: 'ReferendumKiller'
}

export interface Type_452_SmallSpender {
    __kind: 'SmallSpender'
}

export interface Type_452_SmallTipper {
    __kind: 'SmallTipper'
}

export interface Type_452_StakingAdmin {
    __kind: 'StakingAdmin'
}

export interface Type_452_TreasuryAdmin {
    __kind: 'TreasuryAdmin'
}

export interface Type_452_WhitelistAdmin {
    __kind: 'WhitelistAdmin'
}

export interface Type_452_WhitelistedCaller {
    __kind: 'WhitelistedCaller'
}

export interface Type_1075 {
    who: AccountId32
    amount: bigint
}

export const Type_1095: sts.Type<Type_1095> = sts.closedEnum(() => {
    return {
        Approved: sts.tuple(() => [sts.number(), sts.option(() => Type_1075), sts.option(() => Type_1075)]),
        Cancelled: sts.tuple(() => [sts.number(), sts.option(() => Type_1075), sts.option(() => Type_1075)]),
        Killed: sts.number(),
        Ongoing: Type_1096,
        Rejected: sts.tuple(() => [sts.number(), sts.option(() => Type_1075), sts.option(() => Type_1075)]),
        TimedOut: sts.tuple(() => [sts.number(), sts.option(() => Type_1075), sts.option(() => Type_1075)]),
    }
})

export const Type_1096: sts.Type<Type_1096> = sts.struct(() => {
    return {
        track: sts.number(),
        origin: OriginCaller,
        proposal: Bounded,
        enactment: DispatchTime,
        submitted: sts.number(),
        submissionDeposit: Type_1075,
        decisionDeposit: sts.option(() => Type_1075),
        deciding: sts.option(() => DecidingStatus),
        tally: Type_718,
        inQueue: sts.boolean(),
        alarm: sts.option(() => sts.tuple(() => [sts.number(), sts.tuple(() => [sts.number(), sts.number()])])),
    }
})

export const Type_718: sts.Type<Type_718> = sts.struct(() => {
    return {
        bareAyes: sts.number(),
        ayes: sts.number(),
        nays: sts.number(),
    }
})

export const DecidingStatus: sts.Type<DecidingStatus> = sts.struct(() => {
    return {
        since: sts.number(),
        confirming: sts.option(() => sts.number()),
    }
})

export const Type_1075: sts.Type<Type_1075> = sts.struct(() => {
    return {
        who: AccountId32,
        amount: sts.bigint(),
    }
})

export type ReferendumInfo =
    | ReferendumInfo_Approved
    | ReferendumInfo_Cancelled
    | ReferendumInfo_Killed
    | ReferendumInfo_Ongoing
    | ReferendumInfo_Rejected
    | ReferendumInfo_TimedOut

export interface ReferendumInfo_Approved {
    __kind: 'Approved'
    value: [number, Type_1075 | undefined, Type_1075 | undefined]
}

export interface ReferendumInfo_Cancelled {
    __kind: 'Cancelled'
    value: [number, Type_1075 | undefined, Type_1075 | undefined]
}

export interface ReferendumInfo_Killed {
    __kind: 'Killed'
    value: number
}

export interface ReferendumInfo_Ongoing {
    __kind: 'Ongoing'
    value: ReferendumStatus
}

export interface ReferendumInfo_Rejected {
    __kind: 'Rejected'
    value: [number, Type_1075 | undefined, Type_1075 | undefined]
}

export interface ReferendumInfo_TimedOut {
    __kind: 'TimedOut'
    value: [number, Type_1075 | undefined, Type_1075 | undefined]
}

export interface ReferendumStatus {
    track: number
    origin: OriginCaller
    proposal: Bounded
    enactment: DispatchTime
    submitted: number
    submissionDeposit: Type_1075
    decisionDeposit?: Type_1075 | undefined
    deciding?: DecidingStatus | undefined
    tally: Tally
    inQueue: boolean
    alarm?: [number, [number, number]] | undefined
}

export interface Tally {
    ayes: bigint
    nays: bigint
    support: bigint
}

export const ReferendumInfo: sts.Type<ReferendumInfo> = sts.closedEnum(() => {
    return {
        Approved: sts.tuple(() => [sts.number(), sts.option(() => Type_1075), sts.option(() => Type_1075)]),
        Cancelled: sts.tuple(() => [sts.number(), sts.option(() => Type_1075), sts.option(() => Type_1075)]),
        Killed: sts.number(),
        Ongoing: ReferendumStatus,
        Rejected: sts.tuple(() => [sts.number(), sts.option(() => Type_1075), sts.option(() => Type_1075)]),
        TimedOut: sts.tuple(() => [sts.number(), sts.option(() => Type_1075), sts.option(() => Type_1075)]),
    }
})

export const ReferendumStatus: sts.Type<ReferendumStatus> = sts.struct(() => {
    return {
        track: sts.number(),
        origin: OriginCaller,
        proposal: Bounded,
        enactment: DispatchTime,
        submitted: sts.number(),
        submissionDeposit: Type_1075,
        decisionDeposit: sts.option(() => Type_1075),
        deciding: sts.option(() => DecidingStatus),
        tally: Tally,
        inQueue: sts.boolean(),
        alarm: sts.option(() => sts.tuple(() => [sts.number(), sts.tuple(() => [sts.number(), sts.number()])])),
    }
})

export const Tally: sts.Type<Tally> = sts.struct(() => {
    return {
        ayes: sts.bigint(),
        nays: sts.bigint(),
        support: sts.bigint(),
    }
})

export interface BeefyAuthoritySet {
    id: bigint
    len: number
    keysetCommitment: H256
}

export const BeefyAuthoritySet: sts.Type<BeefyAuthoritySet> = sts.struct(() => {
    return {
        id: sts.bigint(),
        len: sts.number(),
        keysetCommitment: H256,
    }
})

export type VersionedAssetId = VersionedAssetId_V3 | VersionedAssetId_V4

export interface VersionedAssetId_V3 {
    __kind: 'V3'
    value: V3AssetId
}

export interface VersionedAssetId_V4 {
    __kind: 'V4'
    value: V4AssetId
}

export interface V4AssetId {
    parents: number
    interior: V4Junctions
}

export type V4Junctions =
    | V4Junctions_Here
    | V4Junctions_X1
    | V4Junctions_X2
    | V4Junctions_X3
    | V4Junctions_X4
    | V4Junctions_X5
    | V4Junctions_X6
    | V4Junctions_X7
    | V4Junctions_X8

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

export type V4Junction =
    | V4Junction_AccountId32
    | V4Junction_AccountIndex64
    | V4Junction_AccountKey20
    | V4Junction_GeneralIndex
    | V4Junction_GeneralKey
    | V4Junction_GlobalConsensus
    | V4Junction_OnlyChild
    | V4Junction_PalletInstance
    | V4Junction_Parachain
    | V4Junction_Plurality

export interface V4Junction_AccountId32 {
    __kind: 'AccountId32'
    network?: V4NetworkId | undefined
    id: Bytes
}

export interface V4Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network?: V4NetworkId | undefined
    index: bigint
}

export interface V4Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network?: V4NetworkId | undefined
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

export type V4NetworkId =
    | V4NetworkId_BitcoinCash
    | V4NetworkId_BitcoinCore
    | V4NetworkId_ByFork
    | V4NetworkId_ByGenesis
    | V4NetworkId_Ethereum
    | V4NetworkId_Kusama
    | V4NetworkId_Polkadot
    | V4NetworkId_PolkadotBulletin
    | V4NetworkId_Rococo
    | V4NetworkId_Westend
    | V4NetworkId_Wococo

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

export type V3NetworkId =
    | V3NetworkId_BitcoinCash
    | V3NetworkId_BitcoinCore
    | V3NetworkId_ByFork
    | V3NetworkId_ByGenesis
    | V3NetworkId_Ethereum
    | V3NetworkId_Kusama
    | V3NetworkId_Polkadot
    | V3NetworkId_PolkadotBulletin
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

export interface RemoteLockedFungibleRecord {
    amount: bigint
    owner: VersionedLocation
    locker: VersionedLocation
    consumers: [null, bigint][]
}

export const RemoteLockedFungibleRecord: sts.Type<RemoteLockedFungibleRecord> = sts.struct(() => {
    return {
        amount: sts.bigint(),
        owner: VersionedLocation,
        locker: VersionedLocation,
        consumers: sts.array(() => sts.tuple(() => [sts.unit(), sts.bigint()])),
    }
})

export const VersionedAssetId: sts.Type<VersionedAssetId> = sts.closedEnum(() => {
    return {
        V3: V3AssetId,
        V4: V4AssetId,
    }
})

export const V4AssetId: sts.Type<V4AssetId> = sts.struct(() => {
    return {
        parents: sts.number(),
        interior: V4Junctions,
    }
})

export const V4Junctions: sts.Type<V4Junctions> = sts.closedEnum(() => {
    return {
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
    return {
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

export const V4NetworkId: sts.Type<V4NetworkId> = sts.closedEnum(() => {
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
        PolkadotBulletin: sts.unit(),
        Rococo: sts.unit(),
        Westend: sts.unit(),
        Wococo: sts.unit(),
    }
})

export const V3AssetId: sts.Type<V3AssetId> = sts.closedEnum(() => {
    return {
        Abstract: sts.bytes(),
        Concrete: V3MultiLocation,
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
        PolkadotBulletin: sts.unit(),
        Rococo: sts.unit(),
        Westend: sts.unit(),
        Wococo: sts.unit(),
    }
})

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

export type QueryStatus = QueryStatus_Pending | QueryStatus_Ready | QueryStatus_VersionNotifier

export interface QueryStatus_Pending {
    __kind: 'Pending'
    responder: VersionedLocation
    maybeMatchQuerier?: VersionedLocation | undefined
    maybeNotify?: [number, number] | undefined
    timeout: number
}

export interface QueryStatus_Ready {
    __kind: 'Ready'
    response: VersionedResponse
    at: number
}

export interface QueryStatus_VersionNotifier {
    __kind: 'VersionNotifier'
    origin: VersionedLocation
    isActive: boolean
}

export type VersionedResponse = VersionedResponse_V2 | VersionedResponse_V3 | VersionedResponse_V4

export interface VersionedResponse_V2 {
    __kind: 'V2'
    value: V2Response
}

export interface VersionedResponse_V3 {
    __kind: 'V3'
    value: V3Response
}

export interface VersionedResponse_V4 {
    __kind: 'V4'
    value: V4Response
}

export type V4Response =
    | V4Response_Assets
    | V4Response_DispatchResult
    | V4Response_ExecutionResult
    | V4Response_Null
    | V4Response_PalletsInfo
    | V4Response_Version

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
    value?: [number, V3Error] | undefined
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
    name: Bytes
    moduleName: Bytes
    major: number
    minor: number
    patch: number
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

export type V4AssetInstance =
    | V4AssetInstance_Array16
    | V4AssetInstance_Array32
    | V4AssetInstance_Array4
    | V4AssetInstance_Array8
    | V4AssetInstance_Index
    | V4AssetInstance_Undefined

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
    name: Bytes
    moduleName: Bytes
    major: number
    minor: number
    patch: number
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

export const QueryStatus: sts.Type<QueryStatus> = sts.closedEnum(() => {
    return {
        Pending: sts.enumStruct({
            responder: VersionedLocation,
            maybeMatchQuerier: sts.option(() => VersionedLocation),
            maybeNotify: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            timeout: sts.number(),
        }),
        Ready: sts.enumStruct({
            response: VersionedResponse,
            at: sts.number(),
        }),
        VersionNotifier: sts.enumStruct({
            origin: VersionedLocation,
            isActive: sts.boolean(),
        }),
    }
})

export const VersionedResponse: sts.Type<VersionedResponse> = sts.closedEnum(() => {
    return {
        V2: V2Response,
        V3: V3Response,
        V4: V4Response,
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
        name: sts.bytes(),
        moduleName: sts.bytes(),
        major: sts.number(),
        minor: sts.number(),
        patch: sts.number(),
    }
})

export const V3MaybeErrorCode: sts.Type<V3MaybeErrorCode> = sts.closedEnum(() => {
    return {
        Error: sts.bytes(),
        Success: sts.unit(),
        TruncatedError: sts.bytes(),
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

export interface ParaInfo {
    manager: AccountId32
    deposit: bigint
    locked?: boolean | undefined
}

export const ParaInfo: sts.Type<ParaInfo> = sts.struct(() => {
    return {
        manager: AccountId32,
        deposit: sts.bigint(),
        locked: sts.option(() => sts.boolean()),
    }
})

export type V6ExecutorParam =
    | V6ExecutorParam_MaxMemoryPages
    | V6ExecutorParam_PrecheckingMaxMemory
    | V6ExecutorParam_PvfExecTimeout
    | V6ExecutorParam_PvfPrepTimeout
    | V6ExecutorParam_StackLogicalMax
    | V6ExecutorParam_StackNativeMax
    | V6ExecutorParam_WasmExtBulkMemory

export interface V6ExecutorParam_MaxMemoryPages {
    __kind: 'MaxMemoryPages'
    value: number
}

export interface V6ExecutorParam_PrecheckingMaxMemory {
    __kind: 'PrecheckingMaxMemory'
    value: bigint
}

export interface V6ExecutorParam_PvfExecTimeout {
    __kind: 'PvfExecTimeout'
    value: [V6PvfExecKind, bigint]
}

export interface V6ExecutorParam_PvfPrepTimeout {
    __kind: 'PvfPrepTimeout'
    value: [V6PvfPrepKind, bigint]
}

export interface V6ExecutorParam_StackLogicalMax {
    __kind: 'StackLogicalMax'
    value: number
}

export interface V6ExecutorParam_StackNativeMax {
    __kind: 'StackNativeMax'
    value: number
}

export interface V6ExecutorParam_WasmExtBulkMemory {
    __kind: 'WasmExtBulkMemory'
}

export type V6PvfPrepKind = V6PvfPrepKind_Precheck | V6PvfPrepKind_Prepare

export interface V6PvfPrepKind_Precheck {
    __kind: 'Precheck'
}

export interface V6PvfPrepKind_Prepare {
    __kind: 'Prepare'
}

export type V6PvfExecKind = V6PvfExecKind_Approval | V6PvfExecKind_Backing

export interface V6PvfExecKind_Approval {
    __kind: 'Approval'
}

export interface V6PvfExecKind_Backing {
    __kind: 'Backing'
}

export type Id = number

export type ValidationCodeHash = Bytes

export interface PvfCheckActiveVoteState {
    votesAccept: BitSequence
    votesReject: BitSequence
    age: number
    createdAt: number
    causes: PvfCheckCause[]
}

export type PvfCheckCause = PvfCheckCause_Onboarding | PvfCheckCause_Upgrade

export interface PvfCheckCause_Onboarding {
    __kind: 'Onboarding'
    value: Id
}

export interface PvfCheckCause_Upgrade {
    __kind: 'Upgrade'
    id: Id
    includedAt: number
    setGoAhead: SetGoAhead
}

export type SetGoAhead = SetGoAhead_No | SetGoAhead_Yes

export interface SetGoAhead_No {
    __kind: 'No'
}

export interface SetGoAhead_Yes {
    __kind: 'Yes'
}

export const PvfCheckActiveVoteState: sts.Type<PvfCheckActiveVoteState> = sts.struct(() => {
    return {
        votesAccept: sts.bitseq(),
        votesReject: sts.bitseq(),
        age: sts.number(),
        createdAt: sts.number(),
        causes: sts.array(() => PvfCheckCause),
    }
})

export const PvfCheckCause: sts.Type<PvfCheckCause> = sts.closedEnum(() => {
    return {
        Onboarding: Id,
        Upgrade: sts.enumStruct({
            id: Id,
            includedAt: sts.number(),
            setGoAhead: SetGoAhead,
        }),
    }
})

export const SetGoAhead: sts.Type<SetGoAhead> = sts.closedEnum(() => {
    return {
        No: sts.unit(),
        Yes: sts.unit(),
    }
})

export const ValidationCodeHash = sts.bytes()

export interface ParasEntry {
    assignment: Assignment
    availabilityTimeouts: number
    ttl: number
}

export type Assignment = Assignment_Bulk | Assignment_Pool

export interface Assignment_Bulk {
    __kind: 'Bulk'
    value: Id
}

export interface Assignment_Pool {
    __kind: 'Pool'
    paraId: Id
    coreIndex: V6CoreIndex
}

export type V6CoreIndex = number

export const ParasEntry: sts.Type<ParasEntry> = sts.struct(() => {
    return {
        assignment: Assignment,
        availabilityTimeouts: sts.number(),
        ttl: sts.number(),
    }
})

export const Assignment: sts.Type<Assignment> = sts.closedEnum(() => {
    return {
        Bulk: Id,
        Pool: sts.enumStruct({
            paraId: Id,
            coreIndex: V6CoreIndex,
        }),
    }
})

export const V6CoreIndex = sts.number()

export type CoreOccupied = CoreOccupied_Free | CoreOccupied_Paras

export interface CoreOccupied_Free {
    __kind: 'Free'
}

export interface CoreOccupied_Paras {
    __kind: 'Paras'
    value: ParasEntry
}

export const CoreOccupied: sts.Type<CoreOccupied> = sts.closedEnum(() => {
    return {
        Free: sts.unit(),
        Paras: ParasEntry,
    }
})

export interface V6ScrapedOnChainVotes {
    session: number
    backingValidatorsPerCandidate: [V6CandidateReceipt, [V6ValidatorIndex, V6ValidityAttestation][]][]
    disputes: V6DisputeStatementSet[]
}

export interface V6DisputeStatementSet {
    candidateHash: CandidateHash
    session: number
    statements: [V6DisputeStatement, V6ValidatorIndex, Bytes][]
}

export type V6DisputeStatement = V6DisputeStatement_Invalid | V6DisputeStatement_Valid

export interface V6DisputeStatement_Invalid {
    __kind: 'Invalid'
    value: V6InvalidDisputeStatementKind
}

export interface V6DisputeStatement_Valid {
    __kind: 'Valid'
    value: V6ValidDisputeStatementKind
}

export type V6ValidDisputeStatementKind =
    | V6ValidDisputeStatementKind_ApprovalChecking
    | V6ValidDisputeStatementKind_ApprovalCheckingMultipleCandidates
    | V6ValidDisputeStatementKind_BackingSeconded
    | V6ValidDisputeStatementKind_BackingValid
    | V6ValidDisputeStatementKind_Explicit

export interface V6ValidDisputeStatementKind_ApprovalChecking {
    __kind: 'ApprovalChecking'
}

export interface V6ValidDisputeStatementKind_ApprovalCheckingMultipleCandidates {
    __kind: 'ApprovalCheckingMultipleCandidates'
    value: CandidateHash[]
}

export interface V6ValidDisputeStatementKind_BackingSeconded {
    __kind: 'BackingSeconded'
    value: H256
}

export interface V6ValidDisputeStatementKind_BackingValid {
    __kind: 'BackingValid'
    value: H256
}

export interface V6ValidDisputeStatementKind_Explicit {
    __kind: 'Explicit'
}

export type V6InvalidDisputeStatementKind = V6InvalidDisputeStatementKind_Explicit

export interface V6InvalidDisputeStatementKind_Explicit {
    __kind: 'Explicit'
}

export type CandidateHash = Bytes

export type V6ValidityAttestation = V6ValidityAttestation_Explicit | V6ValidityAttestation_Implicit

export interface V6ValidityAttestation_Explicit {
    __kind: 'Explicit'
    value: Bytes
}

export interface V6ValidityAttestation_Implicit {
    __kind: 'Implicit'
    value: Bytes
}

export type V6ValidatorIndex = number

export interface V6CandidateReceipt {
    descriptor: V6CandidateDescriptor
    commitmentsHash: H256
}

export interface V6CandidateDescriptor {
    paraId: Id
    relayParent: H256
    collator: V6Public
    persistedValidationDataHash: H256
    povHash: H256
    erasureRoot: H256
    signature: V6Signature
    paraHead: H256
    validationCodeHash: ValidationCodeHash
}

export type V6Signature = Bytes

export type V6Public = Bytes

export const V6ScrapedOnChainVotes: sts.Type<V6ScrapedOnChainVotes> = sts.struct(() => {
    return {
        session: sts.number(),
        backingValidatorsPerCandidate: sts.array(() =>
            sts.tuple(() => [
                V6CandidateReceipt,
                sts.array(() => sts.tuple(() => [V6ValidatorIndex, V6ValidityAttestation])),
            ])
        ),
        disputes: sts.array(() => V6DisputeStatementSet),
    }
})

export const V6DisputeStatementSet: sts.Type<V6DisputeStatementSet> = sts.struct(() => {
    return {
        candidateHash: CandidateHash,
        session: sts.number(),
        statements: sts.array(() => sts.tuple(() => [V6DisputeStatement, V6ValidatorIndex, sts.bytes()])),
    }
})

export const V6DisputeStatement: sts.Type<V6DisputeStatement> = sts.closedEnum(() => {
    return {
        Invalid: V6InvalidDisputeStatementKind,
        Valid: V6ValidDisputeStatementKind,
    }
})

export const V6ValidDisputeStatementKind: sts.Type<V6ValidDisputeStatementKind> = sts.closedEnum(() => {
    return {
        ApprovalChecking: sts.unit(),
        ApprovalCheckingMultipleCandidates: sts.array(() => CandidateHash),
        BackingSeconded: H256,
        BackingValid: H256,
        Explicit: sts.unit(),
    }
})

export const V6InvalidDisputeStatementKind: sts.Type<V6InvalidDisputeStatementKind> = sts.closedEnum(() => {
    return {
        Explicit: sts.unit(),
    }
})

export const CandidateHash = sts.bytes()

export const V6ValidityAttestation: sts.Type<V6ValidityAttestation> = sts.closedEnum(() => {
    return {
        Explicit: sts.bytes(),
        Implicit: sts.bytes(),
    }
})

export const V6ValidatorIndex = sts.number()

export const V6CandidateReceipt: sts.Type<V6CandidateReceipt> = sts.struct(() => {
    return {
        descriptor: V6CandidateDescriptor,
        commitmentsHash: H256,
    }
})

export const V6CandidateDescriptor: sts.Type<V6CandidateDescriptor> = sts.struct(() => {
    return {
        paraId: Id,
        relayParent: H256,
        collator: V6Public,
        persistedValidationDataHash: H256,
        povHash: H256,
        erasureRoot: H256,
        signature: V6Signature,
        paraHead: H256,
        validationCodeHash: ValidationCodeHash,
    }
})

export const V6Signature = sts.bytes()

export const V6Public = sts.bytes()

export interface AllowedRelayParentsTracker {
    buffer: [H256, H256][]
    latestNumber: number
}

export const AllowedRelayParentsTracker: sts.Type<AllowedRelayParentsTracker> = sts.struct(() => {
    return {
        buffer: sts.array(() => sts.tuple(() => [H256, H256])),
        latestNumber: sts.number(),
    }
})

export interface HostConfiguration {
    maxCodeSize: number
    maxHeadDataSize: number
    maxUpwardQueueCount: number
    maxUpwardQueueSize: number
    maxUpwardMessageSize: number
    maxUpwardMessageNumPerCandidate: number
    hrmpMaxMessageNumPerCandidate: number
    validationUpgradeCooldown: number
    validationUpgradeDelay: number
    asyncBackingParams: V6AsyncBackingParams
    maxPovSize: number
    maxDownwardMessageSize: number
    hrmpMaxParachainOutboundChannels: number
    hrmpSenderDeposit: bigint
    hrmpRecipientDeposit: bigint
    hrmpChannelMaxCapacity: number
    hrmpChannelMaxTotalSize: number
    hrmpMaxParachainInboundChannels: number
    hrmpChannelMaxMessageSize: number
    executorParams: V6ExecutorParam[]
    codeRetentionPeriod: number
    maxValidators?: number | undefined
    disputePeriod: number
    disputePostConclusionAcceptancePeriod: number
    noShowSlots: number
    nDelayTranches: number
    zerothDelayTrancheWidth: number
    neededApprovals: number
    relayVrfModuloSamples: number
    pvfVotingTtl: number
    minimumValidationUpgradeDelay: number
    minimumBackingVotes: number
    nodeFeatures: BitSequence
    approvalVotingParams: ApprovalVotingParams
    schedulerParams: SchedulerParams
}

export interface SchedulerParams {
    groupRotationFrequency: number
    parasAvailabilityPeriod: number
    maxValidatorsPerCore?: number | undefined
    lookahead: number
    numCores: number
    maxAvailabilityTimeouts: number
    onDemandQueueMaxSize: number
    onDemandTargetQueueUtilization: Perbill
    onDemandFeeVariability: Perbill
    onDemandBaseFee: bigint
    ttl: number
}

export type Perbill = number

export interface ApprovalVotingParams {
    maxApprovalCoalesceCount: number
}

export interface V6AsyncBackingParams {
    maxCandidateDepth: number
    allowedAncestryLen: number
}

export const HostConfiguration: sts.Type<HostConfiguration> = sts.struct(() => {
    return {
        maxCodeSize: sts.number(),
        maxHeadDataSize: sts.number(),
        maxUpwardQueueCount: sts.number(),
        maxUpwardQueueSize: sts.number(),
        maxUpwardMessageSize: sts.number(),
        maxUpwardMessageNumPerCandidate: sts.number(),
        hrmpMaxMessageNumPerCandidate: sts.number(),
        validationUpgradeCooldown: sts.number(),
        validationUpgradeDelay: sts.number(),
        asyncBackingParams: V6AsyncBackingParams,
        maxPovSize: sts.number(),
        maxDownwardMessageSize: sts.number(),
        hrmpMaxParachainOutboundChannels: sts.number(),
        hrmpSenderDeposit: sts.bigint(),
        hrmpRecipientDeposit: sts.bigint(),
        hrmpChannelMaxCapacity: sts.number(),
        hrmpChannelMaxTotalSize: sts.number(),
        hrmpMaxParachainInboundChannels: sts.number(),
        hrmpChannelMaxMessageSize: sts.number(),
        executorParams: sts.array(() => V6ExecutorParam),
        codeRetentionPeriod: sts.number(),
        maxValidators: sts.option(() => sts.number()),
        disputePeriod: sts.number(),
        disputePostConclusionAcceptancePeriod: sts.number(),
        noShowSlots: sts.number(),
        nDelayTranches: sts.number(),
        zerothDelayTrancheWidth: sts.number(),
        neededApprovals: sts.number(),
        relayVrfModuloSamples: sts.number(),
        pvfVotingTtl: sts.number(),
        minimumValidationUpgradeDelay: sts.number(),
        minimumBackingVotes: sts.number(),
        nodeFeatures: sts.bitseq(),
        approvalVotingParams: ApprovalVotingParams,
        schedulerParams: SchedulerParams,
    }
})

export const V6AsyncBackingParams: sts.Type<V6AsyncBackingParams> = sts.struct(() => {
    return {
        maxCandidateDepth: sts.number(),
        allowedAncestryLen: sts.number(),
    }
})

export interface StakingInfo {
    annualInflationRate: Perbill
    collatorPayoutCut: Perbill
    treasuryPayoutCut: Perbill
}

export interface SpendStatus {
    amount: bigint
    beneficiary: AccountId32
    validFrom: number
    expireAt: number
    status: PaymentState
}

export type PaymentState = PaymentState_Attempted | PaymentState_Failed | PaymentState_Pending

export interface PaymentState_Attempted {
    __kind: 'Attempted'
}

export interface PaymentState_Failed {
    __kind: 'Failed'
}

export interface PaymentState_Pending {
    __kind: 'Pending'
}

export const SpendStatus: sts.Type<SpendStatus> = sts.struct(() => {
    return {
        amount: sts.bigint(),
        beneficiary: AccountId32,
        validFrom: sts.number(),
        expireAt: sts.number(),
        status: PaymentState,
    }
})

export const PaymentState: sts.Type<PaymentState> = sts.closedEnum(() => {
    return {
        Attempted: sts.unit(),
        Failed: sts.unit(),
        Pending: sts.unit(),
    }
})

export type Public = Bytes

export const Public = sts.bytes()

export type Percent = number

export const Percent = sts.number()

export interface ExposurePage {
    pageTotal: bigint
    others: IndividualExposure[]
}

export interface IndividualExposure {
    who: AccountId32
    value: bigint
}

export const ExposurePage: sts.Type<ExposurePage> = sts.struct(() => {
    return {
        pageTotal: sts.bigint(),
        others: sts.array(() => IndividualExposure),
    }
})

export const IndividualExposure: sts.Type<IndividualExposure> = sts.struct(() => {
    return {
        who: AccountId32,
        value: sts.bigint(),
    }
})

export interface PagedExposureMetadata {
    total: bigint
    own: bigint
    nominatorCount: number
    pageCount: number
}

export const PagedExposureMetadata: sts.Type<PagedExposureMetadata> = sts.struct(() => {
    return {
        total: sts.bigint(),
        own: sts.bigint(),
        nominatorCount: sts.number(),
        pageCount: sts.number(),
    }
})

export type RewardDestination =
    | RewardDestination_Account
    | RewardDestination_Controller
    | RewardDestination_None
    | RewardDestination_Staked
    | RewardDestination_Stash

export interface RewardDestination_Account {
    __kind: 'Account'
    value: AccountId32
}

export interface RewardDestination_Controller {
    __kind: 'Controller'
}

export interface RewardDestination_None {
    __kind: 'None'
}

export interface RewardDestination_Staked {
    __kind: 'Staked'
}

export interface RewardDestination_Stash {
    __kind: 'Stash'
}

export interface StakingLedger {
    stash: AccountId32
    total: bigint
    active: bigint
    unlocking: UnlockChunk[]
    legacyClaimedRewards: number[]
}

export interface UnlockChunk {
    value: bigint
    era: number
}

export const StakingLedger: sts.Type<StakingLedger> = sts.struct(() => {
    return {
        stash: AccountId32,
        total: sts.bigint(),
        active: sts.bigint(),
        unlocking: sts.array(() => UnlockChunk),
        legacyClaimedRewards: sts.array(() => sts.number()),
    }
})

export const UnlockChunk: sts.Type<UnlockChunk> = sts.struct(() => {
    return {
        value: sts.bigint(),
        era: sts.number(),
    }
})

export type PreDigest = PreDigest_Primary | PreDigest_SecondaryPlain | PreDigest_SecondaryVRF

export interface PreDigest_Primary {
    __kind: 'Primary'
    value: PrimaryPreDigest
}

export interface PreDigest_SecondaryPlain {
    __kind: 'SecondaryPlain'
    value: SecondaryPlainPreDigest
}

export interface PreDigest_SecondaryVRF {
    __kind: 'SecondaryVRF'
    value: SecondaryVRFPreDigest
}

export interface SecondaryVRFPreDigest {
    authorityIndex: number
    slot: Slot
    vrfSignature: VrfSignature
}

export interface VrfSignature {
    preOutput: Bytes
    proof: Bytes
}

export type Slot = bigint

export interface SecondaryPlainPreDigest {
    authorityIndex: number
    slot: Slot
}

export interface PrimaryPreDigest {
    authorityIndex: number
    slot: Slot
    vrfSignature: VrfSignature
}

export const PreDigest: sts.Type<PreDigest> = sts.closedEnum(() => {
    return {
        Primary: PrimaryPreDigest,
        SecondaryPlain: SecondaryPlainPreDigest,
        SecondaryVRF: SecondaryVRFPreDigest,
    }
})

export const SecondaryVRFPreDigest: sts.Type<SecondaryVRFPreDigest> = sts.struct(() => {
    return {
        authorityIndex: sts.number(),
        slot: Slot,
        vrfSignature: VrfSignature,
    }
})

export const VrfSignature: sts.Type<VrfSignature> = sts.struct(() => {
    return {
        preOutput: sts.bytes(),
        proof: sts.bytes(),
    }
})

export const Slot = sts.bigint()

export const SecondaryPlainPreDigest: sts.Type<SecondaryPlainPreDigest> = sts.struct(() => {
    return {
        authorityIndex: sts.number(),
        slot: Slot,
    }
})

export const PrimaryPreDigest: sts.Type<PrimaryPreDigest> = sts.struct(() => {
    return {
        authorityIndex: sts.number(),
        slot: Slot,
        vrfSignature: VrfSignature,
    }
})

export interface Registration {
    judgements: [number, Judgement][]
    deposit: bigint
    info: IdentityInfo
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

export const Registration: sts.Type<Registration> = sts.struct(() => {
    return {
        judgements: sts.array(() => sts.tuple(() => [sts.number(), Judgement])),
        deposit: sts.bigint(),
        info: IdentityInfo,
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

export type H256 = Bytes

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
    highBid?: Bid | undefined
}

export interface Bid {
    bidder: AccountId32
    price: bigint
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
    expiration?: number | undefined
}

export interface AuctionData {
    startBlock: number
    endBlock: number
}

export interface Deposit {
    depositor: AccountId32
    amount: bigint
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

export interface UserAccount {
    tankDeposit: bigint
    userDeposit: bigint
    totalReceived: bigint
    ruleDataSets: [number, [DispatchRuleKind, Bytes][]][]
}

export type DispatchRuleKind =
    | DispatchRuleKind_MaxFuelBurnPerTransaction
    | DispatchRuleKind_MinimumInfusion
    | DispatchRuleKind_PermittedCalls
    | DispatchRuleKind_PermittedExtrinsics
    | DispatchRuleKind_RequireSignature
    | DispatchRuleKind_RequireToken
    | DispatchRuleKind_TankFuelBudget
    | DispatchRuleKind_UserFuelBudget
    | DispatchRuleKind_WhitelistedCallers
    | DispatchRuleKind_WhitelistedCollections
    | DispatchRuleKind_WhitelistedPallets

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
    return {
        tankDeposit: sts.bigint(),
        userDeposit: sts.bigint(),
        totalReceived: sts.bigint(),
        ruleDataSets: sts.array(() =>
            sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [DispatchRuleKind, sts.bytes()]))])
        ),
    }
})

export interface FuelTank {
    owner: AccountId32
    name: Bytes
    ruleSets: [number, RuleSet][]
    totalReserved: bigint
    accountCount: number
    userAccountManagement?: UserAccountManagement | undefined
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

export type DispatchRuleWrapper =
    | DispatchRuleWrapper_MaxFuelBurnPerTransaction
    | DispatchRuleWrapper_MinimumInfusion
    | DispatchRuleWrapper_PermittedCalls
    | DispatchRuleWrapper_PermittedExtrinsics
    | DispatchRuleWrapper_RequireSignature
    | DispatchRuleWrapper_RequireToken
    | DispatchRuleWrapper_TankFuelBudget
    | DispatchRuleWrapper_UserFuelBudget
    | DispatchRuleWrapper_WhitelistedCallers
    | DispatchRuleWrapper_WhitelistedCollections
    | DispatchRuleWrapper_WhitelistedPallets

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
    lastResetBlock?: number | undefined
}

export type RequireSignatureRule = Bytes

export interface ExtrinsicInfo {
    palletName: Bytes
    extrinsicName: Bytes
}

export type MinimumInfusionRule = bigint

export type MaxFuelBurnPerTransactionRule = bigint

export const FuelTank: sts.Type<FuelTank> = sts.struct(() => {
    return {
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

export const AccountRuleKind: sts.Type<AccountRuleKind> = sts.closedEnum(() => {
    return {
        RequireToken: sts.unit(),
        WhitelistedCallers: sts.unit(),
    }
})

export const CoveragePolicy: sts.Type<CoveragePolicy> = sts.closedEnum(() => {
    return {
        Fees: sts.unit(),
        FeesAndDeposit: sts.unit(),
    }
})

export const UserAccountManagement: sts.Type<UserAccountManagement> = sts.struct(() => {
    return {
        tankReservesAccountCreationDeposit: sts.boolean(),
    }
})

export const RuleSet: sts.Type<RuleSet> = sts.struct(() => {
    return {
        rules: sts.array(() => sts.tuple(() => [DispatchRuleKind, DispatchRuleWrapper])),
        isFrozen: sts.boolean(),
        requireAccount: sts.boolean(),
    }
})

export const DispatchRuleWrapper: sts.Type<DispatchRuleWrapper> = sts.closedEnum(() => {
    return {
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
    return {
        budget: Budget,
        userCount: sts.number(),
    }
})

export const Budget: sts.Type<Budget> = sts.struct(() => {
    return {
        amount: sts.bigint(),
        resetPeriod: sts.number(),
    }
})

export const TankFuelBudgetRule: sts.Type<TankFuelBudgetRule> = sts.struct(() => {
    return {
        budget: Budget,
        consumption: Consumption,
    }
})

export const Consumption: sts.Type<Consumption> = sts.struct(() => {
    return {
        totalConsumed: sts.bigint(),
        lastResetBlock: sts.option(() => sts.number()),
    }
})

export const RequireSignatureRule = sts.bytes()

export const ExtrinsicInfo: sts.Type<ExtrinsicInfo> = sts.struct(() => {
    return {
        palletName: sts.bytes(),
        extrinsicName: sts.bytes(),
    }
})

export const MinimumInfusionRule = sts.bigint()

export const MaxFuelBurnPerTransactionRule = sts.bigint()

export interface V4Location {
    parents: number
    interior: V4Junctions
}

export interface AssetId {
    collectionId: bigint
    tokenId: bigint
}

export interface Attribute {
    value: Bytes
    deposit: bigint
    depositor?: AccountId32 | undefined
}

export interface Token {
    supply: bigint
    cap?: TokenCap | undefined
    freezeState?: FreezeState | undefined
    requiresDeposit: boolean
    creationDeposit: AmbiguousDeposit
    ownerDeposit: bigint
    totalTokenAccountDeposit: bigint
    attributeCount: number
    accountCount: number
    marketBehavior?: TokenMarketBehavior | undefined
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
    foreign?: DefaultForeignTokenMetadata | undefined
}

export interface DefaultForeignTokenMetadata {
    location?: V4Location | undefined
    unitsPerSecond?: bigint | undefined
}

export type BoundedString = Bytes

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

export interface AmbiguousDeposit {
    depositor?: AccountId32 | undefined
    amount: bigint
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
    royalty?: DefaultRoyalty | undefined
}

export interface DefaultTransferPolicy {
    isFrozen: boolean
}

export interface DefaultMintPolicy {
    maxTokenCount?: bigint | undefined
    maxTokenSupply?: bigint | undefined
    forceCollapsingSupply: boolean
}

export interface TokenAccount {
    balance: bigint
    reservedBalance: bigint
    lockedBalance: bigint
    namedReserves: [Bytes, bigint][]
    locks: [Bytes, bigint][]
    approvals: [AccountId32, Approval][]
    isFrozen: boolean
    deposit?: Deposit | undefined
}

export interface Approval {
    amount: bigint
    expiration?: number | undefined
}

export type AccountId32 = Bytes

export interface IdAmount {
    id: RuntimeHoldReason
    amount: bigint
}

export type RuntimeHoldReason = RuntimeHoldReason_Preimage | RuntimeHoldReason_SafeMode

export interface RuntimeHoldReason_Preimage {
    __kind: 'Preimage'
    value: Type_767
}

export interface RuntimeHoldReason_SafeMode {
    __kind: 'SafeMode'
    value: HoldReason
}

export type HoldReason = HoldReason_EnterOrExtend

export interface HoldReason_EnterOrExtend {
    __kind: 'EnterOrExtend'
}

export type Type_767 = Type_767_Preimage

export interface Type_767_Preimage {
    __kind: 'Preimage'
}

export const IdAmount: sts.Type<IdAmount> = sts.struct(() => {
    return {
        id: RuntimeHoldReason,
        amount: sts.bigint(),
    }
})

export const RuntimeHoldReason: sts.Type<RuntimeHoldReason> = sts.closedEnum(() => {
    return {
        Preimage: Type_767,
        SafeMode: HoldReason,
    }
})

export const HoldReason: sts.Type<HoldReason> = sts.closedEnum(() => {
    return {
        EnterOrExtend: sts.unit(),
    }
})

export const Type_767: sts.Type<Type_767> = sts.closedEnum(() => {
    return {
        Preimage: sts.unit(),
    }
})

export interface Scheduled {
    maybeId?: Bytes | undefined
    priority: number
    call: Bounded
    maybePeriodic?: [number, number] | undefined
    origin: OriginCaller
}

export const Scheduled: sts.Type<Scheduled> = sts.struct(() => {
    return {
        maybeId: sts.option(() => sts.bytes()),
        priority: sts.number(),
        call: Bounded,
        maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
        origin: OriginCaller,
    }
})

export interface EventRecord {
    phase: Type_722
    event: Event
    topics: H256[]
}

export type Event =
    | Event_AssignedSlots
    | Event_Auctions
    | Event_Balances
    | Event_ConvictionVoting
    | Event_Crowdloan
    | Event_ElectionProviderMultiPhase
    | Event_ExtrinsicPause
    | Event_FellowshipCollective
    | Event_FellowshipReferenda
    | Event_FuelTanks
    | Event_Grandpa
    | Event_Hrmp
    | Event_Identity
    | Event_ImOnline
    | Event_Marketplace
    | Event_MessageQueue
    | Event_Migrations
    | Event_MultiTokens
    | Event_Multisig
    | Event_NominationPools
    | Event_Offences
    | Event_ParaInclusion
    | Event_Paras
    | Event_ParasDisputes
    | Event_Preimage
    | Event_Proxy
    | Event_Referenda
    | Event_Registrar
    | Event_SafeMode
    | Event_Scheduler
    | Event_Session
    | Event_Slots
    | Event_StakeExchange
    | Event_Staking
    | Event_Sudo
    | Event_System
    | Event_TransactionPayment
    | Event_Treasury
    | Event_Utility
    | Event_ValidatorManager
    | Event_VoteManager
    | Event_VoterList
    | Event_Whitelist
    | Event_XcmPallet

export interface Event_AssignedSlots {
    __kind: 'AssignedSlots'
    value: AssignedSlotsEvent
}

export interface Event_Auctions {
    __kind: 'Auctions'
    value: AuctionsEvent
}

export interface Event_Balances {
    __kind: 'Balances'
    value: BalancesEvent
}

export interface Event_ConvictionVoting {
    __kind: 'ConvictionVoting'
    value: ConvictionVotingEvent
}

export interface Event_Crowdloan {
    __kind: 'Crowdloan'
    value: CrowdloanEvent
}

export interface Event_ElectionProviderMultiPhase {
    __kind: 'ElectionProviderMultiPhase'
    value: ElectionProviderMultiPhaseEvent
}

export interface Event_ExtrinsicPause {
    __kind: 'ExtrinsicPause'
    value: ExtrinsicPauseEvent
}

export interface Event_FellowshipCollective {
    __kind: 'FellowshipCollective'
    value: FellowshipCollectiveEvent
}

export interface Event_FellowshipReferenda {
    __kind: 'FellowshipReferenda'
    value: FellowshipReferendaEvent
}

export interface Event_FuelTanks {
    __kind: 'FuelTanks'
    value: FuelTanksEvent
}

export interface Event_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaEvent
}

export interface Event_Hrmp {
    __kind: 'Hrmp'
    value: HrmpEvent
}

export interface Event_Identity {
    __kind: 'Identity'
    value: IdentityEvent
}

export interface Event_ImOnline {
    __kind: 'ImOnline'
    value: ImOnlineEvent
}

export interface Event_Marketplace {
    __kind: 'Marketplace'
    value: MarketplaceEvent
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

export interface Event_NominationPools {
    __kind: 'NominationPools'
    value: NominationPoolsEvent
}

export interface Event_Offences {
    __kind: 'Offences'
    value: OffencesEvent
}

export interface Event_ParaInclusion {
    __kind: 'ParaInclusion'
    value: ParaInclusionEvent
}

export interface Event_Paras {
    __kind: 'Paras'
    value: ParasEvent
}

export interface Event_ParasDisputes {
    __kind: 'ParasDisputes'
    value: ParasDisputesEvent
}

export interface Event_Preimage {
    __kind: 'Preimage'
    value: PreimageEvent
}

export interface Event_Proxy {
    __kind: 'Proxy'
    value: ProxyEvent
}

export interface Event_Referenda {
    __kind: 'Referenda'
    value: ReferendaEvent
}

export interface Event_Registrar {
    __kind: 'Registrar'
    value: RegistrarEvent
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

export interface Event_Slots {
    __kind: 'Slots'
    value: SlotsEvent
}

export interface Event_StakeExchange {
    __kind: 'StakeExchange'
    value: StakeExchangeEvent
}

export interface Event_Staking {
    __kind: 'Staking'
    value: StakingEvent
}

export interface Event_Sudo {
    __kind: 'Sudo'
    value: SudoEvent
}

export interface Event_System {
    __kind: 'System'
    value: SystemEvent
}

export interface Event_TransactionPayment {
    __kind: 'TransactionPayment'
    value: TransactionPaymentEvent
}

export interface Event_Treasury {
    __kind: 'Treasury'
    value: TreasuryEvent
}

export interface Event_Utility {
    __kind: 'Utility'
    value: UtilityEvent
}

export interface Event_ValidatorManager {
    __kind: 'ValidatorManager'
    value: ValidatorManagerEvent
}

export interface Event_VoteManager {
    __kind: 'VoteManager'
    value: VoteManagerEvent
}

export interface Event_VoterList {
    __kind: 'VoterList'
    value: VoterListEvent
}

export interface Event_Whitelist {
    __kind: 'Whitelist'
    value: WhitelistEvent
}

export interface Event_XcmPallet {
    __kind: 'XcmPallet'
    value: XcmPalletEvent
}

/**
 * The `Event` enum of this pallet
 */
export type XcmPalletEvent =
    | XcmPalletEvent_AssetsClaimed
    | XcmPalletEvent_AssetsTrapped
    | XcmPalletEvent_Attempted
    | XcmPalletEvent_FeesPaid
    | XcmPalletEvent_InvalidQuerier
    | XcmPalletEvent_InvalidQuerierVersion
    | XcmPalletEvent_InvalidResponder
    | XcmPalletEvent_InvalidResponderVersion
    | XcmPalletEvent_Notified
    | XcmPalletEvent_NotifyDecodeFailed
    | XcmPalletEvent_NotifyDispatchError
    | XcmPalletEvent_NotifyOverweight
    | XcmPalletEvent_NotifyTargetMigrationFail
    | XcmPalletEvent_NotifyTargetSendFail
    | XcmPalletEvent_ResponseReady
    | XcmPalletEvent_ResponseTaken
    | XcmPalletEvent_Sent
    | XcmPalletEvent_SupportedVersionChanged
    | XcmPalletEvent_UnexpectedResponse
    | XcmPalletEvent_VersionChangeNotified
    | XcmPalletEvent_VersionMigrationFinished
    | XcmPalletEvent_VersionNotifyRequested
    | XcmPalletEvent_VersionNotifyStarted
    | XcmPalletEvent_VersionNotifyUnrequested

/**
 * Some assets have been claimed from an asset trap
 */
export interface XcmPalletEvent_AssetsClaimed {
    __kind: 'AssetsClaimed'
    hash: H256
    origin: V4Location
    assets: VersionedAssets
}

/**
 * Some assets have been placed in an asset trap.
 */
export interface XcmPalletEvent_AssetsTrapped {
    __kind: 'AssetsTrapped'
    hash: H256
    origin: V4Location
    assets: VersionedAssets
}

/**
 * Execution of an XCM message was attempted.
 */
export interface XcmPalletEvent_Attempted {
    __kind: 'Attempted'
    outcome: V4Outcome
}

/**
 * Fees were paid from a location for an operation (often for using `SendXcm`).
 */
export interface XcmPalletEvent_FeesPaid {
    __kind: 'FeesPaid'
    paying: V4Location
    fees: V4Asset[]
}

/**
 * Expected query response has been received but the querier location of the response does
 * not match the expected. The query remains registered for a later, valid, response to
 * be received and acted upon.
 */
export interface XcmPalletEvent_InvalidQuerier {
    __kind: 'InvalidQuerier'
    origin: V4Location
    queryId: bigint
    expectedQuerier: V4Location
    maybeActualQuerier?: V4Location | undefined
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
export interface XcmPalletEvent_InvalidQuerierVersion {
    __kind: 'InvalidQuerierVersion'
    origin: V4Location
    queryId: bigint
}

/**
 * Expected query response has been received but the origin location of the response does
 * not match that expected. The query remains registered for a later, valid, response to
 * be received and acted upon.
 */
export interface XcmPalletEvent_InvalidResponder {
    __kind: 'InvalidResponder'
    origin: V4Location
    queryId: bigint
    expectedLocation?: V4Location | undefined
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
export interface XcmPalletEvent_InvalidResponderVersion {
    __kind: 'InvalidResponderVersion'
    origin: V4Location
    queryId: bigint
}

/**
 * Query response has been received and query is removed. The registered notification has
 * been dispatched and executed successfully.
 */
export interface XcmPalletEvent_Notified {
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
export interface XcmPalletEvent_NotifyDecodeFailed {
    __kind: 'NotifyDecodeFailed'
    queryId: bigint
    palletIndex: number
    callIndex: number
}

/**
 * Query response has been received and query is removed. There was a general error with
 * dispatching the notification call.
 */
export interface XcmPalletEvent_NotifyDispatchError {
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
export interface XcmPalletEvent_NotifyOverweight {
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
export interface XcmPalletEvent_NotifyTargetMigrationFail {
    __kind: 'NotifyTargetMigrationFail'
    location: VersionedLocation
    queryId: bigint
}

/**
 * A given location which had a version change subscription was dropped owing to an error
 * sending the notification to it.
 */
export interface XcmPalletEvent_NotifyTargetSendFail {
    __kind: 'NotifyTargetSendFail'
    location: V4Location
    queryId: bigint
    error: V3Error
}

/**
 * Query response has been received and is ready for taking with `take_response`. There is
 * no registered notification call.
 */
export interface XcmPalletEvent_ResponseReady {
    __kind: 'ResponseReady'
    queryId: bigint
    response: V4Response
}

/**
 * Received query response has been read and removed.
 */
export interface XcmPalletEvent_ResponseTaken {
    __kind: 'ResponseTaken'
    queryId: bigint
}

/**
 * A XCM message was sent.
 */
export interface XcmPalletEvent_Sent {
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
export interface XcmPalletEvent_SupportedVersionChanged {
    __kind: 'SupportedVersionChanged'
    location: V4Location
    version: number
}

/**
 * Query response received which does not match a registered query. This may be because a
 * matching query was never registered, it may be because it is a duplicate response, or
 * because the query timed out.
 */
export interface XcmPalletEvent_UnexpectedResponse {
    __kind: 'UnexpectedResponse'
    origin: V4Location
    queryId: bigint
}

/**
 * An XCM version change notification message has been attempted to be sent.
 *
 * The cost of sending it (borne by the chain) is included.
 */
export interface XcmPalletEvent_VersionChangeNotified {
    __kind: 'VersionChangeNotified'
    destination: V4Location
    result: number
    cost: V4Asset[]
    messageId: Bytes
}

/**
 * A XCM version migration finished.
 */
export interface XcmPalletEvent_VersionMigrationFinished {
    __kind: 'VersionMigrationFinished'
    version: number
}

/**
 * We have requested that a remote chain send us XCM version change notifications.
 */
export interface XcmPalletEvent_VersionNotifyRequested {
    __kind: 'VersionNotifyRequested'
    destination: V4Location
    cost: V4Asset[]
    messageId: Bytes
}

/**
 * A remote has requested XCM version change notification from us and we have honored it.
 * A version information message is sent to them and its cost is included.
 */
export interface XcmPalletEvent_VersionNotifyStarted {
    __kind: 'VersionNotifyStarted'
    destination: V4Location
    cost: V4Asset[]
    messageId: Bytes
}

/**
 * We have requested that a remote chain stops sending us XCM version change
 * notifications.
 */
export interface XcmPalletEvent_VersionNotifyUnrequested {
    __kind: 'VersionNotifyUnrequested'
    destination: V4Location
    cost: V4Asset[]
    messageId: Bytes
}

export type V4Instruction =
    | V4Instruction_AliasOrigin
    | V4Instruction_BurnAsset
    | V4Instruction_BuyExecution
    | V4Instruction_ClaimAsset
    | V4Instruction_ClearError
    | V4Instruction_ClearOrigin
    | V4Instruction_ClearTopic
    | V4Instruction_ClearTransactStatus
    | V4Instruction_DepositAsset
    | V4Instruction_DepositReserveAsset
    | V4Instruction_DescendOrigin
    | V4Instruction_ExchangeAsset
    | V4Instruction_ExpectAsset
    | V4Instruction_ExpectError
    | V4Instruction_ExpectOrigin
    | V4Instruction_ExpectPallet
    | V4Instruction_ExpectTransactStatus
    | V4Instruction_ExportMessage
    | V4Instruction_HrmpChannelAccepted
    | V4Instruction_HrmpChannelClosing
    | V4Instruction_HrmpNewChannelOpenRequest
    | V4Instruction_InitiateReserveWithdraw
    | V4Instruction_InitiateTeleport
    | V4Instruction_LockAsset
    | V4Instruction_NoteUnlockable
    | V4Instruction_QueryPallet
    | V4Instruction_QueryResponse
    | V4Instruction_ReceiveTeleportedAsset
    | V4Instruction_RefundSurplus
    | V4Instruction_ReportError
    | V4Instruction_ReportHolding
    | V4Instruction_ReportTransactStatus
    | V4Instruction_RequestUnlock
    | V4Instruction_ReserveAssetDeposited
    | V4Instruction_SetAppendix
    | V4Instruction_SetErrorHandler
    | V4Instruction_SetFeesMode
    | V4Instruction_SetTopic
    | V4Instruction_SubscribeVersion
    | V4Instruction_Transact
    | V4Instruction_TransferAsset
    | V4Instruction_TransferReserveAsset
    | V4Instruction_Trap
    | V4Instruction_UniversalOrigin
    | V4Instruction_UnlockAsset
    | V4Instruction_UnpaidExecution
    | V4Instruction_UnsubscribeVersion
    | V4Instruction_WithdrawAsset

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
    value?: [number, V3Error] | undefined
}

export interface V4Instruction_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value?: V4Location | undefined
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
    querier?: V4Location | undefined
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
    checkOrigin?: V4Location | undefined
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

export interface V4QueryResponseInfo {
    destination: V4Location
    queryId: bigint
    maxWeight: Weight
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

export type V3WeightLimit = V3WeightLimit_Limited | V3WeightLimit_Unlimited

export interface V3WeightLimit_Limited {
    __kind: 'Limited'
    value: Weight
}

export interface V3WeightLimit_Unlimited {
    __kind: 'Unlimited'
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

/**
 * The `Event` enum of this pallet
 */
export type WhitelistEvent =
    | WhitelistEvent_CallWhitelisted
    | WhitelistEvent_WhitelistedCallDispatched
    | WhitelistEvent_WhitelistedCallRemoved

export interface WhitelistEvent_CallWhitelisted {
    __kind: 'CallWhitelisted'
    callHash: H256
}

export interface WhitelistEvent_WhitelistedCallDispatched {
    __kind: 'WhitelistedCallDispatched'
    callHash: H256
    result: Result<PostDispatchInfo, DispatchErrorWithPostInfo>
}

export interface WhitelistEvent_WhitelistedCallRemoved {
    __kind: 'WhitelistedCallRemoved'
    callHash: H256
}

export interface DispatchErrorWithPostInfo {
    postInfo: PostDispatchInfo
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

export interface PostDispatchInfo {
    actualWeight?: Weight | undefined
    paysFee: Pays
}

export type Pays = Pays_No | Pays_Yes

export interface Pays_No {
    __kind: 'No'
}

export interface Pays_Yes {
    __kind: 'Yes'
}

/**
 * The `Event` enum of this pallet
 */
export type VoterListEvent = VoterListEvent_Rebagged | VoterListEvent_ScoreUpdated

/**
 * Moved an account from one bag to another.
 */
export interface VoterListEvent_Rebagged {
    __kind: 'Rebagged'
    who: AccountId32
    from: bigint
    to: bigint
}

/**
 * Updated the score of some account to the given amount.
 */
export interface VoterListEvent_ScoreUpdated {
    __kind: 'ScoreUpdated'
    who: AccountId32
    newScore: bigint
}

/**
 * The `Event` enum of this pallet
 */
export type VoteManagerEvent = VoteManagerEvent_Voted

/**
 * An account has voted in a referendum
 */
export interface VoteManagerEvent_Voted {
    __kind: 'Voted'
    voter: AccountId32
    pollIndex: number
    vote: AccountVote
}

export type AccountVote = AccountVote_Split | AccountVote_SplitAbstain | AccountVote_Standard

export interface AccountVote_Split {
    __kind: 'Split'
    aye: bigint
    nay: bigint
}

export interface AccountVote_SplitAbstain {
    __kind: 'SplitAbstain'
    aye: bigint
    nay: bigint
    abstain: bigint
}

export interface AccountVote_Standard {
    __kind: 'Standard'
    vote: Vote
    balance: bigint
}

export type Vote = number

/**
 * The `Event` enum of this pallet
 */
export type ValidatorManagerEvent =
    | ValidatorManagerEvent_ValidatorsDeregistered
    | ValidatorManagerEvent_ValidatorsRegistered

/**
 * Validators were removed from the set.
 */
export interface ValidatorManagerEvent_ValidatorsDeregistered {
    __kind: 'ValidatorsDeregistered'
    value: AccountId32[]
}

/**
 * New validators were added to the set.
 */
export interface ValidatorManagerEvent_ValidatorsRegistered {
    __kind: 'ValidatorsRegistered'
    value: AccountId32[]
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

/**
 * The `Event` enum of this pallet
 */
export type TreasuryEvent =
    | TreasuryEvent_AssetSpendApproved
    | TreasuryEvent_AssetSpendVoided
    | TreasuryEvent_Awarded
    | TreasuryEvent_Burnt
    | TreasuryEvent_Deposit
    | TreasuryEvent_Paid
    | TreasuryEvent_PaymentFailed
    | TreasuryEvent_Proposed
    | TreasuryEvent_Rejected
    | TreasuryEvent_Rollover
    | TreasuryEvent_SpendApproved
    | TreasuryEvent_SpendProcessed
    | TreasuryEvent_Spending
    | TreasuryEvent_UpdatedInactive

/**
 * A new asset spend proposal has been approved.
 */
export interface TreasuryEvent_AssetSpendApproved {
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
export interface TreasuryEvent_AssetSpendVoided {
    __kind: 'AssetSpendVoided'
    index: number
}

/**
 * Some funds have been allocated.
 */
export interface TreasuryEvent_Awarded {
    __kind: 'Awarded'
    proposalIndex: number
    award: bigint
    account: AccountId32
}

/**
 * Some of our funds have been burnt.
 */
export interface TreasuryEvent_Burnt {
    __kind: 'Burnt'
    burntFunds: bigint
}

/**
 * Some funds have been deposited.
 */
export interface TreasuryEvent_Deposit {
    __kind: 'Deposit'
    value: bigint
}

/**
 * A payment happened.
 */
export interface TreasuryEvent_Paid {
    __kind: 'Paid'
    index: number
}

/**
 * A payment failed and can be retried.
 */
export interface TreasuryEvent_PaymentFailed {
    __kind: 'PaymentFailed'
    index: number
}

/**
 * New proposal.
 */
export interface TreasuryEvent_Proposed {
    __kind: 'Proposed'
    proposalIndex: number
}

/**
 * A proposal was rejected; funds were slashed.
 */
export interface TreasuryEvent_Rejected {
    __kind: 'Rejected'
    proposalIndex: number
    slashed: bigint
}

/**
 * Spending has finished; this is the amount that rolls over until next spend.
 */
export interface TreasuryEvent_Rollover {
    __kind: 'Rollover'
    rolloverBalance: bigint
}

/**
 * A new spend proposal has been approved.
 */
export interface TreasuryEvent_SpendApproved {
    __kind: 'SpendApproved'
    proposalIndex: number
    amount: bigint
    beneficiary: AccountId32
}

/**
 * A spend was processed and removed from the storage. It might have been successfully
 * paid or it may have expired.
 */
export interface TreasuryEvent_SpendProcessed {
    __kind: 'SpendProcessed'
    index: number
}

/**
 * We have ended a spend period and will now allocate funds.
 */
export interface TreasuryEvent_Spending {
    __kind: 'Spending'
    budgetRemaining: bigint
}

/**
 * The inactive funds of the pallet have been updated.
 */
export interface TreasuryEvent_UpdatedInactive {
    __kind: 'UpdatedInactive'
    reactivated: bigint
    deactivated: bigint
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
 * Event for the System pallet.
 */
export type SystemEvent =
    | SystemEvent_CodeUpdated
    | SystemEvent_ExtrinsicFailed
    | SystemEvent_ExtrinsicSuccess
    | SystemEvent_KilledAccount
    | SystemEvent_NewAccount
    | SystemEvent_Remarked
    | SystemEvent_UpgradeAuthorized

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
    old?: AccountId32 | undefined
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
export type StakingEvent =
    | StakingEvent_Bonded
    | StakingEvent_Chilled
    | StakingEvent_ControllerBatchDeprecated
    | StakingEvent_EraPaid
    | StakingEvent_ForceEra
    | StakingEvent_Kicked
    | StakingEvent_OldSlashingReportDiscarded
    | StakingEvent_PayoutStarted
    | StakingEvent_Rewarded
    | StakingEvent_SlashReported
    | StakingEvent_Slashed
    | StakingEvent_SnapshotTargetsSizeExceeded
    | StakingEvent_SnapshotVotersSizeExceeded
    | StakingEvent_StakersElected
    | StakingEvent_StakingElectionFailed
    | StakingEvent_Unbonded
    | StakingEvent_ValidatorPrefsSet
    | StakingEvent_Withdrawn

/**
 * An account has bonded this amount. \[stash, amount\]
 *
 * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
 * it will not be emitted for staking rewards when they are added to stake.
 */
export interface StakingEvent_Bonded {
    __kind: 'Bonded'
    stash: AccountId32
    amount: bigint
}

/**
 * An account has stopped participating as either a validator or nominator.
 */
export interface StakingEvent_Chilled {
    __kind: 'Chilled'
    stash: AccountId32
}

/**
 * Report of a controller batch deprecation.
 */
export interface StakingEvent_ControllerBatchDeprecated {
    __kind: 'ControllerBatchDeprecated'
    failures: number
}

/**
 * The era payout has been set; the first balance is the validator-payout; the second is
 * the remainder from the maximum amount of reward.
 */
export interface StakingEvent_EraPaid {
    __kind: 'EraPaid'
    eraIndex: number
    validatorPayout: bigint
    remainder: bigint
}

/**
 * A new force era mode was set.
 */
export interface StakingEvent_ForceEra {
    __kind: 'ForceEra'
    mode: Forcing
}

/**
 * A nominator has been kicked from a validator.
 */
export interface StakingEvent_Kicked {
    __kind: 'Kicked'
    nominator: AccountId32
    stash: AccountId32
}

/**
 * An old slashing report from a prior era was discarded because it could
 * not be processed.
 */
export interface StakingEvent_OldSlashingReportDiscarded {
    __kind: 'OldSlashingReportDiscarded'
    sessionIndex: number
}

/**
 * The stakers' rewards are getting paid.
 */
export interface StakingEvent_PayoutStarted {
    __kind: 'PayoutStarted'
    eraIndex: number
    validatorStash: AccountId32
}

/**
 * The nominator has been rewarded by this amount to this destination.
 */
export interface StakingEvent_Rewarded {
    __kind: 'Rewarded'
    stash: AccountId32
    dest: RewardDestination
    amount: bigint
}

/**
 * A slash for the given validator, for the given percentage of their stake, at the given
 * era as been reported.
 */
export interface StakingEvent_SlashReported {
    __kind: 'SlashReported'
    validator: AccountId32
    fraction: Perbill
    slashEra: number
}

/**
 * A staker (validator or nominator) has been slashed by the given amount.
 */
export interface StakingEvent_Slashed {
    __kind: 'Slashed'
    staker: AccountId32
    amount: bigint
}

/**
 * Targets size limit reached.
 */
export interface StakingEvent_SnapshotTargetsSizeExceeded {
    __kind: 'SnapshotTargetsSizeExceeded'
    size: number
}

/**
 * Voters size limit reached.
 */
export interface StakingEvent_SnapshotVotersSizeExceeded {
    __kind: 'SnapshotVotersSizeExceeded'
    size: number
}

/**
 * A new set of stakers was elected.
 */
export interface StakingEvent_StakersElected {
    __kind: 'StakersElected'
}

/**
 * The election failed. No new era is planned.
 */
export interface StakingEvent_StakingElectionFailed {
    __kind: 'StakingElectionFailed'
}

/**
 * An account has unbonded this amount.
 */
export interface StakingEvent_Unbonded {
    __kind: 'Unbonded'
    stash: AccountId32
    amount: bigint
}

/**
 * A validator has set their preferences.
 */
export interface StakingEvent_ValidatorPrefsSet {
    __kind: 'ValidatorPrefsSet'
    stash: AccountId32
    prefs: ValidatorPrefs
}

/**
 * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
 * from the unlocking queue.
 */
export interface StakingEvent_Withdrawn {
    __kind: 'Withdrawn'
    stash: AccountId32
    amount: bigint
}

export interface ValidatorPrefs {
    commission: number
    blocked: boolean
}

export type Forcing = Forcing_ForceAlways | Forcing_ForceNew | Forcing_ForceNone | Forcing_NotForcing

export interface Forcing_ForceAlways {
    __kind: 'ForceAlways'
}

export interface Forcing_ForceNew {
    __kind: 'ForceNew'
}

export interface Forcing_ForceNone {
    __kind: 'ForceNone'
}

export interface Forcing_NotForcing {
    __kind: 'NotForcing'
}

/**
 * The pallet's event type.
 */
export type StakeExchangeEvent =
    | StakeExchangeEvent_BuyOrderCompleted
    | StakeExchangeEvent_LiquidityAdded
    | StakeExchangeEvent_LiquidityConfigUpdated
    | StakeExchangeEvent_LiquidityWithdrawn
    | StakeExchangeEvent_OfferCancelled
    | StakeExchangeEvent_OfferCompleted
    | StakeExchangeEvent_OfferCreated

/**
 * Buy order was completed
 */
export interface StakeExchangeEvent_BuyOrderCompleted {
    __kind: 'BuyOrderCompleted'
    /**
     * AccountId of the buyer
     */
    who: AccountId32
    /**
     * The tokenId that was exchanged
     */
    tokenId: bigint
    /**
     * The amount of tokens transferred
     */
    amount: bigint
    /**
     * The rate at which the order was completed
     */
    rate: Perbill
    /**
     * The creator of the offer
     */
    offerCreator: AccountId32
}

/**
 * Liquidity was added to a offer
 */
export interface StakeExchangeEvent_LiquidityAdded {
    __kind: 'LiquidityAdded'
    /**
     * ID of the account
     */
    who: AccountId32
    /**
     * ID of the offer
     */
    offerId: bigint
}

/**
 * Liquidity config was set for account
 */
export interface StakeExchangeEvent_LiquidityConfigUpdated {
    __kind: 'LiquidityConfigUpdated'
    /**
     * ID of the offer
     */
    who: AccountId32
    /**
     * The offer that was placed
     */
    config: LiquidityAccountConfig
}

/**
 * Liquidity was withdrawn from a offer
 */
export interface StakeExchangeEvent_LiquidityWithdrawn {
    __kind: 'LiquidityWithdrawn'
    /**
     * ID of the account
     */
    who: AccountId32
    /**
     * ID of the offer
     */
    offerId: bigint
}

/**
 * A offer was cancelled
 */
export interface StakeExchangeEvent_OfferCancelled {
    __kind: 'OfferCancelled'
    /**
     * ID of the offer
     */
    offerId: bigint
}

/**
 * A offer was completed and removed
 */
export interface StakeExchangeEvent_OfferCompleted {
    __kind: 'OfferCompleted'
    /**
     * ID of the offer
     */
    offerId: bigint
}

/**
 * A offer was placed
 */
export interface StakeExchangeEvent_OfferCreated {
    __kind: 'OfferCreated'
    /**
     * ID of the offer
     */
    offerId: bigint
    /**
     * The offer that was placed
     */
    offer: Offer
}

export interface Offer {
    account: AccountId32
    total: bigint
    rate: number
    minAverageRewardRate: bigint
    deposit: bigint
    tokenFilter: TokenFilter
}

export type TokenFilter = TokenFilter_All | TokenFilter_BlockList | TokenFilter_Whitelist

export interface TokenFilter_All {
    __kind: 'All'
}

export interface TokenFilter_BlockList {
    __kind: 'BlockList'
    value: bigint[]
}

export interface TokenFilter_Whitelist {
    __kind: 'Whitelist'
    value: bigint[]
}

export interface LiquidityAccountConfig {
    tokenFilter: TokenFilter
}

/**
 * The `Event` enum of this pallet
 */
export type SlotsEvent = SlotsEvent_Leased | SlotsEvent_NewLeasePeriod

/**
 * A para has won the right to a continuous set of lease periods as a parachain.
 * First balance is any extra amount reserved on top of the para's existing deposit.
 * Second balance is the total amount reserved.
 */
export interface SlotsEvent_Leased {
    __kind: 'Leased'
    paraId: Id
    leaser: AccountId32
    periodBegin: number
    periodCount: number
    extraReserved: bigint
    totalAmount: bigint
}

/**
 * A new `[lease_period]` is beginning.
 */
export interface SlotsEvent_NewLeasePeriod {
    __kind: 'NewLeasePeriod'
    leasePeriod: number
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
    | SchedulerEvent_RetryCancelled
    | SchedulerEvent_RetryFailed
    | SchedulerEvent_RetrySet
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
 * Cancel a retry configuration for some task.
 */
export interface SchedulerEvent_RetryCancelled {
    __kind: 'RetryCancelled'
    task: [number, number]
    id?: Bytes | undefined
}

/**
 * The given task was unable to be retried since the agenda is full at that block or there
 * was not enough weight to reschedule it.
 */
export interface SchedulerEvent_RetryFailed {
    __kind: 'RetryFailed'
    task: [number, number]
    id?: Bytes | undefined
}

/**
 * Set a retry configuration for some task.
 */
export interface SchedulerEvent_RetrySet {
    __kind: 'RetrySet'
    task: [number, number]
    id?: Bytes | undefined
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
export type SafeModeEvent =
    | SafeModeEvent_CannotDeposit
    | SafeModeEvent_CannotRelease
    | SafeModeEvent_DepositPlaced
    | SafeModeEvent_DepositReleased
    | SafeModeEvent_DepositSlashed
    | SafeModeEvent_Entered
    | SafeModeEvent_Exited
    | SafeModeEvent_Extended

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
export type RegistrarEvent =
    | RegistrarEvent_Deregistered
    | RegistrarEvent_Registered
    | RegistrarEvent_Reserved
    | RegistrarEvent_Swapped

export interface RegistrarEvent_Deregistered {
    __kind: 'Deregistered'
    paraId: Id
}

export interface RegistrarEvent_Registered {
    __kind: 'Registered'
    paraId: Id
    manager: AccountId32
}

export interface RegistrarEvent_Reserved {
    __kind: 'Reserved'
    paraId: Id
    who: AccountId32
}

export interface RegistrarEvent_Swapped {
    __kind: 'Swapped'
    paraId: Id
    otherId: Id
}

/**
 * The `Event` enum of this pallet
 */
export type ReferendaEvent =
    | ReferendaEvent_Approved
    | ReferendaEvent_Cancelled
    | ReferendaEvent_ConfirmAborted
    | ReferendaEvent_ConfirmStarted
    | ReferendaEvent_Confirmed
    | ReferendaEvent_DecisionDepositPlaced
    | ReferendaEvent_DecisionDepositRefunded
    | ReferendaEvent_DecisionStarted
    | ReferendaEvent_DepositSlashed
    | ReferendaEvent_Killed
    | ReferendaEvent_MetadataCleared
    | ReferendaEvent_MetadataSet
    | ReferendaEvent_Rejected
    | ReferendaEvent_SubmissionDepositRefunded
    | ReferendaEvent_Submitted
    | ReferendaEvent_TimedOut

/**
 * A referendum has been approved and its proposal has been scheduled.
 */
export interface ReferendaEvent_Approved {
    __kind: 'Approved'
    /**
     * Index of the referendum.
     */
    index: number
}

/**
 * A referendum has been cancelled.
 */
export interface ReferendaEvent_Cancelled {
    __kind: 'Cancelled'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Tally
}

export interface ReferendaEvent_ConfirmAborted {
    __kind: 'ConfirmAborted'
    /**
     * Index of the referendum.
     */
    index: number
}

export interface ReferendaEvent_ConfirmStarted {
    __kind: 'ConfirmStarted'
    /**
     * Index of the referendum.
     */
    index: number
}

/**
 * A referendum has ended its confirmation phase and is ready for approval.
 */
export interface ReferendaEvent_Confirmed {
    __kind: 'Confirmed'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Tally
}

/**
 * The decision deposit has been placed.
 */
export interface ReferendaEvent_DecisionDepositPlaced {
    __kind: 'DecisionDepositPlaced'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The account who placed the deposit.
     */
    who: AccountId32
    /**
     * The amount placed by the account.
     */
    amount: bigint
}

/**
 * The decision deposit has been refunded.
 */
export interface ReferendaEvent_DecisionDepositRefunded {
    __kind: 'DecisionDepositRefunded'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The account who placed the deposit.
     */
    who: AccountId32
    /**
     * The amount placed by the account.
     */
    amount: bigint
}

/**
 * A referendum has moved into the deciding phase.
 */
export interface ReferendaEvent_DecisionStarted {
    __kind: 'DecisionStarted'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The track (and by extension proposal dispatch origin) of this referendum.
     */
    track: number
    /**
     * The proposal for the referendum.
     */
    proposal: Bounded
    /**
     * The current tally of votes in this referendum.
     */
    tally: Tally
}

/**
 * A deposit has been slashed.
 */
export interface ReferendaEvent_DepositSlashed {
    __kind: 'DepositSlashed'
    /**
     * The account who placed the deposit.
     */
    who: AccountId32
    /**
     * The amount placed by the account.
     */
    amount: bigint
}

/**
 * A referendum has been killed.
 */
export interface ReferendaEvent_Killed {
    __kind: 'Killed'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Tally
}

/**
 * Metadata for a referendum has been cleared.
 */
export interface ReferendaEvent_MetadataCleared {
    __kind: 'MetadataCleared'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * Preimage hash.
     */
    hash: H256
}

/**
 * Metadata for a referendum has been set.
 */
export interface ReferendaEvent_MetadataSet {
    __kind: 'MetadataSet'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * Preimage hash.
     */
    hash: H256
}

/**
 * A proposal has been rejected by referendum.
 */
export interface ReferendaEvent_Rejected {
    __kind: 'Rejected'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Tally
}

/**
 * The submission deposit has been refunded.
 */
export interface ReferendaEvent_SubmissionDepositRefunded {
    __kind: 'SubmissionDepositRefunded'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The account who placed the deposit.
     */
    who: AccountId32
    /**
     * The amount placed by the account.
     */
    amount: bigint
}

/**
 * A referendum has been submitted.
 */
export interface ReferendaEvent_Submitted {
    __kind: 'Submitted'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The track (and by extension proposal dispatch origin) of this referendum.
     */
    track: number
    /**
     * The proposal for the referendum.
     */
    proposal: Bounded
}

/**
 * A referendum has been timed out without being decided.
 */
export interface ReferendaEvent_TimedOut {
    __kind: 'TimedOut'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Tally
}

/**
 * The `Event` enum of this pallet
 */
export type ProxyEvent =
    | ProxyEvent_Announced
    | ProxyEvent_ProxyAdded
    | ProxyEvent_ProxyExecuted
    | ProxyEvent_ProxyRemoved
    | ProxyEvent_PureCreated

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
 * The `Event` enum of this pallet
 */
export type ParasDisputesEvent =
    | ParasDisputesEvent_DisputeConcluded
    | ParasDisputesEvent_DisputeInitiated
    | ParasDisputesEvent_Revert

/**
 * A dispute has concluded for or against a candidate.
 * `\[para id, candidate hash, dispute result\]`
 */
export interface ParasDisputesEvent_DisputeConcluded {
    __kind: 'DisputeConcluded'
    value: [CandidateHash, DisputeResult]
}

/**
 * A dispute has been initiated. \[candidate hash, dispute location\]
 */
export interface ParasDisputesEvent_DisputeInitiated {
    __kind: 'DisputeInitiated'
    value: [CandidateHash, DisputeLocation]
}

/**
 * A dispute has concluded with supermajority against a candidate.
 * Block authors should no longer build on top of this head and should
 * instead revert the block at the given height. This should be the
 * number of the child of the last known valid block in the chain.
 */
export interface ParasDisputesEvent_Revert {
    __kind: 'Revert'
    value: number
}

export type DisputeLocation = DisputeLocation_Local | DisputeLocation_Remote

export interface DisputeLocation_Local {
    __kind: 'Local'
}

export interface DisputeLocation_Remote {
    __kind: 'Remote'
}

export type DisputeResult = DisputeResult_Invalid | DisputeResult_Valid

export interface DisputeResult_Invalid {
    __kind: 'Invalid'
}

export interface DisputeResult_Valid {
    __kind: 'Valid'
}

/**
 * The `Event` enum of this pallet
 */
export type ParasEvent =
    | ParasEvent_ActionQueued
    | ParasEvent_CodeUpgradeScheduled
    | ParasEvent_CurrentCodeUpdated
    | ParasEvent_CurrentHeadUpdated
    | ParasEvent_NewHeadNoted
    | ParasEvent_PvfCheckAccepted
    | ParasEvent_PvfCheckRejected
    | ParasEvent_PvfCheckStarted

/**
 * A para has been queued to execute pending actions. `para_id`
 */
export interface ParasEvent_ActionQueued {
    __kind: 'ActionQueued'
    value: [Id, number]
}

/**
 * A code upgrade has been scheduled for a Para. `para_id`
 */
export interface ParasEvent_CodeUpgradeScheduled {
    __kind: 'CodeUpgradeScheduled'
    value: Id
}

/**
 * Current code has been updated for a Para. `para_id`
 */
export interface ParasEvent_CurrentCodeUpdated {
    __kind: 'CurrentCodeUpdated'
    value: Id
}

/**
 * Current head has been updated for a Para. `para_id`
 */
export interface ParasEvent_CurrentHeadUpdated {
    __kind: 'CurrentHeadUpdated'
    value: Id
}

/**
 * A new head has been noted for a Para. `para_id`
 */
export interface ParasEvent_NewHeadNoted {
    __kind: 'NewHeadNoted'
    value: Id
}

/**
 * The given validation code was accepted by the PVF pre-checking vote.
 * `code_hash` `para_id`
 */
export interface ParasEvent_PvfCheckAccepted {
    __kind: 'PvfCheckAccepted'
    value: [ValidationCodeHash, Id]
}

/**
 * The given validation code was rejected by the PVF pre-checking vote.
 * `code_hash` `para_id`
 */
export interface ParasEvent_PvfCheckRejected {
    __kind: 'PvfCheckRejected'
    value: [ValidationCodeHash, Id]
}

/**
 * The given para either initiated or subscribed to a PVF check for the given validation
 * code. `code_hash` `para_id`
 */
export interface ParasEvent_PvfCheckStarted {
    __kind: 'PvfCheckStarted'
    value: [ValidationCodeHash, Id]
}

/**
 * The `Event` enum of this pallet
 */
export type ParaInclusionEvent =
    | ParaInclusionEvent_CandidateBacked
    | ParaInclusionEvent_CandidateIncluded
    | ParaInclusionEvent_CandidateTimedOut
    | ParaInclusionEvent_UpwardMessagesReceived

/**
 * A candidate was backed. `[candidate, head_data]`
 */
export interface ParaInclusionEvent_CandidateBacked {
    __kind: 'CandidateBacked'
    value: [V6CandidateReceipt, HeadData, V6CoreIndex, V6GroupIndex]
}

/**
 * A candidate was included. `[candidate, head_data]`
 */
export interface ParaInclusionEvent_CandidateIncluded {
    __kind: 'CandidateIncluded'
    value: [V6CandidateReceipt, HeadData, V6CoreIndex, V6GroupIndex]
}

/**
 * A candidate timed out. `[candidate, head_data]`
 */
export interface ParaInclusionEvent_CandidateTimedOut {
    __kind: 'CandidateTimedOut'
    value: [V6CandidateReceipt, HeadData, V6CoreIndex]
}

/**
 * Some upward messages have been received and will be processed.
 */
export interface ParaInclusionEvent_UpwardMessagesReceived {
    __kind: 'UpwardMessagesReceived'
    from: Id
    count: number
}

export type V6GroupIndex = number

export type HeadData = Bytes

/**
 * Events type.
 */
export type OffencesEvent = OffencesEvent_Offence

/**
 * There is an offence reported of the given `kind` happened at the `session_index` and
 * (kind-specific) time slot. This event is not deposited for duplicate slashes.
 * \[kind, timeslot\].
 */
export interface OffencesEvent_Offence {
    __kind: 'Offence'
    kind: Bytes
    timeslot: Bytes
}

/**
 * Events of this pallet.
 */
export type NominationPoolsEvent =
    | NominationPoolsEvent_Bonded
    | NominationPoolsEvent_CommissionUpdated
    | NominationPoolsEvent_Created
    | NominationPoolsEvent_Destroyed
    | NominationPoolsEvent_EarlyBirdBonusCalculated
    | NominationPoolsEvent_EarlyBirdBonusDistributed
    | NominationPoolsEvent_EarlyBirdBonusPaid
    | NominationPoolsEvent_EarlyBirdBonusPaymentUnlocked
    | NominationPoolsEvent_EarlyBirdSharesCaptured
    | NominationPoolsEvent_EraRewardsProcessed
    | NominationPoolsEvent_Nominated
    | NominationPoolsEvent_PoolMutated
    | NominationPoolsEvent_PoolSlashed
    | NominationPoolsEvent_RewardPaid
    | NominationPoolsEvent_StateChanged
    | NominationPoolsEvent_Unbonded
    | NominationPoolsEvent_UnbondingPoolSlashed
    | NominationPoolsEvent_Withdrawn

/**
 * A member has became bonded in a pool.
 */
export interface NominationPoolsEvent_Bonded {
    __kind: 'Bonded'
    member: AccountId32
    poolId: number
    bonded: bigint
}

/**
 * A pool's commission rate has been changed.
 */
export interface NominationPoolsEvent_CommissionUpdated {
    __kind: 'CommissionUpdated'
    poolId: number
    current?: Perbill | undefined
}

/**
 * A pool has been created.
 */
export interface NominationPoolsEvent_Created {
    __kind: 'Created'
    creator: AccountId32
    poolId: number
    capacity: bigint
}

/**
 * A pool has been destroyed.
 */
export interface NominationPoolsEvent_Destroyed {
    __kind: 'Destroyed'
    poolId: number
}

export interface NominationPoolsEvent_EarlyBirdBonusCalculated {
    __kind: 'EarlyBirdBonusCalculated'
    /**
     * The total amount to be distributed
     */
    totalAmount: bigint
}

/**
 * The early bird bonus has been distributed
 */
export interface NominationPoolsEvent_EarlyBirdBonusDistributed {
    __kind: 'EarlyBirdBonusDistributed'
    /**
     * The id of the pool
     */
    poolId: number
    /**
     * The amount distributed
     */
    amount: bigint
}

/**
 * The early bird bonus has been paid to the pool
 */
export interface NominationPoolsEvent_EarlyBirdBonusPaid {
    __kind: 'EarlyBirdBonusPaid'
    /**
     * The id of the pool
     */
    poolId: number
    /**
     * The payment ID
     */
    paymentId: number
    /**
     * The total accounts that were paid
     */
    totalAccounts: number
}

/**
 * A new share of early bird bonus has been unlocked
 */
export interface NominationPoolsEvent_EarlyBirdBonusPaymentUnlocked {
    __kind: 'EarlyBirdBonusPaymentUnlocked'
    /**
     * The payment-id of the unlocked bonus
     */
    paymentId: number
    /**
     * The next payment block
     */
    nextPaymentBlock: number
}

/**
 * The shares of pool users have been captured for early bird rewards
 */
export interface NominationPoolsEvent_EarlyBirdSharesCaptured {
    __kind: 'EarlyBirdSharesCaptured'
    /**
     * The id of the pool
     */
    poolId: number
    /**
     * The total number of accounts captured
     */
    totalAccounts: number
}

/**
 * This event happens once per era on the previous era that rewards are paid out for. It
 * pays commission, distributes bonus, and reinvests rewards.
 */
export interface NominationPoolsEvent_EraRewardsProcessed {
    __kind: 'EraRewardsProcessed'
    /**
     * The id of the pool
     */
    poolId: number
    /**
     * The era that was processed.
     */
    era: number
    /**
     * The commission that was paid
     */
    commission?: CommissionPayment | undefined
    /**
     * The amount of bonus that was unlocked
     */
    bonus: bigint
    /**
     * The amount that was bonded
     */
    reinvested: bigint
    /**
     * The current bonus cycle ended
     */
    bonusCycleEnded: boolean
}

/**
 * A nomination took place
 */
export interface NominationPoolsEvent_Nominated {
    __kind: 'Nominated'
    /**
     * The id of the pool
     */
    poolId: number
    /**
     * The validators that were nominated
     */
    validators: AccountId32[]
}

/**
 * Pool has been mutated.
 */
export interface NominationPoolsEvent_PoolMutated {
    __kind: 'PoolMutated'
    poolId: number
    mutation: PoolMutation
}

/**
 * The active balance of pool `pool_id` has been slashed to `balance`.
 */
export interface NominationPoolsEvent_PoolSlashed {
    __kind: 'PoolSlashed'
    poolId: number
    balance: bigint
}

/**
 * Rewards were paid to a pool
 */
export interface NominationPoolsEvent_RewardPaid {
    __kind: 'RewardPaid'
    /**
     * The id of the pool
     */
    poolId: number
    /**
     * The era that was processed.
     */
    era: number
    /**
     * The validator that the payment was received from
     */
    validatorStash: AccountId32
    /**
     * The amount added to the pool's reward account
     */
    reward: bigint
    /**
     * The amount that was added to the pool's bonus account
     */
    bonus: bigint
}

/**
 * The state of a pool has changed
 */
export interface NominationPoolsEvent_StateChanged {
    __kind: 'StateChanged'
    poolId: number
    newState: PoolState
}

/**
 * A member has unbonded from their pool.
 */
export interface NominationPoolsEvent_Unbonded {
    __kind: 'Unbonded'
    /**
     * The member that unbonded
     */
    member: AccountId32
    /**
     * The id of the pool unbonded from
     */
    poolId: number
    /**
     * the corresponding balance of the number of points that has been requested to be
     * unbonded (the argument of the `unbond` transaction) from the bonded pool.
     */
    balance: bigint
    /**
     * the number of points that are issued as a result of `balance` being dissolved into
     * the corresponding unbonding pool.
     */
    points: bigint
    /**
     * the era in which the balance will be unbonded. In the absence of slashing,
     * these values will match. In the presence of slashing, the number of points that are
     * issued in the unbonding pool will be less than the amount requested to be unbonded.
     */
    era: number
}

/**
 * The unbond pool at `era` of pool `pool_id` has been slashed to `balance`.
 */
export interface NominationPoolsEvent_UnbondingPoolSlashed {
    __kind: 'UnbondingPoolSlashed'
    poolId: number
    era: number
    balance: bigint
}

/**
 * A member has withdrawn from their pool.
 *
 * The given number of `points` have been dissolved in return of `balance`.
 *
 * Similar to `Unbonded` event, in the absence of slashing, the ratio of point to balance
 * will be 1.
 */
export interface NominationPoolsEvent_Withdrawn {
    __kind: 'Withdrawn'
    member: AccountId32
    poolId: number
    balance: bigint
    points: bigint
}

export type PoolState = PoolState_Destroying | PoolState_Open

export interface PoolState_Destroying {
    __kind: 'Destroying'
}

export interface PoolState_Open {
    __kind: 'Open'
}

export interface PoolMutation {
    duration?: number | undefined
    newCommission: ShouldMutate
    maxCommission?: Perbill | undefined
    changeRate?: CommissionChangeRate | undefined
    capacity?: bigint | undefined
    name?: BoundedVec | undefined
}

export type BoundedVec = Bytes

export interface CommissionChangeRate {
    maxDelta: Perbill
    minDelay: number
}

export type ShouldMutate = ShouldMutate_NoMutation | ShouldMutate_SomeMutation

export interface ShouldMutate_NoMutation {
    __kind: 'NoMutation'
}

export interface ShouldMutate_SomeMutation {
    __kind: 'SomeMutation'
    value?: Perbill | undefined
}

export interface CommissionPayment {
    beneficiary: AccountId32
    amount: bigint
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

export interface Timepoint {
    height: number
    index: number
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
    | MultiTokensEvent_Infused
    | MultiTokensEvent_MigrationStep
    | MultiTokensEvent_Minted
    | MultiTokensEvent_MovedReserves
    | MultiTokensEvent_NextCollectionIdUpdated
    | MultiTokensEvent_ReserveRepatriated
    | MultiTokensEvent_Reserved
    | MultiTokensEvent_Slashed
    | MultiTokensEvent_Thawed
    | MultiTokensEvent_TokenAccountCreated
    | MultiTokensEvent_TokenAccountDepositUpdated
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

export interface DefaultTokenMutation {
    behavior: Type_218
    listingForbidden: Type_221
    anyoneCanInfuse: Type_221
    name: Type_222
}

export type Type_222 = Type_222_NoMutation | Type_222_SomeMutation

export interface Type_222_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_222_SomeMutation {
    __kind: 'SomeMutation'
    value: BoundedString
}

export type Type_221 = Type_221_NoMutation | Type_221_SomeMutation

export interface Type_221_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_221_SomeMutation {
    __kind: 'SomeMutation'
    value: boolean
}

export type Type_218 = Type_218_NoMutation | Type_218_SomeMutation

export interface Type_218_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_218_SomeMutation {
    __kind: 'SomeMutation'
    value?: TokenMarketBehavior | undefined
}

export type RootOrSigned = RootOrSigned_Root | RootOrSigned_Signed

export interface RootOrSigned_Root {
    __kind: 'Root'
}

export interface RootOrSigned_Signed {
    __kind: 'Signed'
    value: AccountId32
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

export interface DefaultCollectionMutation {
    owner?: AccountId32 | undefined
    royalty: Type_210
    explicitRoyaltyCurrencies?: AssetId[] | undefined
}

export type Type_210 = Type_210_NoMutation | Type_210_SomeMutation

export interface Type_210_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_210_SomeMutation {
    __kind: 'SomeMutation'
    value?: DefaultRoyalty | undefined
}

export interface CollectionAccount {
    isFrozen: boolean
    approvals: [AccountId32, number | undefined][]
    accountCount: number
}

export interface AssetIdWithEth {
    ethereumCollectionId: bigint
    collectionId: bigint
    tokenId: bigint
}

export type H160 = Bytes

/**
 * The `Event` enum of this pallet
 */
export type MigrationsEvent =
    | MigrationsEvent_HistoricCleared
    | MigrationsEvent_MigrationAdvanced
    | MigrationsEvent_MigrationCompleted
    | MigrationsEvent_MigrationFailed
    | MigrationsEvent_MigrationSkipped
    | MigrationsEvent_UpgradeCompleted
    | MigrationsEvent_UpgradeFailed
    | MigrationsEvent_UpgradeStarted

/**
 * The set of historical migrations has been cleared.
 */
export interface MigrationsEvent_HistoricCleared {
    __kind: 'HistoricCleared'
    /**
     * Should be passed to `clear_historic` in a successive call.
     */
    nextCursor?: Bytes | undefined
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
export type MessageQueueEvent =
    | MessageQueueEvent_OverweightEnqueued
    | MessageQueueEvent_PageReaped
    | MessageQueueEvent_Processed
    | MessageQueueEvent_ProcessingFailed

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

export type ProcessMessageError =
    | ProcessMessageError_BadFormat
    | ProcessMessageError_Corrupt
    | ProcessMessageError_Overweight
    | ProcessMessageError_Unsupported
    | ProcessMessageError_Yield

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

export type AggregateMessageOrigin = AggregateMessageOrigin_Ump

export interface AggregateMessageOrigin_Ump {
    __kind: 'Ump'
    value: UmpQueueId
}

export type UmpQueueId = UmpQueueId_Para

export interface UmpQueueId_Para {
    __kind: 'Para'
    value: Id
}

/**
 * The Event for this pallet
 */
export type MarketplaceEvent =
    | MarketplaceEvent_AuctionFinalized
    | MarketplaceEvent_BidPlaced
    | MarketplaceEvent_CounterOfferAnswered
    | MarketplaceEvent_CounterOfferPlaced
    | MarketplaceEvent_CounterOfferRemoved
    | MarketplaceEvent_ExpiredListingRemoved
    | MarketplaceEvent_ListingCancelled
    | MarketplaceEvent_ListingCreated
    | MarketplaceEvent_ListingFilled
    | MarketplaceEvent_MigrationStep
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

export interface CounterOffer {
    sellerPrice: bigint
    buyerPrice?: bigint | undefined
    deposit: Deposit
}

export type CounterOfferResponse =
    | CounterOfferResponse_Accept
    | CounterOfferResponse_Counter
    | CounterOfferResponse_Reject

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
 * The `Event` enum of this pallet
 */
export type ImOnlineEvent = ImOnlineEvent_AllGood | ImOnlineEvent_HeartbeatReceived | ImOnlineEvent_SomeOffline

/**
 * At the end of the session, no offence was committed.
 */
export interface ImOnlineEvent_AllGood {
    __kind: 'AllGood'
}

/**
 * A new heartbeat was received from `AuthorityId`.
 */
export interface ImOnlineEvent_HeartbeatReceived {
    __kind: 'HeartbeatReceived'
    authorityId: Bytes
}

/**
 * At the end of the session, at least one validator was found to be offline.
 */
export interface ImOnlineEvent_SomeOffline {
    __kind: 'SomeOffline'
    offline: [AccountId32, Exposure][]
}

export interface Exposure {
    total: bigint
    own: bigint
    others: IndividualExposure[]
}

/**
 * The `Event` enum of this pallet
 */
export type IdentityEvent =
    | IdentityEvent_AuthorityAdded
    | IdentityEvent_AuthorityRemoved
    | IdentityEvent_DanglingUsernameRemoved
    | IdentityEvent_IdentityCleared
    | IdentityEvent_IdentityKilled
    | IdentityEvent_IdentitySet
    | IdentityEvent_JudgementGiven
    | IdentityEvent_JudgementRequested
    | IdentityEvent_JudgementUnrequested
    | IdentityEvent_PreapprovalExpired
    | IdentityEvent_PrimaryUsernameSet
    | IdentityEvent_RegistrarAdded
    | IdentityEvent_SubIdentityAdded
    | IdentityEvent_SubIdentityRemoved
    | IdentityEvent_SubIdentityRevoked
    | IdentityEvent_UsernameQueued
    | IdentityEvent_UsernameSet

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
export type HrmpEvent =
    | HrmpEvent_ChannelClosed
    | HrmpEvent_HrmpChannelForceOpened
    | HrmpEvent_HrmpSystemChannelOpened
    | HrmpEvent_OpenChannelAccepted
    | HrmpEvent_OpenChannelCanceled
    | HrmpEvent_OpenChannelDepositsUpdated
    | HrmpEvent_OpenChannelRequested

/**
 * HRMP channel closed.
 */
export interface HrmpEvent_ChannelClosed {
    __kind: 'ChannelClosed'
    byParachain: Id
    channelId: HrmpChannelId
}

/**
 * An HRMP channel was opened via Root origin.
 */
export interface HrmpEvent_HrmpChannelForceOpened {
    __kind: 'HrmpChannelForceOpened'
    sender: Id
    recipient: Id
    proposedMaxCapacity: number
    proposedMaxMessageSize: number
}

/**
 * An HRMP channel was opened between two system chains.
 */
export interface HrmpEvent_HrmpSystemChannelOpened {
    __kind: 'HrmpSystemChannelOpened'
    sender: Id
    recipient: Id
    proposedMaxCapacity: number
    proposedMaxMessageSize: number
}

/**
 * Open HRMP channel accepted.
 */
export interface HrmpEvent_OpenChannelAccepted {
    __kind: 'OpenChannelAccepted'
    sender: Id
    recipient: Id
}

/**
 * An HRMP channel request sent by the receiver was canceled by either party.
 */
export interface HrmpEvent_OpenChannelCanceled {
    __kind: 'OpenChannelCanceled'
    byParachain: Id
    channelId: HrmpChannelId
}

/**
 * An HRMP channel's deposits were updated.
 */
export interface HrmpEvent_OpenChannelDepositsUpdated {
    __kind: 'OpenChannelDepositsUpdated'
    sender: Id
    recipient: Id
}

/**
 * Open HRMP channel requested.
 */
export interface HrmpEvent_OpenChannelRequested {
    __kind: 'OpenChannelRequested'
    sender: Id
    recipient: Id
    proposedMaxCapacity: number
    proposedMaxMessageSize: number
}

export interface HrmpChannelId {
    sender: Id
    recipient: Id
}

/**
 * The `Event` enum of this pallet
 */
export type GrandpaEvent = GrandpaEvent_NewAuthorities | GrandpaEvent_Paused | GrandpaEvent_Resumed

/**
 * New authority set has been applied.
 */
export interface GrandpaEvent_NewAuthorities {
    __kind: 'NewAuthorities'
    authoritySet: [Public, bigint][]
}

/**
 * Current authority set has been paused.
 */
export interface GrandpaEvent_Paused {
    __kind: 'Paused'
}

/**
 * Current authority set has been resumed.
 */
export interface GrandpaEvent_Resumed {
    __kind: 'Resumed'
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
    | FuelTanksEvent_MigrationStep
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

export interface DefaultTankMutation {
    userAccountManagement: Type_288
    coveragePolicy?: CoveragePolicy | undefined
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

export type Type_288 = Type_288_NoMutation | Type_288_SomeMutation

export interface Type_288_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_288_SomeMutation {
    __kind: 'SomeMutation'
    value?: UserAccountManagement | undefined
}

/**
 * The `Event` enum of this pallet
 */
export type FellowshipReferendaEvent =
    | FellowshipReferendaEvent_Approved
    | FellowshipReferendaEvent_Cancelled
    | FellowshipReferendaEvent_ConfirmAborted
    | FellowshipReferendaEvent_ConfirmStarted
    | FellowshipReferendaEvent_Confirmed
    | FellowshipReferendaEvent_DecisionDepositPlaced
    | FellowshipReferendaEvent_DecisionDepositRefunded
    | FellowshipReferendaEvent_DecisionStarted
    | FellowshipReferendaEvent_DepositSlashed
    | FellowshipReferendaEvent_Killed
    | FellowshipReferendaEvent_MetadataCleared
    | FellowshipReferendaEvent_MetadataSet
    | FellowshipReferendaEvent_Rejected
    | FellowshipReferendaEvent_SubmissionDepositRefunded
    | FellowshipReferendaEvent_Submitted
    | FellowshipReferendaEvent_TimedOut

/**
 * A referendum has been approved and its proposal has been scheduled.
 */
export interface FellowshipReferendaEvent_Approved {
    __kind: 'Approved'
    /**
     * Index of the referendum.
     */
    index: number
}

/**
 * A referendum has been cancelled.
 */
export interface FellowshipReferendaEvent_Cancelled {
    __kind: 'Cancelled'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Type_718
}

export interface FellowshipReferendaEvent_ConfirmAborted {
    __kind: 'ConfirmAborted'
    /**
     * Index of the referendum.
     */
    index: number
}

export interface FellowshipReferendaEvent_ConfirmStarted {
    __kind: 'ConfirmStarted'
    /**
     * Index of the referendum.
     */
    index: number
}

/**
 * A referendum has ended its confirmation phase and is ready for approval.
 */
export interface FellowshipReferendaEvent_Confirmed {
    __kind: 'Confirmed'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Type_718
}

/**
 * The decision deposit has been placed.
 */
export interface FellowshipReferendaEvent_DecisionDepositPlaced {
    __kind: 'DecisionDepositPlaced'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The account who placed the deposit.
     */
    who: AccountId32
    /**
     * The amount placed by the account.
     */
    amount: bigint
}

/**
 * The decision deposit has been refunded.
 */
export interface FellowshipReferendaEvent_DecisionDepositRefunded {
    __kind: 'DecisionDepositRefunded'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The account who placed the deposit.
     */
    who: AccountId32
    /**
     * The amount placed by the account.
     */
    amount: bigint
}

/**
 * A referendum has moved into the deciding phase.
 */
export interface FellowshipReferendaEvent_DecisionStarted {
    __kind: 'DecisionStarted'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The track (and by extension proposal dispatch origin) of this referendum.
     */
    track: number
    /**
     * The proposal for the referendum.
     */
    proposal: Bounded
    /**
     * The current tally of votes in this referendum.
     */
    tally: Type_718
}

/**
 * A deposit has been slashed.
 */
export interface FellowshipReferendaEvent_DepositSlashed {
    __kind: 'DepositSlashed'
    /**
     * The account who placed the deposit.
     */
    who: AccountId32
    /**
     * The amount placed by the account.
     */
    amount: bigint
}

/**
 * A referendum has been killed.
 */
export interface FellowshipReferendaEvent_Killed {
    __kind: 'Killed'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Type_718
}

/**
 * Metadata for a referendum has been cleared.
 */
export interface FellowshipReferendaEvent_MetadataCleared {
    __kind: 'MetadataCleared'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * Preimage hash.
     */
    hash: H256
}

/**
 * Metadata for a referendum has been set.
 */
export interface FellowshipReferendaEvent_MetadataSet {
    __kind: 'MetadataSet'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * Preimage hash.
     */
    hash: H256
}

/**
 * A proposal has been rejected by referendum.
 */
export interface FellowshipReferendaEvent_Rejected {
    __kind: 'Rejected'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Type_718
}

/**
 * The submission deposit has been refunded.
 */
export interface FellowshipReferendaEvent_SubmissionDepositRefunded {
    __kind: 'SubmissionDepositRefunded'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The account who placed the deposit.
     */
    who: AccountId32
    /**
     * The amount placed by the account.
     */
    amount: bigint
}

/**
 * A referendum has been submitted.
 */
export interface FellowshipReferendaEvent_Submitted {
    __kind: 'Submitted'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The track (and by extension proposal dispatch origin) of this referendum.
     */
    track: number
    /**
     * The proposal for the referendum.
     */
    proposal: Bounded
}

/**
 * A referendum has been timed out without being decided.
 */
export interface FellowshipReferendaEvent_TimedOut {
    __kind: 'TimedOut'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Type_718
}

/**
 * The `Event` enum of this pallet
 */
export type FellowshipCollectiveEvent =
    | FellowshipCollectiveEvent_MemberAdded
    | FellowshipCollectiveEvent_MemberExchanged
    | FellowshipCollectiveEvent_MemberRemoved
    | FellowshipCollectiveEvent_RankChanged
    | FellowshipCollectiveEvent_Voted

/**
 * A member `who` has been added.
 */
export interface FellowshipCollectiveEvent_MemberAdded {
    __kind: 'MemberAdded'
    who: AccountId32
}

/**
 * The member `who` had their `AccountId` changed to `new_who`.
 */
export interface FellowshipCollectiveEvent_MemberExchanged {
    __kind: 'MemberExchanged'
    who: AccountId32
    newWho: AccountId32
}

/**
 * The member `who` of given `rank` has been removed from the collective.
 */
export interface FellowshipCollectiveEvent_MemberRemoved {
    __kind: 'MemberRemoved'
    who: AccountId32
    rank: number
}

/**
 * The member `who`se rank has been changed to the given `rank`.
 */
export interface FellowshipCollectiveEvent_RankChanged {
    __kind: 'RankChanged'
    who: AccountId32
    rank: number
}

/**
 * The member `who` has voted for the `poll` with the given `vote` leading to an updated
 * `tally`.
 */
export interface FellowshipCollectiveEvent_Voted {
    __kind: 'Voted'
    who: AccountId32
    poll: number
    vote: VoteRecord
    tally: Type_718
}

export type VoteRecord = VoteRecord_Aye | VoteRecord_Nay

export interface VoteRecord_Aye {
    __kind: 'Aye'
    value: number
}

export interface VoteRecord_Nay {
    __kind: 'Nay'
    value: number
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
export type ElectionProviderMultiPhaseEvent =
    | ElectionProviderMultiPhaseEvent_ElectionFailed
    | ElectionProviderMultiPhaseEvent_ElectionFinalized
    | ElectionProviderMultiPhaseEvent_PhaseTransitioned
    | ElectionProviderMultiPhaseEvent_Rewarded
    | ElectionProviderMultiPhaseEvent_Slashed
    | ElectionProviderMultiPhaseEvent_SolutionStored

/**
 * An election failed.
 *
 * Not much can be said about which computes failed in the process.
 */
export interface ElectionProviderMultiPhaseEvent_ElectionFailed {
    __kind: 'ElectionFailed'
}

/**
 * The election has been finalized, with the given computation and score.
 */
export interface ElectionProviderMultiPhaseEvent_ElectionFinalized {
    __kind: 'ElectionFinalized'
    compute: ElectionCompute
    score: ElectionScore
}

/**
 * There was a phase transition in a given round.
 */
export interface ElectionProviderMultiPhaseEvent_PhaseTransitioned {
    __kind: 'PhaseTransitioned'
    from: Phase
    to: Phase
    round: number
}

/**
 * An account has been rewarded for their signed submission being finalized.
 */
export interface ElectionProviderMultiPhaseEvent_Rewarded {
    __kind: 'Rewarded'
    account: AccountId32
    value: bigint
}

/**
 * An account has been slashed for submitting an invalid signed submission.
 */
export interface ElectionProviderMultiPhaseEvent_Slashed {
    __kind: 'Slashed'
    account: AccountId32
    value: bigint
}

/**
 * A solution was stored with the given compute.
 *
 * The `origin` indicates the origin of the solution. If `origin` is `Some(AccountId)`,
 * the stored solution was submited in the signed phase by a miner with the `AccountId`.
 * Otherwise, the solution was stored either during the unsigned phase or by
 * `T::ForceOrigin`. The `bool` is `true` when a previous solution was ejected to make
 * room for this one.
 */
export interface ElectionProviderMultiPhaseEvent_SolutionStored {
    __kind: 'SolutionStored'
    compute: ElectionCompute
    origin?: AccountId32 | undefined
    prevEjected: boolean
}

export type Phase = Phase_Emergency | Phase_Off | Phase_Signed | Phase_Unsigned

export interface Phase_Emergency {
    __kind: 'Emergency'
}

export interface Phase_Off {
    __kind: 'Off'
}

export interface Phase_Signed {
    __kind: 'Signed'
}

export interface Phase_Unsigned {
    __kind: 'Unsigned'
    value: [boolean, number]
}

export interface ElectionScore {
    minimalStake: bigint
    sumStake: bigint
    sumStakeSquared: bigint
}

export type ElectionCompute =
    | ElectionCompute_Emergency
    | ElectionCompute_Fallback
    | ElectionCompute_OnChain
    | ElectionCompute_Signed
    | ElectionCompute_Unsigned

export interface ElectionCompute_Emergency {
    __kind: 'Emergency'
}

export interface ElectionCompute_Fallback {
    __kind: 'Fallback'
}

export interface ElectionCompute_OnChain {
    __kind: 'OnChain'
}

export interface ElectionCompute_Signed {
    __kind: 'Signed'
}

export interface ElectionCompute_Unsigned {
    __kind: 'Unsigned'
}

/**
 * The `Event` enum of this pallet
 */
export type CrowdloanEvent =
    | CrowdloanEvent_AddedToNewRaise
    | CrowdloanEvent_AllRefunded
    | CrowdloanEvent_Contributed
    | CrowdloanEvent_Created
    | CrowdloanEvent_Dissolved
    | CrowdloanEvent_Edited
    | CrowdloanEvent_HandleBidResult
    | CrowdloanEvent_MemoUpdated
    | CrowdloanEvent_PartiallyRefunded
    | CrowdloanEvent_Withdrew

/**
 * A parachain has been moved to `NewRaise`
 */
export interface CrowdloanEvent_AddedToNewRaise {
    __kind: 'AddedToNewRaise'
    paraId: Id
}

/**
 * All loans in a fund have been refunded.
 */
export interface CrowdloanEvent_AllRefunded {
    __kind: 'AllRefunded'
    paraId: Id
}

/**
 * Contributed to a crowd sale.
 */
export interface CrowdloanEvent_Contributed {
    __kind: 'Contributed'
    who: AccountId32
    fundIndex: Id
    amount: bigint
}

/**
 * Create a new crowdloaning campaign.
 */
export interface CrowdloanEvent_Created {
    __kind: 'Created'
    paraId: Id
}

/**
 * Fund is dissolved.
 */
export interface CrowdloanEvent_Dissolved {
    __kind: 'Dissolved'
    paraId: Id
}

/**
 * The configuration to a crowdloan has been edited.
 */
export interface CrowdloanEvent_Edited {
    __kind: 'Edited'
    paraId: Id
}

/**
 * The result of trying to submit a new bid to the Slots pallet.
 */
export interface CrowdloanEvent_HandleBidResult {
    __kind: 'HandleBidResult'
    paraId: Id
    result: Result<null, DispatchError>
}

/**
 * A memo has been updated.
 */
export interface CrowdloanEvent_MemoUpdated {
    __kind: 'MemoUpdated'
    who: AccountId32
    paraId: Id
    memo: Bytes
}

/**
 * The loans in a fund have been partially dissolved, i.e. there are some left
 * over child keys that still need to be killed.
 */
export interface CrowdloanEvent_PartiallyRefunded {
    __kind: 'PartiallyRefunded'
    paraId: Id
}

/**
 * Withdrew full balance of a contributor.
 */
export interface CrowdloanEvent_Withdrew {
    __kind: 'Withdrew'
    who: AccountId32
    fundIndex: Id
    amount: bigint
}

/**
 * The `Event` enum of this pallet
 */
export type ConvictionVotingEvent = ConvictionVotingEvent_Delegated | ConvictionVotingEvent_Undelegated

/**
 * An account has delegated their vote to another account. \[who, target\]
 */
export interface ConvictionVotingEvent_Delegated {
    __kind: 'Delegated'
    value: [AccountId32, AccountId32]
}

/**
 * An \[account\] has cancelled a previous delegation operation.
 */
export interface ConvictionVotingEvent_Undelegated {
    __kind: 'Undelegated'
    value: AccountId32
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
    | BalancesEvent_TotalIssuanceForced
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

/**
 * The `Event` enum of this pallet
 */
export type AuctionsEvent =
    | AuctionsEvent_AuctionClosed
    | AuctionsEvent_AuctionStarted
    | AuctionsEvent_BidAccepted
    | AuctionsEvent_ReserveConfiscated
    | AuctionsEvent_Reserved
    | AuctionsEvent_Unreserved
    | AuctionsEvent_WinningOffset

/**
 * An auction ended. All funds become unreserved.
 */
export interface AuctionsEvent_AuctionClosed {
    __kind: 'AuctionClosed'
    auctionIndex: number
}

/**
 * An auction started. Provides its index and the block number where it will begin to
 * close and the first lease period of the quadruplet that is auctioned.
 */
export interface AuctionsEvent_AuctionStarted {
    __kind: 'AuctionStarted'
    auctionIndex: number
    leasePeriod: number
    ending: number
}

/**
 * A new bid has been accepted as the current winner.
 */
export interface AuctionsEvent_BidAccepted {
    __kind: 'BidAccepted'
    bidder: AccountId32
    paraId: Id
    amount: bigint
    firstSlot: number
    lastSlot: number
}

/**
 * Someone attempted to lease the same slot twice for a parachain. The amount is held in
 * reserve but no parachain slot has been leased.
 */
export interface AuctionsEvent_ReserveConfiscated {
    __kind: 'ReserveConfiscated'
    paraId: Id
    leaser: AccountId32
    amount: bigint
}

/**
 * Funds were reserved for a winning bid. First balance is the extra amount reserved.
 * Second is the total.
 */
export interface AuctionsEvent_Reserved {
    __kind: 'Reserved'
    bidder: AccountId32
    extraReserved: bigint
    totalAmount: bigint
}

/**
 * Funds were unreserved since bidder is no longer active. `[bidder, amount]`
 */
export interface AuctionsEvent_Unreserved {
    __kind: 'Unreserved'
    bidder: AccountId32
    amount: bigint
}

/**
 * The winning offset was chosen for an auction. This will map into the `Winning` storage
 * map.
 */
export interface AuctionsEvent_WinningOffset {
    __kind: 'WinningOffset'
    auctionIndex: number
    blockNumber: number
}

/**
 * The `Event` enum of this pallet
 */
export type AssignedSlotsEvent =
    | AssignedSlotsEvent_MaxPermanentSlotsChanged
    | AssignedSlotsEvent_MaxTemporarySlotsChanged
    | AssignedSlotsEvent_PermanentSlotAssigned
    | AssignedSlotsEvent_TemporarySlotAssigned

/**
 * The maximum number of permanent slots has been changed
 */
export interface AssignedSlotsEvent_MaxPermanentSlotsChanged {
    __kind: 'MaxPermanentSlotsChanged'
    slots: number
}

/**
 * The maximum number of temporary slots has been changed
 */
export interface AssignedSlotsEvent_MaxTemporarySlotsChanged {
    __kind: 'MaxTemporarySlotsChanged'
    slots: number
}

/**
 * A parachain was assigned a permanent parachain slot
 */
export interface AssignedSlotsEvent_PermanentSlotAssigned {
    __kind: 'PermanentSlotAssigned'
    value: Id
}

/**
 * A parachain was assigned a temporary parachain slot
 */
export interface AssignedSlotsEvent_TemporarySlotAssigned {
    __kind: 'TemporarySlotAssigned'
    value: Id
}

export type Type_722 = Type_722_ApplyExtrinsic | Type_722_Finalization | Type_722_Initialization

export interface Type_722_ApplyExtrinsic {
    __kind: 'ApplyExtrinsic'
    value: number
}

export interface Type_722_Finalization {
    __kind: 'Finalization'
}

export interface Type_722_Initialization {
    __kind: 'Initialization'
}

export const EventRecord: sts.Type<EventRecord> = sts.struct(() => {
    return {
        phase: Type_722,
        event: Event,
        topics: sts.array(() => H256),
    }
})

export const Event: sts.Type<Event> = sts.closedEnum(() => {
    return {
        AssignedSlots: AssignedSlotsEvent,
        Auctions: AuctionsEvent,
        Balances: BalancesEvent,
        ConvictionVoting: ConvictionVotingEvent,
        Crowdloan: CrowdloanEvent,
        ElectionProviderMultiPhase: ElectionProviderMultiPhaseEvent,
        ExtrinsicPause: ExtrinsicPauseEvent,
        FellowshipCollective: FellowshipCollectiveEvent,
        FellowshipReferenda: FellowshipReferendaEvent,
        FuelTanks: FuelTanksEvent,
        Grandpa: GrandpaEvent,
        Hrmp: HrmpEvent,
        Identity: IdentityEvent,
        ImOnline: ImOnlineEvent,
        Marketplace: MarketplaceEvent,
        MessageQueue: MessageQueueEvent,
        Migrations: MigrationsEvent,
        MultiTokens: MultiTokensEvent,
        Multisig: MultisigEvent,
        NominationPools: NominationPoolsEvent,
        Offences: OffencesEvent,
        ParaInclusion: ParaInclusionEvent,
        Paras: ParasEvent,
        ParasDisputes: ParasDisputesEvent,
        Preimage: PreimageEvent,
        Proxy: ProxyEvent,
        Referenda: ReferendaEvent,
        Registrar: RegistrarEvent,
        SafeMode: SafeModeEvent,
        Scheduler: SchedulerEvent,
        Session: SessionEvent,
        Slots: SlotsEvent,
        StakeExchange: StakeExchangeEvent,
        Staking: StakingEvent,
        Sudo: SudoEvent,
        System: SystemEvent,
        TransactionPayment: TransactionPaymentEvent,
        Treasury: TreasuryEvent,
        Utility: UtilityEvent,
        ValidatorManager: ValidatorManagerEvent,
        VoteManager: VoteManagerEvent,
        VoterList: VoterListEvent,
        Whitelist: WhitelistEvent,
        XcmPallet: XcmPalletEvent,
    }
})

/**
 * The `Event` enum of this pallet
 */
export const XcmPalletEvent: sts.Type<XcmPalletEvent> = sts.closedEnum(() => {
    return {
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

/**
 * The `Event` enum of this pallet
 */
export const WhitelistEvent: sts.Type<WhitelistEvent> = sts.closedEnum(() => {
    return {
        CallWhitelisted: sts.enumStruct({
            callHash: H256,
        }),
        WhitelistedCallDispatched: sts.enumStruct({
            callHash: H256,
            result: sts.result(
                () => PostDispatchInfo,
                () => DispatchErrorWithPostInfo
            ),
        }),
        WhitelistedCallRemoved: sts.enumStruct({
            callHash: H256,
        }),
    }
})

export const DispatchErrorWithPostInfo: sts.Type<DispatchErrorWithPostInfo> = sts.struct(() => {
    return {
        postInfo: PostDispatchInfo,
        error: DispatchError,
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

export const PostDispatchInfo: sts.Type<PostDispatchInfo> = sts.struct(() => {
    return {
        actualWeight: sts.option(() => Weight),
        paysFee: Pays,
    }
})

export const Pays: sts.Type<Pays> = sts.closedEnum(() => {
    return {
        No: sts.unit(),
        Yes: sts.unit(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const VoterListEvent: sts.Type<VoterListEvent> = sts.closedEnum(() => {
    return {
        Rebagged: sts.enumStruct({
            who: AccountId32,
            from: sts.bigint(),
            to: sts.bigint(),
        }),
        ScoreUpdated: sts.enumStruct({
            who: AccountId32,
            newScore: sts.bigint(),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const VoteManagerEvent: sts.Type<VoteManagerEvent> = sts.closedEnum(() => {
    return {
        Voted: sts.enumStruct({
            voter: AccountId32,
            pollIndex: sts.number(),
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
        SplitAbstain: sts.enumStruct({
            aye: sts.bigint(),
            nay: sts.bigint(),
            abstain: sts.bigint(),
        }),
        Standard: sts.enumStruct({
            vote: Vote,
            balance: sts.bigint(),
        }),
    }
})

export const Vote = sts.number()

/**
 * The `Event` enum of this pallet
 */
export const ValidatorManagerEvent: sts.Type<ValidatorManagerEvent> = sts.closedEnum(() => {
    return {
        ValidatorsDeregistered: sts.array(() => AccountId32),
        ValidatorsRegistered: sts.array(() => AccountId32),
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

/**
 * The `Event` enum of this pallet
 */
export const TreasuryEvent: sts.Type<TreasuryEvent> = sts.closedEnum(() => {
    return {
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
        UpgradeAuthorized: sts.enumStruct({
            codeHash: H256,
            checkVersion: sts.boolean(),
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
            old: sts.option(() => AccountId32),
            new: AccountId32,
        }),
        KeyRemoved: sts.unit(),
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
export const StakingEvent: sts.Type<StakingEvent> = sts.closedEnum(() => {
    return {
        Bonded: sts.enumStruct({
            stash: AccountId32,
            amount: sts.bigint(),
        }),
        Chilled: sts.enumStruct({
            stash: AccountId32,
        }),
        ControllerBatchDeprecated: sts.enumStruct({
            failures: sts.number(),
        }),
        EraPaid: sts.enumStruct({
            eraIndex: sts.number(),
            validatorPayout: sts.bigint(),
            remainder: sts.bigint(),
        }),
        ForceEra: sts.enumStruct({
            mode: Forcing,
        }),
        Kicked: sts.enumStruct({
            nominator: AccountId32,
            stash: AccountId32,
        }),
        OldSlashingReportDiscarded: sts.enumStruct({
            sessionIndex: sts.number(),
        }),
        PayoutStarted: sts.enumStruct({
            eraIndex: sts.number(),
            validatorStash: AccountId32,
        }),
        Rewarded: sts.enumStruct({
            stash: AccountId32,
            dest: RewardDestination,
            amount: sts.bigint(),
        }),
        SlashReported: sts.enumStruct({
            validator: AccountId32,
            fraction: Perbill,
            slashEra: sts.number(),
        }),
        Slashed: sts.enumStruct({
            staker: AccountId32,
            amount: sts.bigint(),
        }),
        SnapshotTargetsSizeExceeded: sts.enumStruct({
            size: sts.number(),
        }),
        SnapshotVotersSizeExceeded: sts.enumStruct({
            size: sts.number(),
        }),
        StakersElected: sts.unit(),
        StakingElectionFailed: sts.unit(),
        Unbonded: sts.enumStruct({
            stash: AccountId32,
            amount: sts.bigint(),
        }),
        ValidatorPrefsSet: sts.enumStruct({
            stash: AccountId32,
            prefs: ValidatorPrefs,
        }),
        Withdrawn: sts.enumStruct({
            stash: AccountId32,
            amount: sts.bigint(),
        }),
    }
})

export const ValidatorPrefs: sts.Type<ValidatorPrefs> = sts.struct(() => {
    return {
        commission: sts.number(),
        blocked: sts.boolean(),
    }
})

export const Forcing: sts.Type<Forcing> = sts.closedEnum(() => {
    return {
        ForceAlways: sts.unit(),
        ForceNew: sts.unit(),
        ForceNone: sts.unit(),
        NotForcing: sts.unit(),
    }
})

/**
 * The pallet's event type.
 */
export const StakeExchangeEvent: sts.Type<StakeExchangeEvent> = sts.closedEnum(() => {
    return {
        BuyOrderCompleted: sts.enumStruct({
            who: AccountId32,
            tokenId: sts.bigint(),
            amount: sts.bigint(),
            rate: Perbill,
            offerCreator: AccountId32,
        }),
        LiquidityAdded: sts.enumStruct({
            who: AccountId32,
            offerId: sts.bigint(),
        }),
        LiquidityConfigUpdated: sts.enumStruct({
            who: AccountId32,
            config: LiquidityAccountConfig,
        }),
        LiquidityWithdrawn: sts.enumStruct({
            who: AccountId32,
            offerId: sts.bigint(),
        }),
        OfferCancelled: sts.enumStruct({
            offerId: sts.bigint(),
        }),
        OfferCompleted: sts.enumStruct({
            offerId: sts.bigint(),
        }),
        OfferCreated: sts.enumStruct({
            offerId: sts.bigint(),
            offer: Offer,
        }),
    }
})

export const Offer: sts.Type<Offer> = sts.struct(() => {
    return {
        account: AccountId32,
        total: sts.bigint(),
        rate: sts.number(),
        minAverageRewardRate: sts.bigint(),
        deposit: sts.bigint(),
        tokenFilter: TokenFilter,
    }
})

export const TokenFilter: sts.Type<TokenFilter> = sts.closedEnum(() => {
    return {
        All: sts.unit(),
        BlockList: sts.array(() => sts.bigint()),
        Whitelist: sts.array(() => sts.bigint()),
    }
})

export const LiquidityAccountConfig: sts.Type<LiquidityAccountConfig> = sts.struct(() => {
    return {
        tokenFilter: TokenFilter,
    }
})

/**
 * The `Event` enum of this pallet
 */
export const SlotsEvent: sts.Type<SlotsEvent> = sts.closedEnum(() => {
    return {
        Leased: sts.enumStruct({
            paraId: Id,
            leaser: AccountId32,
            periodBegin: sts.number(),
            periodCount: sts.number(),
            extraReserved: sts.bigint(),
            totalAmount: sts.bigint(),
        }),
        NewLeasePeriod: sts.enumStruct({
            leasePeriod: sts.number(),
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
    return {
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
    return {
        Force: sts.unit(),
        Timeout: sts.unit(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const RegistrarEvent: sts.Type<RegistrarEvent> = sts.closedEnum(() => {
    return {
        Deregistered: sts.enumStruct({
            paraId: Id,
        }),
        Registered: sts.enumStruct({
            paraId: Id,
            manager: AccountId32,
        }),
        Reserved: sts.enumStruct({
            paraId: Id,
            who: AccountId32,
        }),
        Swapped: sts.enumStruct({
            paraId: Id,
            otherId: Id,
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const ReferendaEvent: sts.Type<ReferendaEvent> = sts.closedEnum(() => {
    return {
        Approved: sts.enumStruct({
            index: sts.number(),
        }),
        Cancelled: sts.enumStruct({
            index: sts.number(),
            tally: Tally,
        }),
        ConfirmAborted: sts.enumStruct({
            index: sts.number(),
        }),
        ConfirmStarted: sts.enumStruct({
            index: sts.number(),
        }),
        Confirmed: sts.enumStruct({
            index: sts.number(),
            tally: Tally,
        }),
        DecisionDepositPlaced: sts.enumStruct({
            index: sts.number(),
            who: AccountId32,
            amount: sts.bigint(),
        }),
        DecisionDepositRefunded: sts.enumStruct({
            index: sts.number(),
            who: AccountId32,
            amount: sts.bigint(),
        }),
        DecisionStarted: sts.enumStruct({
            index: sts.number(),
            track: sts.number(),
            proposal: Bounded,
            tally: Tally,
        }),
        DepositSlashed: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Killed: sts.enumStruct({
            index: sts.number(),
            tally: Tally,
        }),
        MetadataCleared: sts.enumStruct({
            index: sts.number(),
            hash: H256,
        }),
        MetadataSet: sts.enumStruct({
            index: sts.number(),
            hash: H256,
        }),
        Rejected: sts.enumStruct({
            index: sts.number(),
            tally: Tally,
        }),
        SubmissionDepositRefunded: sts.enumStruct({
            index: sts.number(),
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Submitted: sts.enumStruct({
            index: sts.number(),
            track: sts.number(),
            proposal: Bounded,
        }),
        TimedOut: sts.enumStruct({
            index: sts.number(),
            tally: Tally,
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const ProxyEvent: sts.Type<ProxyEvent> = sts.closedEnum(() => {
    return {
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
            result: sts.result(
                () => sts.unit(),
                () => DispatchError
            ),
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
 * The `Event` enum of this pallet
 */
export const ParasDisputesEvent: sts.Type<ParasDisputesEvent> = sts.closedEnum(() => {
    return {
        DisputeConcluded: sts.tuple(() => [CandidateHash, DisputeResult]),
        DisputeInitiated: sts.tuple(() => [CandidateHash, DisputeLocation]),
        Revert: sts.number(),
    }
})

export const DisputeLocation: sts.Type<DisputeLocation> = sts.closedEnum(() => {
    return {
        Local: sts.unit(),
        Remote: sts.unit(),
    }
})

export const DisputeResult: sts.Type<DisputeResult> = sts.closedEnum(() => {
    return {
        Invalid: sts.unit(),
        Valid: sts.unit(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const ParasEvent: sts.Type<ParasEvent> = sts.closedEnum(() => {
    return {
        ActionQueued: sts.tuple(() => [Id, sts.number()]),
        CodeUpgradeScheduled: Id,
        CurrentCodeUpdated: Id,
        CurrentHeadUpdated: Id,
        NewHeadNoted: Id,
        PvfCheckAccepted: sts.tuple(() => [ValidationCodeHash, Id]),
        PvfCheckRejected: sts.tuple(() => [ValidationCodeHash, Id]),
        PvfCheckStarted: sts.tuple(() => [ValidationCodeHash, Id]),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const ParaInclusionEvent: sts.Type<ParaInclusionEvent> = sts.closedEnum(() => {
    return {
        CandidateBacked: sts.tuple(() => [V6CandidateReceipt, HeadData, V6CoreIndex, V6GroupIndex]),
        CandidateIncluded: sts.tuple(() => [V6CandidateReceipt, HeadData, V6CoreIndex, V6GroupIndex]),
        CandidateTimedOut: sts.tuple(() => [V6CandidateReceipt, HeadData, V6CoreIndex]),
        UpwardMessagesReceived: sts.enumStruct({
            from: Id,
            count: sts.number(),
        }),
    }
})

export const V6GroupIndex = sts.number()

export const HeadData = sts.bytes()

/**
 * Events type.
 */
export const OffencesEvent: sts.Type<OffencesEvent> = sts.closedEnum(() => {
    return {
        Offence: sts.enumStruct({
            kind: sts.bytes(),
            timeslot: sts.bytes(),
        }),
    }
})

/**
 * Events of this pallet.
 */
export const NominationPoolsEvent: sts.Type<NominationPoolsEvent> = sts.closedEnum(() => {
    return {
        Bonded: sts.enumStruct({
            member: AccountId32,
            poolId: sts.number(),
            bonded: sts.bigint(),
        }),
        CommissionUpdated: sts.enumStruct({
            poolId: sts.number(),
            current: sts.option(() => Perbill),
        }),
        Created: sts.enumStruct({
            creator: AccountId32,
            poolId: sts.number(),
            capacity: sts.bigint(),
        }),
        Destroyed: sts.enumStruct({
            poolId: sts.number(),
        }),
        EarlyBirdBonusCalculated: sts.enumStruct({
            totalAmount: sts.bigint(),
        }),
        EarlyBirdBonusDistributed: sts.enumStruct({
            poolId: sts.number(),
            amount: sts.bigint(),
        }),
        EarlyBirdBonusPaid: sts.enumStruct({
            poolId: sts.number(),
            paymentId: sts.number(),
            totalAccounts: sts.number(),
        }),
        EarlyBirdBonusPaymentUnlocked: sts.enumStruct({
            paymentId: sts.number(),
            nextPaymentBlock: sts.number(),
        }),
        EarlyBirdSharesCaptured: sts.enumStruct({
            poolId: sts.number(),
            totalAccounts: sts.number(),
        }),
        EraRewardsProcessed: sts.enumStruct({
            poolId: sts.number(),
            era: sts.number(),
            commission: sts.option(() => CommissionPayment),
            bonus: sts.bigint(),
            reinvested: sts.bigint(),
            bonusCycleEnded: sts.boolean(),
        }),
        Nominated: sts.enumStruct({
            poolId: sts.number(),
            validators: sts.array(() => AccountId32),
        }),
        PoolMutated: sts.enumStruct({
            poolId: sts.number(),
            mutation: PoolMutation,
        }),
        PoolSlashed: sts.enumStruct({
            poolId: sts.number(),
            balance: sts.bigint(),
        }),
        RewardPaid: sts.enumStruct({
            poolId: sts.number(),
            era: sts.number(),
            validatorStash: AccountId32,
            reward: sts.bigint(),
            bonus: sts.bigint(),
        }),
        StateChanged: sts.enumStruct({
            poolId: sts.number(),
            newState: PoolState,
        }),
        Unbonded: sts.enumStruct({
            member: AccountId32,
            poolId: sts.number(),
            balance: sts.bigint(),
            points: sts.bigint(),
            era: sts.number(),
        }),
        UnbondingPoolSlashed: sts.enumStruct({
            poolId: sts.number(),
            era: sts.number(),
            balance: sts.bigint(),
        }),
        Withdrawn: sts.enumStruct({
            member: AccountId32,
            poolId: sts.number(),
            balance: sts.bigint(),
            points: sts.bigint(),
        }),
    }
})

export const PoolState: sts.Type<PoolState> = sts.closedEnum(() => {
    return {
        Destroying: sts.unit(),
        Open: sts.unit(),
    }
})

export const PoolMutation: sts.Type<PoolMutation> = sts.struct(() => {
    return {
        duration: sts.option(() => sts.number()),
        newCommission: ShouldMutate,
        maxCommission: sts.option(() => Perbill),
        changeRate: sts.option(() => CommissionChangeRate),
        capacity: sts.option(() => sts.bigint()),
        name: sts.option(() => BoundedVec),
    }
})

export const BoundedVec = sts.bytes()

export const CommissionChangeRate: sts.Type<CommissionChangeRate> = sts.struct(() => {
    return {
        maxDelta: Perbill,
        minDelay: sts.number(),
    }
})

export const ShouldMutate: sts.Type<ShouldMutate> = sts.closedEnum(() => {
    return {
        NoMutation: sts.unit(),
        SomeMutation: sts.option(() => Perbill),
    }
})

export const CommissionPayment: sts.Type<CommissionPayment> = sts.struct(() => {
    return {
        beneficiary: AccountId32,
        amount: sts.bigint(),
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

export const RootOrSigned: sts.Type<RootOrSigned> = sts.closedEnum(() => {
    return {
        Root: sts.unit(),
        Signed: AccountId32,
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

export const FreezeState: sts.Type<FreezeState> = sts.closedEnum(() => {
    return {
        Never: sts.unit(),
        Permanent: sts.unit(),
        Temporary: sts.unit(),
    }
})

export const DefaultCollectionMutation: sts.Type<DefaultCollectionMutation> = sts.struct(() => {
    return {
        owner: sts.option(() => AccountId32),
        royalty: Type_210,
        explicitRoyaltyCurrencies: sts.option(() => sts.array(() => AssetId)),
    }
})

export const Type_210: sts.Type<Type_210> = sts.closedEnum(() => {
    return {
        NoMutation: sts.unit(),
        SomeMutation: sts.option(() => DefaultRoyalty),
    }
})

export const DefaultRoyalty: sts.Type<DefaultRoyalty> = sts.struct(() => {
    return {
        beneficiary: AccountId32,
        percentage: sts.number(),
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

/**
 * The `Event` enum of this pallet
 */
export const MigrationsEvent: sts.Type<MigrationsEvent> = sts.closedEnum(() => {
    return {
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
    return {
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
    return {
        BadFormat: sts.unit(),
        Corrupt: sts.unit(),
        Overweight: Weight,
        Unsupported: sts.unit(),
        Yield: sts.unit(),
    }
})

export const AggregateMessageOrigin: sts.Type<AggregateMessageOrigin> = sts.closedEnum(() => {
    return {
        Ump: UmpQueueId,
    }
})

export const UmpQueueId: sts.Type<UmpQueueId> = sts.closedEnum(() => {
    return {
        Para: Id,
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

export const CounterOffer: sts.Type<CounterOffer> = sts.struct(() => {
    return {
        sellerPrice: sts.bigint(),
        buyerPrice: sts.option(() => sts.bigint()),
        deposit: Deposit,
    }
})

export const Deposit: sts.Type<Deposit> = sts.struct(() => {
    return {
        depositor: AccountId32,
        amount: sts.bigint(),
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
export const ImOnlineEvent: sts.Type<ImOnlineEvent> = sts.closedEnum(() => {
    return {
        AllGood: sts.unit(),
        HeartbeatReceived: sts.enumStruct({
            authorityId: sts.bytes(),
        }),
        SomeOffline: sts.enumStruct({
            offline: sts.array(() => sts.tuple(() => [AccountId32, Exposure])),
        }),
    }
})

export const Exposure: sts.Type<Exposure> = sts.struct(() => {
    return {
        total: sts.bigint(),
        own: sts.bigint(),
        others: sts.array(() => IndividualExposure),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const IdentityEvent: sts.Type<IdentityEvent> = sts.closedEnum(() => {
    return {
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
export const HrmpEvent: sts.Type<HrmpEvent> = sts.closedEnum(() => {
    return {
        ChannelClosed: sts.enumStruct({
            byParachain: Id,
            channelId: HrmpChannelId,
        }),
        HrmpChannelForceOpened: sts.enumStruct({
            sender: Id,
            recipient: Id,
            proposedMaxCapacity: sts.number(),
            proposedMaxMessageSize: sts.number(),
        }),
        HrmpSystemChannelOpened: sts.enumStruct({
            sender: Id,
            recipient: Id,
            proposedMaxCapacity: sts.number(),
            proposedMaxMessageSize: sts.number(),
        }),
        OpenChannelAccepted: sts.enumStruct({
            sender: Id,
            recipient: Id,
        }),
        OpenChannelCanceled: sts.enumStruct({
            byParachain: Id,
            channelId: HrmpChannelId,
        }),
        OpenChannelDepositsUpdated: sts.enumStruct({
            sender: Id,
            recipient: Id,
        }),
        OpenChannelRequested: sts.enumStruct({
            sender: Id,
            recipient: Id,
            proposedMaxCapacity: sts.number(),
            proposedMaxMessageSize: sts.number(),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const GrandpaEvent: sts.Type<GrandpaEvent> = sts.closedEnum(() => {
    return {
        NewAuthorities: sts.enumStruct({
            authoritySet: sts.array(() => sts.tuple(() => [Public, sts.bigint()])),
        }),
        Paused: sts.unit(),
        Resumed: sts.unit(),
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

/**
 * The `Event` enum of this pallet
 */
export const FellowshipReferendaEvent: sts.Type<FellowshipReferendaEvent> = sts.closedEnum(() => {
    return {
        Approved: sts.enumStruct({
            index: sts.number(),
        }),
        Cancelled: sts.enumStruct({
            index: sts.number(),
            tally: Type_718,
        }),
        ConfirmAborted: sts.enumStruct({
            index: sts.number(),
        }),
        ConfirmStarted: sts.enumStruct({
            index: sts.number(),
        }),
        Confirmed: sts.enumStruct({
            index: sts.number(),
            tally: Type_718,
        }),
        DecisionDepositPlaced: sts.enumStruct({
            index: sts.number(),
            who: AccountId32,
            amount: sts.bigint(),
        }),
        DecisionDepositRefunded: sts.enumStruct({
            index: sts.number(),
            who: AccountId32,
            amount: sts.bigint(),
        }),
        DecisionStarted: sts.enumStruct({
            index: sts.number(),
            track: sts.number(),
            proposal: Bounded,
            tally: Type_718,
        }),
        DepositSlashed: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Killed: sts.enumStruct({
            index: sts.number(),
            tally: Type_718,
        }),
        MetadataCleared: sts.enumStruct({
            index: sts.number(),
            hash: H256,
        }),
        MetadataSet: sts.enumStruct({
            index: sts.number(),
            hash: H256,
        }),
        Rejected: sts.enumStruct({
            index: sts.number(),
            tally: Type_718,
        }),
        SubmissionDepositRefunded: sts.enumStruct({
            index: sts.number(),
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Submitted: sts.enumStruct({
            index: sts.number(),
            track: sts.number(),
            proposal: Bounded,
        }),
        TimedOut: sts.enumStruct({
            index: sts.number(),
            tally: Type_718,
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const FellowshipCollectiveEvent: sts.Type<FellowshipCollectiveEvent> = sts.closedEnum(() => {
    return {
        MemberAdded: sts.enumStruct({
            who: AccountId32,
        }),
        MemberExchanged: sts.enumStruct({
            who: AccountId32,
            newWho: AccountId32,
        }),
        MemberRemoved: sts.enumStruct({
            who: AccountId32,
            rank: sts.number(),
        }),
        RankChanged: sts.enumStruct({
            who: AccountId32,
            rank: sts.number(),
        }),
        Voted: sts.enumStruct({
            who: AccountId32,
            poll: sts.number(),
            vote: VoteRecord,
            tally: Type_718,
        }),
    }
})

export const VoteRecord: sts.Type<VoteRecord> = sts.closedEnum(() => {
    return {
        Aye: sts.number(),
        Nay: sts.number(),
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
export const ElectionProviderMultiPhaseEvent: sts.Type<ElectionProviderMultiPhaseEvent> = sts.closedEnum(() => {
    return {
        ElectionFailed: sts.unit(),
        ElectionFinalized: sts.enumStruct({
            compute: ElectionCompute,
            score: ElectionScore,
        }),
        PhaseTransitioned: sts.enumStruct({
            from: Phase,
            to: Phase,
            round: sts.number(),
        }),
        Rewarded: sts.enumStruct({
            account: AccountId32,
            value: sts.bigint(),
        }),
        Slashed: sts.enumStruct({
            account: AccountId32,
            value: sts.bigint(),
        }),
        SolutionStored: sts.enumStruct({
            compute: ElectionCompute,
            origin: sts.option(() => AccountId32),
            prevEjected: sts.boolean(),
        }),
    }
})

export const Phase: sts.Type<Phase> = sts.closedEnum(() => {
    return {
        Emergency: sts.unit(),
        Off: sts.unit(),
        Signed: sts.unit(),
        Unsigned: sts.tuple(() => [sts.boolean(), sts.number()]),
    }
})

export const ElectionScore: sts.Type<ElectionScore> = sts.struct(() => {
    return {
        minimalStake: sts.bigint(),
        sumStake: sts.bigint(),
        sumStakeSquared: sts.bigint(),
    }
})

export const ElectionCompute: sts.Type<ElectionCompute> = sts.closedEnum(() => {
    return {
        Emergency: sts.unit(),
        Fallback: sts.unit(),
        OnChain: sts.unit(),
        Signed: sts.unit(),
        Unsigned: sts.unit(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const CrowdloanEvent: sts.Type<CrowdloanEvent> = sts.closedEnum(() => {
    return {
        AddedToNewRaise: sts.enumStruct({
            paraId: Id,
        }),
        AllRefunded: sts.enumStruct({
            paraId: Id,
        }),
        Contributed: sts.enumStruct({
            who: AccountId32,
            fundIndex: Id,
            amount: sts.bigint(),
        }),
        Created: sts.enumStruct({
            paraId: Id,
        }),
        Dissolved: sts.enumStruct({
            paraId: Id,
        }),
        Edited: sts.enumStruct({
            paraId: Id,
        }),
        HandleBidResult: sts.enumStruct({
            paraId: Id,
            result: sts.result(
                () => sts.unit(),
                () => DispatchError
            ),
        }),
        MemoUpdated: sts.enumStruct({
            who: AccountId32,
            paraId: Id,
            memo: sts.bytes(),
        }),
        PartiallyRefunded: sts.enumStruct({
            paraId: Id,
        }),
        Withdrew: sts.enumStruct({
            who: AccountId32,
            fundIndex: Id,
            amount: sts.bigint(),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const ConvictionVotingEvent: sts.Type<ConvictionVotingEvent> = sts.closedEnum(() => {
    return {
        Delegated: sts.tuple(() => [AccountId32, AccountId32]),
        Undelegated: AccountId32,
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
    return {
        Free: sts.unit(),
        Reserved: sts.unit(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const AuctionsEvent: sts.Type<AuctionsEvent> = sts.closedEnum(() => {
    return {
        AuctionClosed: sts.enumStruct({
            auctionIndex: sts.number(),
        }),
        AuctionStarted: sts.enumStruct({
            auctionIndex: sts.number(),
            leasePeriod: sts.number(),
            ending: sts.number(),
        }),
        BidAccepted: sts.enumStruct({
            bidder: AccountId32,
            paraId: Id,
            amount: sts.bigint(),
            firstSlot: sts.number(),
            lastSlot: sts.number(),
        }),
        ReserveConfiscated: sts.enumStruct({
            paraId: Id,
            leaser: AccountId32,
            amount: sts.bigint(),
        }),
        Reserved: sts.enumStruct({
            bidder: AccountId32,
            extraReserved: sts.bigint(),
            totalAmount: sts.bigint(),
        }),
        Unreserved: sts.enumStruct({
            bidder: AccountId32,
            amount: sts.bigint(),
        }),
        WinningOffset: sts.enumStruct({
            auctionIndex: sts.number(),
            blockNumber: sts.number(),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const AssignedSlotsEvent: sts.Type<AssignedSlotsEvent> = sts.closedEnum(() => {
    return {
        MaxPermanentSlotsChanged: sts.enumStruct({
            slots: sts.number(),
        }),
        MaxTemporarySlotsChanged: sts.enumStruct({
            slots: sts.number(),
        }),
        PermanentSlotAssigned: Id,
        TemporarySlotAssigned: Id,
    }
})

export const Type_722: sts.Type<Type_722> = sts.closedEnum(() => {
    return {
        ApplyExtrinsic: sts.number(),
        Finalization: sts.unit(),
        Initialization: sts.unit(),
    }
})

export const DispatchTime: sts.Type<DispatchTime> = sts.closedEnum(() => {
    return {
        After: sts.number(),
        At: sts.number(),
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

export const V3WeightLimit: sts.Type<V3WeightLimit> = sts.closedEnum(() => {
    return {
        Limited: Weight,
        Unlimited: sts.unit(),
    }
})

export const Type_556: sts.Type<Type_556> = sts.closedEnum(() => {
    return {
        V2: sts.array(() => Type_559),
        V3: sts.array(() => Type_563),
        V4: sts.array(() => Type_566),
    }
})

export const Type_566: sts.Type<Type_566> = sts.closedEnum(() => {
    return {
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
        SetAppendix: sts.array(() => Type_566),
        SetErrorHandler: sts.array(() => Type_566),
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
            call: Type_560,
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

export const Type_560: sts.Type<Type_560> = sts.struct(() => {
    return {
        encoded: sts.bytes(),
    }
})

export interface Type_560 {
    encoded: Bytes
}

export const V2OriginKind: sts.Type<V2OriginKind> = sts.closedEnum(() => {
    return {
        Native: sts.unit(),
        SovereignAccount: sts.unit(),
        Superuser: sts.unit(),
        Xcm: sts.unit(),
    }
})

export const V4QueryResponseInfo: sts.Type<V4QueryResponseInfo> = sts.struct(() => {
    return {
        destination: V4Location,
        queryId: sts.bigint(),
        maxWeight: Weight,
    }
})

export const V4AssetFilter: sts.Type<V4AssetFilter> = sts.closedEnum(() => {
    return {
        Definite: sts.array(() => V4Asset),
        Wild: V4WildAsset,
    }
})

export const V4WildAsset: sts.Type<V4WildAsset> = sts.closedEnum(() => {
    return {
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
    return {
        Fungible: sts.unit(),
        NonFungible: sts.unit(),
    }
})

export type Type_566 =
    | Type_566_AliasOrigin
    | Type_566_BurnAsset
    | Type_566_BuyExecution
    | Type_566_ClaimAsset
    | Type_566_ClearError
    | Type_566_ClearOrigin
    | Type_566_ClearTopic
    | Type_566_ClearTransactStatus
    | Type_566_DepositAsset
    | Type_566_DepositReserveAsset
    | Type_566_DescendOrigin
    | Type_566_ExchangeAsset
    | Type_566_ExpectAsset
    | Type_566_ExpectError
    | Type_566_ExpectOrigin
    | Type_566_ExpectPallet
    | Type_566_ExpectTransactStatus
    | Type_566_ExportMessage
    | Type_566_HrmpChannelAccepted
    | Type_566_HrmpChannelClosing
    | Type_566_HrmpNewChannelOpenRequest
    | Type_566_InitiateReserveWithdraw
    | Type_566_InitiateTeleport
    | Type_566_LockAsset
    | Type_566_NoteUnlockable
    | Type_566_QueryPallet
    | Type_566_QueryResponse
    | Type_566_ReceiveTeleportedAsset
    | Type_566_RefundSurplus
    | Type_566_ReportError
    | Type_566_ReportHolding
    | Type_566_ReportTransactStatus
    | Type_566_RequestUnlock
    | Type_566_ReserveAssetDeposited
    | Type_566_SetAppendix
    | Type_566_SetErrorHandler
    | Type_566_SetFeesMode
    | Type_566_SetTopic
    | Type_566_SubscribeVersion
    | Type_566_Transact
    | Type_566_TransferAsset
    | Type_566_TransferReserveAsset
    | Type_566_Trap
    | Type_566_UniversalOrigin
    | Type_566_UnlockAsset
    | Type_566_UnpaidExecution
    | Type_566_UnsubscribeVersion
    | Type_566_WithdrawAsset

export interface Type_566_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V4Location
}

export interface Type_566_BurnAsset {
    __kind: 'BurnAsset'
    value: V4Asset[]
}

export interface Type_566_BuyExecution {
    __kind: 'BuyExecution'
    fees: V4Asset
    weightLimit: V3WeightLimit
}

export interface Type_566_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V4Asset[]
    ticket: V4Location
}

export interface Type_566_ClearError {
    __kind: 'ClearError'
}

export interface Type_566_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_566_ClearTopic {
    __kind: 'ClearTopic'
}

export interface Type_566_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface Type_566_DepositAsset {
    __kind: 'DepositAsset'
    assets: V4AssetFilter
    beneficiary: V4Location
}

export interface Type_566_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V4AssetFilter
    dest: V4Location
    xcm: V4Instruction[]
}

export interface Type_566_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V4Junctions
}

export interface Type_566_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V4AssetFilter
    want: V4Asset[]
    maximal: boolean
}

export interface Type_566_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V4Asset[]
}

export interface Type_566_ExpectError {
    __kind: 'ExpectError'
    value?: [number, V3Error] | undefined
}

export interface Type_566_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value?: V4Location | undefined
}

export interface Type_566_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Bytes
    moduleName: Bytes
    crateMajor: number
    minCrateMinor: number
}

export interface Type_566_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface Type_566_ExportMessage {
    __kind: 'ExportMessage'
    network: V4NetworkId
    destination: V4Junctions
    xcm: V4Instruction[]
}

export interface Type_566_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_566_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_566_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_566_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V4AssetFilter
    reserve: V4Location
    xcm: V4Instruction[]
}

export interface Type_566_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V4AssetFilter
    dest: V4Location
    xcm: V4Instruction[]
}

export interface Type_566_LockAsset {
    __kind: 'LockAsset'
    asset: V4Asset
    unlocker: V4Location
}

export interface Type_566_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V4Asset
    owner: V4Location
}

export interface Type_566_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Bytes
    responseInfo: V4QueryResponseInfo
}

export interface Type_566_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V4Response
    maxWeight: Weight
    querier?: V4Location | undefined
}

export interface Type_566_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V4Asset[]
}

export interface Type_566_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_566_ReportError {
    __kind: 'ReportError'
    value: V4QueryResponseInfo
}

export interface Type_566_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V4QueryResponseInfo
    assets: V4AssetFilter
}

export interface Type_566_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V4QueryResponseInfo
}

export interface Type_566_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V4Asset
    locker: V4Location
}

export interface Type_566_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V4Asset[]
}

export interface Type_566_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_566[]
}

export interface Type_566_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_566[]
}

export interface Type_566_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface Type_566_SetTopic {
    __kind: 'SetTopic'
    value: Bytes
}

export interface Type_566_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface Type_566_Transact {
    __kind: 'Transact'
    originKind: V2OriginKind
    requireWeightAtMost: Weight
    call: Type_560
}

export interface Type_566_TransferAsset {
    __kind: 'TransferAsset'
    assets: V4Asset[]
    beneficiary: V4Location
}

export interface Type_566_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V4Asset[]
    dest: V4Location
    xcm: V4Instruction[]
}

export interface Type_566_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_566_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V4Junction
}

export interface Type_566_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V4Asset
    target: V4Location
}

export interface Type_566_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin?: V4Location | undefined
}

export interface Type_566_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_566_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V4Asset[]
}

export const Type_563: sts.Type<Type_563> = sts.closedEnum(() => {
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
        SetAppendix: sts.array(() => Type_563),
        SetErrorHandler: sts.array(() => Type_563),
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
            call: Type_560,
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

export const V3QueryResponseInfo: sts.Type<V3QueryResponseInfo> = sts.struct(() => {
    return {
        destination: V3MultiLocation,
        queryId: sts.bigint(),
        maxWeight: Weight,
    }
})

export interface V3QueryResponseInfo {
    destination: V3MultiLocation
    queryId: bigint
    maxWeight: Weight
}

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

export type Type_563 =
    | Type_563_AliasOrigin
    | Type_563_BurnAsset
    | Type_563_BuyExecution
    | Type_563_ClaimAsset
    | Type_563_ClearError
    | Type_563_ClearOrigin
    | Type_563_ClearTopic
    | Type_563_ClearTransactStatus
    | Type_563_DepositAsset
    | Type_563_DepositReserveAsset
    | Type_563_DescendOrigin
    | Type_563_ExchangeAsset
    | Type_563_ExpectAsset
    | Type_563_ExpectError
    | Type_563_ExpectOrigin
    | Type_563_ExpectPallet
    | Type_563_ExpectTransactStatus
    | Type_563_ExportMessage
    | Type_563_HrmpChannelAccepted
    | Type_563_HrmpChannelClosing
    | Type_563_HrmpNewChannelOpenRequest
    | Type_563_InitiateReserveWithdraw
    | Type_563_InitiateTeleport
    | Type_563_LockAsset
    | Type_563_NoteUnlockable
    | Type_563_QueryPallet
    | Type_563_QueryResponse
    | Type_563_ReceiveTeleportedAsset
    | Type_563_RefundSurplus
    | Type_563_ReportError
    | Type_563_ReportHolding
    | Type_563_ReportTransactStatus
    | Type_563_RequestUnlock
    | Type_563_ReserveAssetDeposited
    | Type_563_SetAppendix
    | Type_563_SetErrorHandler
    | Type_563_SetFeesMode
    | Type_563_SetTopic
    | Type_563_SubscribeVersion
    | Type_563_Transact
    | Type_563_TransferAsset
    | Type_563_TransferReserveAsset
    | Type_563_Trap
    | Type_563_UniversalOrigin
    | Type_563_UnlockAsset
    | Type_563_UnpaidExecution
    | Type_563_UnsubscribeVersion
    | Type_563_WithdrawAsset

export interface Type_563_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V3MultiLocation
}

export interface Type_563_BurnAsset {
    __kind: 'BurnAsset'
    value: V3MultiAsset[]
}

export interface Type_563_BuyExecution {
    __kind: 'BuyExecution'
    fees: V3MultiAsset
    weightLimit: V3WeightLimit
}

export interface Type_563_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V3MultiAsset[]
    ticket: V3MultiLocation
}

export interface Type_563_ClearError {
    __kind: 'ClearError'
}

export interface Type_563_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_563_ClearTopic {
    __kind: 'ClearTopic'
}

export interface Type_563_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface Type_563_DepositAsset {
    __kind: 'DepositAsset'
    assets: V3MultiAssetFilter
    beneficiary: V3MultiLocation
}

export interface Type_563_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_563_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V3Junctions
}

export interface Type_563_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V3MultiAssetFilter
    want: V3MultiAsset[]
    maximal: boolean
}

export interface Type_563_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V3MultiAsset[]
}

export interface Type_563_ExpectError {
    __kind: 'ExpectError'
    value?: [number, V3Error] | undefined
}

export interface Type_563_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value?: V3MultiLocation | undefined
}

export interface Type_563_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Bytes
    moduleName: Bytes
    crateMajor: number
    minCrateMinor: number
}

export interface Type_563_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface Type_563_ExportMessage {
    __kind: 'ExportMessage'
    network: V3NetworkId
    destination: V3Junctions
    xcm: V3Instruction[]
}

export interface Type_563_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_563_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_563_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_563_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V3MultiAssetFilter
    reserve: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_563_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_563_LockAsset {
    __kind: 'LockAsset'
    asset: V3MultiAsset
    unlocker: V3MultiLocation
}

export interface Type_563_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V3MultiAsset
    owner: V3MultiLocation
}

export interface Type_563_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Bytes
    responseInfo: V3QueryResponseInfo
}

export interface Type_563_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V3Response
    maxWeight: Weight
    querier?: V3MultiLocation | undefined
}

export interface Type_563_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V3MultiAsset[]
}

export interface Type_563_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_563_ReportError {
    __kind: 'ReportError'
    value: V3QueryResponseInfo
}

export interface Type_563_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V3QueryResponseInfo
    assets: V3MultiAssetFilter
}

export interface Type_563_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V3QueryResponseInfo
}

export interface Type_563_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V3MultiAsset
    locker: V3MultiLocation
}

export interface Type_563_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V3MultiAsset[]
}

export interface Type_563_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_563[]
}

export interface Type_563_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_563[]
}

export interface Type_563_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface Type_563_SetTopic {
    __kind: 'SetTopic'
    value: Bytes
}

export interface Type_563_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface Type_563_Transact {
    __kind: 'Transact'
    originKind: V2OriginKind
    requireWeightAtMost: Weight
    call: Type_560
}

export interface Type_563_TransferAsset {
    __kind: 'TransferAsset'
    assets: V3MultiAsset[]
    beneficiary: V3MultiLocation
}

export interface Type_563_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V3MultiAsset[]
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_563_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_563_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V3Junction
}

export interface Type_563_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V3MultiAsset
    target: V3MultiLocation
}

export interface Type_563_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin?: V3MultiLocation | undefined
}

export interface Type_563_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_563_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V3MultiAsset[]
}

export const Type_559: sts.Type<Type_559> = sts.closedEnum(() => {
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
        SetAppendix: sts.array(() => Type_559),
        SetErrorHandler: sts.array(() => Type_559),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: sts.bigint(),
        }),
        Transact: sts.enumStruct({
            originType: V2OriginKind,
            requireWeightAtMost: sts.bigint(),
            call: Type_560,
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

export type Type_559 =
    | Type_559_BuyExecution
    | Type_559_ClaimAsset
    | Type_559_ClearError
    | Type_559_ClearOrigin
    | Type_559_DepositAsset
    | Type_559_DepositReserveAsset
    | Type_559_DescendOrigin
    | Type_559_ExchangeAsset
    | Type_559_HrmpChannelAccepted
    | Type_559_HrmpChannelClosing
    | Type_559_HrmpNewChannelOpenRequest
    | Type_559_InitiateReserveWithdraw
    | Type_559_InitiateTeleport
    | Type_559_QueryHolding
    | Type_559_QueryResponse
    | Type_559_ReceiveTeleportedAsset
    | Type_559_RefundSurplus
    | Type_559_ReportError
    | Type_559_ReserveAssetDeposited
    | Type_559_SetAppendix
    | Type_559_SetErrorHandler
    | Type_559_SubscribeVersion
    | Type_559_Transact
    | Type_559_TransferAsset
    | Type_559_TransferReserveAsset
    | Type_559_Trap
    | Type_559_UnsubscribeVersion
    | Type_559_WithdrawAsset

export interface Type_559_BuyExecution {
    __kind: 'BuyExecution'
    fees: V2MultiAsset
    weightLimit: V2WeightLimit
}

export interface Type_559_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V2MultiAsset[]
    ticket: V2MultiLocation
}

export interface Type_559_ClearError {
    __kind: 'ClearError'
}

export interface Type_559_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_559_DepositAsset {
    __kind: 'DepositAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    beneficiary: V2MultiLocation
}

export interface Type_559_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_559_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V2Junctions
}

export interface Type_559_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V2MultiAssetFilter
    receive: V2MultiAsset[]
}

export interface Type_559_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_559_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_559_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_559_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V2MultiAssetFilter
    reserve: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_559_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V2MultiAssetFilter
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_559_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V2MultiLocation
    assets: V2MultiAssetFilter
    maxResponseWeight: bigint
}

export interface Type_559_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface Type_559_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V2MultiAsset[]
}

export interface Type_559_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_559_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V2MultiLocation
    maxResponseWeight: bigint
}

export interface Type_559_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V2MultiAsset[]
}

export interface Type_559_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_559[]
}

export interface Type_559_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_559[]
}

export interface Type_559_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface Type_559_Transact {
    __kind: 'Transact'
    originType: V2OriginKind
    requireWeightAtMost: bigint
    call: Type_560
}

export interface Type_559_TransferAsset {
    __kind: 'TransferAsset'
    assets: V2MultiAsset[]
    beneficiary: V2MultiLocation
}

export interface Type_559_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V2MultiAsset[]
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_559_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_559_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_559_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V2MultiAsset[]
}

export type Type_556 = Type_556_V2 | Type_556_V3 | Type_556_V4

export interface Type_556_V2 {
    __kind: 'V2'
    value: Type_559[]
}

export interface Type_556_V3 {
    __kind: 'V3'
    value: Type_563[]
}

export interface Type_556_V4 {
    __kind: 'V4'
    value: Type_566[]
}

export const VersionedXcm: sts.Type<VersionedXcm> = sts.closedEnum(() => {
    return {
        V2: sts.array(() => V2Instruction),
        V3: sts.array(() => V3Instruction),
        V4: sts.array(() => V4Instruction),
    }
})

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

export const V6InherentData: sts.Type<V6InherentData> = sts.struct(() => {
    return {
        bitfields: sts.array(() => V6UncheckedSigned),
        backedCandidates: sts.array(() => V6BackedCandidate),
        disputes: sts.array(() => V6DisputeStatementSet),
        parentHeader: Header,
    }
})

export const Header: sts.Type<Header> = sts.struct(() => {
    return {
        parentHash: H256,
        number: sts.number(),
        stateRoot: H256,
        extrinsicsRoot: H256,
        digest: Digest,
    }
})

export const Digest: sts.Type<Digest> = sts.struct(() => {
    return {
        logs: sts.array(() => DigestItem),
    }
})

export const DigestItem: sts.Type<DigestItem> = sts.closedEnum(() => {
    return {
        Consensus: sts.tuple(() => [sts.bytes(), sts.bytes()]),
        Other: sts.bytes(),
        PreRuntime: sts.tuple(() => [sts.bytes(), sts.bytes()]),
        RuntimeEnvironmentUpdated: sts.unit(),
        Seal: sts.tuple(() => [sts.bytes(), sts.bytes()]),
    }
})

export type DigestItem =
    | DigestItem_Consensus
    | DigestItem_Other
    | DigestItem_PreRuntime
    | DigestItem_RuntimeEnvironmentUpdated
    | DigestItem_Seal

export interface DigestItem_Consensus {
    __kind: 'Consensus'
    value: [Bytes, Bytes]
}

export interface DigestItem_Other {
    __kind: 'Other'
    value: Bytes
}

export interface DigestItem_PreRuntime {
    __kind: 'PreRuntime'
    value: [Bytes, Bytes]
}

export interface DigestItem_RuntimeEnvironmentUpdated {
    __kind: 'RuntimeEnvironmentUpdated'
}

export interface DigestItem_Seal {
    __kind: 'Seal'
    value: [Bytes, Bytes]
}

export interface Digest {
    logs: DigestItem[]
}

export interface Header {
    parentHash: H256
    number: number
    stateRoot: H256
    extrinsicsRoot: H256
    digest: Digest
}

export const V6BackedCandidate: sts.Type<V6BackedCandidate> = sts.struct(() => {
    return {
        candidate: V6CommittedCandidateReceipt,
        validityVotes: sts.array(() => V6ValidityAttestation),
        validatorIndices: sts.bitseq(),
    }
})

export const V6CommittedCandidateReceipt: sts.Type<V6CommittedCandidateReceipt> = sts.struct(() => {
    return {
        descriptor: V6CandidateDescriptor,
        commitments: V6CandidateCommitments,
    }
})

export const V6CandidateCommitments: sts.Type<V6CandidateCommitments> = sts.struct(() => {
    return {
        upwardMessages: sts.array(() => sts.bytes()),
        horizontalMessages: sts.array(() => OutboundHrmpMessage),
        newValidationCode: sts.option(() => ValidationCode),
        headData: HeadData,
        processedDownwardMessages: sts.number(),
        hrmpWatermark: sts.number(),
    }
})

export const ValidationCode = sts.bytes()

export const OutboundHrmpMessage: sts.Type<OutboundHrmpMessage> = sts.struct(() => {
    return {
        recipient: Id,
        data: sts.bytes(),
    }
})

export interface OutboundHrmpMessage {
    recipient: Id
    data: Bytes
}

export interface V6CandidateCommitments {
    upwardMessages: Bytes[]
    horizontalMessages: OutboundHrmpMessage[]
    newValidationCode?: ValidationCode | undefined
    headData: HeadData
    processedDownwardMessages: number
    hrmpWatermark: number
}

export type ValidationCode = Bytes

export interface V6CommittedCandidateReceipt {
    descriptor: V6CandidateDescriptor
    commitments: V6CandidateCommitments
}

export interface V6BackedCandidate {
    candidate: V6CommittedCandidateReceipt
    validityVotes: V6ValidityAttestation[]
    validatorIndices: BitSequence
}

export const V6UncheckedSigned: sts.Type<V6UncheckedSigned> = sts.struct(() => {
    return {
        payload: V6AvailabilityBitfield,
        validatorIndex: V6ValidatorIndex,
        signature: sts.bytes(),
    }
})

export const V6AvailabilityBitfield = sts.bitseq()

export interface V6UncheckedSigned {
    payload: V6AvailabilityBitfield
    validatorIndex: V6ValidatorIndex
    signature: Bytes
}

export type V6AvailabilityBitfield = BitSequence

export interface V6InherentData {
    bitfields: V6UncheckedSigned[]
    backedCandidates: V6BackedCandidate[]
    disputes: V6DisputeStatementSet[]
    parentHeader: Header
}

export const SchedulerParams: sts.Type<SchedulerParams> = sts.struct(() => {
    return {
        groupRotationFrequency: sts.number(),
        parasAvailabilityPeriod: sts.number(),
        maxValidatorsPerCore: sts.option(() => sts.number()),
        lookahead: sts.number(),
        numCores: sts.number(),
        maxAvailabilityTimeouts: sts.number(),
        onDemandQueueMaxSize: sts.number(),
        onDemandTargetQueueUtilization: Perbill,
        onDemandFeeVariability: Perbill,
        onDemandBaseFee: sts.bigint(),
        ttl: sts.number(),
    }
})

export const ApprovalVotingParams: sts.Type<ApprovalVotingParams> = sts.struct(() => {
    return {
        maxApprovalCoalesceCount: sts.number(),
    }
})

export const Perbill = sts.number()

export const V6ExecutorParam: sts.Type<V6ExecutorParam> = sts.closedEnum(() => {
    return {
        MaxMemoryPages: sts.number(),
        PrecheckingMaxMemory: sts.bigint(),
        PvfExecTimeout: sts.tuple(() => [V6PvfExecKind, sts.bigint()]),
        PvfPrepTimeout: sts.tuple(() => [V6PvfPrepKind, sts.bigint()]),
        StackLogicalMax: sts.number(),
        StackNativeMax: sts.number(),
        WasmExtBulkMemory: sts.unit(),
    }
})

export const V6PvfPrepKind: sts.Type<V6PvfPrepKind> = sts.closedEnum(() => {
    return {
        Precheck: sts.unit(),
        Prepare: sts.unit(),
    }
})

export const V6PvfExecKind: sts.Type<V6PvfExecKind> = sts.closedEnum(() => {
    return {
        Approval: sts.unit(),
        Backing: sts.unit(),
    }
})

export const StakingInfo: sts.Type<StakingInfo> = sts.struct(() => {
    return {
        annualInflationRate: Perbill,
        collatorPayoutCut: Perbill,
        treasuryPayoutCut: Perbill,
    }
})

export const Type_415: sts.Type<Type_415> = sts.closedEnum(() => {
    return {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: Perbill,
    }
})

export type Type_415 = Type_415_Noop | Type_415_Remove | Type_415_Set

export interface Type_415_Noop {
    __kind: 'Noop'
}

export interface Type_415_Remove {
    __kind: 'Remove'
}

export interface Type_415_Set {
    __kind: 'Set'
    value: Perbill
}

export const Type_414: sts.Type<Type_414> = sts.closedEnum(() => {
    return {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: Percent,
    }
})

export type Type_414 = Type_414_Noop | Type_414_Remove | Type_414_Set

export interface Type_414_Noop {
    __kind: 'Noop'
}

export interface Type_414_Remove {
    __kind: 'Remove'
}

export interface Type_414_Set {
    __kind: 'Set'
    value: Percent
}

export const Type_413: sts.Type<Type_413> = sts.closedEnum(() => {
    return {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: sts.number(),
    }
})

export type Type_413 = Type_413_Noop | Type_413_Remove | Type_413_Set

export interface Type_413_Noop {
    __kind: 'Noop'
}

export interface Type_413_Remove {
    __kind: 'Remove'
}

export interface Type_413_Set {
    __kind: 'Set'
    value: number
}

export const ConfigOp: sts.Type<ConfigOp> = sts.closedEnum(() => {
    return {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: sts.bigint(),
    }
})

export type ConfigOp = ConfigOp_Noop | ConfigOp_Remove | ConfigOp_Set

export interface ConfigOp_Noop {
    __kind: 'Noop'
}

export interface ConfigOp_Remove {
    __kind: 'Remove'
}

export interface ConfigOp_Set {
    __kind: 'Set'
    value: bigint
}

export const ProxyType: sts.Type<ProxyType> = sts.closedEnum(() => {
    return {
        Any: sts.unit(),
        Governance: sts.unit(),
        Tokens: sts.unit(),
    }
})

export const CounterOfferResponse: sts.Type<CounterOfferResponse> = sts.closedEnum(() => {
    return {
        Accept: sts.unit(),
        Counter: sts.bigint(),
        Reject: sts.unit(),
    }
})

export const ListingData: sts.Type<ListingData> = sts.closedEnum(() => {
    return {
        Auction: AuctionData,
        FixedPrice: sts.unit(),
        Offer: OfferData,
    }
})

export const OfferData: sts.Type<OfferData> = sts.struct(() => {
    return {
        expiration: sts.option(() => sts.number()),
    }
})

export const AuctionData: sts.Type<AuctionData> = sts.struct(() => {
    return {
        startBlock: sts.number(),
        endBlock: sts.number(),
    }
})

export const AssetId: sts.Type<AssetId> = sts.struct(() => {
    return {
        collectionId: sts.bigint(),
        tokenId: sts.bigint(),
    }
})

export const RuleSetDescriptor: sts.Type<RuleSetDescriptor> = sts.struct(() => {
    return {
        rules: sts.array(() => DispatchRuleDescriptor),
        requireAccount: sts.boolean(),
    }
})

export const DispatchRuleDescriptor: sts.Type<DispatchRuleDescriptor> = sts.closedEnum(() => {
    return {
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
    return {
        amount: sts.bigint(),
        resetPeriod: sts.number(),
    }
})

export interface UserFuelBudgetRuleDescriptor {
    amount: bigint
    resetPeriod: number
}

export const TankFuelBudgetRuleDescriptor: sts.Type<TankFuelBudgetRuleDescriptor> = sts.struct(() => {
    return {
        amount: sts.bigint(),
        resetPeriod: sts.number(),
    }
})

export interface TankFuelBudgetRuleDescriptor {
    amount: bigint
    resetPeriod: number
}

export type DispatchRuleDescriptor =
    | DispatchRuleDescriptor_MaxFuelBurnPerTransaction
    | DispatchRuleDescriptor_MinimumInfusion
    | DispatchRuleDescriptor_PermittedCalls
    | DispatchRuleDescriptor_PermittedExtrinsics
    | DispatchRuleDescriptor_RequireSignature
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

export type Call =
    | Call_AssignedSlots
    | Call_Auctions
    | Call_Babe
    | Call_Balances
    | Call_Beefy
    | Call_Configuration
    | Call_ConvictionVoting
    | Call_Crowdloan
    | Call_ElectionProviderMultiPhase
    | Call_ExtrinsicPause
    | Call_FellowshipCollective
    | Call_FellowshipReferenda
    | Call_FuelTanks
    | Call_Grandpa
    | Call_Hrmp
    | Call_Identity
    | Call_ImOnline
    | Call_Initializer
    | Call_Marketplace
    | Call_MessageQueue
    | Call_Migrations
    | Call_MultiTokens
    | Call_Multisig
    | Call_NominationPools
    | Call_ParaInclusion
    | Call_ParaInherent
    | Call_Paras
    | Call_ParasDisputes
    | Call_ParasShared
    | Call_ParasSlashing
    | Call_ParasSudoWrapper
    | Call_Preimage
    | Call_Proxy
    | Call_Referenda
    | Call_Registrar
    | Call_SafeMode
    | Call_Scheduler
    | Call_Session
    | Call_Slots
    | Call_StakeExchange
    | Call_Staking
    | Call_Sudo
    | Call_System
    | Call_Timestamp
    | Call_Treasury
    | Call_Utility
    | Call_ValidatorManager
    | Call_VoteManager
    | Call_VoterList
    | Call_Whitelist
    | Call_XcmPallet

export interface Call_AssignedSlots {
    __kind: 'AssignedSlots'
    value: AssignedSlotsCall
}

export interface Call_Auctions {
    __kind: 'Auctions'
    value: AuctionsCall
}

export interface Call_Babe {
    __kind: 'Babe'
    value: BabeCall
}

export interface Call_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Call_Beefy {
    __kind: 'Beefy'
    value: BeefyCall
}

export interface Call_Configuration {
    __kind: 'Configuration'
    value: ConfigurationCall
}

export interface Call_ConvictionVoting {
    __kind: 'ConvictionVoting'
    value: ConvictionVotingCall
}

export interface Call_Crowdloan {
    __kind: 'Crowdloan'
    value: CrowdloanCall
}

export interface Call_ElectionProviderMultiPhase {
    __kind: 'ElectionProviderMultiPhase'
    value: ElectionProviderMultiPhaseCall
}

export interface Call_ExtrinsicPause {
    __kind: 'ExtrinsicPause'
    value: ExtrinsicPauseCall
}

export interface Call_FellowshipCollective {
    __kind: 'FellowshipCollective'
    value: FellowshipCollectiveCall
}

export interface Call_FellowshipReferenda {
    __kind: 'FellowshipReferenda'
    value: FellowshipReferendaCall
}

export interface Call_FuelTanks {
    __kind: 'FuelTanks'
    value: FuelTanksCall
}

export interface Call_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaCall
}

export interface Call_Hrmp {
    __kind: 'Hrmp'
    value: HrmpCall
}

export interface Call_Identity {
    __kind: 'Identity'
    value: IdentityCall
}

export interface Call_ImOnline {
    __kind: 'ImOnline'
    value: ImOnlineCall
}

export interface Call_Initializer {
    __kind: 'Initializer'
    value: InitializerCall
}

export interface Call_Marketplace {
    __kind: 'Marketplace'
    value: MarketplaceCall
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

export interface Call_NominationPools {
    __kind: 'NominationPools'
    value: NominationPoolsCall
}

export interface Call_ParaInclusion {
    __kind: 'ParaInclusion'
    value: ParaInclusionCall
}

export interface Call_ParaInherent {
    __kind: 'ParaInherent'
    value: ParaInherentCall
}

export interface Call_Paras {
    __kind: 'Paras'
    value: ParasCall
}

export interface Call_ParasDisputes {
    __kind: 'ParasDisputes'
    value: ParasDisputesCall
}

export interface Call_ParasShared {
    __kind: 'ParasShared'
    value: ParasSharedCall
}

export interface Call_ParasSlashing {
    __kind: 'ParasSlashing'
    value: ParasSlashingCall
}

export interface Call_ParasSudoWrapper {
    __kind: 'ParasSudoWrapper'
    value: ParasSudoWrapperCall
}

export interface Call_Preimage {
    __kind: 'Preimage'
    value: PreimageCall
}

export interface Call_Proxy {
    __kind: 'Proxy'
    value: ProxyCall
}

export interface Call_Referenda {
    __kind: 'Referenda'
    value: ReferendaCall
}

export interface Call_Registrar {
    __kind: 'Registrar'
    value: RegistrarCall
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

export interface Call_Slots {
    __kind: 'Slots'
    value: SlotsCall
}

export interface Call_StakeExchange {
    __kind: 'StakeExchange'
    value: StakeExchangeCall
}

export interface Call_Staking {
    __kind: 'Staking'
    value: StakingCall
}

export interface Call_Sudo {
    __kind: 'Sudo'
    value: SudoCall
}

export interface Call_System {
    __kind: 'System'
    value: SystemCall
}

export interface Call_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Call_Treasury {
    __kind: 'Treasury'
    value: TreasuryCall
}

export interface Call_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Call_ValidatorManager {
    __kind: 'ValidatorManager'
    value: ValidatorManagerCall
}

export interface Call_VoteManager {
    __kind: 'VoteManager'
    value: VoteManagerCall
}

export interface Call_VoterList {
    __kind: 'VoterList'
    value: VoterListCall
}

export interface Call_Whitelist {
    __kind: 'Whitelist'
    value: WhitelistCall
}

export interface Call_XcmPallet {
    __kind: 'XcmPallet'
    value: XcmPalletCall
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type XcmPalletCall =
    | XcmPalletCall_claim_assets
    | XcmPalletCall_execute
    | XcmPalletCall_force_default_xcm_version
    | XcmPalletCall_force_subscribe_version_notify
    | XcmPalletCall_force_suspension
    | XcmPalletCall_force_unsubscribe_version_notify
    | XcmPalletCall_force_xcm_version
    | XcmPalletCall_limited_reserve_transfer_assets
    | XcmPalletCall_limited_teleport_assets
    | XcmPalletCall_reserve_transfer_assets
    | XcmPalletCall_send
    | XcmPalletCall_teleport_assets
    | XcmPalletCall_transfer_assets

/**
 * Claims assets trapped on this pallet because of leftover assets during XCM execution.
 *
 * - `origin`: Anyone can call this extrinsic.
 * - `assets`: The exact assets that were trapped. Use the version to specify what version
 * was the latest when they were trapped.
 * - `beneficiary`: The location/account where the claimed assets will be deposited.
 */
export interface XcmPalletCall_claim_assets {
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
export interface XcmPalletCall_execute {
    __kind: 'execute'
    message: Type_556
    maxWeight: Weight
}

/**
 * Set a safe XCM version (the version that XCM should be encoded with if the most recent
 * version a destination can accept is unknown).
 *
 * - `origin`: Must be an origin specified by AdminOrigin.
 * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
 */
export interface XcmPalletCall_force_default_xcm_version {
    __kind: 'force_default_xcm_version'
    maybeXcmVersion?: number | undefined
}

/**
 * Ask a location to notify us regarding their XCM version and any changes to it.
 *
 * - `origin`: Must be an origin specified by AdminOrigin.
 * - `location`: The location to which we should subscribe for XCM version notifications.
 */
export interface XcmPalletCall_force_subscribe_version_notify {
    __kind: 'force_subscribe_version_notify'
    location: VersionedLocation
}

/**
 * Set or unset the global suspension state of the XCM executor.
 *
 * - `origin`: Must be an origin specified by AdminOrigin.
 * - `suspended`: `true` to suspend, `false` to resume.
 */
export interface XcmPalletCall_force_suspension {
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
export interface XcmPalletCall_force_unsubscribe_version_notify {
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
export interface XcmPalletCall_force_xcm_version {
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
export interface XcmPalletCall_limited_reserve_transfer_assets {
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
export interface XcmPalletCall_limited_teleport_assets {
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
export interface XcmPalletCall_reserve_transfer_assets {
    __kind: 'reserve_transfer_assets'
    dest: VersionedLocation
    beneficiary: VersionedLocation
    assets: VersionedAssets
    feeAssetItem: number
}

export interface XcmPalletCall_send {
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
export interface XcmPalletCall_teleport_assets {
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
export interface XcmPalletCall_transfer_assets {
    __kind: 'transfer_assets'
    dest: VersionedLocation
    beneficiary: VersionedLocation
    assets: VersionedAssets
    feeAssetItem: number
    weightLimit: V3WeightLimit
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type WhitelistCall =
    | WhitelistCall_dispatch_whitelisted_call
    | WhitelistCall_dispatch_whitelisted_call_with_preimage
    | WhitelistCall_remove_whitelisted_call
    | WhitelistCall_whitelist_call

export interface WhitelistCall_dispatch_whitelisted_call {
    __kind: 'dispatch_whitelisted_call'
    callHash: H256
    callEncodedLen: number
    callWeightWitness: Weight
}

export interface WhitelistCall_dispatch_whitelisted_call_with_preimage {
    __kind: 'dispatch_whitelisted_call_with_preimage'
    call: Call
}

export interface WhitelistCall_remove_whitelisted_call {
    __kind: 'remove_whitelisted_call'
    callHash: H256
}

export interface WhitelistCall_whitelist_call {
    __kind: 'whitelist_call'
    callHash: H256
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type VoterListCall = VoterListCall_put_in_front_of | VoterListCall_put_in_front_of_other | VoterListCall_rebag

/**
 * Move the caller's Id directly in front of `lighter`.
 *
 * The dispatch origin for this call must be _Signed_ and can only be called by the Id of
 * the account going in front of `lighter`. Fee is payed by the origin under all
 * circumstances.
 *
 * Only works if:
 *
 * - both nodes are within the same bag,
 * - and `origin` has a greater `Score` than `lighter`.
 */
export interface VoterListCall_put_in_front_of {
    __kind: 'put_in_front_of'
    lighter: MultiAddress
}

/**
 * Same as [`Pallet::put_in_front_of`], but it can be called by anyone.
 *
 * Fee is paid by the origin under all circumstances.
 */
export interface VoterListCall_put_in_front_of_other {
    __kind: 'put_in_front_of_other'
    heavier: MultiAddress
    lighter: MultiAddress
}

/**
 * Declare that some `dislocated` account has, through rewards or penalties, sufficiently
 * changed its score that it should properly fall into a different bag than its current
 * one.
 *
 * Anyone can call this function about any potentially dislocated account.
 *
 * Will always update the stored score of `dislocated` to the correct score, based on
 * `ScoreProvider`.
 *
 * If `dislocated` does not exists, it returns an error.
 */
export interface VoterListCall_rebag {
    __kind: 'rebag'
    dislocated: MultiAddress
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
export type VoteManagerCall =
    | VoteManagerCall_remove_other_vote
    | VoteManagerCall_remove_vote
    | VoteManagerCall_unlock
    | VoteManagerCall_vote

/**
 * Remove a vote for a poll.
 *
 * If the `target` is equal to the signer, then this function is exactly equivalent to
 * `remove_vote`. If not equal to the signer, then the vote must have expired,
 * either because the poll was cancelled, because the voter lost the poll or
 * because the conviction period is over.
 *
 * The dispatch origin of this call must be _Signed_.
 *
 * - `target`: The account of the vote to be removed; this account must have voted for poll
 *   `index`.
 * - `index`: The index of poll of the vote to be removed.
 * - `class`: The class of the poll.
 *
 * Weight: `O(R + log R)` where R is the number of polls that `target` has voted on.
 *   Weight is calculated for the maximum number of vote.
 */
export interface VoteManagerCall_remove_other_vote {
    __kind: 'remove_other_vote'
    target: MultiAddress
    class: number
    index: number
}

/**
 * Remove a vote for a poll.
 *
 * If:
 * - the poll was cancelled, or
 * - the poll is ongoing, or
 * - the poll has ended such that
 *   - the vote of the account was in opposition to the result; or
 *   - there was no conviction to the account's vote; or
 *   - the account made a split vote
 * ...then the vote is removed cleanly and a following call to `unlock` may result in more
 * funds being available.
 *
 * If, however, the poll has ended and:
 * - it finished corresponding to the vote of the account, and
 * - the account made a standard vote with conviction, and
 * - the lock period of the conviction is not over
 * ...then the lock will be aggregated into the overall account's lock, which may involve
 * *overlocking* (where the two locks are combined into a single lock that is the maximum
 * of both the amount locked and the time is it locked for).
 *
 * The dispatch origin of this call must be _Signed_, and the signer must have a vote
 * registered for poll `index`.
 *
 * - `index`: The index of poll of the vote to be removed.
 * - `class`: Optional parameter, if given it indicates the class of the poll. For polls
 *   which have finished or are cancelled, this must be `Some`.
 *
 * Weight: `O(R + log R)` where R is the number of polls that `target` has voted on.
 *   Weight is calculated for the maximum number of vote.
 */
export interface VoteManagerCall_remove_vote {
    __kind: 'remove_vote'
    class?: number | undefined
    index: number
}

/**
 * Remove the lock caused by prior voting/delegating which has expired within a particular
 * class.
 *
 * The dispatch origin of this call must be _Signed_.
 *
 * - `class`: The class of polls to unlock.
 * - `target`: The account to remove the lock on.
 *
 * Weight: `O(R)` with R number of vote of target.
 */
export interface VoteManagerCall_unlock {
    __kind: 'unlock'
    class: number
    target: MultiAddress
    index: number
}

/**
 * Vote in a poll. If `vote.is_aye()`, the vote is to enact the proposal;
 * otherwise it is a vote to keep the status quo.
 *
 * The dispatch origin of this call must be _Signed_.
 *
 * - `poll_index`: The index of the poll to vote for.
 * - `vote`: The vote configuration.
 *
 * Weight: `O(R)` where R is the number of polls the voter has voted on.
 */
export interface VoteManagerCall_vote {
    __kind: 'vote'
    pollIndex: number
    vote: AccountVote
    currency: VoteCurrency
}

export type VoteCurrency = VoteCurrency_Enj | VoteCurrency_SEnj

export interface VoteCurrency_Enj {
    __kind: 'Enj'
}

export interface VoteCurrency_SEnj {
    __kind: 'SEnj'
    value: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ValidatorManagerCall = ValidatorManagerCall_deregister_validators | ValidatorManagerCall_register_validators

/**
 * Remove validators from the set.
 *
 * The removed validators will be deactivated from current session + 2.
 */
export interface ValidatorManagerCall_deregister_validators {
    __kind: 'deregister_validators'
    validators: AccountId32[]
}

/**
 * Add new validators to the set.
 *
 * The new validators will be active from current session + 2.
 */
export interface ValidatorManagerCall_register_validators {
    __kind: 'register_validators'
    validators: AccountId32[]
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

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TreasuryCall =
    | TreasuryCall_approve_proposal
    | TreasuryCall_check_status
    | TreasuryCall_payout
    | TreasuryCall_propose_spend
    | TreasuryCall_reject_proposal
    | TreasuryCall_remove_approval
    | TreasuryCall_spend
    | TreasuryCall_spend_local
    | TreasuryCall_void_spend

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
export interface TreasuryCall_approve_proposal {
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
export interface TreasuryCall_check_status {
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
export interface TreasuryCall_payout {
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
export interface TreasuryCall_propose_spend {
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
export interface TreasuryCall_reject_proposal {
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
export interface TreasuryCall_remove_approval {
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
export interface TreasuryCall_spend {
    __kind: 'spend'
    amount: bigint
    beneficiary: AccountId32
    validFrom?: number | undefined
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
export interface TreasuryCall_spend_local {
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
export interface TreasuryCall_void_spend {
    __kind: 'void_spend'
    index: number
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
export type SystemCall =
    | SystemCall_apply_authorized_upgrade
    | SystemCall_authorize_upgrade
    | SystemCall_authorize_upgrade_without_checks
    | SystemCall_kill_prefix
    | SystemCall_kill_storage
    | SystemCall_remark
    | SystemCall_remark_with_event
    | SystemCall_set_code
    | SystemCall_set_code_without_checks
    | SystemCall_set_heap_pages
    | SystemCall_set_storage

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
export type SudoCall =
    | SudoCall_remove_key
    | SudoCall_set_key
    | SudoCall_sudo
    | SudoCall_sudo_as
    | SudoCall_sudo_unchecked_weight

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
export type StakingCall =
    | StakingCall_bond
    | StakingCall_bond_extra
    | StakingCall_cancel_deferred_slash
    | StakingCall_chill
    | StakingCall_chill_other
    | StakingCall_deprecate_controller_batch
    | StakingCall_force_apply_min_commission
    | StakingCall_force_new_era
    | StakingCall_force_new_era_always
    | StakingCall_force_no_eras
    | StakingCall_force_unstake
    | StakingCall_increase_validator_count
    | StakingCall_kick
    | StakingCall_nominate
    | StakingCall_payout_stakers
    | StakingCall_payout_stakers_by_page
    | StakingCall_reap_stash
    | StakingCall_rebond
    | StakingCall_scale_validator_count
    | StakingCall_set_controller
    | StakingCall_set_invulnerables
    | StakingCall_set_min_commission
    | StakingCall_set_payee
    | StakingCall_set_staking_configs
    | StakingCall_set_validator_count
    | StakingCall_unbond
    | StakingCall_update_payee
    | StakingCall_validate
    | StakingCall_withdraw_unbonded

/**
 * Take the origin account as a stash and lock up `value` of its balance. `controller` will
 * be the account that controls it.
 *
 * `value` must be more than the `minimum_balance` specified by `T::Currency`.
 *
 * The dispatch origin for this call must be _Signed_ by the stash account.
 *
 * Emits `Bonded`.
 * ## Complexity
 * - Independent of the arguments. Moderate complexity.
 * - O(1).
 * - Three extra DB entries.
 *
 * NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned
 * unless the `origin` falls below _existential deposit_ and gets removed as dust.
 */
export interface StakingCall_bond {
    __kind: 'bond'
    value: bigint
    payee: RewardDestination
}

/**
 * Add some extra amount that have appeared in the stash `free_balance` into the balance up
 * for staking.
 *
 * The dispatch origin for this call must be _Signed_ by the stash, not the controller.
 *
 * Use this if there are additional funds in your stash account that you wish to bond.
 * Unlike [`bond`](Self::bond) or [`unbond`](Self::unbond) this function does not impose
 * any limitation on the amount that can be added.
 *
 * Emits `Bonded`.
 *
 * ## Complexity
 * - Independent of the arguments. Insignificant complexity.
 * - O(1).
 */
export interface StakingCall_bond_extra {
    __kind: 'bond_extra'
    maxAdditional: bigint
}

/**
 * Cancel enactment of a deferred slash.
 *
 * Can be called by the `T::AdminOrigin`.
 *
 * Parameters: era and indices of the slashes for that era to kill.
 */
export interface StakingCall_cancel_deferred_slash {
    __kind: 'cancel_deferred_slash'
    era: number
    slashIndices: number[]
}

/**
 * Declare no desire to either validate or nominate.
 *
 * Effects will be felt at the beginning of the next era.
 *
 * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 *
 * ## Complexity
 * - Independent of the arguments. Insignificant complexity.
 * - Contains one read.
 * - Writes are limited to the `origin` account key.
 */
export interface StakingCall_chill {
    __kind: 'chill'
}

/**
 * Declare a `controller` to stop participating as either a validator or nominator.
 *
 * Effects will be felt at the beginning of the next era.
 *
 * The dispatch origin for this call must be _Signed_, but can be called by anyone.
 *
 * If the caller is the same as the controller being targeted, then no further checks are
 * enforced, and this function behaves just like `chill`.
 *
 * If the caller is different than the controller being targeted, the following conditions
 * must be met:
 *
 * * `controller` must belong to a nominator who has become non-decodable,
 *
 * Or:
 *
 * * A `ChillThreshold` must be set and checked which defines how close to the max
 *   nominators or validators we must reach before users can start chilling one-another.
 * * A `MaxNominatorCount` and `MaxValidatorCount` must be set which is used to determine
 *   how close we are to the threshold.
 * * A `MinNominatorBond` and `MinValidatorBond` must be set and checked, which determines
 *   if this is a person that should be chilled because they have not met the threshold
 *   bond required.
 *
 * This can be helpful if bond requirements are updated, and we need to remove old users
 * who do not satisfy these requirements.
 */
export interface StakingCall_chill_other {
    __kind: 'chill_other'
    stash: AccountId32
}

/**
 * Updates a batch of controller accounts to their corresponding stash account if they are
 * not the same. Ignores any controller accounts that do not exist, and does not operate if
 * the stash and controller are already the same.
 *
 * Effects will be felt instantly (as soon as this function is completed successfully).
 *
 * The dispatch origin must be `T::AdminOrigin`.
 */
export interface StakingCall_deprecate_controller_batch {
    __kind: 'deprecate_controller_batch'
    controllers: AccountId32[]
}

/**
 * Force a validator to have at least the minimum commission. This will not affect a
 * validator who already has a commission greater than or equal to the minimum. Any account
 * can call this.
 */
export interface StakingCall_force_apply_min_commission {
    __kind: 'force_apply_min_commission'
    validatorStash: AccountId32
}

/**
 * Force there to be a new era at the end of the next session. After this, it will be
 * reset to normal (non-forced) behaviour.
 *
 * The dispatch origin must be Root.
 *
 * # Warning
 *
 * The election process starts multiple blocks before the end of the era.
 * If this is called just before a new era is triggered, the election process may not
 * have enough blocks to get a result.
 *
 * ## Complexity
 * - No arguments.
 * - Weight: O(1)
 */
export interface StakingCall_force_new_era {
    __kind: 'force_new_era'
}

/**
 * Force there to be a new era at the end of sessions indefinitely.
 *
 * The dispatch origin must be Root.
 *
 * # Warning
 *
 * The election process starts multiple blocks before the end of the era.
 * If this is called just before a new era is triggered, the election process may not
 * have enough blocks to get a result.
 */
export interface StakingCall_force_new_era_always {
    __kind: 'force_new_era_always'
}

/**
 * Force there to be no new eras indefinitely.
 *
 * The dispatch origin must be Root.
 *
 * # Warning
 *
 * The election process starts multiple blocks before the end of the era.
 * Thus the election process may be ongoing when this is called. In this case the
 * election will continue until the next era is triggered.
 *
 * ## Complexity
 * - No arguments.
 * - Weight: O(1)
 */
export interface StakingCall_force_no_eras {
    __kind: 'force_no_eras'
}

/**
 * Force a current staker to become completely unstaked, immediately.
 *
 * The dispatch origin must be Root.
 *
 * ## Parameters
 *
 * - `num_slashing_spans`: Refer to comments on [`Call::withdraw_unbonded`] for more
 * details.
 */
export interface StakingCall_force_unstake {
    __kind: 'force_unstake'
    stash: AccountId32
    numSlashingSpans: number
}

/**
 * Increments the ideal number of validators upto maximum of
 * `ElectionProviderBase::MaxWinners`.
 *
 * The dispatch origin must be Root.
 *
 * ## Complexity
 * Same as [`Self::set_validator_count`].
 */
export interface StakingCall_increase_validator_count {
    __kind: 'increase_validator_count'
    additional: number
}

/**
 * Remove the given nominations from the calling validator.
 *
 * Effects will be felt at the beginning of the next era.
 *
 * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 *
 * - `who`: A list of nominator stash accounts who are nominating this validator which
 *   should no longer be nominating this validator.
 *
 * Note: Making this call only makes sense if you first set the validator preferences to
 * block any further nominations.
 */
export interface StakingCall_kick {
    __kind: 'kick'
    who: MultiAddress[]
}

/**
 * Declare the desire to nominate `targets` for the origin controller.
 *
 * Effects will be felt at the beginning of the next era.
 *
 * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 *
 * ## Complexity
 * - The transaction's complexity is proportional to the size of `targets` (N)
 * which is capped at CompactAssignments::LIMIT (T::MaxNominations).
 * - Both the reads and writes follow a similar pattern.
 */
export interface StakingCall_nominate {
    __kind: 'nominate'
    targets: MultiAddress[]
}

/**
 * Pay out next page of the stakers behind a validator for the given era.
 *
 * - `validator_stash` is the stash account of the validator.
 * - `era` may be any era between `[current_era - history_depth; current_era]`.
 *
 * The origin of this call must be _Signed_. Any account can call this function, even if
 * it is not one of the stakers.
 *
 * The reward payout could be paged in case there are too many nominators backing the
 * `validator_stash`. This call will payout unpaid pages in an ascending order. To claim a
 * specific page, use `payout_stakers_by_page`.`
 *
 * If all pages are claimed, it returns an error `InvalidPage`.
 */
export interface StakingCall_payout_stakers {
    __kind: 'payout_stakers'
    validatorStash: AccountId32
    era: number
}

/**
 * Pay out a page of the stakers behind a validator for the given era and page.
 *
 * - `validator_stash` is the stash account of the validator.
 * - `era` may be any era between `[current_era - history_depth; current_era]`.
 * - `page` is the page index of nominators to pay out with value between 0 and
 *   `num_nominators / T::MaxExposurePageSize`.
 *
 * The origin of this call must be _Signed_. Any account can call this function, even if
 * it is not one of the stakers.
 *
 * If a validator has more than [`Config::MaxExposurePageSize`] nominators backing
 * them, then the list of nominators is paged, with each page being capped at
 * [`Config::MaxExposurePageSize`.] If a validator has more than one page of nominators,
 * the call needs to be made for each page separately in order for all the nominators
 * backing a validator to receive the reward. The nominators are not sorted across pages
 * and so it should not be assumed the highest staker would be on the topmost page and vice
 * versa. If rewards are not claimed in [`Config::HistoryDepth`] eras, they are lost.
 */
export interface StakingCall_payout_stakers_by_page {
    __kind: 'payout_stakers_by_page'
    validatorStash: AccountId32
    era: number
    page: number
}

/**
 * Remove all data structures concerning a staker/stash once it is at a state where it can
 * be considered `dust` in the staking system. The requirements are:
 *
 * 1. the `total_balance` of the stash is below existential deposit.
 * 2. or, the `ledger.total` of the stash is below existential deposit.
 *
 * The former can happen in cases like a slash; the latter when a fully unbonded account
 * is still receiving staking rewards in `RewardDestination::Staked`.
 *
 * It can be called by anyone, as long as `stash` meets the above requirements.
 *
 * Refunds the transaction fees upon successful execution.
 *
 * ## Parameters
 *
 * - `num_slashing_spans`: Refer to comments on [`Call::withdraw_unbonded`] for more
 * details.
 */
export interface StakingCall_reap_stash {
    __kind: 'reap_stash'
    stash: AccountId32
    numSlashingSpans: number
}

/**
 * Rebond a portion of the stash scheduled to be unlocked.
 *
 * The dispatch origin must be signed by the controller.
 *
 * ## Complexity
 * - Time complexity: O(L), where L is unlocking chunks
 * - Bounded by `MaxUnlockingChunks`.
 */
export interface StakingCall_rebond {
    __kind: 'rebond'
    value: bigint
}

/**
 * Scale up the ideal number of validators by a factor upto maximum of
 * `ElectionProviderBase::MaxWinners`.
 *
 * The dispatch origin must be Root.
 *
 * ## Complexity
 * Same as [`Self::set_validator_count`].
 */
export interface StakingCall_scale_validator_count {
    __kind: 'scale_validator_count'
    factor: Percent
}

/**
 * (Re-)sets the controller of a stash to the stash itself. This function previously
 * accepted a `controller` argument to set the controller to an account other than the
 * stash itself. This functionality has now been removed, now only setting the controller
 * to the stash, if it is not already.
 *
 * Effects will be felt instantly (as soon as this function is completed successfully).
 *
 * The dispatch origin for this call must be _Signed_ by the stash, not the controller.
 *
 * ## Complexity
 * O(1)
 * - Independent of the arguments. Insignificant complexity.
 * - Contains a limited number of reads.
 * - Writes are limited to the `origin` account key.
 */
export interface StakingCall_set_controller {
    __kind: 'set_controller'
}

/**
 * Set the validators who cannot be slashed (if any).
 *
 * The dispatch origin must be Root.
 */
export interface StakingCall_set_invulnerables {
    __kind: 'set_invulnerables'
    invulnerables: AccountId32[]
}

/**
 * Sets the minimum amount of commission that each validators must maintain.
 *
 * This call has lower privilege requirements than `set_staking_config` and can be called
 * by the `T::AdminOrigin`. Root can always call this.
 */
export interface StakingCall_set_min_commission {
    __kind: 'set_min_commission'
    new: Perbill
}

/**
 * (Re-)set the payment target for a controller.
 *
 * Effects will be felt instantly (as soon as this function is completed successfully).
 *
 * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 *
 * ## Complexity
 * - O(1)
 * - Independent of the arguments. Insignificant complexity.
 * - Contains a limited number of reads.
 * - Writes are limited to the `origin` account key.
 * ---------
 */
export interface StakingCall_set_payee {
    __kind: 'set_payee'
    payee: RewardDestination
}

/**
 * Update the various staking configurations .
 *
 * * `min_nominator_bond`: The minimum active bond needed to be a nominator.
 * * `min_validator_bond`: The minimum active bond needed to be a validator.
 * * `max_nominator_count`: The max number of users who can be a nominator at once. When
 *   set to `None`, no limit is enforced.
 * * `max_validator_count`: The max number of users who can be a validator at once. When
 *   set to `None`, no limit is enforced.
 * * `chill_threshold`: The ratio of `max_nominator_count` or `max_validator_count` which
 *   should be filled in order for the `chill_other` transaction to work.
 * * `min_commission`: The minimum amount of commission that each validators must maintain.
 *   This is checked only upon calling `validate`. Existing validators are not affected.
 *
 * RuntimeOrigin must be Root to call this function.
 *
 * NOTE: Existing nominators and validators will not be affected by this update.
 * to kick people under the new limits, `chill_other` should be called.
 */
export interface StakingCall_set_staking_configs {
    __kind: 'set_staking_configs'
    minNominatorBond: ConfigOp
    minValidatorBond: ConfigOp
    maxNominatorCount: Type_413
    maxValidatorCount: Type_413
    chillThreshold: Type_414
    minCommission: Type_415
    maxStakedRewards: Type_414
}

/**
 * Sets the ideal number of validators.
 *
 * The dispatch origin must be Root.
 *
 * ## Complexity
 * O(1)
 */
export interface StakingCall_set_validator_count {
    __kind: 'set_validator_count'
    new: number
}

/**
 * Schedule a portion of the stash to be unlocked ready for transfer out after the bond
 * period ends. If this leaves an amount actively bonded less than
 * T::Currency::minimum_balance(), then it is increased to the full amount.
 *
 * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 *
 * Once the unlock period is done, you can call `withdraw_unbonded` to actually move
 * the funds out of management ready for transfer.
 *
 * No more than a limited number of unlocking chunks (see `MaxUnlockingChunks`)
 * can co-exists at the same time. If there are no unlocking chunks slots available
 * [`Call::withdraw_unbonded`] is called to remove some of the chunks (if possible).
 *
 * If a user encounters the `InsufficientBond` error when calling this extrinsic,
 * they should call `chill` first in order to free up their bonded funds.
 *
 * Emits `Unbonded`.
 *
 * See also [`Call::withdraw_unbonded`].
 */
export interface StakingCall_unbond {
    __kind: 'unbond'
    value: bigint
}

/**
 * Migrates an account's `RewardDestination::Controller` to
 * `RewardDestination::Account(controller)`.
 *
 * Effects will be felt instantly (as soon as this function is completed successfully).
 *
 * This will waive the transaction fee if the `payee` is successfully migrated.
 */
export interface StakingCall_update_payee {
    __kind: 'update_payee'
    controller: AccountId32
}

/**
 * Declare the desire to validate for the origin controller.
 *
 * Effects will be felt at the beginning of the next era.
 *
 * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 */
export interface StakingCall_validate {
    __kind: 'validate'
    prefs: ValidatorPrefs
}

/**
 * Remove any unlocked chunks from the `unlocking` queue from our management.
 *
 * This essentially frees up that balance to be used by the stash account to do whatever
 * it wants.
 *
 * The dispatch origin for this call must be _Signed_ by the controller.
 *
 * Emits `Withdrawn`.
 *
 * See also [`Call::unbond`].
 *
 * ## Parameters
 *
 * - `num_slashing_spans` indicates the number of metadata slashing spans to clear when
 * this call results in a complete removal of all the data related to the stash account.
 * In this case, the `num_slashing_spans` must be larger or equal to the number of
 * slashing spans associated with the stash account in the [`SlashingSpans`] storage type,
 * otherwise the call will fail. The call weight is directly propotional to
 * `num_slashing_spans`.
 *
 * ## Complexity
 * O(S) where S is the number of slashing spans to remove
 * NOTE: Weight annotation is the kill scenario, we refund otherwise.
 */
export interface StakingCall_withdraw_unbonded {
    __kind: 'withdraw_unbonded'
    numSlashingSpans: number
}

/**
 * The pallet's extrinsics.
 */
export type StakeExchangeCall =
    | StakeExchangeCall_add_liquidity
    | StakeExchangeCall_buy
    | StakeExchangeCall_cancel_offer
    | StakeExchangeCall_configure_liquidity_account
    | StakeExchangeCall_create_offer
    | StakeExchangeCall_withdraw_liquidity

/**
 * Add liquidity to a current active offer
 *
 * # Errors
 * - [`Error::CallerNotOfferCreator`] if the caller account does not match bidding account.
 * - [`Error::OfferNotFound`] if the offerId does not exist
 */
export interface StakeExchangeCall_add_liquidity {
    __kind: 'add_liquidity'
    offerId: bigint
    amount: bigint
}

/**
 * Buy from a current active offer, returning the native currency by exchanging the staked
 * tokens
 *
 * # Errors
 * - [`Error::CallerNotOfferCreator`] if the caller account does not match bidding account.
 * - [`Error::TokenRestriction`] if the tokenId is restricted by the LP
 * - [`Error::NotEnoughLiquidity`] if the offer cannot cover the amount requested
 * - [`Error::TransferParamCreationFailed`] if the multitokens transfer failed
 */
export interface StakeExchangeCall_buy {
    __kind: 'buy'
    offerId: bigint
    amount: bigint
    tokenId: bigint
}

/**
 * Cancel an existing offer with `offer_id`
 *
 * # Errors
 * - [`Error::CallerNotOfferCreator`] if the caller account does not match offer account.
 * - [`Error::OfferNotFound`] if the `offer_id` does not exist
 */
export interface StakeExchangeCall_cancel_offer {
    __kind: 'cancel_offer'
    offerId: bigint
}

/**
 * Set the liquidity config for the caller account
 */
export interface StakeExchangeCall_configure_liquidity_account {
    __kind: 'configure_liquidity_account'
    config: LiquidityAccountConfig
}

/**
 * Place a new offer with the given parameters
 *
 * # Errors
 * - [`Error::CallerNotOfferCreator`] if the caller account does not match offer account.
 * - [`Error::ZeroOffer`] if offer amount is zero.
 * - [`Error::ZeroRate`] if rate amount is zero.
 * - [`Error::Overflow`] if arithmetic overflow occurs
 */
export interface StakeExchangeCall_create_offer {
    __kind: 'create_offer'
    offer: CreateOffer
}

/**
 * Withdraw liquidity from a current active offer
 *
 * # Errors
 * - [`Error::CallerNotOfferCreator`] if the caller account does not match offer account.
 * - [`Error::OfferNotFound`] if the offerId does not exist
 */
export interface StakeExchangeCall_withdraw_liquidity {
    __kind: 'withdraw_liquidity'
    offerId: bigint
    amount: bigint
}

export interface CreateOffer {
    account: AccountId32
    total: bigint
    rate: number
    minAverageRewardRate: bigint
    tokenFilter: TokenFilter
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SlotsCall = SlotsCall_clear_all_leases | SlotsCall_force_lease | SlotsCall_trigger_onboard

/**
 * Clear all leases for a Para Id, refunding any deposits back to the original owners.
 *
 * The dispatch origin for this call must match `T::ForceOrigin`.
 */
export interface SlotsCall_clear_all_leases {
    __kind: 'clear_all_leases'
    para: Id
}

/**
 * Just a connect into the `lease_out` call, in case Root wants to force some lease to
 * happen independently of any other on-chain mechanism to use it.
 *
 * The dispatch origin for this call must match `T::ForceOrigin`.
 */
export interface SlotsCall_force_lease {
    __kind: 'force_lease'
    para: Id
    leaser: AccountId32
    amount: bigint
    periodBegin: number
    periodCount: number
}

/**
 * Try to onboard a parachain that has a lease for the current lease period.
 *
 * This function can be useful if there was some state issue with a para that should
 * have onboarded, but was unable to. As long as they have a lease period, we can
 * let them onboard from here.
 *
 * Origin must be signed, but can be called by anyone.
 */
export interface SlotsCall_trigger_onboard {
    __kind: 'trigger_onboard'
    para: Id
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
    grandpa: Public
    babe: Bytes
    imOnline: Bytes
    paraValidator: Bytes
    paraAssignment: Bytes
    authorityDiscovery: Bytes
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SchedulerCall =
    | SchedulerCall_cancel
    | SchedulerCall_cancel_named
    | SchedulerCall_cancel_retry
    | SchedulerCall_cancel_retry_named
    | SchedulerCall_schedule
    | SchedulerCall_schedule_after
    | SchedulerCall_schedule_named
    | SchedulerCall_schedule_named_after
    | SchedulerCall_set_retry
    | SchedulerCall_set_retry_named

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
    maybePeriodic?: [number, number] | undefined
    priority: number
    call: Call
}

/**
 * Anonymously schedule a task after a delay.
 */
export interface SchedulerCall_schedule_after {
    __kind: 'schedule_after'
    after: number
    maybePeriodic?: [number, number] | undefined
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
    maybePeriodic?: [number, number] | undefined
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
    maybePeriodic?: [number, number] | undefined
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
export type SafeModeCall =
    | SafeModeCall_enter
    | SafeModeCall_extend
    | SafeModeCall_force_enter
    | SafeModeCall_force_exit
    | SafeModeCall_force_extend
    | SafeModeCall_force_release_deposit
    | SafeModeCall_force_slash_deposit
    | SafeModeCall_release_deposit

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
export type RegistrarCall =
    | RegistrarCall_add_lock
    | RegistrarCall_deregister
    | RegistrarCall_force_register
    | RegistrarCall_register
    | RegistrarCall_remove_lock
    | RegistrarCall_reserve
    | RegistrarCall_schedule_code_upgrade
    | RegistrarCall_set_current_head
    | RegistrarCall_swap

/**
 * Add a manager lock from a para. This will prevent the manager of a
 * para to deregister or swap a para.
 *
 * Can be called by Root, the parachain, or the parachain manager if the parachain is
 * unlocked.
 */
export interface RegistrarCall_add_lock {
    __kind: 'add_lock'
    para: Id
}

/**
 * Deregister a Para Id, freeing all data and returning any deposit.
 *
 * The caller must be Root, the `para` owner, or the `para` itself. The para must be an
 * on-demand parachain.
 */
export interface RegistrarCall_deregister {
    __kind: 'deregister'
    id: Id
}

/**
 * Force the registration of a Para Id on the relay chain.
 *
 * This function must be called by a Root origin.
 *
 * The deposit taken can be specified for this registration. Any `ParaId`
 * can be registered, including sub-1000 IDs which are System Parachains.
 */
export interface RegistrarCall_force_register {
    __kind: 'force_register'
    who: AccountId32
    deposit: bigint
    id: Id
    genesisHead: HeadData
    validationCode: ValidationCode
}

/**
 * Register head data and validation code for a reserved Para Id.
 *
 * ## Arguments
 * - `origin`: Must be called by a `Signed` origin.
 * - `id`: The para ID. Must be owned/managed by the `origin` signing account.
 * - `genesis_head`: The genesis head data of the parachain/thread.
 * - `validation_code`: The initial validation code of the parachain/thread.
 *
 * ## Deposits/Fees
 * The account with the originating signature must reserve a deposit.
 *
 * The deposit is required to cover the costs associated with storing the genesis head
 * data and the validation code.
 * This accounts for the potential to store validation code of a size up to the
 * `max_code_size`, as defined in the configuration pallet
 *
 * Anything already reserved previously for this para ID is accounted for.
 *
 * ## Events
 * The `Registered` event is emitted in case of success.
 */
export interface RegistrarCall_register {
    __kind: 'register'
    id: Id
    genesisHead: HeadData
    validationCode: ValidationCode
}

/**
 * Remove a manager lock from a para. This will allow the manager of a
 * previously locked para to deregister or swap a para without using governance.
 *
 * Can only be called by the Root origin or the parachain.
 */
export interface RegistrarCall_remove_lock {
    __kind: 'remove_lock'
    para: Id
}

/**
 * Reserve a Para Id on the relay chain.
 *
 * This function will reserve a new Para Id to be owned/managed by the origin account.
 * The origin account is able to register head data and validation code using `register` to
 * create an on-demand parachain. Using the Slots pallet, an on-demand parachain can then
 * be upgraded to a lease holding parachain.
 *
 * ## Arguments
 * - `origin`: Must be called by a `Signed` origin. Becomes the manager/owner of the new
 *   para ID.
 *
 * ## Deposits/Fees
 * The origin must reserve a deposit of `ParaDeposit` for the registration.
 *
 * ## Events
 * The `Reserved` event is emitted in case of success, which provides the ID reserved for
 * use.
 */
export interface RegistrarCall_reserve {
    __kind: 'reserve'
}

/**
 * Schedule a parachain upgrade.
 *
 * Can be called by Root, the parachain, or the parachain manager if the parachain is
 * unlocked.
 */
export interface RegistrarCall_schedule_code_upgrade {
    __kind: 'schedule_code_upgrade'
    para: Id
    newCode: ValidationCode
}

/**
 * Set the parachain's current head.
 *
 * Can be called by Root, the parachain, or the parachain manager if the parachain is
 * unlocked.
 */
export interface RegistrarCall_set_current_head {
    __kind: 'set_current_head'
    para: Id
    newHead: HeadData
}

/**
 * Swap a lease holding parachain with another parachain, either on-demand or lease
 * holding.
 *
 * The origin must be Root, the `para` owner, or the `para` itself.
 *
 * The swap will happen only if there is already an opposite swap pending. If there is not,
 * the swap will be stored in the pending swaps map, ready for a later confirmatory swap.
 *
 * The `ParaId`s remain mapped to the same head data and code so external code can rely on
 * `ParaId` to be a long-term identifier of a notional "parachain". However, their
 * scheduling info (i.e. whether they're an on-demand parachain or lease holding
 * parachain), auction information and the auction deposit are switched.
 */
export interface RegistrarCall_swap {
    __kind: 'swap'
    id: Id
    other: Id
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ReferendaCall =
    | ReferendaCall_cancel
    | ReferendaCall_kill
    | ReferendaCall_nudge_referendum
    | ReferendaCall_one_fewer_deciding
    | ReferendaCall_place_decision_deposit
    | ReferendaCall_refund_decision_deposit
    | ReferendaCall_refund_submission_deposit
    | ReferendaCall_set_metadata
    | ReferendaCall_submit

/**
 * Cancel an ongoing referendum.
 *
 * - `origin`: must be the `CancelOrigin`.
 * - `index`: The index of the referendum to be cancelled.
 *
 * Emits `Cancelled`.
 */
export interface ReferendaCall_cancel {
    __kind: 'cancel'
    index: number
}

/**
 * Cancel an ongoing referendum and slash the deposits.
 *
 * - `origin`: must be the `KillOrigin`.
 * - `index`: The index of the referendum to be cancelled.
 *
 * Emits `Killed` and `DepositSlashed`.
 */
export interface ReferendaCall_kill {
    __kind: 'kill'
    index: number
}

/**
 * Advance a referendum onto its next logical state. Only used internally.
 *
 * - `origin`: must be `Root`.
 * - `index`: the referendum to be advanced.
 */
export interface ReferendaCall_nudge_referendum {
    __kind: 'nudge_referendum'
    index: number
}

/**
 * Advance a track onto its next logical state. Only used internally.
 *
 * - `origin`: must be `Root`.
 * - `track`: the track to be advanced.
 *
 * Action item for when there is now one fewer referendum in the deciding phase and the
 * `DecidingCount` is not yet updated. This means that we should either:
 * - begin deciding another referendum (and leave `DecidingCount` alone); or
 * - decrement `DecidingCount`.
 */
export interface ReferendaCall_one_fewer_deciding {
    __kind: 'one_fewer_deciding'
    track: number
}

/**
 * Post the Decision Deposit for a referendum.
 *
 * - `origin`: must be `Signed` and the account must have funds available for the
 *   referendum's track's Decision Deposit.
 * - `index`: The index of the submitted referendum whose Decision Deposit is yet to be
 *   posted.
 *
 * Emits `DecisionDepositPlaced`.
 */
export interface ReferendaCall_place_decision_deposit {
    __kind: 'place_decision_deposit'
    index: number
}

/**
 * Refund the Decision Deposit for a closed referendum back to the depositor.
 *
 * - `origin`: must be `Signed` or `Root`.
 * - `index`: The index of a closed referendum whose Decision Deposit has not yet been
 *   refunded.
 *
 * Emits `DecisionDepositRefunded`.
 */
export interface ReferendaCall_refund_decision_deposit {
    __kind: 'refund_decision_deposit'
    index: number
}

/**
 * Refund the Submission Deposit for a closed referendum back to the depositor.
 *
 * - `origin`: must be `Signed` or `Root`.
 * - `index`: The index of a closed referendum whose Submission Deposit has not yet been
 *   refunded.
 *
 * Emits `SubmissionDepositRefunded`.
 */
export interface ReferendaCall_refund_submission_deposit {
    __kind: 'refund_submission_deposit'
    index: number
}

/**
 * Set or clear metadata of a referendum.
 *
 * Parameters:
 * - `origin`: Must be `Signed` by a creator of a referendum or by anyone to clear a
 *   metadata of a finished referendum.
 * - `index`:  The index of a referendum to set or clear metadata for.
 * - `maybe_hash`: The hash of an on-chain stored preimage. `None` to clear a metadata.
 */
export interface ReferendaCall_set_metadata {
    __kind: 'set_metadata'
    index: number
    maybeHash?: H256 | undefined
}

/**
 * Propose a referendum on a privileged action.
 *
 * - `origin`: must be `SubmitOrigin` and the account must have `SubmissionDeposit` funds
 *   available.
 * - `proposal_origin`: The origin from which the proposal should be executed.
 * - `proposal`: The proposal.
 * - `enactment_moment`: The moment that the proposal should be enacted.
 *
 * Emits `Submitted`.
 */
export interface ReferendaCall_submit {
    __kind: 'submit'
    proposalOrigin: OriginCaller
    proposal: Bounded
    enactmentMoment: DispatchTime
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ProxyCall =
    | ProxyCall_add_proxy
    | ProxyCall_announce
    | ProxyCall_create_pure
    | ProxyCall_kill_pure
    | ProxyCall_proxy
    | ProxyCall_proxy_announced
    | ProxyCall_reject_announcement
    | ProxyCall_remove_announcement
    | ProxyCall_remove_proxies
    | ProxyCall_remove_proxy

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
    forceProxyType?: ProxyType | undefined
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
    forceProxyType?: ProxyType | undefined
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

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type PreimageCall =
    | PreimageCall_ensure_updated
    | PreimageCall_note_preimage
    | PreimageCall_request_preimage
    | PreimageCall_unnote_preimage
    | PreimageCall_unrequest_preimage

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
export type ParasSudoWrapperCall =
    | ParasSudoWrapperCall_sudo_establish_hrmp_channel
    | ParasSudoWrapperCall_sudo_queue_downward_xcm
    | ParasSudoWrapperCall_sudo_schedule_para_cleanup
    | ParasSudoWrapperCall_sudo_schedule_para_initialize
    | ParasSudoWrapperCall_sudo_schedule_parachain_downgrade
    | ParasSudoWrapperCall_sudo_schedule_parathread_upgrade

/**
 * Forcefully establish a channel from the sender to the recipient.
 *
 * This is equivalent to sending an `Hrmp::hrmp_init_open_channel` extrinsic followed by
 * `Hrmp::hrmp_accept_open_channel`.
 */
export interface ParasSudoWrapperCall_sudo_establish_hrmp_channel {
    __kind: 'sudo_establish_hrmp_channel'
    sender: Id
    recipient: Id
    maxCapacity: number
    maxMessageSize: number
}

/**
 * Send a downward XCM to the given para.
 *
 * The given parachain should exist and the payload should not exceed the preconfigured
 * size `config.max_downward_message_size`.
 */
export interface ParasSudoWrapperCall_sudo_queue_downward_xcm {
    __kind: 'sudo_queue_downward_xcm'
    id: Id
    xcm: VersionedXcm
}

/**
 * Schedule a para to be cleaned up at the start of the next session.
 */
export interface ParasSudoWrapperCall_sudo_schedule_para_cleanup {
    __kind: 'sudo_schedule_para_cleanup'
    id: Id
}

/**
 * Schedule a para to be initialized at the start of the next session.
 *
 * This should only be used for TESTING and not on PRODUCTION chains. It automatically
 * assigns Coretime to the chain and increases the number of cores. Thus, there is no
 * running coretime chain required.
 */
export interface ParasSudoWrapperCall_sudo_schedule_para_initialize {
    __kind: 'sudo_schedule_para_initialize'
    id: Id
    genesis: ParaGenesisArgs
}

/**
 * Downgrade a lease holding parachain to an on-demand parachain
 */
export interface ParasSudoWrapperCall_sudo_schedule_parachain_downgrade {
    __kind: 'sudo_schedule_parachain_downgrade'
    id: Id
}

/**
 * Upgrade a parathread (on-demand parachain) to a lease holding parachain
 */
export interface ParasSudoWrapperCall_sudo_schedule_parathread_upgrade {
    __kind: 'sudo_schedule_parathread_upgrade'
    id: Id
}

export interface ParaGenesisArgs {
    genesisHead: HeadData
    validationCode: ValidationCode
    paraKind: boolean
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParasSlashingCall = ParasSlashingCall_report_dispute_lost_unsigned

export interface ParasSlashingCall_report_dispute_lost_unsigned {
    __kind: 'report_dispute_lost_unsigned'
    disputeProof: V6DisputeProof
    keyOwnerProof: MembershipProof
}

export interface MembershipProof {
    session: number
    trieNodes: Bytes[]
    validatorCount: number
}

export interface V6DisputeProof {
    timeSlot: V6DisputesTimeSlot
    kind: V6SlashingOffenceKind
    validatorIndex: V6ValidatorIndex
    validatorId: Bytes
}

export type V6SlashingOffenceKind = V6SlashingOffenceKind_AgainstValid | V6SlashingOffenceKind_ForInvalid

export interface V6SlashingOffenceKind_AgainstValid {
    __kind: 'AgainstValid'
}

export interface V6SlashingOffenceKind_ForInvalid {
    __kind: 'ForInvalid'
}

export interface V6DisputesTimeSlot {
    sessionIndex: number
    candidateHash: CandidateHash
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParasSharedCall = never

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParasDisputesCall = ParasDisputesCall_force_unfreeze

export interface ParasDisputesCall_force_unfreeze {
    __kind: 'force_unfreeze'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParasCall =
    | ParasCall_add_trusted_validation_code
    | ParasCall_force_note_new_head
    | ParasCall_force_queue_action
    | ParasCall_force_schedule_code_upgrade
    | ParasCall_force_set_current_code
    | ParasCall_force_set_current_head
    | ParasCall_force_set_most_recent_context
    | ParasCall_include_pvf_check_statement
    | ParasCall_poke_unused_validation_code

/**
 * Adds the validation code to the storage.
 *
 * The code will not be added if it is already present. Additionally, if PVF pre-checking
 * is running for that code, it will be instantly accepted.
 *
 * Otherwise, the code will be added into the storage. Note that the code will be added
 * into storage with reference count 0. This is to account the fact that there are no users
 * for this code yet. The caller will have to make sure that this code eventually gets
 * used by some parachain or removed from the storage to avoid storage leaks. For the
 * latter prefer to use the `poke_unused_validation_code` dispatchable to raw storage
 * manipulation.
 *
 * This function is mainly meant to be used for upgrading parachains that do not follow
 * the go-ahead signal while the PVF pre-checking feature is enabled.
 */
export interface ParasCall_add_trusted_validation_code {
    __kind: 'add_trusted_validation_code'
    validationCode: ValidationCode
}

/**
 * Note a new block head for para within the context of the current block.
 */
export interface ParasCall_force_note_new_head {
    __kind: 'force_note_new_head'
    para: Id
    newHead: HeadData
}

/**
 * Put a parachain directly into the next session's action queue.
 * We can't queue it any sooner than this without going into the
 * initializer...
 */
export interface ParasCall_force_queue_action {
    __kind: 'force_queue_action'
    para: Id
}

/**
 * Schedule an upgrade as if it was scheduled in the given relay parent block.
 */
export interface ParasCall_force_schedule_code_upgrade {
    __kind: 'force_schedule_code_upgrade'
    para: Id
    newCode: ValidationCode
    relayParentNumber: number
}

/**
 * Set the storage for the parachain validation code immediately.
 */
export interface ParasCall_force_set_current_code {
    __kind: 'force_set_current_code'
    para: Id
    newCode: ValidationCode
}

/**
 * Set the storage for the current parachain head data immediately.
 */
export interface ParasCall_force_set_current_head {
    __kind: 'force_set_current_head'
    para: Id
    newHead: HeadData
}

/**
 * Set the storage for the current parachain head data immediately.
 */
export interface ParasCall_force_set_most_recent_context {
    __kind: 'force_set_most_recent_context'
    para: Id
    context: number
}

/**
 * Includes a statement for a PVF pre-checking vote. Potentially, finalizes the vote and
 * enacts the results if that was the last vote before achieving the supermajority.
 */
export interface ParasCall_include_pvf_check_statement {
    __kind: 'include_pvf_check_statement'
    stmt: V6PvfCheckStatement
    signature: Bytes
}

/**
 * Remove the validation code from the storage iff the reference count is 0.
 *
 * This is better than removing the storage directly, because it will not remove the code
 * that was suddenly got used by some parachain while this dispatchable was pending
 * dispatching.
 */
export interface ParasCall_poke_unused_validation_code {
    __kind: 'poke_unused_validation_code'
    validationCodeHash: ValidationCodeHash
}

export interface V6PvfCheckStatement {
    accept: boolean
    subject: ValidationCodeHash
    sessionIndex: number
    validatorIndex: V6ValidatorIndex
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParaInherentCall = ParaInherentCall_enter

/**
 * Enter the paras inherent. This will process bitfields and backed candidates.
 */
export interface ParaInherentCall_enter {
    __kind: 'enter'
    data: V6InherentData
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParaInclusionCall = never

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type NominationPoolsCall =
    | NominationPoolsCall_bond
    | NominationPoolsCall_calculate_early_bird_bonus
    | NominationPoolsCall_capture_early_bird_bonus_shares
    | NominationPoolsCall_chill
    | NominationPoolsCall_create
    | NominationPoolsCall_destroy
    | NominationPoolsCall_mutate
    | NominationPoolsCall_nominate
    | NominationPoolsCall_pay_early_bird_bonus
    | NominationPoolsCall_payout_rewards
    | NominationPoolsCall_pool_withdraw_unbonded
    | NominationPoolsCall_process_payouts
    | NominationPoolsCall_set_configs
    | NominationPoolsCall_set_staking_info
    | NominationPoolsCall_unbond
    | NominationPoolsCall_unbond_deposit
    | NominationPoolsCall_unlock_early_bird_bonus
    | NominationPoolsCall_withdraw_deposit
    | NominationPoolsCall_withdraw_free_balance
    | NominationPoolsCall_withdraw_unbonded

/**
 * Stake funds with a pool. The amount to bond is transferred from the member to the
 * pools account and immediately increases the pools bond. The sENJ token will be minted
 * and transferred to `origin`.
 *
 * # Parameters
 * - `origin`: the caller
 * - `pool_id`: the pool id to bond
 * - `amount`: the amount of tokens deposited into the pool
 *
 * # Note
 *
 * * An account can only be a member of a single pool.
 * * An account cannot join the same pool multiple times.
 * * This call will *not* dust the member account, so the member must have at least
 *   `existential deposit + amount` in their account.
 * * Only a pool with [`PoolState::Open`] can be joined
 */
export interface NominationPoolsCall_bond {
    __kind: 'bond'
    poolId: number
    amount: BondValue
}

/**
 * Calculate and prepare early bird bonus if it is ready to be queued.
 *
 * Callable by any signed origin after [`Config::EarlyBirdBonusDistributionBlock`].
 *
 * ## Details
 *
 * 1. Calculates the normalized weights for each pool by calling
 *    [`Pallet::early_bird_normalized_weight`]. Factors for the weight are each pool's
 *    total points and the creation date.
 * 2. Each pool's weight is multiplied by the total reward to determine each pool's reward.
 * 3. The rewards are stored in [`PoolBonusInfos`] and can be distributed by calling
 *    [`Self::pay_early_bird_bonus`].
 */
export interface NominationPoolsCall_calculate_early_bird_bonus {
    __kind: 'calculate_early_bird_bonus'
    poolCount: number
}

/**
 * Stores the share of sENJ balance for each account staked in `pool_id`.
 */
export interface NominationPoolsCall_capture_early_bird_bonus_shares {
    __kind: 'capture_early_bird_bonus_shares'
    poolId: number
    accountCount: number
}

/**
 * Chill on behalf of the pool.
 *
 * The dispatch origin of this call must be signed by the pool token holder, same as
 * [`Pallet::nominate`].
 *
 * This directly forward the call to the staking pallet, on behalf of the pool bonded
 * account.
 */
export interface NominationPoolsCall_chill {
    __kind: 'chill'
    poolId: number
}

/**
 * Create a new nomination pool.
 *
 * # Arguments
 *
 * * `token_id` - Token that that will control the pool. This token must be from the
 *   [`Config::PoolCollectionId`] collection and it must be held by the caller.
 * * `deposit` - The amount of funds to delegate to the pool. This also acts as a deposit
 *   because the pool's creator cannot fully unbond funds until the pool is destroyed.
 * * `capacity` - The maximum total balance allowed in the pool. This is measured in sENJ.
 *   It must be below the pool's capacity. See `Capacity` section in crate level docs.
 * * `duration` - The duration in blocks of the pool's bonus cycle
 *
 * # Note
 *
 * In addition to `deposit`, the caller will transfer the existential deposit for the
 * pool's accounts; so the caller needs at have at least `deposit + existential_deposit *
 * 2` transferable.
 */
export interface NominationPoolsCall_create {
    __kind: 'create'
    tokenId: bigint
    deposit: bigint
    capacity: bigint
    duration: number
    name: BoundedVec
}

/**
 * Destroy the pool.
 *
 * The dispatch origin of this call must be signed by the account holding the pool token
 * of the given pool_id.
 */
export interface NominationPoolsCall_destroy {
    __kind: 'destroy'
    poolId: number
}

/**
 * Mutate the nomination pool data.
 *
 * The dispatch origin of this call must be signed by the account holding the pool token
 * of the given pool_id.
 */
export interface NominationPoolsCall_mutate {
    __kind: 'mutate'
    poolId: number
    mutation: PoolMutation
}

/**
 * Nominate on behalf of the pool.
 *
 * The dispatch origin of this call must be signed by the holder of the pool token.
 *
 * This directly forward the call to the staking pallet, on behalf of the pool bonded
 * account.
 */
export interface NominationPoolsCall_nominate {
    __kind: 'nominate'
    poolId: number
    validators: AccountId32[]
}

/**
 * Pay early bird bonus to pools. The `account_count` parameter is the max number
 * of pool user accounts to be paid in this call.
 *
 * Callable by any signed origin after the bonus has been unlocked
 */
export interface NominationPoolsCall_pay_early_bird_bonus {
    __kind: 'pay_early_bird_bonus'
    poolId: number
    paymentId: number
    accountCount: number
}

/**
 * Pays rewards to `validator_stash` and also distributes rewards to the reward accounts of
 * the pools nominating it. The appropriate bonus is also calculated and stored in the
 * bonus account.
 *
 * This should be called once per era per validator. It is a permissionless call. It also
 * processes rewards for the previous era if [`Self::process_payouts`] was not called.
 *
 * ## Bonus Calculation
 *
 * 1. Minimum duration and max duration are found for all pools nominating
 *    `validator_stash`
 * 2. [`Config::BonusPercentage`] is set aside from rewards for bonus
 * 3. Normalized weight is calculated and then scaled according to the total bonus. See
 *    `functions::calculate_real_weight`.
 * 4. The scaled weight is offset according to [`Config::BaseBonusRewardPercentage`] so
 *    that all pools at least get the minimum weight
 * 5. Final calculation is done in [`traits::Bonus::calculate_bonus`] and then transferred
 *    to the bonus account
 */
export interface NominationPoolsCall_payout_rewards {
    __kind: 'payout_rewards'
    validatorStash: AccountId32
    era: number
}

/**
 * Call `withdraw_unbonded` for the pools account. This call can be made by any account.
 *
 * This is useful if their are too many unlocking chunks to call `unbond`, and some
 * can be cleared by withdrawing. In the case there are too many unlocking chunks, the user
 * would probably see an error like `NoMoreChunks` emitted from the staking system when
 * they attempt to unbond.
 */
export interface NominationPoolsCall_pool_withdraw_unbonded {
    __kind: 'pool_withdraw_unbonded'
    poolId: number
    numSlashingSpans: number
}

/**
 * Processes the rewards for all pools that were distributed in [`Self::payout_rewards`].
 * It will only succeed if it is called on the same era that payouts were made. It uses the
 * [`EraPayoutInfo`] storage to verify this. This extrinsic is permissionless.
 *
 * The following is done for each pool:
 * 1. If the pool has reached the end of its cycle, it cycles the pool.
 * 2. Sends bonus for the current era from the bonus account to the rewards account.
 * 3. Sends reward commission to the depositor.
 * 4. It bonds the pool's reward balance.
 *
 * It is not required to call this extrinsic. If it is not called, the rewards will be
 * processed when `payout_rewards` is called in the next era.
 */
export interface NominationPoolsCall_process_payouts {
    __kind: 'process_payouts'
    poolCount: number
}

/**
 * Update configurations for the nomination pools. Callable only by
 * [`Config::ForceOrigin`].
 *
 * # Arguments
 *
 * * `min_join_bond` - Set [`MinJoinBond`].
 * * `min_create_bond` - Set [`MinCreateBond`].
 * * `global_max_commission` - Set [`GlobalMaxCommission`].
 */
export interface NominationPoolsCall_set_configs {
    __kind: 'set_configs'
    minJoinBond: Type_441
    minCreateBond: Type_441
    globalMaxCommission: Type_442
    requiredPayoutCount: Type_442
}

/**
 * Set the annual inflation rate and collator payout cut
 *
 * Callable only by [`Config::ForceOrigin`]
 */
export interface NominationPoolsCall_set_staking_info {
    __kind: 'set_staking_info'
    info: StakingInfo
}

/**
 * Unbond up to `unbonding_points` of the `member_account`'s funds from the pool by burning
 * sENJ.
 *
 * Under certain conditions, this call can be dispatched permissionlessly (i.e. by any
 * account).
 *
 * # Conditions for a permissionless dispatch.
 *
 * * The pool is blocked and the caller is holding the pool's token. This is refereed to as
 *   a kick.
 * * The pool is destroying.
 * * The pool is destroying and no other members are in the pool.
 *
 * ## Conditions for permissioned dispatch (i.e. the caller is also the
 * `member_account`):
 *
 * * The caller is not the last member.
 * * The caller is the last member and the pool is destroying.
 *
 * # Note
 *
 * If there are too many unlocking chunks to unbond with the pool account,
 * [`Call::pool_withdraw_unbonded`] can be called to try and minimize unlocking chunks.
 * The [`StakingInterface::unbond`] will implicitly call [`Call::pool_withdraw_unbonded`]
 * to try to free chunks if necessary (ie. if unbound was called and no unlocking chunks
 * are available). However, it may not be possible to release the current unlocking chunks,
 * in which case, the result of this call will likely be the `NoMoreChunks` error from the
 * staking system.
 */
export interface NominationPoolsCall_unbond {
    __kind: 'unbond'
    poolId: number
    memberAccount: MultiAddress
    unbondingPoints: bigint
}

/**
 * Unbonds the deposit
 *
 * This call is permissionless but certain conditions must be met before the deposit can
 * be unbonded:
 *
 * - Pool must be in [`PoolState::Destroying`] mode
 * - Deposit points must be the only points in the pool
 * - [`UnbondingMembers`] must be empty
 *
 * This will unbond the deposit from the pool.
 */
export interface NominationPoolsCall_unbond_deposit {
    __kind: 'unbond_deposit'
    poolId: number
}

/**
 * Unlock early bird bonus to pools. This extrinsic will ensure the
 * EarlyBirdBonusDistributionBlock has passed before the bonus is unlocked.
 * Callable by any signed origin after the bonus has been queued.
 */
export interface NominationPoolsCall_unlock_early_bird_bonus {
    __kind: 'unlock_early_bird_bonus'
}

/**
 * Withdraws the deposit
 *
 * This call is permissionless and should be called after the deposit has been unbonded.
 */
export interface NominationPoolsCall_withdraw_deposit {
    __kind: 'withdraw_deposit'
    poolId: number
}

/**
 * Transfers `amount` from the pool's free balance to `destination`. Only callable by
 * [`Config::ForceOrigin`].
 */
export interface NominationPoolsCall_withdraw_free_balance {
    __kind: 'withdraw_free_balance'
    poolId: number
    destination: MultiAddress
    amount: bigint
}

/**
 * Withdraw unbonded funds from `member_account`. If no bonded funds can be unbonded, an
 * error is returned.
 *
 * Under certain conditions, this call can be dispatched permissionlessly (i.e. by any
 * account).
 *
 * # Conditions for a permissionless dispatch
 *
 * * The pool is in destroy mode.
 * * The target is the only member in the sub pools.
 * * The pool is blocked and the caller is either the admin or state-toggler.
 *
 * # Conditions for permissioned dispatch
 *
 * * The caller is the target and they are not the last member.
 *
 * # Note
 *
 * If the target is the last member, the pool will be destroyed.
 */
export interface NominationPoolsCall_withdraw_unbonded {
    __kind: 'withdraw_unbonded'
    poolId: number
    memberAccount: MultiAddress
    numSlashingSpans: number
}

export type Type_442 = Type_442_Noop | Type_442_Remove | Type_442_Set

export interface Type_442_Noop {
    __kind: 'Noop'
}

export interface Type_442_Remove {
    __kind: 'Remove'
}

export interface Type_442_Set {
    __kind: 'Set'
    value: Perbill
}

export type Type_441 = Type_441_Noop | Type_441_Remove | Type_441_Set

export interface Type_441_Noop {
    __kind: 'Noop'
}

export interface Type_441_Remove {
    __kind: 'Remove'
}

export interface Type_441_Set {
    __kind: 'Set'
    value: bigint
}

export type BondValue = BondValue_Amount | BondValue_Fill

export interface BondValue_Amount {
    __kind: 'Amount'
    value: bigint
}

export interface BondValue_Fill {
    __kind: 'Fill'
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
    maybeTimepoint?: Timepoint | undefined
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
    maybeTimepoint?: Timepoint | undefined
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
    | MultiTokensCall_infuse
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
    | MultiTokensCall_update_account_deposit

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
    expiration?: number | undefined
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
    expiration?: number | undefined
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
    recipients: Type_597[]
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
    tokenId?: bigint | undefined
    attributes: AttributeKeyValuePair[]
    depositor?: MultiAddress | undefined
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
    ethereumSignature: Bytes
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
    ethereumSignature: Bytes
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
    expiration?: number | undefined
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
    caller?: MultiAddress | undefined
    recipient: MultiAddress
    collectionId: bigint
    params: FlexibleMintParams
    depositor?: MultiAddress | undefined
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
    tokenId?: bigint | undefined
    key: Bytes
    value?: Attribute | undefined
}

/**
 * Set the Collections storage to the given `value`, origin must be root
 */
export interface MultiTokensCall_force_set_collection {
    __kind: 'force_set_collection'
    collectionId: bigint
    value?: Collection | undefined
}

/**
 * Set the CollectionAccounts storage to the given `value`, origin must be root
 */
export interface MultiTokensCall_force_set_collection_account {
    __kind: 'force_set_collection_account'
    collectionId: bigint
    accountId: MultiAddress
    value?: CollectionAccount | undefined
}

/**
 * Sets [`ClaimableCollectionIds`] to `value`. Only callable by [`Config::ForceOrigin`].
 */
export interface MultiTokensCall_force_set_ethereum_account {
    __kind: 'force_set_ethereum_account'
    address: H160
    value?: bigint[] | undefined
}

/**
 * Sets [`NativeCollectionIds`] to `native_collection_id`. Only callable by
 * [`Config::ForceOrigin`].
 */
export interface MultiTokensCall_force_set_ethereum_collection_id {
    __kind: 'force_set_ethereum_collection_id'
    ethereumCollectionId: bigint
    nativeCollectionId?: bigint | undefined
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
    value?: Token | undefined
}

/**
 * Set the TokenAccounts storage to the given `value`, origin must be root
 */
export interface MultiTokensCall_force_set_token_account {
    __kind: 'force_set_token_account'
    collectionId: bigint
    tokenId: bigint
    accountId: MultiAddress
    value?: TokenAccount | undefined
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
    tokenId?: bigint | undefined
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
    tokenId?: bigint | undefined
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
    tokenId?: bigint | undefined
    key: Bytes
    value: Bytes
    depositor?: MultiAddress | undefined
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

export type DefaultMintParams = DefaultMintParams_CreateToken | DefaultMintParams_Mint

export interface DefaultMintParams_CreateToken {
    __kind: 'CreateToken'
    tokenId: bigint
    initialSupply: bigint
    accountDepositCount: number
    cap?: TokenCap | undefined
    behavior?: TokenMarketBehavior | undefined
    listingForbidden: boolean
    freezeState?: FreezeState | undefined
    attributes: AttributeKeyValuePair[]
    infusion: bigint
    anyoneCanInfuse: boolean
    metadata: CreateTokenMetadata
    privilegedParams?: PrivilegedCreateTokenParams | undefined
}

export interface DefaultMintParams_Mint {
    __kind: 'Mint'
    tokenId: bigint
    amount: bigint
    depositor?: AccountId32 | undefined
}

export interface PrivilegedCreateTokenParams {
    requiresDeposit: boolean
    foreignParams?: ForeignTokenCreationParams | undefined
    depositor?: AccountId32 | undefined
}

export interface ForeignTokenCreationParams {
    location?: V4Location | undefined
    unitsPerSecond?: bigint | undefined
}

export interface CreateTokenMetadata {
    name: BoundedString
    symbol: Bytes
    decimalCount: number
}

export type DefaultTransferParams = DefaultTransferParams_Operator | DefaultTransferParams_Simple

export interface DefaultTransferParams_Operator {
    __kind: 'Operator'
    tokenId: bigint
    source: AccountId32
    amount: bigint
    depositor?: AccountId32 | undefined
}

export interface DefaultTransferParams_Simple {
    __kind: 'Simple'
    tokenId: bigint
    amount: bigint
    depositor?: AccountId32 | undefined
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
    depositor?: AccountId32 | undefined
}

export interface CreateTokenParams {
    tokenId: bigint
    amount: bigint
    accountDepositCount: number
    cap?: TokenCap | undefined
    behavior?: TokenMarketBehavior | undefined
    listingForbidden: boolean
    freezeState?: FreezeState | undefined
    attributes: AttributeKeyValuePair[]
    infusion: bigint
    anyoneCanInfuse: boolean
    metadata: CreateTokenMetadata
    privilegedParams?: PrivilegedCreateTokenParams | undefined
}

export interface DefaultCollectionDescriptor {
    policy: DefaultCollectionPolicyDescriptor
    depositor?: AccountId32 | undefined
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
    forceCollapsingSupply: boolean
}

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

export interface Type_597 {
    accountId: AccountId32
    params: DefaultMintParams
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type MigrationsCall =
    | MigrationsCall_clear_historic
    | MigrationsCall_force_onboard_mbms
    | MigrationsCall_force_set_active_cursor
    | MigrationsCall_force_set_cursor

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
    innerCursor?: Bytes | undefined
    startedAt?: number | undefined
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
    cursor?: MigrationCursor | undefined
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
    innerCursor?: Bytes | undefined
    startedAt: number
}

export type HistoricCleanupSelector = HistoricCleanupSelector_Specific | HistoricCleanupSelector_Wildcard

export interface HistoricCleanupSelector_Specific {
    __kind: 'Specific'
    value: Bytes[]
}

export interface HistoricCleanupSelector_Wildcard {
    __kind: 'Wildcard'
    limit?: number | undefined
    previousCursor?: Bytes | undefined
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

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type MarketplaceCall =
    | MarketplaceCall_answer_counter_offer
    | MarketplaceCall_cancel_listing
    | MarketplaceCall_create_listing
    | MarketplaceCall_fill_listing
    | MarketplaceCall_finalize_auction
    | MarketplaceCall_force_cancel_listing
    | MarketplaceCall_force_create_listing
    | MarketplaceCall_force_place_bid
    | MarketplaceCall_place_bid
    | MarketplaceCall_place_counter_offer
    | MarketplaceCall_remove_expired_listing
    | MarketplaceCall_set_protocol_fee

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
    depositor?: MultiAddress | undefined
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
    depositBacker?: MultiAddress | undefined
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
    fundsBacker?: MultiAddress | undefined
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
    depositor?: MultiAddress | undefined
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

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type InitializerCall = InitializerCall_force_approve

/**
 * Issue a signal to the consensus engine to forcibly act as though all parachain
 * blocks in all relay chain blocks up to and including the given number in the current
 * chain are valid and should be finalized.
 */
export interface InitializerCall_force_approve {
    __kind: 'force_approve'
    upTo: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ImOnlineCall = ImOnlineCall_heartbeat

/**
 * ## Complexity:
 * - `O(K)` where K is length of `Keys` (heartbeat.validators_len)
 *   - `O(K)`: decoding of length `K`
 */
export interface ImOnlineCall_heartbeat {
    __kind: 'heartbeat'
    heartbeat: Heartbeat
    signature: Bytes
}

export interface Heartbeat {
    blockNumber: number
    sessionIndex: number
    authorityIndex: number
    validatorsLen: number
}

/**
 * Identity pallet declaration.
 */
export type IdentityCall =
    | IdentityCall_accept_username
    | IdentityCall_add_registrar
    | IdentityCall_add_sub
    | IdentityCall_add_username_authority
    | IdentityCall_cancel_request
    | IdentityCall_clear_identity
    | IdentityCall_kill_identity
    | IdentityCall_provide_judgement
    | IdentityCall_quit_sub
    | IdentityCall_remove_dangling_username
    | IdentityCall_remove_expired_approval
    | IdentityCall_remove_sub
    | IdentityCall_remove_username_authority
    | IdentityCall_rename_sub
    | IdentityCall_request_judgement
    | IdentityCall_set_account_id
    | IdentityCall_set_fee
    | IdentityCall_set_fields
    | IdentityCall_set_identity
    | IdentityCall_set_primary_username
    | IdentityCall_set_subs
    | IdentityCall_set_username_for

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
    signature?: MultiSignature | undefined
}

export type MultiSignature = MultiSignature_Ecdsa | MultiSignature_Ed25519 | MultiSignature_Sr25519

export interface MultiSignature_Ecdsa {
    __kind: 'Ecdsa'
    value: Bytes
}

export interface MultiSignature_Ed25519 {
    __kind: 'Ed25519'
    value: Bytes
}

export interface MultiSignature_Sr25519 {
    __kind: 'Sr25519'
    value: Signature
}

export type Signature = Bytes

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type HrmpCall =
    | HrmpCall_establish_system_channel
    | HrmpCall_force_clean_hrmp
    | HrmpCall_force_open_hrmp_channel
    | HrmpCall_force_process_hrmp_close
    | HrmpCall_force_process_hrmp_open
    | HrmpCall_hrmp_accept_open_channel
    | HrmpCall_hrmp_cancel_open_request
    | HrmpCall_hrmp_close_channel
    | HrmpCall_hrmp_init_open_channel
    | HrmpCall_poke_channel_deposits

/**
 * Establish an HRMP channel between two system chains. If the channel does not already
 * exist, the transaction fees will be refunded to the caller. The system does not take
 * deposits for channels between system chains, and automatically sets the message number
 * and size limits to the maximum allowed by the network's configuration.
 *
 * Arguments:
 *
 * - `sender`: A system chain, `ParaId`.
 * - `recipient`: A system chain, `ParaId`.
 *
 * Any signed origin can call this function, but _both_ inputs MUST be system chains. If
 * the channel does not exist yet, there is no fee.
 */
export interface HrmpCall_establish_system_channel {
    __kind: 'establish_system_channel'
    sender: Id
    recipient: Id
}

/**
 * This extrinsic triggers the cleanup of all the HRMP storage items that a para may have.
 * Normally this happens once per session, but this allows you to trigger the cleanup
 * immediately for a specific parachain.
 *
 * Number of inbound and outbound channels for `para` must be provided as witness data.
 *
 * Origin must be the `ChannelManager`.
 */
export interface HrmpCall_force_clean_hrmp {
    __kind: 'force_clean_hrmp'
    para: Id
    numInbound: number
    numOutbound: number
}

/**
 * Open a channel from a `sender` to a `recipient` `ParaId`. Although opened by governance,
 * the `max_capacity` and `max_message_size` are still subject to the Relay Chain's
 * configured limits.
 *
 * Expected use is when one (and only one) of the `ParaId`s involved in the channel is
 * governed by the system, e.g. a system parachain.
 *
 * Origin must be the `ChannelManager`.
 */
export interface HrmpCall_force_open_hrmp_channel {
    __kind: 'force_open_hrmp_channel'
    sender: Id
    recipient: Id
    maxCapacity: number
    maxMessageSize: number
}

/**
 * Force process HRMP close channel requests.
 *
 * If there are pending HRMP close channel requests, you can use this function to process
 * all of those requests immediately.
 *
 * Total number of closing channels must be provided as witness data.
 *
 * Origin must be the `ChannelManager`.
 */
export interface HrmpCall_force_process_hrmp_close {
    __kind: 'force_process_hrmp_close'
    channels: number
}

/**
 * Force process HRMP open channel requests.
 *
 * If there are pending HRMP open channel requests, you can use this function to process
 * all of those requests immediately.
 *
 * Total number of opening channels must be provided as witness data.
 *
 * Origin must be the `ChannelManager`.
 */
export interface HrmpCall_force_process_hrmp_open {
    __kind: 'force_process_hrmp_open'
    channels: number
}

/**
 * Accept a pending open channel request from the given sender.
 *
 * The channel will be opened only on the next session boundary.
 */
export interface HrmpCall_hrmp_accept_open_channel {
    __kind: 'hrmp_accept_open_channel'
    sender: Id
}

/**
 * This cancels a pending open channel request. It can be canceled by either of the sender
 * or the recipient for that request. The origin must be either of those.
 *
 * The cancellation happens immediately. It is not possible to cancel the request if it is
 * already accepted.
 *
 * Total number of open requests (i.e. `HrmpOpenChannelRequestsList`) must be provided as
 * witness data.
 */
export interface HrmpCall_hrmp_cancel_open_request {
    __kind: 'hrmp_cancel_open_request'
    channelId: HrmpChannelId
    openRequests: number
}

/**
 * Initiate unilateral closing of a channel. The origin must be either the sender or the
 * recipient in the channel being closed.
 *
 * The closure can only happen on a session change.
 */
export interface HrmpCall_hrmp_close_channel {
    __kind: 'hrmp_close_channel'
    channelId: HrmpChannelId
}

/**
 * Initiate opening a channel from a parachain to a given recipient with given channel
 * parameters.
 *
 * - `proposed_max_capacity` - specifies how many messages can be in the channel at once.
 * - `proposed_max_message_size` - specifies the maximum size of the messages.
 *
 * These numbers are a subject to the relay-chain configuration limits.
 *
 * The channel can be opened only after the recipient confirms it and only on a session
 * change.
 */
export interface HrmpCall_hrmp_init_open_channel {
    __kind: 'hrmp_init_open_channel'
    recipient: Id
    proposedMaxCapacity: number
    proposedMaxMessageSize: number
}

/**
 * Update the deposits held for an HRMP channel to the latest `Configuration`. Channels
 * with system chains do not require a deposit.
 *
 * Arguments:
 *
 * - `sender`: A chain, `ParaId`.
 * - `recipient`: A chain, `ParaId`.
 *
 * Any signed origin can call this function.
 */
export interface HrmpCall_poke_channel_deposits {
    __kind: 'poke_channel_deposits'
    sender: Id
    recipient: Id
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type GrandpaCall =
    | GrandpaCall_note_stalled
    | GrandpaCall_report_equivocation
    | GrandpaCall_report_equivocation_unsigned

/**
 * Note that the current authority set of the GRANDPA finality gadget has stalled.
 *
 * This will trigger a forced authority set change at the beginning of the next session, to
 * be enacted `delay` blocks after that. The `delay` should be high enough to safely assume
 * that the block signalling the forced change will not be re-orged e.g. 1000 blocks.
 * The block production rate (which may be slowed down because of finality lagging) should
 * be taken into account when choosing the `delay`. The GRANDPA voters based on the new
 * authority will start voting on top of `best_finalized_block_number` for new finalized
 * blocks. `best_finalized_block_number` should be the highest of the latest finalized
 * block of all validators of the new authority set.
 *
 * Only callable by root.
 */
export interface GrandpaCall_note_stalled {
    __kind: 'note_stalled'
    delay: number
    bestFinalizedBlockNumber: number
}

/**
 * Report voter equivocation/misbehavior. This method will verify the
 * equivocation proof and validate the given key ownership proof
 * against the extracted offender. If both are valid, the offence
 * will be reported.
 */
export interface GrandpaCall_report_equivocation {
    __kind: 'report_equivocation'
    equivocationProof: Type_423
    keyOwnerProof: MembershipProof
}

/**
 * Report voter equivocation/misbehavior. This method will verify the
 * equivocation proof and validate the given key ownership proof
 * against the extracted offender. If both are valid, the offence
 * will be reported.
 *
 * This extrinsic must be called unsigned and it is expected that only
 * block authors will call it (validated in `ValidateUnsigned`), as such
 * if the block author is defined it will be defined as the equivocation
 * reporter.
 */
export interface GrandpaCall_report_equivocation_unsigned {
    __kind: 'report_equivocation_unsigned'
    equivocationProof: Type_423
    keyOwnerProof: MembershipProof
}

export interface Type_423 {
    setId: bigint
    equivocation: Equivocation
}

export type Equivocation = Equivocation_Precommit | Equivocation_Prevote

export interface Equivocation_Precommit {
    __kind: 'Precommit'
    value: Type_430
}

export interface Equivocation_Prevote {
    __kind: 'Prevote'
    value: Type_425
}

export interface Type_425 {
    roundNumber: bigint
    identity: Public
    first: [Prevote, Bytes]
    second: [Prevote, Bytes]
}

export interface Prevote {
    targetHash: H256
    targetNumber: number
}

export interface Type_430 {
    roundNumber: bigint
    identity: Public
    first: [Precommit, Bytes]
    second: [Precommit, Bytes]
}

export interface Precommit {
    targetHash: H256
    targetNumber: number
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
    settings?: DispatchSettings | undefined
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
    settings?: DispatchSettings | undefined
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
    userId?: MultiAddress | undefined
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
    ruleSetId?: number | undefined
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

export interface DispatchSettings {
    useNoneOrigin: boolean
    paysRemainingFee: boolean
    signature?: ExpirableSignature | undefined
}

export interface ExpirableSignature {
    signature: Signature
    expiryBlock: number
}

export interface FuelTankDescriptor {
    name: Bytes
    userAccountManagement?: UserAccountManagement | undefined
    ruleSets: [number, RuleSetDescriptor][]
    coveragePolicy: CoveragePolicy
    accountRules: AccountRuleDescriptor[]
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type FellowshipReferendaCall =
    | FellowshipReferendaCall_cancel
    | FellowshipReferendaCall_kill
    | FellowshipReferendaCall_nudge_referendum
    | FellowshipReferendaCall_one_fewer_deciding
    | FellowshipReferendaCall_place_decision_deposit
    | FellowshipReferendaCall_refund_decision_deposit
    | FellowshipReferendaCall_refund_submission_deposit
    | FellowshipReferendaCall_set_metadata
    | FellowshipReferendaCall_submit

/**
 * Cancel an ongoing referendum.
 *
 * - `origin`: must be the `CancelOrigin`.
 * - `index`: The index of the referendum to be cancelled.
 *
 * Emits `Cancelled`.
 */
export interface FellowshipReferendaCall_cancel {
    __kind: 'cancel'
    index: number
}

/**
 * Cancel an ongoing referendum and slash the deposits.
 *
 * - `origin`: must be the `KillOrigin`.
 * - `index`: The index of the referendum to be cancelled.
 *
 * Emits `Killed` and `DepositSlashed`.
 */
export interface FellowshipReferendaCall_kill {
    __kind: 'kill'
    index: number
}

/**
 * Advance a referendum onto its next logical state. Only used internally.
 *
 * - `origin`: must be `Root`.
 * - `index`: the referendum to be advanced.
 */
export interface FellowshipReferendaCall_nudge_referendum {
    __kind: 'nudge_referendum'
    index: number
}

/**
 * Advance a track onto its next logical state. Only used internally.
 *
 * - `origin`: must be `Root`.
 * - `track`: the track to be advanced.
 *
 * Action item for when there is now one fewer referendum in the deciding phase and the
 * `DecidingCount` is not yet updated. This means that we should either:
 * - begin deciding another referendum (and leave `DecidingCount` alone); or
 * - decrement `DecidingCount`.
 */
export interface FellowshipReferendaCall_one_fewer_deciding {
    __kind: 'one_fewer_deciding'
    track: number
}

/**
 * Post the Decision Deposit for a referendum.
 *
 * - `origin`: must be `Signed` and the account must have funds available for the
 *   referendum's track's Decision Deposit.
 * - `index`: The index of the submitted referendum whose Decision Deposit is yet to be
 *   posted.
 *
 * Emits `DecisionDepositPlaced`.
 */
export interface FellowshipReferendaCall_place_decision_deposit {
    __kind: 'place_decision_deposit'
    index: number
}

/**
 * Refund the Decision Deposit for a closed referendum back to the depositor.
 *
 * - `origin`: must be `Signed` or `Root`.
 * - `index`: The index of a closed referendum whose Decision Deposit has not yet been
 *   refunded.
 *
 * Emits `DecisionDepositRefunded`.
 */
export interface FellowshipReferendaCall_refund_decision_deposit {
    __kind: 'refund_decision_deposit'
    index: number
}

/**
 * Refund the Submission Deposit for a closed referendum back to the depositor.
 *
 * - `origin`: must be `Signed` or `Root`.
 * - `index`: The index of a closed referendum whose Submission Deposit has not yet been
 *   refunded.
 *
 * Emits `SubmissionDepositRefunded`.
 */
export interface FellowshipReferendaCall_refund_submission_deposit {
    __kind: 'refund_submission_deposit'
    index: number
}

/**
 * Set or clear metadata of a referendum.
 *
 * Parameters:
 * - `origin`: Must be `Signed` by a creator of a referendum or by anyone to clear a
 *   metadata of a finished referendum.
 * - `index`:  The index of a referendum to set or clear metadata for.
 * - `maybe_hash`: The hash of an on-chain stored preimage. `None` to clear a metadata.
 */
export interface FellowshipReferendaCall_set_metadata {
    __kind: 'set_metadata'
    index: number
    maybeHash?: H256 | undefined
}

/**
 * Propose a referendum on a privileged action.
 *
 * - `origin`: must be `SubmitOrigin` and the account must have `SubmissionDeposit` funds
 *   available.
 * - `proposal_origin`: The origin from which the proposal should be executed.
 * - `proposal`: The proposal.
 * - `enactment_moment`: The moment that the proposal should be enacted.
 *
 * Emits `Submitted`.
 */
export interface FellowshipReferendaCall_submit {
    __kind: 'submit'
    proposalOrigin: OriginCaller
    proposal: Bounded
    enactmentMoment: DispatchTime
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type FellowshipCollectiveCall =
    | FellowshipCollectiveCall_add_member
    | FellowshipCollectiveCall_cleanup_poll
    | FellowshipCollectiveCall_demote_member
    | FellowshipCollectiveCall_exchange_member
    | FellowshipCollectiveCall_promote_member
    | FellowshipCollectiveCall_remove_member
    | FellowshipCollectiveCall_vote

/**
 * Introduce a new member.
 *
 * - `origin`: Must be the `AddOrigin`.
 * - `who`: Account of non-member which will become a member.
 *
 * Weight: `O(1)`
 */
export interface FellowshipCollectiveCall_add_member {
    __kind: 'add_member'
    who: MultiAddress
}

/**
 * Remove votes from the given poll. It must have ended.
 *
 * - `origin`: Must be `Signed` by any account.
 * - `poll_index`: Index of a poll which is completed and for which votes continue to
 *   exist.
 * - `max`: Maximum number of vote items from remove in this call.
 *
 * Transaction fees are waived if the operation is successful.
 *
 * Weight `O(max)` (less if there are fewer items to remove than `max`).
 */
export interface FellowshipCollectiveCall_cleanup_poll {
    __kind: 'cleanup_poll'
    pollIndex: number
    max: number
}

/**
 * Decrement the rank of an existing member by one. If the member is already at rank zero,
 * then they are removed entirely.
 *
 * - `origin`: Must be the `DemoteOrigin`.
 * - `who`: Account of existing member of rank greater than zero.
 *
 * Weight: `O(1)`, less if the member's index is highest in its rank.
 */
export interface FellowshipCollectiveCall_demote_member {
    __kind: 'demote_member'
    who: MultiAddress
}

/**
 * Exchanges a member with a new account and the same existing rank.
 *
 * - `origin`: Must be the `ExchangeOrigin`.
 * - `who`: Account of existing member of rank greater than zero to be exchanged.
 * - `new_who`: New Account of existing member of rank greater than zero to exchanged to.
 */
export interface FellowshipCollectiveCall_exchange_member {
    __kind: 'exchange_member'
    who: MultiAddress
    newWho: MultiAddress
}

/**
 * Increment the rank of an existing member by one.
 *
 * - `origin`: Must be the `PromoteOrigin`.
 * - `who`: Account of existing member.
 *
 * Weight: `O(1)`
 */
export interface FellowshipCollectiveCall_promote_member {
    __kind: 'promote_member'
    who: MultiAddress
}

/**
 * Remove the member entirely.
 *
 * - `origin`: Must be the `RemoveOrigin`.
 * - `who`: Account of existing member of rank greater than zero.
 * - `min_rank`: The rank of the member or greater.
 *
 * Weight: `O(min_rank)`.
 */
export interface FellowshipCollectiveCall_remove_member {
    __kind: 'remove_member'
    who: MultiAddress
    minRank: number
}

/**
 * Add an aye or nay vote for the sender to the given proposal.
 *
 * - `origin`: Must be `Signed` by a member account.
 * - `poll`: Index of a poll which is ongoing.
 * - `aye`: `true` if the vote is to approve the proposal, `false` otherwise.
 *
 * Transaction fees are be waived if the member is voting on any particular proposal
 * for the first time and the call is successful. Subsequent vote changes will charge a
 * fee.
 *
 * Weight: `O(1)`, less if there was no previous vote on the poll by the member.
 */
export interface FellowshipCollectiveCall_vote {
    __kind: 'vote'
    poll: number
    aye: boolean
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
export type ElectionProviderMultiPhaseCall =
    | ElectionProviderMultiPhaseCall_governance_fallback
    | ElectionProviderMultiPhaseCall_set_emergency_election_result
    | ElectionProviderMultiPhaseCall_set_minimum_untrusted_score
    | ElectionProviderMultiPhaseCall_submit
    | ElectionProviderMultiPhaseCall_submit_unsigned

/**
 * Trigger the governance fallback.
 *
 * This can only be called when [`Phase::Emergency`] is enabled, as an alternative to
 * calling [`Call::set_emergency_election_result`].
 */
export interface ElectionProviderMultiPhaseCall_governance_fallback {
    __kind: 'governance_fallback'
    maybeMaxVoters?: number | undefined
    maybeMaxTargets?: number | undefined
}

/**
 * Set a solution in the queue, to be handed out to the client of this pallet in the next
 * call to `ElectionProvider::elect`.
 *
 * This can only be set by `T::ForceOrigin`, and only when the phase is `Emergency`.
 *
 * The solution is not checked for any feasibility and is assumed to be trustworthy, as any
 * feasibility check itself can in principle cause the election process to fail (due to
 * memory/weight constrains).
 */
export interface ElectionProviderMultiPhaseCall_set_emergency_election_result {
    __kind: 'set_emergency_election_result'
    supports: [AccountId32, Support][]
}

/**
 * Set a new value for `MinimumUntrustedScore`.
 *
 * Dispatch origin must be aligned with `T::ForceOrigin`.
 *
 * This check can be turned off by setting the value to `None`.
 */
export interface ElectionProviderMultiPhaseCall_set_minimum_untrusted_score {
    __kind: 'set_minimum_untrusted_score'
    maybeNextScore?: ElectionScore | undefined
}

/**
 * Submit a solution for the signed phase.
 *
 * The dispatch origin fo this call must be __signed__.
 *
 * The solution is potentially queued, based on the claimed score and processed at the end
 * of the signed phase.
 *
 * A deposit is reserved and recorded for the solution. Based on the outcome, the solution
 * might be rewarded, slashed, or get all or a part of the deposit back.
 */
export interface ElectionProviderMultiPhaseCall_submit {
    __kind: 'submit'
    rawSolution: RawSolution
}

/**
 * Submit a solution for the unsigned phase.
 *
 * The dispatch origin fo this call must be __none__.
 *
 * This submission is checked on the fly. Moreover, this unsigned solution is only
 * validated when submitted to the pool from the **local** node. Effectively, this means
 * that only active validators can submit this transaction when authoring a block (similar
 * to an inherent).
 *
 * To prevent any incorrect solution (and thus wasted time/weight), this transaction will
 * panic if the solution submitted by the validator is invalid in any way, effectively
 * putting their authoring reward at risk.
 *
 * No deposit or reward is associated with this submission.
 */
export interface ElectionProviderMultiPhaseCall_submit_unsigned {
    __kind: 'submit_unsigned'
    rawSolution: RawSolution
    witness: SolutionOrSnapshotSize
}

export interface SolutionOrSnapshotSize {
    voters: number
    targets: number
}

export interface RawSolution {
    solution: NposSolution16
    score: ElectionScore
    round: number
}

export interface NposSolution16 {
    votes1: [number, number][]
    votes2: [number, [number, number], number][]
    votes3: [number, [number, number][], number][]
    votes4: [number, [number, number][], number][]
    votes5: [number, [number, number][], number][]
    votes6: [number, [number, number][], number][]
    votes7: [number, [number, number][], number][]
    votes8: [number, [number, number][], number][]
    votes9: [number, [number, number][], number][]
    votes10: [number, [number, number][], number][]
    votes11: [number, [number, number][], number][]
    votes12: [number, [number, number][], number][]
    votes13: [number, [number, number][], number][]
    votes14: [number, [number, number][], number][]
    votes15: [number, [number, number][], number][]
    votes16: [number, [number, number][], number][]
}

export interface Support {
    total: bigint
    voters: [AccountId32, bigint][]
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type CrowdloanCall =
    | CrowdloanCall_add_memo
    | CrowdloanCall_contribute
    | CrowdloanCall_contribute_all
    | CrowdloanCall_create
    | CrowdloanCall_dissolve
    | CrowdloanCall_edit
    | CrowdloanCall_poke
    | CrowdloanCall_refund
    | CrowdloanCall_withdraw

/**
 * Add an optional memo to an existing crowdloan contribution.
 *
 * Origin must be Signed, and the user must have contributed to the crowdloan.
 */
export interface CrowdloanCall_add_memo {
    __kind: 'add_memo'
    index: Id
    memo: Bytes
}

/**
 * Contribute to a crowd sale. This will transfer some balance over to fund a parachain
 * slot. It will be withdrawable when the crowdloan has ended and the funds are unused.
 */
export interface CrowdloanCall_contribute {
    __kind: 'contribute'
    index: number
    value: bigint
    signature?: MultiSignature | undefined
}

/**
 * Contribute your entire balance to a crowd sale. This will transfer the entire balance of
 * a user over to fund a parachain slot. It will be withdrawable when the crowdloan has
 * ended and the funds are unused.
 */
export interface CrowdloanCall_contribute_all {
    __kind: 'contribute_all'
    index: number
    signature?: MultiSignature | undefined
}

/**
 * Create a new crowdloaning campaign for a parachain slot with the given lease period
 * range.
 *
 * This applies a lock to your parachain configuration, ensuring that it cannot be changed
 * by the parachain manager.
 */
export interface CrowdloanCall_create {
    __kind: 'create'
    index: number
    cap: bigint
    firstPeriod: number
    lastPeriod: number
    end: number
    verifier?: MultiSigner | undefined
}

/**
 * Remove a fund after the retirement period has ended and all funds have been returned.
 */
export interface CrowdloanCall_dissolve {
    __kind: 'dissolve'
    index: number
}

/**
 * Edit the configuration for an in-progress crowdloan.
 *
 * Can only be called by Root origin.
 */
export interface CrowdloanCall_edit {
    __kind: 'edit'
    index: number
    cap: bigint
    firstPeriod: number
    lastPeriod: number
    end: number
    verifier?: MultiSigner | undefined
}

/**
 * Poke the fund into `NewRaise`
 *
 * Origin must be Signed, and the fund has non-zero raise.
 */
export interface CrowdloanCall_poke {
    __kind: 'poke'
    index: Id
}

/**
 * Automatically refund contributors of an ended crowdloan.
 * Due to weight restrictions, this function may need to be called multiple
 * times to fully refund all users. We will refund `RemoveKeysLimit` users at a time.
 *
 * Origin must be signed, but can come from anyone.
 */
export interface CrowdloanCall_refund {
    __kind: 'refund'
    index: number
}

/**
 * Withdraw full balance of a specific contributor.
 *
 * Origin must be signed, but can come from anyone.
 *
 * The fund must be either in, or ready for, retirement. For a fund to be *in* retirement,
 * then the retirement flag must be set. For a fund to be ready for retirement, then:
 * - it must not already be in retirement;
 * - the amount of raised funds must be bigger than the _free_ balance of the account;
 * - and either:
 *   - the block number must be at least `end`; or
 *   - the current lease period must be greater than the fund's `last_period`.
 *
 * In this case, the fund's retirement flag is set and its `end` is reset to the current
 * block number.
 *
 * - `who`: The account whose contribution should be withdrawn.
 * - `index`: The parachain to whose crowdloan the contribution was made.
 */
export interface CrowdloanCall_withdraw {
    __kind: 'withdraw'
    who: AccountId32
    index: number
}

export type MultiSigner = MultiSigner_Ecdsa | MultiSigner_Ed25519 | MultiSigner_Sr25519

export interface MultiSigner_Ecdsa {
    __kind: 'Ecdsa'
    value: Bytes
}

export interface MultiSigner_Ed25519 {
    __kind: 'Ed25519'
    value: Bytes
}

export interface MultiSigner_Sr25519 {
    __kind: 'Sr25519'
    value: Bytes
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ConvictionVotingCall =
    | ConvictionVotingCall_delegate
    | ConvictionVotingCall_remove_other_vote
    | ConvictionVotingCall_remove_vote
    | ConvictionVotingCall_undelegate
    | ConvictionVotingCall_unlock
    | ConvictionVotingCall_vote

/**
 * Delegate the voting power (with some given conviction) of the sending account for a
 * particular class of polls.
 *
 * The balance delegated is locked for as long as it's delegated, and thereafter for the
 * time appropriate for the conviction's lock period.
 *
 * The dispatch origin of this call must be _Signed_, and the signing account must either:
 *   - be delegating already; or
 *   - have no voting activity (if there is, then it will need to be removed through
 *     `remove_vote`).
 *
 * - `to`: The account whose voting the `target` account's voting power will follow.
 * - `class`: The class of polls to delegate. To delegate multiple classes, multiple calls
 *   to this function are required.
 * - `conviction`: The conviction that will be attached to the delegated votes. When the
 *   account is undelegated, the funds will be locked for the corresponding period.
 * - `balance`: The amount of the account's balance to be used in delegating. This must not
 *   be more than the account's current balance.
 *
 * Emits `Delegated`.
 *
 * Weight: `O(R)` where R is the number of polls the voter delegating to has
 *   voted on. Weight is initially charged as if maximum votes, but is refunded later.
 */
export interface ConvictionVotingCall_delegate {
    __kind: 'delegate'
    class: number
    to: MultiAddress
    conviction: Conviction
    balance: bigint
}

/**
 * Remove a vote for a poll.
 *
 * If the `target` is equal to the signer, then this function is exactly equivalent to
 * `remove_vote`. If not equal to the signer, then the vote must have expired,
 * either because the poll was cancelled, because the voter lost the poll or
 * because the conviction period is over.
 *
 * The dispatch origin of this call must be _Signed_.
 *
 * - `target`: The account of the vote to be removed; this account must have voted for poll
 *   `index`.
 * - `index`: The index of poll of the vote to be removed.
 * - `class`: The class of the poll.
 *
 * Weight: `O(R + log R)` where R is the number of polls that `target` has voted on.
 *   Weight is calculated for the maximum number of vote.
 */
export interface ConvictionVotingCall_remove_other_vote {
    __kind: 'remove_other_vote'
    target: MultiAddress
    class: number
    index: number
}

/**
 * Remove a vote for a poll.
 *
 * If:
 * - the poll was cancelled, or
 * - the poll is ongoing, or
 * - the poll has ended such that
 *   - the vote of the account was in opposition to the result; or
 *   - there was no conviction to the account's vote; or
 *   - the account made a split vote
 * ...then the vote is removed cleanly and a following call to `unlock` may result in more
 * funds being available.
 *
 * If, however, the poll has ended and:
 * - it finished corresponding to the vote of the account, and
 * - the account made a standard vote with conviction, and
 * - the lock period of the conviction is not over
 * ...then the lock will be aggregated into the overall account's lock, which may involve
 * *overlocking* (where the two locks are combined into a single lock that is the maximum
 * of both the amount locked and the time is it locked for).
 *
 * The dispatch origin of this call must be _Signed_, and the signer must have a vote
 * registered for poll `index`.
 *
 * - `index`: The index of poll of the vote to be removed.
 * - `class`: Optional parameter, if given it indicates the class of the poll. For polls
 *   which have finished or are cancelled, this must be `Some`.
 *
 * Weight: `O(R + log R)` where R is the number of polls that `target` has voted on.
 *   Weight is calculated for the maximum number of vote.
 */
export interface ConvictionVotingCall_remove_vote {
    __kind: 'remove_vote'
    class?: number | undefined
    index: number
}

/**
 * Undelegate the voting power of the sending account for a particular class of polls.
 *
 * Tokens may be unlocked following once an amount of time consistent with the lock period
 * of the conviction with which the delegation was issued has passed.
 *
 * The dispatch origin of this call must be _Signed_ and the signing account must be
 * currently delegating.
 *
 * - `class`: The class of polls to remove the delegation from.
 *
 * Emits `Undelegated`.
 *
 * Weight: `O(R)` where R is the number of polls the voter delegating to has
 *   voted on. Weight is initially charged as if maximum votes, but is refunded later.
 */
export interface ConvictionVotingCall_undelegate {
    __kind: 'undelegate'
    class: number
}

/**
 * Remove the lock caused by prior voting/delegating which has expired within a particular
 * class.
 *
 * The dispatch origin of this call must be _Signed_.
 *
 * - `class`: The class of polls to unlock.
 * - `target`: The account to remove the lock on.
 *
 * Weight: `O(R)` with R number of vote of target.
 */
export interface ConvictionVotingCall_unlock {
    __kind: 'unlock'
    class: number
    target: MultiAddress
}

/**
 * Vote in a poll. If `vote.is_aye()`, the vote is to enact the proposal;
 * otherwise it is a vote to keep the status quo.
 *
 * The dispatch origin of this call must be _Signed_.
 *
 * - `poll_index`: The index of the poll to vote for.
 * - `vote`: The vote configuration.
 *
 * Weight: `O(R)` where R is the number of polls the voter has voted on.
 */
export interface ConvictionVotingCall_vote {
    __kind: 'vote'
    pollIndex: number
    vote: AccountVote
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
export type ConfigurationCall =
    | ConfigurationCall_set_approval_voting_params
    | ConfigurationCall_set_async_backing_params
    | ConfigurationCall_set_bypass_consistency_check
    | ConfigurationCall_set_code_retention_period
    | ConfigurationCall_set_coretime_cores
    | ConfigurationCall_set_dispute_period
    | ConfigurationCall_set_dispute_post_conclusion_acceptance_period
    | ConfigurationCall_set_executor_params
    | ConfigurationCall_set_group_rotation_frequency
    | ConfigurationCall_set_hrmp_channel_max_capacity
    | ConfigurationCall_set_hrmp_channel_max_message_size
    | ConfigurationCall_set_hrmp_channel_max_total_size
    | ConfigurationCall_set_hrmp_max_message_num_per_candidate
    | ConfigurationCall_set_hrmp_max_parachain_inbound_channels
    | ConfigurationCall_set_hrmp_max_parachain_outbound_channels
    | ConfigurationCall_set_hrmp_open_request_ttl
    | ConfigurationCall_set_hrmp_recipient_deposit
    | ConfigurationCall_set_hrmp_sender_deposit
    | ConfigurationCall_set_max_availability_timeouts
    | ConfigurationCall_set_max_code_size
    | ConfigurationCall_set_max_downward_message_size
    | ConfigurationCall_set_max_head_data_size
    | ConfigurationCall_set_max_pov_size
    | ConfigurationCall_set_max_upward_message_num_per_candidate
    | ConfigurationCall_set_max_upward_message_size
    | ConfigurationCall_set_max_upward_queue_count
    | ConfigurationCall_set_max_upward_queue_size
    | ConfigurationCall_set_max_validators
    | ConfigurationCall_set_max_validators_per_core
    | ConfigurationCall_set_minimum_backing_votes
    | ConfigurationCall_set_minimum_validation_upgrade_delay
    | ConfigurationCall_set_n_delay_tranches
    | ConfigurationCall_set_needed_approvals
    | ConfigurationCall_set_no_show_slots
    | ConfigurationCall_set_node_feature
    | ConfigurationCall_set_on_demand_base_fee
    | ConfigurationCall_set_on_demand_fee_variability
    | ConfigurationCall_set_on_demand_queue_max_size
    | ConfigurationCall_set_on_demand_target_queue_utilization
    | ConfigurationCall_set_on_demand_ttl
    | ConfigurationCall_set_paras_availability_period
    | ConfigurationCall_set_pvf_voting_ttl
    | ConfigurationCall_set_relay_vrf_modulo_samples
    | ConfigurationCall_set_scheduler_params
    | ConfigurationCall_set_scheduling_lookahead
    | ConfigurationCall_set_validation_upgrade_cooldown
    | ConfigurationCall_set_validation_upgrade_delay
    | ConfigurationCall_set_zeroth_delay_tranche_width

/**
 * Set approval-voting-params.
 */
export interface ConfigurationCall_set_approval_voting_params {
    __kind: 'set_approval_voting_params'
    new: ApprovalVotingParams
}

/**
 * Set the asynchronous backing parameters.
 */
export interface ConfigurationCall_set_async_backing_params {
    __kind: 'set_async_backing_params'
    new: V6AsyncBackingParams
}

/**
 * Setting this to true will disable consistency checks for the configuration setters.
 * Use with caution.
 */
export interface ConfigurationCall_set_bypass_consistency_check {
    __kind: 'set_bypass_consistency_check'
    new: boolean
}

/**
 * Set the acceptance period for an included candidate.
 */
export interface ConfigurationCall_set_code_retention_period {
    __kind: 'set_code_retention_period'
    new: number
}

/**
 * Set the number of coretime execution cores.
 *
 * Note that this configuration is managed by the coretime chain. Only manually change
 * this, if you really know what you are doing!
 */
export interface ConfigurationCall_set_coretime_cores {
    __kind: 'set_coretime_cores'
    new: number
}

/**
 * Set the dispute period, in number of sessions to keep for disputes.
 */
export interface ConfigurationCall_set_dispute_period {
    __kind: 'set_dispute_period'
    new: number
}

/**
 * Set the dispute post conclusion acceptance period.
 */
export interface ConfigurationCall_set_dispute_post_conclusion_acceptance_period {
    __kind: 'set_dispute_post_conclusion_acceptance_period'
    new: number
}

/**
 * Set PVF executor parameters.
 */
export interface ConfigurationCall_set_executor_params {
    __kind: 'set_executor_params'
    new: V6ExecutorParam[]
}

/**
 * Set the parachain validator-group rotation frequency
 */
export interface ConfigurationCall_set_group_rotation_frequency {
    __kind: 'set_group_rotation_frequency'
    new: number
}

/**
 * Sets the maximum number of messages allowed in an HRMP channel at once.
 */
export interface ConfigurationCall_set_hrmp_channel_max_capacity {
    __kind: 'set_hrmp_channel_max_capacity'
    new: number
}

/**
 * Sets the maximum size of a message that could ever be put into an HRMP channel.
 */
export interface ConfigurationCall_set_hrmp_channel_max_message_size {
    __kind: 'set_hrmp_channel_max_message_size'
    new: number
}

/**
 * Sets the maximum total size of messages in bytes allowed in an HRMP channel at once.
 */
export interface ConfigurationCall_set_hrmp_channel_max_total_size {
    __kind: 'set_hrmp_channel_max_total_size'
    new: number
}

/**
 * Sets the maximum number of outbound HRMP messages can be sent by a candidate.
 */
export interface ConfigurationCall_set_hrmp_max_message_num_per_candidate {
    __kind: 'set_hrmp_max_message_num_per_candidate'
    new: number
}

/**
 * Sets the maximum number of inbound HRMP channels a parachain is allowed to accept.
 */
export interface ConfigurationCall_set_hrmp_max_parachain_inbound_channels {
    __kind: 'set_hrmp_max_parachain_inbound_channels'
    new: number
}

/**
 * Sets the maximum number of outbound HRMP channels a parachain is allowed to open.
 */
export interface ConfigurationCall_set_hrmp_max_parachain_outbound_channels {
    __kind: 'set_hrmp_max_parachain_outbound_channels'
    new: number
}

/**
 * Sets the number of sessions after which an HRMP open channel request expires.
 */
export interface ConfigurationCall_set_hrmp_open_request_ttl {
    __kind: 'set_hrmp_open_request_ttl'
    new: number
}

/**
 * Sets the amount of funds that the recipient should provide for accepting opening an HRMP
 * channel.
 */
export interface ConfigurationCall_set_hrmp_recipient_deposit {
    __kind: 'set_hrmp_recipient_deposit'
    new: bigint
}

/**
 * Sets the amount of funds that the sender should provide for opening an HRMP channel.
 */
export interface ConfigurationCall_set_hrmp_sender_deposit {
    __kind: 'set_hrmp_sender_deposit'
    new: bigint
}

/**
 * Set the max number of times a claim may timeout on a core before it is abandoned
 */
export interface ConfigurationCall_set_max_availability_timeouts {
    __kind: 'set_max_availability_timeouts'
    new: number
}

/**
 * Set the max validation code size for incoming upgrades.
 */
export interface ConfigurationCall_set_max_code_size {
    __kind: 'set_max_code_size'
    new: number
}

/**
 * Set the critical downward message size.
 */
export interface ConfigurationCall_set_max_downward_message_size {
    __kind: 'set_max_downward_message_size'
    new: number
}

/**
 * Set the max head data size for paras.
 */
export interface ConfigurationCall_set_max_head_data_size {
    __kind: 'set_max_head_data_size'
    new: number
}

/**
 * Set the max POV block size for incoming upgrades.
 */
export interface ConfigurationCall_set_max_pov_size {
    __kind: 'set_max_pov_size'
    new: number
}

/**
 * Sets the maximum number of messages that a candidate can contain.
 */
export interface ConfigurationCall_set_max_upward_message_num_per_candidate {
    __kind: 'set_max_upward_message_num_per_candidate'
    new: number
}

/**
 * Sets the maximum size of an upward message that can be sent by a candidate.
 */
export interface ConfigurationCall_set_max_upward_message_size {
    __kind: 'set_max_upward_message_size'
    new: number
}

/**
 * Sets the maximum items that can present in a upward dispatch queue at once.
 */
export interface ConfigurationCall_set_max_upward_queue_count {
    __kind: 'set_max_upward_queue_count'
    new: number
}

/**
 * Sets the maximum total size of items that can present in a upward dispatch queue at
 * once.
 */
export interface ConfigurationCall_set_max_upward_queue_size {
    __kind: 'set_max_upward_queue_size'
    new: number
}

/**
 * Set the maximum number of validators to use in parachain consensus.
 */
export interface ConfigurationCall_set_max_validators {
    __kind: 'set_max_validators'
    new?: number | undefined
}

/**
 * Set the maximum number of validators to assign to any core.
 */
export interface ConfigurationCall_set_max_validators_per_core {
    __kind: 'set_max_validators_per_core'
    new?: number | undefined
}

/**
 * Set the minimum backing votes threshold.
 */
export interface ConfigurationCall_set_minimum_backing_votes {
    __kind: 'set_minimum_backing_votes'
    new: number
}

/**
 * Sets the minimum delay between announcing the upgrade block for a parachain until the
 * upgrade taking place.
 *
 * See the field documentation for information and constraints for the new value.
 */
export interface ConfigurationCall_set_minimum_validation_upgrade_delay {
    __kind: 'set_minimum_validation_upgrade_delay'
    new: number
}

/**
 * Set the total number of delay tranches.
 */
export interface ConfigurationCall_set_n_delay_tranches {
    __kind: 'set_n_delay_tranches'
    new: number
}

/**
 * Set the number of validators needed to approve a block.
 */
export interface ConfigurationCall_set_needed_approvals {
    __kind: 'set_needed_approvals'
    new: number
}

/**
 * Set the no show slots, in number of number of consensus slots.
 * Must be at least 1.
 */
export interface ConfigurationCall_set_no_show_slots {
    __kind: 'set_no_show_slots'
    new: number
}

/**
 * Set/Unset a node feature.
 */
export interface ConfigurationCall_set_node_feature {
    __kind: 'set_node_feature'
    index: number
    value: boolean
}

/**
 * Set the on demand (parathreads) base fee.
 */
export interface ConfigurationCall_set_on_demand_base_fee {
    __kind: 'set_on_demand_base_fee'
    new: bigint
}

/**
 * Set the on demand (parathreads) fee variability.
 */
export interface ConfigurationCall_set_on_demand_fee_variability {
    __kind: 'set_on_demand_fee_variability'
    new: Perbill
}

/**
 * Set the on demand (parathreads) queue max size.
 */
export interface ConfigurationCall_set_on_demand_queue_max_size {
    __kind: 'set_on_demand_queue_max_size'
    new: number
}

/**
 * Set the on demand (parathreads) fee variability.
 */
export interface ConfigurationCall_set_on_demand_target_queue_utilization {
    __kind: 'set_on_demand_target_queue_utilization'
    new: Perbill
}

/**
 * Set the on demand (parathreads) ttl in the claimqueue.
 */
export interface ConfigurationCall_set_on_demand_ttl {
    __kind: 'set_on_demand_ttl'
    new: number
}

/**
 * Set the availability period for paras.
 */
export interface ConfigurationCall_set_paras_availability_period {
    __kind: 'set_paras_availability_period'
    new: number
}

/**
 * Set the number of session changes after which a PVF pre-checking voting is rejected.
 */
export interface ConfigurationCall_set_pvf_voting_ttl {
    __kind: 'set_pvf_voting_ttl'
    new: number
}

/**
 * Set the number of samples to do of the `RelayVRFModulo` approval assignment criterion.
 */
export interface ConfigurationCall_set_relay_vrf_modulo_samples {
    __kind: 'set_relay_vrf_modulo_samples'
    new: number
}

/**
 * Set scheduler-params.
 */
export interface ConfigurationCall_set_scheduler_params {
    __kind: 'set_scheduler_params'
    new: SchedulerParams
}

/**
 * Set the scheduling lookahead, in expected number of blocks at peak throughput.
 */
export interface ConfigurationCall_set_scheduling_lookahead {
    __kind: 'set_scheduling_lookahead'
    new: number
}

/**
 * Set the validation upgrade cooldown.
 */
export interface ConfigurationCall_set_validation_upgrade_cooldown {
    __kind: 'set_validation_upgrade_cooldown'
    new: number
}

/**
 * Set the validation upgrade delay.
 */
export interface ConfigurationCall_set_validation_upgrade_delay {
    __kind: 'set_validation_upgrade_delay'
    new: number
}

/**
 * Set the zeroth delay tranche width.
 */
export interface ConfigurationCall_set_zeroth_delay_tranche_width {
    __kind: 'set_zeroth_delay_tranche_width'
    new: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type BeefyCall =
    | BeefyCall_report_equivocation
    | BeefyCall_report_equivocation_unsigned
    | BeefyCall_set_new_genesis

/**
 * Report voter equivocation/misbehavior. This method will verify the
 * equivocation proof and validate the given key ownership proof
 * against the extracted offender. If both are valid, the offence
 * will be reported.
 */
export interface BeefyCall_report_equivocation {
    __kind: 'report_equivocation'
    equivocationProof: Type_644
    keyOwnerProof: MembershipProof
}

/**
 * Report voter equivocation/misbehavior. This method will verify the
 * equivocation proof and validate the given key ownership proof
 * against the extracted offender. If both are valid, the offence
 * will be reported.
 *
 * This extrinsic must be called unsigned and it is expected that only
 * block authors will call it (validated in `ValidateUnsigned`), as such
 * if the block author is defined it will be defined as the equivocation
 * reporter.
 */
export interface BeefyCall_report_equivocation_unsigned {
    __kind: 'report_equivocation_unsigned'
    equivocationProof: Type_644
    keyOwnerProof: MembershipProof
}

/**
 * Reset BEEFY consensus by setting a new BEEFY genesis at `delay_in_blocks` blocks in the
 * future.
 *
 * Note: `delay_in_blocks` has to be at least 1.
 */
export interface BeefyCall_set_new_genesis {
    __kind: 'set_new_genesis'
    delayInBlocks: number
}

export interface Type_644 {
    first: VoteMessage
    second: VoteMessage
}

export interface VoteMessage {
    commitment: Commitment
    id: Bytes
    signature: Bytes
}

export interface Commitment {
    payload: [Bytes, Bytes][]
    blockNumber: number
    validatorSetId: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type BalancesCall =
    | BalancesCall_force_adjust_total_issuance
    | BalancesCall_force_set_balance
    | BalancesCall_force_transfer
    | BalancesCall_force_unreserve
    | BalancesCall_transfer_all
    | BalancesCall_transfer_allow_death
    | BalancesCall_transfer_keep_alive
    | BalancesCall_upgrade_accounts

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

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type BabeCall =
    | BabeCall_plan_config_change
    | BabeCall_report_equivocation
    | BabeCall_report_equivocation_unsigned

/**
 * Plan an epoch config change. The epoch config change is recorded and will be enacted on
 * the next call to `enact_epoch_change`. The config will be activated one epoch after.
 * Multiple calls to this method will replace any existing planned config change that had
 * not been enacted yet.
 */
export interface BabeCall_plan_config_change {
    __kind: 'plan_config_change'
    config: NextConfigDescriptor
}

/**
 * Report authority equivocation/misbehavior. This method will verify
 * the equivocation proof and validate the given key ownership proof
 * against the extracted offender. If both are valid, the offence will
 * be reported.
 */
export interface BabeCall_report_equivocation {
    __kind: 'report_equivocation'
    equivocationProof: EquivocationProof
    keyOwnerProof: MembershipProof
}

/**
 * Report authority equivocation/misbehavior. This method will verify
 * the equivocation proof and validate the given key ownership proof
 * against the extracted offender. If both are valid, the offence will
 * be reported.
 * This extrinsic must be called unsigned and it is expected that only
 * block authors will call it (validated in `ValidateUnsigned`), as such
 * if the block author is defined it will be defined as the equivocation
 * reporter.
 */
export interface BabeCall_report_equivocation_unsigned {
    __kind: 'report_equivocation_unsigned'
    equivocationProof: EquivocationProof
    keyOwnerProof: MembershipProof
}

export interface EquivocationProof {
    offender: Bytes
    slot: Slot
    firstHeader: Header
    secondHeader: Header
}

export type NextConfigDescriptor = NextConfigDescriptor_V1

export interface NextConfigDescriptor_V1 {
    __kind: 'V1'
    c: [bigint, bigint]
    allowedSlots: AllowedSlots
}

export type AllowedSlots =
    | AllowedSlots_PrimaryAndSecondaryPlainSlots
    | AllowedSlots_PrimaryAndSecondaryVRFSlots
    | AllowedSlots_PrimarySlots

export interface AllowedSlots_PrimaryAndSecondaryPlainSlots {
    __kind: 'PrimaryAndSecondaryPlainSlots'
}

export interface AllowedSlots_PrimaryAndSecondaryVRFSlots {
    __kind: 'PrimaryAndSecondaryVRFSlots'
}

export interface AllowedSlots_PrimarySlots {
    __kind: 'PrimarySlots'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type AuctionsCall = AuctionsCall_bid | AuctionsCall_cancel_auction | AuctionsCall_new_auction

/**
 * Make a new bid from an account (including a parachain account) for deploying a new
 * parachain.
 *
 * Multiple simultaneous bids from the same bidder are allowed only as long as all active
 * bids overlap each other (i.e. are mutually exclusive). Bids cannot be redacted.
 *
 * - `sub` is the sub-bidder ID, allowing for multiple competing bids to be made by (and
 * funded by) the same account.
 * - `auction_index` is the index of the auction to bid on. Should just be the present
 * value of `AuctionCounter`.
 * - `first_slot` is the first lease period index of the range to bid on. This is the
 * absolute lease period index value, not an auction-specific offset.
 * - `last_slot` is the last lease period index of the range to bid on. This is the
 * absolute lease period index value, not an auction-specific offset.
 * - `amount` is the amount to bid to be held as deposit for the parachain should the
 * bid win. This amount is held throughout the range.
 */
export interface AuctionsCall_bid {
    __kind: 'bid'
    para: number
    auctionIndex: number
    firstSlot: number
    lastSlot: number
    amount: bigint
}

/**
 * Cancel an in-progress auction.
 *
 * Can only be called by Root origin.
 */
export interface AuctionsCall_cancel_auction {
    __kind: 'cancel_auction'
}

/**
 * Create a new auction.
 *
 * This can only happen when there isn't already an auction in progress and may only be
 * called by the root origin. Accepts the `duration` of this auction and the
 * `lease_period_index` of the initial lease period of the four that are to be auctioned.
 */
export interface AuctionsCall_new_auction {
    __kind: 'new_auction'
    duration: number
    leasePeriodIndex: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type AssignedSlotsCall =
    | AssignedSlotsCall_assign_perm_parachain_slot
    | AssignedSlotsCall_assign_temp_parachain_slot
    | AssignedSlotsCall_set_max_permanent_slots
    | AssignedSlotsCall_set_max_temporary_slots
    | AssignedSlotsCall_unassign_parachain_slot

/**
 * Assign a permanent parachain slot and immediately create a lease for it.
 */
export interface AssignedSlotsCall_assign_perm_parachain_slot {
    __kind: 'assign_perm_parachain_slot'
    id: Id
}

/**
 * Assign a temporary parachain slot. The function tries to create a lease for it
 * immediately if `SlotLeasePeriodStart::Current` is specified, and if the number
 * of currently active temporary slots is below `MaxTemporarySlotPerLeasePeriod`.
 */
export interface AssignedSlotsCall_assign_temp_parachain_slot {
    __kind: 'assign_temp_parachain_slot'
    id: Id
    leasePeriodStart: SlotLeasePeriodStart
}

/**
 * Sets the storage value [`MaxPermanentSlots`].
 */
export interface AssignedSlotsCall_set_max_permanent_slots {
    __kind: 'set_max_permanent_slots'
    slots: number
}

/**
 * Sets the storage value [`MaxTemporarySlots`].
 */
export interface AssignedSlotsCall_set_max_temporary_slots {
    __kind: 'set_max_temporary_slots'
    slots: number
}

/**
 * Unassign a permanent or temporary parachain slot
 */
export interface AssignedSlotsCall_unassign_parachain_slot {
    __kind: 'unassign_parachain_slot'
    id: Id
}

export type SlotLeasePeriodStart = SlotLeasePeriodStart_Current | SlotLeasePeriodStart_Next

export interface SlotLeasePeriodStart_Current {
    __kind: 'Current'
}

export interface SlotLeasePeriodStart_Next {
    __kind: 'Next'
}

export interface RuleSetDescriptor {
    rules: DispatchRuleDescriptor[]
    requireAccount: boolean
}

export const DispatchSettings: sts.Type<DispatchSettings> = sts.struct(() => {
    return {
        useNoneOrigin: sts.boolean(),
        paysRemainingFee: sts.boolean(),
        signature: sts.option(() => ExpirableSignature),
    }
})

export const ExpirableSignature: sts.Type<ExpirableSignature> = sts.struct(() => {
    return {
        signature: Signature,
        expiryBlock: sts.number(),
    }
})

export const Signature = sts.bytes()

export const FuelTankDescriptor: sts.Type<FuelTankDescriptor> = sts.struct(() => {
    return {
        name: sts.bytes(),
        userAccountManagement: sts.option(() => UserAccountManagement),
        ruleSets: sts.array(() => sts.tuple(() => [sts.number(), RuleSetDescriptor])),
        coveragePolicy: CoveragePolicy,
        accountRules: sts.array(() => AccountRuleDescriptor),
    }
})

export const AccountRuleDescriptor: sts.Type<AccountRuleDescriptor> = sts.closedEnum(() => {
    return {
        RequireToken: RequireTokenRule,
        WhitelistedCallers: sts.array(() => AccountId32),
    }
})

export const H160 = sts.bytes()

export const FlexibleMintParams: sts.Type<FlexibleMintParams> = sts.closedEnum(() => {
    return {
        CreateOrMint: CreateTokenParams,
        Mint: sts.enumStruct({
            tokenId: sts.bigint(),
            amount: sts.bigint(),
            depositor: sts.option(() => AccountId32),
        }),
    }
})

export const CreateTokenParams: sts.Type<CreateTokenParams> = sts.struct(() => {
    return {
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

export const PrivilegedCreateTokenParams: sts.Type<PrivilegedCreateTokenParams> = sts.struct(() => {
    return {
        requiresDeposit: sts.boolean(),
        foreignParams: sts.option(() => ForeignTokenCreationParams),
        depositor: sts.option(() => AccountId32),
    }
})

export const ForeignTokenCreationParams: sts.Type<ForeignTokenCreationParams> = sts.struct(() => {
    return {
        location: sts.option(() => V4Location),
        unitsPerSecond: sts.option(() => sts.bigint()),
    }
})

export const CreateTokenMetadata: sts.Type<CreateTokenMetadata> = sts.struct(() => {
    return {
        name: BoundedString,
        symbol: sts.bytes(),
        decimalCount: sts.number(),
    }
})

export const BoundedString = sts.bytes()

export const TokenMarketBehavior: sts.Type<TokenMarketBehavior> = sts.closedEnum(() => {
    return {
        HasRoyalty: DefaultRoyalty,
        IsCurrency: sts.unit(),
    }
})

export const TokenCap: sts.Type<TokenCap> = sts.closedEnum(() => {
    return {
        CollapsingSupply: sts.bigint(),
        Supply: sts.bigint(),
    }
})

export const Attribute: sts.Type<Attribute> = sts.struct(() => {
    return {
        value: sts.bytes(),
        deposit: sts.bigint(),
        depositor: sts.option(() => AccountId32),
    }
})

export const AttributeKeyValuePair: sts.Type<AttributeKeyValuePair> = sts.struct(() => {
    return {
        key: sts.bytes(),
        value: sts.bytes(),
    }
})

export const Type_597: sts.Type<Type_597> = sts.struct(() => {
    return {
        accountId: AccountId32,
        params: DefaultMintParams,
    }
})

export const Recipient: sts.Type<Recipient> = sts.struct(() => {
    return {
        accountId: AccountId32,
        params: DefaultTransferParams,
    }
})

export const DefaultTransferParams: sts.Type<DefaultTransferParams> = sts.closedEnum(() => {
    return {
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

export const DefaultBurnParams: sts.Type<DefaultBurnParams> = sts.struct(() => {
    return {
        tokenId: sts.bigint(),
        amount: sts.bigint(),
        removeTokenStorage: sts.boolean(),
    }
})

export const DefaultMintParams: sts.Type<DefaultMintParams> = sts.closedEnum(() => {
    return {
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

export const MultiAddress: sts.Type<MultiAddress> = sts.closedEnum(() => {
    return {
        Address20: sts.bytes(),
        Address32: sts.bytes(),
        Id: AccountId32,
        Index: sts.unit(),
        Raw: sts.bytes(),
    }
})

export const DefaultCollectionDescriptor: sts.Type<DefaultCollectionDescriptor> = sts.struct(() => {
    return {
        policy: DefaultCollectionPolicyDescriptor,
        depositor: sts.option(() => AccountId32),
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
        forceCollapsingSupply: sts.boolean(),
    }
})

export const Timepoint: sts.Type<Timepoint> = sts.struct(() => {
    return {
        height: sts.number(),
        index: sts.number(),
    }
})

export const Weight: sts.Type<Weight> = sts.struct(() => {
    return {
        refTime: sts.bigint(),
        proofSize: sts.bigint(),
    }
})

export const OriginCaller: sts.Type<OriginCaller> = sts.closedEnum(() => {
    return {
        Origins: Type_452,
        ParachainsOrigin: Origin,
        Void: Void,
        XcmPallet: Type_451,
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

export const Type_451: sts.Type<Type_451> = sts.closedEnum(() => {
    return {
        Response: V4Location,
        Xcm: V4Location,
    }
})

export const Void: sts.Type<Void> = sts.closedEnum(() => {
    return {}
})

export const Origin: sts.Type<Origin> = sts.closedEnum(() => {
    return {
        Parachain: Id,
    }
})

export const Type_452: sts.Type<Type_452> = sts.closedEnum(() => {
    return {
        AuctionAdmin: sts.unit(),
        BigSpender: sts.unit(),
        BigTipper: sts.unit(),
        Fellows: sts.unit(),
        Fellowship1Dan: sts.unit(),
        Fellowship2Dan: sts.unit(),
        Fellowship3Dan: sts.unit(),
        Fellowship4Dan: sts.unit(),
        Fellowship5Dan: sts.unit(),
        Fellowship6Dan: sts.unit(),
        Fellowship7Dan: sts.unit(),
        Fellowship8Dan: sts.unit(),
        Fellowship9Dan: sts.unit(),
        FellowshipAdmin: sts.unit(),
        FellowshipExperts: sts.unit(),
        FellowshipInitiates: sts.unit(),
        FellowshipMasters: sts.unit(),
        FuelTanksAdmin: sts.unit(),
        GeneralAdmin: sts.unit(),
        LeaseAdmin: sts.unit(),
        MediumSpender: sts.unit(),
        MultiTokensAdmin: sts.unit(),
        ParachainsAdmin: sts.unit(),
        ReferendumCanceller: sts.unit(),
        ReferendumKiller: sts.unit(),
        SmallSpender: sts.unit(),
        SmallTipper: sts.unit(),
        StakingAdmin: sts.unit(),
        TreasuryAdmin: sts.unit(),
        WhitelistAdmin: sts.unit(),
        WhitelistedCaller: sts.unit(),
    }
})

export const Call: sts.Type<Call> = sts.closedEnum(() => {
    return {
        AssignedSlots: AssignedSlotsCall,
        Auctions: AuctionsCall,
        Babe: BabeCall,
        Balances: BalancesCall,
        Beefy: BeefyCall,
        Configuration: ConfigurationCall,
        ConvictionVoting: ConvictionVotingCall,
        Crowdloan: CrowdloanCall,
        ElectionProviderMultiPhase: ElectionProviderMultiPhaseCall,
        ExtrinsicPause: ExtrinsicPauseCall,
        FellowshipCollective: FellowshipCollectiveCall,
        FellowshipReferenda: FellowshipReferendaCall,
        FuelTanks: FuelTanksCall,
        Grandpa: GrandpaCall,
        Hrmp: HrmpCall,
        Identity: IdentityCall,
        ImOnline: ImOnlineCall,
        Initializer: InitializerCall,
        Marketplace: MarketplaceCall,
        MessageQueue: MessageQueueCall,
        Migrations: MigrationsCall,
        MultiTokens: MultiTokensCall,
        Multisig: MultisigCall,
        NominationPools: NominationPoolsCall,
        ParaInclusion: ParaInclusionCall,
        ParaInherent: ParaInherentCall,
        Paras: ParasCall,
        ParasDisputes: ParasDisputesCall,
        ParasShared: ParasSharedCall,
        ParasSlashing: ParasSlashingCall,
        ParasSudoWrapper: ParasSudoWrapperCall,
        Preimage: PreimageCall,
        Proxy: ProxyCall,
        Referenda: ReferendaCall,
        Registrar: RegistrarCall,
        SafeMode: SafeModeCall,
        Scheduler: SchedulerCall,
        Session: SessionCall,
        Slots: SlotsCall,
        StakeExchange: StakeExchangeCall,
        Staking: StakingCall,
        Sudo: SudoCall,
        System: SystemCall,
        Timestamp: TimestampCall,
        Treasury: TreasuryCall,
        Utility: UtilityCall,
        ValidatorManager: ValidatorManagerCall,
        VoteManager: VoteManagerCall,
        VoterList: VoterListCall,
        Whitelist: WhitelistCall,
        XcmPallet: XcmPalletCall,
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const XcmPalletCall: sts.Type<XcmPalletCall> = sts.closedEnum(() => {
    return {
        claim_assets: sts.enumStruct({
            assets: VersionedAssets,
            beneficiary: VersionedLocation,
        }),
        execute: sts.enumStruct({
            message: Type_556,
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

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const WhitelistCall: sts.Type<WhitelistCall> = sts.closedEnum(() => {
    return {
        dispatch_whitelisted_call: sts.enumStruct({
            callHash: H256,
            callEncodedLen: sts.number(),
            callWeightWitness: Weight,
        }),
        dispatch_whitelisted_call_with_preimage: sts.enumStruct({
            call: Call,
        }),
        remove_whitelisted_call: sts.enumStruct({
            callHash: H256,
        }),
        whitelist_call: sts.enumStruct({
            callHash: H256,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const VoterListCall: sts.Type<VoterListCall> = sts.closedEnum(() => {
    return {
        put_in_front_of: sts.enumStruct({
            lighter: MultiAddress,
        }),
        put_in_front_of_other: sts.enumStruct({
            heavier: MultiAddress,
            lighter: MultiAddress,
        }),
        rebag: sts.enumStruct({
            dislocated: MultiAddress,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const VoteManagerCall: sts.Type<VoteManagerCall> = sts.closedEnum(() => {
    return {
        remove_other_vote: sts.enumStruct({
            target: MultiAddress,
            class: sts.number(),
            index: sts.number(),
        }),
        remove_vote: sts.enumStruct({
            class: sts.option(() => sts.number()),
            index: sts.number(),
        }),
        unlock: sts.enumStruct({
            class: sts.number(),
            target: MultiAddress,
            index: sts.number(),
        }),
        vote: sts.enumStruct({
            pollIndex: sts.number(),
            vote: AccountVote,
            currency: VoteCurrency,
        }),
    }
})

export const VoteCurrency: sts.Type<VoteCurrency> = sts.closedEnum(() => {
    return {
        Enj: sts.unit(),
        SEnj: sts.bigint(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ValidatorManagerCall: sts.Type<ValidatorManagerCall> = sts.closedEnum(() => {
    return {
        deregister_validators: sts.enumStruct({
            validators: sts.array(() => AccountId32),
        }),
        register_validators: sts.enumStruct({
            validators: sts.array(() => AccountId32),
        }),
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
export const TreasuryCall: sts.Type<TreasuryCall> = sts.closedEnum(() => {
    return {
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
export const SystemCall: sts.Type<SystemCall> = sts.closedEnum(() => {
    return {
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
    return {
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
export const StakingCall: sts.Type<StakingCall> = sts.closedEnum(() => {
    return {
        bond: sts.enumStruct({
            value: sts.bigint(),
            payee: RewardDestination,
        }),
        bond_extra: sts.enumStruct({
            maxAdditional: sts.bigint(),
        }),
        cancel_deferred_slash: sts.enumStruct({
            era: sts.number(),
            slashIndices: sts.array(() => sts.number()),
        }),
        chill: sts.unit(),
        chill_other: sts.enumStruct({
            stash: AccountId32,
        }),
        deprecate_controller_batch: sts.enumStruct({
            controllers: sts.array(() => AccountId32),
        }),
        force_apply_min_commission: sts.enumStruct({
            validatorStash: AccountId32,
        }),
        force_new_era: sts.unit(),
        force_new_era_always: sts.unit(),
        force_no_eras: sts.unit(),
        force_unstake: sts.enumStruct({
            stash: AccountId32,
            numSlashingSpans: sts.number(),
        }),
        increase_validator_count: sts.enumStruct({
            additional: sts.number(),
        }),
        kick: sts.enumStruct({
            who: sts.array(() => MultiAddress),
        }),
        nominate: sts.enumStruct({
            targets: sts.array(() => MultiAddress),
        }),
        payout_stakers: sts.enumStruct({
            validatorStash: AccountId32,
            era: sts.number(),
        }),
        payout_stakers_by_page: sts.enumStruct({
            validatorStash: AccountId32,
            era: sts.number(),
            page: sts.number(),
        }),
        reap_stash: sts.enumStruct({
            stash: AccountId32,
            numSlashingSpans: sts.number(),
        }),
        rebond: sts.enumStruct({
            value: sts.bigint(),
        }),
        scale_validator_count: sts.enumStruct({
            factor: Percent,
        }),
        set_controller: sts.unit(),
        set_invulnerables: sts.enumStruct({
            invulnerables: sts.array(() => AccountId32),
        }),
        set_min_commission: sts.enumStruct({
            new: Perbill,
        }),
        set_payee: sts.enumStruct({
            payee: RewardDestination,
        }),
        set_staking_configs: sts.enumStruct({
            minNominatorBond: ConfigOp,
            minValidatorBond: ConfigOp,
            maxNominatorCount: Type_413,
            maxValidatorCount: Type_413,
            chillThreshold: Type_414,
            minCommission: Type_415,
            maxStakedRewards: Type_414,
        }),
        set_validator_count: sts.enumStruct({
            new: sts.number(),
        }),
        unbond: sts.enumStruct({
            value: sts.bigint(),
        }),
        update_payee: sts.enumStruct({
            controller: AccountId32,
        }),
        validate: sts.enumStruct({
            prefs: ValidatorPrefs,
        }),
        withdraw_unbonded: sts.enumStruct({
            numSlashingSpans: sts.number(),
        }),
    }
})

/**
 * The pallet's extrinsics.
 */
export const StakeExchangeCall: sts.Type<StakeExchangeCall> = sts.closedEnum(() => {
    return {
        add_liquidity: sts.enumStruct({
            offerId: sts.bigint(),
            amount: sts.bigint(),
        }),
        buy: sts.enumStruct({
            offerId: sts.bigint(),
            amount: sts.bigint(),
            tokenId: sts.bigint(),
        }),
        cancel_offer: sts.enumStruct({
            offerId: sts.bigint(),
        }),
        configure_liquidity_account: sts.enumStruct({
            config: LiquidityAccountConfig,
        }),
        create_offer: sts.enumStruct({
            offer: CreateOffer,
        }),
        withdraw_liquidity: sts.enumStruct({
            offerId: sts.bigint(),
            amount: sts.bigint(),
        }),
    }
})

export const CreateOffer: sts.Type<CreateOffer> = sts.struct(() => {
    return {
        account: AccountId32,
        total: sts.bigint(),
        rate: sts.number(),
        minAverageRewardRate: sts.bigint(),
        tokenFilter: TokenFilter,
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const SlotsCall: sts.Type<SlotsCall> = sts.closedEnum(() => {
    return {
        clear_all_leases: sts.enumStruct({
            para: Id,
        }),
        force_lease: sts.enumStruct({
            para: Id,
            leaser: AccountId32,
            amount: sts.bigint(),
            periodBegin: sts.number(),
            periodCount: sts.number(),
        }),
        trigger_onboard: sts.enumStruct({
            para: Id,
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
        grandpa: Public,
        babe: sts.bytes(),
        imOnline: sts.bytes(),
        paraValidator: sts.bytes(),
        paraAssignment: sts.bytes(),
        authorityDiscovery: sts.bytes(),
    }
})

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
    return {
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
export const RegistrarCall: sts.Type<RegistrarCall> = sts.closedEnum(() => {
    return {
        add_lock: sts.enumStruct({
            para: Id,
        }),
        deregister: sts.enumStruct({
            id: Id,
        }),
        force_register: sts.enumStruct({
            who: AccountId32,
            deposit: sts.bigint(),
            id: Id,
            genesisHead: HeadData,
            validationCode: ValidationCode,
        }),
        register: sts.enumStruct({
            id: Id,
            genesisHead: HeadData,
            validationCode: ValidationCode,
        }),
        remove_lock: sts.enumStruct({
            para: Id,
        }),
        reserve: sts.unit(),
        schedule_code_upgrade: sts.enumStruct({
            para: Id,
            newCode: ValidationCode,
        }),
        set_current_head: sts.enumStruct({
            para: Id,
            newHead: HeadData,
        }),
        swap: sts.enumStruct({
            id: Id,
            other: Id,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ReferendaCall: sts.Type<ReferendaCall> = sts.closedEnum(() => {
    return {
        cancel: sts.enumStruct({
            index: sts.number(),
        }),
        kill: sts.enumStruct({
            index: sts.number(),
        }),
        nudge_referendum: sts.enumStruct({
            index: sts.number(),
        }),
        one_fewer_deciding: sts.enumStruct({
            track: sts.number(),
        }),
        place_decision_deposit: sts.enumStruct({
            index: sts.number(),
        }),
        refund_decision_deposit: sts.enumStruct({
            index: sts.number(),
        }),
        refund_submission_deposit: sts.enumStruct({
            index: sts.number(),
        }),
        set_metadata: sts.enumStruct({
            index: sts.number(),
            maybeHash: sts.option(() => H256),
        }),
        submit: sts.enumStruct({
            proposalOrigin: OriginCaller,
            proposal: Bounded,
            enactmentMoment: DispatchTime,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ProxyCall: sts.Type<ProxyCall> = sts.closedEnum(() => {
    return {
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
    return {
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
export const ParasSudoWrapperCall: sts.Type<ParasSudoWrapperCall> = sts.closedEnum(() => {
    return {
        sudo_establish_hrmp_channel: sts.enumStruct({
            sender: Id,
            recipient: Id,
            maxCapacity: sts.number(),
            maxMessageSize: sts.number(),
        }),
        sudo_queue_downward_xcm: sts.enumStruct({
            id: Id,
            xcm: VersionedXcm,
        }),
        sudo_schedule_para_cleanup: sts.enumStruct({
            id: Id,
        }),
        sudo_schedule_para_initialize: sts.enumStruct({
            id: Id,
            genesis: ParaGenesisArgs,
        }),
        sudo_schedule_parachain_downgrade: sts.enumStruct({
            id: Id,
        }),
        sudo_schedule_parathread_upgrade: sts.enumStruct({
            id: Id,
        }),
    }
})

export const ParaGenesisArgs: sts.Type<ParaGenesisArgs> = sts.struct(() => {
    return {
        genesisHead: HeadData,
        validationCode: ValidationCode,
        paraKind: sts.boolean(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ParasSlashingCall: sts.Type<ParasSlashingCall> = sts.closedEnum(() => {
    return {
        report_dispute_lost_unsigned: sts.enumStruct({
            disputeProof: V6DisputeProof,
            keyOwnerProof: MembershipProof,
        }),
    }
})

export const MembershipProof: sts.Type<MembershipProof> = sts.struct(() => {
    return {
        session: sts.number(),
        trieNodes: sts.array(() => sts.bytes()),
        validatorCount: sts.number(),
    }
})

export const V6DisputeProof: sts.Type<V6DisputeProof> = sts.struct(() => {
    return {
        timeSlot: V6DisputesTimeSlot,
        kind: V6SlashingOffenceKind,
        validatorIndex: V6ValidatorIndex,
        validatorId: sts.bytes(),
    }
})

export const V6SlashingOffenceKind: sts.Type<V6SlashingOffenceKind> = sts.closedEnum(() => {
    return {
        AgainstValid: sts.unit(),
        ForInvalid: sts.unit(),
    }
})

export const V6DisputesTimeSlot: sts.Type<V6DisputesTimeSlot> = sts.struct(() => {
    return {
        sessionIndex: sts.number(),
        candidateHash: CandidateHash,
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ParasSharedCall: sts.Type<ParasSharedCall> = sts.closedEnum(() => {
    return {}
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ParasDisputesCall: sts.Type<ParasDisputesCall> = sts.closedEnum(() => {
    return {
        force_unfreeze: sts.unit(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ParasCall: sts.Type<ParasCall> = sts.closedEnum(() => {
    return {
        add_trusted_validation_code: sts.enumStruct({
            validationCode: ValidationCode,
        }),
        force_note_new_head: sts.enumStruct({
            para: Id,
            newHead: HeadData,
        }),
        force_queue_action: sts.enumStruct({
            para: Id,
        }),
        force_schedule_code_upgrade: sts.enumStruct({
            para: Id,
            newCode: ValidationCode,
            relayParentNumber: sts.number(),
        }),
        force_set_current_code: sts.enumStruct({
            para: Id,
            newCode: ValidationCode,
        }),
        force_set_current_head: sts.enumStruct({
            para: Id,
            newHead: HeadData,
        }),
        force_set_most_recent_context: sts.enumStruct({
            para: Id,
            context: sts.number(),
        }),
        include_pvf_check_statement: sts.enumStruct({
            stmt: V6PvfCheckStatement,
            signature: sts.bytes(),
        }),
        poke_unused_validation_code: sts.enumStruct({
            validationCodeHash: ValidationCodeHash,
        }),
    }
})

export const V6PvfCheckStatement: sts.Type<V6PvfCheckStatement> = sts.struct(() => {
    return {
        accept: sts.boolean(),
        subject: ValidationCodeHash,
        sessionIndex: sts.number(),
        validatorIndex: V6ValidatorIndex,
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ParaInherentCall: sts.Type<ParaInherentCall> = sts.closedEnum(() => {
    return {
        enter: sts.enumStruct({
            data: V6InherentData,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ParaInclusionCall: sts.Type<ParaInclusionCall> = sts.closedEnum(() => {
    return {}
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const NominationPoolsCall: sts.Type<NominationPoolsCall> = sts.closedEnum(() => {
    return {
        bond: sts.enumStruct({
            poolId: sts.number(),
            amount: BondValue,
        }),
        calculate_early_bird_bonus: sts.enumStruct({
            poolCount: sts.number(),
        }),
        capture_early_bird_bonus_shares: sts.enumStruct({
            poolId: sts.number(),
            accountCount: sts.number(),
        }),
        chill: sts.enumStruct({
            poolId: sts.number(),
        }),
        create: sts.enumStruct({
            tokenId: sts.bigint(),
            deposit: sts.bigint(),
            capacity: sts.bigint(),
            duration: sts.number(),
            name: BoundedVec,
        }),
        destroy: sts.enumStruct({
            poolId: sts.number(),
        }),
        mutate: sts.enumStruct({
            poolId: sts.number(),
            mutation: PoolMutation,
        }),
        nominate: sts.enumStruct({
            poolId: sts.number(),
            validators: sts.array(() => AccountId32),
        }),
        pay_early_bird_bonus: sts.enumStruct({
            poolId: sts.number(),
            paymentId: sts.number(),
            accountCount: sts.number(),
        }),
        payout_rewards: sts.enumStruct({
            validatorStash: AccountId32,
            era: sts.number(),
        }),
        pool_withdraw_unbonded: sts.enumStruct({
            poolId: sts.number(),
            numSlashingSpans: sts.number(),
        }),
        process_payouts: sts.enumStruct({
            poolCount: sts.number(),
        }),
        set_configs: sts.enumStruct({
            minJoinBond: Type_441,
            minCreateBond: Type_441,
            globalMaxCommission: Type_442,
            requiredPayoutCount: Type_442,
        }),
        set_staking_info: sts.enumStruct({
            info: StakingInfo,
        }),
        unbond: sts.enumStruct({
            poolId: sts.number(),
            memberAccount: MultiAddress,
            unbondingPoints: sts.bigint(),
        }),
        unbond_deposit: sts.enumStruct({
            poolId: sts.number(),
        }),
        unlock_early_bird_bonus: sts.unit(),
        withdraw_deposit: sts.enumStruct({
            poolId: sts.number(),
        }),
        withdraw_free_balance: sts.enumStruct({
            poolId: sts.number(),
            destination: MultiAddress,
            amount: sts.bigint(),
        }),
        withdraw_unbonded: sts.enumStruct({
            poolId: sts.number(),
            memberAccount: MultiAddress,
            numSlashingSpans: sts.number(),
        }),
    }
})

export const Type_442: sts.Type<Type_442> = sts.closedEnum(() => {
    return {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: Perbill,
    }
})

export const Type_441: sts.Type<Type_441> = sts.closedEnum(() => {
    return {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: sts.bigint(),
    }
})

export const BondValue: sts.Type<BondValue> = sts.closedEnum(() => {
    return {
        Amount: sts.bigint(),
        Fill: sts.unit(),
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
            recipients: sts.array(() => Type_597),
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
            ethereumSignature: sts.bytes(),
            ethereumAddress: H160,
            collectionCount: sts.number(),
        }),
        claim_tokens: sts.enumStruct({
            destination: AccountId32,
            ethereumSignature: sts.bytes(),
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

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const MigrationsCall: sts.Type<MigrationsCall> = sts.closedEnum(() => {
    return {
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
    return {
        Active: ActiveCursor,
        Stuck: sts.unit(),
    }
})

export const ActiveCursor: sts.Type<ActiveCursor> = sts.struct(() => {
    return {
        index: sts.number(),
        innerCursor: sts.option(() => sts.bytes()),
        startedAt: sts.number(),
    }
})

export const HistoricCleanupSelector: sts.Type<HistoricCleanupSelector> = sts.closedEnum(() => {
    return {
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
    return {
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
export const MarketplaceCall: sts.Type<MarketplaceCall> = sts.closedEnum(() => {
    return {
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
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const InitializerCall: sts.Type<InitializerCall> = sts.closedEnum(() => {
    return {
        force_approve: sts.enumStruct({
            upTo: sts.number(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ImOnlineCall: sts.Type<ImOnlineCall> = sts.closedEnum(() => {
    return {
        heartbeat: sts.enumStruct({
            heartbeat: Heartbeat,
            signature: sts.bytes(),
        }),
    }
})

export const Heartbeat: sts.Type<Heartbeat> = sts.struct(() => {
    return {
        blockNumber: sts.number(),
        sessionIndex: sts.number(),
        authorityIndex: sts.number(),
        validatorsLen: sts.number(),
    }
})

/**
 * Identity pallet declaration.
 */
export const IdentityCall: sts.Type<IdentityCall> = sts.closedEnum(() => {
    return {
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
    return {
        Ecdsa: sts.bytes(),
        Ed25519: sts.bytes(),
        Sr25519: Signature,
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const HrmpCall: sts.Type<HrmpCall> = sts.closedEnum(() => {
    return {
        establish_system_channel: sts.enumStruct({
            sender: Id,
            recipient: Id,
        }),
        force_clean_hrmp: sts.enumStruct({
            para: Id,
            numInbound: sts.number(),
            numOutbound: sts.number(),
        }),
        force_open_hrmp_channel: sts.enumStruct({
            sender: Id,
            recipient: Id,
            maxCapacity: sts.number(),
            maxMessageSize: sts.number(),
        }),
        force_process_hrmp_close: sts.enumStruct({
            channels: sts.number(),
        }),
        force_process_hrmp_open: sts.enumStruct({
            channels: sts.number(),
        }),
        hrmp_accept_open_channel: sts.enumStruct({
            sender: Id,
        }),
        hrmp_cancel_open_request: sts.enumStruct({
            channelId: HrmpChannelId,
            openRequests: sts.number(),
        }),
        hrmp_close_channel: sts.enumStruct({
            channelId: HrmpChannelId,
        }),
        hrmp_init_open_channel: sts.enumStruct({
            recipient: Id,
            proposedMaxCapacity: sts.number(),
            proposedMaxMessageSize: sts.number(),
        }),
        poke_channel_deposits: sts.enumStruct({
            sender: Id,
            recipient: Id,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const GrandpaCall: sts.Type<GrandpaCall> = sts.closedEnum(() => {
    return {
        note_stalled: sts.enumStruct({
            delay: sts.number(),
            bestFinalizedBlockNumber: sts.number(),
        }),
        report_equivocation: sts.enumStruct({
            equivocationProof: Type_423,
            keyOwnerProof: MembershipProof,
        }),
        report_equivocation_unsigned: sts.enumStruct({
            equivocationProof: Type_423,
            keyOwnerProof: MembershipProof,
        }),
    }
})

export const Type_423: sts.Type<Type_423> = sts.struct(() => {
    return {
        setId: sts.bigint(),
        equivocation: Equivocation,
    }
})

export const Equivocation: sts.Type<Equivocation> = sts.closedEnum(() => {
    return {
        Precommit: Type_430,
        Prevote: Type_425,
    }
})

export const Type_425: sts.Type<Type_425> = sts.struct(() => {
    return {
        roundNumber: sts.bigint(),
        identity: Public,
        first: sts.tuple(() => [Prevote, sts.bytes()]),
        second: sts.tuple(() => [Prevote, sts.bytes()]),
    }
})

export const Prevote: sts.Type<Prevote> = sts.struct(() => {
    return {
        targetHash: H256,
        targetNumber: sts.number(),
    }
})

export const Type_430: sts.Type<Type_430> = sts.struct(() => {
    return {
        roundNumber: sts.bigint(),
        identity: Public,
        first: sts.tuple(() => [Precommit, sts.bytes()]),
        second: sts.tuple(() => [Precommit, sts.bytes()]),
    }
})

export const Precommit: sts.Type<Precommit> = sts.struct(() => {
    return {
        targetHash: H256,
        targetNumber: sts.number(),
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
export const FellowshipReferendaCall: sts.Type<FellowshipReferendaCall> = sts.closedEnum(() => {
    return {
        cancel: sts.enumStruct({
            index: sts.number(),
        }),
        kill: sts.enumStruct({
            index: sts.number(),
        }),
        nudge_referendum: sts.enumStruct({
            index: sts.number(),
        }),
        one_fewer_deciding: sts.enumStruct({
            track: sts.number(),
        }),
        place_decision_deposit: sts.enumStruct({
            index: sts.number(),
        }),
        refund_decision_deposit: sts.enumStruct({
            index: sts.number(),
        }),
        refund_submission_deposit: sts.enumStruct({
            index: sts.number(),
        }),
        set_metadata: sts.enumStruct({
            index: sts.number(),
            maybeHash: sts.option(() => H256),
        }),
        submit: sts.enumStruct({
            proposalOrigin: OriginCaller,
            proposal: Bounded,
            enactmentMoment: DispatchTime,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const FellowshipCollectiveCall: sts.Type<FellowshipCollectiveCall> = sts.closedEnum(() => {
    return {
        add_member: sts.enumStruct({
            who: MultiAddress,
        }),
        cleanup_poll: sts.enumStruct({
            pollIndex: sts.number(),
            max: sts.number(),
        }),
        demote_member: sts.enumStruct({
            who: MultiAddress,
        }),
        exchange_member: sts.enumStruct({
            who: MultiAddress,
            newWho: MultiAddress,
        }),
        promote_member: sts.enumStruct({
            who: MultiAddress,
        }),
        remove_member: sts.enumStruct({
            who: MultiAddress,
            minRank: sts.number(),
        }),
        vote: sts.enumStruct({
            poll: sts.number(),
            aye: sts.boolean(),
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
export const ElectionProviderMultiPhaseCall: sts.Type<ElectionProviderMultiPhaseCall> = sts.closedEnum(() => {
    return {
        governance_fallback: sts.enumStruct({
            maybeMaxVoters: sts.option(() => sts.number()),
            maybeMaxTargets: sts.option(() => sts.number()),
        }),
        set_emergency_election_result: sts.enumStruct({
            supports: sts.array(() => sts.tuple(() => [AccountId32, Support])),
        }),
        set_minimum_untrusted_score: sts.enumStruct({
            maybeNextScore: sts.option(() => ElectionScore),
        }),
        submit: sts.enumStruct({
            rawSolution: RawSolution,
        }),
        submit_unsigned: sts.enumStruct({
            rawSolution: RawSolution,
            witness: SolutionOrSnapshotSize,
        }),
    }
})

export const SolutionOrSnapshotSize: sts.Type<SolutionOrSnapshotSize> = sts.struct(() => {
    return {
        voters: sts.number(),
        targets: sts.number(),
    }
})

export const RawSolution: sts.Type<RawSolution> = sts.struct(() => {
    return {
        solution: NposSolution16,
        score: ElectionScore,
        round: sts.number(),
    }
})

export const NposSolution16: sts.Type<NposSolution16> = sts.struct(() => {
    return {
        votes1: sts.array(() => sts.tuple(() => [sts.number(), sts.number()])),
        votes2: sts.array(() =>
            sts.tuple(() => [sts.number(), sts.tuple(() => [sts.number(), sts.number()]), sts.number()])
        ),
        votes3: sts.array(() =>
            sts.tuple(() => [
                sts.number(),
                sts.array(() => sts.tuple(() => [sts.number(), sts.number()])),
                sts.number(),
            ])
        ),
        votes4: sts.array(() =>
            sts.tuple(() => [
                sts.number(),
                sts.array(() => sts.tuple(() => [sts.number(), sts.number()])),
                sts.number(),
            ])
        ),
        votes5: sts.array(() =>
            sts.tuple(() => [
                sts.number(),
                sts.array(() => sts.tuple(() => [sts.number(), sts.number()])),
                sts.number(),
            ])
        ),
        votes6: sts.array(() =>
            sts.tuple(() => [
                sts.number(),
                sts.array(() => sts.tuple(() => [sts.number(), sts.number()])),
                sts.number(),
            ])
        ),
        votes7: sts.array(() =>
            sts.tuple(() => [
                sts.number(),
                sts.array(() => sts.tuple(() => [sts.number(), sts.number()])),
                sts.number(),
            ])
        ),
        votes8: sts.array(() =>
            sts.tuple(() => [
                sts.number(),
                sts.array(() => sts.tuple(() => [sts.number(), sts.number()])),
                sts.number(),
            ])
        ),
        votes9: sts.array(() =>
            sts.tuple(() => [
                sts.number(),
                sts.array(() => sts.tuple(() => [sts.number(), sts.number()])),
                sts.number(),
            ])
        ),
        votes10: sts.array(() =>
            sts.tuple(() => [
                sts.number(),
                sts.array(() => sts.tuple(() => [sts.number(), sts.number()])),
                sts.number(),
            ])
        ),
        votes11: sts.array(() =>
            sts.tuple(() => [
                sts.number(),
                sts.array(() => sts.tuple(() => [sts.number(), sts.number()])),
                sts.number(),
            ])
        ),
        votes12: sts.array(() =>
            sts.tuple(() => [
                sts.number(),
                sts.array(() => sts.tuple(() => [sts.number(), sts.number()])),
                sts.number(),
            ])
        ),
        votes13: sts.array(() =>
            sts.tuple(() => [
                sts.number(),
                sts.array(() => sts.tuple(() => [sts.number(), sts.number()])),
                sts.number(),
            ])
        ),
        votes14: sts.array(() =>
            sts.tuple(() => [
                sts.number(),
                sts.array(() => sts.tuple(() => [sts.number(), sts.number()])),
                sts.number(),
            ])
        ),
        votes15: sts.array(() =>
            sts.tuple(() => [
                sts.number(),
                sts.array(() => sts.tuple(() => [sts.number(), sts.number()])),
                sts.number(),
            ])
        ),
        votes16: sts.array(() =>
            sts.tuple(() => [
                sts.number(),
                sts.array(() => sts.tuple(() => [sts.number(), sts.number()])),
                sts.number(),
            ])
        ),
    }
})

export const Support: sts.Type<Support> = sts.struct(() => {
    return {
        total: sts.bigint(),
        voters: sts.array(() => sts.tuple(() => [AccountId32, sts.bigint()])),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const CrowdloanCall: sts.Type<CrowdloanCall> = sts.closedEnum(() => {
    return {
        add_memo: sts.enumStruct({
            index: Id,
            memo: sts.bytes(),
        }),
        contribute: sts.enumStruct({
            index: sts.number(),
            value: sts.bigint(),
            signature: sts.option(() => MultiSignature),
        }),
        contribute_all: sts.enumStruct({
            index: sts.number(),
            signature: sts.option(() => MultiSignature),
        }),
        create: sts.enumStruct({
            index: sts.number(),
            cap: sts.bigint(),
            firstPeriod: sts.number(),
            lastPeriod: sts.number(),
            end: sts.number(),
            verifier: sts.option(() => MultiSigner),
        }),
        dissolve: sts.enumStruct({
            index: sts.number(),
        }),
        edit: sts.enumStruct({
            index: sts.number(),
            cap: sts.bigint(),
            firstPeriod: sts.number(),
            lastPeriod: sts.number(),
            end: sts.number(),
            verifier: sts.option(() => MultiSigner),
        }),
        poke: sts.enumStruct({
            index: Id,
        }),
        refund: sts.enumStruct({
            index: sts.number(),
        }),
        withdraw: sts.enumStruct({
            who: AccountId32,
            index: sts.number(),
        }),
    }
})

export const MultiSigner: sts.Type<MultiSigner> = sts.closedEnum(() => {
    return {
        Ecdsa: sts.bytes(),
        Ed25519: sts.bytes(),
        Sr25519: sts.bytes(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ConvictionVotingCall: sts.Type<ConvictionVotingCall> = sts.closedEnum(() => {
    return {
        delegate: sts.enumStruct({
            class: sts.number(),
            to: MultiAddress,
            conviction: Conviction,
            balance: sts.bigint(),
        }),
        remove_other_vote: sts.enumStruct({
            target: MultiAddress,
            class: sts.number(),
            index: sts.number(),
        }),
        remove_vote: sts.enumStruct({
            class: sts.option(() => sts.number()),
            index: sts.number(),
        }),
        undelegate: sts.enumStruct({
            class: sts.number(),
        }),
        unlock: sts.enumStruct({
            class: sts.number(),
            target: MultiAddress,
        }),
        vote: sts.enumStruct({
            pollIndex: sts.number(),
            vote: AccountVote,
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
export const ConfigurationCall: sts.Type<ConfigurationCall> = sts.closedEnum(() => {
    return {
        set_approval_voting_params: sts.enumStruct({
            new: ApprovalVotingParams,
        }),
        set_async_backing_params: sts.enumStruct({
            new: V6AsyncBackingParams,
        }),
        set_bypass_consistency_check: sts.enumStruct({
            new: sts.boolean(),
        }),
        set_code_retention_period: sts.enumStruct({
            new: sts.number(),
        }),
        set_coretime_cores: sts.enumStruct({
            new: sts.number(),
        }),
        set_dispute_period: sts.enumStruct({
            new: sts.number(),
        }),
        set_dispute_post_conclusion_acceptance_period: sts.enumStruct({
            new: sts.number(),
        }),
        set_executor_params: sts.enumStruct({
            new: sts.array(() => V6ExecutorParam),
        }),
        set_group_rotation_frequency: sts.enumStruct({
            new: sts.number(),
        }),
        set_hrmp_channel_max_capacity: sts.enumStruct({
            new: sts.number(),
        }),
        set_hrmp_channel_max_message_size: sts.enumStruct({
            new: sts.number(),
        }),
        set_hrmp_channel_max_total_size: sts.enumStruct({
            new: sts.number(),
        }),
        set_hrmp_max_message_num_per_candidate: sts.enumStruct({
            new: sts.number(),
        }),
        set_hrmp_max_parachain_inbound_channels: sts.enumStruct({
            new: sts.number(),
        }),
        set_hrmp_max_parachain_outbound_channels: sts.enumStruct({
            new: sts.number(),
        }),
        set_hrmp_open_request_ttl: sts.enumStruct({
            new: sts.number(),
        }),
        set_hrmp_recipient_deposit: sts.enumStruct({
            new: sts.bigint(),
        }),
        set_hrmp_sender_deposit: sts.enumStruct({
            new: sts.bigint(),
        }),
        set_max_availability_timeouts: sts.enumStruct({
            new: sts.number(),
        }),
        set_max_code_size: sts.enumStruct({
            new: sts.number(),
        }),
        set_max_downward_message_size: sts.enumStruct({
            new: sts.number(),
        }),
        set_max_head_data_size: sts.enumStruct({
            new: sts.number(),
        }),
        set_max_pov_size: sts.enumStruct({
            new: sts.number(),
        }),
        set_max_upward_message_num_per_candidate: sts.enumStruct({
            new: sts.number(),
        }),
        set_max_upward_message_size: sts.enumStruct({
            new: sts.number(),
        }),
        set_max_upward_queue_count: sts.enumStruct({
            new: sts.number(),
        }),
        set_max_upward_queue_size: sts.enumStruct({
            new: sts.number(),
        }),
        set_max_validators: sts.enumStruct({
            new: sts.option(() => sts.number()),
        }),
        set_max_validators_per_core: sts.enumStruct({
            new: sts.option(() => sts.number()),
        }),
        set_minimum_backing_votes: sts.enumStruct({
            new: sts.number(),
        }),
        set_minimum_validation_upgrade_delay: sts.enumStruct({
            new: sts.number(),
        }),
        set_n_delay_tranches: sts.enumStruct({
            new: sts.number(),
        }),
        set_needed_approvals: sts.enumStruct({
            new: sts.number(),
        }),
        set_no_show_slots: sts.enumStruct({
            new: sts.number(),
        }),
        set_node_feature: sts.enumStruct({
            index: sts.number(),
            value: sts.boolean(),
        }),
        set_on_demand_base_fee: sts.enumStruct({
            new: sts.bigint(),
        }),
        set_on_demand_fee_variability: sts.enumStruct({
            new: Perbill,
        }),
        set_on_demand_queue_max_size: sts.enumStruct({
            new: sts.number(),
        }),
        set_on_demand_target_queue_utilization: sts.enumStruct({
            new: Perbill,
        }),
        set_on_demand_ttl: sts.enumStruct({
            new: sts.number(),
        }),
        set_paras_availability_period: sts.enumStruct({
            new: sts.number(),
        }),
        set_pvf_voting_ttl: sts.enumStruct({
            new: sts.number(),
        }),
        set_relay_vrf_modulo_samples: sts.enumStruct({
            new: sts.number(),
        }),
        set_scheduler_params: sts.enumStruct({
            new: SchedulerParams,
        }),
        set_scheduling_lookahead: sts.enumStruct({
            new: sts.number(),
        }),
        set_validation_upgrade_cooldown: sts.enumStruct({
            new: sts.number(),
        }),
        set_validation_upgrade_delay: sts.enumStruct({
            new: sts.number(),
        }),
        set_zeroth_delay_tranche_width: sts.enumStruct({
            new: sts.number(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const BeefyCall: sts.Type<BeefyCall> = sts.closedEnum(() => {
    return {
        report_equivocation: sts.enumStruct({
            equivocationProof: Type_644,
            keyOwnerProof: MembershipProof,
        }),
        report_equivocation_unsigned: sts.enumStruct({
            equivocationProof: Type_644,
            keyOwnerProof: MembershipProof,
        }),
        set_new_genesis: sts.enumStruct({
            delayInBlocks: sts.number(),
        }),
    }
})

export const Type_644: sts.Type<Type_644> = sts.struct(() => {
    return {
        first: VoteMessage,
        second: VoteMessage,
    }
})

export const VoteMessage: sts.Type<VoteMessage> = sts.struct(() => {
    return {
        commitment: Commitment,
        id: sts.bytes(),
        signature: sts.bytes(),
    }
})

export const Commitment: sts.Type<Commitment> = sts.struct(() => {
    return {
        payload: sts.array(() => sts.tuple(() => [sts.bytes(), sts.bytes()])),
        blockNumber: sts.number(),
        validatorSetId: sts.bigint(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const BalancesCall: sts.Type<BalancesCall> = sts.closedEnum(() => {
    return {
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
    return {
        Decrease: sts.unit(),
        Increase: sts.unit(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const BabeCall: sts.Type<BabeCall> = sts.closedEnum(() => {
    return {
        plan_config_change: sts.enumStruct({
            config: NextConfigDescriptor,
        }),
        report_equivocation: sts.enumStruct({
            equivocationProof: EquivocationProof,
            keyOwnerProof: MembershipProof,
        }),
        report_equivocation_unsigned: sts.enumStruct({
            equivocationProof: EquivocationProof,
            keyOwnerProof: MembershipProof,
        }),
    }
})

export const EquivocationProof: sts.Type<EquivocationProof> = sts.struct(() => {
    return {
        offender: sts.bytes(),
        slot: Slot,
        firstHeader: Header,
        secondHeader: Header,
    }
})

export const NextConfigDescriptor: sts.Type<NextConfigDescriptor> = sts.closedEnum(() => {
    return {
        V1: sts.enumStruct({
            c: sts.tuple(() => [sts.bigint(), sts.bigint()]),
            allowedSlots: AllowedSlots,
        }),
    }
})

export const AllowedSlots: sts.Type<AllowedSlots> = sts.closedEnum(() => {
    return {
        PrimaryAndSecondaryPlainSlots: sts.unit(),
        PrimaryAndSecondaryVRFSlots: sts.unit(),
        PrimarySlots: sts.unit(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const AuctionsCall: sts.Type<AuctionsCall> = sts.closedEnum(() => {
    return {
        bid: sts.enumStruct({
            para: sts.number(),
            auctionIndex: sts.number(),
            firstSlot: sts.number(),
            lastSlot: sts.number(),
            amount: sts.bigint(),
        }),
        cancel_auction: sts.unit(),
        new_auction: sts.enumStruct({
            duration: sts.number(),
            leasePeriodIndex: sts.number(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const AssignedSlotsCall: sts.Type<AssignedSlotsCall> = sts.closedEnum(() => {
    return {
        assign_perm_parachain_slot: sts.enumStruct({
            id: Id,
        }),
        assign_temp_parachain_slot: sts.enumStruct({
            id: Id,
            leasePeriodStart: SlotLeasePeriodStart,
        }),
        set_max_permanent_slots: sts.enumStruct({
            slots: sts.number(),
        }),
        set_max_temporary_slots: sts.enumStruct({
            slots: sts.number(),
        }),
        unassign_parachain_slot: sts.enumStruct({
            id: Id,
        }),
    }
})

export const SlotLeasePeriodStart: sts.Type<SlotLeasePeriodStart> = sts.closedEnum(() => {
    return {
        Current: sts.unit(),
        Next: sts.unit(),
    }
})

export const VersionedLocation: sts.Type<VersionedLocation> = sts.closedEnum(() => {
    return {
        V2: V2MultiLocation,
        V3: V3MultiLocation,
        V4: V4Location,
    }
})

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

export const V4Asset: sts.Type<V4Asset> = sts.struct(() => {
    return {
        id: V4AssetId,
        fun: V4Fungibility,
    }
})

export const V4Fungibility: sts.Type<V4Fungibility> = sts.closedEnum(() => {
    return {
        Fungible: sts.bigint(),
        NonFungible: V4AssetInstance,
    }
})

export const V4AssetInstance: sts.Type<V4AssetInstance> = sts.closedEnum(() => {
    return {
        Array16: sts.bytes(),
        Array32: sts.bytes(),
        Array4: sts.bytes(),
        Array8: sts.bytes(),
        Index: sts.bigint(),
        Undefined: sts.unit(),
    }
})

export const VersionedAssets: sts.Type<VersionedAssets> = sts.closedEnum(() => {
    return {
        V2: sts.array(() => V2MultiAsset),
        V3: sts.array(() => V3MultiAsset),
        V4: sts.array(() => V4Asset),
    }
})

export const V4Response: sts.Type<V4Response> = sts.closedEnum(() => {
    return {
        Assets: sts.array(() => V4Asset),
        DispatchResult: V3MaybeErrorCode,
        ExecutionResult: sts.option(() => sts.tuple(() => [sts.number(), V3Error])),
        Null: sts.unit(),
        PalletsInfo: sts.array(() => V4PalletInfo),
        Version: sts.number(),
    }
})

export const V4PalletInfo: sts.Type<V4PalletInfo> = sts.struct(() => {
    return {
        index: sts.number(),
        name: sts.bytes(),
        moduleName: sts.bytes(),
        major: sts.number(),
        minor: sts.number(),
        patch: sts.number(),
    }
})

export const V4Instruction: sts.Type<V4Instruction> = sts.closedEnum(() => {
    return {
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

export const V4Location: sts.Type<V4Location> = sts.struct(() => {
    return {
        parents: sts.number(),
        interior: V4Junctions,
    }
})

export const V4Outcome: sts.Type<V4Outcome> = sts.closedEnum(() => {
    return {
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

export const HrmpChannelId: sts.Type<HrmpChannelId> = sts.struct(() => {
    return {
        sender: Id,
        recipient: Id,
    }
})

export const Id = sts.number()

export const RewardDestination: sts.Type<RewardDestination> = sts.closedEnum(() => {
    return {
        Account: AccountId32,
        Controller: sts.unit(),
        None: sts.unit(),
        Staked: sts.unit(),
        Stash: sts.unit(),
    }
})

export const Listing: sts.Type<Listing> = sts.struct(() => {
    return {
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
    return {
        Auction: AuctionState,
        FixedPrice: sts.enumStruct({
            amountFilled: sts.bigint(),
        }),
        Offer: OfferState,
    }
})

export const OfferState: sts.Type<OfferState> = sts.struct(() => {
    return {
        counterOfferCount: sts.number(),
    }
})

export const AuctionState: sts.Type<AuctionState> = sts.struct(() => {
    return {
        highBid: sts.option(() => Bid),
    }
})

export const FeeSide: sts.Type<FeeSide> = sts.closedEnum(() => {
    return {
        Make: sts.unit(),
        NoFee: sts.unit(),
        Take: sts.unit(),
    }
})

export const H256 = sts.bytes()

export const DispatchRuleKind: sts.Type<DispatchRuleKind> = sts.closedEnum(() => {
    return {
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

export const DefaultTankMutation: sts.Type<DefaultTankMutation> = sts.struct(() => {
    return {
        userAccountManagement: Type_288,
        coveragePolicy: sts.option(() => CoveragePolicy),
        accountRules: sts.option(() => sts.array(() => AccountRuleDescriptor)),
    }
})

export const Type_288: sts.Type<Type_288> = sts.closedEnum(() => {
    return {
        NoMutation: sts.unit(),
        SomeMutation: sts.option(() => UserAccountManagement),
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
        deposit: sts.option(() => Deposit),
    }
})

export const Approval: sts.Type<Approval> = sts.struct(() => {
    return {
        amount: sts.bigint(),
        expiration: sts.option(() => sts.number()),
    }
})

export const AccountId32 = sts.bytes()

export const Token: sts.Type<Token> = sts.struct(() => {
    return {
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
    return {
        decimalCount: sts.number(),
        name: BoundedString,
        symbol: sts.bytes(),
        foreign: sts.option(() => DefaultForeignTokenMetadata),
    }
})

export const DefaultForeignTokenMetadata: sts.Type<DefaultForeignTokenMetadata> = sts.struct(() => {
    return {
        location: sts.option(() => V4Location),
        unitsPerSecond: sts.option(() => sts.bigint()),
    }
})

export const AmbiguousDeposit: sts.Type<AmbiguousDeposit> = sts.struct(() => {
    return {
        depositor: sts.option(() => AccountId32),
        amount: sts.bigint(),
    }
})

export const Collection: sts.Type<Collection> = sts.struct(() => {
    return {
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
        forceCollapsingSupply: sts.boolean(),
    }
})

export const DefaultTokenMutation: sts.Type<DefaultTokenMutation> = sts.struct(() => {
    return {
        behavior: Type_218,
        listingForbidden: Type_221,
        anyoneCanInfuse: Type_221,
        name: Type_222,
    }
})

export const Type_222: sts.Type<Type_222> = sts.closedEnum(() => {
    return {
        NoMutation: sts.unit(),
        SomeMutation: BoundedString,
    }
})

export const Type_221: sts.Type<Type_221> = sts.closedEnum(() => {
    return {
        NoMutation: sts.unit(),
        SomeMutation: sts.boolean(),
    }
})

export const Type_218: sts.Type<Type_218> = sts.closedEnum(() => {
    return {
        NoMutation: sts.unit(),
        SomeMutation: sts.option(() => TokenMarketBehavior),
    }
})
