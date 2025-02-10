import { UnsupportedStorageError } from '@enjin/indexer/common/errors'
import { BlockHeader } from '@subsquid/substrate-processor'
import { storage } from '../../../types/generated'
import { match } from 'ts-pattern'
import { EarlyBirdShares } from '@enjin/indexer/mappings/nomination-pools/storage/types'

export function earlyBirdShares(block: BlockHeader, poolId: number): Promise<EarlyBirdShares> {
    return match(block)
        .returnType<Promise<EarlyBirdShares>>()
        .when(storage.nominationPools.earlyBirdShares.enjinV1022.is, () =>
            storage.nominationPools.earlyBirdShares.enjinV1022.getPairs(block, poolId)
        )
        .otherwise(() => {
            throw new UnsupportedStorageError(earlyBirdShares.name)
        })
}
