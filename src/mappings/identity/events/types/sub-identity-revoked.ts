import { AccountId32 } from '@enjin/indexer/mappings/common/types'

export type SubIdentityRevoked = {
    main: AccountId32
    sub: AccountId32
    deposit: bigint
}
