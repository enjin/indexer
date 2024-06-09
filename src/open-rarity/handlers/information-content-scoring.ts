import math, { BigNumber } from 'mathjs'
import { Trait, Token } from '../../model'

export const informationContentScoring = {
    scoreToken(totalSupply: bigint, entropy: number, token: Token) {
        const traits = token.traits.map((trait) => trait.trait)
        const tokenAttributesScore = this.getTokenAttributesScore(totalSupply, traits)

        return math.bignumber(tokenAttributesScore).div(entropy)
    },

    getTokenAttributesScore(totalSupply: bigint, tokenTraits: Trait[]) {
        const scores: BigNumber[] = []

        tokenTraits.forEach((trait) => {
            scores.push(math.bignumber(trait.count).div(math.bignumber(totalSupply)))
        })

        return math.sum(math.log2(scores))
    },

    collectionEntropy(totalSupply: bigint, traits: Trait[]) {
        const collectionProbabilities: BigNumber[] = []

        traits.forEach((trait) => {
            collectionProbabilities.push(math.bignumber(trait.count).div(math.bignumber(totalSupply)))
        })

        return math.dot(collectionProbabilities, math.log2(collectionProbabilities))
    },
}
