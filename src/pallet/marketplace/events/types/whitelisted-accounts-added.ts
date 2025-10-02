import { H256, WhitelistAddAccount } from '~/pallet/common/types'

export type WhitelistedAccountsAdded = {
    listingId: H256
    accounts: WhitelistAddAccount[]
}
