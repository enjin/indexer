import { Job } from 'bullmq'
import { ProcessorDef } from '../processor.def'
import { Collection, Token, TokenRarity, Trait } from '../../../../model'
import * as mathjs from 'mathjs'
import { connectionManager } from '../../../../contexts'

export const informationContentScoring = {
    scoreToken(totalSupply: bigint, entropy: number, token: Token) {
        const traits = token.traits.map((trait) => trait.trait)

        if (traits.length === 0) {
            return mathjs.bignumber(0)
        }

        const tokenAttributesScore = this.getTokenAttributesScore(totalSupply, traits)

        return mathjs.bignumber(tokenAttributesScore).div(entropy)
    },

    getTokenAttributesScore(totalSupply: bigint, tokenTraits: Trait[]) {
        const scores: mathjs.BigNumber[] = []

        tokenTraits.forEach((trait) => {
            scores.push(mathjs.bignumber(trait.count).div(mathjs.bignumber(totalSupply)))
        })

        return mathjs.sum(mathjs.log2(scores))
    },

    collectionEntropy(totalSupply: bigint, traits: Trait[]) {
        const collectionProbabilities: mathjs.BigNumber[] = []

        traits.forEach((trait) => {
            collectionProbabilities.push(mathjs.bignumber(trait.count).div(mathjs.bignumber(totalSupply)))
        })

        return mathjs.dot(collectionProbabilities, mathjs.log2(collectionProbabilities))
    },
}

export default class ComputeRarityProcessor implements ProcessorDef {
    async handle(job: Job): Promise<void> {
        if (!job.data.collectionId) {
            throw new Error('Collection ID not provided.')
        }

        const em = connectionManager()

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

        const totalSupply = collection.stats.supply

        // check if total supply is greater than 0
        if (!totalSupply || totalSupply <= 0) {
            // return done()
        }

        try {
            const entropy = informationContentScoring.collectionEntropy(totalSupply, collection.traits)

            if (!entropy || collection.traits.length === 0) {
                // return done()
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

            // return done()
        } catch (error) {
            console.log('Error in rarity ranker', job.data.collectionId, (error as any).message)
            console.error(error)
            // return done(error as Error)
        }
    }
}
