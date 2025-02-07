import { UnsupportedStorageError } from '@enjin/indexer/common/errors'
import { BlockHeader } from '@subsquid/substrate-processor'
import { storage } from '../../../types/generated'
import { match } from 'ts-pattern'

type PoolBonusInfo = {
    amount: bigint
    shareCaptureBlock?: number
    lastPaymentId?: number
}

export async function poolBonusInfo(block: BlockHeader, poolId: number): Promise<PoolBonusInfo | undefined> {
    return match(block)
        .returnType<Promise<PoolBonusInfo | undefined>>()
        .when(storage.nominationPools.poolBonusInfos.enjinV1023.is, () =>
            storage.nominationPools.poolBonusInfos.enjinV1023.get(block, poolId)
        )
        .when(storage.nominationPools.poolBonusInfos.enjinV1021.is, () =>
            storage.nominationPools.poolBonusInfos.enjinV1021.get(block, poolId)
        )
        .when(storage.nominationPools.poolBonusInfos.v1023.is, () =>
            storage.nominationPools.poolBonusInfos.v1023.get(block, poolId)
        )
        .when(storage.nominationPools.poolBonusInfos.v1021.is, () =>
            storage.nominationPools.poolBonusInfos.v1021.get(block, poolId)
        )
        .otherwise(() => {
            throw new UnsupportedStorageError('NominationPools.BondedPools')
        })
}
