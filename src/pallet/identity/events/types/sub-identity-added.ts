import { AccountId32 } from '../../../common/types'

export type SubIdentityAdded = {
    main: AccountId32
    sub: AccountId32
    deposit: bigint
}
