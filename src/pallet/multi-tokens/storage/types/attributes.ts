import { AccountId32, Bytes } from '~/pallet/common/types'

export type Attribute = {
    value: Bytes
    deposit: bigint
    depositor?: AccountId32
}
