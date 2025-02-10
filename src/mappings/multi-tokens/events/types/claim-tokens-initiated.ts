import { AccountId32, H160 } from '@enjin/indexer/mappings/common/types'

export type ClaimTokensInitiated = {
    accountId: AccountId32
    ethereumAddress: H160
}
