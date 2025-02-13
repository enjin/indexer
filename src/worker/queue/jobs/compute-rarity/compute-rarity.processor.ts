import { Job } from 'bullmq'
import { ProcessorDef } from '../processor.def'
import { Token, Trait } from '../../../../model'
import * as mathjs from 'mathjs'

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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async handle(job: Job): Promise<void> {}
}
