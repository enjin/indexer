import { AccountId32, Deposit, AssetId, DefaultCollectionPolicy, MintRateLimitState } from '~/pallet/common/types'

export type Collection = {
    owner: AccountId32
    policy: DefaultCollectionPolicy
    tokenCount: bigint
    attributeCount: number
    creationDeposit?: Deposit // Added on v1030
    totalDeposit: bigint
    explicitRoyaltyCurrencies: [AssetId, null][]
    totalInfusion?: bigint // Added on v1030
    tokenGroupCount?: number // Added on matrixV1030
    mintRateLimit?: MintRateLimitState // Added on matrixV1040; undefined for pre-v6 values
}
