import { UnsupportedStorageError } from '~/util/errors'
import { BlockHeader } from '@subsquid/substrate-processor'
import { storage } from '~/type'
import { match } from 'ts-pattern'
import { EarlyBirdShares } from '~/pallet/nomination-pools/storage/types' 

export function earlyBirdShares(block: BlockHeader, poolId: number): Promise<EarlyBirdShares> {
    return match(block)
        .returnType<Promise<EarlyBirdShares>>()
        .when(
            () => storage.nominationPools.earlyBirdShares.enjinV1022.is(block),
            () => storage.nominationPools.earlyBirdShares.enjinV1022.getPairs(block, poolId)
        )
        .otherwise(() => {
            throw new UnsupportedStorageError(earlyBirdShares.name)
        })
}
