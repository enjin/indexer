import { sts } from '@enjin/indexer/types/generated/support'

export type Bytes = string // HexBytes
export type H160 = Bytes // HexBytes
export type H256 = Bytes // HexBytes
export type AccountId32 = Bytes // HexBytes
export type Percent = number // percent
export type Perbill = number // per billion
export type BitFlags = bigint
export type ExtraFlags = bigint

export type Account_EVM = {
    __kind: 'EVM'
    value: H160
}

export type Account_Substrate = {
    __kind: 'Substrate'
    value: AccountId32
}

export type Account = Account_EVM | Account_Substrate

type MultiAddress_Address20 = {
    __kind: 'Address20'
    value: H160
}
type MultiAddress_Address32 = {
    __kind: 'Address32'
    value: H256
}
type MultiAddress_Id = {
    __kind: 'Id'
    value: AccountId32
}
type MultiAddress_Index = {
    __kind: 'Index'
    value?: bigint
}

type MultiAddress_Raw = {
    __kind: 'Raw'
    value: Bytes // Bytes
}

export type MultiAddress =
    | MultiAddress_Address20
    | MultiAddress_Address32
    | MultiAddress_Id
    | MultiAddress_Raw
    | MultiAddress_Index // TODO: Need to check how index is parsed

type Data_BlakeTwo256 = {
    __kind: 'BlakeTwo256'
    value: Bytes
}

type Data_Keccak256 = {
    __kind: 'Keccak256'
    value: Bytes
}

type Data_None = {
    __kind: 'None'
}

type Data_Raw = {
    __kind:
        | 'Raw0'
        | 'Raw1'
        | 'Raw2'
        | 'Raw3'
        | 'Raw4'
        | 'Raw5'
        | 'Raw6'
        | 'Raw7'
        | 'Raw8'
        | 'Raw9'
        | 'Raw10'
        | 'Raw11'
        | 'Raw12'
        | 'Raw13'
        | 'Raw14'
        | 'Raw15'
        | 'Raw16'
        | 'Raw17'
        | 'Raw18'
        | 'Raw19'
        | 'Raw20'
        | 'Raw21'
        | 'Raw22'
        | 'Raw23'
        | 'Raw24'
        | 'Raw25'
        | 'Raw26'
        | 'Raw27'
        | 'Raw28'
        | 'Raw29'
        | 'Raw30'
        | 'Raw31'
        | 'Raw32'
    value: Bytes
}

type Data_Sha256 = {
    __kind: 'Sha256'
    value: Bytes
}

type Data_ShaThree256 = {
    __kind: 'ShaThree256'
    value: Bytes
}

export type Data = Data_BlakeTwo256 | Data_Keccak256 | Data_None | Data_Raw | Data_Sha256 | Data_ShaThree256

type Judgement_Erroneous = {
    __kind: 'Erroneous'
}

type Judgement_FeePaid = {
    __kind: 'FeePaid'
}

type Judgement_KnownGood = {
    __kind: 'KnownGood'
}

type Judgement_LowQuality = {
    __kind: 'LowQuality'
}

type Judgement_OutOfDate = {
    __kind: 'OutOfDate'
}

type Judgement_Reasonable = {
    __kind: 'Reasonable'
}

type Judgement_Unknown = {
    __kind: 'Unknown'
}

export type Judgement =
    | Judgement_Erroneous
    | Judgement_FeePaid
    | Judgement_KnownGood
    | Judgement_LowQuality
    | Judgement_OutOfDate
    | Judgement_Reasonable
    | Judgement_Unknown

type IndividualExposure = {
    who: AccountId32
    value: bigint
}

export type Exposure = {
    total: bigint
    own: bigint
    others: IndividualExposure[]
}

type TokenFilter_All = {
    __kind: 'All'
}

type TokenFilter_BlockList = {
    __kind: 'BlockList'
    value: bigint[]
}

type TokenFilter_Whitelist = {
    __kind: 'Whitelist'
    value: bigint[]
}

