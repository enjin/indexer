import { AccountId32, Data } from '~/pallet/common/types'

export type SetSubs = {
    subs: [AccountId32, Data][]
}
