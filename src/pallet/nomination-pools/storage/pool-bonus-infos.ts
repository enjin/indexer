import { UnsupportedStorageError } from '../../../util/errors'
import { BlockHeader } from '@subsquid/substrate-processor'
import { storage } from '../../../type'
import { match } from 'ts-pattern'
import { PoolBonusInfo } from './types'

export async function poolBonusInfo(block: BlockHeader, poolId: number): Promise<PoolBonusInfo | undefined> {
    return match(block)
        .returnType<Promise<PoolBonusInfo | undefined>>()
        .when(
            () => storage.nominationPools.poolBonusInfos.enjinV1023.is(block),
            () => storage.nominationPools.poolBonusInfos.enjinV1023.get(block, poolId)
        )
        .when(
            () => storage.nominationPools.poolBonusInfos.enjinV1021.is(block),
            () => storage.nominationPools.poolBonusInfos.enjinV1021.get(block, poolId)
        )
        .when(
            () => storage.nominationPools.poolBonusInfos.v1023.is(block),
            () => storage.nominationPools.poolBonusInfos.v1023.get(block, poolId)
        )
        .when(
            () => storage.nominationPools.poolBonusInfos.v1021.is(block),
            () => storage.nominationPools.poolBonusInfos.v1021.get(block, poolId)
        )
        .otherwise(() => {
            throw new UnsupportedStorageError(poolBonusInfo.name)
        })
}
