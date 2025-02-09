import { AccountId32 } from '@enjin/indexer/mappings/common/types'

export type SubIdentityAdded = {
    main: AccountId32
    sub: AccountId32
    deposit: bigint
}
