import { UnsupportedStorageError } from '~/util/errors'
import { BlockHeader, ParentBlockHeader } from '@subsquid/substrate-processor'
import { storage } from '~/type'
import { match } from 'ts-pattern'
import { SubPools } from '~/pallet/nomination-pools/storage/types'

export async function subPools(block: BlockHeader | ParentBlockHeader, poolId: number): Promise<SubPools | undefined> {
    return match(block)
        .returnType<Promise<SubPools | undefined>>()
        .when(
            () => storage.nominationPools.subPoolsStorage.enjinV100.is(block),
            () => storage.nominationPools.subPoolsStorage.enjinV100.get(block, poolId)
        )
        .otherwise(() => {
            throw new UnsupportedStorageError(subPools.name)
        })
}
