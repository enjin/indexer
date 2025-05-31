import { AccountId32 } from '../../../common/types'

export type IdentityCleared = {
    who: AccountId32
    deposit: bigint
}
