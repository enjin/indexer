import { AccountId32 } from '~/pallet/common/types'

export type Nominated = {
    poolId: number
    validators: AccountId32[]
}
