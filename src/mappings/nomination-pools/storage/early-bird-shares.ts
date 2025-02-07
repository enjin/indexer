import { UnsupportedStorageError } from '@enjin/indexer/common/errors'
import { BlockHeader } from '@subsquid/substrate-processor'
import { storage } from '../../../types/generated'
import { match } from 'ts-pattern'
import * as enjinV1022 from '@enjin/indexer/types/generated/enjinV1022'

type EarlyBirdShares = Promise<[k: [number, enjinV1022.AccountId32], v: enjinV1022.Perquintill | undefined][]>

export function earlyBirdShares(block: BlockHeader, poolId: number): EarlyBirdShares {
    return match(block)
        .returnType<EarlyBirdShares>()
        .when(storage.nominationPools.earlyBirdShares.enjinV1022.is, () =>
            storage.nominationPools.earlyBirdShares.enjinV1022.getPairs(block, poolId)
        )
        .otherwise(() => {
            throw new UnsupportedStorageError('NominationPools.BondedPools')
        })
}
