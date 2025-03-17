import { AccountId32, Bytes } from '../../../common/types'

export type Attribute = {
    value: Bytes
    deposit: bigint
    depositor?: AccountId32
}
