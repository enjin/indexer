import { AccountId32 } from '../../../common/types'

export type TokenAccountCreated = {
    collectionId: bigint
    tokenId: bigint
    accountId: AccountId32
    balance: bigint
}
