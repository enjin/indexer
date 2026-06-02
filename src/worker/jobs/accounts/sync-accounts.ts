import { dataHandlerContext } from '~/contexts'
import { fetchAccountsDetail } from '~/util/marketplace'
import { getOrCreateAccount } from '~/util/entities'
import { decode } from '@subsquid/ss58'
import { Account } from '~/model'
import { Job } from 'bullmq'
import { isNotNullOrEmpty } from '~/worker/utils'
import { decodeAddress, isValidAddress } from '~/util/tools'

export async function syncAccounts(_job: Job, ids: string[] | null): Promise<void> {
    const ctx = await dataHandlerContext()

    await _job.updateProgress(10)
    const accountIds = ids?.map((id) => (isValidAddress(id) ? id : decodeAddress(id))) ?? []

    const data = await fetchAccountsDetail(accountIds)

    await _job.updateProgress(40)

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

    await _job.updateProgress(80)

    await ctx.store.save<Account>(accounts)

    await _job.updateProgress(100)
}
