import { H160 } from '../../../common/types'

export type ClaimMinted = {
    who: H160 // HexBytes -> string
    amount: bigint
}
