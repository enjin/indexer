import { UnsupportedStorageError } from '@enjin/indexer/common/errors'
import { BlockHeader } from '@subsquid/substrate-processor'
import { storage } from '../../../types/generated'

export function bondedPools(block: BlockHeader, poolId: number) {
    if (storage.nominationPools.bondedPools.enjinV1023.is(block)) {
        return storage.nominationPools.bondedPools.enjinV1023.get(block, poolId)
    }

    if (storage.nominationPools.bondedPools.enjinV110.is(block)) {
        return storage.nominationPools.bondedPools.enjinV110.get(block, poolId)
    }

    if (storage.nominationPools.bondedPools.enjinV101.is(block)) {
        return storage.nominationPools.bondedPools.enjinV101.get(block, poolId)
    }

    if (storage.nominationPools.bondedPools.enjinV100.is(block)) {
        return storage.nominationPools.bondedPools.enjinV100.get(block, poolId)
    }

    if (storage.nominationPools.bondedPools.v1023.is(block)) {
        return storage.nominationPools.bondedPools.v1023.get(block, poolId)
    }

    if (storage.nominationPools.bondedPools.v110.is(block)) {
        return storage.nominationPools.bondedPools.v110.get(block, poolId)
    }

    if (storage.nominationPools.bondedPools.v105.is(block)) {
        return storage.nominationPools.bondedPools.v105.get(block, poolId)
    }

    if (storage.nominationPools.bondedPools.v104.is(block)) {
        return storage.nominationPools.bondedPools.v104.get(block, poolId)
    }

    if (storage.nominationPools.bondedPools.v103.is(block)) {
        return storage.nominationPools.bondedPools.v103.get(block, poolId)
    }

    if (storage.nominationPools.bondedPools.v102.is(block)) {
        return storage.nominationPools.bondedPools.v102.get(block, poolId)
    }

    if (storage.nominationPools.bondedPools.v101.is(block)) {
        return storage.nominationPools.bondedPools.v101.get(block, poolId)
    }

    if (storage.nominationPools.bondedPools.v100.is(block)) {
        return storage.nominationPools.bondedPools.v100.get(block, poolId)
    }

    throw new UnsupportedStorageError('NominationPools.BondedPools')
}
