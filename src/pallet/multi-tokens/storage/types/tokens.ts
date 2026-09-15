import {
    AccountId32,
    AmbiguousDeposit,
    DefaultTokenMetadata,
    FreezeState,
    Sufficiency,
    TokenCap,
    TokenMarketBehavior,
    MintRateLimitState,
} from '~/pallet/common/types'

export type LendingInfo = {
    lender: AccountId32
    expiration: bigint
}

export type Token = {
    supply: bigint
    cap?: TokenCap
    freezeState?: FreezeState
    minimumBalance?: bigint // Removed on v1030
    requiresDeposit?: boolean // Added on v1030
    creationDeposit?: AmbiguousDeposit // Added on v1030
    ownerDeposit?: bigint // Added on v1030
    totalTokenAccountDeposit?: bigint // Added on v1030
    sufficiency?: Sufficiency // Removed on v1030
    mintDeposit?: bigint // Removed on v1030
    attributeCount: number
    accountCount?: number // Added on v1030
    marketBehavior?: TokenMarketBehavior
    listingForbidden: boolean
    metadata: DefaultTokenMetadata
    infusion?: bigint // Added on v1030
    anyoneCanInfuse?: boolean // Added on v1030
    groups?: bigint[] // Added on v1030
    ephemeralExpiration?: bigint // Added on matrixV1040
    isLendable: boolean // Added on matrixV1040; false for pre-v6 values
    lending?: LendingInfo // Added on matrixV1040; undefined for pre-v6 values
    mintRateLimit?: MintRateLimitState // Added on matrixV1040; undefined for pre-v6 values
}
