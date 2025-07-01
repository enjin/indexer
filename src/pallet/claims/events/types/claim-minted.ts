import { H160 } from '~/pallet/common/types'

export type ClaimMinted = {
    who: H160 // HexBytes -> string
    amount: bigint
}
