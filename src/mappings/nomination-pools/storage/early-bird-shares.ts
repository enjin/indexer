import { UnsupportedStorageError } from '../../../utils/errors'
import { BlockHeader } from '@subsquid/substrate-processor'
import { storage } from '../../../types'
import { match } from 'ts-pattern'
import { EarlyBirdShares } from './types'

export function earlyBirdShares(block: BlockHeader, poolId: number): Promise<EarlyBirdShares> {
    return match(block)
        .returnType<Promise<EarlyBirdShares>>()
        .when(
            () => storage.nominationPools.earlyBirdShares.enjinV1022.is(block),
            () => storage.nominationPools.earlyBirdShares.enjinV1022.getPairs(block, poolId)
        )
        .otherwise(() => {
            throw new UnsupportedStorageError(earlyBirdShares.name)
        })
}
