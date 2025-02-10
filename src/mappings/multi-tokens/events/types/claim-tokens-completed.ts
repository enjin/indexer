import { AccountId32, H160 } from '@enjin/indexer/mappings/common/types'

export type ClaimTokensCompleted = {
    destination: AccountId32
    ethereumAddress: H160
}
