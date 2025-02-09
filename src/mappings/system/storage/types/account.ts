import { AccountData } from '@enjin/indexer/mappings/common/types'

export type AccountInfo = {
    nonce: number
    consumers: number
    providers: number
    sufficients: number
    data: AccountData
}
