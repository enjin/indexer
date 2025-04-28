import Queue from 'bull'
import connection from '../connection'
import { JobData } from '../jobs/fetch-infusion'
import { Token } from '../model'
import Rpc from '../common/rpc'

export default async (job: Queue.Job<JobData>, done: Queue.DoneCallback) => {
    if (!connection.isInitialized) {
        await connection.initialize().catch((err) => {
            throw err
        })
    }

    const em = connection.manager
    const { token } = job.data

    const { api } = await Rpc.getInstance()

    const collectionId = token.split('-')[0]
    const tokenId = token.split('-')[1]

    const res = await api.query.multiTokens.tokens(collectionId, tokenId)
    const data = await em.findOneOrFail<Token>(Token, {
        where: {
            id: token,
        },
    })

    const infusion = res.unwrapOrDefault().infusion
    data.infusion = infusion.toBigInt() ?? '0'

    await em.save<Token>(data)

    done(null, data)
}
