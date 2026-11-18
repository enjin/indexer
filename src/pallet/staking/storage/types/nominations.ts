import { AccountId32 } from '~/pallet/common/types'

export type Nominations = {
    targets: AccountId32[]
    submittedIn: number
    suppressed: boolean
}
