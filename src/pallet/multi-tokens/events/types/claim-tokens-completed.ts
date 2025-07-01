import { AccountId32, H160 } from '~/pallet/common/types'

export type ClaimTokensCompleted = {
    destination: AccountId32
    ethereumAddress: H160
}
