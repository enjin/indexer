import { connectionManager } from '../../contexts'
import { Collection, Token, TokenRarity, Trait } from '../../model'
import * as mathjs from 'mathjs'
import { Job } from 'bullmq'

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

export async function computeRarity(job: Job, collectionId: string) {
    const em = await connectionManager()

    try {
        const [collection, tokens] = await Promise.all([
            em.findOneOrFail(Collection, {
                relations: {
                    traits: true,
                },
                where: { id: collectionId },
            }),
            em.find(Token, {
                relations: {
                    traits: {
                        trait: true,
                    },
                },
                where: { collection: { id: collectionId } },
            }),
        ])

        const totalSupply = collection.stats?.supply ?? 0
        if (!totalSupply || totalSupply <= 0) {
            return
        }
        const entropy = informationContentScoring.collectionEntropy(totalSupply, collection.traits)
        if (!entropy || collection.traits.length === 0) {
            return
        }

        const tokenRarities = tokens.map((token) => {
            return { score: informationContentScoring.scoreToken(totalSupply, entropy, token), token }
        })

        tokenRarities.sort((a, b) => Number(mathjs.compare(b.score, a.score)))

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

        await job.log(`Token ranks: ${tokenRanks.length}`)

        await em.delete(TokenRarity, { collection: { id: collectionId } })

        await em.save(tokenRanks, { chunk: 1000 })
    } catch (error) {
        await job.log(`Error in rarity ranker ${collectionId}`)
        return
    }
}
