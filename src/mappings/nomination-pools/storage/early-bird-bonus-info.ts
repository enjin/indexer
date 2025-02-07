import { UnsupportedStorageError } from '@enjin/indexer/common/errors'
import { BlockHeader } from '@subsquid/substrate-processor'
import { storage } from '../../../types/generated'
import { match } from 'ts-pattern'

type EarlyBirdBonusInfo = {
    bonusCalculated: boolean
    currentPaymentId?: number
    nextPaymentBlock?: number
    totalPaid?: bigint
}

export async function earlyBirdBonusInfo(block: BlockHeader): Promise<EarlyBirdBonusInfo | undefined> {
    return match(block)
        .returnType<Promise<EarlyBirdBonusInfo | undefined>>()
        .when(storage.nominationPools.earlyBirdBonusInfo.enjinV1023.is, () =>
            storage.nominationPools.earlyBirdBonusInfo.enjinV1023.get(block)
        )
        .when(storage.nominationPools.earlyBirdBonusInfo.enjinV1021.is, () =>
            storage.nominationPools.earlyBirdBonusInfo.enjinV1021.get(block)
        )
        .when(storage.nominationPools.earlyBirdBonusInfo.v1023.is, () =>
            storage.nominationPools.earlyBirdBonusInfo.v1023.get(block)
        )
        .when(storage.nominationPools.earlyBirdBonusInfo.v1021.is, () =>
            storage.nominationPools.earlyBirdBonusInfo.v1021.get(block)
        )
        .otherwise(() => {
            throw new UnsupportedStorageError('NominationPools.BondedPools')
        })
}
