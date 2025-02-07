 
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

    connection.manager.transaction('REPEATABLE READ', async (em) => {
        try {
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

            if (!totalSupply || totalSupply <= 0) {
                done(); return;
            }

            const entropy = informationContentScoring.collectionEntropy(totalSupply, collection.traits)

            if (!entropy || collection.traits.length === 0) {
                done(); return;
            }

            const tokenRarities = tokens.map((token) => {
                return { score: informationContentScoring.scoreToken(totalSupply, entropy, token), token }
            })

            tokenRarities.sort((a, b) => Number(mathjs.compare(b.score, a.score)))

            // sort by token.id if two tokens have the same score
            tokenRarities.sort((a, b) => {
                if (Number(mathjs.compare(a.score, b.score)) === 0) {
                    return Number(mathjs.compare(mathjs.bignumber(a.token.tokenId), mathjs.bignumber(b.token.tokenId)))
                }
                return 0
            })

            const tokenRanks = tokenRarities.map((tokenRarity, index) => {
                return new TokenRarity({
                    id: tokenRarity.token.id,
                    collection,
                    token: tokenRarity.token,
                    score: tokenRarity.score.toNumber(),
                    rank: index + 1,
                })
            })

            // delete existing token rarities
            await em.delete(TokenRarity, { collection: { id: job.data.collectionId } })

            // save new token rarities
            await em.save(tokenRanks, { chunk: 1000 })

            console.timeEnd('rarity-ranker')

            done(); return;
        } catch (error) {
            console.log('Error in rarity ranker', job.data.collectionId, (error as any).message)
            console.error(error)
            done(error as Error); return;
        }
    })
}
