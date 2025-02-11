import { BlockHeader } from '@subsquid/substrate-processor'
import { constants } from '../../../types/generated'
import { match } from 'ts-pattern'

export function earlyBirdBonusDistributionBlock(block: BlockHeader): number {
    return match(block)
        .returnType<number>()
        .when(
            () => constants.nominationPools.earlyBirdBonusDistributionBlock.enjinV101.is(block),
            () => constants.nominationPools.earlyBirdBonusDistributionBlock.enjinV101.get(block)
        )
        .otherwise(() => {
            return 0
        })
}
