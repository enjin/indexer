import { AccountId32, Data } from '@enjin/indexer/mappings/common/types'

export type SetSubs = {
    subs: [AccountId32, Data][]
}
