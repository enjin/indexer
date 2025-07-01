import { AccountId32, Deposit, AssetId, DefaultCollectionPolicy } from '~/pallet/common/types'

export type Collection = {
    owner: AccountId32
    policy: DefaultCollectionPolicy
    tokenCount: bigint
    attributeCount: number
    creationDeposit?: Deposit // Added on v1030
    totalDeposit: bigint
    explicitRoyaltyCurrencies: [AssetId, null][]
    totalInfusion?: bigint // Added on v1030
}
