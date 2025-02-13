import { AccountId32 } from '../../../common/types'

export type SubIdentityRevoked = {
    main: AccountId32
    sub: AccountId32
    deposit: bigint
}
