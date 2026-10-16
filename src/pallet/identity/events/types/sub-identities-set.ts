import { AccountId32 } from '~/pallet/common/types'

export type SubIdentitiesSet = {
    main: AccountId32
    numberOfSubs: number
    newDeposit: bigint
}

export type SubIdentityRenamed = {
    sub: AccountId32
    main: AccountId32
}
