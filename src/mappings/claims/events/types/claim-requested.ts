import { Account, H160, H256 } from '../../../common/types'

export type ClaimRequested = {
    who: H160 | Account // H160 at matrixEnjinV603, Account at v104
    amount?: bigint // only in v104
    amountBurned?: bigint // only in matrixEnjinV603
    transactionHash: H256 // Bytes -> string
    isEfiToken: boolean
    amountClaimable?: bigint // only in matrixEnjinV603
    isEarlyBird?: boolean // only in v104
}
