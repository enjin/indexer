import { AccountId32, Exposure } from '@enjin/indexer/mappings/common/types'

export type SomeOffline = {
    offline: [AccountId32, Exposure][]
}
