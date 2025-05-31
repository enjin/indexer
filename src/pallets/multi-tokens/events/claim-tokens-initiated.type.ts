import { AccountId32, H160 } from '../../common/types'

export type ClaimTokensInitiated = {
    accountId: AccountId32
    ethereumAddress: H160
}
