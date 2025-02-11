import { UnsupportedStorageError } from '../../../common/errors'
import { BlockHeader } from '@subsquid/substrate-processor'
import { storage } from '../../../types/generated'
import { match } from 'ts-pattern'
import { BondedPools } from '../../../mappings/nomination-pools/storage/types'

export function bondedPools(block: BlockHeader, poolId: number): Promise<BondedPools | undefined> {
    return match(block)
        .returnType<Promise<BondedPools | undefined>>()
        .when(storage.nominationPools.bondedPools.enjinV1023.is, () =>
            storage.nominationPools.bondedPools.enjinV1023.get(block, poolId)
        )
        .when(storage.nominationPools.bondedPools.enjinV110.is, () =>
            storage.nominationPools.bondedPools.enjinV110.get(block, poolId)
        )
        .when(storage.nominationPools.bondedPools.enjinV101.is, () =>
            storage.nominationPools.bondedPools.enjinV101.get(block, poolId)
        )
        .when(storage.nominationPools.bondedPools.enjinV100.is, () =>
            storage.nominationPools.bondedPools.enjinV100.get(block, poolId)
        )
        .when(storage.nominationPools.bondedPools.v1023.is, () => storage.nominationPools.bondedPools.v1023.get(block, poolId))
        .when(storage.nominationPools.bondedPools.v110.is, () => storage.nominationPools.bondedPools.v110.get(block, poolId))
        .when(storage.nominationPools.bondedPools.v105.is, () => storage.nominationPools.bondedPools.v105.get(block, poolId))
        .when(storage.nominationPools.bondedPools.v104.is, () => storage.nominationPools.bondedPools.v104.get(block, poolId))
        .when(storage.nominationPools.bondedPools.v103.is, () => storage.nominationPools.bondedPools.v103.get(block, poolId))
        .when(storage.nominationPools.bondedPools.v102.is, () => storage.nominationPools.bondedPools.v102.get(block, poolId))
        .when(storage.nominationPools.bondedPools.v101.is, () => storage.nominationPools.bondedPools.v101.get(block, poolId))
        .when(storage.nominationPools.bondedPools.v100.is, () => storage.nominationPools.bondedPools.v100.get(block, poolId))
        .otherwise(() => {
            throw new UnsupportedStorageError(bondedPools.name)
        })
}
