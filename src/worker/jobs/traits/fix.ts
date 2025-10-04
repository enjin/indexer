import { Job } from 'bullmq'
import { connectionManager } from '~/contexts'
import { TraitToken } from '~/model'

export async function fixTraits(job: Job, id: string) {
    const em = await connectionManager()

    const traitTokens = await em.find(TraitToken, {
        where: {
            token: {
                id: id,
            },
        },
    })

    await em.remove(traitTokens)

    await em.query(`DELETE FROM trait_token WHERE token_id = $1`, [id])
}
