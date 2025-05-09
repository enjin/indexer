import { AccountId32 } from '../../../common/types'

export type Bonded = {
    member: AccountId32
    poolId: number
    bonded: bigint
    joined?: boolean // Removed on v104
}
