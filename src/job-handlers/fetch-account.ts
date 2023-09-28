import Queue from 'bull'
import { decodeAddress } from '@polkadot/util-crypto'
import connection from '../connection'
import { JobData } from '../jobs/fetch-account'
import { getOrCreateAccount } from '../mappings/util/entities'
import { fetchAccountsDetail } from '../mappings/util/marketplace'

function isNotNull<T>(input: null | T): input is T {
    return input != null
}

export default async (job: Queue.Job<JobData>, done: Queue.DoneCallback) => {
    if (!connection.isInitialized) {
        await connection.initialize().catch((err) => {
            throw err
        })
    }

    const em = connection.manager

    const { ids } = job.data

    const data = await fetchAccountsDetail(ids)

    const accounts = await Promise.all(
        data.filter(isNotNull).map(async (_d) => {
            const account = await getOrCreateAccount({ store: em } as any, decodeAddress(_d.publicKey))
            account.username = _d.username
            account.image = _d.image
            account.verifiedAt = _d.verifiedAt

            return account
        })
    )

    await em.save(accounts)

    done(null, data)
}
