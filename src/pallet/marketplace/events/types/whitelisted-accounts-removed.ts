import { H256, WhitelistRemoveAccount } from '~/pallet/common/types'

export type WhitelistedAccountsRemoved = {
    listingId: H256
    accounts: WhitelistRemoveAccount[]
}
