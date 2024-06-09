import math, { BigNumber } from 'mathjs'
import { Collection, Trait, Token } from '../../model'

type Data = {
    collection: Collection
    totalSupply: bigint
    entropy: number
}

export const informationContentScoring = {
    scoreToken(data: Data, token: Token) {
        const traits = token.traits.map((trait) => trait.trait)
        const tokenAttributesScore = this.getTokenAttributesScore(data.totalSupply, traits)

        return math.bignumber(tokenAttributesScore).div(data.entropy)
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
