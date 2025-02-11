import { UnsupportedStorageError } from '../../../common/errors'
import { BlockHeader } from '@subsquid/substrate-processor'
import { storage } from '../../../types/generated'
import { match } from 'ts-pattern'
import { EarlyBirdBonusInfo } from '../../../mappings/nomination-pools/storage/types'

export async function earlyBirdBonusInfo(block: BlockHeader): Promise<EarlyBirdBonusInfo | undefined> {
    return match(block)
        .returnType<Promise<EarlyBirdBonusInfo | undefined>>()
        .when(storage.nominationPools.earlyBirdBonusInfo.enjinV1023.is, storage.nominationPools.earlyBirdBonusInfo.enjinV1023.get)
        .when(storage.nominationPools.earlyBirdBonusInfo.enjinV1021.is, storage.nominationPools.earlyBirdBonusInfo.enjinV1021.get)
        .when(storage.nominationPools.earlyBirdBonusInfo.v1023.is, storage.nominationPools.earlyBirdBonusInfo.v1023.get)
        .when(storage.nominationPools.earlyBirdBonusInfo.v1021.is, storage.nominationPools.earlyBirdBonusInfo.v1021.get)
        .otherwise(() => {
            throw new UnsupportedStorageError(earlyBirdBonusInfo.name)
        })
}
