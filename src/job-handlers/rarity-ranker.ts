import Queue from 'bull'
import * as mathjs from 'mathjs'
import { informationContentScoring } from '../open-rarity/handlers/information-content-scoring'
import connection from '../connection'
import { Collection, Token, TokenRarity } from '../model'
import { JobData } from '../jobs/rarity-ranker'

export default async (job: Queue.Job<JobData>, done: Queue.DoneCallback) => {
    if (!job.data.collectionId) {
        throw new Error('Collection ID not provided.')
    }

    if (!connection.isInitialized) {
        await connection.initialize().catch(() => {
            done(new Error('Failed to initialize connection'))
        })
    }

    const em = connection.manager

    console.time('rarity-ranker')

    const [collection, tokens] = await Promise.all([
        em.findOneOrFail(Collection, {
            relations: {
                traits: true,
            },
            where: { id: job.data.collectionId },
        }),
        em.find(Token, {
            relations: {
                traits: {
                    trait: true,
                },
            },
            where: { collection: { id: job.data.collectionId } },
        }),
    ])

    console.timeLog('rarity-ranker', 'collection and tokens fetched')

    const totalSupply = collection.stats.supply

    // check if total supply is greater than 0
    if (!totalSupply || totalSupply <= 0) {
        return done(new Error('Total supply is 0'))
    }

    const entropy = informationContentScoring.collectionEntropy(totalSupply, collection.traits)

    console.timeLog('rarity-ranker', 'entropy calculated')

    if (!entropy) {
        return done(new Error('Collection entropy is 0'))
    }

    const tokenRarities = tokens.map((token) => {
        return { score: informationContentScoring.scoreToken(totalSupply, entropy, token), token }
    })

    tokenRarities.sort((a, b) => Number(mathjs.compare(b.score, a.score)))

    // rank tokens, if score of two tokens is same, then rank them same as well

    let rank = 1
    let previousScore = tokenRarities[0].score

    const tokenRanks = tokenRarities.map((tokenRarity, index) => {
        if (mathjs.compare(tokenRarity.score.toNumber(), previousScore.toNumber()) !== 0) {
            rank += 1
            previousScore = tokenRarity.score
        }

        return new TokenRarity({
            id: `${tokenRarity.token.id}`,
            collection,
            token: tokenRarity.token,
            score: tokenRarity.score.toNumber(),
            rank,
        })
    })

    // delete existing token rarities
    await em.delete(TokenRarity, { collection: { id: job.data.collectionId } })

    // save new token rarities
    await em.save(tokenRanks)

    console.timeEnd('rarity-ranker')

    return done()
}
