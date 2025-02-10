import {
    AmbiguousDeposit,
    DefaultTokenMetadata,
    FreezeState,
    Sufficiency,
    TokenCap,
    TokenMarketBehavior,
} from '@enjin/indexer/mappings/common/types'

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
}