export type TokenFilter = TokenFilter_All | TokenFilter_BlockList | TokenFilter_Whitelist

export type LiquidityAccountConfig = {
    tokenFilter: TokenFilter
}

export type Offer = {
    account: AccountId32
    total: bigint
    rate: bigint | number // Changed from bigint to number on v120
    maxPoolDuration?: number // Removed on v101
    // eslint-disable-next-line @typescript-eslint/no-duplicate-type-constituents
    minAverageCommission?: Percent | Perbill // Changed from Percent to Perbill on v101, removed on v120
    minAverageRewardRate?: Perbill | bigint // Added on v120, changed from Perbill to bigint on v1021
    deposit?: bigint // Added on v120
    tokenFilter?: TokenFilter // Added on v1023
}

export type ValidatorPrefs = {
    commission: number
    blocked: boolean
}

export type UnlockChunk = {
    value: bigint
    era: number
}

export type AccountData = {
    free: bigint
    reserved: bigint
    miscFrozen?: bigint // Removed on v104
    feeFrozen?: bigint // Removed on v104
    frozen?: bigint // Added on v104
    flags?: ExtraFlags // Added on v104
}

export type Bid = {
    bidder: AccountId32
    price: bigint
}

type CounterOfferResponse_Accept = {
    __kind: 'Accept'
}

type CounterOfferResponse_Counter = {
    __kind: 'Counter'
    value: bigint
}

type CounterOfferResponse_Reject = {
    __kind: 'Reject'
}

export type CounterOfferResponse = CounterOfferResponse_Accept | CounterOfferResponse_Counter | CounterOfferResponse_Reject

export type Deposit = {
    depositor: AccountId32
    amount: bigint
}

export type CounterOffer = {
    accountId?: AccountId32 // Removed on v1011
    price?: bigint // Removed on v1011
    sellerPrice?: bigint // Added on v1011
    buyerPrice?: bigint // Added on v1011
    deposit?: Deposit // Added on v1011
}

export type AssetId = {
    collectionId: bigint
    tokenId: bigint
}

export type FeeSide = FeeSide_Make | FeeSide_NoFee | FeeSide_Take

export type FeeSide_Make = {
    __kind: 'Make'
}

export type FeeSide_NoFee = {
    __kind: 'NoFee'
}

export type FeeSide_Take = {
    __kind: 'Take'
}

export interface AuctionData {
    startBlock?: number // Removed on v1050
    endBlock: number
}

export interface ListingData_Auction {
    __kind: 'Auction'
    value: AuctionData
}

export interface ListingData_FixedPrice {
    __kind: 'FixedPrice'
}

export interface ListingData_Offer {
    __kind: 'Offer'
    expiration?: number
}

export type ListingData = ListingData_Auction | ListingData_FixedPrice | ListingData_Offer

export interface ListingState_Auction {
    __kind: 'Auction'
    value: AuctionState
}

export interface AuctionState {
    highBid?: Bid | undefined
}

export interface ListingState_FixedPrice {
    __kind: 'FixedPrice'
    amountFilled: bigint
}

export interface ListingState_Offer {
    __kind: 'Offer' // Added on v1010
    counterOfferCount?: number // Added on v1010
}

export type ListingState = ListingState_Auction | ListingState_FixedPrice | ListingState_Offer

export type Listing = {
    seller?: AccountId32 // Removed on v1010
    creator?: AccountId32 // Added on v1010
    makeAssetId: AssetId
    takeAssetId: AssetId
    amount: bigint
    price: bigint
    minTakeValue?: bigint // Removed on v1010
    minReceived?: bigint // Added on v1010
    feeSide: FeeSide
    creationBlock: number
    startBlock?: number // Added on v1050
    whitelistedAccountCount?: number // Added on v1050
    deposit: bigint | Deposit // bigint replaced by Deposit on v1010
    salt: Bytes
    data: ListingData
    state: ListingState
}
