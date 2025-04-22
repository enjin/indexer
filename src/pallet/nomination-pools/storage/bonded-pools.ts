import { UnsupportedStorageError } from '../../../util/errors'
import { BlockHeader } from '@subsquid/substrate-processor'
import { storage } from '../../../type'
import { match } from 'ts-pattern'
import { BondedPools } from './types'

export function bondedPools(block: BlockHeader, poolId: number): Promise<BondedPools | undefined> {
    return match(block)
        .returnType<Promise<BondedPools | undefined>>()
        .when(
            () => storage.nominationPools.bondedPools.enjinV1023.is(block),
            () => storage.nominationPools.bondedPools.enjinV1023.get(block, poolId)
        )
        .when(
            () => storage.nominationPools.bondedPools.enjinV110.is(block),
            () => storage.nominationPools.bondedPools.enjinV110.get(block, poolId)
        )
        .when(
            () => storage.nominationPools.bondedPools.enjinV101.is(block),
            () => storage.nominationPools.bondedPools.enjinV101.get(block, poolId)
        )
        .when(
            () => storage.nominationPools.bondedPools.enjinV100.is(block),
            () => storage.nominationPools.bondedPools.enjinV100.get(block, poolId)
        )
        .when(
            () => storage.nominationPools.bondedPools.v1023.is(block),
            () => storage.nominationPools.bondedPools.v1023.get(block, poolId)
        )
        .when(
            () => storage.nominationPools.bondedPools.v110.is(block),
            () => storage.nominationPools.bondedPools.v110.get(block, poolId)
        )
        .when(
            () => storage.nominationPools.bondedPools.v105.is(block),
            () => storage.nominationPools.bondedPools.v105.get(block, poolId)
        )
        .when(
            () => storage.nominationPools.bondedPools.v104.is(block),
            () => storage.nominationPools.bondedPools.v104.get(block, poolId)
        )
        .when(
            () => storage.nominationPools.bondedPools.v103.is(block),
            () => storage.nominationPools.bondedPools.v103.get(block, poolId)
        )
        .when(
            () => storage.nominationPools.bondedPools.v102.is(block),
            () => storage.nominationPools.bondedPools.v102.get(block, poolId)
        )
        .when(
            () => storage.nominationPools.bondedPools.v101.is(block),
            () => storage.nominationPools.bondedPools.v101.get(block, poolId)
        )
        .when(
            () => storage.nominationPools.bondedPools.v100.is(block),
            () => storage.nominationPools.bondedPools.v100.get(block, poolId)
        )
        .otherwise(() => {
            throw new UnsupportedStorageError(bondedPools.name)
        })
}
