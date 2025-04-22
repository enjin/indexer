import { dataHandlerContext } from '../../contexts'
import { fetchAccountsDetail } from '../../util/marketplace'
import { getOrCreateAccount } from '../../util/entities'
import { decode } from '@subsquid/ss58'
import { Account } from '../../model'

function isNotNull<T>(input: null | T): input is T {
    return input != null
}

export async function fetchAccounts(ids: string[]): Promise<void> {
    const ctx = await dataHandlerContext()
    const data = await fetchAccountsDetail(ids)

    const accounts = await Promise.all(
        data.filter(isNotNull).map(async (_d) => {
            const account = await getOrCreateAccount(ctx, decode(_d.publicKey).bytes)
            account.username = _d.username
            account.image = _d.image
            account.verifiedAt = _d.verifiedAt
            account.verified = !!_d.verifiedAt

            return account
        })
    )

    await ctx.store.save<Account>(accounts)
}
