import { AccountId32 } from '@enjin/indexer/mappings/common/types'

export type JudgementRequested = {
    who: AccountId32
    registrarIndex: number
}
