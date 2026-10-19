import { H160 } from '~/pallet/common/types'

export type ClaimMoved = {
    old: H160 // HexBytes -> string
    new: H160 // HexBytes -> string
}
