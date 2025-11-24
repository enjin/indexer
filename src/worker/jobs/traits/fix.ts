import { Job } from 'bullmq'
import { connectionManager } from '~/contexts'
import { TokenRarity, TraitToken } from '~/model'

export async function fixTraits(job: Job, id: string) {
    const em = await connectionManager()

    const traitTokens = await em.find(TraitToken, {
        where: {
            token: {
                id: id,
            },
        },
    })

    const tokenRarities = await em.find(TokenRarity, {
        where: {
            token: {
                id: id,
            },
        },
    })

    await em.remove(traitTokens)
    await em.remove(tokenRarities)

    await em.query(`DELETE FROM trait_token WHERE token_id = $1`, [id])
    await em.query(`DELETE FROM token_rarity WHERE token_id = $1`, [id])
}
