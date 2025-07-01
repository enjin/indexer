import { AccountId32, Exposure } from '~/pallet/common/types'

export type SomeOffline = {
    offline: [AccountId32, Exposure][]
}
