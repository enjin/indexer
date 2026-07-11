import { Job } from 'bullmq'
import { connectionManager } from '~/contexts'
import { TokenRarity, Trait, TraitToken } from '~/model'

export async function fixTraits(job: Job, id: string) {
    const em = await connectionManager()

    if (id.includes('-')) {
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
    } else {
        const traits = await em.find(Trait, {
            where: {
                collection: {
                    id: id,
                },
            },
            relations: {
                tokens: true,
            },
        })

        const rarities = await em.find(TokenRarity, {
            where: {
                collection: {
                    id: id,
                },
            },
        })

        for (const trait of traits) {
            for (const token of trait.tokens) {
                await em.remove(token)
            }
        }

        for (const rarity of rarities) {
            await em.remove(rarity)
        }
    }
}
