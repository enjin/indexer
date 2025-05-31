import { AccountId32, H160 } from '../../common/types'

export type ClaimTokensCompleted = {
    destination: AccountId32
    ethereumAddress: H160
}
