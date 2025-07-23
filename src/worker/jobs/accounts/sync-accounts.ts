import { dataHandlerContext } from '~/contexts'
import { fetchAccountsDetail } from '~/util/marketplace'
import { getOrCreateAccount } from '~/util/entities'
import { decode } from '@subsquid/ss58'
import { Account } from '~/model'
import { Job } from 'bullmq'
import { isNotNullOrEmpty } from '~/worker/utils'

export async function syncAccounts(_job: Job, ids: string[] | null): Promise<void> {
    const ctx = await dataHandlerContext()
    const data = await fetchAccountsDetail(ids!)

    const accounts = await Promise.all(
        data.filter(isNotNullOrEmpty).map(async (_d) => {
            _job.log(`Fetched ${JSON.stringify(_d)}`)
            const address = _d.publicKey.startsWith('0x') ? _d.publicKey : decode(_d.publicKey).toString()
            const account = await getOrCreateAccount(ctx, address)

            account.username = _d.username
            account.image = _d.image
            account.verifiedAt = _d.verifiedAt
            account.verified = !!_d.verifiedAt

            return account
        })
    )

    await ctx.store.save<Account>(accounts)
}
