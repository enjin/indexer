import { UnsupportedStorageError } from '@enjin/indexer/common/errors'
import { BlockHeader } from '@subsquid/substrate-processor'
import { storage } from '../../../types/generated'

export function earlyBirdShares(block: BlockHeader, poolId: number) {
    if (storage.nominationPools.earlyBirdShares.enjinV1022.is(block)) {
        return storage.nominationPools.earlyBirdShares.enjinV1022.getPairs(block, poolId)
    }

    throw new UnsupportedStorageError('NominationPools.BondedPools')
}
