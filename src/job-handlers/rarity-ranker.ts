import Queue from 'bull'
import math from 'mathjs'
import { informationContentScoring } from 'src/open-rarity/handlers/information-content-scoring'
import connection from '../connection'
import { Collection, Token } from '../model'
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

    const totalSupply = collection.stats.supply

    // check if total supply is greater than 0
    if (!totalSupply || totalSupply <= 0) {
        return done(new Error('Total supply is 0'))
    }

    const entropy = informationContentScoring.collectionEntropy(totalSupply, collection.traits)

    if (!entropy) {
        return done(new Error('Collection entropy is 0'))
    }

    const tokenRarities = tokens.map((token) => {
        return { score: informationContentScoring.scoreToken(totalSupply, entropy, token), token }
    })

    tokenRarities.sort((a, b) => Number(math.compare(a.score, b.score)))

    // rank tokens, if score of two tokens is same, then rank them same as well

    let rank = 1
    let previousScore = tokenRarities[0].score

    tokenRarities.forEach((tokenRarity, index) => {
        if (math.compare(tokenRarity.score.toNumber(), previousScore.toNumber()) !== 0) {
            rank = index + 1
            previousScore = tokenRarity.score
        }

        console.log(`Token ID: ${tokenRarity.token.id}, Rank: ${rank}`)
    })

    return done()
}
