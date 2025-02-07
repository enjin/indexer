import { UnsupportedStorageError } from '@enjin/indexer/common/errors'
import { BlockHeader } from '@subsquid/substrate-processor'
import { storage } from '../../../types/generated'

export function poolBonusInfo(block: BlockHeader, poolId: number) {
    if (storage.nominationPools.poolBonusInfos.enjinV1023.is(block)) {
        return storage.nominationPools.poolBonusInfos.enjinV1023.get(block, poolId)
    }

    if (storage.nominationPools.poolBonusInfos.enjinV1021.is(block)) {
        return storage.nominationPools.poolBonusInfos.enjinV1021.get(block, poolId)
    }

    if (storage.nominationPools.poolBonusInfos.v1023.is(block)) {
        return storage.nominationPools.poolBonusInfos.v1023.get(block, poolId)
    }

    if (storage.nominationPools.poolBonusInfos.v1021.is(block)) {
        return storage.nominationPools.poolBonusInfos.v1021.get(block, poolId)
    }

    throw new UnsupportedStorageError('NominationPools.BondedPools')
}
