import { AccountId32, H256 } from '~/pallet/common/types'

export type WhitelistedAccountsRemoved = {
    listingId: H256
    accountIds: AccountId32[]
}
