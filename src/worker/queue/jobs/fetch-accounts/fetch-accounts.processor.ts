import { Job } from 'bullmq'
import { ProcessorDef } from '../processor.def'
import { dataHandlerContext } from '../../../../contexts'
import { getOrCreateAccount } from '../../../../utils/entities'
import { decodeAddress } from '@polkadot/util-crypto'
import { fetchAccountsDetail } from '../../../../utils/marketplace'
import { Account } from '../../../../model'

function isNotNull<T>(input: null | T): input is T {
    return input != null
}

export class FetchAccountsProcessor implements ProcessorDef {
    async handle(job: Job): Promise<void> {
        const ctx = await dataHandlerContext()

        const { ids } = job.data
        const data = await fetchAccountsDetail(ids)

        const accounts = await Promise.all(
            data.filter(isNotNull).map(async (_d) => {
                const account = await getOrCreateAccount(ctx, decodeAddress(_d.publicKey))
                account.username = _d.username
                account.image = _d.image
                account.verifiedAt = _d.verifiedAt
                account.verified = !!_d.verifiedAt

                return account
            })
        )

        await ctx.store.save<Account>(accounts)

        await job.log('Finished fetching accounts')
    }

    async failed(job?: Job) {
        if (!job) {
            return
        }

        await job.log('Failed to compute collections')
    }

    async completed(job: Job) {
        await job.log('Finished computing collections')
    }
}

export default new FetchAccountsProcessor()
