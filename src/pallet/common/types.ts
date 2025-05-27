import { BoundedString, V3MultiLocation } from '../../type/v100'
import { V4Location } from '../../type/v1030'

export type Bytes = string // HexBytes
export type H160 = Bytes // HexBytes
export type H256 = Bytes // HexBytes
export type AccountId32 = Bytes // HexBytes
export type Percent = number // percent
export type Perbill = number // per billion
export type Perquintill = bigint // per quintillion
export type BitFlags = bigint
export type ExtraFlags = bigint
export type BoundedVec = Bytes
export type Call = {
    __kind: string
    value: {
        __kind: string
        value?: unknown
    }
}

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
export type MultiAddress_Id = {
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

type Response_Accept = {
    __kind: 'Accept'
}

type Response_Counter = {
    __kind: 'Counter'
    value: bigint
}

type Response_Reject = {
    __kind: 'Reject'
}

export type Response = Response_Accept | Response_Counter | Response_Reject

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

type BalanceStatus_Reserved = {
    __kind: 'Reserved'
}

type BalanceStatus_Free = {
    __kind: 'Free'
}

export type BalanceStatus = BalanceStatus_Reserved | BalanceStatus_Free

type PoolState_Blocked = {
    __kind: 'Blocked' // Removed on v103
}

type PoolState_Destroying = {
    __kind: 'Destroying'
}

type PoolState_Open = {
    __kind: 'Open'
}

export type PoolState = PoolState_Destroying | PoolState_Open | PoolState_Blocked

type ShouldMutate_Perbill_NoMutation = {
    __kind: 'NoMutation'
}

type ShouldMutate_Perbill_SomeMutation = {
    __kind: 'SomeMutation'
    value?: Perbill
}

type ShouldMutate_Perbill = ShouldMutate_Perbill_NoMutation | ShouldMutate_Perbill_SomeMutation

type CommissionChangeRate = {
    maxDelta: Perbill
    minDelay: number
}

export interface PoolRolesMutation {
    newAdmin: ShouldMutate_AccountId32
    newNominator: ShouldMutate_AccountId32
}

export type ShouldMutate_AccountId32 = ShouldMutate_AccountId32_NoMutation | ShouldMutate_AccountId32_SomeMutation

export interface ShouldMutate_AccountId32_NoMutation {
    __kind: 'NoMutation'
}

export interface ShouldMutate_AccountId32_SomeMutation {
    __kind: 'SomeMutation'
    value?: AccountId32
}

export type PoolMutation = {
    duration?: number
    newCommission?: ShouldMutate_Perbill
    maxCommission?: Perbill
    changeRate?: CommissionChangeRate
    roles?: PoolRolesMutation // Removed on v110
    capacity?: bigint // Added on v104
    name?: BoundedVec // Added on v1023
}

export type BonusCycle = {
    previousStart?: number
    start: number
    end: number
    pendingDuration?: number
}

export type PoolRoles = {
    depositor?: AccountId32 // Removed on v101
    root?: AccountId32 // Removed on v102
    admin?: AccountId32 // Added on v102
    nominator?: AccountId32
}

export type Commission = {
    current?: [Perbill, AccountId32] | Perbill // Changed from tuple to Perbill on v101
    max?: Perbill
    changeRate?: CommissionChangeRate
    throttleFrom?: number
}

type HoldReason_FuelTanks = {
    __kind: 'FuelTanks'
}

type HoldReason_Marketplace = {
    __kind: 'Marketplace'
}

type HoldReason_MultiTokens = {
    __kind: 'MultiTokens'
}

type HoldReason_Preimage = {
    __kind: 'Preimage'
}

type HoldReason_SafeMode = {
    __kind: 'SafeMode' // EnterOrExtend
}

type HoldReason_StakeExchange = {
    __kind: 'StakeExchange'
}

type HoldReason_CollatorStaking = {
    __kind: 'CollatorStaking'
}

export type RuntimeHoldReason =
    | HoldReason_FuelTanks
    | HoldReason_Marketplace
    | HoldReason_MultiTokens
    | HoldReason_Preimage
    | HoldReason_SafeMode
    | HoldReason_StakeExchange
    | HoldReason_CollatorStaking

type Root = {
    __kind: 'Root'
}

type Signed = {
    __kind: 'Signed'
    value: string
}

export type RootOrSigned = Root | Signed

export type CollectionIdPair = {
    ethereum: bigint
    native: bigint
}

type FreezeType_Collection = {
    __kind: 'Collection'
}

type FreezeType_CollectionAccount = {
    __kind: 'CollectionAccount'
    value: AccountId32
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

type FreezeType_Token = {
    __kind: 'Token'
    tokenId: bigint
    freezeState?: FreezeState
}

type FreezeType_TokenAccount = {
    __kind: 'TokenAccount'
    tokenId: bigint
    accountId: AccountId32
}

export type FreezeType =
    | FreezeType_Collection
    | FreezeType_CollectionAccount
    | FreezeType_Token
    | FreezeType_TokenAccount

export type DefaultRoyaltyInfo = {
    beneficiary: AccountId32
    percentage: number
}

export type DefaultRoyalty = {
    beneficiaries: DefaultRoyaltyInfo[]
}

export interface ShouldMutate_Royalty_NoMutation {
    __kind: 'NoMutation'
}

export interface ShouldMutate_Royalty_SomeMutation {
    __kind: 'SomeMutation'
    value?: DefaultRoyaltyInfo | DefaultRoyalty // Changed from DefaultRoyaltyInfo to DefaultRoyalty on v1050
}

type ShouldMutate_Royalty = ShouldMutate_Royalty_NoMutation | ShouldMutate_Royalty_SomeMutation

export type DefaultCollectionMutation = {
    owner?: AccountId32
    royalty: ShouldMutate_Royalty
    explicitRoyaltyCurrencies?: AssetId[]
}

export type ShouldMutate_Behavior_NoMutation = {
    __kind: 'NoMutation'
}

export type TokenMarketBehavior_IsCurrency = {
    __kind: 'IsCurrency'
}

export type TokenMarketBehavior_HasRoyalty = {
    __kind: 'HasRoyalty'
    value: DefaultRoyaltyInfo | DefaultRoyalty // Changed from DefaultRoyaltyInfo to DefaultRoyalty on v1050
}

export type TokenMarketBehavior = TokenMarketBehavior_IsCurrency | TokenMarketBehavior_HasRoyalty

export type ShouldMutate_Behavior_SomeMutation = {
    __kind: 'SomeMutation'
    value?: TokenMarketBehavior
}

export type ShouldMutate_Behavior = ShouldMutate_Behavior_NoMutation | ShouldMutate_Behavior_SomeMutation

export type ShouldMutate_ListingForbidden_NoMutation = {
    __kind: 'NoMutation'
}

export type ShouldMutate_ListingForbidden_SomeMutation = {
    __kind: 'SomeMutation'
    value: boolean
}

export type ShouldMutate_ListingForbidden =
    | ShouldMutate_ListingForbidden_NoMutation
    | ShouldMutate_ListingForbidden_SomeMutation

export type ForeignTokenMetadata = {
    decimalCount: number
    name: BoundedString
    symbol: Bytes
    location?: V3MultiLocation
    unitsPerSecond?: bigint
    premintedSupply?: bigint
}

export type DefaultTokenMetadata_Foreign = {
    __kind: 'Foreign'
    value: ForeignTokenMetadata
}

export type DefaultTokenMetadata_Native = {
    __kind: 'Native'
}

export type DefaultForeignTokenMetadata = {
    location?: V4Location
    unitsPerSecond?: bigint
}

export type DefaultTokenMetadata_Current = {
    decimalCount: number
    name: BoundedString
    symbol: Bytes
    foreign?: DefaultForeignTokenMetadata
}

export type DefaultTokenMetadata =
    | DefaultTokenMetadata_Foreign
    | DefaultTokenMetadata_Native
    | DefaultTokenMetadata_Current

export type ShouldMutate_Metadata_NoMutation = {
    __kind: 'NoMutation'
}

export type ShouldMutate_Metadata_SomeMutation = {
    __kind: 'SomeMutation'
    value: DefaultTokenMetadata
}

export type ShouldMutate_Metadata = ShouldMutate_Metadata_NoMutation | ShouldMutate_Metadata_SomeMutation

export type ShouldMutate_Name_NoMutation = {
    __kind: 'NoMutation'
}

export type ShouldMutate_Name_SomeMutation = {
    __kind: 'SomeMutation'
    value: BoundedString
}

export type ShouldMutate_Name = ShouldMutate_Name_NoMutation | ShouldMutate_Name_SomeMutation

export type ShouldMutate_AnyoneCanInfuse_NoMutation = {
    __kind: 'NoMutation'
}

export type ShouldMutate_AnyoneCanInfuse_SomeMutation = {
    __kind: 'SomeMutation'
    value: boolean
}

export type ShouldMutate_AnyoneCanInfuse =
    | ShouldMutate_AnyoneCanInfuse_NoMutation
    | ShouldMutate_AnyoneCanInfuse_SomeMutation

export type TokenMutation = {
    behavior: ShouldMutate_Behavior
    listingForbidden: ShouldMutate_ListingForbidden
    metadata?: ShouldMutate_Metadata // Removed on v1030
    anyoneCanInfuse?: ShouldMutate_AnyoneCanInfuse // Added on v1030
    name?: ShouldMutate_Name // Added on v1030
}

export type Approval = {
    amount: bigint
    expiration?: number
}

export type TokenAccountReserve = {
    reason: RuntimeHoldReason
    balance: bigint
}

export type DefaultMintPolicy = {
    maxTokenCount?: bigint
    maxTokenSupply?: bigint
    forceSingleMint?: boolean // Removed on v1030
    forceCollapsingSupply?: boolean // Added on v1030
}

export type DefaultTransferPolicy = {
    isFrozen: boolean
}

export type DefaultMarketPolicy = {
    royalty?: DefaultRoyaltyInfo | DefaultRoyalty // Changed from DefaultRoyaltyInfo to DefaultRoyalty on v1050
}

export type DefaultCollectionPolicy = {
    mint: DefaultMintPolicy
    transfer: DefaultTransferPolicy
    market: DefaultMarketPolicy
}

export type Sufficiency = Sufficiency_Insufficient | Sufficiency_Sufficient

export interface Sufficiency_Insufficient {
    __kind: 'Insufficient'
    unitPrice: bigint
}

export interface Sufficiency_Sufficient {
    __kind: 'Sufficient'
}

type TokenCap_CollapsingSupply = {
    __kind: 'CollapsingSupply' // Added on v102
    value: bigint
}

type TokenCap_SingleMint = {
    __kind: 'SingleMint' // Removed on v1030
}

type TokenCap_Supply = {
    __kind: 'Supply'
    value: bigint
}

export type TokenCap = TokenCap_SingleMint | TokenCap_Supply | TokenCap_CollapsingSupply

export type AmbiguousDeposit = {
    depositor?: AccountId32
    amount: bigint
}

export type Attribute = {
    key: Bytes
    value: Bytes
}

export type DefaultCollectionPolicyDescriptor = {
    mint: DefaultMintPolicy
    market: DefaultMarketPolicy
}

export type DefaultCollectionDescriptor = {
    policy: DefaultCollectionPolicyDescriptor
    depositor?: AccountId32 // Added on v1030
    explicitRoyaltyCurrencies: AssetId[]
    attributes: Attribute[]
}

export type RangeInclusive = {
    start: bigint
    end: bigint
}

type SufficiencyParam_Sufficient = {
    __kind: 'Sufficient'
    minimumBalance: bigint
}

type SufficiencyParam_Insufficient = {
    __kind: 'Insufficient'
    unitPrice?: bigint
}

export type SufficiencyParam = SufficiencyParam_Insufficient | SufficiencyParam_Sufficient

type PrivilegedCreateTokenParams = {
    requiresDeposit: boolean
    foreignParams?: DefaultForeignTokenMetadata
    depositor?: AccountId32
}

export interface DefaultMintParams_CreateToken {
    __kind: 'CreateToken'
    tokenId: bigint
    initialSupply: bigint
    sufficiency?: SufficiencyParam // Removed on v1030
    accountDepositCount?: number // Added on v1030
    cap?: TokenCap
    behavior?: TokenMarketBehavior
    listingForbidden: boolean
    freezeState?: FreezeState
    attributes: Attribute[]
    foreignParams?: ForeignTokenMetadata // Removed on v1030
    infusion?: bigint // Added on v1030
    anyoneCanInfuse?: boolean // Added on v1030
    metadata?: DefaultTokenMetadata_Current // Added on v1030
    privilegedParams?: PrivilegedCreateTokenParams // Added on v1030
}

export interface DefaultMintParams_Mint {
    __kind: 'Mint'
    tokenId: bigint
    amount: bigint
    unitPrice?: bigint // Removed on v1030
    depositor?: AccountId32 // Added on v1030
}

export type DefaultMintParams = DefaultMintParams_CreateToken | DefaultMintParams_Mint

type CreateOrMintParams = {
    tokenId: bigint
    amount: bigint
    sufficiency?: SufficiencyParam // Removed on v1030
    accountDepositCount?: number // Added on v1030
    cap?: TokenCap
    behavior?: TokenMarketBehavior
    listingForbidden: boolean
    freezeState?: FreezeState
    attributes: Attribute[]
    infusion?: bigint // Added on v1030
    anyoneCanInfuse?: boolean // Added on v1030
    metadata?: DefaultTokenMetadata_Current // Added on v1030
    foreignParams?: ForeignTokenMetadata // Removed on v1030
}

type FlexibleMintParams_CreateOrMint = {
    __kind: 'CreateOrMint'
    value: CreateOrMintParams
}

export type FlexibleMintParams =
    | DefaultMintParams_CreateToken // Removed on v1030
    | DefaultMintParams_Mint
    | FlexibleMintParams_CreateOrMint // Added on v1023, removed on v1030
    | CreateOrMintParams // Added on v1030

export interface UserAccountManagement {
    tankReservesExistentialDeposit?: boolean // Removed on v1030
    tankReservesAccountCreationDeposit: boolean
}

export interface RequireTokenRule {
    collectionId: bigint
    tokenId: bigint
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

export type ShouldMutate_UserAccountManagement =
    | ShouldMutate_UserAccountManagement_NoMutation
    | ShouldMutate_UserAccountManagement_SomeMutation

export interface ShouldMutate_UserAccountManagement_NoMutation {
    __kind: 'NoMutation'
}

export type CoveragePolicy = CoveragePolicy_Fees | CoveragePolicy_FeesAndDeposit

export interface CoveragePolicy_Fees {
    __kind: 'Fees'
}

export interface CoveragePolicy_FeesAndDeposit {
    __kind: 'FeesAndDeposit'
}

export interface ShouldMutate_UserAccountManagement_SomeMutation {
    __kind: 'SomeMutation'
    value?: UserAccountManagement
}

export type DefaultTankMutation = {
    userAccountManagement: ShouldMutate_UserAccountManagement
    providesDeposit?: boolean // Removed on v1030
    coveragePolicy?: CoveragePolicy // Added on v1030
    accountRules?: AccountRuleDescriptor[]
}

export type ExpirableSignature = {
    signature: Bytes
    expiryBlock: number
}

export type DispatchSettings = {
    useNoneOrigin: boolean
    paysRemainingFee: boolean
    signature?: ExpirableSignature // Added on v1030
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
    | DispatchRuleDescriptor_WhitelistedPallets // Added on v1021
    | DispatchRuleDescriptor_MinimumInfusion // Added on v1032
    | DispatchRuleDescriptor_RequireSignature // Added on v1032

type DispatchRuleDescriptor_WhitelistedPallets = {
    __kind: 'WhitelistedPallets' // Added on v1021
    value: Call[]
}

type DispatchRuleDescriptor_MinimumInfusion = {
    __kind: 'MinimumInfusion' // Added on v1032
    value: bigint
}

type DispatchRuleDescriptor_RequireSignature = {
    __kind: 'RequireSignature' // Added on v1032
    value: Bytes
}

type DispatchRuleDescriptor_MaxFuelBurnPerTransaction = {
    __kind: 'MaxFuelBurnPerTransaction'
    value: bigint
}

type DispatchRuleDescriptor_PermittedCalls = {
    __kind: 'PermittedCalls'
    value: Bytes[]
}

type DispatchRuleDescriptor_PermittedExtrinsics = {
    __kind: 'PermittedExtrinsics'
    value: Call[]
}

type DispatchRuleDescriptor_RequireToken = {
    __kind: 'RequireToken'
    value: RequireTokenRule
}

export type BudgetRuleDescriptor = {
    amount: bigint
    resetPeriod: number
}

type DispatchRuleDescriptor_TankFuelBudget = {
    __kind: 'TankFuelBudget'
    value: BudgetRuleDescriptor
}

type DispatchRuleDescriptor_UserFuelBudget = {
    __kind: 'UserFuelBudget'
    value: BudgetRuleDescriptor
}

type DispatchRuleDescriptor_WhitelistedCallers = {
    __kind: 'WhitelistedCallers'
    value: AccountId32[]
}

type DispatchRuleDescriptor_WhitelistedCollections = {
    __kind: 'WhitelistedCollections'
    value: bigint[]
}

export type RuleSetDescriptor = {
    rules: DispatchRuleDescriptor[]
    requireAccount: boolean
}

export type FuelTankDescriptor = {
    name: Bytes
    userAccountManagement?: UserAccountManagement
    ruleSets: [number, DispatchRuleDescriptor[]][] | [number, RuleSetDescriptor][] // Changed from DispatchRuleDescriptor to RuleSetDescriptor on v1030
    providesDeposit?: boolean // Removed on v1030
    coveragePolicy?: CoveragePolicy // Added on v1030
    accountRules: AccountRuleDescriptor[]
}

export type CommissionPayment = {
    beneficiary: AccountId32
    amount: bigint
}
