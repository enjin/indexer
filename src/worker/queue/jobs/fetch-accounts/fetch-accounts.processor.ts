import { Job } from 'bullmq'
import { ProcessorDef } from '../processor.def'
import { dataHandlerContext } from '../../../../connection'
import { getOrCreateAccount } from '../../../../common/util/entities'
import { decodeAddress } from '@polkadot/util-crypto'
import { fetchAccountsDetail } from '../../../../common/util/marketplace'

function isNotNull<T>(input: null | T): input is T {
    return input != null
}

export default class FetchAccountsProcessor implements ProcessorDef {
    async handle(job: Job): Promise<void> {
        const ctx = dataHandlerContext()

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

        await ctx.store.save(accounts)
    }
}
